import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaHome, FaWifi, FaUtensils, FaShower, FaBed, FaDesktop, FaMapMarkerAlt, FaHospital, FaHandHoldingHeart, FaBookOpen, FaGlobe, FaBrain, FaUsersCog, FaHeart, FaComments, FaHeadset, FaUserShield } from 'react-icons/fa';
import img52 from '../../../assets/science/studentsphoto/52.jpg';
import img53 from '../../../assets/science/studentsphoto/53.jpg';

const PsychologicalSupport = () => {
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
      active: true,
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
    },
  ];

  const supportAreas = [
    {
      icon: FaUserGraduate,
      title: "Адаптационная программа",
      description: "Помощь в адаптации к новым социокультурным условиям при поступлении и обучении"
    },
    {
      icon: FaComments,
      title: "Психологическое консультирование",
      description: "Индивидуальные и групповые консультации с квалифицированными специалистами"
    },
    {
      icon: FaUserFriends,
      title: "Кураторство и наставничество",
      description: "Поддержка на всех уровнях учебного процесса опытными кураторами"
    },
    {
      icon: FaHeart,
      title: "Воспитательная работа",
      description: "Создание благоприятной и комфортной атмосферы в учебном заведении"
    },
    {
      icon: FaHeadset,
      title: "Кризисная поддержка",
      description: "Помощь в сложных жизненных ситуациях и стрессовых периодах"
    },
    {
      icon: FaUserShield,
      title: "Социальная адаптация",
      description: "Поддержка в решении социальных вопросов и межличностных отношений"
    }
  ];

  const specialists = [
    {
      name: "Анна Анастасиади",
      position: "Психолог-консультант",
      photo: img52,
      description: "Квалифицированный специалист по психологической адаптации студентов"
    },
    {
      name: "Молдошова Ассоль", 
      position: "Психолог-куратор",
      photo: img53,
      description: "Специалист по воспитательной работе и социальной поддержке"
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
                Психологическая помощь
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Психологическая поддержка студентов
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Создание благоприятной и комфортной атмосферы для успешной адаптации и обучения 
              через комплексную систему психологической поддержки
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaBrain className="mr-3 text-[#023E8A]" />
                    ПСИХОЛОГИЧЕСКАЯ ПОДДЕРЖКА СТУДЕНТОВ
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    С целью создания благоприятной и комфортной атмосферы в учебном заведении для студентов, 
                    Салымбеков университет оказывает поддержку и помощь студентам на всех уровнях: воспитательная работа, 
                    кураторство, наставничество, психологическая и социальная поддержка.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Для адаптации к новым социокультурным условиям при поступлении и обучении в университете, 
                    существует специально выстроенная адаптационная программа. В рамках данной адаптационной 
                    программы студентам оказывают квалифицированную психологическую помощь наши специалисты.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaUserGraduate className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Адаптация</p>
                        <p className="text-gray-700">Программа для новых студентов</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaComments className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Консультации</p>
                        <p className="text-gray-700">Индивидуальная поддержка</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaUserFriends className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Кураторство</p>
                        <p className="text-gray-700">Наставничество и сопровождение</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Направления поддержки */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Направления психологической поддержки</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {supportAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 text-center hover:shadow-lg transition-all"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <area.icon className="text-white text-2xl" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{area.title}</h4>
                      <p className="text-gray-700 text-sm">{area.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Специалисты */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши специалисты</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {specialists.map((specialist, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                    >
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                          <img src={specialist.photo} alt={specialist.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{specialist.name}</h4>
                          <p className="text-[#023E8A] font-semibold mb-3">{specialist.position}</p>
                          <p className="text-gray-700 mb-4">{specialist.description}</p>
                          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            <span className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-700 border border-purple-300">
                              📞 Консультации
                            </span>
                            <span className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-700 border border-purple-300">
                              💬 Поддержка
                            </span>
                            <span className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-700 border border-purple-300">
                              🎯 Адаптация
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Процесс получения помощи */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Как получить помощь</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        step: "01",
                        title: "Запись на консультацию",
                        description: "Обратитесь в отдел психологической поддержки"
                      },
                      {
                        step: "02",
                        title: "Первичная встреча",
                        description: "Знакомство и определение целей работы"
                      },
                      {
                        step: "03",
                        title: "Индивидуальный план",
                        description: "Разработка персональной программы поддержки"
                      },
                      {
                        step: "04",
                        title: "Регулярные сессии",
                        description: "Систематическая работа со специалистом"
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
                  Психологическая поддержка доступна для всех студентов университета. 
                  Мы гарантируем конфиденциальность и профессиональный подход к каждому обращению.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a 
                    href="/student/opportunities/adaptation"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <FaUserGraduate className="mr-3" />
                    Адаптационные программы
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-white text-[#023E8A] font-medium rounded-lg border border-[#023E8A] hover:bg-[#023E8A] hover:text-white transition-all duration-300"
                  >
                    <FaComments className="mr-3" />
                    Записаться на консультацию
                  </motion.button>
                </div>
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
                  <FaHeadset className="text-blue-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Отдел психологической поддержки
                    </h4>
                    <p className="text-gray-700 mb-3">
                      По всем вопросам психологической помощи и поддержки:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        📞 Телефон: +996 (312) 00-00-00
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        📧 Email: psychology@salymbekov.com
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        🏢 Кабинет: 501, учебный корпус
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

export default PsychologicalSupport;