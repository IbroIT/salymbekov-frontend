import React, { useState, useEffect } from 'react';
import { getBanners } from '../../api';

const SimplePhotoSlider = ({ isSplashVisible = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [banners, setBanners] = useState([]);

  const fallbackPhotos = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg'];
  const bannerPhotos = banners.map(banner => banner.image).filter(Boolean);
  const photos = bannerPhotos.length > 0 ? bannerPhotos : fallbackPhotos;
  const canNavigate = photos.length > 1;

  const nextSlide = () => {
    if (isTransitioning || !canNavigate) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isTransitioning || !canNavigate) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    if (isTransitioning || !canNavigate || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await getBanners();
        setBanners(Array.isArray(data?.results) ? data.results : Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch banners:', error);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    if (currentSlide >= photos.length) {
      setCurrentSlide(0);
    }
  }, [currentSlide, photos.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    const autoSlide = setInterval(() => {
      if (!isPaused && canNavigate) {
        nextSlide();
      }
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(autoSlide);
    };
  }, [currentSlide, isPaused, canNavigate]);

  return (
    <div 
      className={`relative w-screen h-[90vh] bg-black overflow-hidden
        transition-all duration-1000 ease-out
        ${isSplashVisible ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
      `}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Основной контейнер для слайдов */}
      <div className="relative w-full h-full">
        
        {/* Текущий слайд */}
        <div 
          className="absolute inset-0 w-full h-full transition-opacity duration-500"
          style={{ opacity: isTransitioning ? 0.7 : 1 }}
        >
          <img 
            src={photos[currentSlide]} 
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover transition-transform duration-1000"
            style={{ transform: isTransitioning ? 'scale(1.05)' : 'scale(1)' }}
          />
        </div>

        {/* Предыдущий слайд (для плавного перехода) */}
        {photos.map((photo, index) => (
          index !== currentSlide && (
            <div 
              key={index}
              className="absolute inset-0 w-full h-full opacity-0"
              style={{ zIndex: -1 }}
            >
              <img 
                src={photo} 
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          )
        ))}
      </div>

      {/* Навигационные стрелки */}
      {canNavigate && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 group"
          >
            <svg className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 group"
          >
            <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Индикаторы слайдов внизу */}
      {canNavigate && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-10 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-16' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 rounded-full bg-white animate-pulse" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Счетчик слайдов в правом нижнем углу */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
          <span className="text-white text-sm font-medium">
            {currentSlide + 1} / {photos.length}
          </span>
        </div>
      </div>

      {/* Кнопки навигации для мобильных (свайп) */}
      <div className="absolute inset-0 z-10 md:hidden">
        <div 
          className="w-1/2 h-full" 
          onClick={prevSlide}
          onTouchStart={(e) => {
            const touchX = e.touches[0].clientX;
            const width = window.innerWidth;
            
            if (touchX < width / 2) {
              prevSlide();
            } else {
              nextSlide();
            }
          }}
        />
      </div>

    </div>
  );
};

export default SimplePhotoSlider;
