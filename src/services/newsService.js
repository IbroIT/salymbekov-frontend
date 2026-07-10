import { apiRequest, normalizeLanguage } from '../api';

const fetchAllNewsPages = async (language = 'ru', limit = 100) => {
  const items = [];
  let nextUrl = `/presscentre/news/?lang=${normalizeLanguage(language)}&limit=${limit}`;

  while (nextUrl) {
    const response = await apiRequest(nextUrl);
    const pageItems = response.results || response || [];
    items.push(...pageItems);

    if (!response.next) {
      break;
    }

    if (response.next.startsWith('http')) {
      const url = new URL(response.next);
      nextUrl = `${url.pathname}${url.search}`.replace(/^\/api/, '');
    } else {
      nextUrl = response.next.replace(/^\/api/, '');
    }
  }

  return items;
};

const formatDate = (dateString, language) => {
  if (!dateString) return '';

  return new Date(dateString).toLocaleDateString(language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const getNewsImage = (item) => (
  item.image || item.gallery?.find((photo) => photo?.image)?.image || null
);

const transformNewsItem = (item, language) => {
  const gallery = item.gallery || [];

  return {
    id: item.id,
    title: item.title,
    excerpt: item.short_description || '',
    date: formatDate(item.published_at || item.created_at, language),
    dateIso: item.published_at || item.created_at,
    categories: item.category?.title ? [item.category.title] : [],
    image: getNewsImage(item),
    gallery,
    sourceUrl: item.source_url || '',
  };
};

export const fetchNews = async ({ limit, language = 'ru' } = {}) => {
  const items = await fetchAllNewsPages(language);
  const sortedItems = items
    .map((item) => transformNewsItem(item, language))
    .sort((a, b) => new Date(b.dateIso || 0) - new Date(a.dateIso || 0));

  return limit ? sortedItems.slice(0, limit) : sortedItems;
};

export const getNewsCategories = (items = []) => {
  const uniqueCategories = new Set();

  items.forEach((item) => {
    (item.categories || []).forEach((category) => {
      if (category) uniqueCategories.add(category);
    });
  });

  return Array.from(uniqueCategories).sort((a, b) => a.localeCompare(b));
};
