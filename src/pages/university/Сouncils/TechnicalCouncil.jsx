import React from 'react';
import { useTranslation } from 'react-i18next';

const MethodologicalCouncilPage = () => {
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
            {t('methodologicalCouncil.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* General Provisions */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('methodologicalCouncil.generalProvisions')}
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-4 leading-relaxed">
              {t('methodologicalCouncil.provisionsText1')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('methodologicalCouncil.provisionsText2')}
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              {t('methodologicalCouncil.provisionsText3')}
            </p>
          </div>

          {/* Structure and Interaction */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('methodologicalCouncil.structureTitle')}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-4 leading-relaxed">
              {t('methodologicalCouncil.structureText1')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('methodologicalCouncil.structureText2')}
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              {t('methodologicalCouncil.structureText3')}
            </p>
          </div>

          {/* Goals and Tasks */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('methodologicalCouncil.goalsTitle')}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-800 mb-6">
            <p className="text-lg mb-4 leading-relaxed">
              {t('methodologicalCouncil.goalText')}
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            {t('methodologicalCouncil.mainTasks')}
          </h3>

          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
              <li>{t('methodologicalCouncil.task1')}</li>
              <li>{t('methodologicalCouncil.task2')}</li>
              <li>{t('methodologicalCouncil.task3')}</li>
              <li>{t('methodologicalCouncil.task4')}</li>
              <li>{t('methodologicalCouncil.task5')}</li>
              <li>{t('methodologicalCouncil.task6')}</li>
              <li>{t('methodologicalCouncil.task7')}</li>
              <li>{t('methodologicalCouncil.task8')}</li>
              <li>{t('methodologicalCouncil.task9')}</li>
              <li>{t('methodologicalCouncil.task10')}</li>
              <li>{t('methodologicalCouncil.task11')}</li>
              <li>{t('methodologicalCouncil.task12')}</li>
              <li>{t('methodologicalCouncil.task13')}</li>
              <li>{t('methodologicalCouncil.task14')}</li>
              <li>{t('methodologicalCouncil.task15')}</li>
              <li>{t('methodologicalCouncil.task16')}</li>
            </ul>
          </div>

          {/* Regulations Link */}
          <div className="mt-8">
            <a 
              href="https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-ob-ums.pdf"
              className="text-blue-600 hover:text-blue-800 hover:underline text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('methodologicalCouncil.regulationsLink')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodologicalCouncilPage;