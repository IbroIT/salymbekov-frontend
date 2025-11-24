import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaQuoteLeft,
  FaGraduationCap,
  FaSchool,
  FaFlask,
  FaTools,
  FaUserGraduate,
  FaRocket,
  FaHeart,
  FaAward,
  FaGlobe,
  FaChartLine,
  FaLightbulb
} from 'react-icons/fa';

const Appeal = () => {
  const { t } = useTranslation();

  // URL для изображений
  const founderPhotoUrl = "https://salymbekov.com/wp-content/uploads/2021/02/salymbekov-askar-maatkabylovich-main-239x300.jpg";
  const backgroundImageUrl = "https://salymbekov.com/wp-content/uploads/2021/08/uchrediteli-askar-maatkabylovich-amangeldi-jesengeldi-e1629256318453.jpg";
  const sbsBannerUrl = "https://salymbekov.com/wp-content/uploads/2023/02/bc0b2014-1920x1008.jpg";
  const educationImageUrl = "https://mbbsadmissionwala.in/wp-content/uploads/2025/08/photo_2023-05-09_14-27-22-1024x768.jpg";
  const researchImageUrl = "https://salymbekov.com/wp-content/uploads/2023/02/bc0b2640-1920x1008.jpg";

  // Направления развития
  const developmentAreas = [
    {
      id: 1,
      icon: <FaSchool className="text-white" size={24} />,
      title: t('appeal.areas.education.title'),
      description: t('appeal.areas.education.description'),
      color: "bg-gradient-to-r from-[#023E8A] to-[#0077B6]"
    },
    {
      id: 2,
      icon: <FaFlask className="text-white" size={24} />,
      title: t('appeal.areas.research.title'),
      description: t('appeal.areas.research.description'),
      color: "bg-gradient-to-r from-[#0077B6] to-[#0096C7]"
    },
    {
      id: 3,
      icon: <FaTools className="text-white" size={24} />,
      title: t('appeal.areas.vocational.title'),
      description: t('appeal.areas.vocational.description'),
      color: "bg-gradient-to-r from-[#0096C7] to-[#00B4D8]"
    },
    {
      id: 4,
      icon: <FaUserGraduate className="text-white" size={24} />,
      title: t('appeal.areas.higherEducation.title'),
      description: t('appeal.areas.higherEducation.description'),
      color: "bg-gradient-to-r from-[#00B4D8] to-[#48CAE4]"
    }
  ];

  // Преимущества университета
  const universityBenefits = [
    {
      icon: <FaAward className="text-[#023E8A]" size={28} />,
      title: t('appeal.benefits.quality.title'),
      description: t('appeal.benefits.quality.description')
    },
    {
      icon: <FaGlobe className="text-[#023E8A]" size={28} />,
      title: t('appeal.benefits.international.title'),
      description: t('appeal.benefits.international.description')
    },
    {
      icon: <FaChartLine className="text-[#023E8A]" size={28} />,
      title: t('appeal.benefits.research.title'),
      description: t('appeal.benefits.research.description')
    },
    {
      icon: <FaLightbulb className="text-[#023E8A]" size={28} />,
      title: t('appeal.benefits.innovation.title'),
      description: t('appeal.benefits.innovation.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
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
              y: [0, -30, 0],
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 6
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero секция - белый фон, синий текст */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white py-24"
        >
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
            >
              <FaQuoteLeft className="text-xl" />
              <span className="font-semibold">{t('appeal.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {t('appeal.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('appeal.subtitle')}
            </p>
          </div>
        </motion.div>

        {/* Отдельный блок для изображения под header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto px-4 -mt-8 relative z-20"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={backgroundImageUrl}
              alt="Учредители университета"
              className="w-full h-64 md:h-80 object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/1920x600/6B7280/FFFFFF?text=Учредители+университета";
              }}
            />
          </div>
        </motion.div>

        {/* Основной контент */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Введение */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('appeal.introduction.paragraph1')}
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('appeal.introduction.paragraph2')}
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('appeal.introduction.paragraph3')}
              </p>
            </div>
          </motion.div>

          {/* Список направлений */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('appeal.developmentAreas.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('appeal.developmentAreas.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {developmentAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${area.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Блок о практических результатах */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 mb-12 text-white"
          >
            <div className="text-center mb-6">
              <FaRocket className="text-4xl mx-auto mb-4 text-white/80" />
              <h3 className="text-2xl font-bold mb-4">
                {t('appeal.practicalResults.title')}
              </h3>
            </div>
            <p className="text-lg text-center text-white/90 leading-relaxed max-w-4xl mx-auto">
              {t('appeal.practicalResults.description')}
            </p>
          </motion.div>

          {/* Баннер SBS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={sbsBannerUrl}
                alt="SBS Banner"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x200/6B7280/FFFFFF?text=SBS+Banner";
                }}
              />
            </div>
          </motion.div>

          {/* Блок о Бизнес-школе */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
          >
            <div className="text-center mb-8">
              <FaGraduationCap className="text-4xl text-[#023E8A] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t('appeal.businessSchool.title')}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('appeal.businessSchool.description')}
              </p>
            </div>
          </motion.div>

          {/* Преимущества университета */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('appeal.universityMission.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('appeal.universityMission.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {universityBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Блок с подписью и фотографией */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="text-gray-600 text-lg mb-2">
                    {t('appeal.founder.title')}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mb-4">
                    {t('appeal.founder.name')}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-[#023E8A]">
                    <FaHeart className="text-sm" />
                    <span className="font-semibold">{t('appeal.founder.role')}</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex-shrink-0"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src={founderPhotoUrl}
                    alt={t('appeal.founder.name')}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200x200/6B7280/FFFFFF?text=Фото+не+загружено";
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Appeal;