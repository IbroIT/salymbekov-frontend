import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaEdit,
  FaNewspaper,
  FaPencilAlt,
  FaBook,
  FaDownload,
  FaUsers,
  FaAward,
  FaFileAlt,
  FaGlobe
} from "react-icons/fa";

const EditorialCouncilPage = () => {
  const { t } = useTranslation();

  // Статистика
  const stats = [
    { number: "20+", label: t('editorialCouncil.stats.publications'), icon: <FaNewspaper className="text-[#023E8A]" /> },
    { number: "100%", label: t('editorialCouncil.stats.quality'), icon: <FaAward className="text-[#023E8A]" /> },
    { number: "15+", label: t('editorialCouncil.stats.experts'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "5", label: t('editorialCouncil.stats.years'), icon: <FaBook className="text-[#023E8A]" /> }
  ];

  // Основные функции совета
  const functions = [
    {
      icon: <FaPencilAlt className="text-white text-lg" />,
      title: t('editorialCouncil.functions.review'),
      description: t('editorialCouncil.functions.reviewDesc')
    },
    {
      icon: <FaFileAlt className="text-white text-lg" />,
      title: t('editorialCouncil.functions.standards'),
      description: t('editorialCouncil.functions.standardsDesc')
    },
    {
      icon: <FaGlobe className="text-white text-lg" />,
      title: t('editorialCouncil.functions.international'),
      description: t('editorialCouncil.functions.internationalDesc')
    },
    {
      icon: <FaUsers className="text-white text-lg" />,
      title: t('editorialCouncil.functions.coordination'),
      description: t('editorialCouncil.functions.coordinationDesc')
    }
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
        {/* Герой секция с белым фоном */}
        <section className="relative py-20 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
            >
              <FaEdit className="text-xl" />
              <span className="font-semibold">{t('editorialCouncil.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {t('editorialCouncil.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
          </motion.div>
        </section>

        {/* Основной контент */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          {/* Статистика */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
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

          {/* Основной текст */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {t('editorialCouncil.aboutTitle')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#023E8A]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('editorialCouncil.text1')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#0077B6]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('editorialCouncil.text2')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#0096C7]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('editorialCouncil.text3')}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Функции редакционного совета */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('editorialCouncil.functionsTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('editorialCouncil.functionsSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {functions.map((func, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {func.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {func.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {func.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ссылка на положение */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('editorialCouncil.regulationsTitle')}
              </h3>
              <p className="text-lg mb-6 opacity-90">
                {t('editorialCouncil.regulationsDescription')}
              </p>
              <motion.a
                href="https://salymbekov.com/wp-content/uploads/2022/05/sostav-redsoveta-2021-i-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaDownload className="mr-3" />
                {t('editorialCouncil.regulationsLink')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EditorialCouncilPage;