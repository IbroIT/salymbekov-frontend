import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRocket,
  FaUsers,
  FaGraduationCap,
  FaHeart,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaBriefcase,
  FaStar,
  FaGlobe,
  FaShieldAlt,
  FaBook,
  FaStethoscope,
  FaLaptopCode,
  FaSeedling,
  FaCogs,
  FaUserMd
} from "react-icons/fa";

const Mission = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // URL для изображений
  const images = {
    missionHero: "https://salymbekov.com/wp-content/uploads/2022/04/bc0b3788.jpg",
    mlkCarousel: [
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3814.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3797.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3848.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3862.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3796.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3860.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3890.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3802.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3899.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3927.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3932.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3965.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3940.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3928.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3951.jpg",
      "https://salymbekov.com/wp-content/uploads/2022/05/bc0b3944.jpg"
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.mlkCarousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.mlkCarousel.length - 1 : prevIndex - 1
    );
  };

  // Автопрокрутка карусели
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  // Стратегические цели
  const strategicGoals = [
    {
      icon: <FaGraduationCap className="text-white" size={20} />,
      title: t('mission.strategicGoals.education.title'),
      description: t('mission.strategicGoals.education.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaUsers className="text-white" size={20} />,
      title: t('mission.strategicGoals.humanResources.title'),
      description: t('mission.strategicGoals.humanResources.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaRocket className="text-white" size={20} />,
      title: t('mission.strategicGoals.innovation.title'),
      description: t('mission.strategicGoals.innovation.description'),
      color: "bg-[#0096C7]"
    }
  ];

  // Приоритетные цели
  const priorityGoals = [
    { icon: <FaLaptopCode />, title: t('mission.priorityGoals.it.title'), description: t('mission.priorityGoals.it.description') },
    { icon: <FaBriefcase />, title: t('mission.priorityGoals.business.title'), description: t('mission.priorityGoals.business.description') },
    { icon: <FaSeedling />, title: t('mission.priorityGoals.agriculture.title'), description: t('mission.priorityGoals.agriculture.description') },
    { icon: <FaCogs />, title: t('mission.priorityGoals.technical.title'), description: t('mission.priorityGoals.technical.description') },
    { icon: <FaUserMd />, title: t('mission.priorityGoals.medical.title'), description: t('mission.priorityGoals.medical.description') }
  ];

  // Ожидаемые результаты
  const expectedResults = [
    t('mission.expectedResults.result1'),
    t('mission.expectedResults.result2'),
    t('mission.expectedResults.result3'),
    t('mission.expectedResults.result4'),
    t('mission.expectedResults.result5'),
    t('mission.expectedResults.result6'),
    t('mission.expectedResults.result7'),
    t('mission.expectedResults.result8')
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
        {/* Header с белым фоном и синим текстом */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
              >
                <FaRocket className="text-xl" />
                <span className="font-semibold">{t('mission.badge')}</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                {t('mission.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t('mission.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Основной контент */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Основная миссия */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('mission.missionTitle')}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
              </div>

              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl p-8 mb-8 text-center text-white">
                <p className="text-2xl font-semibold italic leading-relaxed">
                  {t('mission.missionQuote')}
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>{t('mission.missionText1')}</p>
                <p>{t('mission.missionText2')}</p>
              </div>
            </motion.div>

            {/* Карусель с выпускниками МЛК */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('mission.mlkTitle')}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
              </div>

              {/* Карусель */}
              <div className="relative max-w-4xl mx-auto mb-8">
                <div className="relative h-80 md:h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={images.mlkCarousel[currentImageIndex]}
                      alt={t('mission.mlkImageAlt', { number: currentImageIndex + 1 })}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/800x400/6B7280/FFFFFF?text=Аскар+Салымбеков+с+выпускниками+МЛК";
                      }}
                    />
                  </AnimatePresence>
                  
                  <motion.button 
                    onClick={prevImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
                  >
                    <FaChevronLeft />
                  </motion.button>
                  <motion.button 
                    onClick={nextImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
                  >
                    <FaChevronRight />
                  </motion.button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {images.mlkCarousel.length}
                  </div>
                </div>

                {/* Миниатюры */}
                <div className="flex overflow-x-auto space-x-3 mt-6 pb-4 scrollbar-hide">
                  {images.mlkCarousel.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex ? 'border-[#023E8A] shadow-lg' : 'border-gray-300'
                      }`}
                    >
                      <img 
                        src={image}
                        alt={t('mission.mlkThumbnailAlt', { number: index + 1 })}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/100x100/6B7280/FFFFFF?text=IMG";
                        }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>{t('mission.mlkDescription')}</p>
              </div>
            </motion.div>

            {/* Стратегические цели */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('mission.strategicGoalsTitle')}</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {t('mission.strategicGoalsSubtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {strategicGoals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                  >
                    <div className={`w-16 h-16 ${goal.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {goal.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {goal.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {goal.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Приоритетные цели */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('mission.priorityGoalsTitle')}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {priorityGoals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 text-center shadow-lg border border-red-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4 mx-auto text-white">
                      {goal.icon}
                    </div>
                    <h3 className="text-lg font-bold text-red-900 mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-red-800 text-sm">
                      {goal.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Медицинский факультет */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 mb-16 text-white"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">{t('mission.medicalFaculty.title')}</h2>
                <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
              </div>

              <div className="max-w-4xl mx-auto text-center mb-8">
                <p className="text-xl opacity-90 leading-relaxed">
                  {t('mission.medicalFaculty.description')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold mb-3">{t('mission.medicalFaculty.kyrgyzstan.title')}</h3>
                  <p className="opacity-90">{t('mission.medicalFaculty.kyrgyzstan.description')}</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold mb-3">{t('mission.medicalFaculty.nearAbroad.title')}</h3>
                  <p className="opacity-90">{t('mission.medicalFaculty.nearAbroad.description')}</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold mb-3">{t('mission.medicalFaculty.farAbroad.title')}</h3>
                  <p className="opacity-90">{t('mission.medicalFaculty.farAbroad.description')}</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Ожидаемые результаты обучения */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('mission.expectedResultsTitle')}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {expectedResults.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="w-6 h-6 bg-[#023E8A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaStar className="text-white text-xs" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mission;