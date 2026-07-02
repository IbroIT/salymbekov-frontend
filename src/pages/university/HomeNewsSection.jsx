import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { apiRequest } from '../../api';

const NewsAndEventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Загрузка новостей из API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const lang = i18n.language === 'kg' ? 'kg' : i18n.language === 'en' ? 'en' : 'ru';
        const data = await apiRequest(`/presscentre/news/?lang=${lang}&limit=3`);
        
        const newsArray = data.results || data || [];
        
        // Sort by date (most recent first)
        const sortedNews = newsArray.sort((a, b) => {
          const dateA = new Date(a.published_at || a.created_at);
          const dateB = new Date(b.published_at || b.created_at);
          return dateB - dateA; // Most recent first
        });
        
        const transformedNews = sortedNews.slice(0, 3).map(item => ({
          id: item.id,
          title: item.title,
          description: item.short_description || item.description?.substring(0, 150) + '...' || '',
          date: new Date(item.published_at || item.created_at).toLocaleDateString(lang, {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          category: item.category?.id?.toString() || 'news',
          categoryName: item.category?.title || t('news.categories.general', 'Новости'),
          image: item.image || null,
          path: `/press/news/${item.id}`
        }));
        
        setNews(transformedNews);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback data
        setNews([
          {
            id: 1,
            title: t('news.fallback.title', 'Новости компании'),
            description: t('news.fallback.description', 'Актуальные новости и события компании Дордой'),
            date: new Date().toLocaleDateString(i18n.language),
            category: 'news',
            categoryName: t('news.categories.general', 'Новости'),
            image: null,
            path: '/press/news'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [i18n.language, t]);

  const categoryColors = {
    sport: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    education: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    international: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    social: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
    anniversary: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200' },
    culture: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' },
    news: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      y: -30,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-blue-200 shadow-sm mb-6"
          >
            <span className="text-blue-600 text-sm font-semibold">{t('news.badge')}</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('news.title')}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full mx-auto mb-8"
          />

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('news.subtitle')}
          </motion.p>
        </motion.div>

        {/* Сетка новостей */}
        <AnimatePresence mode="wait">
          <motion.div
            key={loading ? "loading" : "news"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {loading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  variants={cardVariants}
                  exit="exit"
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 animate-pulse"
                >
                  <div className="h-48 bg-slate-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-slate-200 rounded mb-3"></div>
                    <div className="h-6 bg-slate-200 rounded mb-3"></div>
                    <div className="h-4 bg-slate-200 rounded mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  </div>
                </motion.div>
              ))
            ) : (
              news.slice(0, 3).map((newsItem) => {
                const colors = categoryColors[newsItem.category] || categoryColors.news;
                
                return (
                  <motion.article
                    key={newsItem.id}
                    variants={cardVariants}
                    exit="exit"
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200"
                    whileHover={{ y: -8 }}
                  >
                  {/* Изображение */}
                  <motion.div 
                    className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    {newsItem.image ? (
                      <img
                        src={newsItem.image}
                        alt={newsItem.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                        <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}
                    
                    {/* Градиентный оверлей */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Категория */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} ${colors.border} backdrop-blur-sm shadow-lg`}>
                      {newsItem.categoryName}
                    </div>
                    
                    {/* Эффект свечения при наведении */}
                    <div className="absolute inset-0 ring-1 ring-white/20 group-hover:ring-blue-300/50 transition-all duration-300 rounded-t-2xl" />
                  </motion.div>

                  {/* Контент */}
                  <div className="p-6">
                    {/* Дата */}
                    <motion.p 
                      className="text-slate-500 text-sm mb-3 flex items-center"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {newsItem.date}
                    </motion.p>

                    {/* Заголовок */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {newsItem.title}
                    </h3>

                    {/* Описание */}
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {newsItem.description}
                    </p>

                    {/* Кнопка подробнее */}
                    <motion.div
                      className="flex items-center justify-between pt-4 border-t border-slate-100"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link
                        to={newsItem.path}
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group/btn"
                      >
                        <span>{t('news.learnMore')}</span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </Link>

                      {/* Индикатор нового */}
                      <motion.div
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Акцентный элемент при наведении */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </motion.article>
              );
            })
          )}
          </motion.div>
        </AnimatePresence>

        {/* Кнопка "Все новости" */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <Link
            to="/press/news"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            <span>{t('news.viewAll', 'Все новости')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsAndEventsSection;