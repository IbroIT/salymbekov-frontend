import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaGlobe,
  FaUsers,
  FaHeart,
  FaAward,
  FaUserGraduate
} from "react-icons/fa";

const AdmissionCommitteePage = () => {
  const { t } = useTranslation();

  // Статистика приемной комиссии
  const stats = [
    { number: "1000+", label: t('admissionCommittee.stats.students'), icon: <FaUserGraduate className="text-[#023E8A]" /> },
    { number: "50+", label: t('admissionCommittee.stats.programs'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "95%", label: t('admissionCommittee.stats.satisfaction'), icon: <FaHeart className="text-[#023E8A]" /> },
    { number: "24/7", label: t('admissionCommittee.stats.support'), icon: <FaUsers className="text-[#023E8A]" /> }
  ];

  // Направления IT колледжа
  const itDirections = [
    t('admissionCommittee.itDirection1'),
    t('admissionCommittee.itDirection2'),
    t('admissionCommittee.itDirection3')
  ];

  // Контакты
  const contacts = [
    {
      icon: <FaMapMarkerAlt className="text-white text-lg" />,
      title: t('admissionCommittee.address'),
      items: [t('admissionCommittee.address1'), t('admissionCommittee.address2')]
    },
    {
      icon: <FaPhone className="text-white text-lg" />,
      title: t('admissionCommittee.phones'),
      items: [
        t('admissionCommittee.phone1'),
        t('admissionCommittee.phone2'),
        t('admissionCommittee.phone3'),
        t('admissionCommittee.phone4')
      ]
    },
    {
      icon: <FaEnvelope className="text-white text-lg" />,
      title: "Email",
      items: [t('admissionCommittee.email')]
    }
  ];

  // Разделы информации
  const sections = [
    {
      icon: <FaGraduationCap className="text-white text-lg" />,
      title: t('admissionCommittee.medicineFacultyTitle'),
      content: t('admissionCommittee.medicineFacultyText')
    },
    {
      icon: <FaLaptopCode className="text-white text-lg" />,
      title: t('admissionCommittee.itCollegeTitle'),
      content: [t('admissionCommittee.itCollegeText1'), t('admissionCommittee.itCollegeText2'), t('admissionCommittee.itCollegeText3')],
      directions: itDirections
    },
    {
      icon: <FaAward className="text-white text-lg" />,
      title: t('admissionCommittee.recognitionTitle'),
      content: t('admissionCommittee.recognitionText')
    },
    {
      icon: <FaGlobe className="text-white text-lg" />,
      title: t('admissionCommittee.internationalTitle'),
      content: t('admissionCommittee.internationalText')
    },
    {
      icon: <FaHeart className="text-white text-lg" />,
      title: t('admissionCommittee.extracurricularTitle'),
      content: t('admissionCommittee.extracurricularText')
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
              <FaUserGraduate className="text-xl" />
              <span className="font-semibold">{t('admissionCommittee.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {t('admissionCommittee.title')}
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
                  src="https://salymbekov.com/wp-content/uploads/2021/04/askar-salymbekov-v-vypusknikami-mlk-s.jpg"
                  alt={t('admissionCommittee.imageAlt')}
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

          {/* Контакты */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center">
                  <FaPhone className="text-white text-lg" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {t('admissionCommittee.contactsTitle')}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center">
                        {contact.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {contact.title}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {contact.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-gray-700">
                          {item}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Приветственный текст */}
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
                  {t('admissionCommittee.welcomeTitle')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#023E8A]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('admissionCommittee.welcomeText1')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#0077B6]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('admissionCommittee.welcomeText2')}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Информационные разделы */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8 mb-16"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {section.title}
                    </h3>
                  </div>

                  {Array.isArray(section.content) ? (
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 text-lg leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {section.content}
                    </p>
                  )}

                  {section.directions && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="mt-6"
                    >
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">
                        {t('admissionCommittee.directionsTitle')}
                      </h4>
                      <div className="grid gap-3">
                        {section.directions.map((direction, dIndex) => (
                          <motion.div
                            key={dIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 + dIndex * 0.1 }}
                            className="flex items-center gap-3 bg-gray-50 rounded-lg p-3"
                          >
                            <div className="w-2 h-2 bg-[#023E8A] rounded-full"></div>
                            <span className="text-gray-700">{direction}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Финальное приветствие */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('admissionCommittee.finalWelcome')}
              </h2>
              <p className="text-xl opacity-90">
                {t('admissionCommittee.finalSubtitle')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionCommitteePage;