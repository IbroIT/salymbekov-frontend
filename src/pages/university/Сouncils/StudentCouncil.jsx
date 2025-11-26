import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUsers,
  FaRocket,
  FaGraduationCap,
  FaHeart,
  FaUserTie,
  FaUserFriends,
  FaLightbulb,
  FaHandshake,
  FaChevronDown,
  FaBullhorn,
  FaCalendarAlt,
  FaAward
} from "react-icons/fa";

const StudentCouncilPage = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 1,
      title: t('studentCouncil.section1.title'),
      content: t('studentCouncil.section1.content')
    },
    {
      id: 2,
      title: t('studentCouncil.section2.title'),
      content: t('studentCouncil.section2.content')
    },
    {
      id: 3,
      title: t('studentCouncil.section3.title'),
      content: t('studentCouncil.section3.content')
    },
    {
      id: 4,
      title: t('studentCouncil.section4.title'),
      content: t('studentCouncil.section4.content')
    },
    {
      id: 5,
      title: t('studentCouncil.section5.title'),
      content: t('studentCouncil.section5.content')
    },
    {
      id: 6,
      title: t('studentCouncil.section6.title'),
      content: t('studentCouncil.section6.content')
    }
  ];

  // Статистика студсовета
  const stats = [
    { number: "1000+", label: t('studentCouncil.stats.students'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "50+", label: t('studentCouncil.stats.events'), icon: <FaCalendarAlt className="text-[#023E8A]" /> },
    { number: "25+", label: t('studentCouncil.stats.projects'), icon: <FaRocket className="text-[#023E8A]" /> },
    { number: "15+", label: t('studentCouncil.stats.initiatives'), icon: <FaLightbulb className="text-[#023E8A]" /> }
  ];

  // Основные направления деятельности
  const activities = [
    {
      icon: <FaBullhorn className="text-white" size={20} />,
      title: t('studentCouncil.activities.advocacy.title'),
      description: t('studentCouncil.activities.advocacy.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaCalendarAlt className="text-white" size={20} />,
      title: t('studentCouncil.activities.events.title'),
      description: t('studentCouncil.activities.events.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaHandshake className="text-white" size={20} />,
      title: t('studentCouncil.activities.cooperation.title'),
      description: t('studentCouncil.activities.cooperation.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaAward className="text-white" size={20} />,
      title: t('studentCouncil.activities.development.title'),
      description: t('studentCouncil.activities.development.description'),
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
                <FaUsers className="text-xl" />
                <span className="font-semibold">{t('studentCouncil.badge')}</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                {t('studentCouncil.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t('studentCouncil.subtitle')}
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
              {/* О студсовете */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                  {t('studentCouncil.aboutTitle')}
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-800">
                  <motion.p 
                    className="text-lg leading-relaxed bg-blue-50 rounded-2xl p-6 border-l-4 border-[#023E8A]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('studentCouncil.aboutText')}
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
                  {t('studentCouncil.goalsTitle')}
                </h2>

                <div className="prose prose-lg max-w-none text-gray-800 mb-8">
                  <motion.p 
                    className="text-lg leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 mb-6"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('studentCouncil.goalText')}
                  </motion.p>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    {t('studentCouncil.tasksTitle')}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((taskNum) => (
                      <motion.div
                        key={taskNum}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: taskNum * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-all duration-300 group"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 flex-shrink-0">
                          {taskNum}
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {t(`studentCouncil.task${taskNum}`)}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p 
                    className="text-lg font-medium bg-yellow-50 rounded-2xl p-4 border-l-4 border-yellow-400"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('studentCouncil.regulations')}
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
                    {t('studentCouncil.activitiesTitle')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {t('studentCouncil.activitiesDescription')}
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

              {/* Аккордеон секции */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                  {t('studentCouncil.detailsTitle')}
                </h2>

                <div className="space-y-4">
                  {sections.map((section) => (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: section.id * 0.1 }}
                      className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <motion.button
                        onClick={() => toggleSection(section.id)}
                        className="w-full px-6 py-6 text-left bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 flex justify-between items-center"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <h3 className="text-xl font-semibold text-gray-800">
                          {section.title}
                        </h3>
                        <motion.div
                          animate={{ rotate: openSections[section.id] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-[#023E8A]"
                        >
                          <FaChevronDown />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {openSections[section.id] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-6 bg-white border-t border-gray-100">
                              <div className="prose max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
                                {section.content}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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

export default StudentCouncilPage;