import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getDateLocale } from '../../api';
import { fetchNewsById, fetchNewsList, newsKeys } from '../../queries/newsQueries';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const queryClient = useQueryClient();
  
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  /**
   * Получаем initialData из кэша списка новостей
   * Это обеспечивает мгновенное отображение основных данных (заголовок, превью)
   */
  const getInitialNewsData = useCallback(() => {
    const cachedNewsList = queryClient.getQueryData(newsKeys.list(i18n.language));
    if (cachedNewsList) {
      return cachedNewsList.find(news => news.id.toString() === id);
    }
    return undefined;
  }, [queryClient, i18n.language, id]);

  /**
   * Загрузка полных данных новости с использованием React Query
   * Использует initialData для мгновенного отображения
   */
  const { 
    data: newsData, 
    isLoading, 
    error,
    isPlaceholderData 
  } = useQuery({
    queryKey: newsKeys.detail(id, i18n.language),
    queryFn: fetchNewsById,
    staleTime: 5 * 60 * 1000, // 5 минут
    initialData: getInitialNewsData, // Используем данные из кэша списка
    enabled: !!id, // Запускаем запрос только если есть id
  });

  /**
   * Загрузка связанных новостей
   */
  const { data: allNewsList = [] } = useQuery({
    queryKey: newsKeys.list(i18n.language),
    queryFn: fetchNewsList,
    staleTime: 5 * 60 * 1000,
  });

  // Получаем связанные новости той же категории
  const relatedNews = allNewsList
    .filter(item => {
      if (!newsData || item.id === newsData.id) return false;
      
      const itemCategoryId = item.category;
      const currentCategoryId = newsData.category;
      
      return itemCategoryId && currentCategoryId && 
             (itemCategoryId === currentCategoryId || 
              itemCategoryId.toString() === currentCategoryId.toString());
    })
    .slice(0, 3);

  /**
   * Prefetch связанных новостей при наведении
   */
  const prefetchRelatedNews = useCallback((newsId) => {
    queryClient.prefetchQuery({
      queryKey: newsKeys.detail(newsId, i18n.language),
      queryFn: fetchNewsById,
      staleTime: 5 * 60 * 1000,
    });
  }, [queryClient, i18n.language]);

  // Прокрутка к верху при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Отслеживание прокрутки
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShare = async () => {
    if (!newsData) return;

    const shareData = {
      title: newsData.title,
      text: newsData.description || newsData.summary,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert(t('newsDetail.share.copied', 'Ссылка скопирована'));
      }
    } catch (err) {
      console.log(t('newsDetail.share.error', 'Ошибка при копировании'), err);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return t('newsDetail.date.unknown', 'Дата неизвестна');
    return new Date(dateString).toLocaleDateString(getDateLocale(i18n.language), {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    const API_BASE_URL = import.meta.env.VITE_API_URL || "https://salymbekov-backend-f4c797e9b169.herokuapp.com";
    return `${API_BASE_URL}${imagePath}`;
  };

  const getImagesArray = (data) => {
    if (!data) return [];
    
    const images = [];
    
    // Основное изображение
    if (data.image || data.previewImage) {
      images.push(data.image || data.previewImage);
    }
    
    // Дополнительные фото из галереи
    if (data.photos && Array.isArray(data.photos)) {
      data.photos.forEach(photo => {
        if (photo.image) {
          images.push(photo.image);
        }
      });
    } else if (data.gallery && Array.isArray(data.gallery)) {
      data.gallery.forEach(photo => {
        if (photo.image) {
          images.push(photo.image);
        }
      });
    }
    
    return images;
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = useCallback(() => {
    const images = getImagesArray(newsData);
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  }, [newsData]);

  const prevImage = useCallback(() => {
    const images = getImagesArray(newsData);
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  }, [newsData]);

  // Обработка клавиатуры для lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, prevImage, nextImage]);

  // Показываем загрузку только если нет никаких данных (даже из кэша)
  if (isLoading && !newsData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-blue-600 text-lg font-medium">{t('newsDetail.loading', 'Загрузка...')}</p>
        </div>
      </div>
    );
  }

  if (error && !newsData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md w-full">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {t('newsDetail.error.title', 'Новость не найдена')}
          </h1>
          <p className="text-gray-600 mb-6">
            {t('newsDetail.error.notFound', 'К сожалению, эта новость не найдена или была удалена.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/press/news')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
            >
              {t('newsDetail.error.homeButton', 'Все новости')}
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 border border-gray-300 text-gray-600 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300 font-semibold"
            >
              {t('newsDetail.error.retryButton', 'Попробовать снова')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const images = getImagesArray(newsData);
  const content = newsData?.fullText || newsData?.full_description || newsData?.description || newsData?.summary;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-30"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/press/news')}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>{t('newsDetail.header.back', 'Назад к новостям')}</span>
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>{t('newsDetail.header.share', 'Поделиться')}</span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          {images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl cursor-pointer"
              onClick={() => openLightbox(0)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={getImageUrl(images[0])}
                  alt={newsData.title}
                  loading="lazy"
                  className={`w-full h-96 object-cover transition-all duration-500 hover:scale-105 ${
                    imageLoaded[0] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(0)}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              {!imageLoaded[0] && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 animate-pulse" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white">
                    <span className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold mb-3">
                      {newsData.category_name || t('newsDetail.defaultCategory', 'Новости')}
                    </span>
                    <h1 className="text-4xl font-bold leading-tight mb-3">{newsData.title}</h1>
                    {images.length > 1 && (
                      <p className="text-blue-100 text-lg opacity-90">
                        {t('newsDetail.photoCounter', { count: images.length })} фото: {images.length}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Meta Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6 mb-8 text-gray-600 bg-white/50 rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(newsData.created_at)}</span>
            </div>
            {isPlaceholderData && (
              <div className="flex items-center gap-2 text-blue-600">
                <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-sm">{t('newsDetail.loading', 'Загрузка полной версии...')}</span>
              </div>
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg max-w-none bg-white rounded-3xl p-8 shadow-xl mb-12"
          >
            {newsData.summary && (
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-blue-500 pl-4 bg-blue-50 py-4 rounded-r-lg">
                {newsData.summary}
              </p>
            )}

            {content && (
              <div className="space-y-6 text-gray-600 leading-8">
                <div className="text-gray-700 whitespace-pre-line">
                  {content}
                </div>
              </div>
            )}
          </motion.div>

          {/* Gallery */}
          {images.length > 1 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {t('newsDetail.gallery.title', 'Фотогалерея')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.slice(1).map((image, index) => (
                  <motion.div
                    key={index + 1}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group aspect-square"
                    onClick={() => openLightbox(index + 1)}
                  >
                    <img
                      src={getImageUrl(image)}
                      alt={`${newsData.title} ${index + 2}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onLoad={() => handleImageLoad(index + 1)}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Related News */}
          {relatedNews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {t('newsDetail.related', 'Похожие новости')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onClick={() => navigate(`/press/news/${news.id}`)}
                    onMouseEnter={() => prefetchRelatedNews(news.id)}
                  >
                    <div className="relative overflow-hidden h-48">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 z-10" />
                      {news.image || news.previewImage ? (
                        <img
                          src={getImageUrl(news.image || news.previewImage)}
                          alt={news.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                          <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {news.category_name}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {formatDate(news.created_at)}
                        </span>
                      </div>

                      <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {news.title}
                      </h3>

                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {news.summary || news.description}
                      </p>

                      <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        {t('newsDetail.readMore', 'Читать далее')}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.article>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-40 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors duration-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative bg-black rounded-lg overflow-hidden">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={getImageUrl(images[currentImageIndex])}
                  alt={`${newsData.title} ${currentImageIndex + 1}`}
                  loading="lazy"
                  className="w-full max-h-[80vh] object-contain"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsDetail;
