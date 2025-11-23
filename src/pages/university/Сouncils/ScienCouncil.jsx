import React from 'react';
import { useTranslation } from 'react-i18next';

const ScientificTechnicalCouncilPage = () => {
  const { t } = useTranslation();

  const councilMembers = [
    "Toktogazy Moldalievich Tulekeev, MD, prof. – chairman;",
    "Uzakbaev Kamchibek Askarbekovich, MD, prof. – deputy chairman;",
    "Imankulova Asel Sansyzbaevna, MD, prof. – scientific secretary;"
  ];

  const otherMembers = [
    "Zhumadilov Esengeldi Zhumadilovich, PhD,",
    "Zhumadilov Esengeldi Zhumadilovich, PhD,",
    "Abdyldaev Rysbek Aldagandaevich, MD, prof.",
    "Atikanov Arystanbek Orozalyevich, MD, prof.",
    "Monolov Nurbek Chynbekovich MD, prof.",
    "Umetalieva Maana Nurdinovna, PhD., Assoc.",
    "Tolubaeva Munara Zholchuevna, PhD.,",
    "Bilgazyev Emil Bilgazyevich PhD.,",
    "Kazakov Avaz Asanovich,",
    "Junushalieva Nurzat Manasovna.",
    "Mazekova Nazgul Zholochievna, Ph.D., Assoc.",
    "Tokusheva Tolobubu Sagynbekovna F.I.C., Assoc.",
    "Malkawi Malik Mohammad PhD.,",
    "Sarlykov Bekbolot Kanatbekovich PhD.,",
    "Representatives of the Council of Young Scientists,",
    "Representatives of the Student Scientific Association."
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2022/05/dokumenty-stopka-dokumentov.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('scientificTechnicalCouncil.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* General Provisions */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('scientificTechnicalCouncil.generalProvisions')}
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-4 leading-relaxed">
              {t('scientificTechnicalCouncil.provisionsText1')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('scientificTechnicalCouncil.provisionsText2')}
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              {t('scientificTechnicalCouncil.provisionsText3')}
            </p>
          </div>

          {/* Goals and Tasks */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('scientificTechnicalCouncil.goalsAndTasks')}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-800 mb-6">
            <p className="text-lg mb-4 leading-relaxed">
              {t('scientificTechnicalCouncil.goalText')}
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            {t('scientificTechnicalCouncil.mainTasks')}
          </h3>

          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
              <li>{t('scientificTechnicalCouncil.task1')}</li>
              <li>{t('scientificTechnicalCouncil.task2')}</li>
              <li>{t('scientificTechnicalCouncil.task3')}</li>
              <li>{t('scientificTechnicalCouncil.task4')}</li>
              <li>{t('scientificTechnicalCouncil.task5')}</li>
              <li>{t('scientificTechnicalCouncil.task6')}</li>
              <li>{t('scientificTechnicalCouncil.task7')}</li>
              <li>{t('scientificTechnicalCouncil.task8')}</li>
              <li>{t('scientificTechnicalCouncil.task9')}</li>
              <li>{t('scientificTechnicalCouncil.task10')}</li>
            </ul>
          </div>

          {/* Council Composition */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('scientificTechnicalCouncil.compositionTitle')}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-800 mb-6">
            <div className="space-y-2 mb-4">
              {councilMembers.map((member, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-gray-600 mr-3 min-w-6">{index + 1}.</span>
                  <span className="text-gray-700">{member}</span>
                </div>
              ))}
            </div>

            <p className="text-lg font-medium mb-2">members:</p>
            
            <div className="space-y-1">
              {otherMembers.map((member, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-gray-600 mr-3">–</span>
                  <span className="text-gray-700">{member}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Link */}
          <div className="mt-8">
            <a 
              href="https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-nauchno-tehnicheskom-sovete.pdf"
              className="text-blue-600 hover:text-blue-800 hover:underline text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('scientificTechnicalCouncil.downloadLink')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScientificTechnicalCouncilPage;