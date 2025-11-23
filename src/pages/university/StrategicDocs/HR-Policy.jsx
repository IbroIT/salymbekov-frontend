
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const HRPolicyPage = () => {
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
      title: t('hrPolicy.section1.title'),
      content: t('hrPolicy.section1.content')
    },
    {
      id: 2,
      title: t('hrPolicy.section2.title'),
      content: t('hrPolicy.section2.content')
    },
    {
      id: 3,
      title: t('hrPolicy.section3.title'),
      content: t('hrPolicy.section3.content')
    },
    {
      id: 4,
      title: t('hrPolicy.section4.title'),
      content: t('hrPolicy.section4.content')
    },
    {
      id: 5,
      title: t('hrPolicy.section5.title'),
      content: t('hrPolicy.section5.content')
    },
    {
      id: 6,
      title: t('hrPolicy.section6.title'),
      content: t('hrPolicy.section6.content')
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
            {t('hrPolicy.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
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

export default HRPolicyPage;