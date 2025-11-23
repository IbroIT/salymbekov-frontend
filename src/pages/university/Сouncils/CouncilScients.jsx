import React from 'react';
import { useTranslation } from 'react-i18next';


const YoungScientistsCouncilPage = () => {
  const { t } = useTranslation();

  const councilMembers = [
    "Уметалиева М.Н. – аспирант",
    "Князев И.А. – аспирант",
    "Сырдыбаев А.Ж. – соискатель",
    "Сыдыкова С.Б. – соискатель",
    "Жолболдиева М. – соискатель",
    "Бопушева А. – соискатель"
  ];

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
            {t('youngScientistsCouncil.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* General Provisions */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('youngScientistsCouncil.generalProvisions')}
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-4 leading-relaxed">
              {t('youngScientistsCouncil.provisionsText1')}
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              {t('youngScientistsCouncil.provisionsText2')}
            </p>
          </div>

          {/* Goals and Tasks */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('youngScientistsCouncil.goalsAndTasks')}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-4 leading-relaxed">
              {t('youngScientistsCouncil.goalsText1')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('youngScientistsCouncil.goalsText2')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('youngScientistsCouncil.goalsText3')}
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              {t('youngScientistsCouncil.goalsText4')}
            </p>
          </div>

          {/* Council Composition */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('youngScientistsCouncil.compositionTitle')}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <div className="space-y-2">
              {councilMembers.map((member, index) => (
                <p key={index} className="text-gray-700">
                  {member}
                </p>
              ))}
            </div>
          </div>

          {/* Regulations Link */}
          <div className="mt-8">
            <a 
              href="https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-soveta-molodyh-uchenyh.pdf"
              className="text-blue-600 hover:text-blue-800 hover:underline text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('youngScientistsCouncil.regulationsLink')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YoungScientistsCouncilPage;