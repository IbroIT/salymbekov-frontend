import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { 
  FaFileAlt,
  FaBalanceScale,
  FaUniversity,
  FaUserTie,
  FaChalkboardTeacher,
  FaTrophy,
  FaDownload,
  FaArrowRight,
  FaSearch,
  FaExternalLinkAlt,
  FaFolderOpen,
  FaRegFilePdf
} from "react-icons/fa";

const LegalDocumentsPage = () => {
  const { t } = useTranslation();

  const documentCategories = [
    {
      title: t('legalDocuments.licenses.title'),
      icon: <FaFileAlt className="text-white" size={24} />,
      color: "bg-[#023E8A]",
      documents: [
        { title: t('legalDocuments.licenses.license1'), url: 'https://salymbekov.com/ru/licenzii/' },
        { title: t('legalDocuments.licenses.license2'), url: 'https://salymbekov.com/ru/logotip/' }
      ]
    },
    {
      title: t('legalDocuments.nationalActs.title'),
      icon: <FaBalanceScale className="text-white" size={24} />,
      color: "bg-[#0077B6]",
      documents: [
        { title: t('legalDocuments.nationalActs.act1'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-vuze-kr.pdf' },
        { title: t('legalDocuments.nationalActs.act2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-porjadke-zameshhenija-vakantnyh-dolzhnostej-moin-kr.pdf' },
        { title: t('legalDocuments.nationalActs.act3'), url: 'https://salymbekov.com/wp-content/uploads/2021/03/trudovoj-kodeks-kr.doc' }
      ]
    },
    {
      title: t('legalDocuments.universityActs.title'),
      icon: <FaUniversity className="text-white" size={24} />,
      color: "bg-[#0096C7]",
      documents: [
        { title: t('legalDocuments.universityActs.act1'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/ustav-salymbekov-universitet.pdf' },
        { title: t('legalDocuments.universityActs.act2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-ob-akademicheskoj-mobilnosti-1.pdf' },
        { title: t('legalDocuments.universityActs.act3'), url: 'https://salymbekov.com/ru/struktura-universiteta/' },
        { title: t('legalDocuments.universityActs.act4'), url: 'https://salymbekov.com/ru/logotip/' },
        { title: t('legalDocuments.universityActs.act5'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-o-finansovo-jekonomicheskom-departamente.pdf' },
        { title: t('legalDocuments.universityActs.act6'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-departamente-razvitija-i-kachestva-obrazovanija-1.pdf' },
        { title: t('legalDocuments.universityActs.act7'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-departamente-upravlenija-delami.pdf' },
        { title: t('legalDocuments.universityActs.act8'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-kafedre-1.pdf' },
        { title: t('legalDocuments.universityActs.act9'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-kuratorstve.pdf' },
        { title: t('legalDocuments.universityActs.act10'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-medicinskom-punkte-2.pdf' },
        { title: t('legalDocuments.universityActs.act11'), url: 'https://salymbekov.com/wp-content/uploads/2021/03/polozhenie-o-mezhdunarodnom-otdele.pdf' },
        { title: t('legalDocuments.universityActs.act12'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-ob-mrso.pdf' }
      ]
    },
    {
      title: t('legalDocuments.jobInstructions.title'),
      icon: <FaUserTie className="text-white" size={24} />,
      color: "bg-[#00B4D8]",
      documents: [
        { title: t('legalDocuments.jobInstructions.instruction1'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/di-rektora.pdf' },
        { title: t('legalDocuments.jobInstructions.instruction2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-prorektora-po-uchebno-vospitatelnoi-rabote.pdf' },
        { title: t('legalDocuments.jobInstructions.instruction3'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/dolzhnostnaja-instrukcija-prorektora-po-vneshnim-svjazjam-i-razvitiju.pdf' },
        { title: t('legalDocuments.jobInstructions.instruction4'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-prorektora-po-gos.jazyku-i-nauki.pdf' },
        { title: t('legalDocuments.jobInstructions.instruction5'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-prorektora-po-klinicheskoi-rabote.pdf' },
        { title: t('legalDocuments.jobInstructions.instruction6'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-rukovoditelja-departamenta-razvitija-i-kachestva-obrazovanija-2.pdf' },
        { title: t('legalDocuments.jobInstructions.instruction7'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-specialista-po-msk-departamenta-razvitija-i-kachestva-obrazovanija.pdf' },
        { title: t('legalDocuments.jobInstructions.instruction8'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-dekana-fakulteta.pdf' },
        { title: t('legalDocuments.jobInstructions.instruction9'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-docenta-kafedry.pdf' },
        { title: t('legalDocuments.jobInstructions.instruction10'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-zav.-umo-1.pdf' },
        { title: t('legalDocuments.jobInstructions.instruction11'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-zavedujushhego-kafedroj.pdf' },
        { title: t('legalDocuments.jobInstructions.instruction12'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-specialista-centra-razvitija-karery-uchrezhdenija-su.pdf' }
      ]
    },
    {
      title: t('legalDocuments.teachers.title'),
      icon: <FaChalkboardTeacher className="text-white" size={24} />,
      color: "bg-[#023E8A]",
      documents: [
        { title: t('legalDocuments.teachers.teacher1'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/fond-ocenochnyh-sredstv.pdf' },
        { title: t('legalDocuments.teachers.teacher2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/fond-ocenochnyh-soedstv-2.pdf' }
      ]
    },
    {
      title: t('legalDocuments.competition.title'),
      icon: <FaTrophy className="text-white" size={24} />,
      color: "bg-[#0077B6]",
      documents: [
        { title: t('legalDocuments.competition.competition1'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/whatsapp-image-2021-04-23-at-15.52.31-3.pdf' },
        { title: t('legalDocuments.competition.competition2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/whatsapp-image-2021-04-23-at-16.30.51.pdf' }
      ]
    }
  ];

  const stats = [
    { number: "20+", label: t('legalDocuments.stats.documents'), icon: <FaFileAlt className="text-[#023E8A]" /> },
    { number: "6", label: t('legalDocuments.stats.categories'), icon: <FaFolderOpen className="text-[#023E8A]" /> },
    { number: "100%", label: t('legalDocuments.stats.compliance'), icon: <FaBalanceScale className="text-[#023E8A]" /> },
    { number: "24/7", label: t('legalDocuments.stats.access'), icon: <FaDownload className="text-[#023E8A]" /> }
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
            <FaFileAlt className="text-xl" />
            <span className="font-semibold">{t('legalDocuments.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('legalDocuments.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('legalDocuments.subtitle')}
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

        {/* Поиск документов */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex-1 w-full">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('legalDocuments.search.placeholder')}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#023E8A] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Категории документов */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="grid gap-8">
            {documentCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Заголовок категории */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center`}>
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {category.title}
                      </h2>
                      <p className="text-gray-600 mt-1">
                        {category.documents.length} {t('legalDocuments.documentsCount')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Список документов */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.documents.map((doc, docIndex) => (
                      <motion.a
                        key={docIndex}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ duration: 0.3, delay: docIndex * 0.05 }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <FaRegFilePdf className="text-red-500 text-xl flex-shrink-0" />
                          <span className="text-gray-700 font-medium group-hover:text-[#023E8A] transition-colors duration-300">
                            {doc.title}
                          </span>
                        </div>
                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-[#023E8A] transition-colors duration-300" />
                      </motion.a>
                    ))}
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('legalDocuments.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('legalDocuments.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaDownload />
              {t('legalDocuments.cta.downloadAll')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('legalDocuments.cta.contact')}
              <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalDocumentsPage;