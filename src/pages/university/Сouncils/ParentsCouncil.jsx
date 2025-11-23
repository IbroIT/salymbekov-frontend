import React from 'react';
import { useTranslation } from 'react-i18next';

const ParentsCouncilPage = () => {
  const { t } = useTranslation();

  const tasksList = [
    "постоянное участия родителей в реализации программ воспитания, сопровождения и профессионального воспитания обучающихся Салымбеков университета,",
    "оказание консультаций и предложений услуг родителям (законным представителям) обучающихся Салымбеков университета."
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
            {t('parentsCouncil.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Main Text */}
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-6 leading-relaxed">
              {t('parentsCouncil.mainText')}
            </p>
          </div>

          {/* Tasks Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('parentsCouncil.tasksTitle')}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-800">
            <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed">
              {tasksList.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentsCouncilPage;
