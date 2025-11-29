import React from 'react';
import { useTranslation } from 'react-i18next';

const StudentCommunities = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{t('studentSub.communities')}</h1>
      <p className="text-center mt-4">Content for Student Communities.</p>
    </div>
  );
};

export default StudentCommunities;
