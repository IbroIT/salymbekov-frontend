import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaDownload, FaExternalLinkAlt, FaExclamationTriangle } from 'react-icons/fa';

const MFMSchedule = () => {
  const navigate = useNavigate();

  const scheduleSections = [
    { 
      path: "/student/schedule/study", 
      name: "ГРАФИК УЧЕБНОГО ПРОЦЕССА", 
      icon: FaRegCalendarAlt,
    },
    { 
      path: "/student/schedule/modules", 
      name: "ГРАФИКИ МОДУЛЕЙ И ЭКЗАМЕНОВ", 
      icon: FaGraduationCap,
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
      active: true 
    },
    { 
      path: "/student/schedule/college", 
      name: "РАСПИСАНИЕ КОЛЛЕДЖА", 
      icon: FaUsers,
    }
  ];

  const scheduleData = [
    {
      group: 'GM-1-22F',
      files: [
        { name: 'Расписание GM-1-22F', url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: 'GM-1-3-22s',
      files: [
        { name: 'Расписание GM-1-3-22s', url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: 'GM-1-4-21',
      files: [
        { name: 'Расписание GM-1-4-21', url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: 'ЛД-1-25',
      files: [
        { name: 'Расписание ЛД-1-25', url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: 'GM-1-23F',
      files: [
        { name: 'Расписание GM-1-23F', url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: 'ЛД-1-24',
      files: [
        { name: 'Расписание ЛД-1-24', url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: 'GM-1-2-23S',
      files: [
        { name: 'Расписание GM-1-2-23S', url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: 'ЛД-1-21',
      files: [
        { name: 'Расписание ЛД-1-21', url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: 'ЛД-1-23',
      files: [
        { name: 'Расписание ЛД-1-23', url: 'https://salymbekov.com/ru/gm-1-22f/' }
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
                Расписания
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Расписание медицинского факультета
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Расписания занятий для студентов медицинского факультета
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
              {/* Группы расписаний */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <FaBook className="mr-3 text-[#023E8A]" />
                  Расписания групп медицинского факультета
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {scheduleData.map((groupData, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all"
                    >
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-3">
                          <FaGraduationCap className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {groupData.group}
                        </h3>
                      </div>
                      
                      <div className="space-y-3">
                        {groupData.files.map((file, fileIndex) => (
                          <motion.a
                            key={fileIndex}
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-between px-4 py-3 bg-white/80 rounded-xl hover:bg-white transition-all duration-200 border border-blue-100 group"
                          >
                            <div className="flex items-center">
                              <FaDownload className="text-[#023E8A] mr-3" />
                              <span className="text-gray-700 font-medium group-hover:text-[#023E8A] transition-colors">
                                {file.name}
                              </span>
                            </div>
                            <FaExternalLinkAlt className="text-gray-400 group-hover:text-[#023E8A] transition-colors" />
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Важное уведомление */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaExclamationTriangle className="text-yellow-600 text-2xl mt-1 mr-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      Внимание
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Все расписания доступны по ссылке:
                    </p>
                    <motion.a
                      href="https://salymbekov.com/ru/gm-1-22f/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="inline-flex items-center px-4 py-2 bg-white/80 rounded-lg text-[#023E8A] font-medium border border-yellow-300 hover:bg-white transition-all"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      https://salymbekov.com/ru/gm-1-22f/
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Дополнительная информация */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaRegCalendarAlt className="mr-3 text-[#023E8A]" />
                  Информация о расписаниях
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Расписания обновляются регулярно",
                    "В случае изменений информация публикуется заранее",
                    "Для уточнений обращайтесь в деканат",
                    "Расписание может изменяться в течение семестра"
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
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MFMSchedule;