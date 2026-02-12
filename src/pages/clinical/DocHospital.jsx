import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiExternalLink, FiMapPin, FiPhone, FiGlobe, FiClock } from 'react-icons/fi';
import MainImg from '../../assets/clinical/doc-hospital/main.jpg';

const scrollingImages = Object.values(
  import.meta.glob('../../assets/clinical/doc-hospital/scrolling/*.{jpg,jpeg,png,webp}', { eager: true })
).map(m => m.default);

const DocHospital = () => {
  const { t } = useTranslation();
  
  const tags = useMemo(() => [
    'Многопрофильная клиника',
    'Современное оборудование',
    'Квалифицированный персонал',
    'Международные стандарты',
    'Университетская база',
    'Качество услуг'
  ], []);
  
  const animatedBalls = useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      id: i,
      size: Math.random() * 80 + 40,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 3
    }));
  }, []);

  return (
    <div className="w-full relative">
      {/* Animated gradient balls */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* HERO - обновлённый без фото */}
      <section className="relative overflow-hidden h-[50vh] min-h-[400px] flex items-center text-white">
        {/* Градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7]" />

        <div className="relative container mx-auto px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-5xl drop-shadow-xl"
          >
            <span className="bg-linear-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6] bg-clip-text text-transparent">
              {t('clinical.docHospital.hero.title', 'DOC University Hospital')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed mb-8"
          >
            {t('clinical.docHospital.hero.description', 'Университетская клиника «DOC University Clinic» является новым многопрофильным медицинским центром, предоставляющий качественные медицинские услуги для широких слоев в соответствии с государственными и международными стандартами. Согласно лицензии данная клиника имеет право проводить диагностику и лечение терапевтических, кардиологических, пульмонологических, педиатрических, неврологических и стоматологических заболеваний терапевтического профиля, диагностика, консервативное и оперативное лечение хирургических, гинекологических, урологических и лор заболеваний с оказанием анестезиологических и реанимационных пособий, проведение функциональной диагностики (УЗИ) в амбулаторных и стационарных условиях. Клиника полностью готова для оказания вышеперечисленных медицинских услуг для граждан страны.')}
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 py-16 space-y-20">

        {/* DIRECTOR */}
        <section className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent"
          >
            {t('clinical.docHospital.director.title', 'Руководитель')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-200 p-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Фото руководителя */}
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
                <img src={MainImg} alt={t('clinical.docHospital.director.name', 'Иманалиев Чынгыз Майрамбекович')} className="w-full h-full object-cover" />
              </div>
              {/* Текст */}
              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                  {t('clinical.docHospital.director.name', 'Иманалиев Чынгыз Майрамбекович')}
                </h3>
                <p className="text-slate-600 text-lg font-medium">
                  {t('clinical.docHospital.director.position', 'Врач-уролог, генеральный директор «DOC university clinic»')}
                </p>
                <p className="text-slate-700 leading-relaxed text-lg wrap-break-word">
                  {t('clinical.docHospital.director.quote', 'Необходимо отметить, что клиника является частью клинической базы Университета и является показателем дальнейшего его развития. Усиление клинической базы усиливает не только систему здравоохранения страны, но и вносит существенный вклад в развитие экспорта высшего медицинского образования и привлечения инвестиций в страну.')}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SCROLLING GALLERY */}
        {scrollingImages.length > 0 && (
          <section className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent"
            >
              {t('clinical.docHospital.gallery.title', 'Атмосфера клиники')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-slate-600 max-w-prose"
            >
              {t('clinical.docHospital.gallery.description', 'Фото клиники, оборудования и медицинских кабинетов. Горизонтальная галерея с плавным скроллом.')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white to-transparent z-10" />
              <div className="flex gap-8 overflow-x-auto py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x">
                {scrollingImages.map((src, i) => (
                  <figure key={i} className="snap-start shrink-0 w-lg h-80 md:w-160 md:h-96 rounded-4xl overflow-hidden shadow-2xl relative group">
                    <img src={src} alt="DOC University Hospital" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </figure>
                ))}
              </div>
            </motion.div>
          </section>
        )}

      </div>
    </div>
  );
};

export default DocHospital;