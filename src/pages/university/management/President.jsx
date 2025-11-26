import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaSignature,
  FaAward,
  FaRocket,
  FaUsers,
  FaHeart,
  FaQuoteLeft,
  FaQuoteRight
} from "react-icons/fa";

const President = () => {
  const { t } = useTranslation();

  // Статистика достижений
  const stats = [
    { number: "20+", label: t('president.stats.yearsExperience'), icon: <FaAward className="text-[#023E8A]" /> },
    { number: "100+", label: t('president.stats.projectsCompleted'), icon: <FaRocket className="text-[#023E8A]" /> },
    { number: "50+", label: t('president.stats.teamMembers'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "1000+", label: t('president.stats.satisfiedClients'), icon: <FaHeart className="text-[#023E8A]" /> }
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

      <div className="relative z-10">
        {/* Герой секция с белым фоном */}
        <section className="relative py-20 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
            >
              <FaSignature className="text-xl" />
              <span className="font-semibold">{t('president.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {t('president.hero.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
          </motion.div>
        </section>

        {/* Отдельный блок с изображением */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-16 bg-white"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl opacity-10 blur-lg"></div>
                <img 
                  src="https://salymbekov.com/wp-content/uploads/2021/03/uchrediteli.jpg"
                  alt={t('president.foundationImageAlt')}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Основной контент */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
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

          {/* Приветственный текст */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="flex justify-center mb-6">
                <FaQuoteLeft className="text-4xl text-[#023E8A] opacity-20" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-6">
                {t('president.greeting')}
              </h2>
              
              <div className="flex justify-center">
                <FaQuoteRight className="text-4xl text-[#023E8A] opacity-20" />
              </div>
            </div>
          </motion.div>

          {/* Текст с изображением президента */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl opacity-20 blur-lg"></div>
                <motion.img 
                  src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b3839-1024x683.jpg"
                  alt={t('president.presidentImageAlt')}
                  className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('president.description1')}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('president.description2')}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('president.description3')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Дополнительный текст */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#023E8A]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('president.description4')}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#0077B6]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('president.description5')}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#0096C7]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('president.description6')}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Подпись */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white text-center">
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-xl italic"
                >
                  {t('president.signature.respectfully')}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-2xl font-bold"
                >
                  {t('president.signature.position')}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-xl"
                >
                  {t('president.signature.name')}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default President;