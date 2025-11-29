import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaDownload, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaComments, FaChalkboardTeacher } from 'react-icons/fa';

const StudentCouncil = () => {
  const navigate = useNavigate();
  const councilSections = [
    { 
      path: "/student/community/council", 
      name: "СТУДЕНЧЕСКИЙ СОВЕТ", 
      icon: FaUsers,
      active: true 
    },
    { 
      path: "/student/community/science", 
      name: "СТУДЕНЧЕСКОЕ НАУЧНОЕ ОБЪЕДИНЕНИЕ", 
      icon: FaGraduationCap,
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
          <Link 
            to="/student"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Назад к студенту
          </Link>

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
              Студенческий совет
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Положение о студенческом совете Салымбеков Университет
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
                ПОЛОЖЕНИЕ О СТУДЕНЧЕСКОМ СОВЕТЕ
              </h2>

              {/* Общие положения */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaBook className="mr-3" />
                  1. Общие положения
                </h3>
                
                <div className="space-y-6">
                  {[
                    "1.1. Студенческий совет Учреждения «Салымбеков Университет» (далее – Студенческий совет) является выборным представительным органом студенческого самоуправления, представляющим интересы студентов в области учебной, научной, культурной, спортивной и общественной жизни.",
                    "1.2. Студенческий совет создается в целях обеспечения реализации прав студентов на участие в управлении образовательным процессом, решения важных вопросов жизнедеятельности студенческой молодежи, развития ее социальной активности, поддержки и реализации социальных инициатив.",
                    "1.3. Студенческий совет в своей деятельности руководствуется Конституцией Кыргызской Республики, Законом Кыргызской Республики «Об образовании», Уставом Университета, настоящим Положением и иными локальными нормативными актами Университета.",
                    "1.4. Студенческий совет осуществляет свою деятельность на принципах добровольности, равноправия, самоуправления, законности и гласности."
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Основные задачи */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6">2. Основные задачи Студенческого совета</h3>
                
                <div className="space-y-4">
                  {[
                    "2.1. Представление интересов студентов перед администрацией Университета;",
                    "2.2. Содействие в организации учебного процесса и улучшении качества образования;",
                    "2.3. Организация культурно-массовых, спортивных и научных мероприятий;",
                    "2.4. Развитие волонтерского движения и социальных проектов;",
                    "2.5. Содействие в решении социально-бытовых вопросов студентов;",
                    "2.6. Организация досуга студентов и развитие творческого потенциала;",
                    "2.7. Содействие в профилактике правонарушений среди студентов;",
                    "2.8. Участие в решении вопросов, связанных с назначением стипендий;",
                    "2.9. Содействие в трудоустройстве выпускников;",
                    "2.10. Взаимодействие с другими студенческими организациями."
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Функции */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6">3. Функции Студенческого совета</h3>
                
                <div className="space-y-4">
                  {[
                    "3.1. Участие в разработке и реализации программ развития Университета;",
                    "3.2. Организация и проведение студенческих мероприятий;",
                    "3.3. Представление интересов студентов в различных комиссиях и советах;",
                    "3.4. Содействие в разрешении конфликтных ситуаций;",
                    "3.5. Информирование студентов о решениях администрации;",
                    "3.6. Организация работы студенческих клубов и объединений;",
                    "3.7. Участие в организации проживания в общежитиях;",
                    "3.8. Содействие в организации питания студентов."
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Права */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6">4. Права Студенческого совета</h3>
                
                <div className="space-y-4">
                  {[
                    "4.1. Вносить предложения по улучшению учебного процесса и организации быта студентов;",
                    "4.2. Участвовать в разработке локальных нормативных актов, затрагивающих интересы студентов;",
                    "4.3. Организовывать и проводить культурно-массовые и спортивные мероприятия;",
                    "4.4. Представлять интересы студентов в различных комиссиях и советах Университета;",
                    "4.5. Получать необходимую информацию от администрации Университета для выполнения своих задач;",
                    "4.6. Создавать комиссии и рабочие группы для решения конкретных задач;",
                    "4.7. Участвовать в распределении средств, выделяемых на студенческие мероприятия;",
                    "4.8. Вносить предложения по поощрению студентов за активную деятельность."
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Организация деятельности */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6">5. Организация деятельности Студенческого совета</h3>
                
                <div className="space-y-6">
                  {[
                    "5.1. Студенческий совет избирается на общем собрании студентов сроком на один год.",
                    "5.2. В состав Студенческого совета входят представители от каждого курса и факультета.",
                    "5.3. Руководство Студенческим советом осуществляет председатель, избираемый из числа членов совета.",
                    "5.4. Заседания Студенческого совета проводятся не реже одного раза в месяц.",
                    "5.5. Решения Студенческого совета принимаются большинством голосов присутствующих членов.",
                    "5.6. Студенческий совет отчитывается о своей деятельности перед общим собранием студентов.",
                    "5.7. Администрация Университета оказывает содействие в деятельности Студенческого совета."
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors"
                    >
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Download Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Скачать полное положение
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Официальный документ о студенческом совете Университета
                      </p>
                    </div>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                    >
                      <FaDownload className="mr-3" />
                      Положение о студенческом совете
                    </motion.a>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentCouncil;