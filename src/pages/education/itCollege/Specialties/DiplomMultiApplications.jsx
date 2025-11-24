
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const MobileDevelopmentPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const carouselImages = [
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2481.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2512.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2476.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2487.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2574.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2662.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2562.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2577.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2674.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2664.jpg'
  ];

  const changeImage = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const nextImage = () => {
    const newIndex = (currentImage + 1) % carouselImages.length;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImage - 1 + carouselImages.length) % carouselImages.length;
    changeImage(newIndex);
  };

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-4 leading-relaxed">
            <strong className="text-xl">{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-4 leading-relaxed text-lg">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2022/07/bc0b2716.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('mobileDevelopment.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Overview Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('mobileDevelopment.overview.title')}
            </h2>
            <div className="prose max-w-none text-gray-700">
              {formatTextWithBold(t('mobileDevelopment.overview.content'))}
            </div>
          </div>

          {/* Carousel Section */}
          <div className="mb-12 relative">
            <div className={`overflow-hidden rounded-lg transition-all duration-300 ease-in-out ${
              isTransitioning 
                ? 'shadow-2xl scale-105' 
                : 'shadow-lg scale-100'
            }`}>
              <img 
                src={carouselImages[currentImage]} 
                alt={`Carousel ${currentImage + 1}`}
                className="w-full h-96 object-cover transition-all duration-300 ease-in-out"
              />
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-blue-600 shadow-md scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:shadow-sm'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Program Goal Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('mobileDevelopment.programGoal.title')}
            </h2>
            <div className="prose max-w-none text-gray-700">
              {formatTextWithBold(t('mobileDevelopment.programGoal.content'))}
            </div>
          </div>

          {/* Career Opportunities Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('mobileDevelopment.careerOpportunities.title')}
            </h2>
            <div className="prose max-w-none text-gray-700">
              {formatTextWithBold(t('mobileDevelopment.careerOpportunities.content'))}
            </div>
          </div>

          {/* Other Programs Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('mobileDevelopment.otherPrograms.title')}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/education/itCollege/specialties/diplom-computer-science')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-md hover:shadow-lg"
              >
                {t('mobileDevelopment.otherPrograms.button1')}
              </button>
              <button 
                onClick={() => navigate('/education/itCollege/specialties/diplom-mobile-computing')}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 text-lg font-semibold shadow-md hover:shadow-lg"
              >
                {t('mobileDevelopment.otherPrograms.button2')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileDevelopmentPage;