import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaHome, FaWifi, FaUtensils, FaShower, FaBed, FaDesktop, FaMapMarkerAlt, FaHospital, FaHandHoldingHeart, FaBookOpen, FaGlobe, FaBrain, FaUsersCog } from 'react-icons/fa';

const SocialSupport = () => {
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
      active: true,
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
    },
  ];

  const supportTypes = [
    {
      icon: FaGraduationCap,
      title: "Льготы по оплате обучения",
      description: "Снижение стоимости оплаты за обучение в процентном соотношении"
    },
    {
      icon: FaHome,
      title: "Бесплатное проживание",
      description: "Предоставление мест в общежитии на безвозмездной основе"
    },
    {
      icon: FaUtensils,
      title: "Льготное питание",
      description: "Субсидированное питание в столовой университета"
    },
    {
      icon: FaRegCalendarAlt,
      title: "Отсрочка платежей",
      description: "Рассрочка оплаты обучения при отсутствии задолженностей"
    },
    {
      icon: FaUserFriends,
      title: "Особые случаи",
      description: "Поддержка в исключительных ситуациях по решению комиссии"
    },
    {
      icon: FaBook,
      title: "Социальные гарантии",
      description: "Дополнительные меры поддержки для отдельных категорий"
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
                Социальная поддержка
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Комиссия по социальной поддержке студентов
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Система предоставления льгот и социальных гарантий для поддержки студентов 
              в достижении высоких образовательных результатов
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
              {/* Общие положения */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <FaHandHoldingHeart className="mr-3 text-[#023E8A]" />
                    ОБЩИЕ ПОЛОЖЕНИЯ
                  </h2>
                  
                  <div className="space-y-6 text-gray-700">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="p-4 bg-white/70 rounded-lg border-l-4 border-[#023E8A]"
                    >
                      <p className="leading-relaxed">
                        Положение разработано на основе Устава Учреждения «Салымбеков Университет» 
                        (далее Университет), закона КР «Об образовании» и других нормативных правовых актов, 
                        регулирующих деятельность высших профессиональных учебных заведений.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="p-4 bg-white/70 rounded-lg border-l-4 border-[#0077B6]"
                    >
                      <p className="leading-relaxed">
                        Настоящее Положение разработано в целях социальной поддержки обучающихся и усиления 
                        мотивации студентов для достижения высоких образовательных результатов, а также 
                        предоставления дополнительных социальных гарантий отдельным категориям студентов Университета.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="p-4 bg-white/70 rounded-lg border-l-4 border-[#023E8A]"
                    >
                      <p className="leading-relaxed">
                        Данное Положение устанавливает единую систему предоставления льгот по оплате за обучение 
                        для студентов из числа граждан Кыргызской Республики, обучающихся в Университете на 
                        контрактной основе, и определяет порядок, виды и сроки предоставления льгот отдельным 
                        категориям студентов Университета.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="p-4 bg-white/70 rounded-lg border-l-4 border-[#0077B6]"
                    >
                      <p className="leading-relaxed">
                        Социальная поддержка студентов представляет собой предоставление льгот студентам в виде 
                        снижения стоимости оплаты за обучение на сумму, выраженную в процентном соотношении 
                        к установленной стоимости обучения.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Виды социальной поддержки */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Виды социальной поддержки</h3>
                <div className="grid grid-cols-1 md:grid-2 lg:grid-cols-3 gap-6">
                  {supportTypes.map((support, index) => (
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
                        <support.icon className="text-white text-2xl" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{support.title}</h4>
                      <p className="text-gray-700 text-sm">{support.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Порядок предоставления поддержки */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Порядок предоставления поддержки</h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Решение комиссии",
                        content: "Университет оказывает социальную поддержку студентам и предоставляет им льготы по оплате за обучение, на основании решения специальной комиссии, создаваемой и возглавляемой президентом Университета."
                      },
                      {
                        title: "Утверждение учредителями",
                        content: "Все формы социальной поддержки, в том числе льготы по оплате за обучение рассматриваются специальной комиссией и представляются на утверждение учредителям Университета."
                      },
                      {
                        title: "Финансовые возможности",
                        content: "Порядок, виды и размеры оказываемой социальной поддержки студентам Университета определяются самостоятельно исходя из финансовых возможностей Университета."
                      },
                      {
                        title: "Отсрочка и рассрочка",
                        content: "Социальная поддержка может быть оказана студентам Университета в форме отсрочки либо рассрочки при оплате обучения по представлению начальников учебных отделов факультетов и отсутствии академической и финансовой задолженности по оплате обучения за предыдущие семестры."
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/70 rounded-xl p-6 border border-white shadow-sm"
                      >
                        <h4 className="font-bold text-[#023E8A] mb-3 text-lg">{item.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{item.content}</p>
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
                className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBook className="mr-3 text-[#023E8A]" />
                  Положение о социальной поддержке студентов
                </h3>
                <p className="text-gray-700 mb-6">
                  Полный текст положения доступен для ознакомления на официальном сайте университета. 
                  В документе содержатся все детали и процедуры предоставления социальной поддержки.
                </p>
                <motion.a 
                  href="https://salymbekov.com/ru/komissija-po-socialnoj-podderzhke-studentov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <FaBookOpen className="mr-3" />
                  Открыть полный документ
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
                      Контакты комиссии
                    </h4>
                    <p className="text-gray-700 mb-3">
                      По вопросам социальной поддержки обращайтесь в комиссию:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        📞 Телефон: +996 (312) 00-00-00
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        📧 Email: social@salymbekov.com
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300">
                        🏢 Кабинет: 201, главный корпус
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

export default SocialSupport;