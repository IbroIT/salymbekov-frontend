import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  FaChevronDown,
  FaEye,
  FaRocket,
  FaGlobeAmericas,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaAward,
  FaDownload,
  FaArrowRight,
  FaStar,
  FaShieldAlt
} from "react-icons/fa";

const StrategicVision = () => {
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
      title: t('strategicVision.section1.title') || "Наше Видение",
      content: t('strategicVision.section1.content') || "Стать ведущим образовательным учреждением, которое формирует будущих лидеров и инноваторов через передовые образовательные программы и исследования мирового уровня.",
      icon: <FaEye className="text-white" size={20} />,
      color: "bg-[#023E8A]"
    },
    {
      id: 2,
      title: t('strategicVision.section2.title') || "Стратегические Цели",
      content: t('strategicVision.section2.content') || "Развитие академического превосходства, укрепление международного сотрудничества, внедрение инновационных технологий в образовательный процесс, и создание устойчивой экосистемы для студентов и преподавателей.",
      
      color: "bg-[#0077B6]"
    },
    {
      id: 3,
      title: t('strategicVision.section3.title') || "Миссия",
      content: t('strategicVision.section3.content') || "Обеспечивать качественное образование, которое развивает критическое мышление, творческий подход и социальную ответственность, готовя студентов к успешной карьере в глобальном сообществе.",
      icon: <FaRocket className="text-white" size={20} />,
      color: "bg-[#0096C7]"
    },
    {
      id: 4,
      title: t('strategicVision.section4.title') || "Глобальное Присутствие",
      content: t('strategicVision.section4.content') || "Расширение международного признания через партнерства с ведущими университетами мира, участие в глобальных исследовательских проектах и создание межкультурной образовательной среды.",
      icon: <FaGlobeAmericas className="text-white" size={20} />,
      color: "bg-[#00B4D8]"
    }
  ];

  const stats = [
    { number: "2030", label: t('strategicVision.stats.visionYear') || "Целевой год"},
    { number: "5", label: t('strategicVision.stats.pillars') || "Столпов стратегии", icon: <FaChartLine className="text-[#023E8A]" /> },
    { number: "Global", label: t('strategicVision.stats.reach') || "Глобальный охват", icon: <FaGlobeAmericas className="text-[#023E8A]" /> },
    { number: "100+", label: t('strategicVision.stats.initiatives') || "Инициатив", icon: <FaRocket className="text-[#023E8A]" /> }
  ];

  const values = [
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('strategicVision.values.innovation.title') || "Инновации",
      description: t('strategicVision.values.innovation.description') || "Постоянное внедрение новых технологий и методов обучения для обеспечения актуальности образования.",
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaLightbulb className="text-white" size={24} />,
      title: t('strategicVision.values.excellence.title') || "Превосходство",
      description: t('strategicVision.values.excellence.description') || "Стремление к высочайшим стандартам качества во всех аспектах образовательной деятельности.",
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaShieldAlt className="text-white" size={24} />,
      title: t('strategicVision.values.sustainability.title') || "Устойчивость",
      description: t('strategicVision.values.sustainability.description') || "Создание устойчивой образовательной экосистемы, ориентированной на долгосрочное развитие.",
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('strategicVision.values.impact.title') || "Влияние",
      description: t('strategicVision.values.impact.description') || "Оказание положительного влияния на общество через образование и исследования.",
      color: "bg-[#00B4D8]"
    }
  ];

  const milestones = [
    t('strategicVision.milestones.milestone1') || "Запуск новых образовательных программ",
    t('strategicVision.milestones.milestone2') || "Открытие исследовательских центров",
    t('strategicVision.milestones.milestone3') || "Международная аккредитация",
    t('strategicVision.milestones.milestone4') || "Цифровая трансформация кампуса",
    t('strategicVision.milestones.milestone5') || "Расширение партнерской сети",
    t('strategicVision.milestones.milestone6') || "Достижение углеродной нейтральности"
  ];

  const getTranslation = (key, fallback) => {
    const translation = t(key);
    return translation !== key ? translation : fallback;
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
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
            <FaEye className="text-xl" />
            <span className="font-semibold">{getTranslation('strategicVision.badge', 'Стратегическое Видение')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {getTranslation('strategicVision.title', 'Стратегическое Видение')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {getTranslation('strategicVision.subtitle', 'Формируем будущее образования через инновации и устойчивое развитие')}
          </p>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {getTranslation('strategicVision.valuesTitle', 'Ключевые Ценности')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getTranslation('strategicVision.valuesSubtitle', 'Основополагающие принципы, которые направляют нашу деятельность')}
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {getTranslation('strategicVision.milestonesTitle', 'Ключевые Вехи')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {getTranslation('strategicVision.milestonesSubtitle', 'Основные этапы реализации нашей стратегии')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaStar className="text-white text-lg" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{milestone}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {getTranslation('strategicVision.visionTitle', 'Стратегическое Видение')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getTranslation('strategicVision.visionSubtitle', 'Детальный обзор наших стратегических направлений')}
            </p>
          </div>

          <div className="grid gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <motion.button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-8 py-6 text-left transition-colors duration-200 flex items-center justify-between hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center`}>
                      {section.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openSections[section.id] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#023E8A]"
                  >
                    <FaChevronDown className="text-xl" />
                  </motion.div>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openSections[section.id] ? "auto" : 0,
                    opacity: openSections[section.id] ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8">
                    <div className="pl-16">
                      <div className="prose max-w-none text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </div>
  );
};


export default StrategicVision;