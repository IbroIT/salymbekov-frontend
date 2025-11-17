import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaUsers,
  FaHandshake,
  FaRocket,
  FaChartLine,
  FaAward,
  FaLanguage,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaCalendarAlt,
  FaPlane,
  FaUniversity,
  FaGraduationCap
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const InternationalDept = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("global");

  // Статистика международного отдела
  const internationalStats = [
    { number: "30+", label: t('international.stats.countries'), icon: <FaGlobeAmericas className="text-[#023E8A]" /> },
    { number: "50+", label: t('international.stats.partners'), icon: <FaHandshake className="text-[#023E8A]" /> },
    { number: "15K+", label: t('international.stats.students'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "95%", label: t('international.stats.satisfaction'), icon: <FaAward className="text-[#023E8A]" /> }
  ];

  // Международные программы
  const internationalPrograms = [
    {
      id: 1,
      title: t('international.programs.studyAbroad.title'),
      description: t('international.programs.studyAbroad.description'),
      icon: <FaPlane className="text-lg" />,
      timeline: t('international.programs.studyAbroad.timeline'),
      locations: t('international.programs.studyAbroad.locations'),
      participants: t('international.programs.studyAbroad.participants'),
      progress: 85
    },
    {
      id: 2,
      title: t('international.programs.exchange.title'),
      description: t('international.programs.exchange.description'),
      icon: <FaUniversity className="text-lg" />,
      timeline: t('international.programs.exchange.timeline'),
      locations: t('international.programs.exchange.locations'),
      participants: t('international.programs.exchange.participants'),
      progress: 70
    },
    {
      id: 3,
      title: t('international.programs.language.title'),
      description: t('international.programs.language.description'),
      icon: <FaLanguage className="text-lg" />,
      timeline: t('international.programs.language.timeline'),
      locations: t('international.programs.language.locations'),
      participants: t('international.programs.language.participants'),
      progress: 90
    },
    {
      id: 4,
      title: t('international.programs.internship.title'),
      description: t('international.programs.internship.description'),
      icon: <FaGraduationCap className="text-lg" />,
      timeline: t('international.programs.internship.timeline'),
      locations: t('international.programs.internship.locations'),
      participants: t('international.programs.internship.participants'),
      progress: 65
    }
  ];

  // Международные ценности
  const internationalValues = [
    {
      icon: <FaGlobeAmericas className="text-white" size={24} />,
      title: t('international.values.diversity.title'),
      description: t('international.values.diversity.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaHandshake className="text-white" size={24} />,
      title: t('international.values.collaboration.title'),
      description: t('international.values.collaboration.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaLanguage className="text-white" size={24} />,
      title: t('international.values.inclusion.title'),
      description: t('international.values.inclusion.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaRocket className="text-white" size={24} />,
      title: t('international.values.innovation.title'),
      description: t('international.values.innovation.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  // Партнерские страны
  const partnerCountries = [
    {
      name: t('international.countries.usa.name'),
      flag: "🇺🇸",
      universities: t('international.countries.usa.universities'),
      students: t('international.countries.usa.students'),
      programs: t('international.countries.usa.programs'),
      established: t('international.countries.usa.established')
    },
    {
      name: t('international.countries.germany.name'),
      flag: "🇩🇪",
      universities: t('international.countries.germany.universities'),
      students: t('international.countries.germany.students'),
      programs: t('international.countries.germany.programs'),
      established: t('international.countries.germany.established')
    },
    {
      name: t('international.countries.china.name'),
      flag: "🇨🇳",
      universities: t('international.countries.china.universities'),
      students: t('international.countries.china.students'),
      programs: t('international.countries.china.programs'),
      established: t('international.countries.china.established')
    },
    {
      name: t('international.countries.canada.name'),
      flag: "🇨🇦",
      universities: t('international.countries.canada.universities'),
      students: t('international.countries.canada.students'),
      programs: t('international.countries.canada.programs'),
      established: t('international.countries.canada.established')
    }
  ];

  // Принципы международной работы
  const internationalPrinciples = [
    {
      title: t('international.principles.quality.title'),
      description: t('international.principles.quality.description'),
      icon: <FaStar className="text-[#023E8A]" />
    },
    {
      title: t('international.principles.accessibility.title'),
      description: t('international.principles.accessibility.description'),
      icon: <FaUsers className="text-[#023E8A]" />
    },
    {
      title: t('international.principles.innovation.title'),
      description: t('international.principles.innovation.description'),
      icon: <FaRocket className="text-[#023E8A]" />
    },
    {
      title: t('international.principles.sustainability.title'),
      description: t('international.principles.sustainability.description'),
      icon: <FaGlobeAmericas className="text-[#023E8A]" />
    }
  ];

  const tabs = [
    { id: "global", label: t('international.tabs.global'), icon: <FaGlobeAmericas /> },
    { id: "programs", label: t('international.tabs.programs'), icon: <FaRocket /> },
    { id: "partners", label: t('international.tabs.partners'), icon: <FaHandshake /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "global":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-[#023E8A] px-6 py-4 rounded-2xl mb-6">
                <FaGlobeAmericas className="text-xl" />
                <span className="text-lg font-semibold">{t('international.globalPresence')}</span>
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed font-light">
                {t('international.globalDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {internationalValues.map((value, index) => (
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
      
      case "programs":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-[#023E8A] px-6 py-4 rounded-2xl mb-6">
                <FaRocket className="text-xl" />
                <span className="text-lg font-semibold">{t('international.programsTitle')}</span>
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed font-light">
                {t('international.programsDescription')}
              </p>
            </div>

            <div className="grid gap-6">
              {internationalPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center text-white">
                      {program.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-3 text-gray-600">
                          <FaMapMarkerAlt className="text-[#023E8A]" />
                          <span>{program.locations}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <FaUsers className="text-[#023E8A]" />
                          <span>{program.participants}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <FaCalendarAlt className="text-[#023E8A]" />
                          <span>{program.timeline}</span>
                        </div>
                      </div>

                      {/* Прогресс бар */}
                      <div className="mb-3">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>{t('international.programProgress')}</span>
                          <span>{program.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${program.progress}%` }}
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
                      {t('international.applyNow')}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case "partners":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-[#023E8A] px-6 py-4 rounded-2xl mb-6">
                <FaHandshake className="text-xl" />
                <span className="text-lg font-semibold">{t('international.partnersTitle')}</span>
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed font-light">
                {t('international.partnersDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {partnerCountries.map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{country.flag}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{country.name}</h3>
                      <p className="text-gray-600 text-sm">{t('international.established')}: {country.established}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <div className="font-bold text-[#023E8A] text-lg">{country.universities}</div>
                      <div className="text-gray-600">{t('international.universities')}</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-xl">
                      <div className="font-bold text-[#023E8A] text-lg">{country.students}</div>
                      <div className="text-gray-600">{t('international.students')}</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-xl">
                      <div className="font-bold text-[#023E8A] text-lg">{country.programs}</div>
                      <div className="text-gray-600">{t('international.programs')}</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-xl">
                      <div className="font-bold text-[#023E8A] text-lg">A+</div>
                      <div className="text-gray-600">{t('international.rating')}</div>
                    </div>
                  </div>
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
            <FaGlobeAmericas className="text-xl" />
            <span className="font-semibold">{t('international.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('international.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('international.subtitle')}
          </p>
        </motion.div>

        {/* Статистика международного отдела */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {internationalStats.map((stat, index) => (
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

        {/* Принципы международной работы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('international.ourPrinciples')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('international.principlesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalPrinciples.map((principle, index) => (
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
          {/* Цитата о международном сотрудничестве */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <FaQuoteLeft className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">{t('international.globalQuote.title')}</h3>
            </div>
            
            <p className="text-lg mb-6 italic">
              "{t('international.globalQuote.quote')}"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                {t('international.globalQuote.author').split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold">{t('international.globalQuote.author')}</div>
                <div className="text-white/80 text-sm">{t('international.globalQuote.position')}</div>
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
                <FaPlane className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t('international.joinTeam.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('international.joinTeam.description')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('international.joinTeam.button')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InternationalDept;