import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaDownload, FaFileAlt, FaCalendarCheck, FaClock, FaChartLine, FaRegFileAlt, FaLaptop, FaGlobe, FaDatabase, FaUniversity } from 'react-icons/fa';

const InfoSystem = () => {
  const navigate = useNavigate();

  const resourcesSections = [
    { 
      path: "/student/resources/instructions", 
      name: "ИНСТРУКЦИИ И ПОЛОЖЕНИЯ", 
      icon: FaFileAlt,
    },
    { 
      path: "/student/resources/infosystem", 
      name: "ИНФОРМАЦИОННАЯ СИСТЕМА", 
      icon: FaDatabase,
      active: true,
    },
    { 
      name: "ЭЛЕКТРОННАЯ БИБЛИОТЕКА", 
      icon: FaBook,
      disabled: true,
    },
    { 
      path: "/student/resources/edu-resources", 
      name: "УЧЕБНЫЕ РЕСУРСЫ", 
      icon: FaUniversity,
    },
  ];

  const systemsData = [
    {
      icon: FaGlobe,
      title: "eBilim - Международный факультет медицины",
      description: "Образовательная платформа для студентов Международного факультета медицины для полноценного ведения учебного процесса, проведения модулей и экзаменов в онлайн-режиме.",
      features: [
        "Добавление и редактирование учебной нагрузки",
        "Управление студентами и преподавателями",
        "Электронные ведомости и расписание",
        "Электронная библиотека",
        "Трехъязычный интерфейс (кыргызский, русский, английский)"
      ],
      url: "https://ebilim.salymbekov.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaDatabase,
      title: "Edu - Колледж IT и бизнеса",
      description: "Образовательная платформа для студентов Международного колледжа IT и бизнеса, адаптированный под учебный процесс и образовательную деятельность колледжа.",
      features: [
        "Проведение модулей и экзаменов",
        "Размещение учебной информации",
        "Управление образовательным процессом",
        "Онлайн-тестирование",
        "Академическая отчетность"
      ],
      url: "https://edu.salymbekov.com",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaUniversity,
      title: "Lincoln University College",
      description: "Образовательный портал партнерского университета Lincoln University College, предоставляющий возможность для студентов колледжа участвовать в совместном учебном процессе.",
      features: [
        "Доступ к совместным программам",
        "Электронная библиотека партнера",
        "Международные образовательные ресурсы",
        "Онлайн-курсы и материалы",
        "Межвузовское сотрудничество"
      ],
      url: "http://online.collaborative.lincoln.edu.my/",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaBook,
      title: "Ekyzmat - Делопроизводство",
      description: "Портал для ведения делопроизводства и кадров в электронном виде без использования бумажных носителей.",
      features: [
        "Электронный документооборот",
        "Управление кадровыми процессами",
        "Автоматизация административных задач",
        "Цифровое архивирование",
        "Безбумажные технологии"
      ],
      url: "#",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FaGraduationCap,
      title: "Электронная библиотека eBilim",
      description: "Ресурсная платформа для студентов Салымбеков университета, которая имеет книги в электронном формате.",
      features: [
        "Обширная коллекция электронных книг",
        "Учебные материалы и пособия",
        "Научные публикации",
        "Поиск по каталогу",
        "Круглосуточный доступ"
      ],
      url: "#",
      color: "from-indigo-500 to-blue-500"
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
                Ресурсы и технологии
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Информационная система
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Салымбеков университет предоставляет своим студентам и преподавателям возможность полноценного доступа к образовательным порталам и цифровым ресурсам
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
                {resourcesSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.path || section.name}
                      whileHover={section.disabled ? {} : { scale: 1.02 }}
                      whileTap={section.disabled ? {} : { scale: 0.98 }}
                    >
                      <button
                        onClick={section.disabled ? undefined : () => navigate(section.path)}
                        disabled={section.disabled}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          section.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50'
                        } ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700'
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
              {/* Информационные системы */}
              <div className="space-y-8">
                {systemsData.map((system, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Иконка и заголовок */}
                      <div className="lg:w-1/4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${system.color} rounded-2xl flex items-center justify-center mb-4`}>
                          <system.icon className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {system.title}
                        </h3>
                        {system.url !== "#" && (
                          <motion.a
                            href={system.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-4 py-2 bg-white text-[#023E8A] font-semibold rounded-lg border border-[#023E8A] hover:bg-[#023E8A] hover:text-white transition-all"
                          >
                            <FaGlobe className="mr-2" />
                            Перейти
                          </motion.a>
                        )}
                      </div>

                      {/* Описание и функции */}
                      <div className="lg:w-3/4">
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {system.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {system.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                              className="flex items-center p-2 bg-white/70 rounded-lg"
                            >
                              <div className="w-6 h-6 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Преимущества использования */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaLaptop className="mr-3 text-[#023E8A]" />
                  Преимущества цифровых образовательных платформ
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Доступность",
                      description: "Круглосуточный доступ к учебным материалам из любой точки мира"
                    },
                    {
                      title: "Эффективность",
                      description: "Автоматизация учебных процессов и быстрый обмен информацией"
                    },
                    {
                      title: "Интерактивность",
                      description: "Возможность онлайн-тестирования и интерактивного обучения"
                    }
                  ].map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white/70 p-4 rounded-lg text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                      <p className="text-sm text-gray-600">{advantage.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Техническая поддержка */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
              >
                <div className="flex items-start">
                  <FaLaptop className="text-purple-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Нужна помощь с доступом?
                    </h4>
                    <p className="text-gray-700 mb-3">
                      При возникновении проблем с доступом к информационным системам обращайтесь в отдел информационных технологий.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-purple-300">
                        📞 IT-отдел: +996 (312) 00-00-00
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-purple-300">
                        📧 Email: it@salymbekov.com
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-purple-300">
                        🏢 Кабинет: 301 (главный корпус)
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

export default InfoSystem;