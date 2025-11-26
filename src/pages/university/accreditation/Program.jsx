import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { 
  FaAward,
  FaGraduationCap,
  FaBook,
  FaCheckCircle,
  FaEye,
  FaTimes,
  FaDownload,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaUserGraduate,
  FaGlobeAmericas
} from "react-icons/fa";

const ProgramAccreditation = () => {
  const { t } = useTranslation();
  const [showCertificate, setShowCertificate] = useState(false);

  const handleShowCertificate = () => {
    setShowCertificate(true);
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
  };

  const stats = [
    { number: "15+", label: t('programAccreditation.stats.programs'), icon: <FaBook className="text-[#023E8A]" /> },
    { number: "5000+", label: t('programAccreditation.stats.graduates'), icon: <FaUserGraduate className="text-[#023E8A]" /> },
    { number: "10+", label: t('programAccreditation.stats.years'), icon: <FaAward className="text-[#023E8A]" /> },
    { number: "20+", label: t('programAccreditation.stats.countries'), icon: <FaGlobeAmericas className="text-[#023E8A]" /> }
  ];

  const benefits = [
    {
      icon: <FaShieldAlt className="text-white" size={24} />,
      title: t('programAccreditation.benefits.quality.title'),
      description: t('programAccreditation.benefits.quality.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaStar className="text-white" size={24} />,
      title: t('programAccreditation.benefits.recognition.title'),
      description: t('programAccreditation.benefits.recognition.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaRocket className="text-white" size={24} />,
      title: t('programAccreditation.benefits.career.title'),
      description: t('programAccreditation.benefits.career.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('programAccreditation.benefits.education.title'),
      description: t('programAccreditation.benefits.education.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const accreditedPrograms = [
    t('programAccreditation.programs.medicine'),
    t('programAccreditation.programs.dentistry'),
    t('programAccreditation.programs.pharmacy'),
    t('programAccreditation.programs.nursing'),
    t('programAccreditation.programs.publicHealth'),
    t('programAccreditation.programs.biomedicine')
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
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaAward className="text-xl" />
            <span className="font-semibold">{t('programAccreditation.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('programAccreditation.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-[#023E8A] font-medium">
            {t('programAccreditation.hero.subtitle')}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-6 leading-relaxed text-center text-gray-700">
              {t('programAccreditation.description')}
            </p>
          </div>

          {/* Аккредитованные программы */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              {t('programAccreditation.programsTitle')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {accreditedPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300"
                >
                  <FaCheckCircle className="text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{program}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Кнопка просмотра сертификата */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <motion.button
              onClick={handleShowCertificate}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
            >
              <FaEye className="text-xl" />
              {t('programAccreditation.certificateButton')}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Преимущества аккредитации */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('programAccreditation.benefitsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('programAccreditation.benefitsDescription')}
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
            {t('programAccreditation.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('programAccreditation.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleShowCertificate}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
            >
              <FaEye className="text-xl" />
              {t('programAccreditation.cta.viewCertificate')}
            </motion.button>
           
          </div>
        </motion.div>
      </div>

      {/* Модальное окно с сертификатом */}
      {showCertificate && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleCloseCertificate}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-6xl max-h-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
              <h3 className="text-lg font-semibold text-gray-800">
                {t('programAccreditation.certificateTitle')}
              </h3>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                onClick={handleCloseCertificate}
              >
                <FaTimes className="text-xl" />
              </motion.button>
            </div>
            <div className="p-4 max-h-[80vh] overflow-auto">
              <img 
                src="https://salymbekov.com/wp-content/uploads/2023/04/certificate-int.-program-accreditation_page-0001-e1682571823618.jpg"
                alt={t('programAccreditation.certificateAlt')}
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex justify-center p-4 bg-gray-100 border-t">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-2 rounded-xl font-semibold inline-flex items-center gap-2"
              >
                <FaDownload />
                {t('programAccreditation.downloadCertificate')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProgramAccreditation;