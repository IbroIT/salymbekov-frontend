import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getPartners } from '../../api';

// Запасной список партнёров (логотипы хранятся локально в /public/partners)
const FALLBACK_PARTNERS = [
  { id: 'lincoln', name: 'Lincoln University College', logo: '/partners/lincoln.webp' },
  { id: 'inti', name: 'INTI International University', logo: '/partners/inti.png' },
  { id: 'spbpu', name: 'Санкт-Петербургский политехнический университет Петра Великого', logo: '/partners/spbpu.jpg' },
  { id: 'paichai', name: 'Pai Chai University', logo: '/partners/paichai.png' },
  { id: 'chungang', name: 'Chung-Ang University', logo: '/partners/chungang.png' },
  { id: 'vision-jeonju', name: 'Vision College of Jeonju', logo: '/partners/vision-jeonju.png' },
  { id: 'kyungdong', name: 'Kyungdong University', logo: '/partners/kyungdong.png' },
  { id: 'kicb', name: 'KICB', logo: '/partners/kicb.png' },
  { id: 'bai-tushum', name: 'Банк Бай-Тушум', logo: '/partners/bai-tushum.jpeg' },
  { id: 'rkdf', name: 'Российско-Кыргызский фонд развития', logo: '/partners/rkdf.png' },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await getPartners();

        let list = [];
        if (response && Array.isArray(response.results)) {
          list = response.results;
        } else if (Array.isArray(response)) {
          list = response;
        } else {
          console.warn('Unexpected partners data structure:', response);
        }

        // Оставляем только партнёров с логотипом
        const withLogos = list.filter((p) => p && p.logo);
        setPartners(withLogos.length > 0 ? withLogos : FALLBACK_PARTNERS);
      } catch (error) {
        console.error('Error fetching partners:', error);
        setPartners(FALLBACK_PARTNERS);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const companiesArray = partners && partners.length > 0 ? partners : FALLBACK_PARTNERS;

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">

      <div className="">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6"
          >
            <span className="text-green-600 text-sm font-semibold">{t('partners.badge', 'Партнеры')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('home.partners.title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-400 rounded-full mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('home.partners.subtitle', 'Мы сотрудничаем с ведущими организациями для достижения общих целей и развития региона')}
          </motion.p>
        </motion.div>

        {/* Индикатор загрузки */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
            <p className="mt-4 text-slate-600">Загрузка партнеров...</p>
          </div>
        )}

        {/* Логотипы компаний */}
        {!loading && companiesArray.length > 0 && (
          <div className="relative w-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-8"
              style={{
                animation: 'scrollHorizontal 30s linear infinite',
                width: `calc(280px * ${companiesArray.length * 2})`,
              }}
            >
              {/* Дублируем компании для бесконечной анимации */}
              {[...companiesArray, ...companiesArray].map((company, index) => (
                <motion.div
                  key={`${company.id || company.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1.2 + (index % companiesArray.length) * 0.1 }}
                  className="flex items-center justify-center p-8 bg-white rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-slate-100 hover:border-slate-200 group shadow-lg hover:shadow-xl"
                  style={{ minWidth: '240px', height: '160px' }}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-[180px] max-h-[120px] object-contain transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Сообщение когда нет партнеров */}
        {!loading && companiesArray.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">
              {t('partners.noPartners', 'Партнеры скоро появятся')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnersSection;
