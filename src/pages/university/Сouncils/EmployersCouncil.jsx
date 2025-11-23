import React from 'react';
import { useTranslation } from 'react-i18next';

const EmployersCouncilPage = () => {
  const { t } = useTranslation();

  const tasksList = [
    "содействует развитию учебной, научной и воспитательной деятельности университета на основе активного участия деятельности университета;",
    "принимает участие в обсуждении по совершенствованию образовательных программ, учебных планов и программ в соответствии с реальными запросами потребителей.",
    "принимает участие в обсуждении и разработке стратегии по обеспечению качества образовании и самообследовании для оценки деятельности университета;",
    "участвует в образовательном процессе, проведении учебных и производственных практик , а также поддерживает развитие инновационной деятельности;",
    "содействует в развитии перспективных программ и проектов с учетом современных тенденций и требований рынка.",
    "содействует в привлечении местных и зарубежных специалистов для совместной подготовки студентов;",
    "содействует в трудоустройстве студентов и выпускников;",
    "содействует в решении вопросов повышения квалификации преподавателей и сотрудников;",
    "содействует в реализации информационной, общественной и выставочной деятельности, а также повышение имиджа университета на рынке образовательных услуг;",
    "привлечение студентов и научно-педагогических работников к реальной производственной и исследовательской деятельности предприятий и организаций – партнеров университета;",
    "рассматривает другие вопросы развития университета."
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
            {t('employersCouncil.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* General Provisions */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('employersCouncil.generalProvisions')}
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-4 leading-relaxed">
              {t('employersCouncil.provisionsText1')}
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              {t('employersCouncil.provisionsText2')}
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              {t('employersCouncil.provisionsText3')}
            </p>
          </div>

          {/* Goals and Tasks */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('employersCouncil.goalsAndTasks')}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-800 mb-6">
            <p className="text-lg mb-4 leading-relaxed">
              {t('employersCouncil.goalText')}
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            {t('employersCouncil.tasksTitle')}
          </h3>

          <div className="prose prose-lg max-w-none text-gray-800">
            <ul className="space-y-2 text-lg leading-relaxed">
              {tasksList.map((task, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployersCouncilPage;
