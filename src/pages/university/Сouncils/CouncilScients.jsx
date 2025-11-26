import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { 
  FaUsers,
  FaRocket,
  FaGraduationCap,
  FaHeart,
  FaFileDownload,
  FaUserTie,
  FaUserFriends,
  FaLightbulb,
  FaHandshake,
  FaAward
} from "react-icons/fa";

const YoungScientistsCouncilPage = () => {
  const { t } = useTranslation();

  const councilMembers = [
    "Уметалиева М.Н. – аспирант",
    "Князев И.А. – аспирант",
    "Сырдыбаев А.Ж. – соискатель",
    "Сыдыкова С.Б. – соискатель",
    "Жолболдиева М. – соискатель",
    "Бопушева А. – соискатель"
  ];

  // Статистика совета
  const stats = [
    { number: "6", label: t('youngScientistsCouncil.stats.members'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "3", label: t('youngScientistsCouncil.stats.postgraduates'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "3", label: t('youngScientistsCouncil.stats.applicants'), icon: <FaUserFriends className="text-[#023E8A]" /> },
    { number: "15+", label: t('youngScientistsCouncil.stats.projects'), icon: <FaRocket className="text-[#023E8A]" /> }
  ];

  // Основные направления деятельности
  const activities = [
    {
      icon: <FaLightbulb className="text-white" size={20} />,
      title: t('youngScientistsCouncil.activities.research.title'),
      description: t('youngScientistsCouncil.activities.research.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaHandshake className="text-white" size={20} />,
      title: t('youngScientistsCouncil.activities.cooperation.title'),
      description: t('youngScientistsCouncil.activities.cooperation.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaGraduationCap className="text-white" size={20} />,
      title: t('youngScientistsCouncil.activities.education.title'),
      description: t('youngScientistsCouncil.activities.education.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaAward className="text-white" size={20} />,
      title: t('youngScientistsCouncil.activities.grants.title'),
      description: t('youngScientistsCouncil.activities.grants.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 7 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header с белым фоном и синим текстом */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
              >
                <FaGraduationCap className="text-xl" />
                <span className="font-semibold">{t('youngScientistsCouncil.badge')}</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                {t('youngScientistsCouncil.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t('youngScientistsCouncil.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Основной контент */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Статистика */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
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

            <div className="max-w-6xl mx-auto">
              {/* Общие положения */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                  {t('youngScientistsCouncil.generalProvisions')}
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
                  <motion.p 
                    className="text-lg leading-relaxed bg-blue-50 rounded-2xl p-6 border-l-4 border-[#023E8A]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('youngScientistsCouncil.provisionsText1')}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed bg-blue-50 rounded-2xl p-6 border-l-4 border-[#0077B6]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('youngScientistsCouncil.provisionsText2')}
                  </motion.p>
                </div>
              </motion.div>

              {/* Цели и задачи */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                  {t('youngScientistsCouncil.goalsAndTasks')}
                </h2>

                <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
                  <motion.p 
                    className="text-lg leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('youngScientistsCouncil.goalsText1')}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('youngScientistsCouncil.goalsText2')}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('youngScientistsCouncil.goalsText3')}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('youngScientistsCouncil.goalsText4')}
                  </motion.p>
                </div>
              </motion.div>

              {/* Направления деятельности */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-12"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    {t('youngScientistsCouncil.activitiesTitle')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {t('youngScientistsCouncil.activitiesDescription')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {activities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                    >
                      <div className={`w-12 h-12 ${activity.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        {activity.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {activity.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Состав совета */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                  {t('youngScientistsCouncil.compositionTitle')}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {councilMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 font-medium">{member}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Ссылка для скачивания */}
                <motion.div 
                  className="mt-8 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a 
                    href="https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-soveta-molodyh-uchenyh.pdf"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFileDownload className="text-xl" />
                    {t('youngScientistsCouncil.regulationsLink')}
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YoungScientistsCouncilPage;