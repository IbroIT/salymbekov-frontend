
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const StudentCouncilPage = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 1,
      title: t('studentCouncil.section1.title'),
      content: t('studentCouncil.section1.content')
    },
    {
      id: 2,
      title: t('studentCouncil.section2.title'),
      content: t('studentCouncil.section2.content')
    },
    {
      id: 3,
      title: t('studentCouncil.section3.title'),
      content: t('studentCouncil.section3.content')
    },
    {
      id: 4,
      title: t('studentCouncil.section4.title'),
      content: t('studentCouncil.section4.content')
    },
    {
      id: 5,
      title: t('studentCouncil.section5.title'),
      content: t('studentCouncil.section5.content')
    },
    {
      id: 6,
      title: t('studentCouncil.section6.title'),
      content: t('studentCouncil.section6.content')
    }
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
            {t('studentCouncil.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* About Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('studentCouncil.aboutTitle')}
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-6 leading-relaxed">
              {t('studentCouncil.aboutText')}
            </p>
          </div>

          {/* Goals Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('studentCouncil.goalsTitle')}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-4 leading-relaxed">
              {t('studentCouncil.goalText')}
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {t('studentCouncil.tasksTitle')}
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed mb-6">
              <li>{t('studentCouncil.task1')}</li>
              <li>{t('studentCouncil.task2')}</li>
              <li>{t('studentCouncil.task3')}</li>
              <li>{t('studentCouncil.task4')}</li>
              <li>{t('studentCouncil.task5')}</li>
              <li>{t('studentCouncil.task6')}</li>
              <li>{t('studentCouncil.task7')}</li>
              <li>{t('studentCouncil.task8')}</li>
              <li>{t('studentCouncil.task9')}</li>
            </ul>

            <p className="text-lg font-medium">
              {t('studentCouncil.regulations')}
            </p>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h3>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openSections[section.id] ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 bg-white">
                    <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentCouncilPage;