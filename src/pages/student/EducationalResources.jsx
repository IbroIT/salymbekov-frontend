import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaLaptop, FaInfoCircle, FaBookOpen, FaGlobe, FaDatabase, FaUniversity, FaSearch, FaGraduationCap, FaFileAlt } from 'react-icons/fa';

const EducationalResources = () => {
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
      active: true 
    }
  ];

  const resourcesData = [
    {
      icon: FaGlobe,
      title: "Research4Life - Всемирная организация здравоохранения",
      description: "Портал предоставляет полный доступ к электронным изданиям, журналам и библиотекам по направлению медицина, IT, архитектуры, сельского хозяйства для качественной подготовки специалистов широкого профиля.",
      stats: [
        "Более 198 000 электронных изданий",
        "40 000 научных журналов", 
        "150 ресурсных баз данных",
        "Международные стандарты качества"
      ],
      access: "Полный доступ для студентов и преподавателей",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaBook,
      title: "SAGE Publishing",
      description: "Одно из крупнейших мировых издательств, выпускающий ежемесячно более 1000 журналов, книг по медицинской, гуманитарной и естественно-научной тематике.",
      stats: [
        "Ежемесячно 1000+ журналов",
        "Медицинская и научная тематика",
        "Гуманитарные науки",
        "Естественно-научные публикации"
      ],
      access: "Полный доступ ко всем публикациям",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaDatabase,
      title: "DeGruyter",
      description: "Одно из крупнейших европейских издательств, включающий базу данных из 210 журналов по академическим и гуманитарным наукам.",
      stats: [
        "210 научных журналов",
        "Европейские академические стандарты",
        "Гуманитарные науки",
        "Междисциплинарные исследования"
      ],
      access: "Доступ к полным текстам статей",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaUniversity,
      title: "Lincoln University College (LUC)",
      description: "Партнерский вуз нашего университета, который предоставил доступ к своим базам данных по ключевым направлениям как медицина, бизнес, IT, здравоохранение.",
      stats: [
        "Книги и монографии партнера",
        "Научные журналы LUC",
        "Медицинские ресурсы",
        "Бизнес и IT публикации"
      ],
      access: "Межвузовский доступ к ресурсам",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FaSearch,
      title: "EBSCO Publishing",
      description: "Крупнейший поставщик научных ресурсов ведущих издательств мира, предоставляющий доступ к 15 тематическим базам данных по медицине, IT, бизнесу и менеджменту.",
      stats: [
        "160 000+ монографий и книг",
        "15 тематических баз данных",
        "Базы данных Medline",
        "Экономика и бизнес ресурсы"
      ],
      access: "Полный доступ ко всем базам данных",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: FaGraduationCap,
      title: "Образовательный портал KNOX",
      description: "Образовательный портал имеющий широкий спектр образовательных и исследовательских баз в области медицины, IT и бизнеса.",
      stats: [
        "Исследовательские базы данных",
        "Образовательные ресурсы",
        "Медицинские исследования",
        "IT и бизнес публикации"
      ],
      access: "Доступ к исследовательским материалам",
      color: "from-teal-500 to-green-500"
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
                Ресурсная база
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Образовательные ресурсы
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Научная библиотека Салымбеков университет включает в себя полноценные бумажные и электронные ресурсы для учебно-воспитательных и научно-исследовательских процессов
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
                  <h3 className="font-bold text-lg">РЕСУРСЫ</h3>
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
                          section.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
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
              {/* Введение */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-[#023E8A] pb-4">
                  НАУЧНАЯ БИБЛИОТЕКА И ОБРАЗОВАТЕЛЬНЫЕ РЕСУРСЫ
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Научная библиотека Салымбеков университет включает в себя полноценные бумажные и электронные ресурсы, 
                    каталоги, электронные журналы и базы данных для содействия развития и обеспечения учебно-воспитательных 
                    и научно-исследовательских ресурсов для студентов и преподавателей университета.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Научная библиотека является одним из значимых структурных подразделений вуза, ответственная за 
                    учебно-воспитательный и научно-исследовательский процессы.
                  </p>
                </div>
              </motion.div>

              {/* Образовательные ресурсы */}
              <div className="space-y-8">
                {resourcesData.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Иконка и заголовок */}
                      <div className="lg:w-1/4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-4`}>
                          <resource.icon className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {resource.title}
                        </h3>
                        <div className="bg-white/80 rounded-lg p-3 border border-green-200">
                          <p className="text-sm text-[#023E8A] font-semibold">
                            {resource.access}
                          </p>
                        </div>
                      </div>

                      {/* Описание и статистика */}
                      <div className="lg:w-3/4">
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {resource.stats.map((stat, statIndex) => (
                            <motion.div
                              key={statIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: statIndex * 0.1 }}
                              className="flex items-center p-3 bg-white/70 rounded-lg"
                            >
                              <div className="w-6 h-6 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                              <span className="text-gray-700 text-sm">{stat}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Преимущества доступа */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBookOpen className="mr-3 text-[#023E8A]" />
                  Преимущества доступа к образовательным ресурсам
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Актуальные научные публикации",
                    "Международные стандарты качества",
                    "Широкий спектр дисциплин",
                    "Круглосуточный доступ",
                    "Поддержка исследований",
                    "Междисциплинарные ресурсы"
                  ].map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center p-3 bg-white/70 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 text-sm">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Контактная информация библиотеки */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200"
              >
                <div className="flex items-start">
                  <FaBookOpen className="text-yellow-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Научная библиотека университета
                    </h4>
                    <p className="text-gray-700 mb-3">
                      По вопросам доступа к образовательным ресурсам и научным базам данных обращайтесь в научную библиотеку.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        📞 Библиотека: +996 (312) 00-00-00
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        📧 Email: library@salymbekov.com
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        🕒 Часы работы: 9:00 - 18:00
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        🏢 Читальный зал: 2 этаж
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

export default EducationalResources;