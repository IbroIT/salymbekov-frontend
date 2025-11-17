import React, { useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Welcome to Salymbekov University',
      description: 'Leading medical education in Kyrgyzstan',
      image: '/images/slide1.jpg' // Замените на реальные пути к изображениям
    },
    {
      id: 2,
      title: 'Innovative Research',
      description: 'Advancing medical science and technology',
      image: '/images/slide2.jpg'
    },
    {
      id: 3,
      title: 'Quality Education',
      description: 'Preparing future healthcare professionals',
      image: '/images/slide3.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-screen shrink-0 relative">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
      >
        &#10095;
      </button>

      {}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

