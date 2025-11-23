import React from 'react';
import { useTranslation } from 'react-i18next';

const StudentSupportCommissionPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://coolbackgrounds.imgix.net/1ImfDgm1Ze4X2YS2CRiQxN/a426817af36443afa06274e55836b3e3/pure-blue-background-0000ff.jpg?w=3840&q=60&auto=format,compress')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('studentSupportCommission.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* General Provisions */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('studentSupportCommission.generalProvisions')}
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-4 leading-relaxed">
              {t('studentSupportCommission.provisionsText1')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('studentSupportCommission.provisionsText2')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('studentSupportCommission.provisionsText3')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('studentSupportCommission.provisionsText4')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('studentSupportCommission.provisionsText5')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('studentSupportCommission.provisionsText6')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('studentSupportCommission.provisionsText7')}
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              {t('studentSupportCommission.provisionsText8')}
            </p>
          </div>

          {/* Regulations Link */}
          <div className="mt-8">
            <a 
              href="https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-socialnoj-podderzhke-studentov.pdf"
              className="text-blue-600 hover:text-blue-800 hover:underline text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('studentSupportCommission.regulationsLink')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentSupportCommissionPage;
