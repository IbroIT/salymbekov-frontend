import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaDownload, FaFileAlt, FaCalendarCheck, FaClock, FaChartLine } from 'react-icons/fa';

const ModuleSchedule = () => {
  const navigate = useNavigate();

  const scheduleSections = [
    { 
      path: "/student/schedule/study", 
      name: "ГРАФИК УЧЕБНОГО ПРОЦЕССА", 
      icon: FaChartLine,
    },
    { 
      path: "/student/schedule/modules", 
      name: "ГРАФИКИ МОДУЛЕЙ И ЭКЗАМЕНОВ", 
      icon: FaCalendarCheck,
      active: true 
    },
    { 
      path: "/student/schedule/practice", 
      name: "ГРАФИКИ ПРОИЗВОДСТВЕННОЙ ПРАКТИКИ", 
      icon: FaUserGraduate,
    },
    { 
      path: "/student/schedule/mfm", 
      name: "РАСПИСАНИЕ МФМ", 
      icon: FaBook,
    },
    { 
      path: "/student/schedule/college", 
      name: "РАСПИСАНИЕ КОЛЛЕДЖА", 
      icon: FaRegCalendarAlt,
    }
  ];

  const scheduleData = [
    {
      year: '2023-2024',
      files: [
        { name: 'График экзаменов GM+1–5-23', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов GM-1-22', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов (зимней сессии) GM-1-22f', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов ЛД-1-23', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов (зимней сессии) ЛД-1-23з', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов ЛД-1-21', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' }
      ]
    },
    {
      year: '2022-2023',
      files: [
        { name: 'График модулей 1 полугодия 2022-2023', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График модулей 2 полугодия 2022-2023', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов зимней сессии 2022-2023', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' }
      ]
    },
    {
      year: '2021-2022',
      files: [
        { name: 'График проведения текущего контроля и промежуточной аттестации на 2021-2022', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов 2021-2022', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов GM-1-6-21', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов ЛД-1-21', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График консультанций экзаменов', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' }
      ]
    },
    {
      year: '2020-2021',
      files: [
        { name: 'График экзаменов GM-1-8-20', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов GM+1-8-20', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов (зимней сессии) GM-1-20f', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' }
      ]
    },
    {
      year: '2019-2020',
      files: [
        { name: 'График экзаменов GM-1–5-19_-GM-6-19-s', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' },
        { name: 'График экзаменов GM-6-11-19', url: 'https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/' }
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
                Расписания и графики
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              График модулей и экзаменов
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Расписания модульного контроля и экзаменационных сессий по учебным годам
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
                {scheduleSections.map((section) => {
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
              {/* Годы расписаний */}
              {scheduleData.map((yearData, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-8 last:mb-0"
                >
                  {/* Заголовок года */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      <FaCalendarCheck className="mr-3 text-[#023E8A]" />
                      {yearData.year} учебный год
                    </h2>
                  </div>

                  {/* Файлы расписаний */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {yearData.files.map((file, fileIndex) => (
                      <motion.a
                        key={fileIndex}
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: fileIndex * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-lg transition-all group"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                            <FaFileAlt className="text-white text-sm" />
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

              {/* Важная информация */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaClock className="mr-3 text-[#023E8A]" />
                  Важная информация о модулях и экзаменах
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Графики модулей публикуются в начале каждого семестра",
                    "Экзаменационные сессии проводятся два раза в год",
                    "Расписание консультаций публикуется вместе с графиком экзаменов",
                    "Все изменения в расписании доводятся до студентов заранее",
                    "Модульный контроль проводится по окончании каждого учебного модуля",
                    "Пересдачи организуются согласно академическому регламенту"
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

              {/* Общее уведомление */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200"
              >
                <div className="flex items-start">
                  <FaCalendarCheck className="text-yellow-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Все графики доступны по ссылке
                    </h4>
                    <motion.a
                      href="https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="inline-flex items-center px-4 py-2 bg-white/80 rounded-lg text-[#023E8A] font-medium border border-yellow-300 hover:bg-white transition-all"
                    >
                      <FaDownload className="mr-2" />
                      https://salymbekov.com/ru/grafik-jekzamenov-i-modulej/
                    </motion.a>
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

export default ModuleSchedule;