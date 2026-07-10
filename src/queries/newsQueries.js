import { apiRequest, getDateLocale, normalizeLanguage } from '../api';

/**
 * Функция для загрузки всех новостей с пагинацией
 * Загружает все страницы до конца
 */
const fetchAllNewsPages = async (language, limit = 100) => {
  let allNews = [];
  const normalizedLanguage = normalizeLanguage(language);
  let nextUrl = `/presscentre/news/?lang=${normalizedLanguage}&limit=${limit}`;
  
  while (nextUrl) {
    try {
      const response = await apiRequest(nextUrl);
      const currentNews = response.results || response || [];
      allNews = [...allNews, ...currentNews];
      
      // Обрабатываем URL для следующей страницы
      if (response.next) {
        try {
          // Если это полный URL, извлекаем путь
          if (response.next.startsWith('http')) {
            const url = new URL(response.next);
            let path = url.pathname + url.search;
            if (path.startsWith('/api')) {
              path = path.substring(4);
            }
            nextUrl = path;
          } else {
            // Если это уже относительный путь
            nextUrl = response.next.startsWith('/api') 
              ? response.next.substring(4) 
              : response.next;
          }
        } catch (urlError) {
          console.error('Ошибка обработки URL пагинации:', urlError);
          nextUrl = null;
        }
      } else {
        nextUrl = null;
      }
      
      // Защита от бесконечного цикла
      if (allNews.length > 10000) {
        console.warn('Слишком много новостей, прерываем загрузку');
        break;
      }
    } catch (error) {
      console.error('Ошибка при загрузке страницы новостей:', error);
      // Если первая страница не загрузилась, выбрасываем ошибку
      if (allNews.length === 0) {
        throw error;
      }
      // Иначе возвращаем то, что успели загрузить
      break;
    }
  }
  
  return allNews;
};

/**
 * Трансформирует данные новости для использования в UI
 */
const transformNewsItem = (item, language) => {
  if (!item || !item.id) {
    return null;
  }
  
  let categoryId = null;
  if (item.category) {
    categoryId = typeof item.category === 'object' ? item.category.id : item.category;
  } else if (item.category_id) {
    categoryId = item.category_id;
  }

  const gallery = item.gallery || [];
  const image = item.image || gallery.find((photo) => photo?.image)?.image || null;
  
  try {
    return {
      id: item.id,
      title: item.title || 'Без заголовка',
      date: new Date(item.published_at || item.created_at).toLocaleDateString(getDateLocale(language), {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      category: categoryId ? categoryId.toString() : null,
      category_name: (item.category?.title || item.category?.name) || 'Без категории',
      image,
      previewImage: image, // для совместимости
      gallery,
      photos: item.photos || [],
      aspect_ratio: item.aspect_ratio || 'wide',
      description: item.short_description || (item.description ? item.description.substring(0, 200) + '...' : 'Нет описания'),
      summary: item.short_description || (item.description ? item.description.substring(0, 200) + '...' : 'Нет описания'), // для совместимости
      full_description: item.description || '',
      fullText: item.description || '', // для совместимости
      is_recommended: Boolean(item.is_recommended),
      created_at: item.published_at || item.created_at
    };
  } catch (error) {
    console.error('Ошибка при трансформации новости:', error, item);
    return null;
  }
};

/**
 * Query function для получения всех новостей
 */
export const fetchNewsList = async ({ queryKey }) => {
  // queryKey имеет структуру: ['news', 'list', language]
  const [, , language] = queryKey; // Берем третий элемент!
  const normalizedLanguage = normalizeLanguage(language);
  
  try {
    const newsArray = await fetchAllNewsPages(normalizedLanguage);
    
    if (!newsArray || newsArray.length === 0) {
      return [];
    }
    
    // Трансформируем каждую новость и фильтруем null значения
    const transformedNews = newsArray
      .map(item => transformNewsItem(item, normalizedLanguage))
      .filter(item => item !== null);
    
    // Сортируем по дате (новые первые)
    return transformedNews.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } catch (error) {
    console.error('Ошибка при загрузке списка новостей:', error);
    throw error;
  }
};

/**
 * Query function для получения одной новости по ID
 */
export const fetchNewsById = async ({ queryKey }) => {
  // queryKey имеет структуру: ['news', 'detail', id, language]
  const [, , id, language] = queryKey; // Берем третий и четвертый элементы!
  const normalizedLanguage = normalizeLanguage(language);
  
  try {
    // Пробуем прямой запрос по ID
    const directResponse = await apiRequest(`/presscentre/news/${id}/?lang=${normalizedLanguage}`);
    if (directResponse && directResponse.id) {
      return transformNewsItem(directResponse, normalizedLanguage);
    }
  } catch (directError) {
    console.log('Прямой запрос не удался, ищем в списке:', directError.message);
  }
  
  // Если прямой запрос не удался, ищем в списке всех новостей
  const allNews = await fetchAllNewsPages(normalizedLanguage);
  const newsItem = allNews.find(item => item.id.toString() === id.toString());
  
  if (!newsItem) {
    throw new Error('Новость не найдена');
  }
  
  return transformNewsItem(newsItem, normalizedLanguage);
};

/**
 * Query function для получения категорий
 */
export const fetchCategories = async ({ queryKey }) => {
  // queryKey имеет структуру: ['categories', language]
  const [, language] = queryKey; // Берем второй элемент
  const normalizedLanguage = normalizeLanguage(language);
  
  try {
    const categoriesData = await apiRequest(`/presscentre/categories/?lang=${normalizedLanguage}`);
    
    const categoriesArray = categoriesData.results || categoriesData || [];
    
    // Текст "Все категории" на разных языках
    const allCategoriesText = {
      'ru': 'Все категории',
      'kg': 'Бардык категориялар',
      'en': 'All categories'
    };
    
    return [
      { 
        id: 'all', 
        name: allCategoriesText[normalizedLanguage] || 'All categories', 
        title: allCategoriesText[normalizedLanguage] || 'All categories', 
        color: 'gray' 
      },
      ...categoriesArray.map(cat => ({
        id: cat.id.toString(),
        name: cat.title || cat.name || 'Категория',
        title: cat.title || cat.name || 'Категория',
        color: 'blue'
      }))
    ];
  } catch (error) {
    console.error('Ошибка при загрузке категорий:', error);
    // Возвращаем хотя бы категорию "Все"
    const allCategoriesText = {
      'ru': 'Все категории',
      'kg': 'Бардык категориялар',
      'en': 'All categories'
    };
    return [
      { 
        id: 'all', 
        name: allCategoriesText[normalizedLanguage] || 'All categories', 
        title: allCategoriesText[normalizedLanguage] || 'All categories', 
        color: 'gray' 
      }
    ];
  }
};

/**
 * Query keys для новостей - используются для идентификации запросов в кэше
 */
export const newsKeys = {
  all: ['news'],
  lists: () => [...newsKeys.all, 'list'],
  list: (language) => [...newsKeys.lists(), language],
  details: () => [...newsKeys.all, 'detail'],
  detail: (id, language) => [...newsKeys.details(), id, language],
  categories: (language) => ['categories', language],
};
