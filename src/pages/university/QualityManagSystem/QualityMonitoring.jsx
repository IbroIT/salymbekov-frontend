import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaChartLine,
  FaShieldAlt,
  FaCogs,
  FaUsers,
  FaRocket,
  FaAward,
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaEye,
  FaCalendarAlt,
  FaCheckCircle,
  FaIndustry,
  FaGlobe
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const QualityMonitoringPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Фильтры для мониторинга качества
  const filters = [
    { id: "all", label: t('qualityMonitoring.filters.all'), count: 8 },
    { id: "process", label: t('qualityMonitoring.filters.process'), count: 3 },
    { id: "safety", label: t('qualityMonitoring.filters.safety'), count: 2 },
    { id: "environment", label: t('qualityMonitoring.filters.environment'), count: 2 },
    { id: "compliance", label: t('qualityMonitoring.filters.compliance'), count: 1 }
  ];

  // Метрики качества
  const qualityMetrics = [
    {
      id: 1,
      title: t('qualityMonitoring.metrics.processEfficiency.title'),
      value: "98.5%",
      change: "+2.3%",
      description: t('qualityMonitoring.metrics.processEfficiency.description'),
      icon: <FaCogs className="text-white" size={24} />,
      color: "bg-[#023E8A]",
      category: "process"
    },
    {
      id: 2,
      title: t('qualityMonitoring.metrics.safetyCompliance.title'),
      value: "99.8%",
      change: "+0.5%",
      description: t('qualityMonitoring.metrics.safetyCompliance.description'),
      icon: <FaShieldAlt className="text-white" size={24} />,
      color: "bg-[#0077B6]",
      category: "safety"
    },
    {
      id: 3,
      title: t('qualityMonitoring.metrics.environmental.title'),
      value: "95.2%",
      change: "+3.1%",
      description: t('qualityMonitoring.metrics.environmental.description'),
      icon: <FaGlobe className="text-white" size={24} />,
      color: "bg-[#0096C7]",
      category: "environment"
    },
    {
      id: 4,
      title: t('qualityMonitoring.metrics.customerSatisfaction.title'),
      value: "96.7%",
      change: "+1.8%",
      description: t('qualityMonitoring.metrics.customerSatisfaction.description'),
      icon: <FaUsers className="text-white" size={24} />,
      color: "bg-[#00B4D8]",
      category: "compliance"
    }
  ];

  // Преимущества системы
  const benefits = [
    {
      icon: <FaChartLine className="text-white" size={24} />,
      title: t('qualityMonitoring.benefits.realTime.title'),
      description: t('qualityMonitoring.benefits.realTime.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaShieldAlt className="text-white" size={24} />,
      title: t('qualityMonitoring.benefits.safety.title'),
      description: t('qualityMonitoring.benefits.safety.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('qualityMonitoring.benefits.certification.title'),
      description: t('qualityMonitoring.benefits.certification.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaIndustry className="text-white" size={24} />,
      title: t('qualityMonitoring.benefits.continuous.title'),
      description: t('qualityMonitoring.benefits.continuous.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  // Статистика
  const stats = [
    { number: "99.8%", label: t('qualityMonitoring.stats.quality'), icon: <FaAward className="text-[#023E8A]" /> },
    { number: "50+", label: t('qualityMonitoring.stats.monitoring'), icon: <FaChartLine className="text-[#023E8A]" /> },
    { number: "24/7", label: t('qualityMonitoring.stats.realTime'), icon: <FaEye className="text-[#023E8A]" /> },
    { number: "ISO 9001", label: t('qualityMonitoring.stats.certified'), icon: <FaCheckCircle className="text-[#023E8A]" /> }
  ];

  const filteredMetrics = qualityMetrics.filter(metric => {
    const matchesFilter = activeFilter === "all" || metric.category === activeFilter;
    const matchesSearch = metric.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         metric.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-4 leading-relaxed text-lg">
            <strong>{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-4 leading-relaxed text-lg text-gray-600">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.03, 0.1, 0.03],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaShieldAlt className="text-xl" />
            <span className="font-semibold">{t('qualityMonitoring.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('qualityMonitoring.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('qualityMonitoring.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
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

        {/* Поиск и фильтры */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Поиск */}
            <div className="flex-1 w-full">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('qualityMonitoring.search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#023E8A] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Фильтры */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FaFilter className="text-sm" />
                  {filter.label}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Основной контент */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 mb-12"
        >
          <div className="prose max-w-none">
            {formatTextWithBold(t('qualityMonitoring.content'))}
          </div>
        </motion.div>

        {/* Метрики качества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('qualityMonitoring.metricsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('qualityMonitoring.metricsDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredMetrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${metric.color} rounded-xl flex items-center justify-center`}>
                    {metric.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-800">{metric.value}</div>
                    <div className="text-sm font-semibold text-green-500">{metric.change}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{metric.title}</h3>
                <p className="text-gray-600 leading-relaxed">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Преимущества системы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('qualityMonitoring.benefitsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('qualityMonitoring.benefitsDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
      </div>
    </div>
  );
};

export default QualityMonitoringPage;