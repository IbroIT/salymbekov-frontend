// components/LicensesPage.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaFileAlt,
  FaBalanceScale,
  FaRegBuilding,
  FaCertificate,
  FaMapMarkerAlt
} from "react-icons/fa";

const LicensesPage = () => {
  const { t } = useTranslation();

  // Данные лицензий и документов
  const licenses = [
    {
      id: 1,
      title: t('licenses.registrationCertificate'),
      type: t('licenses.certificate'),
      number: "№123456789",
      issueDate: t('licenses.issueDate'),
      expiryDate: t('licenses.expiryDate'),
      status: "active",
      description: t('licenses.certificateDescription'),
      icon: <FaCertificate className="text-white" size={24} />
    },
    {
      id: 2,
      title: t('licenses.taxCertificate'),
      type: t('licenses.official'),
      number: "№987654321",
      issueDate: t('licenses.issueDate'),
      expiryDate: t('licenses.permanent'),
      status: "active",
      description: t('licenses.taxDescription'),
      icon: <FaBalanceScale className="text-white" size={24} />
    },
    {
      id: 3,
      title: t('licenses.businessLicense'),
      type: t('licenses.commercial'),
      number: "№456789123",
      issueDate: t('licenses.issueDate'),
      expiryDate: t('licenses.expiryDate'),
      status: "active",
      description: t('licenses.businessDescription'),
      icon: <FaRegBuilding className="text-white" size={24} />
    }
  ];

  // Статистика
  const stats = [
    { number: "15+", label: t('licenses.stats.yearsExperience'), icon: <FaCertificate className="text-[#023E8A]" /> },
    { number: "50+", label: t('licenses.stats.projectsCompleted'), icon: <FaBalanceScale className="text-[#023E8A]" /> },
    { number: "100%", label: t('licenses.stats.legalCompliance'), icon: <FaRegBuilding className="text-[#023E8A]" /> },
    { number: "24/7", label: t('licenses.stats.support'), icon: <FaFileAlt className="text-[#023E8A]" /> }
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
            <span className="font-semibold">{t('licenses.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('licenses.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('licenses.subtitle')}
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
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('licenses.legalTitle')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Юридическая информация */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {t('licenses.legalAddressTitle')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t('licenses.legalAddress')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaRegBuilding className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {t('licenses.ownershipFormTitle')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t('licenses.ownershipForm')}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Дополнительная информация */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaBalanceScale className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {t('licenses.legalFormTitle')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t('licenses.legalForm')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaCertificate className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {t('licenses.registrationTitle')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t('licenses.registrationCertificate')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Список лицензий */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('licenses.documentsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('licenses.documentsDescription')}
            </p>
          </div>

          <div className="grid gap-6">
            {licenses.map((license, index) => (
              <motion.div
                key={license.id}
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
                        <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {license.status === 'active' ? t('licenses.active') : t('licenses.expired')}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-[#023E8A] px-3 py-1 rounded-full text-sm font-semibold">
                          {license.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {license.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {license.description}
                      </p>

                      {/* Детали лицензии */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaFileAlt className="text-[#023E8A]" />
                          <span className="text-sm">{license.number}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaCertificate className="text-[#023E8A]" />
                          <span className="text-sm">{license.issueDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaBalanceScale className="text-[#023E8A]" />
                          <span className="text-sm">{license.expiryDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Боковая панель с иконкой */}
                    <div className="flex flex-col gap-4 lg:w-48">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                        {license.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Изображение документа */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {t('licenses.certificatePreview')}
            </h3>
            <div className="max-w-4xl mx-auto">
              <motion.img 
                src="https://salymbekov.com/wp-content/uploads/2021/04/img4-rotated.jpg" 
                alt={t('licenses.imageAlt')}
                className="w-full h-auto rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LicensesPage;