import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaRocket,
  FaGraduationCap,
  FaHeart,
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaBookmark,
  FaShare,
  FaEye,
  FaChevronDown,
  FaBriefcase,
  FaIndustry,
  FaCalendarAlt
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Vacancies = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedJob, setExpandedJob] = useState(null);

  // Фильтры вакансий
  const filters = [
    { id: "all", label: t('vacancies.filters.all'), count: 12 },
    { id: "tech", label: t('vacancies.filters.tech'), count: 5 },
    { id: "design", label: t('vacancies.filters.design'), count: 3 },
    { id: "marketing", label: t('vacancies.filters.marketing'), count: 2 },
    { id: "management", label: t('vacancies.filters.management'), count: 2 }
  ];

  // Список вакансий
  const vacancies = [
    {
      id: 1,
      title: t('vacancies.jobs.seniorFrontend.title'),
      department: t('vacancies.jobs.seniorFrontend.department'),
      type: t('vacancies.jobs.seniorFrontend.type'),
      location: t('vacancies.jobs.seniorFrontend.location'),
      salary: t('vacancies.jobs.seniorFrontend.salary'),
      experience: t('vacancies.jobs.seniorFrontend.experience'),
      description: t('vacancies.jobs.seniorFrontend.description'),
      requirements: t('vacancies.jobs.seniorFrontend.requirements', { returnObjects: true }),
      benefits: t('vacancies.jobs.seniorFrontend.benefits', { returnObjects: true }),
      posted: t('vacancies.jobs.seniorFrontend.posted'),
      category: "tech",
      featured: true,
      applications: 24
    },
    {
      id: 2,
      title: t('vacancies.jobs.uxDesigner.title'),
      department: t('vacancies.jobs.uxDesigner.department'),
      type: t('vacancies.jobs.uxDesigner.type'),
      location: t('vacancies.jobs.uxDesigner.location'),
      salary: t('vacancies.jobs.uxDesigner.salary'),
      experience: t('vacancies.jobs.uxDesigner.experience'),
      description: t('vacancies.jobs.uxDesigner.description'),
      requirements: t('vacancies.jobs.uxDesigner.requirements', { returnObjects: true }),
      benefits: t('vacancies.jobs.uxDesigner.benefits', { returnObjects: true }),
      posted: t('vacancies.jobs.uxDesigner.posted'),
      category: "design",
      featured: true,
      applications: 18
    },
    {
      id: 3,
      title: t('vacancies.jobs.productManager.title'),
      department: t('vacancies.jobs.productManager.department'),
      type: t('vacancies.jobs.productManager.type'),
      location: t('vacancies.jobs.productManager.location'),
      salary: t('vacancies.jobs.productManager.salary'),
      experience: t('vacancies.jobs.productManager.experience'),
      description: t('vacancies.jobs.productManager.description'),
      requirements: t('vacancies.jobs.productManager.requirements', { returnObjects: true }),
      benefits: t('vacancies.jobs.productManager.benefits', { returnObjects: true }),
      posted: t('vacancies.jobs.productManager.posted'),
      category: "management",
      featured: false,
      applications: 15
    },
    {
      id: 4,
      title: t('vacancies.jobs.backendDeveloper.title'),
      department: t('vacancies.jobs.backendDeveloper.department'),
      type: t('vacancies.jobs.backendDeveloper.type'),
      location: t('vacancies.jobs.backendDeveloper.location'),
      salary: t('vacancies.jobs.backendDeveloper.salary'),
      experience: t('vacancies.jobs.backendDeveloper.experience'),
      description: t('vacancies.jobs.backendDeveloper.description'),
      requirements: t('vacancies.jobs.backendDeveloper.requirements', { returnObjects: true }),
      benefits: t('vacancies.jobs.backendDeveloper.benefits', { returnObjects: true }),
      posted: t('vacancies.jobs.backendDeveloper.posted'),
      category: "tech",
      featured: false,
      applications: 20
    }
  ];

  // Статистика
  const stats = [
    { number: "50+", label: t('vacancies.stats.openPositions'), icon: <FaBriefcase className="text-[#023E8A]" /> },
    { number: "15", label: t('vacancies.stats.departments'), icon: <FaIndustry className="text-[#023E8A]" /> },
    { number: "95%", label: t('vacancies.stats.happiness'), icon: <FaHeart className="text-[#023E8A]" /> },
    { number: "30+", label: t('vacancies.stats.countries'), icon: <FaUsers className="text-[#023E8A]" /> }
  ];

  // Преимущества работы
  const benefits = [
    {
      icon: <FaRocket className="text-white" size={24} />,
      title: t('vacancies.benefits.career.title'),
      description: t('vacancies.benefits.career.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('vacancies.benefits.learning.title'),
      description: t('vacancies.benefits.learning.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaHeart className="text-white" size={24} />,
      title: t('vacancies.benefits.wellbeing.title'),
      description: t('vacancies.benefits.wellbeing.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('vacancies.benefits.team.title'),
      description: t('vacancies.benefits.team.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const filteredVacancies = vacancies.filter(vacancy => {
    const matchesFilter = activeFilter === "all" || vacancy.category === activeFilter;
    const matchesSearch = vacancy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vacancy.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleJobExpansion = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
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
            <FaBriefcase className="text-xl" />
            <span className="font-semibold">{t('vacancies.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('vacancies.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('vacancies.subtitle')}
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
                  placeholder={t('vacancies.search.placeholder')}
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

        {/* Список вакансий */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="grid gap-6">
            {filteredVacancies.map((vacancy, index) => (
              <motion.div
                key={vacancy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    {/* Основная информация */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        {vacancy.featured && (
                          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            <FaRocket className="text-xs" />
                            {t('vacancies.featured')}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-[#023E8A] px-3 py-1 rounded-full text-sm font-semibold">
                          {vacancy.department}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {vacancy.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {vacancy.description}
                      </p>

                      {/* Детали вакансии */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaMapMarkerAlt className="text-[#023E8A]" />
                          <span>{vacancy.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaClock className="text-[#023E8A]" />
                          <span>{vacancy.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaDollarSign className="text-[#023E8A]" />
                          <span>{vacancy.salary}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaUsers className="text-[#023E8A]" />
                          <span>{vacancy.experience}</span>
                        </div>
                      </div>

                      {/* Расширенная информация */}
                      {expandedJob === vacancy.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-6"
                        >
                          {/* Требования */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">
                              {t('vacancies.requirements')}
                            </h4>
                            <ul className="grid md:grid-cols-2 gap-2">
                              {vacancy.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-600">
                                  <div className="w-2 h-2 bg-[#023E8A] rounded-full" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Преимущества */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">
                              {t('vacancies.benefitsTitle')}
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {vacancy.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-gray-600 bg-blue-50 rounded-lg p-3">
                                  <FaHeart className="text-[#023E8A] text-sm" />
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Боковая панель с действиями */}
                    <div className="flex flex-col gap-4 lg:w-48">
                      <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <div className="text-2xl font-bold text-[#023E8A] mb-1">
                          {vacancy.applications}
                        </div>
                        <div className="text-sm text-gray-600">
                          {t('vacancies.applications')}
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {t('vacancies.apply')}
                      </motion.button>

                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex-1 bg-gray-100 text-gray-600 py-2 rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
                        >
                          <FaBookmark />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex-1 bg-gray-100 text-gray-600 py-2 rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
                        >
                          <FaShare />
                        </motion.button>
                      </div>

                      <motion.button
                        onClick={() => toggleJobExpansion(vacancy.id)}
                        className="flex items-center justify-center gap-2 text-[#023E8A] font-semibold py-2 hover:bg-blue-50 rounded-xl transition-colors duration-300"
                      >
                        {expandedJob === vacancy.id ? t('vacancies.showLess') : t('vacancies.showMore')}
                        <motion.div
                          animate={{ rotate: expandedJob === vacancy.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="text-sm" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>

                  {/* Футер вакансии */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200 mt-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <FaCalendarAlt />
                      <span>{t('vacancies.posted')}: {vacancy.posted}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaEye className="text-[#023E8A]" />
                        245 {t('vacancies.views')}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Преимущества работы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('vacancies.whyJoin')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('vacancies.whyJoinDescription')}
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

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('vacancies.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('vacancies.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('vacancies.cta.applyNow')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('vacancies.cta.learnMore')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vacancies;