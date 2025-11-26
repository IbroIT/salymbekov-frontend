// components/ActsPage.jsx
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { 
  FaFilePdf,
  FaDownload,
  FaExternalLinkAlt,
  FaFileContract,
  FaClipboardList,
  FaRegFileAlt
} from "react-icons/fa";

const ActsPage = () => {
  const { t } = useTranslation();

  const actsList = [
    { text: t('acts.act1'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-sport-kompleks-2021.pdf" },
    { text: t('acts.act2'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-sport-kompleks-2021.pdf" },
    { text: t('acts.act3'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-lazmed-2021.pdf" },
    { text: t('acts.act4'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-stolovoj-universiteta.pdf" },
    { text: t('acts.act5'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-lazmed-2021.pdf" },
    { text: t('acts.act6'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-lazmed-2021.pdf" }
  ];

  // Статистика
  const stats = [
    { number: "6+", label: t('acts.stats.documents'), icon: <FaFileContract className="text-[#023E8A]" /> },
    { number: "100%", label: t('acts.stats.compliance'), icon: <FaClipboardList className="text-[#023E8A]" /> },
    { number: "2021", label: t('acts.stats.currentYear'), icon: <FaRegFileAlt className="text-[#023E8A]" /> },
    { number: "PDF", label: t('acts.stats.format'), icon: <FaFilePdf className="text-[#023E8A]" /> }
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
            <FaFileContract className="text-xl" />
            <span className="font-semibold">{t('acts.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('acts.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('acts.subtitle')}
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

        {/* Основной контент */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('acts.mainTitle')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full mb-6"></div>
            </div>

            {/* Описание */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="prose prose-lg max-w-none text-gray-700 mb-12 text-center"
            >
              <p className="text-xl leading-relaxed">
                {t('acts.description')}
              </p>
            </motion.div>

            {/* Список актов */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                {t('acts.documentsList')}
              </h3>

              <div className="grid gap-4">
                {actsList.map((act, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center flex-shrink-0">
                          <FaFilePdf className="text-white text-lg" />
                        </div>
                        <span className="text-lg text-gray-800 font-medium">
                          {act.text}
                        </span>
                      </div>
                      
                      <motion.a
                        href={act.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        {t('acts.viewDocument')}
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Информационный блок */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-center text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('acts.infoTitle')}
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              {t('acts.infoDescription')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActsPage;