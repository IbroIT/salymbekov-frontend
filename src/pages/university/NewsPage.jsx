import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../../api';

const UniversityNews = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  // Функция для получения CSS классов на основе aspect_ratio
  const getAspectRatioClasses = (aspectRatio) => {
    const baseClasses = "w-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center";
    
    switch (aspectRatio) {
      case 'square':
        return `${baseClasses} aspect-square`;
      case 'portrait':
        return `${baseClasses} aspect-[3/4]`;
      case 'landscape':
        return `${baseClasses} aspect-[4/3]`;
      case 'wide':
        return `${baseClasses} aspect-[16/9]`;
      case 'tall':
        return `${baseClasses} aspect-[9/16]`;
      default:
        return `${baseClasses} h-48`;
    }
  };

  // Загрузка данных
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Загрузка категорий
        const categoriesData = await apiRequest(`/presscentre/categories/?lang=${i18n.language}`);
        
        // Загрузка новостей
        const newsData = await apiRequest(`/presscentre/news/?lang=${i18n.language}&limit=1000`);

        // Преобразование данных категорий
        const categoriesArray = categoriesData.results || categoriesData;
        const transformedCategories = [
          { id: 'all', name: t('press.categories.all'), color: 'gray' },
          ...categoriesArray.map(cat => ({
            id: cat.id.toString(),
            name: cat.title,
            color: 'blue'
          }))
        ];

        // Преобразование данных новостей
        const newsArray = newsData.results || newsData || [];
        const transformedNews = Array.isArray(newsArray) ? newsArray.map(item => ({
          id: item.id,
          title: item.title,
          date: new Date(item.published_at || item.created_at).toLocaleDateString(i18n.language, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          category: item.category?.id?.toString() || item.category_id?.toString() || '1',
          category_name: item.category?.title || 'General',
          image_url: item.image || null,
          gallery: item.gallery || [], // Добавляем галерею
          aspect_ratio: item.aspect_ratio || 'wide',
          description: item.short_description || item.description?.substring(0, 200) + '...' || '',
          full_description: item.description,
          // Используем is_recommended из API, а не индекс
          is_recommended: item.is_recommended || false,
          created_at: item.published_at || item.created_at
        })) : [];

        // Сортировка новостей по дате (новые первыми)
        transformedNews.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        setCategories(transformedCategories);
        setNewsData(transformedNews);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(t('press.error.loading'));
        // Fallback data
        setCategories([
          { id: 'all', name: t('press.categories.all'), color: 'gray' },
          { id: '1', name: 'Пресс-релизы', color: 'blue' }
        ]);
        setNewsData([
          {
            id: 1,
            title: t('press.demo.title', 'Университет представляет новую образовательную программу'),
            date: new Date().toLocaleDateString(i18n.language),
            category: '1',
            category_name: 'Пресс-релизы',
            image_url: null,
            description: t('press.demo.description', 'Новая программа подготовки специалистов в области медицины с современными технологиями обучения.'),
            full_description: t('press.demo.fullText', 'Полный текст новости для демонстрации. Университет продолжает развивать образовательные программы и внедрять инновационные методы обучения.'),
            is_recommended: true,
            created_at: new Date().toISOString()
          },
          {
            id: 2,
            title: t('press.demo.title2', 'Открытие нового учебного корпуса'),
            date: new Date(Date.now() - 86400000).toLocaleDateString(i18n.language), // вчера
            category: '1',
            category_name: 'Пресс-релизы',
            image_url: null,
            description: t('press.demo.description2', 'Университет открывает новый учебный корпус с современными лабораториями и аудиториями.'),
            full_description: t('press.demo.fullText2', 'Полный текст новости о новом учебном корпусе.'),
            is_recommended: false,
            created_at: new Date(Date.now() - 86400000).toISOString() // вчера
          }
        ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language, t]);

  // Фильтрация новостей по категории
  const filteredNews = activeCategory === 'all' 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  // Разделение на рекомендованные и остальные новости
  const recommendedNews = filteredNews.filter(item => item.is_recommended);
  const regularNews = filteredNews.filter(item => !item.is_recommended);

  const navigateNews = useCallback((direction) => {
    if (recommendedNews.length === 0) return;
    
    setIsVisible(false);
    setTimeout(() => {
      setCurrentNewsIndex((prev) => {
        if (direction === 'next') {
          return (prev + 1) % recommendedNews.length;
        } else {
          return prev === 0 ? recommendedNews.length - 1 : prev - 1;
        }
      });
      setIsVisible(true);
    }, 300);
  }, [recommendedNews.length]);

  // Автоматическая смена новостей (только для рекомендованных)
  useEffect(() => {
    if (!isAutoPlaying || recommendedNews.length === 0) return;

    const interval = setInterval(() => {
      navigateNews('next');
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, navigateNews, recommendedNews.length]);

  const handleReadMore = (newsId) => {
    navigate(`/press/news/${newsId}`);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentNewsIndex(0);
  };

  if (loading) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="text-blue-600 text-xl">{t('press.loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6"
            >
              {t('press.title', 'Новости университета')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {t('press.subtitle', 'Актуальные новости, события и достижения университета')}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Рекомендованные новости (слайдер) */}
      {recommendedNews.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{t('press.recommended', 'Рекомендованные новости')}</h2>
            <span className="text-gray-500 text-sm">{recommendedNews.length} {t('press.items', 'новостей')}</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Navigation Arrows */}
            <button
              onClick={() => navigateNews('prev')}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => navigateNews('next')}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group"
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 z-10" />
                {recommendedNews[currentNewsIndex]?.image_url ? (
                  <motion.div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${
                      isVisible ? 'scale-110' : 'scale-100'
                    }`}
                    style={{ backgroundImage: `url(${recommendedNews[currentNewsIndex].image_url})` }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                    <svg className="w-24 h-24 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={recommendedNews[currentNewsIndex]?.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                        {recommendedNews[currentNewsIndex]?.category_name || 'News'}
                      </span>
                      <span className="text-gray-500 font-medium">
                        {recommendedNews[currentNewsIndex]?.date}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                      {recommendedNews[currentNewsIndex]?.title}
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {recommendedNews[currentNewsIndex]?.description}
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                      <button
                        onClick={() => handleReadMore(recommendedNews[currentNewsIndex]?.id)}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        {t('press.readMore', 'Подробнее')}
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Progress Indicators */}
            {recommendedNews.length > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {recommendedNews.map((news, index) => (
                  <button
                    key={news.id}
                    onClick={() => {
                      setIsVisible(false);
                      setTimeout(() => {
                        setCurrentNewsIndex(index);
                        setIsVisible(true);
                      }, 300);
                    }} 
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentNewsIndex
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 w-8'
                        : 'bg-gray-300 w-3 hover:bg-blue-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Все новости (карточки) */}
      {filteredNews.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">{t('press.allNews', 'Все новости')}</h2>
              <span className="text-gray-500">{filteredNews.length} {t('press.items', 'новостей')}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full min-h-[400px] ${
                    news.is_recommended ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}
                  onClick={() => handleReadMore(news.id)}
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 z-10" />
                    {news.image_url ? (
                      <div className={getAspectRatioClasses(news.aspect_ratio)}>
                        <img
                          src={news.image_url}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    ) : (
                      <div className={getAspectRatioClasses(news.aspect_ratio || 'wide')}>
                        <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {news.category_name}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {news.date}
                      </span>
                    </div>

                    <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">{news.description}</p>

                    <div className="flex items-center justify-between text-blue-600 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300 mt-auto pt-4 border-t border-gray-100">
                      <span>{t('press.readMore', 'Подробнее')}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* No News Message */}
      {filteredNews.length === 0 && !loading && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('press.noNews.title', 'Новости не найдены')}
          </h3>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            {t('press.noNews.description', 'В этой категории пока нет новостей. Попробуйте выбрать другую категорию.')}
          </p>
          <button
            onClick={() => setActiveCategory('all')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
          >
            {t('press.noNews.reset', 'Показать все новости')}
          </button>
        </div>
      )}
    </div>
  );
};

export default UniversityNews;