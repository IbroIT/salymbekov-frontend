import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FiExternalLink, FiMapPin, FiPhone, FiGlobe, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import MainImg from '../../assets/clinical/doc-university/main.jpg';

const scrollingImages = Object.values(
  import.meta.glob('../../assets/clinical/doc-university/scrolling/*.{jpg,jpeg,png,webp}', { eager: true })
).map(m => m.default);

const DocClinic = () => {
  const { t } = useTranslation();
  
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
      {/* HERO обновлён: высота, дополнительный градиент, акцентированный заголовок */}
      <section className="relative overflow-hidden h-[85vh] min-h-[640px] flex items-center text-white">
        <div className="absolute inset-0">
          <img src={MainImg} alt="DOC University Clinic" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-br from-indigo-900/70 via-blue-900/40 to-cyan-800/30 mix-blend-screen" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-5xl drop-shadow-xl"
          >
            <span className="bg-linear-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t('clinical.docClinic.hero.titlePart1', 'Университетская клиника')}
            </span>{' '}
            {t('clinical.docClinic.hero.titlePart2', 'DOC University Clinic')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed"
          >
            {t('clinical.docClinic.hero.description', 'Новый многопрофильный медицинский центр, предоставляющий качественные медицинские услуги в соответствии с государственными и международными стандартами.')}
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              t('clinical.docClinic.hero.tags.multidisciplinary', 'Многопрофильная клиника'),
              t('clinical.docClinic.hero.tags.equipment', 'Современное оборудование'),
              t('clinical.docClinic.hero.tags.staff', 'Квалифицированный персонал'),
              t('clinical.docClinic.hero.tags.standards', 'Международные стандарты')
            ].map((tag, i) => (
              <span key={i} className="bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12 text-gray-100 fill-current"><path d="M0 0h1200v46.29c0 0-120 25.95-600 25.95S0 46.29 0 46.29V0z" /></svg>
      </section>

      <div className="container mx-auto px-6 lg:px-8 py-16 space-y-20">

        {/* ABOUT */}
        <section className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {t('clinical.docClinic.about.title', 'О клинике')}
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-200 p-8">
            <p className="text-slate-800 leading-relaxed text-lg wrap-break-word">
              {t('clinical.docClinic.about.text', 'Университетская клиника "DOC University Clinic" является новым многопрофильным медицинским центром, предоставляющий качественные медицинские услуги для широких слоев в соответствии с государственными и международными стандартами. Согласно лицензии данная клиника имеет право проводить диагностику и лечение терапевтических, кардиологических, пульмонологических, педиатрических, неврологических и стоматологических заболеваний терапевтического профиля, диагностика, консервативное и оперативное лечение хирургических, гинекологических, урологических и лор заболеваний с оказанием анестезиологических и реанимационных пособий, проведение функциональной диагностики (УЗИ) в амбулаторных и стационарных условиях. Клиника полностью готова для оказания вышеперечисленных медицинских услуг для граждан страны.')}
            </p>
          </div>
        </section>

        {/* DIRECTOR */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {t('clinical.docClinic.director.title', 'Руководитель')}
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-200 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Фото руководителя */}
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
                <img src={MainImg} alt={t('clinical.docClinic.director.name', 'Монолов Нурбек Кытайбекович')} className="w-full h-full object-cover" />
              </div>

              {/* Текст */}
              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                  {t('clinical.docClinic.director.name', 'Монолов Нурбек Кытайбекович')}
                </h3>
                <p className="text-slate-600 text-lg font-medium">
                  {t('clinical.docClinic.director.position', 'Кандидат медицинских наук, PhD, заведующий кафедры Клинико-Морфологических Дисциплин')}
                </p>
                <p className="text-slate-700 leading-relaxed text-lg wrap-break-word">
                  {t('clinical.docClinic.director.quote', 'Высококвалифицированный медицинский персонал вкупе с новым инновационным медицинским оборудования готов оказывать указанный спектр медицинских услуг и направлений на высоком профессиональном уровне для граждан Кыргызстана и будет вносить весомый вклад в развитие системы здравоохранения и укрепления здоровья населения страны.')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SCROLLING GALLERY */}
        {scrollingImages.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t('clinical.docClinic.gallery.title', 'Атмосфера клиники')}
            </h2>
            <p className="text-slate-600 max-w-prose">
              {t('clinical.docClinic.gallery.description', 'Фото клиники, оборудования и медицинских кабинетов. Горизонтальная галерея с плавным скроллом.')}
            </p>
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white to-transparent z-10" />
              <div className="flex gap-8 overflow-x-auto py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x">
                {scrollingImages.map((src, i) => (
                  <figure key={i} className="snap-start shrink-0 w-96 h-64 rounded-3xl overflow-hidden shadow-lg relative group">
                    <img src={src} alt="DOC University Clinic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CONTACTS */}
        <section className="grid md:grid-cols-2 gap-10 items-start bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-lg">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t('clinical.docClinic.contacts.title', 'Контактные данные')}
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-indigo-600 mt-1" />
                <div>
                  <p className="font-semibold">{t('clinical.docClinic.contacts.address', 'Адрес')}</p>
                  <p className="text-slate-700">{t('clinical.docClinic.contacts.addressValue', 'г. Бишкек')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="text-rose-600 mt-1" />
                <div>
                  <p className="font-semibold">{t('clinical.docClinic.contacts.phone', 'Телефон')}</p>
                  <p className="text-slate-700">{t('clinical.docClinic.contacts.phoneValue', 'Уточните по карте')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiClock className="text-yellow-600 mt-1" />
                <div>
                  <p className="font-semibold">{t('clinical.docClinic.contacts.hours', 'Режим работы')}</p>
                  <p className="text-slate-700">{t('clinical.docClinic.contacts.hoursValue', 'Пн–Пт: 09:00–18:00')}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://maps.app.goo.gl/ewmr5ZDDRbf2yfZ69"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium bg-linear-to-r from-indigo-600 to-cyan-600 text-white px-4 py-2 rounded-full hover:from-indigo-700 hover:to-cyan-700 shadow-sm transition-transform hover:scale-105"
              >
                <span className="text-xs bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded">GMaps</span>
                <span className="font-semibold">Google Maps</span>
                <FiExternalLink className="opacity-80" />
              </a>
            </div>
          </div>
          <div className="w-full h-72 rounded-2xl border border-slate-200 shadow-inner overflow-hidden">
            <iframe
              title="DOC University Clinic на карте"
              src="https://maps.google.com/maps?q=%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
            />
          </div>
        </section>

      </div>
    </div>
  );
};

export default DocClinic;
