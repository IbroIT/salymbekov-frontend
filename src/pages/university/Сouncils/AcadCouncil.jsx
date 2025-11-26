import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { 
  FaUsers,
  FaGraduationCap,
  FaUserTie,
  FaAward,
  FaChalkboardTeacher,
  FaUniversity,
  FaBook,
  FaGlobe
} from "react-icons/fa";

const AcademicCouncilPage = () => {
  const { t } = useTranslation();

  const councilMembers = [
    "Zhumadilov Amangeldi Zhumadiliovich – Chairman, PhD",
    "Zhumadilov Esengeldi Zhumadilov – Deputy Chairman, PhD",
    "Kazakov Avaz Asanovich – Secretary",
    "Esenamanov Ulukbek Emilbekovich",
    "Abdyldaev Rysbek Aldagandayeovich, MD, Professor",
    "Tulekeev Toktogazy Moldalievich, MD, Professor",
    "Uzakbaev Kamchibeck Askarbekovich, MD, Professor",
    "Atykanov Arystanbek Orozalievich, MD, Professor",
    "Monolov Nurbek Kytaybekovich, PhD, Associate Professor",
    "Imankulova Asel Sanzsyzbaevna, MD, Associate Professor",
    "Mazekova Nazgul Jolochievna, PhD, Associate Professor",
    "Umetalieva Maana Nurdinovna, PhD",
    "Junushalieva Nurzat Manasovna",
    "Tolubaeva Munara Jolchuyevna, PhD",
    "Bilgazyev Emil Bilgazyevich, PhD",
    "Akmatova Aizhan Toktomushevna",
    "Kulmatov Almaz Shayloobekovich",
    "Baktybekov Bekzhan Baktybekovich",
    "Jantaeva Tonya",
    "Representatives of the Student Council"
  ];

  // Статистика совета
  const stats = [
    { number: "20", label: t('academicCouncil.stats.members'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "15+", label: t('academicCouncil.stats.professors'), icon: <FaUserTie className="text-[#023E8A]" /> },
    { number: "5", label: t('academicCouncil.stats.departments'), icon: <FaUniversity className="text-[#023E8A]" /> },
    { number: "100%", label: t('academicCouncil.stats.quality'), icon: <FaAward className="text-[#023E8A]" /> }
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
              <FaUsers className="text-xl" />
              <span className="font-semibold">{t('academicCouncil.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {t('academicCouncil.title')}
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
                  src="https://salymbekov.com/wp-content/uploads/2021/03/sotrudniki.jpg"
                  alt={t('academicCouncil.councilImageAlt')}
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

          {/* Описание академического совета */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaGraduationCap className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {t('academicCouncil.missionTitle')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('academicCouncil.description1')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaBook className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {t('academicCouncil.responsibilitiesTitle')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('academicCouncil.description2')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaGlobe className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {t('academicCouncil.standardsTitle')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('academicCouncil.description3')}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Состав совета */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {t('academicCouncil.compositionTitle')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
              </div>

              {/* Международный медицинский факультет */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center">
                    <FaUniversity className="text-white text-lg" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {t('academicCouncil.facultyTitle')}
                  </h3>
                </div>
              </motion.div>

              {/* Члены совета */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center">
                    <FaChalkboardTeacher className="text-white text-lg" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {t('academicCouncil.membersTitle')}
                  </h3>
                </div>

                <div className="grid gap-3">
                  {councilMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-200"
                    >
                      <div className="flex items-start">
                        <span className="text-[#023E8A] font-bold mr-4 min-w-8 text-lg">
                          {index + 1}.
                        </span>
                        <span className="text-gray-700 text-lg">{member}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Основание */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-8 pt-6 border-t border-gray-200"
              >
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-[#023E8A]">
                  <p className="text-lg text-gray-700 font-semibold">
                    {t('academicCouncil.basis')}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Информационный блок */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-center text-white"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('academicCouncil.infoTitle')}
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                {t('academicCouncil.infoDescription')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCouncilPage;