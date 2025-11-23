import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';

const Rector = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section с фоновым изображением */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("https://coolbackgrounds.imgix.net/1ImfDgm1Ze4X2YS2CRiQxN/a426817af36443afa06274e55836b3e3/pure-blue-background-0000ff.jpg?w=3840&q=60&auto=format,compress")` }} // Замените на реальный URL
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('rector.hero.title')}</h1>
        </div>
      </section>

      {/* Основной контент */}
      <div className="container mx-auto px-6 py-12">
        {/* Заголовок обращения */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('rector.address.title')}
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t('rector.address.greeting')}
          </h3>
        </div>

        {/* Текст с изображением в левой стороне */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center justify-center">
            <img 
              src="https://salymbekov.com/wp-content/uploads/2021/01/%D0%96%D1%83%D0%BC%D0%B0%D0%B4%D0%B8%D0%BB%D0%BE%D0%B2-%D0%AD%D1%81%D0%B5%D0%BD%D0%B3%D0%B5%D0%BB%D0%B4%D0%B8-%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%A1%D0%B0%D0%BB%D1%8B%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82-1024x683.jpg" // Замените на реальный URL
              alt={t('rector.rectorImageAlt')}
              className="w-full h-auto"
            />
          </div>
          <div className="flex items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('rector.description1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('rector.description2')}
              </p>
            </div>
          </div>
        </div>

        {/* Дополнительный текст */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('rector.description3')}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('rector.description4')}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('rector.description5')}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('rector.description6')}
            </p>
          </div>
        </div>

        {/* Подпись - строго с левой стороны */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="space-y-3">
            <p className="text-gray-700 text-lg">
              {t('rector.signature.respectfully')}
            </p>
            <p className="text-gray-700 text-xl font-semibold">
              {t('rector.signature.position')}
            </p>
            <p className="text-gray-700 text-lg">
              {t('rector.signature.name')}
            </p>
          </div>
        </div>

        {/* Кнопка для скачивания PDF */}
        <div className="max-w-4xl mx-auto mb-12">
          <a 
            href="https://salymbekov.com/wp-content/uploads/2023/03/rezjume-jesengeldi_2022.pdf" // Замените на реальный URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            <FaDownload className="mr-2" />
            {t('rector.downloadButton')}
          </a>
        </div>

        {/* Серая полоса */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="border-t border-gray-300"></div>
        </div>

        {/* Проректор по внешним связям и развитию */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t('rector.viceRectors.externalRelations.title')}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div className="flex items-center justify-center">
              <img 
                src="https://salymbekov.com/wp-content/uploads/2023/06/qip-shot-screen-131-300x288.png" // Замените на реальный URL
                alt={t('rector.viceRectors.externalRelations.imageAlt')}
                className="w-full h-auto"
              />
            </div>
            <div className="flex items-center">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('rector.viceRectors.externalRelations.description')}
              </p>
            </div>
          </div>

          <a 
            href="https://salymbekov.com/wp-content/uploads/2023/03/rezjume-kazakova-a.a..pdf" // Замените на реальный URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            <FaDownload className="mr-2" />
            {t('rector.downloadButton')}
          </a>
        </div>

        {/* Серая полоса */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="border-t border-gray-300"></div>
        </div>

        {/* Проректор по Учебно-Воспитательной работе */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t('rector.viceRectors.educationalWork.title')}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div className="flex items-center justify-center">
              <img 
                src="https://salymbekov.com/wp-content/uploads/2021/04/tulekeev-toktogazy-moldalievich-300x200.jpg" // Замените на реальный URL
                alt={t('rector.viceRectors.educationalWork.imageAlt')}
                className="w-full h-auto"
              />
            </div>
            <div className="flex items-center">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('rector.viceRectors.educationalWork.description')}
              </p>
            </div>
          </div>

          <a 
            href="https://salymbekov.com/wp-content/uploads/2023/03/rezjume-tulekeeva.pdf" // Замените на реальный URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            <FaDownload className="mr-2" />
            {t('rector.downloadButton')}
          </a>
        </div>

        {/* Серая полоса */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="border-t border-gray-300"></div>
        </div>

        {/* Проректор по Клинической работе */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t('rector.viceRectors.clinicalWork.title')}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div className="flex items-center justify-center">
              <img 
                src="https://salymbekov.com/wp-content/uploads/2021/03/monolov-nurbek-kytajbekovich-300x200.jpg" // Замените на реальный URL
                alt={t('rector.viceRectors.clinicalWork.imageAlt')}
                className="w-full h-auto"
              />
            </div>
            <div className="flex items-center">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('rector.viceRectors.clinicalWork.description')}
              </p>
            </div>
          </div>

          <a 
            href="https://salymbekov.com/wp-content/uploads/2023/03/resume-nurbek-monolov.pdf" // Замените на реальный URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            <FaDownload className="mr-2" />
            {t('rector.downloadButton')}
          </a>
        </div>

        {/* Серая полоса */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="border-t border-gray-300"></div>
        </div>

        {/* Проректор по государственному языку и науке */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t('rector.viceRectors.stateLanguage.title')}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div className="flex items-center justify-center">
              <img 
                src="https://salymbekov.com/wp-content/uploads/2021/04/mazekova-nazgul-zholochievna-300x200.jpg" // Замените на реальный URL
                alt={t('rector.viceRectors.stateLanguage.imageAlt')}
                className="w-full h-auto"
              />
            </div>
            <div className="flex items-center">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('rector.viceRectors.stateLanguage.description')}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Rector;