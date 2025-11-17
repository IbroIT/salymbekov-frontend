import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaUsers,
  FaHeart,
  FaGraduationCap,
  FaAward,
  FaChartLine,
  FaHandshake,
  FaRocket,
  FaLightbulb,
  FaShieldAlt,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaCalendarAlt,
  FaBalanceScale,
  FaSmile,
  FaTrophy
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HRDept = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("culture");

  // Статистика HR отдела
  const hrStats = [
    { number: "95%", label: t('hr.stats.satisfaction'), icon: <FaSmile className="text-[#023E8A]" /> },
    { number: "150+", label: t('hr.stats.employees'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "40%", label: t('hr.stats.retention'), icon: <FaHeart className="text-[#023E8A]" /> },
    { number: "25+", label: t('hr.stats.programs'), icon: <FaGraduationCap className="text-[#023E8A]" /> }
  ];

  // Программы HR
  const hrPrograms = [
    {
      id: 1,
      title: t('hr.programs.onboarding.title'),
      description: t('hr.programs.onboarding.description'),
      icon: <FaRocket className="text-lg" />,
      timeline: t('hr.programs.onboarding.timeline'),
      participants: t('hr.programs.onboarding.participants'),
      progress: 90
    },
    {
      id: 2,
      title: t('hr.programs.leadership.title'),
      description: t('hr.programs.leadership.description'),
      icon: <FaTrophy className="text-lg" />,
      timeline: t('hr.programs.leadership.timeline'),
      participants: t('hr.programs.leadership.participants'),
      progress: 75
    },
    {
      id: 3,
      title: t('hr.programs.wellness.title'),
      description: t('hr.programs.wellness.description'),
      icon: <FaHeart className="text-lg" />,
      timeline: t('hr.programs.wellness.timeline'),
      participants: t('hr.programs.wellness.participants'),
      progress: 85
    },
    {
      id: 4,
      title: t('hr.programs.development.title'),
      description: t('hr.programs.development.description'),
      icon: <FaGraduationCap className="text-lg" />,
      timeline: t('hr.programs.development.timeline'),
      participants: t('hr.programs.development.participants'),
      progress: 70
    }
  ];

  // Ценности HR
  const hrValues = [
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('hr.values.people.title'),
      description: t('hr.values.people.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaBalanceScale className="text-white" size={24} />,
      title: t('hr.values.fairness.title'),
      description: t('hr.values.fairness.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaLightbulb className="text-white" size={24} />,
      title: t('hr.values.growth.title'),
      description: t('hr.values.growth.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaShieldAlt className="text-white" size={24} />,
      title: t('hr.values.support.title'),
      description: t('hr.values.support.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  // Бенефиты для сотрудников
  const employeeBenefits = [
    {
      title: t('hr.benefits.health.title'),
      description: t('hr.benefits.health.description'),
      icon: <FaHeart className="text-[#023E8A]" />,
      category: "health"
    },
    {
      title: t('hr.benefits.learning.title'),
      description: t('hr.benefits.learning.description'),
      icon: <FaGraduationCap className="text-[#023E8A]" />,
      category: "development"
    },
    {
      title: t('hr.benefits.flexibility.title'),
      description: t('hr.benefits.flexibility.description'),
      icon: <FaBalanceScale className="text-[#023E8A]" />,
      category: "worklife"
    },
    {
      title: t('hr.benefits.recognition.title'),
      description: t('hr.benefits.recognition.description'),
      icon: <FaAward className="text-[#023E8A]" />,
      category: "culture"
    }
  ];

  // Принципы работы HR
  const hrPrinciples = [
    {
      title: t('hr.principles.transparency.title'),
      description: t('hr.principles.transparency.description'),
      icon: <FaEye className="text-[#023E8A]" />
    },
    {
      title: t('hr.principles.empathy.title'),
      description: t('hr.principles.empathy.description'),
      icon: <FaHeart className="text-[#023E8A]" />
    },
    {
      title: t('hr.principles.innovation.title'),
      description: t('hr.principles.innovation.description'),
      icon: <FaLightbulb className="text-[#023E8A]" />
    },
    {
      title: t('hr.principles.excellence.title'),
      description: t('hr.principles.excellence.description'),
      icon: <FaStar className="text-[#023E8A]" />
    }
  ];

  const tabs = [
    { id: "culture", label: t('hr.tabs.culture'), icon: <FaHeart /> },
    { id: "programs", label: t('hr.tabs.programs'), icon: <FaGraduationCap /> },
    { id: "benefits", label: t('hr.tabs.benefits'), icon: <FaAward /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "culture":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-[#023E8A] px-6 py-4 rounded-2xl mb-6">
                <FaUsers className="text-xl" />
                <span className="text-lg font-semibold">{t('hr.cultureTitle')}</span>
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed font-light">
                {t('hr.cultureDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {hrValues.map((value, index) => (
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
                <span className="text-lg font-semibold">{t('hr.programsTitle')}</span>
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed font-light">
                {t('hr.programsDescription')}
              </p>
            </div>

            <div className="grid gap-6">
              {hrPrograms.map((program, index) => (
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                          <span>{t('hr.programProgress')}</span>
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
                      {t('hr.learnMore')}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case "benefits":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-[#023E8A] px-6 py-4 rounded-2xl mb-6">
                <FaAward className="text-xl" />
                <span className="text-lg font-semibold">{t('hr.benefitsTitle')}</span>
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed font-light">
                {t('hr.benefitsDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {employeeBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
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
            <FaHeart className="text-xl" />
            <span className="font-semibold">{t('hr.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('hr.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('hr.subtitle')}
          </p>
        </motion.div>

        {/* Статистика HR отдела */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {hrStats.map((stat, index) => (
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

        {/* Принципы работы HR */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('hr.ourPrinciples')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('hr.principlesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hrPrinciples.map((principle, index) => (
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
          {/* Цитата о культуре */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <FaQuoteLeft className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">{t('hr.cultureQuote.title')}</h3>
            </div>
            
            <p className="text-lg mb-6 italic">
              "{t('hr.cultureQuote.quote')}"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                {t('hr.cultureQuote.author').split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold">{t('hr.cultureQuote.author')}</div>
                <div className="text-white/80 text-sm">{t('hr.cultureQuote.position')}</div>
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
                <FaHandshake className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t('hr.joinTeam.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('hr.joinTeam.description')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('hr.joinTeam.button')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HRDept;