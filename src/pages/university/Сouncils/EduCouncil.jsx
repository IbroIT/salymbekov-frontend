import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaAward,
  FaCheckCircle,
  FaFileAlt,
  FaChevronDown,
  FaEye,
  FaDownload
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const QualityCouncilPage = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState({});

  // Статистика совета
  const stats = [
    { number: "100%", label: t('qualityCouncil.stats.quality'), icon: <FaAward className="text-[#023E8A]" /> },
    { number: "50+", label: t('qualityCouncil.stats.standards'), icon: <FaCheckCircle className="text-[#023E8A]" /> },
    { number: "15", label: t('qualityCouncil.stats.experts'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "24/7", label: t('qualityCouncil.stats.monitoring'), icon: <FaChartLine className="text-[#023E8A]" /> }
  ];

  // Задачи совета
  const tasks = [
    {
      icon: <FaGraduationCap className="text-white" size={20} />,
      title: t('qualityCouncil.task1'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaChartLine className="text-white" size={20} />,
      title: t('qualityCouncil.task2'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaUsers className="text-white" size={20} />,
      title: t('qualityCouncil.task3'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaAward className="text-white" size={20} />,
      title: t('qualityCouncil.task4'),
      color: "bg-[#00B4D8]"
    },
    {
      icon: <FaCheckCircle className="text-white" size={20} />,
      title: t('qualityCouncil.task5'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaFileAlt className="text-white" size={20} />,
      title: t('qualityCouncil.task6'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaEye className="text-white" size={20} />,
      title: t('qualityCouncil.task7'),
      color: "bg-[#0096C7]"
    }
  ];

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'general',
      title: t('qualityCouncil.generalProvisions'),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            {t('qualityCouncil.provisionsText1')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('qualityCouncil.provisionsText2')}
          </p>
        </div>
      )
    },
    {
      id: 'goals',
      title: t('qualityCouncil.goalsAndTasks'),
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              {t('qualityCouncil.goalTitle')}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {t('qualityCouncil.goalText')}
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              {t('qualityCouncil.mainTasks')}
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {tasks.map((task, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <div className={`w-10 h-10 ${task.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {task.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{task.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
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
            <FaGraduationCap className="text-xl" />
            <span className="font-semibold">{t('qualityCouncil.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('qualityCouncil.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('qualityCouncil.subtitle')}
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

        {/* Секции с информацией */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 mb-12"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <motion.button
                onClick={() => toggleSection(section.id)}
                className="w-full p-8 text-left bg-gradient-to-r from-[#023E8A] to-[#0077B6] hover:from-[#023E8A]/90 hover:to-[#0077B6]/90 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {section.id === 'general' ? <FaFileAlt className="text-white" /> : <FaChartLine className="text-white" />}
                    </div>
                    <h2 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                      {section.title}
                    </h2>
                  </div>
                  <motion.div
                    animate={{ rotate: openSections[section.id] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white"
                  >
                    <FaChevronDown className="text-xl" />
                  </motion.div>
                </div>
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: openSections[section.id] ? 1 : 0,
                  height: openSections[section.id] ? "auto" : 0
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-8 bg-white">
                  {section.content}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ссылка на положение */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-center text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                {t('qualityCouncil.regulationsTitle')}
              </h3>
              <p className="text-white/90">
                {t('qualityCouncil.regulationsDescription')}
              </p>
            </div>
            
            <motion.a
              href="https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-o-sovete-po-kachestvu-obrazovanija.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
            >
              <FaDownload className="text-lg" />
              {t('qualityCouncil.regulationsLink')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QualityCouncilPage;