import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaArrowRight,
  FaGraduationCap,
  FaUserMd,
  FaHospital,
  FaHeart,
  FaUsers,
  FaBook,
  FaFlask,
  FaStethoscope,
  FaGlobe,
  FaAward,
  FaLanguage,
  FaChalkboardTeacher,
  FaMicroscope
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const InternationalFaculty = () => {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState(null);

  // Статистика факультета
  const stats = [
    { number: "50+", label: t('internationalFaculty.stats.professors'), icon: <FaUserMd className="text-[#023E8A]" /> },
    { number: "1000+", label: t('internationalFaculty.stats.students'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "15", label: t('internationalFaculty.stats.labs'), icon: <FaFlask className="text-[#023E8A]" /> },
    { number: "10", label: t('internationalFaculty.stats.hospitals'), icon: <FaHospital className="text-[#023E8A]" /> }
  ];

  // Преимущества факультета
  const benefits = [
    {
      icon: <FaGlobe className="text-white" size={24} />,
      title: t('internationalFaculty.benefits.international.title'),
      description: t('internationalFaculty.benefits.international.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaBook className="text-white" size={24} />,
      title: t('internationalFaculty.benefits.education.title'),
      description: t('internationalFaculty.benefits.education.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaStethoscope className="text-white" size={24} />,
      title: t('internationalFaculty.benefits.practice.title'),
      description: t('internationalFaculty.benefits.practice.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHeart className="text-white" size={24} />,
      title: t('internationalFaculty.benefits.care.title'),
      description: t('internationalFaculty.benefits.care.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  // Международные партнеры
  const partners = [
    {
      name: "Harvard Medical School",
      country: "USA",
      icon: <FaAward className="text-[#023E8A]" />
    },
    {
      name: "University of Oxford",
      country: "UK", 
      icon: <FaGraduationCap className="text-[#023E8A]" />
    },
    {
      name: "Karolinska Institute",
      country: "Sweden",
      icon: <FaMicroscope className="text-[#023E8A]" />
    },
    {
      name: "University of Tokyo",
      country: "Japan",
      icon: <FaLanguage className="text-[#023E8A]" />
    }
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
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
        {/* Герой секция - белый фон с синим текстом */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaGlobe className="text-xl" />
            <span className="font-semibold">{t('internationalFaculty.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('internationalFaculty.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-[#023E8A] font-medium">
            {t('internationalFaculty.hero.subtitle')}
          </p>
          
          {/* Кнопка Высшая школа медицины */}
          <motion.a
            href="https://www.su-medical-school.com/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-xl transition-all duration-300"
          >
            {t('internationalFaculty.higherSchoolButton')}
            <FaArrowRight className="ml-3" />
          </motion.a>
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

        {/* Преимущества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('internationalFaculty.whyChoose')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('internationalFaculty.whyChooseDescription')}
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

        {/* Блок с фотографией внизу */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative rounded-3xl overflow-hidden mb-12"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://salymbekov.com/wp-content/uploads/2021/03/bc0b5813.jpg)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#023E8A]/80 to-[#0077B6]/70" />
          </div>
          
          <div className="relative text-center text-white py-16 px-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Современная инфраструктура для обучения
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Оснащенные лаборатории и клинические базы для практической подготовки
            </p>
          </div>
        </motion.div>

       
       

        {/* Информационные секции */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="space-y-6 mb-12"
        >
          {['about', 'staff', 'facilities', 'values', 'policy'].map((section, index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(section)}
                className="w-full p-8 text-left"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {t(`internationalFaculty.${section}.title`)}
                  </h2>
                  <motion.div
                    animate={{ rotate: expandedSection === section ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#023E8A]"
                  >
                    <FaArrowRight />
                  </motion.div>
                </div>
              </button>
              
              {expandedSection === section && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-8 pb-8 border-t border-gray-200"
                >
                  <div className="pt-6 space-y-4">
                    {t(`internationalFaculty.${section}.description1`) && (
                      <p className="text-gray-700 leading-relaxed">
                        {t(`internationalFaculty.${section}.description1`)}
                      </p>
                    )}
                    {t(`internationalFaculty.${section}.description2`) && (
                      <p className="text-gray-700 leading-relaxed">
                        {t(`internationalFaculty.${section}.description2`)}
                      </p>
                    )}
                    {t(`internationalFaculty.${section}.description`) && (
                      <p className="text-gray-700 leading-relaxed">
                        {t(`internationalFaculty.${section}.description`)}
                      </p>
                    )}
                    
                    {section === 'facilities' && (
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {Array.from({ length: 8 }, (_, i) => i + 1).map((itemNum) => {
                          const item = t(`internationalFaculty.facilities.list.item${itemNum}`);
                          return item && (
                            <div key={itemNum} className="flex items-center gap-3 text-gray-700">
                              <div className="w-2 h-2 bg-[#023E8A] rounded-full" />
                              {item}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    
                    {t(`internationalFaculty.${section}.description3`) && (
                      <p className="text-gray-700 leading-relaxed mt-4">
                        {t(`internationalFaculty.${section}.description3`)}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('internationalFaculty.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('internationalFaculty.cta.description')}
          </p>
          <motion.a
            href="https://www.su-medical-school.com/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
          >
            {t('internationalFaculty.cta.applyNow')}
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default InternationalFaculty;