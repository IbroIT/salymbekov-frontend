import { useQuery } from '@tanstack/react-query';
import { getPageContentByPath, normalizeLanguage } from '../api';

export const pageContentKeys = {
  all: ['page-content'],
  byPath: (path, language) => [...pageContentKeys.all, normalizeLanguage(language), path],
};

export const usePageContent = (path, language, options = {}) => {
  const normalizedLanguage = normalizeLanguage(language);

  return useQuery({
    queryKey: pageContentKeys.byPath(path, normalizedLanguage),
    queryFn: () => getPageContentByPath(path, normalizedLanguage),
    enabled: Boolean(path) && options.enabled !== false,
    retry: false,
    ...options,
  });
};
