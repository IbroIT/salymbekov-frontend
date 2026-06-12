import * as cheerio from 'cheerio';

const SOURCE_PAGE_URL = 'https://salymbekov.com/en/latest-news/';
const WORDPRESS_POSTS_URL = 'https://salymbekov.com/wp-json/wp/v2/posts';
const WORDPRESS_CATEGORIES_URL = 'https://salymbekov.com/wp-json/wp/v2/categories';
const CACHE_TTL_MS = 10 * 60 * 1000;
const REQUEST_TIMEOUT_MS = 12000;

let cachedNews = null;
let cachedAt = 0;

const fetchWithTimeout = async (url) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json, text/html;q=0.9, */*;q=0.8',
        'User-Agent': 'salymbekov-frontend-news-proxy/1.0',
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response;
  } finally {
    clearTimeout(timeoutId);
  }
};

const stripHtml = (html = '') => cheerio.load(`<div>${html}</div>`).text().replace(/\s+/g, ' ').trim();

const absoluteUrl = (value) => {
  if (!value || typeof value !== 'string') return null;
  const cleanedValue = stripHtml(value)
    .replace(/^url\((['"]?)(.*?)\1\)$/i, '$2')
    .replace(/&amp;/g, '&')
    .trim();

  if (!cleanedValue || /\s/.test(cleanedValue)) return null;
  const normalizedValue = cleanedValue.startsWith('//') ? `https:${cleanedValue}` : cleanedValue;

  try {
    return new URL(normalizedValue, SOURCE_PAGE_URL).toString();
  } catch {
    return null;
  }
};

const formatDate = (dateString) => {
  if (!dateString) return '';

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

const normalizeDateFromListing = (dateText) => {
  const match = `${dateText}`.trim().match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (!match) return null;

  const [, day, month, year] = match;
  return `${year}-${month}-${day}`;
};

const pickFirstSrcsetUrl = (srcset) => {
  if (!srcset || typeof srcset !== 'string') return null;

  return srcset
    .split(',')
    .map((candidate) => candidate.trim().split(/\s+/)[0])
    .map(absoluteUrl)
    .find(Boolean) || null;
};

const getImageFromArticle = ($, element) => {
  const sourceElement = element.find('picture source').first();
  const imageElement = element.find('img').first();
  const candidates = [
    sourceElement.attr('srcset'),
    sourceElement.attr('data-srcset'),
    imageElement.attr('data-layzr'),
    imageElement.attr('data-src'),
    imageElement.attr('data-lazy-src'),
    imageElement.attr('data-original'),
    imageElement.attr('src'),
    imageElement.attr('srcset'),
  ];

  return candidates
    .map((candidate) => {
      if (!candidate) return null;
      if (`${candidate}`.includes(',')) return pickFirstSrcsetUrl(candidate);
      return absoluteUrl(candidate);
    })
    .find(Boolean) || null;
};

const normalizeWordPressPost = (post, categoriesMap, listingMap) => {
  const url = absoluteUrl(post.link);
  const listingData = listingMap.get(url);
  const categoryNames = (post.categories || [])
    .map((categoryId) => categoriesMap.get(categoryId))
    .filter(Boolean);
  const excerpt = stripHtml(post.excerpt?.rendered || '');

  return {
    id: String(post.id),
    title: stripHtml(post.title?.rendered || 'Untitled news'),
    date: formatDate(post.date),
    dateIso: post.date || null,
    categories: categoryNames.length ? categoryNames : listingData?.categories || [],
    url,
    image: listingData?.image || null,
    excerpt,
    source: 'salymbekov.com',
  };
};

const fetchJsonArray = async (url) => {
  const response = await fetchWithTimeout(url);
  const data = await response.json();
  return Array.isArray(data) ? data : [];
};

const parseListingPage = (html) => {
  const $ = cheerio.load(html);

  return $('article')
    .map((_, article) => {
      const element = $(article);
      const titleLink = element.find('.entry-title a, h2 a, h3 a, a[rel="bookmark"]').first();
      const url = absoluteUrl(titleLink.attr('href'));
      const rawDate = element.find('time, .posted-on').first().text().trim();
      const dateIso = normalizeDateFromListing(rawDate);
      const categories = element
        .find('.category a, .cat-links a')
        .map((__, category) => stripHtml($(category).text()))
        .get()
        .filter(Boolean);

      return {
        id: url || stripHtml(titleLink.text()),
        title: stripHtml(titleLink.text()),
        date: dateIso ? formatDate(dateIso) : rawDate,
        dateIso,
        categories,
        url,
        image: getImageFromArticle($, element),
        excerpt: stripHtml(element.find('.entry-summary, .excerpt, p').first().text()),
        source: 'salymbekov.com',
      };
    })
    .get()
    .filter((item) => item.title && item.url);
};

const getListingMaxPage = (html) => {
  const $ = cheerio.load(html);
  const pageNumbers = $('.page-numbers a, a.page-numbers')
    .map((_, link) => Number(stripHtml($(link).text())))
    .get()
    .filter(Number.isFinite);

  return Math.max(1, ...pageNumbers);
};

const fetchListingNewsMap = async () => {
  const firstResponse = await fetchWithTimeout(SOURCE_PAGE_URL);
  const firstHtml = await firstResponse.text();
  const maxPage = getListingMaxPage(firstHtml);
  const pageUrls = Array.from({ length: Math.max(0, maxPage - 1) }, (_, index) => {
    const page = index + 2;
    return `${SOURCE_PAGE_URL}page/${page}/`;
  });
  const pageHtml = await Promise.all(pageUrls.map(async (url) => {
    const response = await fetchWithTimeout(url);
    return response.text();
  }));
  const listingItems = [firstHtml, ...pageHtml].flatMap(parseListingPage);

  return new Map(listingItems.map((item) => [item.url, item]));
};

const uniqueByUrl = (items) => {
  const seen = new Set();

  return items.filter((item) => {
    if (!item.url || seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
};

const fetchWordPressNews = async () => {
  const perPage = 100;
  const fields = 'id,date,link,title,excerpt,categories,featured_media';
  const firstUrl = `${WORDPRESS_POSTS_URL}?per_page=${perPage}&page=1&_fields=${fields}`;
  const [firstResponse, listingMap] = await Promise.all([
    fetchWithTimeout(firstUrl),
    fetchListingNewsMap(),
  ]);
  const totalPages = Math.max(1, Number(firstResponse.headers.get('x-wp-totalpages') || 1));
  const firstPage = await firstResponse.json();
  const remainingUrls = Array.from({ length: totalPages - 1 }, (_, index) => {
    const page = index + 2;
    return `${WORDPRESS_POSTS_URL}?per_page=${perPage}&page=${page}&_fields=${fields}`;
  });

  const remainingPages = await Promise.all(remainingUrls.map(fetchJsonArray));
  const posts = [firstPage, ...remainingPages].flat().filter(Boolean);
  const categoryIds = [...new Set(posts.flatMap((post) => post.categories || []))];

  const categories = categoryIds.length
    ? await fetchJsonArray(`${WORDPRESS_CATEGORIES_URL}?per_page=100&include=${categoryIds.join(',')}&_fields=id,name`)
    : [];

  const categoriesMap = new Map(categories.map((category) => [category.id, stripHtml(category.name)]));

  return uniqueByUrl(posts
    .map((post) => normalizeWordPressPost(post, categoriesMap, listingMap))
    .filter((item) => item.url && item.title)
    .sort((a, b) => new Date(b.dateIso || 0) - new Date(a.dateIso || 0)));
};

const parseHtmlNewsFallback = async () => {
  const listingMap = await fetchListingNewsMap();
  return uniqueByUrl([...listingMap.values()]);
};

export const getSalymbekovNews = async ({ forceRefresh = false } = {}) => {
  const now = Date.now();

  if (!forceRefresh && cachedNews && now - cachedAt < CACHE_TTL_MS) {
    return {
      sourceUrl: SOURCE_PAGE_URL,
      cached: true,
      cachedAt: new Date(cachedAt).toISOString(),
      items: cachedNews,
    };
  }

  let items;

  try {
    items = await fetchWordPressNews();
  } catch {
    items = await parseHtmlNewsFallback();
  }

  if (!items.length && cachedNews) {
    return {
      sourceUrl: SOURCE_PAGE_URL,
      cached: true,
      stale: true,
      cachedAt: new Date(cachedAt).toISOString(),
      items: cachedNews,
    };
  }

  if (items.length) {
    cachedNews = items;
    cachedAt = now;
  }

  return {
    sourceUrl: SOURCE_PAGE_URL,
    cached: false,
    cachedAt: new Date(cachedAt).toISOString(),
    items,
  };
};
