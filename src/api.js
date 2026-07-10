// API configuration and request helper
const DEFAULT_API_BASE_URL = import.meta.env.DEV
  ? 'http://127.0.0.1:8000/api'
  : 'https://salymbekov-backend-f4c797e9b169.herokuapp.com/api';

const API_BASE_URL = import.meta.env.VITE_API_URL || DEFAULT_API_BASE_URL;

export const normalizeLanguage = (lang = 'ru') => {
  const baseLang = `${lang}`.toLowerCase().split('-')[0];

  if (baseLang === 'ky') {
    return 'kg';
  }

  return ['ru', 'en', 'kg'].includes(baseLang) ? baseLang : 'ru';
};

export const getDateLocale = (lang = 'ru') => {
  const normalizedLanguage = normalizeLanguage(lang);

  if (normalizedLanguage === 'kg') {
    return 'ky-KG';
  }

  if (normalizedLanguage === 'en') {
    return 'en-US';
  }

  return 'ru-RU';
};

// Helper function for making API requests
export const apiRequest = async (endpoint, options = {}) => {
  // Убеждаемся, что endpoint начинается с /
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${API_BASE_URL}${normalizedEndpoint}`;

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API request failed:', error.message);
    throw error;
  }
};

// Specific API functions
export const getCategories = async (lang = 'ru') => {
  return apiRequest(`/presscentre/categories/?lang=${lang}`);
};

export const getNews = async (lang = 'ru') => {
  return apiRequest(`/presscentre/news/?lang=${lang}`);
};

export const getNewsById = async (id, lang = 'ru') => {
  return apiRequest(`/presscentre/news/${id}/?lang=${lang}`);
};

export const getBanners = async () => {
  return apiRequest('/banners/');
};

export const getPartners = async () => {
  return apiRequest('/partners/');
};

export const getAcademicCouncil = async (lang = 'ru') => {
  return apiRequest(`/academic-council/?lang=${lang}`);
};

export const getDevelopmentCouncil = async (lang = 'ru') => {
  return apiRequest(`/development-council/?lang=${normalizeLanguage(lang)}`);
};

export const getScientificTechnicalCouncil = async (lang = 'ru') => {
  return apiRequest(`/scientific-technical-council/?lang=${normalizeLanguage(lang)}`);
};

export const getPageContentByPath = async (path, lang = 'ru') => {
  const normalizedPath = path?.startsWith('/') ? path : `/${path || ''}`;
  const encodedPath = encodeURIComponent(normalizedPath);
  return apiRequest(`/pages/by-path/?path=${encodedPath}&lang=${normalizeLanguage(lang)}`);
};
