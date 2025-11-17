import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaGraduationCap,
  FaBook,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaAward,
  FaLaptop,
  FaMicroscope,
  FaGlobeAmericas,
  FaHandshake,
  FaChartLine,
  FaArrowRight,
  FaSearch,
  FaStar,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const EducationalDept = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("programs");
  const [selectedFaculty, setSelectedFaculty] = useState("all");

  // Основной цвет и градиенты
  const primaryColor = "#023E8A";
  const gradientFrom = "from-[#023E8A]";
  const gradientTo = "to-[#0077B6]";

  const educationStats = [
    { 
      number: "50+", 
      label: t('education.stats.programs'), 
      icon: <FaBook className="text-[#023E8A]" />,
      description: t('education.stats.programsDesc')
    },
    { 
      number: "200+", 
      label: t('education.stats.teachers'), 
      icon: <FaChalkboardTeacher className="text-[#023E8A]" />,
      description: t('education.stats.teachersDesc')
    },
    { 
      number: "5K+", 
      label: t('education.stats.students'), 
      icon: <FaUserGraduate className="text-[#023E8A]" />,
      description: t('education.stats.studentsDesc')
    },
    { 
      number: "95%", 
      label: t('education.stats.employment'), 
      icon: <FaAward className="text-[#023E8A]" />,
      description: t('education.stats.employmentDesc')
    }
  ];

  const features = [
    {
      icon: <FaLaptop className="text-white" size={24} />,
      title: t('education.features.modern.title'),
      description: t('education.features.modern.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaMicroscope className="text-white" size={24} />,
      title: t('education.features.research.title'),
      description: t('education.features.research.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaGlobeAmericas className="text-white" size={24} />,
      title: t('education.features.international.title'),
      description: t('education.features.international.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHandshake className="text-white" size={24} />,
      title: t('education.features.practical.title'),
      description: t('education.features.practical.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const programs = [
    {
      id: "medicine",
      title: t('education.programs.medicine.title'),
      description: t('education.programs.medicine.description'),
      degree: t('education.programs.medicine.degree'),
      duration: t('education.programs.medicine.duration'),
      seats: "120",
      icon: <FaUserGraduate className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        t('education.programs.medicine.features.clinical'),
        t('education.programs.medicine.features.research'),
        t('education.programs.medicine.features.international')
      ]
    },
    {
      id: "engineering",
      title: t('education.programs.engineering.title'),
      description: t('education.programs.engineering.description'),
      degree: t('education.programs.engineering.degree'),
      duration: t('education.programs.engineering.duration'),
      seats: "80",
      icon: <FaLaptop className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      features: [
        t('education.programs.engineering.features.labs'),
        t('education.programs.engineering.features.projects'),
        t('education.programs.engineering.features.industry')
      ]
    },
    {
      id: "business",
      title: t('education.programs.business.title'),
      description: t('education.programs.business.description'),
      degree: t('education.programs.business.degree'),
      duration: t('education.programs.business.duration'),
      seats: "100",
      icon: <FaChartLine className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      features: [
        t('education.programs.business.features.internships'),
        t('education.programs.business.features.caseStudies'),
        t('education.programs.business.features.networking')
      ]
    }
  ];

  const faculties = [
    {
      id: "all",
      name: t('education.faculties.all'),
      count: 8
    },
    {
      id: "medical",
      name: t('education.faculties.medical'),
      count: 3
    },
    {
      id: "technical",
      name: t('education.faculties.technical'),
      count: 2
    },
    {
      id: "business",
      name: t('education.faculties.business'),
      count: 2
    },
    {
      id: "humanities",
      name: t('education.faculties.humanities'),
      count: 1
    }
  ];

  const academicCalendar = [
    {
      period: t('education.calendar.fall.title'),
      date: t('education.calendar.fall.date'),
      events: [
        t('education.calendar.fall.events.start'),
        t('education.calendar.fall.events.midterm'),
        t('education.calendar.fall.events.finals')
      ],
      status: "active"
    },
    {
      period: t('education.calendar.spring.title'),
      date: t('education.calendar.spring.date'),
      events: [
        t('education.calendar.spring.events.start'),
        t('education.calendar.spring.events.midterm'),
        t('education.calendar.spring.events.finals')
      ],
      status: "upcoming"
    },
    {
      period: t('education.calendar.summer.title'),
      date: t('education.calendar.summer.date'),
      events: [
        t('education.calendar.summer.events.sessions'),
        t('education.calendar.summer.events.internships'),
        t('education.calendar.summer.events.research')
      ],
      status: "upcoming"
    }
  ];

  const admissionRequirements = [
    {
      stage: t('education.admission.documentation.title'),
      description: t('education.admission.documentation.description'),
      deadline: t('education.admission.documentation.deadline'),
      icon: <FaBook className="text-lg" />,
      status: "active"
    },
    {
      stage: t('education.admission.exams.title'),
      description: t('education.admission.exams.description'),
      deadline: t('education.admission.exams.deadline'),
      icon: <FaAward className="text-lg" />,
      status: "upcoming"
    },
    {
      stage: t('education.admission.interview.title'),
      description: t('education.admission.interview.description'),
      deadline: t('education.admission.interview.deadline'),
      icon: <FaUsers className="text-lg" />,
      status: "upcoming"
    }
  ];

  const contactInfo = {
    phone: "+996 778 99 88 77",
    email: "admission@salymbekov.com",
    hours: t('education.contact.hours'),
    location: t('education.contact.location')
  };

  const tabs = [
    { id: "programs", label: t('education.tabs.programs'), icon: <FaBook /> },
    { id: "admission", label: t('education.tabs.admission'), icon: <FaUserGraduate /> },
    { id: "calendar", label: t('education.tabs.calendar'), icon: <FaCalendarAlt /> }
  ];

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
            <FaGraduationCap className="text-xl" />
            <span className="font-semibold">{t('education.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('education.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('education.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {educationStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2 text-center">
                {stat.number}
              </div>
              <div className="text-gray-800 font-semibold text-center mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600 text-sm text-center">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Особенности образования */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('education.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('education.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
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
                    {t('education.academicInfo')}
                  </h2>
                  <p className="text-gray-600">
                    {t('education.selectFaculty')}
                  </p>
                </div>
                
                {/* Фильтр факультетов */}
                <div className="flex flex-wrap gap-2">
                  {faculties.map((faculty) => (
                    <motion.button
                      key={faculty.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedFaculty(faculty.id)}
                      className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                        selectedFaculty === faculty.id
                          ? 'bg-[#023E8A] text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {faculty.name}
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                        selectedFaculty === faculty.id 
                          ? 'bg-white/20' 
                          : 'bg-gray-100'
                      }`}>
                        {faculty.count}
                      </span>
                    </motion.button>
                  ))}
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
              {activeTab === "programs" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('education.programs.title')}
                  </h3>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                      <motion.div
                        key={program.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {program.icon}
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                          {program.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {program.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{t('education.programs.degree')}</span>
                            <span className="font-semibold text-[#023E8A]">{program.degree}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{t('education.programs.duration')}</span>
                            <span className="font-semibold text-[#023E8A]">{program.duration}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{t('education.programs.seats')}</span>
                            <span className="font-semibold text-[#023E8A]">{program.seats}</span>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <FaCheckCircle className="text-green-500 text-xs" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                        >
                          {t('education.programs.apply')}
                          <FaArrowRight className="text-sm" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "admission" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('education.admission.title')}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {admissionRequirements.map((stage, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group text-center"
                      >
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-[#023E8A] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          {stage.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-3">
                          {stage.stage}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {stage.description}
                        </p>
                        
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                          stage.status === "active" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-gray-100 text-gray-600"
                        }`}>
                          <FaClock className="text-xs" />
                          {stage.deadline}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "calendar" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('education.calendar.title')}
                  </h3>
                  <div className="space-y-4">
                    {academicCalendar.map((semester, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`flex flex-col lg:flex-row lg:items-center justify-between py-6 px-6 rounded-xl border-2 ${
                          semester.status === "active" 
                            ? "border-green-200 bg-green-50" 
                            : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <div className="flex-1 mb-4 lg:mb-0">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-xl font-bold text-gray-800">{semester.period}</span>
                            {semester.status === "active" && (
                              <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                                {t('education.calendar.active')}
                              </span>
                            )}
                          </div>
                          <ul className="space-y-1">
                            {semester.events.map((event, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <FaCheckCircle className="text-green-500 text-xs" />
                                {event}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-800 font-bold text-lg">{semester.date}</div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-[#023E8A] text-sm font-semibold mt-2 flex items-center gap-1 lg:justify-end"
                          >
                            {t('education.calendar.download')}
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

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Контактная информация */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">{t('education.contact.title')}</h3>
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
                  <p className="text-white/80 text-sm">{t('education.contact.phone')}</p>
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
                  <p className="text-white/80 text-sm">{t('education.contact.email')}</p>
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
                  <p className="text-white/80 text-sm">{t('education.contact.location')}</p>
                  <p className="font-semibold">{contactInfo.location}</p>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-[#023E8A] py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mt-6"
              >
                <FaSearch />
                {t('education.contact.consultation')}
              </motion.button>
            </div>
          </motion.div>

          {/* Призыв к действию */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 flex flex-col justify-center"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaUserGraduate className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t('education.cta.title')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('education.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                >
                  {t('education.cta.apply')}
                  <FaArrowRight className="text-sm" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#023E8A] text-[#023E8A] px-6 py-3 rounded-xl font-semibold"
                >
                  {t('education.cta.learnMore')}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationalDept;