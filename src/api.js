// API configuration and request helper
const DEFAULT_API_BASE_URL = import.meta.env.DEV
  ? 'http://127.0.0.1:8000/api'
  : 'https://salymbekov-backend-f4c797e9b169.herokuapp.com/api';

const LEGACY_API_BASE_URL = import.meta.env.DEV
  ? '/legacy-api'
  : 'https://salymbekov-backend-f4c797e9b169.herokuapp.com/api';
const API_BASE_URL = import.meta.env.VITE_API_URL || DEFAULT_API_BASE_URL;

const getBaseUrlForEndpoint = (endpoint) => {
  if (
    endpoint.startsWith('/banners/')
    || endpoint.startsWith('/presscentre/')
    || endpoint.startsWith('/partners/')
  ) {
    return LEGACY_API_BASE_URL;
  }

  return API_BASE_URL;
};

// Helper function for making API requests
export const apiRequest = async (endpoint, options = {}, requestConfig = {}) => {
  // Убеждаемся, что endpoint начинается с /
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const baseUrl = requestConfig.baseUrl || getBaseUrlForEndpoint(normalizedEndpoint);
  const url = `${baseUrl}${normalizedEndpoint}`;

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
      if (requestConfig.silent404 && response.status === 404) {
        return null;
      }
      console.error('API Error Response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (requestConfig.silent404 && error?.message?.includes('status: 404')) {
      return null;
    }
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

export const getPartners = async (lang = 'ru') => {
  return apiRequest(`/partners/?lang=${lang}`);
};

export const getAcademicCouncil = async (lang = 'ru') => {
  return apiRequest(`/academic-council/?lang=${lang}`);
};

export const getDevelopmentCouncil = async (lang = 'ru') => {
  return apiRequest(`/development-council/?lang=${lang}`);
}

export const getScientificTechnicalCouncil = async (lang = 'ru') => {
  return apiRequest(`/scientific-technical-council/?lang=${lang}`);
};

export const getPageContent = async (slug, lang = 'ru') => {
  return apiRequest(`/pages/${slug}/?lang=${lang}`);
};

export const getPageContentByPath = async (path, lang = 'ru') => {
  const encodedPath = encodeURIComponent(path || '/');
  return apiRequest(`/pages/by-path/?path=${encodedPath}&lang=${lang}`, {}, { silent404: true });
};
