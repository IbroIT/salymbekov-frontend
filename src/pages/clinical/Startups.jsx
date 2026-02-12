import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// SVG иконки вместо react-icons
const FiRocket = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const FiTrendingUp = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const FiUsers = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const FiLightbulb = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const FiCheckCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FiTarget = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Startups = () => {
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

  const startupPrograms = useMemo(() => [
    {
      icon: FiRocket,
      title: t('startups.programs.incubation.title', 'Инкубация идей'),
      description: t('startups.programs.incubation.desc', 'Поддержка инновационных идей на ранних стадиях развития')
    },
    {
      icon: FiLightbulb,
      title: t('startups.programs.innovation.title', 'Инновационный фонд'),
      description: t('startups.programs.innovation.desc', 'Финансирование перспективных проектов и исследований')
    },
    {
      icon: FiUsers,
      title: t('startups.programs.mentoring.title', 'Менторство'),
      description: t('startups.programs.mentoring.desc', 'Сопровождение опытными экспертами и бизнес-лидерами')
    },
    {
      icon: FiTrendingUp,
      title: t('startups.programs.scaling.title', 'Масштабирование'),
      description: t('startups.programs.scaling.desc', 'Помощь в расширении и коммерциализации проектов')
    }
  ], [t]);

  const advantages = useMemo(() => [
    {
      icon: FiCheckCircle,
      title: t('startups.advantages.expertise.title', 'Экспертиза'),
      text: t('startups.advantages.expertise.text', 'Доступ к знаниям профессоров и специалистов')
    },
    {
      icon: FiTarget,
      title: t('startups.advantages.resources.title', 'Ресурсы'),
      text: t('startups.advantages.resources.text', 'Лаборатории, офисное пространство и оборудование')
    },
    {
      icon: FiUsers,
      title: t('startups.advantages.network.title', 'Сеть контактов'),
      text: t('startups.advantages.network.text', 'Связи с инвесторами, партнёрами и заказчиками')
    },
    {
      icon: FiTrendingUp,
      title: t('startups.advantages.support.title', 'Полная поддержка'),
      text: t('startups.advantages.support.text', 'От идеи до вывода на рынок')
    }
  ], [t]);

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

      {/* HERO */}
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
            <span className="bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6] bg-clip-text text-transparent">
              {t('startups.hero.title', 'Инновационные стартапы')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed mb-8"
          >
            {t('startups.hero.description', 'Университет Салымбекова активно поддерживает развитие инновационных проектов и стартапов, созданных студентами, преподавателями и выпускниками. Мы верим, что предпринимательство является катализатором социально-экономического развития.')}
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 py-16 space-y-20">

        {/* ПРОГРАММЫ ПОДДЕРЖКИ */}
        <section className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent"
          >
            {t('startups.programs.title', 'Программы поддержки')}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {startupPrograms.map((program, i) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl hover:border-[#0096C7] transition-all duration-300"
                >
                  <div className="mb-4 text-[#0077B6]">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ПРЕИМУЩЕСТВА */}
        <section className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent"
          >
            {t('startups.advantages.title', 'Почему выбирают нас')}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, i) => {
              const IconComponent = advantage.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-[#0077B6] mt-1 flex-shrink-0">
                      <IconComponent size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {advantage.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ПРОЦЕСС РАЗВИТИЯ */}
        <section className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent"
          >
            {t('startups.process.title', 'Путь к успеху')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: t('startups.process.step1.title', 'Идея'),
                  desc: t('startups.process.step1.desc', 'Воплотите вашу инновационную идею')
                },
                {
                  step: '2',
                  title: t('startups.process.step2.title', 'Развитие'),
                  desc: t('startups.process.step2.desc', 'Разработка прототипа и бизнес-плана')
                },
                {
                  step: '3',
                  title: t('startups.process.step3.title', 'Финансирование'),
                  desc: t('startups.process.step3.desc', 'Получение инвестиций и грантов')
                },
                {
                  step: '4',
                  title: t('startups.process.step4.title', 'Масштабирование'),
                  desc: t('startups.process.step4.desc', 'Вывод на рынок и развитие')
                }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl p-8 text-white h-full flex flex-col"
                  >
                    <div className="text-5xl font-extrabold mb-4 opacity-20">{item.step}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm flex-grow">{item.desc}</p>
                  </motion.div>
                  {i < 3 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <svg className="w-6 h-6 text-[#023E8A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* КОНТАКТЫ И ПРИМЕНЕНИЕ */}
        <section className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent"
          >
            {t('startups.contact.title', 'Присоединитесь к нам')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-r from-[#0096C7]/10 to-[#0077B6]/10 rounded-3xl border border-[#0096C7] p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('startups.contact.subtitle', 'Готовы развивать идею?')}
                </h3>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                  {t('startups.contact.description', 'Если у вас есть инновационная идея и вы хотите её развивать в благоприятной экосистеме, свяжитесь с нашей командой. Мы готовы помочь вам на всех этапах развития стартапа.')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>{t('startups.contact.point1', 'Консультация экспертов')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>{t('startups.contact.point2', 'Доступ к ресурсам')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>{t('startups.contact.point3', 'Финансовая поддержка')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>{t('startups.contact.point4', 'Партнёрские связи')}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-6">
                  {t('startups.contact.form', 'Свяжитесь с нами')}
                </h4>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder={t('startups.contact.name', 'Ваше имя')}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0077B6] transition"
                  />
                  <input
                    type="email"
                    placeholder={t('startups.contact.email', 'Email')}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0077B6] transition"
                  />
                  <textarea
                    placeholder={t('startups.contact.message', 'Описание вашего проекта')}
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0077B6] transition resize-none"
                  ></textarea>
                  <button className="w-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 rounded-lg font-bold hover:shadow-lg transition">
                    {t('startups.contact.submit', 'Отправить заявку')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default Startups;
