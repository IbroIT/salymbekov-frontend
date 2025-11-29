import React from 'react';
import { useTranslation } from 'react-i18next';

const Conditions = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{t('studentSub.conditions')}</h1>
      <p className="text-center mt-4">Content for Conditions and Opportunities.</p>
    </div>
  );
};

export default Conditions;
