// components/KRActs.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaFileAlt,
  FaGavel,
  FaBalanceScale,
  FaDownload,
  FaExternalLinkAlt,
  FaBook,
  FaRegFilePdf,
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const KRActs = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: t('lawsRegulations.categories.all'), count: 16 },
    { id: "laws", label: t('lawsRegulations.categories.laws'), count: 3 },
    { id: "regulations", label: t('lawsRegulations.categories.regulations'), count: 13 }
  ];

  const laws = [
    {
      id: 1,
      title: t('lawsRegulations.laws.law1'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/zakon-kyrgyzskoj-respubliki-ob-obrazovanii.pdf',
      category: "laws",
      type: "Закон",
      size: "2.4 MB",
      pages: 45,
      featured: true
    },
    {
      id: 2,
      title: t('lawsRegulations.laws.law2'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/zakon_kr_ob_ohrane_zdorovya_grajdan_v_kyrgyzskoy_respublike_ot_9_yanvarya_2005_goda_6.pdf',
      category: "laws",
      type: "Закон",
      size: "1.8 MB",
      pages: 32,
      featured: false
    },
    {
      id: 3,
      title: t('lawsRegulations.laws.law3'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/zakon_kr_ob_organizaciyah_zdravoohraneniya_v_kyrgyzskoy_respublike__ot_13_avgusta_2004_goda_116.pdf',
      category: "laws",
      type: "Закон",
      size: "2.1 MB",
      pages: 38,
      featured: true
    }
  ];

  const regulations = [
    {
      id: 4,
      title: t('lawsRegulations.regulations.regulation1'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/polozhenie-o-porjadke-prisvoenija-uchenyh-zvanij-utverzhdeno-postanovleniem-pravitelstva-kyrgyzskoj-respubliki-ot-22-avgusta-2012-goda-57.pdf',
      category: "regulations",
      type: "Постановление",
      size: "1.2 MB",
      pages: 18,
      featured: true
    },
    {
      id: 5,
      title: t('lawsRegulations.regulations.regulation2'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/ob-uchenom-sovete-vysshego-uchebnogo-zavedenija-kyrgyzskoj-respubliki.pdf',
      category: "regulations",
      type: "Положение",
      size: "0.9 MB",
      pages: 12,
      featured: false
    },
    {
      id: 6,
      title: t('lawsRegulations.regulations.regulation3'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/ob-utverzhdenii-normativnyh-pravovyh-aktov-regulirujushhih-dejatelnost-obrazovatelnyh-organizacij-vysshego-i-srednego-professionalnogo-obrazovanija-kyrgyzskoj-respubliki.pdf',
      category: "regulations",
      type: "Постановление",
      size: "1.5 MB",
      pages: 22,
      featured: false
    },
    {
      id: 7,
      title: t('lawsRegulations.regulations.regulation4'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-provedenii-tekushhego-kontrolja-i-promezhutochnoj-attestacii-studentov-vysshih-uchebnyh-zavedenij-kyrgyzskoj-respubliki.pdf',
      category: "regulations",
      type: "Положение",
      size: "1.1 MB",
      pages: 15,
      featured: false
    },
    {
      id: 8,
      title: t('lawsRegulations.regulations.regulation5'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-kafedre-vysshego-uchebnogo-zavedenija-kyrgyzskoj-respubliki.pdf',
      category: "regulations",
      type: "Положение",
      size: "0.8 MB",
      pages: 10,
      featured: false
    },
    {
      id: 9,
      title: t('lawsRegulations.regulations.regulation6'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-porjadke-perevoda-otchislenija-i-vosstanovlenija-studentov-vysshih-uchebnyh-zavedenij-kyrgyzskoj-respubliki.pdf',
      category: "regulations",
      type: "Положение",
      size: "1.3 MB",
      pages: 16,
      featured: true
    },
    {
      id: 10,
      title: t('lawsRegulations.regulations.regulation7'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-porjadke-zameshhenija-dolzhnostej-professorsko-prepodavatelskogo-sostava-vysshih-uchebnyh-zavedenij-kyrgyzskoj-respubliki.pdf',
      category: "regulations",
      type: "Положение",
      size: "1.0 MB",
      pages: 14,
      featured: false
    },
    {
      id: 11,
      title: t('lawsRegulations.regulations.regulation8'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/postanovlenie-pravitelstva-kr-517-instrukcija-po-deloproizvodstvu-v-kr-ot-23.07.2012g..pdf',
      category: "regulations",
      type: "Постановление",
      size: "2.2 MB",
      pages: 28,
      featured: true
    },
    {
      id: 12,
      title: t('lawsRegulations.regulations.regulation9'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/postanovlenie-pravitelstva-kr-o-voprosah-registracii-ig-i-lic-bez-grazhdanstva-na-territorii-kyrgyzskoj-respubliki-ot-19.12.2016-goda-68.pdf',
      category: "regulations",
      type: "Постановление",
      size: "1.7 MB",
      pages: 24,
      featured: false
    },
    {
      id: 13,
      title: t('lawsRegulations.regulations.regulation10'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/ob-utverzhdenii-normativnyh-pravovyh-aktov-regulirujushhih-dejatelnost-obrazovatelnyh-organizacij-vysshego-i-srednego-professionalnogo-obrazovanija-kyrgyzskoj-respubliki.pdf',
      category: "regulations",
      type: "Постановление",
      size: "1.9 MB",
      pages: 26,
      featured: false
    },
    {
      id: 14,
      title: t('lawsRegulations.regulations.regulation11'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/ob-itogovoj-gosudarstvennoj-attestacii-vypusknikov-vysshih-uchebnyh-zavedenij-kyrgyzskoj-respubliki.pdf',
      category: "regulations",
      type: "Положение",
      size: "1.4 MB",
      pages: 19,
      featured: false
    },
    {
      id: 15,
      title: t('lawsRegulations.regulations.regulation12'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-fakultete-vysshego-uchebnogo-zavedenija-kyrgyzskoj-respubliki.pdf',
      category: "regulations",
      type: "Положение",
      size: "1.0 MB",
      pages: 13,
      featured: false
    },
    {
      id: 16,
      title: t('lawsRegulations.regulations.regulation13'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-strukturnom-podrazdelenii-vysshego-i-srednego-professionalnogo-uchebnogo-zavedenija-realizujushhem-programmy-dopolnitelnogo-professionalnogo-obrazovanija.pdf',
      category: "regulations",
      type: "Положение",
      size: "1.2 MB",
      pages: 17,
      featured: false
    }
  ];

  const allDocuments = [...laws, ...regulations];

  const filteredDocuments = allDocuments.filter(doc => 
    activeCategory === "all" || doc.category === activeCategory
  );

  const stats = [
    { number: "16", label: t('lawsRegulations.stats.documents'), icon: <FaFileAlt className="text-[#023E8A]" /> },
    { number: "3", label: t('lawsRegulations.stats.laws'), icon: <FaGavel className="text-[#023E8A]" /> },
    { number: "13", label: t('lawsRegulations.stats.regulations'), icon: <FaBalanceScale className="text-[#023E8A]" /> },
    { number: "2023", label: t('lawsRegulations.stats.updated'), icon: <FaBook className="text-[#023E8A]" /> }
  ];

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
            <FaGavel className="text-xl" />
            <span className="font-semibold">{t('lawsRegulations.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('lawsRegulations.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('lawsRegulations.subtitle')}
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

        {/* Фильтры */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('lawsRegulations.categories.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('lawsRegulations.categories.description')}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Список документов */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
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
                            <FaBook className="text-xs" />
                            {t('lawsRegulations.featured')}
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
                          <FaUniversity className="text-[#023E8A]" />
                          <span>{document.category === 'laws' ? t('lawsRegulations.categories.laws') : t('lawsRegulations.categories.regulations')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaUserGraduate className="text-[#023E8A]" />
                          <span>Официальный</span>
                        </div>
                      </div>
                    </div>

                    {/* Боковая панель с действиями */}
                    <div className="flex flex-col gap-4 lg:w-48">
                      <motion.a
                        href={document.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaExternalLinkAlt />
                        {t('lawsRegulations.view')}
                      </motion.a>

                      <motion.a
                        href={document.url}
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-100 text-gray-600 py-3 px-6 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaDownload />
                        {t('lawsRegulations.download')}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Информационная секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('lawsRegulations.info.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('lawsRegulations.info.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <FaChalkboardTeacher className="text-2xl mt-1" />
              <div>
                <h4 className="font-bold mb-2">{t('lawsRegulations.info.education.title')}</h4>
                <p className="opacity-90">{t('lawsRegulations.info.education.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaUniversity className="text-2xl mt-1" />
              <div>
                <h4 className="font-bold mb-2">{t('lawsRegulations.info.healthcare.title')}</h4>
                <p className="opacity-90">{t('lawsRegulations.info.healthcare.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaUserGraduate className="text-2xl mt-1" />
              <div>
                <h4 className="font-bold mb-2">{t('lawsRegulations.info.quality.title')}</h4>
                <p className="opacity-90">{t('lawsRegulations.info.quality.description')}</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default KRActs;