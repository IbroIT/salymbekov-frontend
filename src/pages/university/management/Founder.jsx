import { motion } from "framer-motion";
import { 
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaHeart,
  FaStar,
  FaMedal,
  FaTrophy,
  FaUserTie
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Founder = () => {
  const { t } = useTranslation();

  // Статистика основателя
  const stats = [
    { number: "40+", label: t('founder.stats.experience'), icon: <FaBriefcase className="text-[#023E8A]" /> },
    { number: "50+", label: t('founder.stats.awards'), icon: <FaAward className="text-[#023E8A]" /> },
    { number: "100+", label: t('founder.stats.projects'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "25+", label: t('founder.stats.publications'), icon: <FaGraduationCap className="text-[#023E8A]" /> }
  ];

  // Основные достижения
  const achievements = [
    {
      icon: <FaMedal className="text-white" size={24} />,
      title: t('founder.achievements.education.title'),
      description: t('founder.achievements.education.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaTrophy className="text-white" size={24} />,
      title: t('founder.achievements.career.title'),
      description: t('founder.achievements.career.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaStar className="text-white" size={24} />,
      title: t('founder.achievements.recognition.title'),
      description: t('founder.achievements.recognition.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHeart className="text-white" size={24} />,
      title: t('founder.achievements.community.title'),
      description: t('founder.achievements.community.description'),
      color: "bg-[#00B4D8]"
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
        {/* Герой секция - белый фон, синий текст */}
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
            <span className="font-semibold">{t('founder.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('founder.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('founder.hero.subtitle')}
          </p>
        </motion.div>

        {/* Отдельный блок с изображением основателя */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-16"
        >
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Фото основателя */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:w-2/5"
              >
                <div className="relative">
                  <img 
                    src="https://cdn-1.aki.kg/st_runews/9/621649.1.1442234987.jpg"
                    alt={t('founder.founderImageAlt')}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-2xl border-4 border-white/20" />
                </div>
              </motion.div>

              {/* Текстовая информация */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:w-3/5"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {t('founder.founderTitle')}
                </h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-gray-700">
                    {t('founder.description1')}
                  </p>
                  <p className="text-gray-700">
                    {t('founder.description2')}
                  </p>
                  <p className="text-gray-700">
                    {t('founder.description3')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
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

        {/* Достижения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('founder.achievementsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('founder.achievementsDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${achievement.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Детальная информация */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          {/* Биография */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                {t('founder.biography.title')}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Основная информация */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <FaGraduationCap className="text-[#023E8A] text-xl" />
                    <div>
                      <p className="font-semibold text-gray-800">{t('founder.biography.birthDate')}</p>
                      <p className="text-gray-700">{t('founder.biography.birthDateValue')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <FaBriefcase className="text-[#023E8A] text-xl" />
                    <div>
                      <p className="font-semibold text-gray-800">{t('founder.biography.birthPlace')}</p>
                      <p className="text-gray-700">{t('founder.biography.birthPlaceValue')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <FaAward className="text-[#023E8A] text-xl" />
                    <div>
                      <p className="font-semibold text-gray-800">{t('founder.biography.education')}</p>
                      <p className="text-gray-700">{t('founder.biography.educationValue')}</p>
                    </div>
                  </div>
                </div>

                {/* Детали образования */}
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {t('founder.biography.educationDetails1')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('founder.biography.educationDetails2')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('founder.biography.specialty')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Награды */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-8">
              <h4 className="text-3xl font-bold text-gray-800 mb-6">
                {t('founder.biography.awards.title')}
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  t('founder.biography.awards.item1'),
                  t('founder.biography.awards.item2'),
                  t('founder.biography.awards.item3'),
                  t('founder.biography.awards.item4'),
                  t('founder.biography.awards.item5'),
                  t('founder.biography.awards.item6'),
                  t('founder.biography.awards.item7'),
                  t('founder.biography.awards.item8'),
                  t('founder.biography.awards.item9')
                ].map((award, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <FaMedal className="text-[#023E8A] text-sm" />
                    <span className="text-gray-700">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Трудовая деятельность */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-8">
              <h4 className="text-3xl font-bold text-gray-800 mb-6">
                {t('founder.biography.workExperience.title')}
              </h4>
              <div className="space-y-3">
                {[
                  t('founder.biography.workExperience.item1'),
                  t('founder.biography.workExperience.item2'),
                  t('founder.biography.workExperience.item3'),
                  t('founder.biography.workExperience.item4'),
                  t('founder.biography.workExperience.item5'),
                  t('founder.biography.workExperience.item6'),
                  t('founder.biography.workExperience.item7'),
                  t('founder.biography.workExperience.item8'),
                  t('founder.biography.workExperience.item9'),
                  t('founder.biography.workExperience.item10'),
                  t('founder.biography.workExperience.item11')
                ].map((experience, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#023E8A] rounded-full mt-2" />
                    <p className="text-gray-700 flex-1">{experience}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Общественная деятельность */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-8">
              <h4 className="text-3xl font-bold text-gray-800 mb-6">
                {t('founder.biography.publicActivity.title')}
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  t('founder.biography.publicActivity.item1'),
                  t('founder.biography.publicActivity.item2'),
                  t('founder.biography.publicActivity.item3'),
                  t('founder.biography.publicActivity.item4')
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
                    <FaUsers className="text-[#023E8A] text-lg" />
                    <span className="text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Founder;