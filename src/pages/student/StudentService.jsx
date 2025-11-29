import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaHome, FaWifi, FaUtensils, FaShower, FaBed, FaDesktop, FaMapMarkerAlt, FaHospital, FaHandHoldingHeart, FaBookOpen, FaGlobe, FaBrain, FaUsersCog, FaFileAlt, FaDatabase, FaUserTie, FaHeadset, FaCertificate, FaInfoCircle } from 'react-icons/fa';
import img54 from '../../../assets/science/studentsphoto/54.webp';

const StudentService = () => {
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
      active: true,
    },
    { 
      path: "/student/opportunities/adaptation", 
      name: "АДАПТАЦИОННЫЕ ПРОГРАММЫ", 
      icon: FaUserGraduate,
    },
  ];

  const services = [
    {
      icon: FaFileAlt,
      title: "Академические справки",
      description: "Официальные документы об успеваемости и обучении"
    },
    {
      icon: FaCertificate,
      title: "Транскрипты",
      description: "Выписки оценок и пройденных дисциплин"
    },
    {
      icon: FaDatabase,
      title: "Информация из ИС Ebilim",
      description: "Доступ к данным системы электронного обучения"
    },
    {
      icon: FaUserTie,
      title: "Кадровые документы",
      description: "Оформление студенческой документации"
    },
    {
      icon: FaInfoCircle,
      title: "Консультации",
      description: "Информационная поддержка по учебным вопросам"
    },
    {
      icon: FaHeadset,
      title: "Поддержка студентов",
      description: "Помощь в решении административных вопросов"
    }
  ];

  const specialist = {
    name: "Батырбек кызы Жазира",
    position: "Заведующий Студенческим отделом кадров (СОК)",
    photo: img54,
    description: "Обеспечивает предоставление информации по результатам обучения и ведет документацию студентов"
  };

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
                Административная поддержка
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Центр обслуживания студентов
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Комплексное административное сопровождение и предоставление академической документации 
              для успешного обучения в университете
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
                    <FaUsersCog className="mr-3 text-[#023E8A]" />
                    ЦЕНТР ОБСЛУЖИВАНИЯ СТУДЕНТОВ
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Основной целью Центра обслуживания студентов является предоставление информации, 
                    касательно результатов обучения (справки, трансрипты). Вся информация надежно 
                    хранится в ИС Ebilim, по запросу студента заведующий студенческим отделом кадров 
                    предоставляет информацию по требования студентов.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaFileAlt className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Документация</p>
                        <p className="text-gray-700">Справки и транскрипты</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaDatabase className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">ИС Ebilim</p>
                        <p className="text-gray-700">Надежное хранение данных</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaUserTie className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Поддержка</p>
                        <p className="text-gray-700">Профессиональное сопровождение</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Услуги центра */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Предоставляемые услуги</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
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
                        <service.icon className="text-white text-2xl" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-700 text-sm">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Специалист */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Руководитель центра</h3>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={specialist.photo} alt={specialist.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{specialist.name}</h4>
                      <p className="text-[#023E8A] font-semibold text-lg mb-4">{specialist.position}</p>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {specialist.description}
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 border border-purple-300 font-medium">
                          📊 Учет успеваемости
                        </span>
                        <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 border border-purple-300 font-medium">
                          📑 Оформление документов
                        </span>
                        <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 border border-purple-300 font-medium">
                          💼 Кадровое делопроизводство
                        </span>
                        <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 border border-purple-300 font-medium">
                          🎓 Академические справки
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Процесс получения услуг */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Как получить услуги</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        step: "01",
                        title: "Подача запроса",
                        description: "Обращение в центр с конкретным запросом"
                      },
                      {
                        step: "02",
                        title: "Обработка заявки",
                        description: "Проверка данных в системе Ebilim"
                      },
                      {
                        step: "03",
                        title: "Подготовка документов",
                        description: "Оформление необходимой документации"
                      },
                      {
                        step: "04",
                        title: "Выдача результата",
                        description: "Получение готовых документов"
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
                  <FaInfoCircle className="mr-3 text-[#023E8A]" />
                  Дополнительная информация
                </h3>
                <p className="text-gray-700 mb-6">
                  Центр обслуживания студентов работает для обеспечения комфортного учебного процесса 
                  и оперативного решения административных вопросов. Все услуги предоставляются 
                  в соответствии с установленными регламентами университета.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <FaFileAlt className="mr-3" />
                    Запросить справку
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-white text-[#023E8A] font-medium rounded-lg border border-[#023E8A] hover:bg-[#023E8A] hover:text-white transition-all duration-300"
                  >
                    <FaHeadset className="mr-3" />
                    Консультация
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
                  <FaUsersCog className="text-blue-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Центр обслуживания студентов
                    </h4>
                    <p className="text-gray-700 mb-3">
                      По всем вопросам академической документации и административной поддержки:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        📞 Телефон: +996 (312) 00-00-00
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        📧 Email: student-service@salymbekov.com
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        🏢 Кабинет: 101, главный корпус
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        🕒 Часы работы: 8:30 - 17:30
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

export default StudentService;