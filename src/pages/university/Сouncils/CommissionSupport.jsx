import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaHandsHelping,
  FaHeart,
  FaUsers,
  FaShieldAlt,
  FaGraduationCap,
  FaHome,
  FaFileAlt,
  FaDownload,
  FaAward,
  FaUserFriends
} from "react-icons/fa";

const StudentSupportCommissionPage = () => {
  const { t } = useTranslation();

  // Статистика поддержки
  const stats = [
    { number: "1000+", label: t('studentSupportCommission.stats.students'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "24/7", label: t('studentSupportCommission.stats.support'), icon: <FaShieldAlt className="text-[#023E8A]" /> },
    { number: "50+", label: t('studentSupportCommission.stats.programs'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "100%", label: t('studentSupportCommission.stats.confidentiality'), icon: <FaHeart className="text-[#023E8A]" /> }
  ];

  // Основные положения
  const provisions = [
    t('studentSupportCommission.provisionsText1'),
    t('studentSupportCommission.provisionsText2'),
    t('studentSupportCommission.provisionsText3'),
    t('studentSupportCommission.provisionsText4'),
    t('studentSupportCommission.provisionsText5'),
    t('studentSupportCommission.provisionsText6'),
    t('studentSupportCommission.provisionsText7'),
    t('studentSupportCommission.provisionsText8')
  ];

  // Виды поддержки
  const supportTypes = [
    {
      icon: <FaGraduationCap className="text-white text-lg" />,
      title: t('studentSupportCommission.supportTypes.academic'),
      description: t('studentSupportCommission.supportTypes.academicDesc')
    },
    {
      icon: <FaHome className="text-white text-lg" />,
      title: t('studentSupportCommission.supportTypes.social'),
      description: t('studentSupportCommission.supportTypes.socialDesc')
    },
    {
      icon: <FaHeart className="text-white text-lg" />,
      title: t('studentSupportCommission.supportTypes.psychological'),
      description: t('studentSupportCommission.supportTypes.psychologicalDesc')
    },
    {
      icon: <FaUserFriends className="text-white text-lg" />,
      title: t('studentSupportCommission.supportTypes.legal'),
      description: t('studentSupportCommission.supportTypes.legalDesc')
    }
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

      <div className="relative z-10">
        {/* Герой секция с белым фоном */}
        <section className="relative py-20 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
            >
              <FaHandsHelping className="text-xl" />
              <span className="font-semibold">{t('studentSupportCommission.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {t('studentSupportCommission.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
          </motion.div>
        </section>

        {/* Основной контент */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
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

          {/* Виды поддержки */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('studentSupportCommission.supportTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('studentSupportCommission.supportSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Общие положения */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center">
                  <FaFileAlt className="text-white text-lg" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {t('studentSupportCommission.generalProvisions')}
                </h2>
              </div>

              <div className="space-y-6">
                {provisions.map((provision, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#023E8A] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {provision}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Ссылка на положение */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('studentSupportCommission.regulationsTitle')}
              </h3>
              <p className="text-lg mb-6 opacity-90">
                {t('studentSupportCommission.regulationsDescription')}
              </p>
              <motion.a
                href="https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-socialnoj-podderzhke-studentov.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaDownload className="mr-3" />
                {t('studentSupportCommission.regulationsLink')}
              </motion.a>
            </div>
          </motion.div>

          {/* Информационный блок */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t('studentSupportCommission.commitmentTitle')}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('studentSupportCommission.commitmentText')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudentSupportCommissionPage;