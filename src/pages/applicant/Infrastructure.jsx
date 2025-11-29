import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiMapPin, FiHome, FiWifi, FiBook, FiCoffee, FiActivity } from 'react-icons/fi';

const Infrastructure = () => {
  const { t, i18n } = useTranslation();

  const sections = [
    {
      id: 1,
      title: {
        ru: 'Международный факультет Медицины',
        kg: 'Эл аралык Медицина факультети',
        en: 'International Faculty of Medicine'
      },
      folder: 'first_scroll',
      description: {
        ru: 'Современный учебный корпус с новейшим оборудованием для подготовки медицинских специалистов',
        kg: 'Медициналык адистерди даярдоо үчүн заманбап жабдылган окуу корпусу',
        en: 'Modern educational building with the latest equipment for training medical specialists'
      },
      images: [
        'bc0b5825.jpg',
        'c0b9360.jpg',
        'c0b9365.jpg',
        'c0b9366.jpg',
        'c0b9381.jpg',
        'c0b9389.jpg',
        'c0b9390.jpg',
        'c0b9391.jpg',
        'c0b9392.jpg',
        'foto-na-sajt14-e1615876379850.jpg',
        'lechebnoe-delo.jpg'
      ]
    },
    {
      id: 2,
      title: {
        ru: 'Международный колледж IT и бизнеса',
        kg: 'Эл аралык IT жана бизнес коллежи',
        en: 'International College of IT and Business'
      },
      folder: 'second_scroll',
      description: {
        ru: 'Инновационный образовательный центр для подготовки IT-специалистов и бизнес-аналитиков',
        kg: 'IT адистери жана бизнес аналитиктерин даярдоо үчүн инновациялык билим берүү борбору',
        en: 'Innovative educational center for training IT specialists and business analysts'
      },
      images: [
        'bc0b2476.jpg',
        'bc0b2481.jpg',
        'bc0b2487.jpg',
        'bc0b2512.jpg',
        'bc0b2562.jpg',
        'bc0b2574.jpg',
        'bc0b2577.jpg',
        'bc0b2662.jpg',
        'bc0b2664.jpg',
        'bc0b2674.jpg',
        'bc0b2687.jpg',
        'bc0b2694.jpg',
        'bc0b2716.jpg',
        'bc0b2721.jpg',
        'bc0b2725.jpg',
        'bc0b2727.jpg',
        'bc0b2736.jpg',
        'bc0b2741.jpg',
        'bc0b2743.jpg',
        'bc0b2745.jpg',
        'photo_2022-07-18_15-21-07.jpg'
      ]
    },
    {
      id: 3,
      title: {
        ru: 'Клиника лазерной медицины "Лазмед"',
        kg: '"Лазмед" лазер медицинасы клиникасы',
        en: '"Lazmed" Laser Medicine Clinic'
      },
      folder: 'third_scroll',
      description: {
        ru: 'Современная клиническая база для практики студентов медицинского факультета',
        kg: 'Медицина факультетинин студенттери үчүн заманбап клиникалык база',
        en: 'Modern clinical base for medical faculty students practice'
      },
      images: [
        'c0b7060-1.jpg',
        'c0b7062-1.jpg',
        'c0b7067-1.jpg',
        'c0b7075-1.jpg',
        'c0b7079-1.jpg',
        'c0b7091.jpg',
        'c0b7098-1.jpg',
        'c0b7112-1.jpg',
        'c0b7117-1 (1).jpg',
        'c0b7117-1.jpg',
        'c0b7121 (1).jpg',
        'kampus_klinika2 (1).jpg',
        'kampus_klinika2.jpg',
        'o-klinike2.jpg',
        'o-klinike4.jpg',
        'o-klinike6.jpg',
        'o-klinike8.jpg'
      ]
    },
    {
      id: 4,
      title: {
        ru: 'Дордой офтальмик сервис',
        kg: 'Дордой офтальмик сервис',
        en: 'Dordoy Ophthalmic Service'
      },
      folder: 'fourth_scroll',
      description: {
        ru: 'Специализированная офтальмологическая клиника для обучения и практики',
        kg: 'Окутуу жана практика үчүн атайын офтальмологиялык клиника',
        en: 'Specialized ophthalmological clinic for training and practice'
      },
      images: [
        'c0b5970.jpg',
        'c0b5975.jpg',
        'c0b5977.jpg',
        'c0b5983.jpg',
        'c0b5990.jpg',
        'c0b5996.jpg',
        'c0b6001.jpg',
        'c0b7136-scaled.jpg',
        'c0b7137-scaled.jpg',
        'c0b7138-scaled.jpg',
        'c0b7139-scaled.jpg',
        'c0b7140.jpg',
        'c0b7142-scaled.jpg',
        'c0b7144-scaled.jpg',
        'c0b7146.jpg',
        'c0b7149-scaled.jpg',
        'c0b7150.jpg',
        'c0b7151-scaled.jpg',
        'c0b7152.jpg',
        'c0b7154 (1).jpg',
        'c0b7154.jpg',
        'c0b7155.jpg'
      ]
    },
    {
      id: 5,
      title: {
        ru: 'DOC university clinic',
        kg: 'DOC университет клиникасы',
        en: 'DOC University Clinic'
      },
      folder: 'fifth_scroll',
      description: {
        ru: 'Университетская клиника с широким спектром медицинских услуг',
        kg: 'Кеңири медициналык тейлөө спектри бар университет клиникасы',
        en: 'University clinic with a wide range of medical services'
      },
      images: [
        'bc0b1231.jpg',
        'bc0b1244.jpg',
        'bc0b1395.jpg',
        'bc0b3326.jpg',
        'bc0b3346.jpg',
        'bc0b3355.jpg',
        'bc0b3401.jpg',
        'bc0b3447.jpg',
        'bc0b3532.jpg',
        'bc0b3564.jpg',
        'bc0b3580 (1).jpg',
        'bc0b3580.jpg',
        'bc0b3599.jpg',
        'bc0b3746.jpg',
        'bc0b3748.jpg',
        'bc0b3752.jpg',
        'bc0b3761.jpg',
        'bc0b3788 (1).jpg',
        'bc0b3788.jpg',
        'bc0b3807.jpg',
        'bc0b6481.jpg',
        'bc0b9662.jpg'
      ]
    },
    {
      id: 6,
      title: {
        ru: 'DOC university hospital',
        kg: 'DOC университет ооруканасы',
        en: 'DOC University Hospital'
      },
      folder: 'six_scroll',
      description: {
        ru: 'Многопрофильный университетский госпиталь для клинической практики студентов',
        kg: 'Студенттердин клиникалык практикасы үчүн көп профилдүү университет ооруканасы',
        en: 'Multidisciplinary university hospital for clinical practice of students'
      },
      images: [
        'bc0b3326.jpg',
        'bc0b3346.jpg',
        'bc0b3355.jpg',
        'bc0b3401.jpg',
        'bc0b3447-1.jpg',
        'bc0b3532.jpg',
        'bc0b3564.jpg',
        'bc0b3580.jpg',
        'bc0b3599.jpg',
        'bc0b3746.jpg',
        'bc0b3748.jpg',
        'bc0b3752.jpg',
        'bc0b3761.jpg',
        'bc0b3788.jpg',
        'bc0b3807.jpg',
        'bc0b6481 (1).jpg'
      ]
    },
    {
      id: 7,
      title: {
        ru: 'Студенческое общежитие',
        kg: 'Студенттер жатаканасы',
        en: 'Student Dormitory'
      },
      folder: 'seven_scroll',
      description: {
        ru: 'Комфортабельное общежитие с современными удобствами для студентов',
        kg: 'Студенттер үчүн заманбап ыңгайлуулуктары бар ыңгайлуу жатакана',
        en: 'Comfortable dormitory with modern amenities for students'
      },
      images: [
        'bc0b0302.jpg',
        'bc0b0309.jpg',
        'bc0b0312.jpg',
        'bc0b0335.jpg',
        'bc0b0354.jpg',
        'bc0b0398.jpg',
        'bc0b0424.jpg',
        'bc0b0429.jpg'
      ]
    }
  ];

  const [loadedImages, setLoadedImages] = useState({});

  // Animated background balls
  const animatedBalls = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 60,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 4,
      delay: Math.random() * 3
    }));
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const imagesMap = {};

      for (const section of sections) {
        if (section.images.length > 0) {
          imagesMap[section.folder] = section.images.map(
            img => `/src/assets/applicant/infastructure/${section.folder}/${img}`
          );
        } else {
          imagesMap[section.folder] = [];
        }
      }

      setLoadedImages(imagesMap);
    };

    loadImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">

      {/* Animated gradient balls */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {animatedBalls.map((ball) => (
          <motion.div
            key={ball.id}
            className="absolute rounded-full opacity-5"
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
              delay: ball.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Additional floating bubbles */}
      {animatedBalls.slice(0, 10).map((ball) => (
        <motion.div
          key={`floating-${ball.id}`}
          className="fixed rounded-full opacity-3 pointer-events-none z-0"
          style={{
            width: ball.size * 0.7,
            height: ball.size * 0.7,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'linear-gradient(135deg, #0077B6, #48CAE4)'
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: ball.duration * 1.5,
            delay: ball.delay * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Language Switcher */}
      <motion.div
        className="fixed top-6 right-6 z-50 flex gap-2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => i18n.changeLanguage('ru')}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${i18n.language === 'ru'
            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
            : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          RU
        </button>
        <button
          onClick={() => i18n.changeLanguage('kg')}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${i18n.language === 'kg'
            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
            : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          KG
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${i18n.language === 'en'
            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
            : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          EN
        </button>
      </motion.div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('infrastructure.title', 'Инфраструктура университета')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('infrastructure.subtitle', 'Современный кампус с развитой инфраструктурой для комфортного обучения и студенческой жизни')}
          </p>
        </motion.div>

        {/* Infrastructure Sections with Photo Galleries */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              {/* Section Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  {section.title[i18n.language] || section.title.ru}
                </h2>
                <p className="text-lg opacity-90">
                  {section.description[i18n.language] || section.description.ru}
                </p>
              </div>

              {/* Photo Scroll Gallery */}
              {loadedImages[section.folder] && loadedImages[section.folder].length > 0 && (
                <div className="relative overflow-hidden">
                  <motion.div
                    className="flex gap-4 p-6"
                    animate={{
                      x: [0, -1920],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: loadedImages[section.folder].length * 5,
                        ease: "linear",
                      },
                    }}
                  >
                    {/* Duplicate images for seamless loop */}
                    {[...loadedImages[section.folder], ...loadedImages[section.folder]].map((img, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0 w-[600px] h-[400px] rounded-xl overflow-hidden shadow-lg"
                      >
                        <img
                          src={img}
                          alt={`${section.title[i18n.language] || section.title.ru} ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/600x400/0077B6/FFFFFF?text=' + encodeURIComponent(section.title[i18n.language] || section.title.ru);
                          }}
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* Loading state */}
              {!loadedImages[section.folder] && (
                <div className="p-12 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-600 mt-4">
                    {t('infrastructure.loading', 'Загрузка фотографий...')}
                  </p>
                </div>
              )}

              {/* No images state */}
              {loadedImages[section.folder] && loadedImages[section.folder].length === 0 && (
                <div className="p-12 text-center text-gray-500">
                  <p>{t('infrastructure.noImages', 'Фотографии скоро будут добавлены')}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;  