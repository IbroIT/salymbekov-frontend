import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaAward, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaBrain, FaComments, FaLightbulb, FaChalkboardTeacher, FaPaintBrush } from 'react-icons/fa';

const DebateClub = () => {
  const navigate = useNavigate();
  
  const studentSections = [
    { 
      path: "/student/community/council", 
      name: "СТУДЕНЧЕСКИЙ СОВЕТ", 
      icon: FaUsers,
    },
    { 
      path: "/student/community/science", 
      name: "СТУДЕНЧЕСКОЕ НАУЧНОЕ ОБЪЕДИНЕНИЕ", 
      icon: FaGraduationCap,
    },
    { 
      path: "/student/community/debate", 
      name: "ДЕБАТНЫЙ КЛУБ", 
      icon: FaComments,
      active: true 
    },
    { 
      path: "/student/community/tutor", 
      name: "ТЬЮТОРСКОЕ ДВИЖЕНИЕ", 
      icon: FaChalkboardTeacher 
    },
    { 
      path: "/student/community/clubs", 
      name: "ТВОРЧЕСКИЕ КОЛЛЕКТИВЫ И КРУЖКИ", 
      icon: FaPaintBrush 
    }
  ];

  const tasks = [
    {
      icon: FaGraduationCap,
      title: "Обучающие",
      description: "Способствуют закреплению, актуализации полученных ранее знаний, овладению новыми знаниями, умениями и навыками"
    },
    {
      icon: FaBrain,
      title: "Развивающие", 
      description: "Способствуют развитию интеллектуальных, лингвистических качеств, творческих способностей. Дебаты развивают логику, критическое мышление, позволяют сформировать системное видение проблемы"
    },
    {
      icon: FaUserFriends,
      title: "Воспитательные",
      description: "Способствуют формированию культуры спора, терпимости, признанию множественности подходов к решению проблемы"
    },
    {
      icon: FaComments,
      title: "Коммуникативные",
      description: "Учебная деятельность осуществляется в межличностном общении, обучение происходит в процессе совместной деятельности"
    }
  ];

  const advantages = [
    "Формирование речевого критического мышления обучаемых",
    "Дифференциация содержания учебного материала",
    "Обеспечение индивидуализации учебной деятельности", 
    "Разнообразие форм и методов обучения",
    "Формирование обобщенных практических умений обучаемых"
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
                Студенческие сообщества
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Дебатный клуб
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Дебатный клуб Салымбеков Университет
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
                {studentSections.map((section) => {
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
              {/* Цель клуба */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaLightbulb className="mr-3 text-[#023E8A]" />
                  Цель дебатного клуба
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Развитие у студентов Салымбеков Университет критического мышления для решения различных проблем 
                    в профессиональной деятельности и в практических жизненных ситуациях, т.е. тех навыков, которые 
                    не могут дать или дают в недостаточной степени традиционные образовательные программы.
                  </p>
                </div>
              </motion.div>

              {/* Задачи */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaBook className="mr-3" />
                  Задачи дебатного клуба
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tasks.map((task, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <task.icon className="text-white text-lg" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 group-hover:text-[#023E8A] transition-colors">
                          {task.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {task.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Преимущества */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaAward className="mr-3" />
                  Преимущества технологии дебатов
                </h3>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="space-y-3">
                    {advantages.map((advantage, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center p-3 bg-white/70 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{advantage}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Призыв к действию */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Присоединяйтесь к нашему дебатному клубу!
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Развивайте свои навыки критического мышления, ораторского мастерства и аргументации 
                  в дружеской и поддерживающей атмосфере.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  <FaComments className="mr-3" />
                  Стать участником клуба
                </motion.button>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DebateClub;