import React from 'react';
import { useTranslation } from 'react-i18next';

const Center = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{t('educationSub.center')}</h1>
      <p className="text-center mt-4">Content for Education and Innovation Center (Naryn).</p>
    </div>
  );
};

export default Center;
