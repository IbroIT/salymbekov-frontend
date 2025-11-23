// components/CharterPage.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CharterPage = () => {
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
      title: t('charter.section1.title'),
      content: t('charter.section1.content')
    },
    {
      id: 2,
      title: t('charter.section2.title'),
      content: t('charter.section2.content')
    },
    {
      id: 3,
      title: t('charter.section3.title'),
      content: t('charter.section3.content')
    },
    {
      id: 6,
      title: t('charter.section6.title'),
      content: t('charter.section6.content')
    },
    {
      id: 8,
      title: t('charter.section8.title'),
      content: t('charter.section8.content')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-28 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://coolbackgrounds.imgix.net/1ImfDgm1Ze4X2YS2CRiQxN/a426817af36443afa06274e55836b3e3/pure-blue-background-0000ff.jpg?w=3840&q=60&auto=format,compress')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
            {t('charter.title')}
          </h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Charter Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-8 py-6 text-left bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                      {section.title}
                    </h2>
                    <div className={`transform transition-transform duration-300 ${openSections[section.id] ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openSections[section.id] ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 py-8 bg-white">
                    <div className="prose prose-lg max-w-none text-gray-800">
                      <div className="space-y-6 text-lg leading-relaxed">
                        {section.content.split('\n\n').map((paragraph, index) => (
                          paragraph.trim() && (
                            <div key={index} className="mb-6 last:mb-0">
                              {paragraph.split('\n').map((line, lineIndex, lines) => {
                                // Проверяем, является ли строка заголовком статьи
                                if (line.match(/^(Статья|Article|1-статья)\s*\d+/)) {
                                  return (
                                    <h3 key={lineIndex} className="text-2xl font-bold text-blue-800 mb-4 mt-6 first:mt-0 border-l-4 border-blue-600 pl-4">
                                      {line}
                                    </h3>
                                  );
                                }
                                // Проверяем, является ли строка подзаголовком (например, "1.1. Основные цели")
                                else if (line.match(/^\d+\.\d+\./)) {
                                  return (
                                    <h4 key={lineIndex} className="text-xl font-semibold text-purple-700 mb-3 mt-4">
                                      {line}
                                    </h4>
                                  );
                                }
                                // Проверяем, является ли строка пунктом списка
                                else if (line.match(/^[•\-]\s/) || line.match(/^\d+\.\s/)) {
                                  return (
                                    <div key={lineIndex} className="flex items-start mb-3">
                                      <span className="text-blue-500 mr-3 mt-1">•</span>
                                      <span className="text-gray-700 flex-1">{line.replace(/^[•\-]\s/, '').replace(/^\d+\.\s/, '')}</span>
                                    </div>
                                  );
                                }
                                // Обычный параграф
                                else if (line.trim()) {
                                  return (
                                    <p key={lineIndex} className="mb-4 text-gray-700 leading-8">
                                      {line}
                                    </p>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          )
                        ))}
                      </div>
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

export default CharterPage;