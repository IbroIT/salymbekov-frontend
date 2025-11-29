import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaHome, FaWifi, FaUtensils, FaShower, FaBed, FaDesktop, FaMapMarkerAlt, FaHospital, FaHandHoldingHeart, FaBookOpen, FaGlobe, FaBrain, FaUsersCog, FaHeart, FaFirstAid, FaLaptopCode, FaLanguage, FaChartLine, FaMusic, FaPalette } from 'react-icons/fa';

const ElectiveCourses = () => {
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
      active: true,
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
    },
  ];

  const electiveCourses = [
    {
      icon: FaFirstAid,
      title: "Первая медицинская помощь",
      description: "Факультативное занятие по оказанию первой медицинской помощи. Основы экстренной помощи в критических ситуациях.",
      duration: "16 часов",
      level: "Для всех студентов",
      features: ["Базовые навыки первой помощи", "Действия при чрезвычайных ситуациях", "Практические занятия"]
    },
    {
      icon: FaLaptopCode,
      title: "Основы программирования",
      description: "Введение в программирование для студентов непрофильных специальностей. Основы алгоритмов и структур данных.",
      duration: "32 часа",
      level: "Начальный",
      features: ["Python программирование", "Основы алгоритмов", "Практические проекты"]
    },
    {
      icon: FaLanguage,
      title: "Деловой английский",
      description: "Совершенствование языковых навыков для профессиональной коммуникации в международной среде.",
      duration: "48 часов",
      level: "Intermediate",
      features: ["Бизнес-коммуникация", "Переговоры на английском", "Профессиональная переписка"]
    },
    {
      icon: FaChartLine,
      title: "Основы предпринимательства",
      description: "Курс по основам бизнес-планирования и предпринимательской деятельности для будущих лидеров.",
      duration: "24 часа",
      level: "Для всех студентов",
      features: ["Бизнес-планирование", "Маркетинговые стратегии", "Финансовое моделирование"]
    },
    {
      icon: FaMusic,
      title: "Музыка и искусство",
      description: "Развитие творческих способностей через изучение музыкальной теории и практики.",
      duration: "20 часов",
      level: "Начальный",
      features: ["Основы музыкальной теории", "Вокальная практика", "История искусств"]
    },
    {
      icon: FaPalette,
      title: "Дизайн-мышление",
      description: "Методология решения сложных задач и создания инновационных продуктов через дизайн-подход.",
      duration: "28 часов",
      level: "Для всех студентов",
      features: ["Процесс дизайн-мышления", "Прототипирование", "Пользовательские исследования"]
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
                Дополнительное образование
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Курсы по выбору
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Салымбеков университет предоставляет своим студентам право выбора элективных курсов 
              и дисциплин для расширения профессиональных компетенций и личностного развития
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
                    <FaBookOpen className="mr-3 text-[#023E8A]" />
                    КУРСЫ ПО ВЫБОРУ
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Салымбеков университет предоставляет своим студентам право выбора элективных курсов 
                    и дисциплин по своему выбору согласно поданному заявлению и индивидуальному учебному плану. 
                    Регулярно проводятся дополнительные и факультативные занятия для усиления образовательного 
                    и научного потенциала студентов.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaBook className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Индивидуальный план</p>
                        <p className="text-gray-700">Выбор согласно учебному плану</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaRegCalendarAlt className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Регулярные занятия</p>
                        <p className="text-gray-700">Дополнительные факультативы</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaGraduationCap className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Развитие потенциала</p>
                        <p className="text-gray-700">Усиление образовательных результатов</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Особенный акцент на первой медицинской помощи */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200 mb-8"
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <FaFirstAid className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Факультативное занятие по оказанию первой медицинской помощи
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Специальный курс, направленный на обучение студентов базовым навыкам оказания 
                        экстренной медицинской помощи в различных жизненных ситуациях.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-700 border border-red-300">
                          🏥 Практические навыки
                        </span>
                        <span className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-700 border border-red-300">
                          ⚡ Экстренные ситуации
                        </span>
                        <span className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-700 border border-red-300">
                          🎯 Сертификат по окончании
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Доступные курсы */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Доступные элективные курсы</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {electiveCourses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <course.icon className="text-white text-xl" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">{course.title}</h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          {course.duration}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          {course.level}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        {course.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-[#023E8A] rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Процесс выбора курсов */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Процесс выбора курсов</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        step: "01",
                        title: "Подача заявления",
                        description: "Заполнение заявления на выбор элективных курсов"
                      },
                      {
                        step: "02",
                        title: "Утверждение плана",
                        description: "Согласование с академическим руководителем"
                      },
                      {
                        step: "03",
                        title: "Зачисление на курс",
                        description: "Формальное зачисление в учебные группы"
                      },
                      {
                        step: "04",
                        title: "Обучение и аттестация",
                        description: "Посещение занятий и итоговая аттестация"
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
                  Полная информация о курсах по выбору, расписании занятий и процедуре зачисления 
                  доступна на официальном сайте университета.
                </p>
                <motion.a 
                  href="https://salymbekov.com/ru/kursy-po-vyboru/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <FaBook className="mr-3" />
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
                className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200"
              >
                <div className="flex items-start">
                  <FaUserGraduate className="text-yellow-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Академический отдел
                    </h4>
                    <p className="text-gray-700 mb-3">
                      По вопросам выбора элективных курсов и составления индивидуального учебного плана:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        📞 Телефон: +996 (312) 00-00-00
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        📧 Email: courses@salymbekov.com
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        🏢 Кабинет: 301, учебный корпус
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
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

export default ElectiveCourses;