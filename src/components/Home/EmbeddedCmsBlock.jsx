import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContent } from '../../hooks/usePageContent';

const neutralizeBakedAnimations = (html) =>
  (html || '')
    .replace(/opacity:\s*0(?![.\d])/g, 'opacity:1')
    .replace(/scale\(\s*0(?:\.\d+)?\s*\)/g, 'scale(1)')
    .replace(/translate([XYZ]?)\(\s*-?\d+(?:\.\d+)?px\s*\)/g, 'translate$1(0px)');

const EmbeddedCmsBlock = ({ path, fallback = null }) => {
  const { i18n } = useTranslation();
  const { data, isLoading, isError } = usePageContent(path, i18n.language, {
    retry: false,
  });

  if (isLoading || isError || !data) {
    return fallback;
  }

  if (data.body) {
    return <div dangerouslySetInnerHTML={{ __html: neutralizeBakedAnimations(data.body) }} />;
  }

  return fallback;
};

export default EmbeddedCmsBlock;

