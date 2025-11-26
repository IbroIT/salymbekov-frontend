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
  FaHandshake,
  FaBriefcase,
  FaChartLine,
  FaCheck
} from "react-icons/fa";

const EmployersCouncilPage = () => {
  const { t } = useTranslation();

  const tasksList = [
    "содействует развитию учебной, научной и воспитательной деятельности университета на основе активного участия деятельности университета;",
    "принимает участие в обсуждении по совершенствованию образовательных программ, учебных планов и программ в соответствии с реальными запросами потребителей.",
    "принимает участие в обсуждении и разработке стратегии по обеспечению качества образовании и самообследовании для оценки деятельности университета;",
    "участвует в образовательном процессе, проведении учебных и производственных практик , а также поддерживает развитие инновационной деятельности;",
    "содействует в развитии перспективных программ и проектов с учетом современных тенденций и требований рынка.",
    "содействует в привлечении местных и зарубежных специалистов для совместной подготовки студентов;",
    "содействует в трудоустройстве студентов и выпускников;",
    "содействует в решении вопросов повышения квалификации преподавателей и сотрудников;",
    "содействует в реализации информационной, общественной и выставочной деятельности, а также повышение имиджа университета на рынке образовательных услуг;",
    "привлечение студентов и научно-педагогических работников к реальной производственной и исследовательской деятельности предприятий и организаций – партнеров университета;",
    "рассматривает другие вопросы развития университета."
  ];

  // Статистика совета
  const stats = [
    { number: "50+", label: t('employersCouncil.stats.partners'), icon: <FaHandshake className="text-[#023E8A]" /> },
    { number: "1000+", label: t('employersCouncil.stats.students'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "85%", label: t('employersCouncil.stats.employment'), icon: <FaBriefcase className="text-[#023E8A]" /> },
    { number: "25+", label: t('employersCouncil.stats.programs'), icon: <FaChartLine className="text-[#023E8A]" /> }
  ];

  // Основные направления деятельности
  const activities = [
    {
      icon: <FaHandshake className="text-white" size={20} />,
      title: t('employersCouncil.activities.partnership.title'),
      description: t('employersCouncil.activities.partnership.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaBriefcase className="text-white" size={20} />,
      title: t('employersCouncil.activities.employment.title'),
      description: t('employersCouncil.activities.employment.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaGraduationCap className="text-white" size={20} />,
      title: t('employersCouncil.activities.education.title'),
      description: t('employersCouncil.activities.education.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaChartLine className="text-white" size={20} />,
      title: t('employersCouncil.activities.development.title'),
      description: t('employersCouncil.activities.development.description'),
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
                <FaHandshake className="text-xl" />
                <span className="font-semibold">{t('employersCouncil.badge')}</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                {t('employersCouncil.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t('employersCouncil.subtitle')}
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
                  {t('employersCouncil.generalProvisions')}
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
                  <motion.p 
                    className="text-lg leading-relaxed bg-blue-50 rounded-2xl p-6 border-l-4 border-[#023E8A]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('employersCouncil.provisionsText1')}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed bg-blue-50 rounded-2xl p-6 border-l-4 border-[#0077B6]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('employersCouncil.provisionsText2')}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed bg-blue-50 rounded-2xl p-6 border-l-4 border-[#0096C7]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('employersCouncil.provisionsText3')}
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
                  {t('employersCouncil.goalsAndTasks')}
                </h2>

                <div className="prose prose-lg max-w-none text-gray-800 mb-8">
                  <motion.p 
                    className="text-lg leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('employersCouncil.goalText')}
                  </motion.p>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  {t('employersCouncil.tasksTitle')}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {tasksList.map((task, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 hover:bg-green-50 transition-all duration-300 group"
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <FaCheck className="text-xs" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {task}
                      </span>
                    </motion.div>
                  ))}
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
                    {t('employersCouncil.activitiesTitle')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {t('employersCouncil.activitiesDescription')}
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

             
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployersCouncilPage;