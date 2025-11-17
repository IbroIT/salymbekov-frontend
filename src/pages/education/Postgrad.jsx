import React from 'react';
import { useTranslation } from 'react-i18next';

const Postgrad = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{t('educationSub.postgrad')}</h1>
      <p className="text-center mt-4">Content for Faculty of Postgraduate Education.</p>
    </div>
  );
};

export default Postgrad;
