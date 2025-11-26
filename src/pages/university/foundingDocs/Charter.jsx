import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaBalanceScale,
  FaFlag,
  FaChevronDown
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

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
      content: t('charter.section1.content'),
      icon: <FaFlag className="text-white" />
    },
    {
      id: 2,
      title: t('charter.section2.title'),
      content: t('charter.section2.content'),
      icon: <FaBalanceScale className="text-white" />
    },
    {
      id: 3,
      title: t('charter.section3.title'),
      content: t('charter.section3.content'),
      icon: <FaUsers className="text-white" />
    },
    {
      id: 6,
      title: t('charter.section6.title'),
      content: t('charter.section6.content'),
      icon: <FaGraduationCap className="text-white" />
    },
    {
      id: 8,
      title: t('charter.section8.title'),
      content: t('charter.section8.content'),
      icon: <FaBook className="text-white" />
    }
  ];

  // Статистика устава
  const stats = [
    { number: "50+", label: t('charter.stats.articles'), icon: <FaBook className="text-[#023E8A]" /> },
    { number: "10", label: t('charter.stats.chapters'), icon: <FaBalanceScale className="text-[#023E8A]" /> },
    { number: "5", label: t('charter.stats.principles'), icon: <FaFlag className="text-[#023E8A]" /> },
    { number: "100%", label: t('charter.stats.compliance'), icon: <FaUsers className="text-[#023E8A]" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.03, 0.1, 0.03],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Герой секция */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-20 bg-white"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50" />
          </div>
          
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
            >
              <FaBook className="text-xl" />
              <span className="font-semibold">{t('charter.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-6">
              {t('charter.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('charter.subtitle')}
            </p>
          </div>
        </motion.section>

        {/* Статистика - исправлены отступы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-4 mt-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Содержание устава */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto px-4 pb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('charter.sectionsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('charter.sectionsDescription')}
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <motion.button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-8 text-left bg-gradient-to-r from-[#023E8A] to-[#0077B6] hover:from-[#023E8A]/90 hover:to-[#0077B6]/90 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                        {section.title}
                      </h2>
                    </div>
                    <motion.div
                      animate={{ rotate: openSections[section.id] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white"
                    >
                      <FaChevronDown className="text-xl" />
                    </motion.div>
                  </div>
                </motion.button>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: openSections[section.id] ? 1 : 0,
                    height: openSections[section.id] ? "auto" : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-8 bg-white">
                    <div className="prose prose-lg max-w-none">
                      <div className="space-y-6 text-lg leading-relaxed">
                        {section.content.split('\n\n').map((paragraph, index) => (
                          paragraph.trim() && (
                            <div key={index} className="mb-6 last:mb-0">
                              {paragraph.split('\n').map((line, lineIndex, lines) => {
                                // Проверяем, является ли строка заголовком статьи
                                if (line.match(/^(Статья|Article|1-статья)\s*\d+/)) {
                                  return (
                                    <h3 key={lineIndex} className="text-2xl font-bold text-[#023E8A] mb-4 mt-6 first:mt-0 border-l-4 border-[#023E8A] pl-4">
                                      {line}
                                    </h3>
                                  );
                                }
                                // Проверяем, является ли строка подзаголовком (например, "1.1. Основные цели")
                                else if (line.match(/^\d+\.\d+\./)) {
                                  return (
                                    <h4 key={lineIndex} className="text-xl font-semibold text-[#0077B6] mb-3 mt-4">
                                      {line}
                                    </h4>
                                  );
                                }
                                // Проверяем, является ли строка пунктом списка
                                else if (line.match(/^[•\-]\s/) || line.match(/^\d+\.\s/)) {
                                  return (
                                    <div key={lineIndex} className="flex items-start mb-3">
                                      <span className="text-[#023E8A] mr-3 mt-1">•</span>
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CharterPage;