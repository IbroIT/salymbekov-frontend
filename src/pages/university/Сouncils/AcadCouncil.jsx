import { useTranslation } from 'react-i18next';
import React from 'react';

const AcademicCouncilPage = () => {
  const { t } = useTranslation();

  const councilMembers = [
    "Zhumadilov Amangeldi Zhumadiliovich – Chairman, PhD",
    "Zhumadilov Esengeldi Zhumadilov – Deputy Chairman, PhD",
    "Kazakov Avaz Asanovich – Secretary",
    "Esenamanov Ulukbek Emilbekovich",
    "Abdyldaev Rysbek Aldagandayeovich, MD, Professor",
    "Tulekeev Toktogazy Moldalievich, MD, Professor",
    "Uzakbaev Kamchibeck Askarbekovich, MD, Professor",
    "Atykanov Arystanbek Orozalievich, MD, Professor",
    "Monolov Nurbek Kytaybekovich, PhD, Associate Professor",
    "Imankulova Asel Sanzsyzbaevna, MD, Associate Professor",
    "Mazekova Nazgul Jolochievna, PhD, Associate Professor",
    "Umetalieva Maana Nurdinovna, PhD",
    "Junushalieva Nurzat Manasovna",
    "Tolubaeva Munara Jolchuyevna, PhD",
    "Bilgazyev Emil Bilgazyevich, PhD",
    "Akmatova Aizhan Toktomushevna",
    "Kulmatov Almaz Shayloobekovich",
    "Baktybekov Bekzhan Baktybekovich",
    "Jantaeva Tonya",
    "Representatives of the Student Council"
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2021/03/sotrudniki.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('academicCouncil.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Main Text */}
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-4 leading-relaxed">
              {t('academicCouncil.description1')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('academicCouncil.description2')}
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              {t('academicCouncil.description3')}
            </p>
          </div>

          {/* Council Composition */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {t('academicCouncil.compositionTitle')}
          </h2>

          {/* International Medical Faculty */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            {t('academicCouncil.facultyTitle')}
          </h3>

          {/* Council Members */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            {t('academicCouncil.membersTitle')}
          </h3>

          <div className="mb-8">
            {councilMembers.map((member, index) => (
              <div key={index} className="flex items-start mb-2">
                <span className="text-gray-600 mr-3 min-w-6">{index + 1}.</span>
                <span className="text-gray-700">{member}</span>
              </div>
            ))}
          </div>

          {/* Basis */}
          <p className="text-lg text-gray-700 font-medium">
            {t('academicCouncil.basis')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AcademicCouncilPage;