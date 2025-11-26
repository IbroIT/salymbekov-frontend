// History.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt,
  FaUniversity,
  FaHospital,
  FaGlobe,
  FaGraduationCap,
  FaAward,
  FaBook,
  FaUsers,
  FaMicroscope,
  FaHeartbeat,
  FaLaptop,
  FaChalkboardTeacher,
  FaHandshake,
  FaArrowRight
} from 'react-icons/fa';

const History = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedMilestone, setExpandedMilestone] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // URL для изображений
  const images = {
    background: "https://cdn-1.aki.kg/st_runews/.storage/limon3/images/December2023/e1e6c764252995247d75716b41142967.png",
    founder: "https://salymbekov.com/wp-content/uploads/2021/04/askar-salymbekov-v-vypusknikami-mlk-s-1024x679.jpg",
    docClinic: "https://salymbekov.com/wp-content/uploads/2023/03/4.jpg",
    lazmed: "https://salymbekov.com/wp-content/uploads/2020/12/%D0%9B%D0%B0%D0%B7%D0%BC%D0%B5%D0%B4-%D1%84%D0%B0%D1%81%D0%B0%D0%B4.jpg",
    universityHospital: "https://salymbekov.ewings.co.in/wp-content/uploads/2025/08/IMG-20250801-WA0038.jpg",
    
    ophthalmologyCarousel: [
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7153.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7154.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7150.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7155.jpg",
      "https://salymbekov.com/wp-content/uploads/2021/02/c0b7146.jpg"
    ]
  };

  // Фильтры периодов
  const filters = [
    { id: "all", label: t('history.filters.all'), count: 4 },
    { id: "early", label: t('history.filters.early'), count: 2 },
    { id: "recent", label: t('history.filters.recent'), count: 2 }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.ophthalmologyCarousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.ophthalmologyCarousel.length - 1 : prevIndex - 1
    );
  };

  // Основные вехи истории
  const milestones = [
    {
      year: "2019",
      title: t('history.milestones.2019.title'),
      description: t('history.milestones.2019.description'),
      icon: <FaUniversity className="text-white" size={24} />,
      color: "from-[#023E8A] to-[#0077B6]",
      achievements: t('history.milestones.2019.achievements', { returnObjects: true }),
      category: "early",
      stats: {
        students: "500+",
        programs: "15+",
        partners: "20+"
      }
    },
    {
      year: "2020",
      title: t('history.milestones.2020.title'),
      description: t('history.milestones.2020.description'),
      icon: <FaLaptop className="text-white" size={24} />,
      color: "from-[#0077B6] to-[#0096C7]",
      achievements: t('history.milestones.2020.achievements', { returnObjects: true }),
      category: "early",
      stats: {
        students: "800+",
        programs: "25+",
        partners: "35+"
      }
    },
    {
      year: "2021",
      title: t('history.milestones.2021.title'),
      description: t('history.milestones.2021.description'),
      icon: <FaAward className="text-white" size={24} />,
      color: "from-[#0096C7] to-[#00B4D8]",
      achievements: t('history.milestones.2021.achievements', { returnObjects: true }),
      category: "recent",
      stats: {
        students: "1200+",
        programs: "35+",
        partners: "50+"
      }
    },
    {
      year: "2022",
      title: t('history.milestones.2022.title'),
      description: t('history.milestones.2022.description'),
      icon: <FaGlobe className="text-white" size={24} />,
      color: "from-[#00B4D8] to-[#48CAE4]",
      achievements: t('history.milestones.2022.achievements', { returnObjects: true }),
      category: "recent",
      stats: {
        students: "1500+",
        programs: "45+",
        partners: "70+"
      }
    }
  ];

  // Статистика университета
  const stats = [
    { number: "1500+", label: t('history.stats.students'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "45+", label: t('history.stats.programs'), icon: <FaBook className="text-[#023E8A]" /> },
    { number: "70+", label: t('history.stats.partners'), icon: <FaHandshake className="text-[#023E8A]" /> },
    { number: "100+", label: t('history.stats.teachers'), icon: <FaChalkboardTeacher className="text-[#023E8A]" /> }
  ];

  // Клиническая база
  const clinics = [
    {
      name: t('history.clinics.docClinic.name'),
      description: t('history.clinics.docClinic.description'),
      image: images.docClinic,
      icon: <FaHospital className="text-white" size={24} />,
      color: "bg-[#023E8A]",
      stats: {
        patients: "10,000+",
        doctors: "50+",
        specialties: "15+"
      }
    },
    {
      name: t('history.clinics.lazmed.name'),
      description: t('history.clinics.lazmed.description'),
      image: images.lazmed,
      icon: <FaHeartbeat className="text-white" size={24} />,
      color: "bg-[#0077B6]",
      stats: {
        patients: "5,000+",
        doctors: "30+",
        specialties: "8+"
      }
    },
    {
      name: t('history.clinics.universityHospital.name'),
      description: t('history.clinics.universityHospital.description'),
      image: images.universityHospital,
      icon: <FaMicroscope className="text-white" size={24} />,
      color: "bg-[#0096C7]",
      stats: {
        patients: "8,000+",
        doctors: "40+",
        specialties: "12+"
      }
    }
  ];

  const filteredMilestones = milestones.filter(milestone => 
    activeFilter === "all" || milestone.category === activeFilter
  );

  const toggleMilestoneExpansion = (milestoneYear) => {
    setExpandedMilestone(expandedMilestone === milestoneYear ? null : milestoneYear);
  };

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Герой секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaCalendarAlt className="text-xl" />
            <span className="font-semibold">{t('history.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('history.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('history.subtitle')}
          </p>
        </motion.div>

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

        {/* Основное изображение */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-12"
        >
          <img 
            src={images.background}
            alt={t('history.images.backgroundAlt')}
            className="w-full h-64 md:h-96 object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/1920x600/6B7280/FFFFFF?text=История+университета";
            }}
          />
        </motion.div>

        {/* Введение */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img 
                  src={images.founder}
                  alt={t('history.founder.imageAlt')}
                  className="w-full h-auto rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300/6B7280/FFFFFF?text=Основатель+с+выпускниками";
                  }}
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {t('history.founder.caption')}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-2/3">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {t('history.introduction.paragraph1')}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('history.introduction.paragraph2')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Фильтры вех */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {t('history.milestones.title')}
              </h2>
              <p className="text-gray-600">
                {t('history.milestones.subtitle')}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Основные вехи истории */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <div className="grid gap-6">
            {filteredMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${milestone.color} p-8 text-white`}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        {milestone.icon}
                      </div>
                      <div>
                        <div className="text-4xl font-bold mb-2">{milestone.year}</div>
                        <div className="text-2xl font-semibold">{milestone.title}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                        {t('history.milestones.year')} {milestone.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                    {/* Основная информация */}
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {milestone.description}
                      </p>

                      {/* Статистика */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-blue-50 rounded-2xl">
                          <div className="text-2xl font-bold text-[#023E8A] mb-1">
                            {milestone.stats.students}
                          </div>
                          <div className="text-sm text-gray-600">
                            {t('history.stats.students')}
                          </div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-2xl">
                          <div className="text-2xl font-bold text-[#0077B6] mb-1">
                            {milestone.stats.programs}
                          </div>
                          <div className="text-sm text-gray-600">
                            {t('history.stats.programs')}
                          </div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-2xl">
                          <div className="text-2xl font-bold text-[#0096C7] mb-1">
                            {milestone.stats.partners}
                          </div>
                          <div className="text-sm text-gray-600">
                            {t('history.stats.partners')}
                          </div>
                        </div>
                      </div>

                      {/* Расширенная информация */}
                      {expandedMilestone === milestone.year && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-6"
                        >
                          <div className="grid md:grid-cols-2 gap-4">
                            {milestone.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="flex items-start gap-3 bg-blue-50 rounded-xl p-4"
                              >
                                <div className="w-6 h-6 bg-[#023E8A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <div className="w-2 h-2 bg-white rounded-full" />
                                </div>
                                <span className="text-gray-700">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Боковая панель с действиями */}
                    <div className="flex flex-col gap-4 lg:w-48">
                      

                      <motion.button
                        onClick={() => toggleMilestoneExpansion(milestone.year)}
                        className="flex items-center justify-center gap-2 text-[#023E8A] font-semibold py-2 hover:bg-blue-50 rounded-xl transition-colors duration-300"
                      >
                        {expandedMilestone === milestone.year ? t('history.showLess') : t('history.showMore')}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Клиническая база */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('history.clinics.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('history.clinics.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {clinics.map((clinic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x200/6B7280/FFFFFF?text=Клиника";
                    }}
                  />
                  <div className={`absolute top-4 left-4 ${clinic.color} w-12 h-12 rounded-2xl flex items-center justify-center`}>
                    {clinic.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {clinic.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {clinic.description}
                  </p>

                  {/* Статистика клиники */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold text-[#023E8A]">
                        {clinic.stats.patients}
                      </div>
                      <div className="text-xs text-gray-500">{t('history.clinics.stats.patients')}</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#0077B6]">
                        {clinic.stats.doctors}
                      </div>
                      <div className="text-xs text-gray-500">{t('history.clinics.stats.doctors')}</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#0096C7]">
                        {clinic.stats.specialties}
                      </div>
                      <div className="text-xs text-gray-500">{t('history.clinics.stats.specialties')}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Карусель для Центра микрохирургии глаза */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8"
          >
            <div className="text-center mb-8">
              <FaMicroscope className="text-4xl text-[#023E8A] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {t('history.ophthalmologyCenter.title')}
              </h3>
              <p className="text-gray-600 text-lg max-w-4xl mx-auto">
                {t('history.ophthalmologyCenter.description')}
              </p>
            </div>

            {/* Карусель */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-80 md:h-96 bg-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src={images.ophthalmologyCarousel[currentImageIndex]}
                  alt={`${t('history.ophthalmologyCenter.title')} ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x400/6B7280/FFFFFF?text=Офтальмологический+центр";
                  }}
                />
                
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
                >
                  ‹
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
                >
                  ›
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                  {currentImageIndex + 1} / {images.ophthalmologyCarousel.length}
                </div>
              </div>

              <div className="flex overflow-x-auto space-x-3 mt-6 pb-2">
                {images.ophthalmologyCarousel.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? 'border-[#023E8A] scale-110' : 'border-gray-300'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${t('history.ophthalmologyCenter.thumbnail')} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/100x100/6B7280/FFFFFF?text=IMG";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                {t('history.ophthalmologyCenter.address')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        
       
      </div>
    </div>
  );
};

export default History;