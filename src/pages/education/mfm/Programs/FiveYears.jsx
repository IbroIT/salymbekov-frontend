import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const GeneralMedicinePage = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

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
        <p key={index} className="mb-4 leading-relaxed text-lg text-gray-700">
          {line}
        </p>
      );
    });
  };

  const carouselImages = [
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b6732.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b6708.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b6617.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b5048.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b6580.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b5031.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b5004.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b5012.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b4697.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b4673.jpg'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2022/05/dokumenty-stopka-dokumentov.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('generalMedicine.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction Section */}
          <div className="mb-12">
            <div className="text-gray-700">
              {formatTextWithBold(t('generalMedicine.introduction'))}
            </div>
          </div>

          {/* Button Section */}
          <div className="mb-12">
            <a 
              href="https://salymbekov.com/wp-content/uploads/2024/01/curriculum-general-medicine.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('generalMedicine.curriculumButton')}
            </a>
          </div>

          {/* Program Info Section */}
          <div className="mb-12">
            <div className="text-gray-700">
              {formatTextWithBold(t('generalMedicine.programInfo'))}
            </div>
          </div>

          {/* Program Description Section */}
          <div className="mb-12">
            <div className="text-gray-700">
              {formatTextWithBold(t('generalMedicine.programDescription'))}
            </div>
          </div>

          {/* Program Goal Section */}
          <div className="mb-12">
            <div className="text-gray-700">
              {formatTextWithBold(t('generalMedicine.programGoal'))}
            </div>
          </div>

          {/* Professional Activities Section */}
          <div className="mb-12">
            <div className="text-gray-700">
              {formatTextWithBold(t('generalMedicine.professionalActivities'))}
            </div>
          </div>

          {/* Carousel Section */}
          <div className="mt-16">
            <div className="relative flex items-center justify-center">
              {/* Previous Button */}
              <button 
                onClick={prevImage}
                className="absolute left-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Main Image */}
              <div className="w-full max-w-2xl">
                <img 
                  src={carouselImages[currentImage]}
                  alt={`Carousel image ${currentImage + 1}`}
                  className="w-full h-96 object-cover rounded-lg shadow-2xl transition-opacity duration-500 ease-in-out"
                />
              </div>

              {/* Next Button */}
              <button 
                onClick={nextImage}
                className="absolute right-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    index === currentImage ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralMedicinePage;