import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaHome, FaWifi, FaUtensils, FaShower, FaBed, FaDesktop, FaMapMarkerAlt, FaHospital, FaHandHoldingHeart, FaBookOpen, FaGlobe, FaBrain, FaUsersCog, FaPlane, FaUniversity, FaMicroscope, FaFlask, FaUserMd, FaFilePdf, FaDownload } from 'react-icons/fa';
import img48 from '../../../assets/science/studentsphoto/48.jpeg';
import img49 from '../../../assets/science/studentsphoto/49.jpeg';
import img50 from '../../../assets/science/studentsphoto/50.jpeg';
import img51 from '../../../assets/science/studentsphoto/51.jpeg';

const Mobility = () => {
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
      active: true,
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

  const mobilityPrograms = [
    {
      university: "Adam University",
      photo: img48,
      presentations: [
        "AIDS",
        "Human Papilloma-Virus - Syed Rehman Arshad",
        "AIDS IN PREGNANT WOMEN - Syeda Farwa",
        "Antibiotics",
        "Indications for AB therapy in covid-19 - Ahmad Waqas, Khan Taimur, GM 7-20",
        "Super bacteria as result of antibiotic misuse - Uzair Md, GM 6-20, Malik Asif, GM 5-20"
      ]
    },
    {
      university: "Salymbekov University",
      photo: img49,
      presentations: [
        "AIDS day",
        "AIDS in pregnant women - Syeda Farwa",
        "HIV - EMAAN JAVAID",
        "HIV - Humza Jalil",
        "Elite controllers in HIV - Olga Peregudova",
        "Epithelial tissue lecture",
        "Prions role in Neurodegenerative diseases - Aziz Naba, Zulficar Komal, GM 6-19",
        "Immunotherapy of acute and chronic Leukemia - Khan Taimur SU GM 7-20"
      ]
    },
    {
      university: "AKFA University",
      photo: img50,
      presentations: [
        "Elite controllers in HIV - Olga Peregudova"
      ]
    },
    {
      university: "ASMI University",
      photo: img51,
      presentations: [
        "Prevention covid 19 - Butt Sohira Naz, GM 7-20, SU",
        "COVID 19 Types of Vaccines advantages and disadvantages"
      ]
    },
    {
      university: "EMU, Tashkent, Uzbekistan",
      presentations: [
        "Artificial intelligence in dermatology",
        "Bones"
      ]
    },
    {
      university: "День Науки – Салымбеков университет",
      presentations: [
        "PCOS by Syed Rehman 2 Prevalence of Anemia in pregnant women"
      ]
    }
  ];

  const researchAreas = [
    {
      icon: FaUserMd,
      title: "Инфекционные заболевания",
      topics: ["ВИЧ/СПИД", "ВПЧ", "COVID-19", "Антибиотикорезистентность"]
    },
    {
      icon: FaMicroscope,
      title: "Неврология",
      topics: ["Нейродегенеративные заболевания", "Прионы", "Иммунотерапия"]
    },
    {
      icon: FaFlask,
      title: "Гинекология и акушерство",
      topics: ["Беременность и ВИЧ", "Анемия у беременных", "СПКЯ"]
    },
    {
      icon: FaUniversity,
      title: "Иммунология",
      topics: ["Иммунотерапия лейкемии", "Вакцины", "Искусственный интеллект в дерматологии"]
    }
  ];

  // Файлы для скачивания с сайта
  const files = [
    {
      name: "Презентация - AIDS Adam University",
      type: "PDF",
      size: "2.4 MB",
      url: "#"
    },
    {
      name: "Исследование - Human Papilloma-Virus",
      type: "PDF", 
      size: "1.8 MB",
      url: "#"
    },
    {
      name: "Научная работа - AIDS IN PREGNANT WOMEN",
      type: "PDF",
      size: "3.1 MB",
      url: "#"
    },
    {
      name: "Презентация - Antibiotics misuse",
      type: "PPTX",
      size: "4.2 MB",
      url: "#"
    },
    {
      name: "Исследование - Immunotherapy of Leukemia",
      type: "PDF",
      size: "2.7 MB",
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
                Международное сотрудничество
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Академическая мобильность
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Презентации и научные работы студентов и преподавателей во время академической мобильности. 
              Международный обмен знаниями и исследовательский опыт.
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
                    <FaGlobe className="mr-3 text-[#023E8A]" />
                    АКАДЕМИЧЕСКАЯ МОБИЛЬНОСТЬ
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Программы академической мобильности предоставляют уникальную возможность для студентов 
                    и преподавателей участвовать в международном образовательном процессе, представлять 
                    научные работы и обмениваться исследовательским опытом с ведущими университетами мира.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaUniversity className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Партнерские вузы</p>
                        <p className="text-gray-700">Международное сотрудничество</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaMicroscope className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Научные работы</p>
                        <p className="text-gray-700">Исследования и презентации</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaPlane className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Обмен опытом</p>
                        <p className="text-gray-700">Международные конференции</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Научные направления */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Основные научные направления</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {researchAreas.map((area, index) => (
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
                      <h4 className="font-bold text-gray-900 mb-3">{area.title}</h4>
                      <div className="space-y-1">
                        {area.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="text-sm text-gray-600">
                            • {topic}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Презентации по университетам */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Презентации и научные работы</h3>
                
                <div className="space-y-6">
                  {mobilityPrograms.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                    >
                      <div className="flex flex-col lg:flex-row gap-6 mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <FaUniversity className="mr-3 text-[#023E8A]" />
                            {program.university}
                          </h4>
                        </div>
                        {program.photo && (
                          <div className="w-full lg:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                            <img src={program.photo} alt={program.university} className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {program.presentations.map((presentation, presIndex) => (
                          <motion.div
                            key={presIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: presIndex * 0.05 }}
                            className="flex items-start p-3 bg-white/70 rounded-lg border border-white"
                          >
                            <div className="w-2 h-2 bg-[#023E8A] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{presentation}</span>
                          </motion.div>
                        ))}
                      </div>
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
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FaFilePdf className="mr-3 text-[#023E8A]" />
                    Материалы для скачивания
                  </h3>
                  
                  <div className="space-y-4">
                    {files.map((file, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white/80 rounded-lg border border-yellow-300 hover:shadow-md transition-shadow"
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

              {/* Галерея фотографий */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Фотогалерея мероприятий</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Место для фотографий - можно добавить позже */}
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: item * 0.1 }}
                      className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center text-gray-400"
                    >
                      <FaUniversity className="text-4xl" />
                    </motion.div>
                  ))}
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
                  Полная информация о программах академической мобильности, условиях участия 
                  и текущих проектах доступна на официальном сайте университета.
                </p>
                <motion.a 
                  href="https://salymbekov.com/ru/akademmobilnost/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <FaGlobe className="mr-3" />
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
                  <FaUsersCog className="text-blue-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Отдел международных связей
                    </h4>
                    <p className="text-gray-700 mb-3">
                      По вопросам академической мобильности и международного сотрудничества:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        📞 Телефон: +996 (312) 00-00-00
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        📧 Email: mobility@salymbekov.com
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        🏢 Кабинет: 401, международный отдел
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        🕒 Часы приема: 10:00 - 17:00
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

export default Mobility;