import React from 'react';
import { useTranslation } from 'react-i18next';

const ITCollege = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{t('educationSub.itCollege')}</h1>
      <p className="text-center mt-4">Content for International IT and Business College.</p>
    </div>
  );
};

export default ITCollege;