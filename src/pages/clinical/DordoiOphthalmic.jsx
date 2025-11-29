import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FiExternalLink, FiMapPin, FiPhone, FiGlobe, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Импорт изображений
import mainImage from '../../assets/clinical/dordoi-ophtmalmic/main.jpg';
import backImage from '../../assets/clinical/dordoi-ophtmalmic/back.jpg';

// Импорт всех изображений для галереи
const scrollingImages = Object.values(
  import.meta.glob('../../assets/clinical/dordoi-ophtmalmic/scrolling/*.{jpg,jpeg,png,webp}', { eager: true })
).map(m => m.default);

const DordoiOphthalmic = () => {
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

         {/* HERO Section */}
         <section className="relative overflow-hidden h-[85vh] min-h-[640px] flex items-center text-white">
            <div className="absolute inset-0">
               <img
                  src={backImage}
                  alt="Дордой-Офтальмик Сервис"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                     e.target.style.display = 'none';
                  }}
               />
               <div className="absolute inset-0 bg-black/60" />
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-blue-900/40 to-cyan-800/30 mix-blend-screen" />
            </div>

            <div className="relative container mx-auto px-6 lg:px-8">
               <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-5xl drop-shadow-xl"
               >
                  <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                     {t('dordoi.title', 'ОсОО Медицинский центр')}
                  </span>{' '}
                  {t('dordoi.subtitle', 'микрохирургии глаза «Дордой-Офтальмик Сервис»')}
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.7 }}
                  className="text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed"
               >
                  {t('dordoi.description', 'Современная офтальмологическая помощь: микрохирургия глаза, инновационные лазерные технологии, индивидуальные протезы и контактные линзы.')}
               </motion.p>

               <div className="mt-8 flex flex-wrap gap-3">
                  {[
                     t('dordoi.tags.trust', 'Высокое доверие пациентов'),
                     t('dordoi.tags.equipment', 'Уникальная аппаратура'),
                     t('dordoi.tags.prosthetics', 'Индивидуальные глазные протезы'),
                     t('dordoi.tags.phaco', 'Современные факоэмульсификаторы')
                  ].map((tag, i) => (
                     <span key={i} className="bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
                        {tag}
                     </span>
                  ))}
               </div>
            </div>

            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12 text-gray-100 fill-current">
               <path d="M0 0h1200v46.29c0 0-120 25.95-600 25.95S0 46.29 0 46.29V0z" />
            </svg>
         </section>

         <div className="container mx-auto px-6 lg:px-8 py-16 space-y-20">
            {/* DIRECTOR Section */}
            <section className="space-y-8">
               <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {t('dordoi.director.title', 'Руководитель')}
               </h2>

               <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-200 p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                     {/* Фото руководителя */}
                     <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
                        <img
                           src={mainImage}
                           alt={t('dordoi.director.name', 'Эшмамбетов Асизбек Эшмамбетович')}
                           className="w-full h-full object-cover"
                           onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                           }}
                        />
                        <div
                           className="hidden w-full h-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center"
                           style={{ display: 'none' }}
                        >
                           <span className="text-slate-400 text-lg">Изображение не найдено</span>
                        </div>
                     </div>

                     {/* Текст */}
                     <div className="space-y-5">
                        <p className="text-slate-700 leading-relaxed text-lg break-words">
                           {t('dordoi.director.intro', 'Эшмамбетов Асизбек Эшмамбетович — Отличник здравоохранения КР. Создатель (1995) и бессменный руководитель МЦ МХГ «Дордой-офтальмик-сервис» и единственной в Центральной Азии лаборатории по изготовлению индивидуальных глазных протезов.')}
                        </p>
                        <p className="text-slate-700 leading-relaxed break-words">
                           {t('dordoi.director.history', 'Центр микрохирургии глаза «Дордой-Офтальмик Сервис» создан в 1996 году. Сегодня центр успешно развивается и оказывает практически все виды современных офтальмологических услуг, завоевал доверие населения Кыргызстана и стран ближнего зарубежья.')}
                        </p>
                        <p className="text-slate-700 leading-relaxed break-words">
                           {t('dordoi.director.equipment', 'Оснащение включает ультразвуковой факоэмульсификатор LEGACI (США) и аппарат INFINITI (2016) последнего поколения, позволяющий удалять катаракту без наложения швов с госпитализацией не более суток.')}
                        </p>
                        <p className="text-slate-700 leading-relaxed break-words">
                           {t('dordoi.director.labs', 'Успешно работают уникальные лаборатории: по изготовлению индивидуальных глазных протезов и по производству мягких контактных линз. С 2000 года центр является рентабельным предприятием и был признан Минздравом лучшим лечебным учреждением среди негосударственных структур.')}
                        </p>
                        <p className="text-slate-700 leading-relaxed break-words">
                           {t('dordoi.director.technologies', 'Применение микрохирургических, лазерных и современных технологий позволяет малокровно производить пластические операции по устранению косметических дефектов новообразований с минимальным риском осложнений — альтернатива тяжёлым операциям под общим наркозом.')}
                        </p>
                        <p className="text-slate-700 leading-relaxed break-words">
                           {t('dordoi.director.conferences', 'Под руководством Асизбека Эшмамбетова совместно с кафедрой глазных болезней КГМА впервые в Кыргызстане были организованы Центрально-Азиатские конференции по офтальмологии (2002, 2007, 2011, 2015) с участием 250+ специалистов из России, Украины, Казахстана, Узбекистана, Таджикистана, Германии, Турции, Индии, США и Финляндии.')}
                        </p>
                        <p className="text-slate-700 leading-relaxed break-words">
                           {t('dordoi.director.international', 'Центр поддерживает связи с международными специалистами: работают профессор из Казахстана и протезист из Москвы. Регулярные стажировки врачей и медсестёр обеспечивают освоение новых методик.')}
                        </p>
                        <p className="text-slate-700 leading-relaxed break-words">
                           {t('dordoi.director.charity', 'В 2016 году учреждению для пожилых и лиц с ограниченными возможностями был оказан бесплатный комплекс операций на глазах (10–12 человек).')}
                        </p>

                        <div className="flex flex-wrap gap-3 mt-4">
                           {['Микрохирургия', 'Катаракта без швов', 'Индивидуальные протезы', 'Линзы собственного производства', 'Международные конференции', 'Стажировки персонала'].map((x, i) => (
                              <span key={i} className="px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 shadow-sm">
                                 {x}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* SERVICES SUMMARY */}
            <section className="space-y-6">
               <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {t('dordoi.services.title', 'Основные направления')}
               </h2>

               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                     t('dordoi.services.cataract', 'Микрохирургия катаракты'),
                     t('dordoi.services.laser', 'Лазерные операции'),
                     t('dordoi.services.diagnostics', 'Диагностика зрения'),
                     t('dordoi.services.prosthetics', 'Индивидуальные глазные протезы'),
                     t('dordoi.services.lenses', 'Контактные линзы (производство)'),
                     t('dordoi.services.rehabilitation', 'Послеоперационная реабилитация')
                  ].map((item, i) => (
                     <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition">
                        <p className="font-semibold text-slate-800">{item}</p>
                        <p className="text-sm text-slate-600 mt-2">
                           {t('dordoi.services.description', 'Современные стандарты и персонализированные методики лечения.')}
                        </p>
                     </div>
                  ))}
               </div>
            </section>

            {/* SCROLLING GALLERY */}
            {scrollingImages.length > 0 && (
               <section className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                     {t('dordoi.gallery.title', 'Атмосфера и работа центра')}
                  </h2>

                  <p className="text-slate-600 max-w-prose">
                     {t('dordoi.gallery.description', 'Фото оборудования, операционных и этапов процедур. Горизонтальная галерея с плавным скроллом.')}
                  </p>

                  <div className="relative">
                     <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
                     <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

                     <div className="flex gap-8 overflow-x-auto py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x">
                        {scrollingImages.map((src, i) => (
                           <figure key={i} className="snap-start shrink-0 w-96 h-64 rounded-3xl overflow-hidden shadow-lg relative group">
                              <img
                                 src={src}
                                 alt="Офтальмология Дордой"
                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                 loading="lazy"
                                 onError={(e) => {
                                    e.target.style.display = 'none';
                                 }}
                              />
                           </figure>
                        ))}
                     </div>
                  </div>
               </section>
            )}

            {/* CONTACTS */}
            <section className="grid md:grid-cols-2 gap-10 items-start bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-lg">
               <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                     {t('dordoi.contacts.title', 'Контактные данные')}
                  </h2>

                  <div className="space-y-4 text-sm">
                     <div className="flex items-start gap-3">
                        <FiMapPin className="text-indigo-600 mt-1" />
                        <div>
                           <p className="font-semibold">{t('dordoi.contacts.address', 'Адрес')}</p>
                           <p className="text-slate-700">{t('dordoi.contacts.addressValue', 'г. Бишкек, ул. Фучика, 3/4')}</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-3">
                        <FiPhone className="text-rose-600 mt-1" />
                        <div>
                           <p className="font-semibold">{t('dordoi.contacts.phones', 'Телефоны')}</p>
                           <p className="text-slate-700">{t('dordoi.contacts.phone1', '+996 (312) 65 88 93')}</p>
                           <p className="text-slate-700">{t('dordoi.contacts.phone2', '+996 (500) 65 88 93')}</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-3">
                        <FiGlobe className="text-cyan-600 mt-1" />
                        <div>
                           <p className="font-semibold">{t('dordoi.contacts.website', 'Сайт')}</p>
                           <p className="text-slate-700 underline">{t('dordoi.contacts.websiteValue', 'eyeclinic.kg')}</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-3">
                        <FiClock className="text-yellow-600 mt-1" />
                        <div>
                           <p className="font-semibold">{t('dordoi.contacts.hours', 'Режим работы')}</p>
                           <p className="text-slate-700">{t('dordoi.contacts.hoursValue', 'Уточните по телефону (гибкий график операций)')}</p>
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                     <a
                        href="https://2gis.kg/bishkek/search/%D0%B4%D0%BE%D1%80%D0%B4%D0%BE%D0%B9%20%D0%BE%D1%84%D1%82%D0%B0%D0%BB%D1%8C%D0%BC%D0%B8%D0%BA?m=74.5812%2C42.870343%2F14.62"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-4 py-2 rounded-full hover:from-indigo-700 hover:to-cyan-700 shadow-sm transition-transform hover:scale-105"
                     >
                        <span className="text-xs bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded">2GIS</span>
                        <span className="font-semibold">На карте</span>
                        <FiExternalLink className="opacity-80" />
                     </a>

                     <a
                        href="https://maps.app.goo.gl/YjUxbUtfhTbhVPow8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-4 py-2 rounded-full hover:from-indigo-700 hover:to-cyan-700 shadow-sm transition-transform hover:scale-105"
                     >
                        <span className="text-xs bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded">GMaps</span>
                        <span className="font-semibold">Google Maps</span>
                        <FiExternalLink className="opacity-80" />
                     </a>
                  </div>
               </div>

               <div className="w-full h-72 rounded-2xl border border-slate-200 shadow-inner overflow-hidden">
                  <iframe
                     title="Дордой-Офтальмик на карте"
                     src="https://maps.google.com/maps?q=%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%2C%20%D1%83%D0%BB.%20%D0%A4%D1%83%D1%87%D0%B8%D0%BA%D0%B0%2C%203%2F4&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

export default DordoiOphthalmic;