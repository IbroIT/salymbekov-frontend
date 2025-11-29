import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaHome, FaWifi, FaUtensils, FaShower, FaBed, FaDesktop, FaMapMarkerAlt, FaHospital, FaHandHoldingHeart, FaBookOpen, FaGlobe, FaBrain, FaUsersCog, FaFilePdf, FaDownload, FaCalendarAlt, FaUserCheck, FaMap, FaHandshake } from 'react-icons/fa';
import img55 from '../../../assets/science/studentsphoto/55.webp';

const AdaptationPrograms = () => {
  const navigate = useNavigate();

  const opportunitiesSections = [
    { 
      path: "/student/opportunities/medical", 
      name: "МЕДИЦИНСКИЙ ЦЕНТР", 
      icon: FaHospital,
    },
    { 
      path: "/student/opportunities/dorm", 
      name: "ОБЩЕЖИТИЕ", 
      icon: FaBed,
    },
    { 
      path: "/student/opportunities/social", 
      name: "СОЦИАЛЬНАЯ ПОДДЕРЖКА", 
      icon: FaHandHoldingHeart,
    },
    { 
      path: "/student/opportunities/courses", 
      name: "КУРСЫ ПО ВЫБОРУ", 
      icon: FaBookOpen,
    },
    { 
      path: "/student/opportunities/mobility", 
      name: "АКАДЕМИЧЕСКАЯ МОБИЛЬНОСТЬ", 
      icon: FaGlobe,
    },
    { 
      path: "/student/opportunities/psychology", 
      name: "ПСИХОЛОГИЧЕСКАЯ ПОДДЕРЖКА", 
      icon: FaBrain,
    },
    { 
      path: "/student/opportunities/service-center", 
      name: "ЦЕНТР ОБСЛУЖИВАНИЯ СТУДЕНТОВ", 
      icon: FaUsersCog,
    },
    { 
      path: "/student/opportunities/adaptation", 
      name: "АДАПТАЦИОННЫЕ ПРОГРАММЫ", 
      icon: FaUserGraduate,
      active: true,
    },
  ];

  const programFeatures = [
    {
      icon: FaUserCheck,
      title: "Ориентация для новых студентов",
      description: "Знакомство с университетом, правилами и возможностями"
    },
    {
      icon: FaMap,
      title: "Культурная адаптация",
      description: "Помощь в привыкании к новой социальной среде"
    },
    {
      icon: FaBook,
      title: "Академическая поддержка",
      description: "Консультации по учебному процессу и требованиям"
    },
    {
      icon: FaUserFriends,
      title: "Наставничество",
      description: "Поддержка от старшекурсников и кураторов"
    },
    {
      icon: FaHandshake,
      title: "Социальная интеграция",
      description: "Мероприятия для знакомства и создания сообщества"
    },
    {
      icon: FaGraduationCap,
      title: "Профессиональная ориентация",
      description: "Помощь в выборе специализации и карьерных путей"
    }
  ];

  const programFiles = [
    {
      name: "Адаптационная программа 2023-2024 г.",
      type: "PDF",
      size: "2.1 MB",
      url: "#"
    },
    {
      name: "Post-arrival-orientation-handbook-for-international-students",
      type: "PDF",
      size: "3.4 MB", 
      url: "#"
    },
    {
      name: "Руководство для новых студентов",
      type: "PDF",
      size: "1.8 MB",
      url: "#"
    },
    {
      name: "План адаптационных мероприятий",
      type: "PDF",
      size: "1.2 MB",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/student')}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Назад к студенту
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                Поддержка новых студентов
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Адаптационные программы
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Комплексные программы поддержки для успешной адаптации новых студентов 
              к академической и социальной жизни университета
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaUsers className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">СТУДЕНТАМ</h3>
                </div>
              </div>
              <nav className="p-2">
                {opportunitiesSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.path}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => navigate(section.path)}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium text-sm">{section.name}</span>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Основная информация */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-8">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaUserGraduate className="mr-3 text-[#023E8A]" />
                        АДАПТАЦИОННЫЕ ПРОГРАММЫ
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Салымбеков университет предлагает комплексные адаптационные программы, 
                        разработанные для помощи новым студентам в успешной интеграции в академическую 
                        и социальную жизнь университета.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center p-3 bg-white/70 rounded-lg">
                          <FaCalendarAlt className="text-[#023E8A] text-xl mr-3" />
                          <div>
                            <p className="font-semibold text-gray-900">2023-2024 учебный год</p>
                            <p className="text-gray-700">Актуальная программа</p>
                          </div>
                        </div>
                        <div className="flex items-center p-3 bg-white/70 rounded-lg">
                          <FaUserCheck className="text-[#023E8A] text-xl mr-3" />
                          <div>
                            <p className="font-semibold text-gray-900">Для всех студентов</p>
                            <p className="text-gray-700">Включая международных</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-80 flex-shrink-0">
                      <div className="rounded-2xl aspect-video overflow-hidden">
                        <img src={img55} alt="Адаптационная программа" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Особенности программ */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Компоненты адаптационных программ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {programFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="text-white text-2xl" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-center">{feature.title}</h4>
                      <p className="text-gray-700 text-sm text-center">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Файлы для скачивания */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FaFilePdf className="mr-3 text-[#023E8A]" />
                    Материалы программ
                  </h3>
                  
                  <div className="space-y-4">
                    {programFiles.map((file, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white/80 rounded-lg border border-purple-300 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center">
                          <FaFilePdf className="text-red-500 text-xl mr-4" />
                          <div>
                            <h4 className="font-semibold text-gray-900">{file.name}</h4>
                            <p className="text-sm text-gray-600">{file.type} • {file.size}</p>
                          </div>
                        </div>
                        <motion.a
                          href={file.url}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center px-4 py-2 bg-[#023E8A] text-white rounded-lg hover:bg-[#0077B6] transition-colors"
                        >
                          <FaDownload className="mr-2" />
                          Скачать
                        </motion.a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Этапы адаптации */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Этапы адаптационного процесса</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        step: "01",
                        title: "Доприбытие",
                        description: "Подготовка документов и информационная поддержка"
                      },
                      {
                        step: "02", 
                        title: "Прибытие",
                        description: "Встреча, расселение и первичная ориентация"
                      },
                      {
                        step: "03",
                        title: "Ориентация",
                        description: "Знакомство с университетом и правилами"
                      },
                      {
                        step: "04",
                        title: "Интеграция",
                        description: "Полное включение в академическую и социальную жизнь"
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                          {step.step}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Дополнительная информация */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBookOpen className="mr-3 text-[#023E8A]" />
                  Дополнительная информация
                </h3>
                <p className="text-gray-700 mb-6">
                  Полная информация об адаптационных программах, расписании мероприятий 
                  и условиях участия доступна на официальном сайте университета.
                </p>
                <motion.a 
                  href="https://salymbekov.com/ru/adaptacionnye-programmy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <FaUserGraduate className="mr-3" />
                  Подробнее на сайте
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Контактная информация */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
              >
                <div className="flex items-start">
                  <FaUserFriends className="text-blue-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Отдел по работе со студентами
                    </h4>
                    <p className="text-gray-700 mb-3">
                      По вопросам участия в адаптационных программах и поддержки новых студентов:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        📞 Телефон: +996 (312) 00-00-00
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        📧 Email: adaptation@salymbekov.com
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        🏢 Кабинет: 201, студенческий отдел
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        🕒 Часы приема: 9:00 - 18:00
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdaptationPrograms;