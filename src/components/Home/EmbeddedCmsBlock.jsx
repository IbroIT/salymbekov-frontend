import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContent } from '../../hooks/usePageContent';

const neutralizeBakedAnimations = (html) =>
  (html || '')
    .replace(/opacity:\s*0(?![.\d])/g, 'opacity:1')
    .replace(/scale\(\s*0(?:\.\d+)?\s*\)/g, 'scale(1)')
    .replace(/translate([XYZ]?)\(\s*-?\d+(?:\.\d+)?px\s*\)/g, 'translate$1(0px)');

const normalizeCmsHtml = (html, media = []) => {
  const primaryImage =
    media.find((item) => item?.is_hero && item?.url) ||
    media.find((item) => item?.media_type === 'image' && item?.url);

  let normalized = neutralizeBakedAnimations(html);

  if (primaryImage?.url) {
    normalized = normalized.replace(/src=(['"])\/media\/[^'"]+\1/g, `src="${primaryImage.url}"`);
  }

  return normalized;
};

const EmbeddedCmsBlock = ({ path, fallback = null }) => {
  const { i18n } = useTranslation();
  const { data, isLoading, isError } = usePageContent(path, i18n.language, {
    retry: false,
  });

  if (isLoading || isError || !data) {
    return fallback;
  }

  if (data.body) {
    return <div dangerouslySetInnerHTML={{ __html: normalizeCmsHtml(data.body, data.media) }} />;
  }

  const primaryImage =
    data.media?.find((item) => item?.is_hero && item?.url) ||
    data.media?.find((item) => item?.media_type === 'image' && item?.url);

  if (primaryImage?.url) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <img
          src={primaryImage.url}
          alt={primaryImage.alt_text || data.title || 'CMS image'}
          className="w-full rounded-[2rem] object-cover shadow-xl"
        />
      </section>
    );
  }

  return fallback;
};

export default EmbeddedCmsBlock;
