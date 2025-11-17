import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaRocket,
  FaLightbulb,
  FaHeart,
  FaShieldAlt,
  FaGraduationCap,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaCalendarAlt,
  FaAward
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ManagementDept = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("leadership");

  // Статистика отдела
  const departmentStats = [
    { number: "25+", label: t('management.stats.managers'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "15", label: t('management.stats.projects'), icon: <FaChartLine className="text-[#023E8A]" /> },
    { number: "98%", label: t('management.stats.success'), icon: <FaAward className="text-[#023E8A]" /> },
    { number: "50+", label: t('management.stats.partners'), icon: <FaHandshake className="text-[#023E8A]" /> }
  ];

  // Команда руководства
  const leadershipTeam = [
    {
      id: 1,
      name: t('management.team.ceo.name'),
      position: t('management.team.ceo.position'),
      department: t('management.team.ceo.department'),
      experience: t('management.team.ceo.experience'),
      description: t('management.team.ceo.description'),
      achievements: t('management.team.ceo.achievements', { returnObjects: true }),
      image: "/api/placeholder/300/300",
      featured: true
    },
    {
      id: 2,
      name: t('management.team.cto.name'),
      position: t('management.team.cto.position'),
      department: t('management.team.cto.department'),
      experience: t('management.team.cto.experience'),
      description: t('management.team.cto.description'),
      achievements: t('management.team.cto.achievements', { returnObjects: true }),
      image: "/api/placeholder/300/300",
      featured: true
    },
    {
      id: 3,
      name: t('management.team.hr.name'),
      position: t('management.team.hr.position'),
      department: t('management.team.hr.department'),
      experience: t('management.team.hr.experience'),
      description: t('management.team.hr.description'),
      achievements: t('management.team.hr.achievements', { returnObjects: true }),
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 4,
      name: t('management.team.finance.name'),
      position: t('management.team.finance.position'),
      department: t('management.team.finance.department'),
      experience: t('management.team.finance.experience'),
      description: t('management.team.finance.description'),
      achievements: t('management.team.finance.achievements', { returnObjects: true }),
      image: "/api/placeholder/300/300",
      featured: false
    }
  ];

  // Ценности управления
  const managementValues = [
    {
      icon: <FaLightbulb className="text-white" size={24} />,
      title: t('management.values.innovation.title'),
      description: t('management.values.innovation.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaHeart className="text-white" size={24} />,
      title: t('management.values.excellence.title'),
      description: t('management.values.excellence.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaShieldAlt className="text-white" size={24} />,
      title: t('management.values.integrity.title'),
      description: t('management.values.integrity.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('management.values.growth.title'),
      description: t('management.values.growth.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  // Стратегические цели
  const strategicGoals = [
    {
      id: 1,
      title: t('management.goals.growth.title'),
      description: t('management.goals.growth.description'),
      icon: <FaChartLine className="text-lg" />,
      timeline: t('management.goals.growth.timeline'),
      progress: 75
    },
    {
      id: 2,
      title: t('management.goals.innovation.title'),
      description: t('management.goals.innovation.description'),
      icon: <FaLightbulb className="text-lg" />,
      timeline: t('management.goals.innovation.timeline'),
      progress: 60
    },
    {
      id: 3,
      title: t('management.goals.talent.title'),
      description: t('management.goals.talent.description'),
      icon: <FaUsers className="text-lg" />,
      timeline: t('management.goals.talent.timeline'),
      progress: 85
    },
    {
      id: 4,
      title: t('management.goals.sustainability.title'),
      description: t('management.goals.sustainability.description'),
      icon: <FaShieldAlt className="text-lg" />,
      timeline: t('management.goals.sustainability.timeline'),
      progress: 45
    }
  ];

  // Принципы управления
  const managementPrinciples = [
    {
      title: t('management.principles.transparency.title'),
      description: t('management.principles.transparency.description'),
      icon: <FaEye className="text-[#023E8A]" />
    },
    {
      title: t('management.principles.accountability.title'),
      description: t('management.principles.accountability.description'),
      icon: <FaCheckCircle className="text-[#023E8A]" />
    },
    {
      title: t('management.principles.collaboration.title'),
      description: t('management.principles.collaboration.description'),
      icon: <FaHandshake className="text-[#023E8A]" />
    },
    {
      title: t('management.principles.agility.title'),
      description: t('management.principles.agility.description'),
      icon: <FaRocket className="text-[#023E8A]" />
    }
  ];

  const tabs = [
    { id: "leadership", label: t('management.tabs.leadership'), icon: <FaUsers /> },
    { id: "strategy", label: t('management.tabs.strategy'), icon: <FaChartLine /> },
    { id: "values", label: t('management.tabs.values'), icon: <FaHeart /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "leadership":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                      {member.featured && (
                        <span className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-2 py-1 rounded-full text-xs font-semibold">
                          <FaStar className="inline mr-1" />
                          {t('management.featured')}
                        </span>
                      )}
                    </div>
                    <p className="text-[#023E8A] font-semibold mb-1">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-2">{member.department}</p>
                    <p className="text-gray-500 text-sm">{member.experience}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">{t('management.achievements')}:</h4>
                  {member.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaCheckCircle className="text-[#023E8A] text-xs" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      
      case "strategy":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-[#023E8A] px-6 py-4 rounded-2xl mb-6">
                <FaBullseye className="text-xl" />
                <span className="text-lg font-semibold">{t('management.strategicVision')}</span>
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed font-light">
                {t('management.visionStatement')}
              </p>
            </div>

            <div className="grid gap-6">
              {strategicGoals.map((goal, index) => (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center text-white">
                      {goal.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {goal.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {goal.description}
                      </p>
                    </div>
                  </div>

                  {/* Прогресс бар */}
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{t('management.progress')}</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] h-2 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt />
                      {goal.timeline}
                    </span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-1 text-[#023E8A] font-semibold"
                    >
                      {t('management.learnMore')}
                      <FaArrowRight className="text-xs" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case "values":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {managementValues.map((value, index) => (
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
            <FaUsers className="text-xl" />
            <span className="font-semibold">{t('management.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('management.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('management.subtitle')}
          </p>
        </motion.div>

        {/* Статистика отдела */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {departmentStats.map((stat, index) => (
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

        {/* Принципы управления */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('management.ourPrinciples')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('management.principlesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementPrinciples.map((principle, index) => (
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
          {/* Принципы в деталях */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <FaQuoteLeft className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">{t('management.leadershipQuote.title')}</h3>
            </div>
            
            <p className="text-lg mb-6 italic">
              "{t('management.leadershipQuote.quote')}"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                {t('management.leadershipQuote.author').split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold">{t('management.leadershipQuote.author')}</div>
                <div className="text-white/80 text-sm">{t('management.leadershipQuote.position')}</div>
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
                {t('management.joinTeam.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('management.joinTeam.description')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('management.joinTeam.button')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ManagementDept;