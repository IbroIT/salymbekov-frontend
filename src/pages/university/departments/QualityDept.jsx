import { motion } from "framer-motion";
import { useState } from "react";

import { 
  FaAward,
  FaChartLine,
  FaCheckCircle,
  FaUsers,
  FaCog,
  FaEye,
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaMedal,
  FaGraduationCap,
  FaHandshake,
  FaClipboardCheck,
  FaBalanceScale,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaDownload,
  FaSearch,
  FaBuilding,
  FaGlobeAmericas // Импортируем из react-icons/fa вместо fa6
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const QualityDept = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("standards");
  const [selectedYear, setSelectedYear] = useState("2025");

  // Основной цвет и градиенты
  const primaryColor = "#023E8A";
  const gradientFrom = "from-[#023E8A]";
  const gradientTo = "to-[#0077B6]";

  const qualityStats = [
    { 
      number: "ISO 9001", 
      label: t('quality.stats.certification'), 
      icon: <FaAward className="text-[#023E8A]" />,
      description: t('quality.stats.certificationDesc') || "Международная сертификация качества"
    },
    { 
      number: "98%", 
      label: t('quality.stats.satisfaction'), 
      icon: <FaStar className="text-[#023E8A]" />,
      description: t('quality.stats.satisfactionDesc') || "Удовлетворенность студентов"
    },
    { 
      number: "15+", 
      label: t('quality.stats.audits'), 
      icon: <FaClipboardCheck className="text-[#023E8A]" />,
      description: t('quality.stats.auditsDesc') || "Ежегодных аудитов"
    },
    { 
      number: "100%", 
      label: t('quality.stats.compliance'), 
      icon: <FaCheckCircle className="text-[#023E8A]" />,
      description: t('quality.stats.complianceDesc') || "Соответствие стандартам"
    }
  ];

  const qualityPrinciples = [
    {
      icon: <FaEye className="text-white" size={24} />,
      title: t('quality.principles.transparency.title') || "Прозрачность",
      description: t('quality.principles.transparency.description') || "Открытость всех процессов и процедур",
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaChartLine className="text-white" size={24} />,
      title: t('quality.principles.continuous.title') || "Непрерывное улучшение",
      description: t('quality.principles.continuous.description') || "Постоянное совершенствование процессов",
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('quality.principles.stakeholder.title') || "Ориентация на стейкхолдеров",
      description: t('quality.principles.stakeholder.description') || "Учет интересов всех участников",
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaShieldAlt className="text-white" size={24} />,
      title: t('quality.principles.accountability.title') || "Подотчетность",
      description: t('quality.principles.accountability.description') || "Ответственность за результаты",
      color: "bg-[#00B4D8]"
    }
  ];

  const qualityStandards = [
    {
      standard: t('quality.standards.academic.title') || "Академические стандарты",
      description: t('quality.standards.academic.description') || "Стандарты образовательных программ",
      status: t('quality.standards.academic.status') || "Активен",
      lastAudit: t('quality.standards.academic.lastAudit') || "Январь 2024",
      compliance: "98%",
      icon: <FaGraduationCap className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      requirements: [
        t('quality.standards.academic.requirements.curriculum') || "Обновление учебных планов",
        t('quality.standards.academic.requirements.faculty') || "Квалификация преподавателей",
        t('quality.standards.academic.requirements.assessment') || "Система оценивания"
      ]
    },
    {
      standard: t('quality.standards.international.title') || "Международные стандарты",
      description: t('quality.standards.international.description') || "Соответствие мировым требованиям",
      status: t('quality.standards.international.status') || "Активен",
      lastAudit: t('quality.standards.international.lastAudit') || "Март 2024",
      compliance: "95%",
      icon: <FaGlobeAmericas className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      requirements: [
        t('quality.standards.international.requirements.accreditation') || "Международная аккредитация",
        t('quality.standards.international.requirements.partnerships') || "Партнерства с вузами",
        t('quality.standards.international.requirements.recognition') || "Признание дипломов"
      ]
    },
    {
      standard: t('quality.standards.management.title') || "Стандарты управления",
      description: t('quality.standards.management.description') || "Система менеджмента качества",
      status: t('quality.standards.management.status') || "Активен",
      lastAudit: t('quality.standards.management.lastAudit') || "Декабрь 2023",
      compliance: "99%",
      icon: <FaCog className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      requirements: [
        t('quality.standards.management.requirements.processes') || "Оптимизация процессов",
        t('quality.standards.management.requirements.documentation') || "Документооборот",
        t('quality.standards.management.requirements.improvement') || "Процессы улучшения"
      ]
    }
  ];

  const auditSchedule = [
    {
      type: t('quality.audit.internal.title') || "Внутренний аудит",
      date: t('quality.audit.internal.date') || "15.01.2024",
      scope: t('quality.audit.internal.scope') || "Академические процессы",
      status: "completed",
      results: t('quality.audit.internal.results') || "Соответствует требованиям"
    },
    {
      type: t('quality.audit.external.title') || "Внешний аудит",
      date: t('quality.audit.external.date') || "20.03.2024",
      scope: t('quality.audit.external.scope') || "Система менеджмента качества",
      status: "upcoming",
      results: t('quality.audit.external.results') || "Запланирован"
    },
    {
      type: t('quality.audit.accreditation.title') || "Аккредитационный аудит",
      date: t('quality.audit.accreditation.date') || "10.06.2024",
      scope: t('quality.audit.accreditation.scope') || "Образовательные программы",
      status: "planned",
      results: t('quality.audit.accreditation.results') || "В процессе подготовки"
    }
  ];

  const improvementInitiatives = [
    {
      initiative: t('quality.improvements.digital.title') || "Цифровая трансформация",
      description: t('quality.improvements.digital.description') || "Внедрение цифровых технологий в образовательный процесс",
      progress: 85,
      timeline: t('quality.improvements.digital.timeline') || "2023-2024",
      impact: t('quality.improvements.digital.impact') || "Высокий",
      icon: <FaRocket className="text-lg" />
    },
    {
      initiative: t('quality.improvements.faculty.title') || "Развитие преподавателей",
      description: t('quality.improvements.faculty.description') || "Повышение квалификации преподавательского состава",
      progress: 70,
      timeline: t('quality.improvements.faculty.timeline') || "2023-2025",
      impact: t('quality.improvements.faculty.impact') || "Средний",
      icon: <FaUsers className="text-lg" />
    },
    {
      initiative: t('quality.improvements.infrastructure.title') || "Инфраструктура",
      description: t('quality.improvements.infrastructure.description') || "Модернизация учебных помещений и оборудования",
      progress: 60,
      timeline: t('quality.improvements.infrastructure.timeline') || "2024-2026",
      impact: t('quality.improvements.infrastructure.impact') || "Высокий",
      icon: <FaBuilding className="text-lg" />
    }
  ];

  const certifications = [
    {
      name: t('quality.certifications.iso9001.title') || "ISO 9001:2015",
      issuer: t('quality.certifications.iso9001.issuer') || "International Standards Organization",
      validUntil: t('quality.certifications.iso9001.validUntil') || "Декабрь 2025",
      scope: t('quality.certifications.iso9001.scope') || "Система менеджмента качества",
      status: "active"
    },
    {
      name: t('quality.certifications.accreditation.title') || "Государственная аккредитация",
      issuer: t('quality.certifications.accreditation.issuer') || "Министерство образования",
      validUntil: t('quality.certifications.accreditation.validUntil') || "Июнь 2026",
      scope: t('quality.certifications.accreditation.scope') || "Образовательная деятельность",
      status: "active"
    },
    {
      name: t('quality.certifications.international.title') || "Международная аккредитация",
      issuer: t('quality.certifications.international.issuer') || "International Accreditation Council",
      validUntil: t('quality.certifications.international.validUntil') || "В процессе",
      scope: t('quality.certifications.international.scope') || "Все образовательные программы",
      status: "pending"
    }
  ];

  const contactInfo = {
    phone: "+996 778 99 88 66",
    email: "quality@salymbekov.com",
    hours: t('quality.contact.hours') || "Пн-Пт: 9:00-18:00",
    location: t('quality.contact.location') || "г. Бишкек, ул. Тыныстанова 34"
  };

  const tabs = [
    { id: "standards", label: t('quality.tabs.standards') || "Стандарты", icon: <FaAward /> },
    { id: "audits", label: t('quality.tabs.audits') || "Аудиты", icon: <FaClipboardCheck /> },
    { id: "improvements", label: t('quality.tabs.improvements') || "Улучшения", icon: <FaChartLine /> }
  ];

  const years = ["2025", "2024", "2023"];

  // Функции для перевода с fallback значениями
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
            <FaMedal className="text-xl" />
            <span className="font-semibold">{getTranslation('quality.badge', 'Отдел качества')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {getTranslation('quality.title', 'Система качества')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {getTranslation('quality.subtitle', 'Обеспечение высоких стандартов образования и непрерывное улучшение процессов')}
          </p>
        </motion.div>

        {/* Статистика качества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {qualityStats.map((stat, index) => (
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

        {/* Принципы качества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {getTranslation('quality.principles.title', 'Наши принципы качества')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getTranslation('quality.principles.subtitle', 'Основополагающие принципы, которые руководят нашей работой')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${principle.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {principle.description}
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
                    {getTranslation('quality.qualitySystem', 'Система менеджмента качества')}
                  </h2>
                  <p className="text-gray-600">
                    {getTranslation('quality.selectYear', 'Выберите год для просмотра данных')}
                  </p>
                </div>
                
                {/* Выбор года */}
                <div className="flex gap-2">
                  {years.map((year) => (
                    <motion.button
                      key={year}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                        selectedYear === year
                          ? 'bg-[#023E8A] text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {year}
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
              {activeTab === "standards" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {getTranslation('quality.standards.title', 'Стандарты качества')} {selectedYear}
                  </h3>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {qualityStandards.map((standard, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r ${standard.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {standard.icon}
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                          {standard.standard}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {standard.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{getTranslation('quality.standards.status', 'Статус')}</span>
                            <span className="font-semibold text-green-600">{standard.status}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{getTranslation('quality.standards.lastAudit', 'Последний аудит')}</span>
                            <span className="font-semibold text-[#023E8A]">{standard.lastAudit}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{getTranslation('quality.standards.compliance', 'Соответствие')}</span>
                            <span className="font-semibold text-[#023E8A]">{standard.compliance}</span>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {standard.requirements.map((requirement, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <FaCheckCircle className="text-green-500 text-xs" />
                              {requirement}
                            </li>
                          ))}
                        </ul>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full border-2 border-[#023E8A] text-[#023E8A] py-2 rounded-xl font-semibold hover:bg-[#023E8A] hover:text-white transition-colors"
                        >
                          {getTranslation('quality.standards.details', 'Подробнее')}
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "audits" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {getTranslation('quality.audit.title', 'График аудитов')}
                  </h3>
                  <div className="space-y-4">
                    {auditSchedule.map((audit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`flex flex-col lg:flex-row lg:items-center justify-between py-6 px-6 rounded-xl border-2 ${
                          audit.status === "completed" 
                            ? "border-green-200 bg-green-50" 
                            : audit.status === "upcoming"
                            ? "border-blue-200 bg-blue-50"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <div className="flex-1 mb-4 lg:mb-0">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-xl font-bold text-gray-800">{audit.type}</span>
                            <span className={`text-xs px-2 py-1 rounded ${
                              audit.status === "completed" 
                                ? "bg-green-100 text-green-700" 
                                : audit.status === "upcoming"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-100 text-gray-600"
                            }`}>
                              {audit.status === "completed" ? "Завершен" : 
                               audit.status === "upcoming" ? "Предстоящий" : "Запланирован"}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">
                            {audit.scope}
                          </p>
                          <p className="text-gray-700 text-sm">
                            {audit.results}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-800 font-bold text-lg">{audit.date}</div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-[#023E8A] text-sm font-semibold mt-2 flex items-center gap-1 lg:justify-end"
                          >
                            {getTranslation('quality.audit.report', 'Отчет')}
                            <FaArrowRight className="text-xs" />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "improvements" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {getTranslation('quality.improvements.title', 'Инициативы по улучшению')}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {improvementInitiatives.map((initiative, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-[#023E8A]">
                            {initiative.icon}
                          </div>
                          <h4 className="text-lg font-bold text-gray-800">
                            {initiative.initiative}
                          </h4>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4">
                          {initiative.description}
                        </p>

                        {/* Прогресс бар */}
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>{getTranslation('quality.improvements.progress', 'Прогресс')}</span>
                            <span>{initiative.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${initiative.progress}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] h-2 rounded-full"
                            />
                          </div>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-[#023E8A] text-xs" />
                            {initiative.timeline}
                          </div>
                          <div className="flex items-center gap-2">
                            <FaChartLine className="text-[#023E8A] text-xs" />
                            {initiative.impact}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Сертификации и контакты */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Сертификации */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <FaAward className="text-[#023E8A] text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{getTranslation('quality.certifications.title', 'Сертификации')}</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-4 rounded-xl border-2 ${
                    cert.status === "active" 
                      ? "border-green-200 bg-green-50" 
                      : "border-yellow-200 bg-yellow-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-800">{cert.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      cert.status === "active" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {cert.status === "active" ? "Активен" : "В процессе"}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>{getTranslation('quality.certifications.issuer', 'Организация')}:</strong> {cert.issuer}</p>
                    <p><strong>{getTranslation('quality.certifications.validUntil', 'Действует до')}:</strong> {cert.validUntil}</p>
                    <p><strong>{getTranslation('quality.certifications.scope', 'Область действия')}:</strong> {cert.scope}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <FaDownload />
              {getTranslation('quality.certifications.downloadAll', 'Скачать все сертификаты')}
            </motion.button>
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
              <h3 className="text-2xl font-bold">{getTranslation('quality.contact.title', 'Контакты')}</h3>
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
                  <p className="text-white/80 text-sm">{getTranslation('quality.contact.phone', 'Телефон')}</p>
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
                  <p className="text-white/80 text-sm">{getTranslation('quality.contact.email', 'Email')}</p>
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
                  <FaCalendarAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{getTranslation('quality.contact.hours', 'Часы работы')}</p>
                  <p className="font-semibold">{contactInfo.hours}</p>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-[#023E8A] py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mt-6"
              >
                <FaSearch />
                {getTranslation('quality.contact.consultation', 'Запрос на консультацию')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default QualityDept;