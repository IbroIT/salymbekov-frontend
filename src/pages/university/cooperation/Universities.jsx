import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaUniversity,
  FaGlobeAmericas,
  FaHandshake,
  FaDownload,
  FaExternalLinkAlt,
  FaRegFilePdf,
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaGraduationCap,
  FaAward,
  FaBook
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const UniversityCooperationPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: t('universityCooperation.categories.all'), count: 18 },
    { id: "asia", label: t('universityCooperation.categories.asia'), count: 8 },
    { id: "europe", label: t('universityCooperation.categories.europe'), count: 5 },
    { id: "cis", label: t('universityCooperation.categories.cis'), count: 5 }
  ];

  const memorandums = [
    {
      id: 1,
      title: t('universityCooperation.memorandums.memorandum1'),
      url: 'https://salymbekov.com/wp-content/uploads/2021/04/moi-bn-itc-and-salymbekov-1.pdf',
      country: "Кыргызстан",
      region: "asia",
      type: "Меморандум",
      year: "2021",
      university: "МОИ БН ИТЦ",
      featured: true,
      downloads: 189
    },
    {
      id: 2,
      title: t('universityCooperation.memorandums.memorandum2'),
      url: 'https://salymbekov.com/wp-content/uploads/2021/04/inha.pdf',
      country: "Узбекистан",
      region: "asia",
      type: "Меморандум",
      year: "2021",
      university: "INHA University",
      featured: true,
      downloads: 167
    },
    {
      id: 3,
      title: t('universityCooperation.memorandums.memorandum3'),
      url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-o-sotrudnichestve.pdf',
      country: "Кыргызстан",
      region: "asia",
      type: "Договор",
      year: "2021",
      university: "Местный партнер",
      featured: false,
      downloads: 145
    },
    {
      id: 4,
      title: t('universityCooperation.memorandums.memorandum4'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/institutom-biologii-nan-kr.pdf',
      country: "Кыргызстан",
      region: "asia",
      type: "Соглашение",
      year: "2023",
      university: "Институт биологии НАН КР",
      featured: true,
      downloads: 132
    },
    {
      id: 5,
      title: t('universityCooperation.memorandums.memorandum5'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/urgenchskij-filial-tashkentskoj-medicinskoj-akademija.pdf',
      country: "Узбекистан",
      region: "asia",
      type: "Меморандум",
      year: "2023",
      university: "Ургенчский филиал ТМА",
      featured: false,
      downloads: 98
    },
    {
      id: 6,
      title: t('universityCooperation.memorandums.memorandum6'),
      url: 'https://www.instagram.com/p/COCO6E5qrCH/',
      country: "Международный",
      region: "europe",
      type: "Соглашение",
      year: "2021",
      university: "Международный партнер",
      featured: false,
      downloads: 76
    },
    {
      id: 7,
      title: t('universityCooperation.memorandums.memorandum7'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/international-contemporary-medical-academy-of-science.pdf',
      country: "Международный",
      region: "europe",
      type: "Меморандум",
      year: "2023",
      university: "International Contemporary Medical Academy",
      featured: true,
      downloads: 154
    },
    {
      id: 8,
      title: t('universityCooperation.memorandums.memorandum8'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/zhalal-abadskij-gosudarstvennyj-universitet.pdf',
      country: "Кыргызстан",
      region: "asia",
      type: "Соглашение",
      year: "2023",
      university: "Жалал-Абадский ГУ",
      featured: false,
      downloads: 87
    },
    {
      id: 9,
      title: t('universityCooperation.memorandums.memorandum9'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/evropejskij-medicinskij-universitet.pdf',
      country: "Европа",
      region: "europe",
      type: "Меморандум",
      year: "2023",
      university: "Европейский медицинский университет",
      featured: true,
      downloads: 143
    },
    {
      id: 10,
      title: t('universityCooperation.memorandums.memorandum10'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/trehstornnij-memorandum-s-moin-kr.pdf',
      country: "Кыргызстан",
      region: "asia",
      type: "Трехсторонний меморандум",
      year: "2023",
      university: "МОИН КР",
      featured: true,
      downloads: 176
    },
    {
      id: 11,
      title: t('universityCooperation.memorandums.memorandum11'),
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/memorandum-s-lincoln-college-malasya.pdf',
      country: "Малайзия",
      region: "asia",
      type: "Меморандум",
      year: "2022",
      university: "Lincoln College Malaysia",
      featured: false,
      downloads: 121
    },
    {
      id: 12,
      title: t('universityCooperation.memorandums.memorandum12'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/kfu.pdf',
      country: "Россия",
      region: "cis",
      type: "Соглашение",
      year: "2023",
      university: "Казанский федеральный университет",
      featured: true,
      downloads: 198
    },
    {
      id: 13,
      title: t('universityCooperation.memorandums.memorandum13'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/kazanskij-kooperativnyj-institut.pdf',
      country: "Россия",
      region: "cis",
      type: "Меморандум",
      year: "2023",
      university: "Казанский кооперативный институт",
      featured: false,
      downloads: 94
    },
    {
      id: 14,
      title: t('universityCooperation.memorandums.memorandum14'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/kgmipipk-im.-s.-b.-danijarrva.pdf',
      country: "Кыргызстан",
      region: "asia",
      type: "Соглашение",
      year: "2023",
      university: "КГМИППК им. С.Б. Даниярова",
      featured: false,
      downloads: 89
    },
    {
      id: 15,
      title: t('universityCooperation.memorandums.memorandum15'),
      url: 'https://salymbekov.com/wp-content/uploads/2021/04/istinye.pdf',
      country: "Турция",
      region: "europe",
      type: "Меморандум",
      year: "2021",
      university: "Istinye University",
      featured: true,
      downloads: 134
    },
    {
      id: 16,
      title: t('universityCooperation.memorandums.memorandum16'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/itm-university-gwalior-india.pdf',
      country: "Индия",
      region: "asia",
      type: "Меморандум",
      year: "2023",
      university: "ITM University Gwalior",
      featured: false,
      downloads: 112
    },
    {
      id: 17,
      title: t('universityCooperation.memorandums.memorandum17'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/universitet-akfa.pdf',
      country: "Турция",
      region: "europe",
      type: "Соглашение",
      year: "2023",
      university: "Университет AKFA",
      featured: true,
      downloads: 156
    },
    {
      id: 18,
      title: t('universityCooperation.memorandums.memorandum18'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/universitet-adam.pdf',
      country: "Турция",
      region: "europe",
      type: "Меморандум",
      year: "2023",
      university: "Университет Adam",
      featured: false,
      downloads: 103
    }
  ];

  const stats = [
    { number: "18", label: t('universityCooperation.stats.partners'), icon: <FaUniversity className="text-[#023E8A]" /> },
    { number: "8", label: t('universityCooperation.stats.countries'), icon: <FaGlobeAmericas className="text-[#023E8A]" /> },
    { number: "2023", label: t('universityCooperation.stats.active'), icon: <FaCalendarAlt className="text-[#023E8A]" /> },
    { number: "1500+", label: t('universityCooperation.stats.students'), icon: <FaUsers className="text-[#023E8A]" /> }
  ];

  const benefits = [
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('universityCooperation.benefits.exchange.title'),
      description: t('universityCooperation.benefits.exchange.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaBook className="text-white" size={24} />,
      title: t('universityCooperation.benefits.research.title'),
      description: t('universityCooperation.benefits.research.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('universityCooperation.benefits.quality.title'),
      description: t('universityCooperation.benefits.quality.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHandshake className="text-white" size={24} />,
      title: t('universityCooperation.benefits.network.title'),
      description: t('universityCooperation.benefits.network.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const filteredMemorandums = memorandums.filter(memorandum => {
    const matchesFilter = activeFilter === "all" || memorandum.region === activeFilter;
    const matchesSearch = memorandum.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         memorandum.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         memorandum.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
            <FaHandshake className="text-xl" />
            <span className="font-semibold">{t('universityCooperation.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('universityCooperation.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('universityCooperation.subtitle')}
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

        {/* Введение */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 mb-16"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t('universityCooperation.mission.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {t('universityCooperation.intro')}
            </p>
          </div>
        </motion.div>

        {/* Преимущества сотрудничества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('universityCooperation.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('universityCooperation.benefits.subtitle')}
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

        {/* Поиск и фильтры */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Поиск */}
            <div className="flex-1 w-full">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('universityCooperation.search.placeholder')}
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

        {/* Меморандумы сотрудничества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('universityCooperation.memorandums.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('universityCooperation.memorandums.subtitle')}
            </p>
          </div>

          <div className="grid gap-6">
            {filteredMemorandums.map((memorandum, index) => (
              <motion.div
                key={memorandum.id}
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
                        {memorandum.featured && (
                          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            <FaAward className="text-xs" />
                            {t('universityCooperation.featured')}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-[#023E8A] px-3 py-1 rounded-full text-sm font-semibold">
                          {memorandum.type}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          <FaRegFilePdf className="text-xs" />
                          PDF
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {memorandum.title}
                      </h3>

                      <p className="text-lg text-gray-600 mb-4 font-semibold">
                        {memorandum.university}
                      </p>

                      {/* Детали соглашения */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaMapMarkerAlt className="text-[#023E8A]" />
                          <span>{memorandum.country}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaCalendarAlt className="text-[#023E8A]" />
                          <span>{memorandum.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaUniversity className="text-[#023E8A]" />
                          <span>{memorandum.region === 'asia' ? 'Азия' : memorandum.region === 'europe' ? 'Европа' : 'СНГ'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaDownload className="text-[#023E8A]" />
                          <span>{memorandum.downloads} скачиваний</span>
                        </div>
                      </div>
                    </div>

                    {/* Боковая панель с действиями */}
                    <div className="flex flex-col gap-4 lg:w-48">
                      <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <div className="text-2xl font-bold text-[#023E8A] mb-1">
                          {memorandum.downloads}
                        </div>
                        <div className="text-sm text-gray-600">
                          {t('universityCooperation.downloads')}
                        </div>
                      </div>

                      <motion.a
                        href={memorandum.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaExternalLinkAlt />
                        {t('universityCooperation.view')}
                      </motion.a>

                      <motion.a
                        href={memorandum.url}
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-100 text-gray-600 py-3 px-6 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaDownload />
                        {t('universityCooperation.download')}
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('universityCooperation.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('universityCooperation.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaHandshake />
              {t('universityCooperation.cta.partner')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('universityCooperation.cta.contact')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UniversityCooperationPage;