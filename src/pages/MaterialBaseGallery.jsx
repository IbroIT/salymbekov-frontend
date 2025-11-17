import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1600585154340-ffffd44ef2f3?w=800&h=600&fit=crop",
      title: "Современное оборудование",
      category: "Технологии"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      title: "Производственные мощности",
      category: "Инфраструктура"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      title: "Лабораторные исследования",
      category: "Наука"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      title: "Инновационные решения",
      category: "Разработка"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      title: "Качественные материалы",
      category: "Ресурсы"
    }
  ];

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
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок и описание */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('materialBase.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('materialBase.description')}
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-lg inline-block transform hover:scale-105 transition-transform duration-300">
            <p className="text-gray-700 text-base md:text-lg">
              {t('materialBase.cost')}
            </p>
          </div>
        </div>

        {/* Основная галерея */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
          {/* Главное изображение */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={image.id} className="w-full flex-shrink-0 relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Информация о изображении */}
                  <div className="absolute bottom-8 left-8 text-white">
                    <span className="inline-block px-3 py-1 bg-blue-500 rounded-full text-sm font-medium mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold">{image.title}</h3>
                  </div>
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
                      ? 'ring-4 ring-blue-500 ring-offset-2 transform scale-105' 
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