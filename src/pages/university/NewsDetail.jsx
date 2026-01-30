import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { apiRequest } from '../../api';

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [relatedNews, setRelatedNews] = useState([]);

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

  // Загрузка деталей новости
  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        // Получаем новость по ID из списка всех новостей
        const response = await apiRequest(`/presscentre/news/?lang=${i18n.language}&limit=1000`);
        
        console.log('API Response:', response); // Для отладки
        
        let newsItem;
        // Обработка разных форматов ответа API
        if (response.results && Array.isArray(response.results)) {
          newsItem = response.results.find(item => item.id.toString() === id);
        } else if (Array.isArray(response)) {
          newsItem = response.find(item => item.id.toString() === id);
        } else {
          throw new Error('Некорректный формат данных');
        }

        if (!newsItem) {
          throw new Error('Новость не найдена');
        }

        // Формируем массив изображений
        const galleryImages = [];
        
        console.log('News item data:', newsItem); // Для отладки
        
        // Основное изображение новости всегда первое
        if (newsItem.image) {
          galleryImages.push({
            url: newsItem.image,
            order: -1, // Основное изображение идёт первым
            isMain: true,
          });
        }
        
        // Обработка photos из нового API (приоритет)
        if (newsItem.photos && Array.isArray(newsItem.photos)) {
          console.log('Found photos array:', newsItem.photos); // Для отладки
          newsItem.photos.forEach((photo) => {
            if (photo.image) {
              galleryImages.push({
                url: photo.image,
                order: photo.order || 0,
                isMain: false,
              });
            }
          });
        }
        // Обработка галереи из вложенного объекта gallery
        else if (newsItem.gallery && Array.isArray(newsItem.gallery)) {
          console.log('Found gallery array:', newsItem.gallery); // Для отладки
          newsItem.gallery.forEach((photo) => {
            if (photo.image) {
              galleryImages.push({
                url: photo.image,
                order: photo.order || 0,
                isMain: false,
              });
            }
          });
        }
        // Для обратной совместимости - старое поле gallery_images
        else if (newsItem.gallery_images && Array.isArray(newsItem.gallery_images)) {
          console.log('Found gallery_images array:', newsItem.gallery_images); // Для отладки
          newsItem.gallery_images.forEach((img) => {
            if (img.image) {
              galleryImages.push({
                url: img.image,
                order: img.order || 0,
                isMain: false,
              });
            }
          });
        }
        
        // Сортируем по порядку (основное изображение будет первым из-за order: -1)
        galleryImages.sort((a, b) => (a.order || 0) - (b.order || 0));
        newsItem.images_url = galleryImages.map(img => img.url);
        
        console.log('Final gallery images:', galleryImages); // Для отладки
        console.log('Images URL array:', newsItem.images_url); // Для отладки
        
        setNewsData(newsItem);
        
        // Загружаем все новости для связанных
        await fetchRelatedNews(newsItem);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(t('newsDetail.errors.loading'));
        // Используем fallback данные
        setNewsData(getFallbackData());
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNewsDetail();
    } else {
      setError(t('newsDetail.errors.noId'));
      setLoading(false);
    }
  }, [id, i18n.language, t]);

  // Загрузка связанных новостей
  const fetchRelatedNews = async (currentNews) => {
    try {
      const response = await apiRequest(`/presscentre/news/?lang=${i18n.language}&limit=1000`);
      
      console.log('Related news response:', response); // Для отладки
      
      let allNews;
      if (response.results && Array.isArray(response.results)) {
        allNews = response.results;
      } else if (Array.isArray(response)) {
        allNews = response;
      } else {
        allNews = [];
      }
      
      // Фильтруем связанные новости (той же категории, исключая текущую)
      const related = allNews
        .filter(item => 
          item.id !== currentNews.id && 
          (item.category === currentNews.category || 
           item.category_id === currentNews.category_id)
        )
        .slice(0, 3);
      
      setRelatedNews(related);
    } catch (err) {
      console.error('Error fetching related news:', err);
    }
  };

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
      text: newsData.description || newsData.short_description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert(t('newsDetail.share.copied'));
      }
    } catch (err) {
      console.log(t('newsDetail.share.error'), err);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return t('newsDetail.date.unknown');
    return new Date(dateString).toLocaleDateString(i18n.language, {
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
    
    // Базовый URL
    const API_BASE_URL = import.meta.env.VITE_API_URL || "https://dordoi-backend-f6584db3b47e.herokuapp.com";
    return `${API_BASE_URL}${imagePath}`;
  };

  const getImagesArray = (data) => {
    if (!data) return [];
    
    if (data.images_url && Array.isArray(data.images_url)) {
      return data.images_url;
    }
    
    if (data.image) {
      return [data.image];
    }
    
    return [];
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

  // Обработка клавиатуры
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

  const getFallbackData = () => ({
    id: parseInt(id),
    title: t('newsDetail.fallback.title'),
    description: t('newsDetail.fallback.description'),
    content: t('newsDetail.fallback.content'),
    image: null,
    images_url: [],
    category_name: t('newsDetail.fallback.category'),
    created_at: new Date().toISOString(),
    tags: [],
    read_time: t('newsDetail.fallback.readTime'),
    views: 0,
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-blue-600 text-lg font-medium">{t('newsDetail.loading')}</p>
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
            {t('newsDetail.error.title')}
          </h1>
          <p className="text-gray-600 mb-6">
            {error || t('newsDetail.error.notFound')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/press')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
            >
              {t('newsDetail.error.homeButton')}
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 border border-gray-300 text-gray-600 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300 font-semibold"
            >
              {t('newsDetail.error.retryButton')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const data = newsData || getFallbackData();
  const images = getImagesArray(data);

  console.log('Final data object:', data); // Для отладки
  console.log('Images array:', images); // Для отладки
  console.log('Images length:', images.length); // Для отладки

  // Получаем контент для отображения
  const getContent = () => {
    if (data.content) return data.content;
    if (data.full_description) return data.full_description;
    if (data.description) return data.description;
    return t('newsDetail.content.soon');
  };

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
              <span>{t('newsDetail.header.back')}</span>
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>{t('newsDetail.header.share')}</span>
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
                  alt={data.title}
                  className={`w-full h-96 object-cover transition-all duration-500 hover:scale-105 ${
                    imageLoaded[0] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(0)}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                        <svg class="w-24 h-24 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    `;
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
                      {data.category_name || data.category?.title || t('newsDetail.defaultCategory')}
                    </span>
                    <h1 className="text-4xl font-bold leading-tight mb-3">{data.title}</h1>
                    {images.length > 1 && (
                      <p className="text-blue-100 text-lg opacity-90">
                        {t('newsDetail.photoCounter', { count: images.length })}
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
              <span>{formatDate(data.created_at || data.published_at)}</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg max-w-none bg-white rounded-3xl p-8 shadow-xl mb-12"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-blue-500 pl-4 bg-blue-50 py-4 rounded-r-lg">
              {data.short_description || data.description || getContent()}
            </p>

            <div className="space-y-6 text-gray-600 leading-8">
              {getContent() && (
                <div className="text-gray-700 whitespace-pre-line">
                  {getContent()}
                </div>
              )}
            </div>
          </motion.div>

          {/* Gallery */}
          {images.length > 1 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {t('newsDetail.gallery.title')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                      alt={`${data.title} ${index + 2}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onLoad={() => handleImageLoad(index + 1)}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                            <svg class="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                        `;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tags */}
          {data.tags && data.tags.length > 0 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Related News */}
          {relatedNews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {t('newsDetail.related')}
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
                  >
                    <div className="relative overflow-hidden h-48">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 z-10" />
                      {news.image ? (
                        <div
                          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url(${getImageUrl(news.image)})` }}
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
                          {news.category_name || news.category?.title || 'General'}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {formatDate(news.created_at || news.published_at)}
                        </span>
                      </div>

                      <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {news.title}
                      </h3>

                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">{news.short_description || news.description}</p>

                      <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        {t('newsDetail.readMore')}
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
                  alt={`${data.title} ${currentImageIndex + 1}`}
                  className="w-full max-h-[80vh] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-black">
                        <svg class="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    `;
                  }}
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

export default NewsDetailPage;