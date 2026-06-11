import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getPageContent } from '../api';

const normalizeResponse = (response) => {
  if (!response) return null;
  return response.results ? response.results : response;
};

export const usePageContent = (slug, fallback = null) => {
  const { i18n } = useTranslation();
  const [content, setContent] = useState(fallback);
  const [loading, setLoading] = useState(Boolean(slug));
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchContent = async () => {
      if (!slug) return;

      setLoading(true);
      setError(null);

      try {
        const response = await getPageContent(slug, i18n.language || 'ru');
        const data = normalizeResponse(response);

        if (!ignore) {
          setContent(data || fallback);
        }
      } catch (err) {
        console.error(`Failed to fetch page content: ${slug}`, err);
        if (!ignore) {
          setContent(fallback);
          setError(err);
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
  }, [slug, i18n.language]);

  const mediaByKey = useMemo(() => {
    const media = content?.media || [];
    return media.reduce((acc, item) => {
      if (item.key) acc[item.key] = item;
      return acc;
    }, {});
  }, [content]);

  return { content, mediaByKey, loading, error };
};
