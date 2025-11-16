import React from 'react';
import { useTranslation } from 'react-i18next';

const MFM = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{t('educationSub.mfm')}</h1>
      <p className="text-center mt-4">Content for International Faculty of Medicine.</p>
    </div>
  );
};

export default MFM;