import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';


const Mission = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('mission');
  const [activeValue, setActiveValue] = useState(0);
  const [counter, setCounter] = useState({ students: 0, programs: 0, partners: 0, graduates: 0 });

  const tabs = [
    { id: 'mission', key: 'missionTab' },
    { id: 'vision', key: 'visionTab' },
    { id: 'values', key: 'valuesTab' },
    { id: 'goals', key: 'goalsTab' }
  ];

  const values = [
    { icon: '🎯', key: 'value1' },
    { icon: '🌟', key: 'value2' },
    { icon: '🤝', key: 'value3' },
    { icon: '💡', key: 'value4' },
    { icon: '🌱', key: 'value5' },
    { icon: '🏆', key: 'value6' }
  ];

  const goals = [
    { category: 'academic', key: 'academicGoals' },
    { category: 'research', key: 'researchGoals' },
    { category: 'international', key: 'internationalGoals' },
    { category: 'community', key: 'communityGoals' }
  ];

  const stats = [
    { key: 'students', target: 5000, suffix: '+' },
    { key: 'programs', target: 50, suffix: '+' },
    { key: 'partners', target: 100, suffix: '+' },
    { key: 'graduates', target: 10000, suffix: '+' }
  ];

  // Анимация счетчиков
  useEffect(() => {
    const duration = 3000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const current = Math.floor(stat.target * progress);
        
        setCounter(prev => ({
          ...prev,
          [stat.key]: current
        }));

        if (step === steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  }, []);

  // Автопереключение ценностей
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const tabContent = {
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            {t('mission.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('mission.subtitle')}
          </p>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-blue-100/50"
            >
              <motion.div
                className="text-4xl font-bold text-blue-600 mb-2"
                key={counter[stat.key]}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
              >
                {counter[stat.key]}{stat.suffix}
              </motion.div>
              <p className="text-gray-600 font-medium">
                {t(`mission.stats.${stat.key}`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="container mx-auto px-6 mb-16">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              {/* Tabs Navigation */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {t(`mission.tabs.${tab.key}`)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* <h2 className="text-3xl font-bold text-gray-800">
                    {t(`mission.${tabContent[activeTab].content}.title`)}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t(`mission.${tabContent[activeTab].content}.text1`)}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t(`mission.${tabContent[activeTab].content}.text2`)}
                  </p> */}

                  {/* Special content for values tab */}
                  {activeTab === 'values' && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                      {values.map((value, index) => (
                        <motion.div
                          key={value.key}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`p-4 rounded-xl text-center transition-all duration-300 cursor-pointer ${
                            activeValue === index
                              ? 'bg-blue-600 text-white shadow-lg scale-105'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => setActiveValue(index)}
                        >
                          <div className="text-2xl mb-2">{value.icon}</div>
                          <h3 className="font-semibold text-sm">
                            {t(`mission.values.${value.key}.title`)}
                          </h3>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Special content for goals tab */}
                  {activeTab === 'goals' && (
                    <div className="space-y-4 mt-6">
                      {goals.map((goal, index) => (
                        <motion.div
                          key={goal.key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500"
                        >
                          <h3 className="font-bold text-lg text-gray-800 mb-2">
                            {t(`mission.goals.${goal.key}.title`)}
                          </h3>
                          <ul className="text-gray-600 space-y-1">
                            {[1, 2, 3].map((item) => (
                              <li key={item} className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                {t(`mission.goals.${goal.key}.item${item}`)}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image Side */}
            <div className="relative min-h-[500px] bg-gradient-to-br from-blue-600 to-indigo-700">
              {/* <img
                src={tabContent[activeTab].image}
                alt={t(`mission.${tabContent[activeTab].content}.alt`)}
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-blue-900/20"></div>
              
              {/* Active Value Display */}
              {activeTab === 'values' && (
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                >
                  <div className="text-4xl mb-4">{values[activeValue].icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t(`mission.values.${values[activeValue].key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`mission.values.${values[activeValue].key}.description`)}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            {t('mission.strategicGoals.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('mission.strategicGoals.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-blue-600 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {t(`mission.strategicGoals.goal${item}.icon`)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {t(`mission.strategicGoals.goal${item}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`mission.strategicGoals.goal${item}.description`)}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{t('mission.strategicGoals.timeline')}</span>
                  <span>{t(`mission.strategicGoals.goal${item}.timeline`)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mission;