import React from 'react';
import { useTranslation } from 'react-i18next';


const EditorialCouncilPage = () => {
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
            {t('editorialCouncil.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Main Text */}
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-4 leading-relaxed">
              {t('editorialCouncil.text1')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('editorialCouncil.text2')}
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              {t('editorialCouncil.text3')}
            </p>
          </div>

          {/* Regulations Link */}
          <div className="mt-8">
            <a 
              href="https://salymbekov.com/wp-content/uploads/2022/05/sostav-redsoveta-2021-i-2022.pdf"
              className="text-blue-600 hover:text-blue-800 hover:underline text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('editorialCouncil.regulationsLink')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditorialCouncilPage;