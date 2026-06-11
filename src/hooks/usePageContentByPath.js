import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getPageContentByPath } from '../api';

export const usePageContentByPath = (path) => {
  const { i18n } = useTranslation();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(Boolean(path));

  useEffect(() => {
    let ignore = false;

    const fetchContent = async () => {
      if (!path) return;

      setLoading(true);

      try {
        const data = await getPageContentByPath(path, i18n.language || 'ru');
        if (!ignore) {
          setContent(data);
        }
      } catch (error) {
        console.error(`Failed to fetch page by path: ${path}`, error);
        if (!ignore) {
          setContent(null);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchContent();

    return () => {
      ignore = true;
    };
  }, [path, i18n.language]);

  return { content, loading };
};
