import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';
import DoctorImg from '../../assets/clinical/shaltakova-gulbu-chalovna.jpg';
import HeroImg from '../../assets/clinical/o-klinike5-1024x682.jpg';
import { FiPhone, FiMapPin, FiClock, FiGlobe, FiExternalLink } from 'react-icons/fi';

// Импорт всех изображений для скроллинга (результаты процедур)
const scrollingImages = Object.values(
  import.meta.glob('../../assets/clinical/scrolling/*.{jpg,jpeg,png,webp}', { eager: true })
).map(m => m.default);

const Lazmed = () => {
  const { t } = useTranslation();

  const services = useMemo(() => [
    {
      key: 'laserSurgery',
      title: t('lazmed.services.laserSurgery.title', 'Лазерная хирургия'),
      icon: 'M12 2a10 10 0 1010 10A10 10 0 0012 2z',
      description: t('lazmed.services.laserSurgery.description', 'Уникальные свойства лазерного излучения помогают в борьбе как с эстетическими несовершенствами (бородавки, родинки), так и со сложными заболеваниями — например, деформациями стопы. Лазерные методики безопасны и точны.')
    },
    {
      key: 'laparoscopy',
      title: t('lazmed.services.laparoscopy.title', 'Лапароскопическая хирургия'),
      icon: 'M3 3h18v18H3z',
      description: t('lazmed.services.laparoscopy.description', 'Современный метод оперативного вмешательства через небольшие разрезы (0,5–1,5 см). Минимальное повреждение тканей, более быстрая реабилитация и короткий срок выписки.')
    },
    {
      key: 'plastic',
      title: t('lazmed.services.plastic.title', 'Пластическая хирургия'),
      icon: 'M12 22s8-4 8-10V6',
      description: t('lazmed.services.plastic.description', 'Пластическая хирургия позволяет корректировать форму носа, ушей, бровей, подбородка, губ; устранять морщины и дефекты фигуры. Используются точные методики для долговременного результата.')
    },
    {
      key: 'dermatology',
      title: t('lazmed.services.dermatology.title', 'Диагностика и лечение кожи'),
      icon: 'M12 2l6 6-6 6-6-6 6-6z',
      description: t('lazmed.services.dermatology.description', 'Комплексная диагностика кожных заболеваний с индивидуальным планом лечения (медикаментозная терапия, физиотерапия, лазерные методики и косметологические решения).')
    },
    {
      key: 'ent',
      title: t('lazmed.services.ent.title', 'ЛОР (ухо-горло-нос)'),
      icon: 'M7 7h10v10H7z',
      description: t('lazmed.services.ent.description', 'Диагностика и лечение заболеваний уха, горла и носа — важные направления, требующие точного подхода из-за анатомической близости к головному мозгу. Проводится комплексное лечение с учетом современных стандартов.')
    },
    {
      key: 'urology',
      title: t('lazmed.services.urology.title', 'Урология'),
      icon: 'M12 3v18',
      description: t('lazmed.services.urology.description', 'Консервативное и оперативное урологическое лечение. Включает индивидуальное медикаментозное лечение с учётом чувствительности к антибиотикам и современные лазерные методы.')
    },
    {
      key: 'massage',
      title: t('lazmed.services.massage.title', 'Массаж'),
      icon: 'M4 12h16',
      description: t('lazmed.services.massage.description', 'Широкий спектр массажных техник — до 15 видов массажа, направленных на восстановление и улучшение состояния опорно-двигательной системы и общего самочувствия.')
    },
    {
      key: 'manual',
      title: t('lazmed.services.manual.title', 'Мануальная терапия'),
      icon: 'M12 8v8',
      description: t('lazmed.services.manual.description', 'Мануальная терапия — лечение руками при проблемах позвоночника, суставов, головных болей и нарушениях осанки. Эффективный метод для восстановления баланса в организме.')
    },
    {
      key: 'ultrasound',
      title: t('lazmed.services.ultrasound.title', '3D/4D УЗИ'),
      icon: 'M5 12h14',
      description: t('lazmed.services.ultrasound.description', 'Современная ультразвуковая диагностика в 3D/4D-режиме позволяет увидеть объёмное изображение плода в реальном времени, а цветовая доплерография оценивает кровоток и состояние плода.')
    },
    {
      key: 'laboratory',
      title: t('lazmed.services.laboratory.title', 'Лаборатория'),
      icon: 'M12 4l6 6-6 6-6-6 6-6z',
      description: t('lazmed.services.laboratory.description', 'Кабинет современной лабораторной диагностики с широким спектром исследований и быстрыми результатами — основа качественной медицинской помощи.')
    },
    {
      key: 'gynecology',
      title: t('lazmed.services.gynecology.title', 'Гинекология'),
      icon: 'M10 8h4v8h-4z',
      description: t('lazmed.services.gynecology.description', 'Профессиональная женская консультация, комплексная диагностика и передовые методы лечения гинекологических заболеваний, включая лазерные технологии.')
    },
    {
      key: 'therapy',
      title: t('lazmed.services.therapy.title', 'Терапия'),
      icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z',
      description: t('lazmed.services.therapy.description', 'Первичная медицинская помощь, диагностика заболеваний, назначение лечения и направление к узким специалистам при необходимости.')
    }
  ], [t]);

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
      {/* HERO обновлён */}
      <section className="relative overflow-hidden h-[85vh] min-h-[640px] flex items-center text-white">
        <div className="absolute inset-0">
          <img src={HeroImg} alt="О клинике Лазмед" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-br from-indigo-900/70 via-blue-900/40 to-cyan-800/30 mix-blend-screen" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 tracking-tight drop-shadow-xl max-w-5xl"
            >
              <span className="bg-linear-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">{t('lazmed.heroTitle', 'Клиника Лазерной Медицины — Лазмед')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto lg:mx-0 text-slate-100"
            >
              {t('lazmed.description', 'Современная клиника лазерной и эстетической медицины — передовые методики, комфорт и индивидуальный подход.')}
            </motion.p>
          </div>

          <div className="hidden lg:block w-1/2" />
        </div>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12 text-gray-100 fill-current"><path d="M0 0h1200v46.29c0 0-120 25.95-600 25.95S0 46.29 0 46.29V0z" /></svg>
      </section>

      <div className="container mx-auto py-16 space-y-20 px-6 lg:px-8">

        {/* ABOUT */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">{t('lazmed.aboutTitle', 'О клинике "Лазмед"')}</h2>
            <div className="text-slate-700 text-lg leading-relaxed max-w-prose space-y-4">
              <p>
                {t('lazmed.aboutText1', 'Медицинская клиника «Лазмед» оборудована современным медицинским оборудованием и была основана в 2010 году с ориентацией на предоставление высококачественных профессиональных медицинских услуг для населения. Клиника является передовым медицинским учреждением при Университете Салымбекова и сочетает высокий профессионализм врачей с индивидуальным подходом к пациентам.')}
              </p>

              <p>
                {t('lazmed.aboutText2', 'На базе клиники функционирует современный операционный блок, рассчитанная на 7 человек послеоперационная палата, перевязочная, ординаторская, массажный кабинет, процедурный кабинет, кабинеты врачей по специализациям (гинеколог, ЛОР, уролог, дерматокосметолог), а также служебные помещения (сестра-хозяйка и др.).')}
              </p>

              <p>
                {t('lazmed.aboutText3', 'Наша цель — предоставить пациенту комплексный путь от диагностики до реабилитации, используя сертифицированное оборудование и современные клинические протоколы лечения.')}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              {[t('lazmed.tag1', 'Опытные врачи'), t('lazmed.tag2', 'Современное оборудование'), t('lazmed.tag3', 'Индивидуальный подход')].map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-sm font-medium text-white/90 shadow-sm">{tag}</span>
              ))}
            </div>
          </div>

          <Card className="rounded-3xl shadow-xl overflow-hidden border border-slate-200 bg-white/80 backdrop-blur-sm" variant="default">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="w-56 h-80 md:w-72 md:h-96 shrink-0 rounded-3xl overflow-hidden shadow-md">
                  <img src={DoctorImg} alt="Шалтакова Гулбу Чаловна" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-snug wrap-break-word">{t('lazmed.directorTitle', 'Шалтакова Гулбу Чаловна — основатель клиники')}</h3>
                  <p className="text-slate-700 text-base md:text-lg wrap-break-word">{t('lazmed.directorPosition', 'Хирург, кандидат медицинских наук, высококвалифицированный врач в области лазерной медицины и эстетики.')}</p>
                  <div className="mt-4 space-y-3 text-slate-700 text-sm md:text-base leading-relaxed">
                    <p className="wrap-break-word">{t('lazmed.directorText1', 'Главный врач клиники, инициатор создания Лазмед и один из ведущих специалистов по лазерной терапии. Обладает большим опытом хирургической практики и занимается внедрением современных методик лечения и эстетической медицины.')}</p>
                    <p className="wrap-break-word">{t('lazmed.directorText2', 'Под её руководством клиника развила профильные направления: лазерная хирургия, гинекологические и урологические услуги, дермато-косметологическая помощь, диагностические и лабораторные исследования.')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* SERVICES */}
        <section id="services" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">{t('lazmed.servicesTitle', 'Процедуры и услуги')}</h2>
            <p className="text-slate-600 max-w-prose">{t('lazmed.servicesDesc', 'Все процедуры выполняются с соблюдением стандартов безопасности и качества.')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="group relative bg-white/80 hover:bg-white backdrop-blur-sm border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition cursor-pointer flex items-start gap-4 overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-inner shrink-0">
                  <svg viewBox="0 0 24 24" width="20" height="20" className="opacity-90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={item.icon} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-slate-900 font-semibold text-lg leading-tight wrap-break-word mb-3">{item.title}</p>
                  <div className="text-sm text-slate-600 leading-relaxed wrap-break-word">
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-3xl ring-0 group-hover:ring-1 ring-indigo-200/60 transition"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SCROLLING GALLERY */}
        {scrollingImages.length > 0 && (
          <section className="mt-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('lazmed.galleryTitle', 'Результаты и атмосфера')}</h3>
            <p className="text-slate-600 mb-4 max-w-prose">{t('lazmed.galleryDesc', 'Фото из клиники и примеры состояний после проведённых процедур. Пролистайте галерею горизонтально.')}</p>
            <div className="relative">
              {/* Градиентные маски по краям */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-white to-transparent z-10"></div>
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10"></div>
              <div className="flex gap-8 overflow-x-auto py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x">
                {scrollingImages.map((src, i) => (
                  <figure
                    key={i}
                    className="snap-start shrink-0 w-120 h-72 md:w-136 md:h-80 rounded-4xl overflow-hidden shadow-xl relative group"
                  >
                    <img
                      src={src}
                      alt="Фото клиники"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Бордер и белый фон удалены */}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* EQUIPMENT */}
        <section className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">{t('lazmed.equipmentTitle', 'Современное оборудование')}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Гинекологические установки и оборудование',
              'Кольпоскопы (видеокольпоскопия)',
              'Вакуумный роликовый массажный аппарат',
              'Лапароскопический аппарат для оперативного доступа',
              'Лазерные установки (удаление бородавок, папиллом, кондилом)',
              'Аппараты искусственной вентиляции лёгких (ИВЛ)',
              'Дефибрилляторы и кардиомониторы'
            ].map((item, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition">
                <h4 className="font-semibold text-slate-800">{item}</h4>
                <p className="text-sm text-slate-600 mt-2">{t('lazmed.equipmentDesc', 'Высокоточное оборудование от мировых производителей, соответствующее международным стандартам.')}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTS */}
        <section id="contacts" className="grid md:grid-cols-2 gap-8 items-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200">
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">{t('lazmed.contactsTitle', 'Контакты и запись')}</h2>
            <p className="text-slate-700 text-lg">{t('lazmed.contactsDesc', 'Приём ведётся по записи. Мы готовы ответить на вопросы и подобрать удобное время для приёма.')}</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <FiMapPin className="text-indigo-600 mt-1" />
                <div className="flex-1">
                  <p className="font-semibold">{t('lazmed.addressLabel', 'Адрес')}</p>
                  <p className="text-slate-600">{t('lazmed.addressValue', 'г. Бишкек, мкр. Кок-Жар, ул. 7 апреля, 3/1')}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <a
                      href="https://2gis.kg/bishkek/search/%D0%BB%D0%B0%D0%B7%D0%BC%D0%B5%D0%B4%20%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0/firm/70000001019365186/74.634708%2C42.850922?m=74.5812%2C42.870338%2F14.62"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium bg-linear-to-r from-indigo-600 to-cyan-600 text-white px-4 py-2 rounded-full hover:from-indigo-700 hover:to-cyan-700 shadow-sm transition-transform hover:scale-105"
                      aria-label="Открыть адрес в 2GIS — откроется в новой вкладке"
                      title="Открыть в 2GIS"
                    >
                      <span className="text-xs bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded">2GIS</span>
                      <span className="font-semibold">На карте</span>
                      <FiExternalLink className="opacity-80 ml-1" />
                    </a>
                    <a
                      href="https://maps.app.goo.gl/sTfjnLoXvySDjsABA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium bg-linear-to-r from-indigo-600 to-cyan-600 text-white px-4 py-2 rounded-full hover:from-indigo-700 hover:to-cyan-700 shadow-sm transition-transform hover:scale-105"
                      aria-label="Открыть адрес в Google Maps — откроется в новой вкладке"
                      title="Открыть в Google Maps"
                    >
                      <span className="text-xs bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded">GMaps</span>
                      <span className="font-semibold">Google Maps</span>
                      <FiExternalLink className="opacity-80 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <FiPhone className="text-rose-600 mt-1" />
                <div>
                  <p className="font-semibold">{t('lazmed.phoneLabel', 'Телефон')}</p>
                  <p className="text-slate-600">+996 (312) 88‒13‒46</p>
                  <p className="text-slate-600">+996 (774) 88-13-46</p>
                </div>
              </div>

              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <FiGlobe className="text-cyan-600 mt-1" />
                <div>
                  <p className="font-semibold">{t('lazmed.websiteLabel', 'Веб-сайт')}</p>
                  <p className="text-slate-600 underline">www.lasmed.kg</p>
                </div>
              </div>

              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <FiClock className="text-yellow-600 mt-1" />
                <div>
                  <p className="font-semibold">{t('lazmed.scheduleLabel', 'Режим работы')}</p>
                  <p className="text-slate-600">{t('lazmed.scheduleValue', 'Пн–Пт: 09:00–18:00 · Сб: 09:00–14:00')}</p>
                </div>
              </div>
            </div>

            {/* кнопка записи удалена по просьбе */}
          </div>

          <div>
            <div className="w-full h-72 rounded-2xl border border-gray-100 shadow-inner overflow-hidden">
              <iframe
                title="Lasmed location"
                src="https://maps.google.com/maps?q=Bishkek%2C%20Kok-Jar%207%20aprel%203%2F1&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Lazmed;
