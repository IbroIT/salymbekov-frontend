import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { getAcademicCouncil } from '../../../api';
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
  const { t, i18n } = useTranslation();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getAcademicCouncil(i18n.language);
        setMembers(data.results);
      } catch (error) {
        console.error('Failed to fetch academic council:', error);
      }
    };

    fetchMembers();
  }, [i18n.language]);

  // Статистика совета
  const stats = [
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
        {/* Герой секция  */}
        <section className="relative py-20 ">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6">
              <FaUsers className="text-xl" />
              <span className="font-semibold">{t('academicCouncil.badge')}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {t('academicCouncil.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Отдельный блок с изображением */}
        <section className="relative py-16 ">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl opacity-10 blur-lg"></div>
                <img 
                  src="https://salymbekov.com/wp-content/uploads/2021/03/sotrudniki.jpg"
                  alt={t('academicCouncil.councilImageAlt')}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Основной контент */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          {/* Статистика */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Описание академического совета */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaGraduationCap className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {t('academicCouncil.missionTitle')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('academicCouncil.description1')}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaBook className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {t('academicCouncil.responsibilitiesTitle')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('academicCouncil.description2')}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaGlobe className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {t('academicCouncil.standardsTitle')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('academicCouncil.description3')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Состав совета */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {t('academicCouncil.compositionTitle')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
              </div>

              {/* Международный медицинский факультет */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center">
                    <FaUniversity className="text-white text-lg" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {t('academicCouncil.facultyTitle')}
                  </h3>
                </div>
              </div>

              {/* Члены совета */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center">
                    <FaChalkboardTeacher className="text-white text-lg" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {t('academicCouncil.membersTitle')}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {members.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ 
                        opacity: 0, 
                        y: 50,
                        rotateY: -15,
                        scale: 0.8
                      }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        rotateY: 0,
                        scale: 1
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -15,
                        rotateY: 5,
                        transition: { duration: 0.3 }
                      }}
                      className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 text-center group overflow-hidden"
                    >
                      {/* Фоновый градиент при hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/5 to-[#0077B6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                      
                      {/* Декоративный элемент */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Фото с эффектами */}
                        <div className="relative mb-6">
                          <motion.div
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 5,
                              transition: { duration: 0.3 }
                            }}
                            className="relative inline-block"
                          >
                            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-[#023E8A] to-[#0077B6] shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            
                            {/* Пульсирующий эффект */}
                            <div className="absolute inset-0 rounded-full border-2 border-[#023E8A] opacity-0 group-hover:opacity-30 group-hover:animate-ping"></div>
                          </motion.div>
                        </div>
                        
                        {/* Имя */}
                        <h4 className="text-xl font-bold text-gray-800 mb-2 leading-tight group-hover:text-[#023E8A] transition-colors duration-300">
                          {member.name}
                        </h4>
                        
                        {/* Должность */}
                        {member.role && (
                          <p className="text-sm text-[#0077B6] font-semibold bg-gradient-to-r from-[#023E8A]/10 to-[#0077B6]/10 px-3 py-1 rounded-full inline-block">
                            {member.role}
                          </p>
                        )}
                        
                        {/* Декоративная линия */}
                        <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Основание */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-[#023E8A]">
                  <p className="text-lg text-gray-700 font-semibold">
                    {t('academicCouncil.basis')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Информационный блок */}
          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('academicCouncil.infoTitle')}
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                {t('academicCouncil.infoDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCouncilPage;