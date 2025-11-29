import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaDownload, FaHospital, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const PracticeSchedule = () => {
  const navigate = useNavigate();

  const scheduleSections = [
    { 
      path: "/student/schedule/study", 
      name: "ГРАФИК УЧЕБНОГО ПРОЦЕССА", 
      icon: FaCalendarAlt,
    },
    { 
      path: "/student/schedule/modules", 
      name: "ГРАФИКИ МОДУЛЕЙ И ЭКЗАМЕНОВ", 
      icon: FaGraduationCap,
    },
    { 
      path: "/student/schedule/practice", 
      name: "ГРАФИКИ ПРОИЗВОДСТВЕННОЙ ПРАКТИКИ", 
      icon: FaBriefcase,
      active: true 
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

  const practiceData = [
    {
      year: '2019-2020',
      title: 'ГРАФИК проведения производственной практики для студентов 1 курса Международного факультета медицины на 2019-2020 учебный год',
      table: {
        headers: [
          '№',
          'Название практики',
          'Клинические базы',
          'Семестр',
          'Часы/кредиты/недели',
          'Количество студентов',
          'Количество групп',
          'Сроки прохождения',
          'Предоставления отчета'
        ],
        rows: [
          {
            number: '1',
            name: 'Помощник медицинской сестры',
            bases: '1. Клиника Лазмед\n2. Дордой Офтальмик Сервис\n3. Медицинский центр Memorial Hospital',
            semester: '2',
            hours: '60/2/2',
            students: '88',
            groups: '5',
            dates: '10.08.2020-\n22.08.2020',
            report: 'до 14.09.2020'
          }
        ]
      }
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
              График производственной практики
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Организация и проведение производственной практики для студентов медицинского факультета
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
              {practiceData.map((yearData, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  {/* Заголовок года */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                      <FaCalendarAlt className="mr-3 text-[#023E8A]" />
                      {yearData.year} учебный год
                    </h2>
                    <p className="text-lg text-gray-700 text-center">
                      {yearData.title}
                    </p>
                  </div>

                  {/* Таблица */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-8"
                  >
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr className="bg-gradient-to-r from-[#023E8A] to-[#0077B6]">
                            {yearData.table.headers.map((header, headerIndex) => (
                              <motion.th 
                                key={headerIndex}
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: headerIndex * 0.1 }}
                                className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                              >
                                {header}
                              </motion.th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {yearData.table.rows.map((row, rowIndex) => (
                            <motion.tr 
                              key={rowIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: rowIndex * 0.1 }}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {row.number}
                              </td>
                              <td className="px-6 py-4 text-sm font-semibold text-[#023E8A]">
                                {row.name}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 whitespace-pre-line">
                                {row.bases}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                {row.semester}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                {row.hours}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                {row.students}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                {row.groups}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 whitespace-pre-line text-center">
                                {row.dates}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                {row.report}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>

                  {/* Клинические базы */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                  >
                    <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                      <FaHospital className="mr-3" />
                      Клинические базы практики
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          name: 'Клиника Лазмед',
                          description: 'Современная многопрофильная клиника'
                        },
                        {
                          name: 'Дордой Офтальмик Сервис',
                          description: 'Специализированный офтальмологический центр'
                        },
                        {
                          name: 'Memorial Hospital',
                          description: 'Международный медицинский центр'
                        }
                      ].map((hospital, hospitalIndex) => (
                        <motion.div
                          key={hospitalIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: hospitalIndex * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 text-center"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaHospital className="text-white text-lg" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{hospital.name}</h4>
                          <p className="text-sm text-gray-600">{hospital.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Кнопка скачивания */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center"
                  >
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                    >
                      <FaDownload className="mr-3 text-lg" />
                      Скачать график практики
                    </motion.a>
                  </motion.div>
                </motion.div>
              ))}

              {/* Дополнительная информация */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBriefcase className="mr-3 text-[#023E8A]" />
                  Важная информация о практике
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Прохождение практики является обязательным компонентом учебного плана",
                    "Студенты обеспечиваются местами практики университетом",
                    "Отчет по практике должен быть сдан в установленные сроки",
                    "Практика оценивается по системе зачет/незачет"
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

export default PracticeSchedule;