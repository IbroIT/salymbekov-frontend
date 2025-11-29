import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiEye, FiZap, FiFileText, FiActivity } from 'react-icons/fi';

const ClinicalBase = () => {
   const { t } = useTranslation();

   const animatedBalls = useMemo(() => {
      return [...Array(12)].map((_, i) => ({
         id: i,
         size: Math.random() * 120 + 60,
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         duration: 5 + Math.random() * 3,
         delay: Math.random() * 2
      }));
   }, []);

   const clinics = [
      {
         id: 1,
         title: t('clinicalBaseSub.lazmed', 'Лазмед'),
         description: t('clinicalBaseSub.lazmedDesc', 'Современная клиника лазерной медицины и эстетической хирургии'),
         icon: FiZap,
         link: '/clinical/lazmed',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 2,
         title: t('clinicalBaseSub.dordoi', 'Дордой офтальмик сервис'),
         description: t('clinicalBaseSub.dordoiDesc', 'Специализированный центр по офтальмологии с передовыми технологиями лечения глазных заболеваний'),
         icon: FiEye,
         link: '/clinical/dordoi-ophthalmic',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 3,
         title: t('clinicalBaseSub.docClinic', 'DOC university clinic'),
         description: t('clinicalBaseSub.docClinicDesc', 'Многопрофильная университетская клиника с современным оборудованием и квалифицированными специалистами'),
         icon: FiHeart,
         link: '/clinical/doc-clinic',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 4,
         title: t('clinicalBaseSub.docHospital', 'DOC university hospital'),
         description: t('clinicalBaseSub.docHospitalDesc', 'Стационарное лечение с широким спектром медицинских услуг'),
         icon: FiActivity,
         link: '/clinical/doc-hospital',
         color: 'from-blue-500 to-cyan-500'
      },
      {
         id: 5,
         title: t('clinicalBaseSub.agreements', 'Соглашения с клиниками'),
         description: t('clinicalBaseSub.agreementsDesc', 'Информация о партнерских соглашениях и договорах клинической базы'),
         icon: FiFileText,
         link: '/clinical/agreements',
         color: 'from-blue-500 to-cyan-500'
      }
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5
         }
      }
   };

   return (
      <div className="w-full relative min-h-screen bg-gray-50">
         {/* Animated gradient balls */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {animatedBalls.map((ball) => (
               <motion.div
                  key={ball.id}
                  className="absolute rounded-full opacity-10"
                  style={{
                     width: ball.size,
                     height: ball.size,
                     left: ball.left,
                     top: ball.top,
                     background: 'linear-gradient(135deg, #023E8A, #0077B6)'
                  }}
                  animate={{
                     y: [0, -30, 0],
                     x: [0, 15, 0],
                     scale: [1, 1.1, 1]
                  }}
                  transition={{
                     duration: ball.duration,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: ball.delay
                  }}
               />
            ))}
         </div>

         <div className="relative z-10 py-16 px-4">
            <div className="max-w-7xl mx-auto">
               {/* Header */}
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
               >
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">
                     {t('navbarSUB.clinical', 'Клиническая база')}
                  </h1>
               </motion.div>

               {/* Clinics Grid */}
               <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
               >
                  {clinics.map((clinic) => {
                     const IconComponent = clinic.icon;
                     return (
                        <motion.div key={clinic.id} variants={itemVariants}>
                           <Link to={clinic.link}>
                              <motion.div
                                 whileHover={{ y: -10 }}
                                 whileTap={{ scale: 0.98 }}
                                 className="group relative bg-white rounded-3xl overflow-hidden h-full cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
                              >
                                 {/* Gradient Background Overlay */}
                                 <div className={`absolute inset-0 bg-gradient-to-br ${clinic.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                 {/* Card Content */}
                                 <div className="relative p-8">
                                    {/* Icon Container */}
                                    <div className="mb-6">
                                       <motion.div
                                          whileHover={{ rotate: 360, scale: 1.1 }}
                                          transition={{ duration: 0.6 }}
                                          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${clinic.color} shadow-lg`}
                                       >
                                          <IconComponent size={40} className="text-white" />
                                       </motion.div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                                       {clinic.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                                       {clinic.description}
                                    </p>

                                    {/* Decorative Line */}
                                    <motion.div
                                       initial={{ width: "0%" }}
                                       whileHover={{ width: "100%" }}
                                       className={`h-1 bg-gradient-to-r ${clinic.color} rounded-full mb-4`}
                                    />

                                    {/* Learn More Link */}
                                    <div className="flex items-center justify-between">
                                       <span className={`text-sm font-semibold bg-gradient-to-r ${clinic.color} bg-clip-text text-transparent`}>
                                          Подробнее
                                       </span>
                                       <motion.div
                                          animate={{ x: [0, 5, 0] }}
                                          transition={{ duration: 1.5, repeat: Infinity }}
                                          className={`w-8 h-8 rounded-full bg-gradient-to-r ${clinic.color} flex items-center justify-center shadow-md`}
                                       >
                                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                          </svg>
                                       </motion.div>
                                    </div>
                                 </div>

                                 {/* Decorative Corner Elements */}
                                 <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${clinic.color} opacity-10 rounded-bl-full`}></div>
                                 <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${clinic.color} opacity-10 rounded-tr-full`}></div>
                              </motion.div>
                           </Link>
                        </motion.div>
                     );
                  })}
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default ClinicalBase;


