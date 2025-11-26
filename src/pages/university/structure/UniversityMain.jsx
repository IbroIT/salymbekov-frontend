// UniversityMain.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaDownload,
  FaUniversity,
  FaSitemap,
  FaArrowRight,
  FaExpand
} from 'react-icons/fa';

const UniversityMain = () => {
  const { t } = useTranslation();

  const structureImages = [
    {
      src: "https://salymbekov.com/wp-content/uploads/2022/05/struktura-universiteta-1.jpg",
      alt: t('university.structure.universityMain.image1Alt')
    },
    {
      src: "https://salymbekov.com/wp-content/uploads/2022/05/struktura-universiteta-2.jpg",
      alt: t('university.structure.universityMain.image2Alt')
    },
    {
      src: "https://salymbekov.com/wp-content/uploads/2022/05/struktura-universiteta-3.jpg",
      alt: t('university.structure.universityMain.image3Alt')
    }
  ];

  const features = [
    {
      icon: <FaUniversity className="text-white" size={24} />,
      title: t('university.structure.features.academic.title'),
      description: t('university.structure.features.academic.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaSitemap className="text-white" size={24} />,
      title: t('university.structure.features.administrative.title'),
      description: t('university.structure.features.administrative.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaExpand className="text-white" size={24} />,
      title: t('university.structure.features.research.title'),
      description: t('university.structure.features.research.description'),
      color: "bg-[#0096C7]"
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
        {/* Герой секция с белым фоном и синим текстом */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white py-24"
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
            >
              <FaSitemap className="text-xl" />
              <span className="font-semibold">{t('university.structure.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {t('university.structure.universityMain.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('university.structure.subtitle')}
            </p>
          </div>
        </motion.div>

        {/* Отдельный блок с фоновым изображением */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto px-4 -mt-8 relative z-20"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://salymbekov.com/wp-content/uploads/2021/02/akademicheskij-sostav.jpg"
              alt={t('university.structure.backgroundImageAlt')}
              className="w-full h-64 md:h-80 object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/1920x600/6B7280/FFFFFF?text=Структура+университета";
              }}
            />
          </div>
        </motion.div>

        {/* Основной контент */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Особенности структуры */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Структурные изображения */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-12 mb-16"
          >
            {structureImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
              >
                <div className="p-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white">
                  <h3 className="text-2xl font-bold text-center">
                    {t('university.structure.imageTitle', { number: index + 1 })}
                  </h3>
                </div>
                <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 p-8">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-auto max-w-full h-auto max-h-[60vh] object-contain rounded-lg shadow-lg"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/800x600/6B7280/FFFFFF?text=Структура+университета";
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Кнопка загрузки PDF */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <motion.a
              href="https://salymbekov.com/wp-content/uploads/2022/05/struktura-universiteta.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaDownload className="text-xl" />
              {t('university.structure.universityMain.downloadButton')}
              <FaArrowRight className="text-xl" />
            </motion.a>
            
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              {t('university.structure.downloadDescription')}
            </p>
          </motion.div>
        </div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl mx-4 mb-8 p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('university.structure.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('university.structure.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UniversityMain;