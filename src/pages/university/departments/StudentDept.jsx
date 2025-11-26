import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaUserGraduate,
  FaUsers,
  FaCalendarAlt,
  FaHandshake,
  FaHeart,
  FaAward,
  FaBook,
  FaHome,
  FaUtensils,
  FaShieldAlt,
  FaComments,
  FaChartLine,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaGraduationCap,
  FaLaptop,
  FaMusic,
  FaFutbol,
  FaClock // ДОБАВЛЕН НЕДОСТАЮЩИЙ ИМПОРТ
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const StudentDept = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("services");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Основной цвет и градиенты
  const primaryColor = "#023E8A";
  const gradientFrom = "from-[#023E8A]";
  const gradientTo = "to-[#0077B6]";

  const studentStats = [
    { 
      number: "5K+", 
      label: t('student.stats.students') || "Студентов", 
      icon: <FaUserGraduate className="text-[#023E8A]" />,
      description: t('student.stats.studentsDesc') || "Активных студентов в университете"
    },
    { 
      number: "50+", 
      label: t('student.stats.clubs') || "Клубов", 
      icon: <FaUsers className="text-[#023E8A]" />,
      description: t('student.stats.clubsDesc') || "Студенческих клубов и организаций"
    },
    { 
      number: "100%", 
      label: t('student.stats.support') || "Поддержка", 
      icon: <FaHeart className="text-[#023E8A]" />,
      description: t('student.stats.supportDesc') || "Гарантия поддержки для каждого студента"
    },
    { 
      number: "24/7", 
      label: t('student.stats.assistance') || "Помощь", 
      icon: <FaShieldAlt className="text-[#023E8A]" />,
      description: t('student.stats.assistanceDesc') || "Круглосуточная помощь и консультации"
    }
  ];

  const studentServices = [
    {
      icon: <FaHome className="text-white" size={24} />,
      title: t('student.services.accommodation.title') || "Проживание",
      description: t('student.services.accommodation.description') || "Комфортабельные общежития и помощь с размещением",
      contact: t('student.services.accommodation.contact') || "+996 778 99 88 11",
      hours: t('student.services.accommodation.hours') || "Пн-Пт: 9:00-18:00",
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaUtensils className="text-white" size={24} />,
      title: t('student.services.catering.title') || "Питание",
      description: t('student.services.catering.description') || "Студенческие столовые и кафе на территории кампуса",
      contact: t('student.services.catering.contact') || "+996 778 99 88 22",
      hours: t('student.services.catering.hours') || "Ежедневно: 8:00-20:00",
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaBook className="text-white" size={24} />,
      title: t('student.services.academic.title') || "Академическая поддержка",
      description: t('student.services.academic.description') || "Консультации по учебным вопросам и тьюторство",
      contact: t('student.services.academic.contact') || "+996 778 99 88 33",
      hours: t('student.services.academic.hours') || "Пн-Пт: 10:00-17:00",
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHeart className="text-white" size={24} />,
      title: t('student.services.health.title') || "Медицинская помощь",
      description: t('student.services.health.description') || "Медицинский центр и психологическая поддержка",
      contact: t('student.services.health.contact') || "+996 778 99 88 44",
      hours: t('student.services.health.hours') || "Круглосуточно",
      color: "bg-[#00B4D8]"
    }
  ];

  const studentClubs = [
    {
      name: t('student.clubs.tech.title') || "Технологический клуб",
      description: t('student.clubs.tech.description') || "Исследование новых технологий и разработка проектов",
      members: "150",
      meetings: t('student.clubs.tech.meetings') || "Вторник, Четверг 18:00",
      president: t('student.clubs.tech.president') || "Айгерим Садыкова",
      icon: <FaLaptop className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      activities: [
        t('student.clubs.tech.activities.hackathons') || "Хакатоны",
        t('student.clubs.tech.activities.workshops') || "Воркшопы",
        t('student.clubs.tech.activities.projects') || "Проекты"
      ]
    },
    {
      name: t('student.clubs.sports.title') || "Спортивный клуб",
      description: t('student.clubs.sports.description') || "Спортивные мероприятия и тренировки",
      members: "200",
      meetings: t('student.clubs.sports.meetings') || "Понедельник, Среда, Пятница 17:00",
      president: t('student.clubs.sports.president') || "Нурлан Алиев",
      icon: <FaFutbol className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      activities: [
        t('student.clubs.sports.activities.tournaments') || "Турниры",
        t('student.clubs.sports.activities.training') || "Тренировки",
        t('student.clubs.sports.activities.competitions') || "Соревнования"
      ]
    },
    {
      name: t('student.clubs.arts.title') || "Творческий клуб",
      description: t('student.clubs.arts.description') || "Искусство, музыка и творческие проекты",
      members: "120",
      meetings: t('student.clubs.arts.meetings') || "Понедельник, Четверг 19:00",
      president: t('student.clubs.arts.president') || "Айдана Кыдырова",
      icon: <FaMusic className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      activities: [
        t('student.clubs.arts.activities.performances') || "Выступления",
        t('student.clubs.arts.activities.exhibitions') || "Выставки",
        t('student.clubs.arts.activities.masterclasses') || "Мастер-классы"
      ]
    }
  ];

  const events = [
    {
      title: t('student.events.orientation.title') || "День первокурсника",
      date: t('student.events.orientation.date') || "15 сентября 2024",
      time: t('student.events.orientation.time') || "10:00 - 16:00",
      location: t('student.events.orientation.location') || "Главный корпус",
      type: "orientation",
      status: "upcoming",
      participants: "500+"
    },
    {
      title: t('student.events.career.title') || "Карьерный день",
      date: t('student.events.career.date') || "20 октября 2024",
      time: t('student.events.career.time') || "9:00 - 18:00",
      location: t('student.events.career.location') || "Конференц-зал",
      type: "career",
      status: "upcoming",
      participants: "300+"
    },
    {
      title: t('student.events.cultural.title') || "Культурный фестиваль",
      date: t('student.events.cultural.date') || "5 ноября 2024",
      time: t('student.events.cultural.time') || "14:00 - 22:00",
      location: t('student.events.cultural.location') || "Студенческий парк",
      type: "cultural",
      status: "ongoing",
      participants: "200+"
    }
  ];

  const supportResources = [
    {
      resource: t('student.support.counseling.title') || "Психологическая консультация",
      description: t('student.support.counseling.description') || "Профессиональная психологическая помощь и поддержка",
      availability: t('student.support.counseling.availability') || "Пн-Пт: 10:00-18:00",
      contact: t('student.support.counseling.contact') || "+996 778 99 88 55",
      icon: <FaComments className="text-lg" />,
      urgent: true
    },
    {
      resource: t('student.support.legal.title') || "Юридическая помощь",
      description: t('student.support.legal.description') || "Консультации по правовым вопросам и документам",
      availability: t('student.support.legal.availability') || "Вт, Чт: 14:00-17:00",
      contact: t('student.support.legal.contact') || "+996 778 99 88 66",
      icon: <FaShieldAlt className="text-lg" />,
      urgent: false
    },
    {
      resource: t('student.support.financial.title') || "Финансовая поддержка",
      description: t('student.support.financial.description') || "Информация о стипендиях и финансовой помощи",
      availability: t('student.support.financial.availability') || "Пн-Ср: 11:00-16:00",
      contact: t('student.support.financial.contact') || "+996 778 99 88 77",
      icon: <FaChartLine className="text-lg" />,
      urgent: false
    }
  ];

  const achievementCategories = [
    {
      id: "all",
      name: t('student.achievements.categories.all') || "Все",
      count: 15
    },
    {
      id: "academic",
      name: t('student.achievements.categories.academic') || "Академические",
      count: 8
    },
    {
      id: "sports",
      name: t('student.achievements.categories.sports') || "Спортивные",
      count: 4
    },
    {
      id: "arts",
      name: t('student.achievements.categories.arts') || "Творческие",
      count: 3
    }
  ];

  const achievements = [
    {
      student: t('student.achievements.items.championship.student') || "Нурлан Алиев",
      achievement: t('student.achievements.items.championship.achievement') || "Чемпион по баскетболу",
      category: "sports",
      date: t('student.achievements.items.championship.date') || "Май 2024",
      description: t('student.achievements.items.championship.description') || "Победа в национальном чемпионате",
      icon: <FaAward className="text-lg" />
    },
    {
      student: t('student.achievements.items.research.student') || "Айгерим Садыкова",
      achievement: t('student.achievements.items.research.achievement') || "Лучшая исследовательская работа",
      category: "academic",
      date: t('student.achievements.items.research.date') || "Апрель 2024",
      description: t('student.achievements.items.research.description') || "Публикация в международном журнале",
      icon: <FaGraduationCap className="text-lg" />
    },
    {
      student: t('student.achievements.items.art.student') || "Айдана Кыдырова",
      achievement: t('student.achievements.items.art.achievement') || "Гран-при художественного конкурса",
      category: "arts",
      date: t('student.achievements.items.art.date') || "Март 2024",
      description: t('student.achievements.items.art.description') || "Победа в международном конкурсе искусств",
      icon: <FaStar className="text-lg" />
    }
  ];

  const contactInfo = {
    phone: "+996 778 99 88 44",
    email: "students@salymbekov.com",
    hours: t('student.contact.hours') || "Пн-Пт: 9:00-18:00",
    location: t('student.contact.location') || "г. Бишкек, ул. Тыныстанова 34",
    emergency: t('student.contact.emergency') || "+996 778 99 88 99 (круглосуточно)"
  };

  const tabs = [
    { id: "services", label: t('student.tabs.services') || "Сервисы", icon: <FaHome /> },
    { id: "clubs", label: t('student.tabs.clubs') || "Клубы", icon: <FaUsers /> },
    { id: "events", label: t('student.tabs.events') || "События", icon: <FaCalendarAlt /> }
  ];

  const filteredAchievements = selectedCategory === "all" 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  // Функция для безопасного получения переводов
  const getTranslation = (key, fallback) => {
    const translation = t(key);
    return translation !== key ? translation : fallback;
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Герой секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaUserGraduate className="text-xl" />
            <span className="font-semibold">{getTranslation('student.badge', 'Студенческий отдел')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {getTranslation('student.title', 'Студенческая жизнь')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {getTranslation('student.subtitle', 'Создаем комфортную среду для обучения и развития')}
          </p>
        </motion.div>

        {/* Статистика студентов */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {studentStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-800 font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Студенческие сервисы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {getTranslation('student.services.title', 'Студенческие сервисы')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getTranslation('student.services.subtitle', 'Все необходимое для комфортной учебы и жизни')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-[#023E8A] text-xs" />
                    {service.contact}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-[#023E8A] text-xs" />
                    {service.hours}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Основной контент с табами */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Заголовок и табы */}
            <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {getTranslation('student.studentLife', 'Студенческая жизнь')}
                  </h2>
                  <p className="text-gray-600">
                    {getTranslation('student.chooseActivity', 'Выберите активность для просмотра')}
                  </p>
                </div>
              </div>

              {/* Переключение табов */}
              <div className="flex flex-col sm:flex-row gap-3">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Контент табов */}
            <div className="p-8">
              {activeTab === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {getTranslation('student.support.title', 'Поддержка студентов')}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {supportResources.map((resource, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className={`bg-white rounded-2xl border-2 p-6 hover:shadow-lg transition-all duration-300 ${
                          resource.urgent ? 'border-red-200 bg-red-50' : 'border-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            resource.urgent ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-[#023E8A]'
                          }`}>
                            {resource.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800">
                              {resource.resource}
                            </h4>
                            {resource.urgent && (
                              <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">
                                {getTranslation('student.support.urgent', 'Срочно')}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4">
                          {resource.description}
                        </p>
                        
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <FaClock className="text-[#023E8A] text-xs" />
                            {resource.availability}
                          </div>
                          <div className="flex items-center gap-2">
                            <FaPhone className="text-[#023E8A] text-xs" />
                            {resource.contact}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "clubs" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {getTranslation('student.clubs.title', 'Студенческие клубы')}
                  </h3>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {studentClubs.map((club, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r ${club.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {club.icon}
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                          {club.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {club.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{getTranslation('student.clubs.members', 'Участники')}</span>
                            <span className="font-semibold text-[#023E8A]">{club.members}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{getTranslation('student.clubs.meetings', 'Встречи')}</span>
                            <span className="font-semibold text-[#023E8A]">{club.meetings}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{getTranslation('student.clubs.president', 'Президент')}</span>
                            <span className="font-semibold text-[#023E8A]">{club.president}</span>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {club.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <FaStar className="text-yellow-500 text-xs" />
                              {activity}
                            </li>
                          ))}
                        </ul>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2"
                        >
                          {getTranslation('student.clubs.join', 'Присоединиться')}
                          <FaArrowRight className="text-sm" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "events" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {getTranslation('student.events.title', 'События')}
                  </h3>
                  <div className="space-y-4">
                    {events.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`flex flex-col lg:flex-row lg:items-center justify-between py-6 px-6 rounded-xl border-2 ${
                          event.status === "upcoming" 
                            ? "border-blue-200 bg-blue-50" 
                            : event.status === "ongoing"
                            ? "border-green-200 bg-green-50"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <div className="flex-1 mb-4 lg:mb-0">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-xl font-bold text-gray-800">{event.title}</span>
                            <span className={`text-xs px-2 py-1 rounded ${
                              event.status === "upcoming" 
                                ? "bg-blue-100 text-blue-700" 
                                : event.status === "ongoing"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-600"
                            }`}>
                              {event.status === "upcoming" ? "Предстоящий" : 
                               event.status === "ongoing" ? "Текущий" : "Завершен"}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p><strong>{getTranslation('student.events.date', 'Дата')}:</strong> {event.date}</p>
                            <p><strong>{getTranslation('student.events.time', 'Время')}:</strong> {event.time}</p>
                            <p><strong>{getTranslation('student.events.location', 'Место')}:</strong> {event.location}</p>
                            <p><strong>{getTranslation('student.events.participants', 'Участники')}:</strong> {event.participants}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-2 rounded-xl font-semibold flex items-center gap-2 lg:justify-end"
                          >
                            {getTranslation('student.events.register', 'Зарегистрироваться')}
                            <FaArrowRight className="text-xs" />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Достижения студентов и контакты */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Достижения студентов */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <FaAward className="text-[#023E8A] text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{getTranslation('student.achievements.title', 'Достижения студентов')}</h3>
            </div>

            {/* Фильтр категорий */}
            <div className="flex flex-wrap gap-2 mb-6">
              {achievementCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-[#023E8A] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category.name}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    selectedCategory === category.id 
                      ? 'bg-white/20' 
                      : 'bg-gray-100'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
            
            <div className="space-y-4">
              {filteredAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl border-2 border-green-200 bg-green-50"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mt-1">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-1">{achievement.achievement}</h4>
                      <p className="text-gray-700 text-sm mb-2">{achievement.student}</p>
                      <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                      <div className="text-xs text-gray-500">{achievement.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Контактная информация */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <FaHandshake className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">{getTranslation('student.contact.title', 'Контакты')}</h3>
            </div>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{getTranslation('student.contact.phone', 'Телефон')}</p>
                  <p className="font-semibold">{contactInfo.phone}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{getTranslation('student.contact.email', 'Email')}</p>
                  <p className="font-semibold">{contactInfo.email}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{getTranslation('student.contact.location', 'Адрес')}</p>
                  <p className="font-semibold">{contactInfo.location}</p>
                </div>
              </motion.div>

              <div className="p-4 bg-red-500/20 rounded-xl border border-red-300 mt-4">
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <FaShieldAlt className="text-red-300" />
                  <strong>{getTranslation('student.contact.emergencyTitle', 'Экстренная связь')}:</strong> {contactInfo.emergency}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-[#023E8A] py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mt-6"
              >
                <FaComments />
                {getTranslation('student.contact.appointment', 'Записаться на консультацию')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentDept;