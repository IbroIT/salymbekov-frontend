import React from 'react';
import { useTranslation } from 'react-i18next';

const ManagementScience = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{t('scienceSub.management')}</h1>
      <p className="text-center mt-4">Content for Science Management Bodies.</p>
    </div>
  );
};

export default ManagementScience;