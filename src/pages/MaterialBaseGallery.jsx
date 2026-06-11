import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContent } from '../hooks/usePageContent';

const MaterialBaseGallery = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Иконки (можно заменить на heroicons или использовать SVG)
  const ChevronLeftIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const PlayIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const PauseIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  // Заглушки для изображений
  const fallbackImages = [
    {
      id: 1,
      url: "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2745.jpg",
      title: "Материально-техническая база",
      category: "Инфраструктура"
    },
    {
      id: 2,
      url: "https://salymbekov.com/wp-content/uploads/2021/03/c0b9392.jpg",
      title: "Современные лаборатории",
      category: "Наука"
    },
    {
      id: 3,
      url: "https://salymbekov.com/wp-content/uploads/2021/03/c0b9391.jpg",
      title: "Образовательные помещения",
      category: "Образование"
    },
    {
      id: 4,
      url: "https://salymbekov.com/wp-content/uploads/2021/03/c0b9389.jpg",
      title: "Клиническая база",
      category: "Медицина"
    },
    {
      id: 5,
      url: "https://salymbekov.com/wp-content/uploads/2021/03/c0b9390.jpg",
      title: "Технологическое оборудование",
      category: "Технологии"
    },
    {
      id: 6,
      url: "https://salymbekov.com/wp-content/uploads/2022/07/photo_2022-07-18_15-21-07.jpg",
      title: "Инновационные решения",
      category: "Разработка"
    },
    {
      id: 7,
      url: "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2562.jpg",
      title: "Качественные ресурсы",
      category: "Ресурсы"
    }
  ];
  const { content } = usePageContent('material-base-gallery', {
    title: t('materialBase.title'),
    subtitle: t('materialBase.description'),
    data: {
      images: fallbackImages,
    },
  });
  const mediaImages = content?.media?.map((item) => ({
    id: item.id,
    url: item.url,
    title: item.title,
    category: item.key,
  })).filter((item) => item.url) || [];
  const images = mediaImages.length > 0 ? mediaImages : (content?.data?.images || fallbackImages);

  // Автопрокрутка
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок и описание */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content?.title || t('materialBase.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {content?.subtitle || t('materialBase.description')}
          </p>
        </div>

        {/* Основная галерея */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
          {/* Главное изображение */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden bg-black">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={image.id} className="w-full flex-shrink-0 relative flex items-center justify-center">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Информация о изображении - убрана по запросу */}
                  
                </div>
              ))}
            </div>

            {/* Кнопки навигации */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRightIcon />
            </button>

            {/* Кнопка автопрокрутки */}
            <button
              onClick={toggleAutoplay}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
          </div>

          {/* Миниатюры */}
          <div className="p-6 bg-gray-50">
            <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 relative group transition-all duration-300 ${
                    index === currentIndex 
                      ? 'transform scale-105' 
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-20 h-16 md:w-24 md:h-20 object-cover rounded-lg shadow-md"
                  />
                  <div className={`absolute inset-0 rounded-lg transition-colors ${
                    index === currentIndex 
                      ? 'bg-blue-500/20' 
                      : 'bg-black/0 group-hover:bg-black/10'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Индикаторы и кнопки */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4 animate-fade-in">
          {/* Индикаторы */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 font-medium">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <div className="flex space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialBaseGallery;
