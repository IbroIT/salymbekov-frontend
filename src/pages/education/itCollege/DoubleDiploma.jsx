import React from 'react';
import { useTranslation } from 'react-i18next';

const DoubleDiploma = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{t('404')}</h1>
      <p className="text-center mt-4">Error</p>
    </div>
  );
};

export default DoubleDiploma;
