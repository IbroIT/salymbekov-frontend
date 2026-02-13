// API configuration and request helper
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://salymbekov-backend-f4c797e9b169.herokuapp.com/api';

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

export const getAcademicCouncil = async (lang = 'ru') => {
  return apiRequest(`/academic-council/?lang=${lang}`);
};