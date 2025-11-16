import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{t('navbar.services')}</h1>
      <p className="text-center mt-4">Here are our services.</p>
    </div>
  );
};

export default Services;