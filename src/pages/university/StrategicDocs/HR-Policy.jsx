import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  FaChevronDown,
  FaUsers,
  FaUserTie,
  FaHandshake,
  FaGraduationCap,
  FaHeart,
  FaBalanceScale,
  FaAward,
  FaChartLine,
  FaDownload,
  FaArrowRight,
  FaShieldAlt,
  FaClock,
  FaDollarSign
} from "react-icons/fa";

const HRPolicyPage = () => {
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
      title: t('hrPolicy.section1.title'),
      content: t('hrPolicy.section1.content'),
      icon: <FaUsers className="text-white" size={20} />,
      color: "bg-[#023E8A]"
    },
    {
      id: 2,
      title: t('hrPolicy.section2.title'),
      content: t('hrPolicy.section2.content'),
      icon: <FaUserTie className="text-white" size={20} />,
      color: "bg-[#0077B6]"
    },
    {
      id: 3,
      title: t('hrPolicy.section3.title'),
      content: t('hrPolicy.section3.content'),
      icon: <FaGraduationCap className="text-white" size={20} />,
      color: "bg-[#0096C7]"
    },
    {
      id: 4,
      title: t('hrPolicy.section4.title'),
      content: t('hrPolicy.section4.content'),
      icon: <FaHeart className="text-white" size={20} />,
      color: "bg-[#00B4D8]"
    },
    {
      id: 5,
      title: t('hrPolicy.section5.title'),
      content: t('hrPolicy.section5.content'),
      icon: <FaBalanceScale className="text-white" size={20} />,
      color: "bg-[#023E8A]"
    },
    {
      id: 6,
      title: t('hrPolicy.section6.title'),
      content: t('hrPolicy.section6.content'),
      icon: <FaShieldAlt className="text-white" size={20} />,
      color: "bg-[#0077B6]"
    }
  ];

  const stats = [
    { number: "100+", label: t('hrPolicy.stats.employees'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "95%", label: t('hrPolicy.stats.satisfaction'), icon: <FaHeart className="text-[#023E8A]" /> },
    { number: "30+", label: t('hrPolicy.stats.training'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "5+", label: t('hrPolicy.stats.benefits'), icon: <FaAward className="text-[#023E8A]" /> }
  ];

  const benefits = [
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('hrPolicy.benefits.development.title'),
      description: t('hrPolicy.benefits.development.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaHeart className="text-white" size={24} />,
      title: t('hrPolicy.benefits.health.title'),
      description: t('hrPolicy.benefits.health.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaDollarSign className="text-white" size={24} />,
      title: t('hrPolicy.benefits.financial.title'),
      description: t('hrPolicy.benefits.financial.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaClock className="text-white" size={24} />,
      title: t('hrPolicy.benefits.worklife.title'),
      description: t('hrPolicy.benefits.worklife.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const principles = [
    t('hrPolicy.principles.principle1'),
    t('hrPolicy.principles.principle2'),
    t('hrPolicy.principles.principle3'),
    t('hrPolicy.principles.principle4'),
    t('hrPolicy.principles.principle5'),
    t('hrPolicy.principles.principle6')
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
            <FaUserTie className="text-xl" />
            <span className="font-semibold">{t('hrPolicy.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('hrPolicy.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('hrPolicy.subtitle')}
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

        {/* Ключевые принципы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('hrPolicy.principlesTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('hrPolicy.principlesSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaAward className="text-white text-lg" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{principle}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Преимущества для сотрудников */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('hrPolicy.benefitsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('hrPolicy.benefitsSubtitle')}
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

        {/* Секции HR политики */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('hrPolicy.policyTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('hrPolicy.policySubtitle')}
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

export default HRPolicyPage;