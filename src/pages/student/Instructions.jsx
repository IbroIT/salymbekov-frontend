import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaDownload, FaFileAlt, FaCalendarCheck, FaClock, FaChartLine, FaFilePdf, FaRegFileAlt, FaDatabase, FaUniversity } from 'react-icons/fa';

const Instructions = () => {
  const navigate = useNavigate();

  const resourcesSections = [
    { 
      path: "/student/resources/instructions", 
      name: "ИНСТРУКЦИИ И ПОЛОЖЕНИЯ", 
      icon: FaFileAlt,
      active: true,
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
    },
  ];

  const instructionsData = [
    {
      category: "Основные положения",
      files: [
        { 
          name: "Положение о промежуточной аттестации", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-promezhutochnoj-attestaczii.pdf",
          icon: FaFilePdf
        },
        { 
          name: "Положение о практике", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-praktike.pdf",
          icon: FaFilePdf
        },
        { 
          name: "Положение о кураторе", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-kuratore.pdf",
          icon: FaFilePdf
        }
      ]
    },
    {
      category: "Учебный процесс",
      files: [
        { 
          name: "Положение об итоговой аттестации", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-ob-itogovoj-attestaczii.pdf",
          icon: FaFilePdf
        },
        { 
          name: "Положение о самостоятельной работе", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-samostoyatelnoj-rabote.pdf",
          icon: FaFilePdf
        },
        { 
          name: "Положение о модульной системе", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-modulnoj-sisteme.pdf",
          icon: FaFilePdf
        }
      ]
    },
    {
      category: "Организационные документы",
      files: [
        { 
          name: "Положение о студенческом общежитии", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-studencheskom-obshhezhitii.pdf",
          icon: FaFilePdf
        },
        { 
          name: "Положение о СНО", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-SNO.pdf",
          icon: FaFilePdf
        },
        { 
          name: "Положение о Студенческом совете", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-Studencheskom-sovete.pdf",
          icon: FaFilePdf
        }
      ]
    },
    {
      category: "Академические процедуры",
      files: [
        { 
          name: "Положение об академической мобильности", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-ob-akademicheskoj-mobilnosti.pdf",
          icon: FaFilePdf
        },
        { 
          name: "Положение о переводе и восстановлении", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-o-perevode-i-vosstanovlenii.pdf",
          icon: FaFilePdf
        },
        { 
          name: "Положение об отчислении", 
          url: "https://salymbekov.com/wp-content/uploads/2024/01/Polozhenie-ob-otchislenii.pdf",
          icon: FaFilePdf
        }
      ]
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
                Ресурсы и документы
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Инструкции и положения
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Ресурсные базы и ресурсы Салымбеков университет руководствуются следующими инструкциями и положения при ведении образовательной и учебно-воспитательной деятельности.
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
              {/* Категории инструкций */}
              {instructionsData.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="mb-12 last:mb-0"
                >
                  {/* Заголовок категории */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      <FaRegFileAlt className="mr-3 text-[#023E8A]" />
                      {category.category}
                    </h2>
                  </div>

                  {/* Файлы инструкций */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.files.map((file, fileIndex) => (
                      <motion.a
                        key={fileIndex}
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: fileIndex * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-lg transition-all group"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                            <file.icon className="text-white text-sm" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-[#023E8A] transition-colors text-sm leading-tight">
                              {file.name}
                            </h3>
                          </div>
                        </div>
                        <FaDownload className="text-gray-400 group-hover:text-[#023E8A] transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Информация о документах */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBook className="mr-3 text-[#023E8A]" />
                  О нормативных документах
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Все положения разработаны в соответствии с законодательством Кыргызской Республики",
                    "Документы регулярно актуализируются и пересматриваются",
                    "Положения являются обязательными для всех участников образовательного процесса",
                    "Изменения в документах вступают в силу после официального утверждения",
                    "Студенты имеют право ознакомиться со всеми нормативными документами",
                    "Документы обеспечивают прозрачность и стандартизацию учебного процесса"
                  ].map((item, index) => (
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
                      <span className="text-gray-700 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
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
                  <FaRegFileAlt className="text-yellow-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Нужна дополнительная информация?
                    </h4>
                    <p className="text-gray-700 mb-3">
                      По вопросам, связанным с нормативными документами и положениями, обращайтесь в учебный отдел или деканат вашего факультета.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        📞 Контакты учебного отдела
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        📧 Электронная почта
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        🏢 Кабинет 101
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

export default Instructions;