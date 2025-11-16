import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{t('navbar.contact')}</h1>
      <p className="text-center mt-4">Contact us here.</p>
    </div>
  );
};

export default Contact;