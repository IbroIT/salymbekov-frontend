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
  FaChevronDown
} from "react-icons/fa";

const ScientificTechnicalCouncilPage = () => {
  const { t } = useTranslation();

  const councilMembers = [
    "Toktogazy Moldalievich Tulekeev, MD, prof. – chairman;",
    "Uzakbaev Kamchibek Askarbekovich, MD, prof. – deputy chairman;",
    "Imankulova Asel Sansyzbaevna, MD, prof. – scientific secretary;"
  ];

  const otherMembers = [
    "Zhumadilov Esengeldi Zhumadilovich, PhD,",
    "Zhumadilov Esengeldi Zhumadilovich, PhD,",
    "Abdyldaev Rysbek Aldagandaevich, MD, prof.",
    "Atikanov Arystanbek Orozalyevich, MD, prof.",
    "Monolov Nurbek Chynbekovich MD, prof.",
    "Umetalieva Maana Nurdinovna, PhD., Assoc.",
    "Tolubaeva Munara Zholchuevna, PhD.,",
    "Bilgazyev Emil Bilgazyevich PhD.,",
    "Kazakov Avaz Asanovich,",
    "Junushalieva Nurzat Manasovna.",
    "Mazekova Nazgul Zholochievna, Ph.D., Assoc.",
    "Tokusheva Tolobubu Sagynbekovna F.I.C., Assoc.",
    "Malkawi Malik Mohammad PhD.,",
    "Sarlykov Bekbolot Kanatbekovich PhD.,",
    "Representatives of the Council of Young Scientists,",
    "Representatives of the Student Scientific Association."
  ];

  // Статистика совета
  const stats = [
    { number: "19", label: t('scientificTechnicalCouncil.stats.members'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "3", label: t('scientificTechnicalCouncil.stats.leadership'), icon: <FaUserTie className="text-[#023E8A]" /> },
    { number: "16", label: t('scientificTechnicalCouncil.stats.experts'), icon: <FaUserFriends className="text-[#023E8A]" /> },
    { number: "10+", label: t('scientificTechnicalCouncil.stats.projects'), icon: <FaRocket className="text-[#023E8A]" /> }
  ];

  // Основные функции совета
  const functions = [
    {
      icon: <FaGraduationCap className="text-white" size={20} />,
      title: t('scientificTechnicalCouncil.functions.research.title'),
      description: t('scientificTechnicalCouncil.functions.research.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaRocket className="text-white" size={20} />,
      title: t('scientificTechnicalCouncil.functions.innovation.title'),
      description: t('scientificTechnicalCouncil.functions.innovation.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaHeart className="text-white" size={20} />,
      title: t('scientificTechnicalCouncil.functions.quality.title'),
      description: t('scientificTechnicalCouncil.functions.quality.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaUsers className="text-white" size={20} />,
      title: t('scientificTechnicalCouncil.functions.cooperation.title'),
      description: t('scientificTechnicalCouncil.functions.cooperation.description'),
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
                <span className="font-semibold">{t('scientificTechnicalCouncil.badge')}</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                {t('scientificTechnicalCouncil.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t('scientificTechnicalCouncil.subtitle')}
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
                  {t('scientificTechnicalCouncil.generalProvisions')}
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
                  <motion.p 
                    className="text-lg leading-relaxed bg-blue-50 rounded-2xl p-6 border-l-4 border-[#023E8A]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('scientificTechnicalCouncil.provisionsText1')}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed bg-blue-50 rounded-2xl p-6 border-l-4 border-[#0077B6]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('scientificTechnicalCouncil.provisionsText2')}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed bg-blue-50 rounded-2xl p-6 border-l-4 border-[#0096C7]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('scientificTechnicalCouncil.provisionsText3')}
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
                  {t('scientificTechnicalCouncil.goalsAndTasks')}
                </h2>

                <div className="prose prose-lg max-w-none text-gray-800 mb-8">
                  <motion.p 
                    className="text-lg leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('scientificTechnicalCouncil.goalText')}
                  </motion.p>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  {t('scientificTechnicalCouncil.mainTasks')}
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((taskNum) => (
                    <motion.div
                      key={taskNum}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: taskNum * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 flex-shrink-0">
                        {taskNum}
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {t(`scientificTechnicalCouncil.task${taskNum}`)}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Функции совета */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-12"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    {t('scientificTechnicalCouncil.functionsTitle')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {t('scientificTechnicalCouncil.functionsDescription')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {functions.map((func, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                    >
                      <div className={`w-12 h-12 ${func.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        {func.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">
                        {func.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {func.description}
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
                  {t('scientificTechnicalCouncil.compositionTitle')}
                </h2>

                <div className="space-y-6">
                  {/* Руководство */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaUserTie className="text-[#023E8A]" />
                      {t('scientificTechnicalCouncil.leadership')}
                    </h3>
                    <div className="grid gap-3">
                      {councilMembers.map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center gap-4 bg-blue-50 rounded-xl p-4 hover:bg-blue-100 transition-colors duration-300 group"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                            {index + 1}
                          </div>
                          <span className="text-gray-700 font-medium">{member}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Члены совета */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaUserFriends className="text-[#023E8A]" />
                      {t('scientificTechnicalCouncil.members')}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {otherMembers.map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-colors duration-300 group"
                        >
                          <div className="w-2 h-2 bg-[#023E8A] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-700">{member}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ссылка для скачивания */}
                <motion.div 
                  className="mt-8 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a 
                    href="https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-nauchno-tehnicheskom-sovete.pdf"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFileDownload className="text-xl" />
                    {t('scientificTechnicalCouncil.downloadLink')}
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

export default ScientificTechnicalCouncilPage;