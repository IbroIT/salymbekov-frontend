import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaBriefcase,
  FaUsers,
  FaRocket,
  FaGraduationCap,
  FaChartLine,
  FaHandshake,
  FaAward,
  FaSearch,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaIndustry,
  FaUserTie
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CareerCenter = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("services");
  const [searchTerm, setSearchTerm] = useState("");

  // Статистика карьерного центра
  const careerStats = [
    { number: "95%", label: t('career.stats.placement'), icon: <FaBriefcase className="text-[#023E8A]" /> },
    { number: "500+", label: t('career.stats.companies'), icon: <FaIndustry className="text-[#023E8A]" /> },
    { number: "2K+", label: t('career.stats.students'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "85%", label: t('career.stats.satisfaction'), icon: <FaAward className="text-[#023E8A]" /> }
  ];

  // Услуги карьерного центра
  const careerServices = [
    {
      id: 1,
      title: t('career.services.resume.title'),
      description: t('career.services.resume.description'),
      icon: <FaUserTie className="text-lg" />,
      duration: t('career.services.resume.duration'),
      participants: t('career.services.resume.participants'),
      successRate: t('career.services.resume.successRate'),
      progress: 90
    },
    {
      id: 2,
      title: t('career.services.interview.title'),
      description: t('career.services.interview.description'),
      icon: <FaHandshake className="text-lg" />,
      duration: t('career.services.interview.duration'),
      participants: t('career.services.interview.participants'),
      successRate: t('career.services.interview.successRate'),
      progress: 85
    },
    {
      id: 3,
      title: t('career.services.coaching.title'),
      description: t('career.services.coaching.description'),
      icon: <FaGraduationCap className="text-lg" />,
      duration: t('career.services.coaching.duration'),
      participants: t('career.services.coaching.participants'),
      successRate: t('career.services.coaching.successRate'),
      progress: 80
    },
    {
      id: 4,
      title: t('career.services.networking.title'),
      description: t('career.services.networking.description'),
      icon: <FaUsers className="text-lg" />,
      duration: t('career.services.networking.duration'),
      participants: t('career.services.networking.participants'),
      successRate: t('career.services.networking.successRate'),
      progress: 75
    }
  ];

  // Карьерные мероприятия
  const careerEvents = [
    {
      id: 1,
      title: t('career.events.careerFair.title'),
      date: t('career.events.careerFair.date'),
      time: t('career.events.careerFair.time'),
      location: t('career.events.careerFair.location'),
      companies: t('career.events.careerFair.companies'),
      registered: t('career.events.careerFair.registered'),
      type: "fair",
      featured: true
    },
    {
      id: 2,
      title: t('career.events.workshop.title'),
      date: t('career.events.workshop.date'),
      time: t('career.events.workshop.time'),
      location: t('career.events.workshop.location'),
      companies: t('career.events.workshop.companies'),
      registered: t('career.events.workshop.registered'),
      type: "workshop",
      featured: false
    },
    {
      id: 3,
      title: t('career.events.networking.title'),
      date: t('career.events.networking.date'),
      time: t('career.events.networking.time'),
      location: t('career.events.networking.location'),
      companies: t('career.events.networking.companies'),
      registered: t('career.events.networking.registered'),
      type: "networking",
      featured: true
    },
    {
      id: 4,
      title: t('career.events.seminar.title'),
      date: t('career.events.seminar.date'),
      time: t('career.events.seminar.time'),
      location: t('career.events.seminar.location'),
      companies: t('career.events.seminar.companies'),
      registered: t('career.events.seminar.registered'),
      type: "seminar",
      featured: false
    }
  ];

  // Карьерные ценности
  const careerValues = [
    {
      icon: <FaRocket className="text-white" size={24} />,
      title: t('career.values.growth.title'),
      description: t('career.values.growth.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaHandshake className="text-white" size={24} />,
      title: t('career.values.partnership.title'),
      description: t('career.values.partnership.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('career.values.community.title'),
      description: t('career.values.community.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaChartLine className="text-white" size={24} />,
      title: t('career.values.success.title'),
      description: t('career.values.success.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  // Принципы работы
  const careerPrinciples = [
    {
      title: t('career.principles.personalization.title'),
      description: t('career.principles.personalization.description'),
      icon: <FaUserTie className="text-[#023E8A]" />
    },
    {
      title: t('career.principles.innovation.title'),
      description: t('career.principles.innovation.description'),
      icon: <FaRocket className="text-[#023E8A]" />
    },
    {
      title: t('career.principles.accessibility.title'),
      description: t('career.principles.accessibility.description'),
      icon: <FaUsers className="text-[#023E8A]" />
    },
    {
      title: t('career.principles.excellence.title'),
      description: t('career.principles.excellence.description'),
      icon: <FaStar className="text-[#023E8A]" />
    }
  ];

  const tabs = [
    { id: "services", label: t('career.tabs.services'), icon: <FaBriefcase /> },
    { id: "events", label: t('career.tabs.events'), icon: <FaCalendarAlt /> },
    { id: "resources", label: t('career.tabs.resources'), icon: <FaGraduationCap /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "services":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-[#023E8A] px-6 py-4 rounded-2xl mb-6">
                <FaBriefcase className="text-xl" />
                <span className="text-lg font-semibold">{t('career.servicesTitle')}</span>
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed font-light">
                {t('career.servicesDescription')}
              </p>
            </div>

            <div className="grid gap-6">
              {careerServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-3 text-gray-600">
                          <FaCalendarAlt className="text-[#023E8A]" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <FaUsers className="text-[#023E8A]" />
                          <span>{service.participants}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <FaChartLine className="text-[#023E8A]" />
                          <span>{service.successRate}</span>
                        </div>
                      </div>

                      {/* Прогресс бар */}
                      <div className="mb-3">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>{t('career.serviceProgress')}</span>
                          <span>{service.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${service.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] h-3 rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                    >
                      {t('career.bookSession')}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case "events":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-[#023E8A] px-6 py-4 rounded-2xl mb-6">
                <FaCalendarAlt className="text-xl" />
                <span className="text-lg font-semibold">{t('career.eventsTitle')}</span>
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed font-light">
                {t('career.eventsDescription')}
              </p>
            </div>

            {/* Поиск мероприятий */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-6">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('career.searchEvents')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#023E8A] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {careerEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                        {event.featured && (
                          <span className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-2 py-1 rounded-full text-xs font-semibold">
                            <FaStar className="inline mr-1" />
                            {t('career.featured')}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <FaCalendarAlt className="text-[#023E8A]" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-[#023E8A]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                      <div className="font-bold text-[#023E8A]">{event.companies}</div>
                      <div className="text-gray-600">{t('career.companies')}</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 rounded-lg">
                      <div className="font-bold text-[#023E8A]">{event.registered}</div>
                      <div className="text-gray-600">{t('career.registered')}</div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t('career.registerNow')}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case "resources":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-[#023E8A] px-6 py-4 rounded-2xl mb-6">
                <FaGraduationCap className="text-xl" />
                <span className="text-lg font-semibold">{t('career.resourcesTitle')}</span>
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed font-light">
                {t('career.resourcesDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {careerValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
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
            <FaBriefcase className="text-xl" />
            <span className="font-semibold">{t('career.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('career.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('career.subtitle')}
          </p>
        </motion.div>

        {/* Статистика карьерного центра */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {careerStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Основной контент с табами */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Табы */}
            <div className="border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex flex-col sm:flex-row">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                        : 'text-gray-600 hover:bg-white/50'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Контент табов */}
            <div className="p-8 md:p-12">
              {renderTabContent()}
            </div>
          </div>
        </motion.div>

        {/* Принципы работы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('career.ourPrinciples')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('career.principlesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Цитата о карьере */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <FaQuoteLeft className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">{t('career.careerQuote.title')}</h3>
            </div>
            
            <p className="text-lg mb-6 italic">
              "{t('career.careerQuote.quote')}"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                {t('career.careerQuote.author').split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold">{t('career.careerQuote.author')}</div>
                <div className="text-white/80 text-sm">{t('career.careerQuote.position')}</div>
              </div>
            </div>
          </motion.div>

          {/* Призыв к действию */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 flex flex-col justify-center"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t('career.startJourney.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('career.startJourney.description')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('career.startJourney.button')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerCenter;