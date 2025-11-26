import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { 
  FaUsers,
  FaShieldAlt,
  FaHeart,
  FaBalanceScale,
  FaFileMedical,
  FaSearch,
  FaGraduationCap,
  FaFlask,
  FaUserMd,
  FaBook,
  FaEye,
  FaChevronDown
} from "react-icons/fa";

const BioethicsCommitteePage = () => {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState(null);

  const committeeMembers = [
    {
      name: "Зам.председателя – Тулекеев Т.М., д.м.н., проф.",
      role: "deputy"
    },
    {
      name: "Ответственный секретарь – Князев И.А.",
      role: "secretary"
    },
    {
      name: "Кулданбаев Н.К. – д.м.н.",
      role: "member"
    },
    {
      name: "Монолов Н.К. – к.м.н.",
      role: "member"
    }
  ];

  const mainTasks = t('bioethicsCommittee.mainTasks', { returnObjects: true });
  const mainFunctions = t('bioethicsCommittee.mainFunctions', { returnObjects: true });

  const stats = [
    { number: "15+", label: t('bioethicsCommittee.stats.years'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "200+", label: t('bioethicsCommittee.stats.projects'), icon: <FaFileMedical className="text-[#023E8A]" /> },
    { number: "100%", label: t('bioethicsCommittee.stats.compliance'), icon: <FaShieldAlt className="text-[#023E8A]" /> },
    { number: "50+", label: t('bioethicsCommittee.stats.publications'), icon: <FaBook className="text-[#023E8A]" /> }
  ];

  const values = [
    {
      icon: <FaShieldAlt className="text-white" size={24} />,
      title: t('bioethicsCommittee.values.protection.title'),
      description: t('bioethicsCommittee.values.protection.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaBalanceScale className="text-white" size={24} />,
      title: t('bioethicsCommittee.values.ethics.title'),
      description: t('bioethicsCommittee.values.ethics.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaFlask className="text-white" size={24} />,
      title: t('bioethicsCommittee.values.research.title'),
      description: t('bioethicsCommittee.values.research.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHeart className="text-white" size={24} />,
      title: t('bioethicsCommittee.values.care.title'),
      description: t('bioethicsCommittee.values.care.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
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
            <FaUserMd className="text-xl" />
            <span className="font-semibold">{t('bioethicsCommittee.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('bioethicsCommittee.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('bioethicsCommittee.subtitle')}
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
            <p className="text-lg mb-6 leading-relaxed text-center">
              {t('bioethicsCommittee.mainText')}
            </p>
          </div>

          {/* Состав комитета */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t('bioethicsCommittee.chairmanTitle')}
            </h2>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <motion.img 
                  src="https://salymbekov.com/wp-content/uploads/2021/01/batyraliev-235x300.jpeg" 
                  alt={t('bioethicsCommittee.chairmanName')}
                  className="w-full max-w-xs mx-auto h-auto rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-bold mb-2">{t('bioethicsCommittee.chairmanName')}</h3>
                  <p className="text-white/90">{t('bioethicsCommittee.chairmanText')}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {committeeMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                    >
                      <p className="text-gray-700 font-medium">{member.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Основные задачи */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6 cursor-pointer"
                 onClick={() => toggleSection('tasks')}>
              <h2 className="text-3xl font-bold text-gray-800">
                {t('bioethicsCommittee.mainTasksTitle')}
              </h2>
              <motion.div
                animate={{ rotate: expandedSection === 'tasks' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-[#023E8A]" />
              </motion.div>
            </div>

            {expandedSection === 'tasks' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="grid md:grid-cols-2 gap-6"
              >
                {mainTasks.map((task, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-blue-50 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#023E8A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaEye className="text-white text-sm" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{task}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Основные функции */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6 cursor-pointer"
                 onClick={() => toggleSection('functions')}>
              <h2 className="text-3xl font-bold text-gray-800">
                {t('bioethicsCommittee.mainFunctionsTitle')}
              </h2>
              <motion.div
                animate={{ rotate: expandedSection === 'functions' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-[#023E8A]" />
              </motion.div>
            </div>

            {expandedSection === 'functions' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="grid md:grid-cols-2 gap-4"
              >
                {mainFunctions.map((functionItem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-6 h-6 bg-[#0077B6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaGraduationCap className="text-white text-xs" />
                    </div>
                    <p className="text-gray-700">{functionItem}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Ценности и принципы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('bioethicsCommittee.valuesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('bioethicsCommittee.valuesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Призыв к действию */}
        
      </div>
    </div>
  );
};

export default BioethicsCommitteePage;