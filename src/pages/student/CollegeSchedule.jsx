import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaSearch, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const CollegeSchedule = () => {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState('CS-11');
  const [selectedDay, setSelectedDay] = useState('Понедельник');

  const scheduleSections = [
    { 
      path: "/student/schedule/study", 
      name: "ГРАФИК УЧЕБНОГО ПРОЦЕССА", 
      icon: FaBook,
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
      icon: FaUsers,
    },
    { 
      path: "/student/schedule/college", 
      name: "РАСПИСАНИЕ КОЛЛЕДЖА", 
      icon: FaRegCalendarAlt,
      active: true 
    }
  ];

  const groups = ['CS-11', 'CS-12', 'CS-21'];
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];

  const scheduleData = {
    'CS-11': {
      'Понедельник': [
        { time: '8.00 - 9.00', subject: 'Алгебра', teacher: 'ст.преп. Калбаева Ч.А.', room: '102' },
        { time: '9.05 - 10.05', subject: 'Геометрия', teacher: 'ст.преп. Калбаева Ч.А.', room: '102' },
        { time: '10.10 - 11.10', subject: 'Физика', teacher: 'к.ф.-м.н. доц. Койчуманов К.Т.', room: '101' },
        { time: '11.30 - 12.30', subject: 'Астрономия', teacher: 'к.ф.-м.н. доц. Койчуманов', room: '101' },
        { time: '13.00 - 14.00', subject: 'Физическая культура', teacher: 'преп. Алжанов Э.З.', room: '' }
      ],
      'Вторник': [
        { time: '8.00 - 9.00', subject: 'География', teacher: 'к.г.н. доц. Токторалиев Э.Т.', room: '101' },
        { time: '9.05 - 10.05', subject: 'English', teacher: 'ст. преп. Алиярова М.Ю.', room: '103' },
        { time: '10.10 - 11.10', subject: 'Java программирование', teacher: 'ст. преп. Дуйшекеева А.О', room: '202' },
        { time: '11.30 - 12.30', subject: 'Химия', teacher: 'ст. преп. Батракеева Г.Э.', room: '101' }
      ],
      'Среда': [
        { time: '8.00 - 9.00', subject: 'Введение в специальность', teacher: 'преп. Эсенгул к. Б.', room: '203' },
        { time: '9.05 - 10.05', subject: 'Алгебра', teacher: 'ст.преп. Калбаева Ч.А.', room: '102' },
        { time: '10.10 - 11.10', subject: 'Мировая история', teacher: 'к.и.н. Пиримбаева Ж.Ж.', room: '101' },
        { time: '11.30 - 12.30', subject: 'Кураторский час', teacher: 'Эсенгул кызы Б.', room: '203' }
      ],
      'Четверг': [
        { time: '8.00 - 9.00', subject: 'Физика', teacher: 'к.ф.-м.н. доц. Койчуманов К.Т.', room: '101' },
        { time: '9.05 - 10.05', subject: 'Фундаментальные принципы компьютера', teacher: 'преп. Эсенгул к. Б.', room: '203' },
        { time: '10.10 - 11.10', subject: 'Веб-программирование и веб-дизайн', teacher: 'преп. Жолочубеков Н.Ж.', room: '203' },
        { time: '11.30 - 12.30', subject: 'Русский язык', teacher: 'ст. преп. Курбанбаева Н.Т.', room: '103' }
      ],
      'Пятница': [
        { time: '8.00 - 9.00', subject: 'Начальная военная подготовка', teacher: 'ст. преп. Арыков Д.К.', room: '101' },
        { time: '9.05 - 10.05', subject: 'Кыргыз тили', teacher: 'ст. преп. Толобеков Н.Т.', room: '102' },
        { time: '10.10 - 11.10', subject: 'Кыргыз адабияты', teacher: 'ст. преп. Толобеков Н.Т.', room: '102' },
        { time: '11.30 - 12.30', subject: 'English', teacher: 'ст. преп. Алиярова М.Ю.', room: '101' }
      ]
    },
    'CS-12': {
      'Понедельник': [
        { time: '8.00 - 9.00', subject: 'Физика', teacher: 'к.ф.-м.н., доц. Койчуманов К.Т.', room: '101' },
        { time: '9.05 - 10.05', subject: 'Астрономия', teacher: 'к.ф.-м.н., доц. Койчуманов К.Т.', room: '101' },
        { time: '10.10 - 11.10', subject: 'Алгебра', teacher: 'ст.преп. Калбаева Ч.А.', room: '102' },
        { time: '11.30 - 12.30', subject: 'Геометрия', teacher: 'ст.преп. Калбаева Ч.А.', room: '102' },
        { time: '13.00 - 14.00', subject: 'Физическая культура', teacher: 'преп. Алжанов Э.З.', room: '' }
      ],
      'Вторник': [
        { time: '8.00 - 9.00', subject: 'Java программирование', teacher: 'ст.преп. Дуйшекеева А.О.', room: '202' },
        { time: '9.05 - 10.05', subject: 'География', teacher: 'к.г.н, доцент Токторалиев Э.Т.', room: '101' },
        { time: '10.10 - 11.10', subject: 'Химия', teacher: 'ст.преп. Батракеева Г.Э.', room: '101' },
        { time: '11.30 - 12.30', subject: 'English', teacher: 'ст.преп. Алиярова М.Ю.', room: '103' }
      ],
      'Среда': [
        { time: '8.00 - 9.00', subject: 'Алгебра', teacher: 'ст.преп. Калбаева Ч.А.', room: '102' },
        { time: '9.05 - 10.05', subject: 'Мировая история', teacher: 'к.и.н. Пиримбаева Ж.Ж.', room: '101' },
        { time: '10.10 - 11.10', subject: 'Введение в специальность', teacher: 'ст.преп. Эсенгул к. Б.', room: '203' },
        { time: '11.30 - 12.30', subject: 'Кураторский час', teacher: 'ст.преп. Батракеева Г.Э.', room: '101' }
      ],
      'Четверг': [
        { time: '8.00 - 9.00', subject: 'Фундаментальные принципы компьютера', teacher: 'преп. Эсенгул к. Бермет', room: '203' },
        { time: '9.05 - 10.05', subject: 'Физика', teacher: 'к.ф.-м.н., доц. Койчуманов К.Т.', room: '101' },
        { time: '10.10 - 11.10', subject: 'Русский язык', teacher: 'ст.преп. Курбанбаева Н.Т.', room: '103' },
        { time: '11.30 - 12.30', subject: 'Веб-программирование', teacher: 'преп. Жолочубеков Н.Ж,', room: '203' }
      ],
      'Пятница': [
        { time: '8.00 - 9.00', subject: 'Кыргыз тили', teacher: 'ст.преп. Толобеков Н.Т.', room: '102' },
        { time: '9.05 - 10.05', subject: 'Начальная военная подготовка', teacher: 'ст.преп. Арыков Д.К.', room: '101' },
        { time: '10.10 - 11.10', subject: 'English', teacher: 'ст.преп. Алиярова М.Ю.', room: '101' },
        { time: '11.30 - 12.30', subject: 'Кыргыз адабияты', teacher: 'ст.преп. Толобеков Н.Т.', room: '102' }
      ]
    },
    'CS-21': {
      'Понедельник': [
        { time: '8.00 - 9.00', subject: 'Веб-программирование и веб-дизайн', teacher: 'преп. Жолочубеков Н.Ж.', room: '203' },
        { time: '9.05 - 10.05', subject: 'Веб-программирование и веб-дизайн', teacher: 'преп. Жолочубеков Н.Ж.', room: '203' },
        { time: '10.10 - 11.10', subject: 'Кыргыз тили жана адабияты', teacher: 'к.ф.н., доцент Мазекова Н.Ж.', room: '103' },
        { time: '11.30 - 12.30', subject: 'Физическая культура', teacher: 'преп. Алжанов Э.З.', room: '' }
      ],
      'Вторник': [
        { time: '8.00 - 9.00', subject: 'Операционные системы', teacher: 'преп. Жолочубеков Н.Ж.', room: '203' },
        { time: '9.05 - 10.05', subject: 'Операционные системы', teacher: 'преп. Жолочубеков Н.Ж.', room: '203' },
        { time: '10.10 - 11.10', subject: 'English', teacher: 'ст.преп. Алиярова М.Ю.', room: '103' },
        { time: '12.00 - 14.00', subject: 'Основы Интернета и приложения', teacher: 'PhD Yahya-Imam Munir Kolapo', room: '201' }
      ],
      'Среда': [
        { time: '8.30 - 10.30', subject: 'Базы Данных', teacher: 'Dr. Divya', room: '201' },
        { time: '10.35 - 11.35', subject: 'История Кыргызстана', teacher: 'к.и.н., доц. Кожомуратова Б.Ж.', room: '103' },
        { time: '11.55 - 12.55', subject: 'Электронная коммерция', teacher: 'преп.Сырдыбаев А.Ж.', room: '201' }
      ],
      'Четверг': [
        { time: '8.00 - 9.00', subject: 'Объектно-ориентированное программирование', teacher: 'ст. преп. Дуйшекеева А.О.', room: '202' },
        { time: '9.05 - 10.05', subject: 'Кураторский час', teacher: 'ст. преп. Дуйшекеева А.О.', room: '202' },
        { time: '10.10 - 11.10', subject: 'Профессиональная математика', teacher: 'ст. преп. Жунушалиева Н.М.', room: '101' },
        { time: '12.00 - 14.00', subject: 'Математика и статистика', teacher: 'Dr. Midhunchakkaravarthy', room: '201' }
      ],
      'Пятница': [
        { time: '8.00 - 9.00', subject: 'Объектно-ориентированное программирование', teacher: 'ст.преп. Дуйшекеева А.О.', room: '202' },
        { time: '9.05 - 10.05', subject: 'English', teacher: 'ст.преп. Алиярова М.Ю.', room: '103' },
        { time: '10.10 - 11.10', subject: 'Электронная коммерция', teacher: 'преп. Сырдыбаев А.Ж.', room: '201' },
        { time: '12.35 - 13.35', subject: 'English', teacher: 'ст.преп. Алиярова М.Ю.', room: '103' }
      ]
    }
  };

  const currentSchedule = scheduleData[selectedGroup]?.[selectedDay] || [];

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
              Расписание колледжа
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Расписание колледжа IT и бизнеса
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
              {/* Фильтры */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaSearch className="mr-3 text-[#023E8A]" />
                    Выберите группу и день
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Выбор группы */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Группа
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {groups.map((group) => (
                          <motion.button
                            key={group}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedGroup(group)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                              selectedGroup === group
                                ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {group}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Выбор дня */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        День недели
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {days.map((day) => (
                          <motion.button
                            key={day}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedDay(day)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                              selectedDay === day
                                ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {day}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Расписание */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaClock className="mr-3" />
                  Расписание для {selectedGroup} - {selectedDay}
                </h3>

                {currentSchedule.length > 0 ? (
                  <div className="space-y-4">
                    {currentSchedule.map((lesson, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          {/* Время */}
                          <div className="flex items-center">
                            <FaClock className="text-[#023E8A] mr-3 text-lg" />
                            <div>
                              <p className="font-semibold text-gray-900">Время</p>
                              <p className="text-gray-700">{lesson.time}</p>
                            </div>
                          </div>

                          {/* Предмет */}
                          <div>
                            <p className="font-semibold text-gray-900">Предмет</p>
                            <p className="text-gray-700">{lesson.subject}</p>
                          </div>

                          {/* Преподаватель */}
                          <div>
                            <p className="font-semibold text-gray-900">Преподаватель</p>
                            <p className="text-gray-700 text-sm">{lesson.teacher}</p>
                          </div>

                          {/* Аудитория */}
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="text-[#023E8A] mr-3 text-lg" />
                            <div>
                              <p className="font-semibold text-gray-900">Аудитория</p>
                              <p className="text-gray-700">{lesson.room || 'Не указана'}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-200 text-center">
                    <FaClock className="text-4xl text-yellow-600 mx-auto mb-4" />
                    <p className="text-lg text-gray-700">На этот день занятий не запланировано</p>
                  </div>
                )}
              </motion.div>

              {/* Информация о группах */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaGraduationCap className="mr-3 text-[#023E8A]" />
                  О группах колледжа
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {groups.map((group) => (
                    <motion.div
                      key={group}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/70 p-4 rounded-lg text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">{group}</span>
                      </div>
                      <p className="font-semibold text-gray-900">Группа {group}</p>
                      <p className="text-sm text-gray-600">Колледж IT и бизнеса</p>
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

export default CollegeSchedule;