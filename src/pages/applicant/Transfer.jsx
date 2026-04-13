import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { FiFileText, FiCheckCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Transfer = () => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Получаем секции из перевода и преобразуем в массив для рендеринга
  const sectionsData = t('transfer.sections', { returnObjects: true });

  // Преобразуем объект в массив для рендеринга
  const sectionsArray = useMemo(() => {
    if (!sectionsData || typeof sectionsData !== 'object') return [];

    return Object.values(sectionsData).map(section => ({
      title: section.title,
      // Преобразуем объект items в массив
      items: section.items ? Object.values(section.items) : []
    }));
  }, [sectionsData]);

  const animatedBalls = useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      size: Math.random() * 120 + 60,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 3,
      delay: Math.random() * 2
    }));
  }, []);

  const floatingBubbles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      size: Math.random() * 80 + 40,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 6 + Math.random() * 4,
      delay: Math.random() * 3
    }));
  }, []);

  const smallBubbles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 25 + 15,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 1
    }));
  }, []); 3








  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Анимированные пузыри */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {animatedBalls.map((ball) => (
          <motion.div
            key={ball.id}
            className="absolute rounded-full opacity-10"
            style={{
              width: ball.size,
              height: ball.size,
              left: ball.left,
              top: ball.top,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: ball.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: ball.delay
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <FiFileText className="w-10 h-10" />
          </motion.div>
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('transfer.hero.title', 'Положение о переводе')}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl font-semibold text-white/90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('transfer.hero.subtitle', 'Порядок перевода, отчисления и восстановления студентов')}
          </motion.p>
        </div>
      </motion.div>

      {/* Основной контент */}
      <div className="relative z-10 container mx-auto px-4 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Левая навигация */}
          <div className="lg:w-80 shrink-0">
            <ExtraNavigation />
          </div>

          {/* Правый контент */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            {/* Введение */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                  <FiFileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-4">
                    {t('transfer.about.title', 'О положении')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t('transfer.about.description', 'Настоящее Положение регулирует порядок перевода, отчисления и восстановления студентов в Учреждении «Салымбеков Университет». Нажмите на раздел для просмотра подробной информации.')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Секции */}
            {sectionsArray.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl mb-6 border border-gray-100 overflow-hidden"
              >
                {/* Заголовок секции */}
                <button
                  onClick={() => toggleSection(sectionIndex)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                      <FiFileText className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 text-left">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-[#0077B6]">
                    {expandedSections[sectionIndex] ? (
                      <FiChevronUp className="w-6 h-6" />
                    ) : (
                      <FiChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>

                {/* Контент секции */}
                <AnimatePresence>
                  {expandedSections[sectionIndex] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-6 border-t border-gray-100 pt-6">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="group">
                            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                              <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                                <FiCheckCircle className="w-4 h-4 text-white" />
                              </div>
                              {item.subtitle}
                            </h3>
                            {item.points && Array.isArray(item.points) && (
                              <ul className="space-y-2 ml-10">
                                {item.points.map((point, pointIndex) => (
                                  <li key={pointIndex} className="text-gray-700 flex items-start gap-3">
                                    <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                                    <span className="flex-1">{point}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;