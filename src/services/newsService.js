export const fetchNews = async ({ limit } = {}) => {
  const params = new URLSearchParams();

  if (limit) {
    params.set('limit', String(limit));
  }

  const endpoint = `/api/news${params.toString() ? `?${params.toString()}` : ''}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error('Unable to load news');
  }

  const data = await response.json();
  return Array.isArray(data.items) ? data.items : [];
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
