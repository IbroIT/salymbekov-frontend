import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiFileText, FiExternalLink } from 'react-icons/fi';
import OfficeImg from '../../assets/clinical/agreements/Office buildings tall up to the sky in the financial district _ Premium Photo (1).jpeg';
import DogovorAzija from '../../assets/clinical/agreements/contracts/dogovor-azija-med-karkyra-med.pdf';
import OsooJeosMedDop from '../../assets/clinical/agreements/contracts/osoo-jeos-med-dopsoglashenie.pdf';
import OsooJeosMedOsnovnoj from '../../assets/clinical/agreements/contracts/osoo-jeos-med-osnovnoj.pdf';
import LcdAndromedDoc from '../../assets/clinical/agreements/contracts/lcd-andromed-doc.pdf';
import OsooJeosPljus from '../../assets/clinical/agreements/contracts/osoo-jeos-pljus.pdf';

const Agreements = () => {
  const { t, i18n } = useTranslation();

  const agreements = [
    {
      title: t('clinical.agreements.contracts.asiaMed', 'Договор Азия Мед (Каркыра Мед)'),
      file: DogovorAzija
    },
    {
      title: t('clinical.agreements.contracts.eosMedAdditional', 'ОсОО ЭОС-Мед (допсоглашение)'),
      file: OsooJeosMedDop
    },
    {
      title: t('clinical.agreements.contracts.eosMedMain', 'ОсОО ЭОС-Мед (основной)'),
      file: OsooJeosMedOsnovnoj
    },
    {
      title: t('clinical.agreements.contracts.andromedDoc', 'ЛЦД Андромед-DOC'),
      file: LcdAndromedDoc
    },
    {
      title: t('clinical.agreements.contracts.eosPlus', 'ОсОО ЭОС ПЛЮС'),
      file: OsooJeosPljus
    }
  ];

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
      <section className="relative overflow-hidden h-[85vh] min-h-[640px] flex items-center text-white">
        {/* Градиентный фон */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-900 via-blue-800 to-cyan-700">
          {/* Дополнительные градиентные слои для глубины */}
          <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-transparent to-cyan-500/30" />
          <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl" />
        </div>

        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl mx-auto drop-shadow-xl"
          >
            <span className="bg-linear-to-r from-indigo-200 via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              {t('clinical.agreements.heroTitle', 'Эксклюзивные соглашения')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            {t('clinical.agreements.heroDescription', 'Эксклюзивные соглашения с клиниками — партнёрства для обеспечения качественной медицинской помощи.')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              t('clinical.agreements.tags.partnerships', 'Партнёрства'),
              t('clinical.agreements.tags.quality', 'Качество лечения'),
              t('clinical.agreements.tags.expansion', 'Расширение возможностей'),
              t('clinical.agreements.tags.cooperation', 'Сотрудничество'),
              t('clinical.agreements.tags.innovation', 'Инновации')
            ].map((tag, i) => (
              <span
                key={i}
                className="bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/25 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Декоративная волна внизу */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-16 text-white fill-current"
        >
          <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
      </section>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <section className="max-w-4xl mx-auto space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent text-center"
          >
            {t('clinical.agreements.sectionTitle', 'Договоры и соглашения')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-600 text-lg text-center max-w-2xl mx-auto"
          >
            {t('clinical.agreements.sectionDescription', 'Официальные документы о сотрудничестве с медицинскими учреждениями')}
          </motion.div>

          <div className="grid gap-6">
            {agreements.map((agreement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shrink-0">
                      <FiFileText size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{agreement.title}</h3>
                      <p className="text-slate-500 text-sm mt-1">
                        {t('clinical.agreements.pdfDocument', 'PDF документ')}
                      </p>
                    </div>
                  </div>
                  <a
                    href={agreement.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-600 to-cyan-600 text-white px-5 py-2.5 rounded-full font-semibold hover:from-indigo-700 hover:to-cyan-700 transition-all shadow-sm hover:shadow-md hover:scale-105"
                  >
                    <span>{t('clinical.agreements.openPdf', 'Открыть PDF')}</span>
                    <FiExternalLink className="opacity-90" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Agreements;