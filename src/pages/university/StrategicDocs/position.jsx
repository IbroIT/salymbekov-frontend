import { motion } from "framer-motion";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaBookOpen,
  FaGraduationCap,
  FaUserGraduate,
  FaUniversity,
  FaCalendarAlt,
  FaClock,
  FaSearch,
  FaFilter,
  FaChevronDown,
  FaArrowRight,
  FaBookmark,
  FaShare,
  FaEye
} from "react-icons/fa";

const UniversityPositionPage = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Фильтры для разделов
  const filters = [
    { id: "all", label: t('universityPosition.filters.all'), count: 8 },
    { id: "academic", label: t('universityPosition.filters.academic'), count: 4 },
    { id: "administrative", label: t('universityPosition.filters.administrative'), count: 2 },
    { id: "student", label: t('universityPosition.filters.student'), count: 2 }
  ];

  const sections = [
    {
      id: 1,
      title: t('universityPosition.section1.title'),
      content: t('universityPosition.section1.content'),
      category: "academic",
      lastUpdated: t('universityPosition.section1.lastUpdated'),
      views: 1245
    },
    {
      id: 2,
      title: t('universityRegulations.section2.title'),
      content: t('universityRegulations.section2.content'),
      category: "academic",
      lastUpdated: t('universityRegulations.section2.lastUpdated'),
      views: 987
    },
    {
      id: 3,
      title: t('universityRegulations.section3.title'),
      content: t('universityRegulations.section3.content'),
      category: "administrative",
      lastUpdated: t('universityRegulations.section3.lastUpdated'),
      views: 756
    },
    {
      id: 4,
      title: t('universityRegulations.section4.title'),
      content: t('universityRegulations.section4.content'),
      category: "student",
      lastUpdated: t('universityRegulations.section4.lastUpdated'),
      views: 1123
    },
    {
      id: 5,
      title: t('universityRegulations.section5.title'),
      content: t('universityRegulations.section5.content'),
      category: "academic",
      lastUpdated: t('universityRegulations.section5.lastUpdated'),
      views: 834
    },
    {
      id: 6,
      title: t('universityRegulations.section6.title'),
      content: t('universityRegulations.section6.content'),
      category: "administrative",
      lastUpdated: t('universityRegulations.section6.lastUpdated'),
      views: 645
    },
    {
      id: 7,
      title: t('universityRegulations.section7.title'),
      content: t('universityRegulations.section7.content'),
      category: "student",
      lastUpdated: t('universityRegulations.section7.lastUpdated'),
      views: 923
    },
    {
      id: 8,
      title: t('universityRegulations.section8.title'),
      content: t('universityRegulations.section8.content'),
      category: "academic",
      lastUpdated: t('universityRegulations.section8.lastUpdated'),
      views: 1056
    }
  ];

  // Статистика университета
  const stats = [
    { number: "50+", label: t('universityRegulations.stats.years'), icon: <FaCalendarAlt className="text-[#023E8A]" /> },
    { number: "15k", label: t('universityRegulations.stats.students'), icon: <FaUserGraduate className="text-[#023E8A]" /> },
    { number: "200+", label: t('universityRegulations.stats.programs'), icon: <FaBookOpen className="text-[#023E8A]" /> },
    { number: "95%", label: t('universityRegulations.stats.satisfaction'), icon: <FaGraduationCap className="text-[#023E8A]" /> }
  ];

  const filteredSections = sections.filter(section => {
    const matchesFilter = activeFilter === "all" || section.category === activeFilter;
    const matchesSearch = section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 30,
              height: Math.random() * 80 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.15, 1]
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaUniversity className="text-xl" />
            <span className="font-semibold">{t('universityRegulations.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('universityRegulations.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('universityRegulations.subtitle')}
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
                  placeholder={t('universityRegulations.search.placeholder')}
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

        {/* Список разделов */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="grid gap-6">
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.id}
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
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-[#023E8A] px-3 py-1 rounded-full text-sm font-semibold">
                          {t(`universityRegulations.categories.${section.category}`)}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full text-left"
                      >
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-[#023E8A] transition-colors duration-300">
                          {section.title}
                        </h3>
                      </button>

                      {/* Расширенная информация */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: openSections[section.id] ? 1 : 0, 
                          height: openSections[section.id] ? "auto" : 0 
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-200 mt-4">
                          <div className="prose max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
                            {section.content}
                          </div>
                          
                          {/* Дополнительная информация */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="flex items-center gap-2 text-gray-600">
                              <FaClock className="text-[#023E8A]" />
                              <span className="font-medium">{t('universityRegulations.lastUpdated')}:</span>
                              <span>{section.lastUpdated}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <FaEye className="text-[#023E8A]" />
                              <span className="font-medium">{t('universityRegulations.views')}:</span>
                              <span>{section.views}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Боковая панель с действиями */}
                    <div className="flex flex-col gap-4 lg:w-48">
                      <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <div className="text-2xl font-bold text-[#023E8A] mb-1">
                          {section.views}
                        </div>
                        <div className="text-sm text-gray-600">
                          {t('universityRegulations.views')}
                        </div>
                      </div>

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
                        onClick={() => toggleSection(section.id)}
                        className="flex items-center justify-center gap-2 text-[#023E8A] font-semibold py-2 hover:bg-blue-50 rounded-xl transition-colors duration-300"
                      >
                        {openSections[section.id] ? t('universityRegulations.showLess') : t('universityRegulations.showMore')}
                        <motion.div
                          animate={{ rotate: openSections[section.id] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="text-sm" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>
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
            {t('universityRegulations.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('universityRegulations.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('universityRegulations.cta.downloadHandbook')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('universityRegulations.cta.contactSupport')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UniversityRegulationsPage;