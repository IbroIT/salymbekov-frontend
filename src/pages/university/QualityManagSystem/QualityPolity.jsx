import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaFileAlt,
  FaDownload,
  FaExternalLinkAlt,
  FaRegFilePdf,
  FaChartLine,
  FaUsers,
  FaAward,
  FaSearch,
  FaFilter,
  FaCog,
  FaGraduationCap,
  FaUniversity,
  FaEye,
  FaCalendarAlt,
  FaBook,
  FaBullseye
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const QualityPolicyPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: t('qualityPolicy.categories.all'), count: 12 },
    { id: "regulations", label: t('qualityPolicy.categories.regulations'), count: 8 },
    { id: "manuals", label: t('qualityPolicy.categories.manuals'), count: 2 },
    { id: "schedules", label: t('qualityPolicy.categories.schedules'), count: 2 }
  ];

  const qualityDocuments = [
    {
      id: 1,
      title: t('qualityPolicy.documents.document1'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-smk-su_new.pdf',
      category: "regulations",
      type: "Положение",
      size: "1.8 MB",
      pages: 24,
      featured: true,
      downloads: 156
    },
    {
      id: 2,
      title: t('qualityPolicy.documents.document2'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/rukovodstvo-po-kachestvu-obrazovanija-2-versija.pdf',
      category: "manuals",
      type: "Руководство",
      size: "2.3 MB",
      pages: 32,
      featured: true,
      downloads: 142
    },
    {
      id: 3,
      title: t('qualityPolicy.documents.document3'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/karta-processov-smk1.pdf',
      category: "regulations",
      type: "Схема",
      size: "1.2 MB",
      pages: 8,
      featured: false,
      downloads: 98
    },
    {
      id: 4,
      title: t('qualityPolicy.documents.document4'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/reestr-processov-smk.pdf',
      category: "regulations",
      type: "Реестр",
      size: "0.9 MB",
      pages: 6,
      featured: false,
      downloads: 87
    },
    {
      id: 5,
      title: t('qualityPolicy.documents.document5'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/funkcionalnaja-matrica-processov-su.pdf',
      category: "regulations",
      type: "Матрица",
      size: "1.1 MB",
      pages: 12,
      featured: false,
      downloads: 76
    },
    {
      id: 6,
      title: t('qualityPolicy.documents.document6'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/matrica-raspredelenija-otvetstvennosti-su.pdf',
      category: "regulations",
      type: "Матрица",
      size: "1.4 MB",
      pages: 15,
      featured: false,
      downloads: 112
    },
    {
      id: 7,
      title: t('qualityPolicy.documents.document7'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/grafik-dokumentooborota-su.pdf',
      category: "schedules",
      type: "График",
      size: "0.8 MB",
      pages: 5,
      featured: false,
      downloads: 65
    },
    {
      id: 8,
      title: t('qualityPolicy.documents.document8'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-o-monitoringe-udovletvorennosti-stejkholderov.pdf',
      category: "regulations",
      type: "Положение",
      size: "1.6 MB",
      pages: 18,
      featured: true,
      downloads: 134
    },
    {
      id: 9,
      title: t('qualityPolicy.documents.document9'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-o-dokumentooborote.pdf',
      category: "regulations",
      type: "Положение",
      size: "1.9 MB",
      pages: 22,
      featured: false,
      downloads: 89
    },
    {
      id: 10,
      title: t('qualityPolicy.documents.document10'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/instrukcija-po-deloproizvodstvu.pdf',
      category: "manuals",
      type: "Инструкция",
      size: "2.1 MB",
      pages: 28,
      featured: false,
      downloads: 121
    },
    {
      id: 11,
      title: t('qualityPolicy.documents.document11'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-o-vzaimodejstvii-sp-so-stejkholderami.pdf',
      category: "regulations",
      type: "Положение",
      size: "1.7 MB",
      pages: 20,
      featured: false,
      downloads: 78
    },
    {
      id: 12,
      title: t('qualityPolicy.documents.document12'),
      url: 'https://salymbekov.com/wp-content/uploads/2025/11/akademicheskij_kalendar_na_2025_2026_uchebnyj_god_.pdf',
      category: "schedules",
      type: "Календарь",
      size: "1.3 MB",
      pages: 10,
      featured: true,
      downloads: 245
    }
  ];

  const stats = [
    { number: "12", label: t('qualityPolicy.stats.documents'), icon: <FaFileAlt className="text-[#023E8A]" /> },
    { number: "8", label: t('qualityPolicy.stats.regulations'), icon: <FaCog className="text-[#023E8A]" /> },
    { number: "2", label: t('qualityPolicy.stats.manuals'), icon: <FaBook className="text-[#023E8A]" /> },
    { number: "2022", label: t('qualityPolicy.stats.updated'), icon: <FaCalendarAlt className="text-[#023E8A]" /> }
  ];

  const principles = [
    {
      icon: <FaBullseye className="text-white" size={24} />,
      title: t('qualityPolicy.principles.quality.title'),
      description: t('qualityPolicy.principles.quality.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('qualityPolicy.principles.stakeholders.title'),
      description: t('qualityPolicy.principles.stakeholders.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaChartLine className="text-white" size={24} />,
      title: t('qualityPolicy.principles.improvement.title'),
      description: t('qualityPolicy.principles.improvement.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('qualityPolicy.principles.excellence.title'),
      description: t('qualityPolicy.principles.excellence.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const filteredDocuments = qualityDocuments.filter(document => {
    const matchesFilter = activeFilter === "all" || document.category === activeFilter;
    const matchesSearch = document.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         document.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-6 text-lg leading-relaxed">
            <strong className="text-[#023E8A]">{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
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
            <FaAward className="text-xl" />
            <span className="font-semibold">{t('qualityPolicy.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('qualityPolicy.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('qualityPolicy.subtitle')}
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

        {/* Политика качества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t('qualityPolicy.mission.title')}
            </h2>
            <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
              {formatTextWithBold(t('qualityPolicy.mainText'))}
            </div>
          </div>

          {/* Принципы качества */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${principle.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
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

        {/* Поиск и фильтры */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Поиск */}
            <div className="flex-1 w-full">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('qualityPolicy.search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#023E8A] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Фильтры */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FaFilter className="text-sm" />
                  {category.label}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Документы системы качества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('qualityPolicy.documents.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('qualityPolicy.documents.subtitle')}
            </p>
          </div>

          <div className="grid gap-6">
            {filteredDocuments.map((document, index) => (
              <motion.div
                key={document.id}
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
                        {document.featured && (
                          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            <FaAward className="text-xs" />
                            {t('qualityPolicy.featured')}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-[#023E8A] px-3 py-1 rounded-full text-sm font-semibold">
                          {document.type}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          <FaRegFilePdf className="text-xs" />
                          PDF
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {document.title}
                      </h3>

                      {/* Детали документа */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaFileAlt className="text-[#023E8A]" />
                          <span>{document.size}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaBook className="text-[#023E8A]" />
                          <span>{document.pages} стр.</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaDownload className="text-[#023E8A]" />
                          <span>{document.downloads} скачиваний</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaUniversity className="text-[#023E8A]" />
                          <span>СМК</span>
                        </div>
                      </div>
                    </div>

                    {/* Боковая панель с действиями */}
                    <div className="flex flex-col gap-4 lg:w-48">
                      <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <div className="text-2xl font-bold text-[#023E8A] mb-1">
                          {document.downloads}
                        </div>
                        <div className="text-sm text-gray-600">
                          {t('qualityPolicy.downloads')}
                        </div>
                      </div>

                      <motion.a
                        href={document.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaExternalLinkAlt />
                        {t('qualityPolicy.view')}
                      </motion.a>

                      <motion.a
                        href={document.url}
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-100 text-gray-600 py-3 px-6 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaDownload />
                        {t('qualityPolicy.download')}
                      </motion.a>
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
            {t('qualityPolicy.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('qualityPolicy.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaGraduationCap />
              {t('qualityPolicy.cta.learnMore')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('qualityPolicy.cta.contact')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QualityPolicyPage;