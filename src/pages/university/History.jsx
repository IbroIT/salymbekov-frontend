import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HistoryImage1 from '../../assets/history/history1.jpg';
import HistoryImage2 from '../../assets/history/history2.jpg';
import HistoryImage3 from '../../assets/history/history3.jpg';
import UniversityCampus from '../../assets/history/campus.jpg';
import FounderPhoto from '../../assets/history/founder.jpg';
const History = () => {
  const { t } = useTranslation();
  const [activeYear, setActiveYear] = useState(2020);
  const milestones = [
    { year: 2018, key: 'milestone1' },
    { year: 2019, key: 'milestone2' },
    { year: 2020, key: 'milestone3' },
    { year: 2021, key: 'milestone4' },
    { year: 2022, key: 'milestone5' },
    { year: 2023, key: 'milestone6' },
    { year: 2024, key: 'milestone7' }
  ];
  const features = [
    { icon: '🎓', key: 'feature1' },
    { icon: '🏫', key: 'feature2' },
    { icon: '🌍', key: 'feature3' },
    { icon: '🔬', key: 'feature4' }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveYear(prev => {
        const currentIndex = milestones.findIndex(m => m.year === prev);
        return milestones[(currentIndex + 1) % milestones.length].year;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            {t('history.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('history.subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={UniversityCampus}
              alt={t('history.campusAlt')}
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              {t('history.aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('history.aboutText1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('history.aboutText2')}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {t(`history.${feature.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(`history.${feature.key}.desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="bg-white py-16 mb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              {t('history.timelineTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('history.timelineSubtitle')}
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full top-0"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`bg-gradient-to-br ${
                        activeYear === milestone.year
                          ? 'from-blue-600 to-blue-800 text-white'
                          : 'from-white to-blue-50 text-gray-800'
                      } p-8 rounded-2xl shadow-lg border border-blue-100 cursor-pointer transition-all duration-300`}
                      onClick={() => setActiveYear(milestone.year)}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-4 h-4 rounded-full ${
                          activeYear === milestone.year ? 'bg-white' : 'bg-blue-600'
                        } mr-3`}></div>
                        <h3 className="text-2xl font-bold">
                          {t(`history.${milestone.key}.title`)}
                        </h3>
                      </div>
                      <p className={`leading-relaxed ${
                        activeYear === milestone.year ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        {t(`history.${milestone.key}.desc`)}
                      </p>
                    </motion.div>
                  </div>
                  {/* Year marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      animate={{ 
                        scale: activeYear === milestone.year ? 1.2 : 1,
                        backgroundColor: activeYear === milestone.year ? '#2563eb' : '#ffffff'
                      }}
                      className={`w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center shadow-lg font-bold ${
                        activeYear === milestone.year ? 'text-white' : 'text-blue-600'
                      }`}
                    >
                      {milestone.year}
                    </motion.div>
                  </div>
                  {/* Spacer */}
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Founder Section */}
      <section className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={FounderPhoto}
              alt={t('history.founderAlt')}
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold">{t('history.founderName')}</h3>
              <p className="text-blue-100">{t('history.founderPosition')}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              {t('history.founderTitle')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('history.founderText1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('history.founderText2')}
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
              <p className="text-blue-800 italic text-lg">
                "{t('history.founderQuote')}"
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            {t('history.galleryTitle')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('history.gallerySubtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[HistoryImage1, HistoryImage2, HistoryImage3].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={t(`history.galleryImage${index + 1}`)}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">
                  {t(`history.galleryImage${index + 1}`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default History;
