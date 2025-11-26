import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaUsers,
  FaUserTie,
  FaGraduationCap,
  FaGlobe,
  FaLightbulb,
  FaHandshake,
  FaChevronDown
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const DevelopmentCouncilPage = () => {
  const { t } = useTranslation();
  const [expandedMember, setExpandedMember] = useState(null);

  // Статистика совета
  const stats = [
    { number: "15+", label: t('developmentCouncil.stats.experts'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "10", label: t('developmentCouncil.stats.countries'), icon: <FaGlobe className="text-[#023E8A]" /> },
    { number: "50+", label: t('developmentCouncil.stats.projects'), icon: <FaLightbulb className="text-[#023E8A]" /> },
    { number: "100%", label: t('developmentCouncil.stats.commitment'), icon: <FaHandshake className="text-[#023E8A]" /> }
  ];

  const councilMembers = [
    {
      id: 1,
      name: t('developmentCouncil.member1Name'),
      image: "https://salymbekov.com/wp-content/uploads/2021/03/jeshmambetov-azisbek-jeshmambetovich.jpg",
      text: t('developmentCouncil.member1Text'),
      role: t('developmentCouncil.roles.expert')
    },
    {
      id: 2,
      name: t('developmentCouncil.member2Name'),
      image: "https://salymbekov.com/wp-content/uploads/2021/05/whatsapp-image-2021-04-29-at-14.30.42.jpeg",
      text: t('developmentCouncil.member2Text'),
      role: t('developmentCouncil.roles.advisor')
    },
    {
      id: 3,
      name: t('developmentCouncil.member3Name'),
      image: "https://salymbekov.com/wp-content/uploads/2022/10/amiya-bhaumik-258x300.png",
      text: t('developmentCouncil.member3Text'),
      role: t('developmentCouncil.roles.international')
    },
    {
      id: 4,
      name: t('developmentCouncil.member4Name'),
      image: "https://salymbekov.com/wp-content/uploads/2022/10/qip-shot-screen-010-288x300.png",
      text: t('developmentCouncil.member4Text'),
      role: t('developmentCouncil.roles.specialist')
    },
    {
      id: 5,
      name: t('developmentCouncil.member5Name'),
      image: "https://salymbekov.com/wp-content/uploads/2022/05/hideo-shinagawa.jpg",
      text: t('developmentCouncil.member5Text'),
      role: t('developmentCouncil.roles.researcher')
    },
    {
      id: 6,
      name: t('developmentCouncil.member6Name'),
      image: "https://salymbekov.com/wp-content/uploads/2022/05/rysbek-aldagandaevich.jpg",
      text: t('developmentCouncil.member6Text'),
      role: t('developmentCouncil.roles.consultant')
    }
  ];

  const toggleMemberExpansion = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
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
            <FaUsers className="text-xl" />
            <span className="font-semibold">{t('developmentCouncil.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('developmentCouncil.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('developmentCouncil.subtitle')}
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t('developmentCouncil.mainTitle')}
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t('developmentCouncil.firstParagraph')}
          </p>
        </motion.div>

        {/* Председатель совета */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-12"
        >
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Фото председателя */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:w-1/3"
              >
                <div className="relative">
                  <img 
                    src="https://salymbekov.com/wp-content/uploads/2021/02/salymbekov-askar-maatkabylovich-main.jpg" 
                    alt={t('developmentCouncil.chairmanName')}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-2xl border-4 border-white/20" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    {t('developmentCouncil.chairmanName')}
                  </h3>
                  <p className="text-gray-600">{t('developmentCouncil.roles.chairman')}</p>
                </div>
              </motion.div>

              {/* Информация о председателе */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:w-2/3"
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {t('developmentCouncil.chairmanTitle')}
                </h3>
                
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-gray-700">
                    {t('developmentCouncil.chairmanText1')}
                    <a 
                      href="https://fpi.kg/?lang=ru" 
                      className="text-[#023E8A] hover:text-[#0077B6] font-semibold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('developmentCouncil.foundationName')}
                    </a>
                    {t('developmentCouncil.chairmanText2')}
                  </p>
                  <p className="text-gray-700">
                    {t('developmentCouncil.chairmanText3')}
                  </p>
                  <p className="text-gray-700">
                    {t('developmentCouncil.chairmanText4')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Первый член совета */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-12"
        >
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:w-1/3"
              >
                <div className="relative">
                  <img 
                    src="https://salymbekov.com/wp-content/uploads/2021/03/batyraliev-talant.jpg" 
                    alt={t('developmentCouncil.memberName')}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-2xl border-4 border-white/20" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    {t('developmentCouncil.memberName')}
                  </h3>
                  <p className="text-gray-600">{t('developmentCouncil.roles.specialist')}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:w-2/3"
              >
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-gray-700">
                    {t('developmentCouncil.memberText1')}
                  </p>
                  <p className="text-gray-700">
                    {t('developmentCouncil.memberText2')}
                  </p>
                  <p className="text-gray-700">
                    {t('developmentCouncil.memberText3')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Состав совета */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('developmentCouncil.compositionTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('developmentCouncil.compositionDescription')}
            </p>
          </div>

          <div className="grid gap-6">
            {councilMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Фото члена совета */}
                    <div className="lg:w-1/4">
                      <div className="relative">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-auto rounded-2xl shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-2xl border-4 border-white/20" />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-xl font-bold text-gray-800">
                          {member.name}
                        </h3>
                        <p className="text-gray-600">{member.role}</p>
                      </div>
                    </div>

                    {/* Информация о члене совета */}
                    <div className="lg:w-3/4">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-2xl font-bold text-gray-800">
                          {member.name}
                        </h4>
                        <motion.button
                          onClick={() => toggleMemberExpansion(member.id)}
                          className="flex items-center gap-2 text-[#023E8A] font-semibold hover:text-[#0077B6] transition-colors duration-300"
                        >
                          {expandedMember === member.id ? t('developmentCouncil.showLess') : t('developmentCouncil.showMore')}
                          <motion.div
                            animate={{ rotate: expandedMember === member.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaChevronDown className="text-sm" />
                          </motion.div>
                        </motion.button>
                      </div>

                      {expandedMember === member.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-gray-700 leading-relaxed text-lg"
                        >
                          {member.text}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DevelopmentCouncilPage;