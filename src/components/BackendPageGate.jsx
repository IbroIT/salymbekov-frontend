import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePageContentByPath } from '../hooks/usePageContentByPath';
import DynamicPage from '../pages/DynamicPage';

const LEGACY_FRONTEND_PATHS = new Set([
  '/',
  '/news',
  '/news/NewsHome',
  '/press/news',
]);

const isLegacyFrontendPath = (path) => (
  LEGACY_FRONTEND_PATHS.has(path) || /^\/press\/news\/[^/]+$/.test(path)
);

const hasRenderableContent = (content) => {
  if (!content) return false;
  // Keep the existing static page until an editor explicitly opts into
  // replacing the whole route with CMS content.
  if (content.data?.render_as_page !== true) return false;

  const sections = Array.isArray(content.data?.sections) ? content.data.sections : [];
  const media = Array.isArray(content.media) ? content.media : [];
  const bodyText = typeof content.body === 'string' ? content.body.trim() : '';

  return Boolean(
    bodyText ||
    sections.length > 0 ||
    media.length > 0
  );
};

const BackendPageGate = ({ children }) => {
  const location = useLocation();
  const { content, loading } = usePageContentByPath(location.pathname);

  if (isLegacyFrontendPath(location.pathname)) {
    return children;
  }

  if (!loading && hasRenderableContent(content)) {
    return <DynamicPage content={content} />;
  }

  return children;
};

export default BackendPageGate;
