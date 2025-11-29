import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaGraduationCap, FaComments, FaChalkboardTeacher } from 'react-icons/fa';

const StudentScience = () => {
  const navigate = useNavigate();

  const councilSections = [
    { 
      path: "/student/community/council", 
      name: "СТУДЕНЧЕСКИЙ СОВЕТ", 
      icon: FaUsers,
    },
    { 
      path: "/student/community/science", 
      name: "СТУДЕНЧЕСКОЕ НАУЧНОЕ ОБЪЕДИНЕНИЕ", 
      icon: FaGraduationCap,
      active: true 
    },
    { 
      path: "/student/community/debate", 
      name: "ДЕБАТНЫЙ КЛУБ", 
      icon: FaComments 
    },
    { 
      path: "/student/community/tutor", 
      name: "ТЬЮТОРСКОЕ ДВИЖЕНИЕ", 
      icon: FaChalkboardTeacher 
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
                Студенческое самоуправление
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Студенческое научное объединение
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Организация для студентов, интересующихся научной деятельностью и исследованиями
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
                {councilSections.map((section) => {
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#023E8A] pb-4">
                СТУДЕНЧЕСКОЕ НАУЧНОЕ ОБЪЕДИНЕНИЕ
              </h2>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Студенческое научное объединение (СНО) – это добровольная организация студентов, 
                  заинтересованных в научной деятельности и желающих развивать свои исследовательские навыки.
                </p>

                <h3 className="text-2xl font-semibold text-[#023E8A] mb-4 mt-8">
                  Цели и задачи СНО
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#023E8A] mr-2">•</span>
                    <span className="text-gray-700">Содействие развитию научного потенциала студентов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#023E8A] mr-2">•</span>
                    <span className="text-gray-700">Организация и проведение научных мероприятий</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#023E8A] mr-2">•</span>
                    <span className="text-gray-700">Поддержка студенческих научных проектов и исследований</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#023E8A] mr-2">•</span>
                    <span className="text-gray-700">Участие в научных конференциях и конкурсах</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#023E8A] mb-4 mt-8">
                  Направления деятельности
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#023E8A] mb-2">Научные исследования</h4>
                    <p className="text-gray-700 text-sm">Поддержка и координация студенческих научных проектов</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#023E8A] mb-2">Конференции</h4>
                    <p className="text-gray-700 text-sm">Организация студенческих научных конференций</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#023E8A] mb-2">Публикации</h4>
                    <p className="text-gray-700 text-sm">Помощь в публикации научных работ студентов</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#023E8A] mb-2">Мастер-классы</h4>
                    <p className="text-gray-700 text-sm">Проведение образовательных мероприятий</p>
                  </div>
                </div>

                <p className="text-gray-600 italic text-center mt-8">
                  Для получения дополнительной информации о деятельности СНО обращайтесь в отдел науки университета.
                </p>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentScience;
