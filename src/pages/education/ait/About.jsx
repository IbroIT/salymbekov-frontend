// // components/AboutInstitutePage.jsx
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// const AboutInstitutePage = () => {
//   const { t } = useTranslation();
//   const [currentImage, setCurrentImage] = useState(0);

//   const carouselImages = [
    // 'https://salymbekov.com/wp-content/uploads/2025/10/img_5232.jpg',
    // 'https://salymbekov.com/wp-content/uploads/2025/10/img_5240.jpg',
    // 'https://salymbekov.com/wp-content/uploads/2025/10/img_5280.jpg',
    // 'https://salymbekov.com/wp-content/uploads/2025/10/img_5148.jpg',
    // 'https://salymbekov.com/wp-content/uploads/2025/10/img_5188.jpg',
    // 'https://salymbekov.com/wp-content/uploads/2025/10/img_5211.jpg',
    // 'https://salymbekov.com/wp-content/uploads/2025/10/img_5124.jpg',
    // 'https://salymbekov.com/wp-content/uploads/2025/10/img_5306.jpg',
    // 'https://salymbekov.com/wp-content/uploads/2025/10/img_5370.jpg',
    // 'https://salymbekov.com/wp-content/uploads/2025/10/img_5361.jpg'
//   ];

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % carouselImages.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//   };

//   const formatTextWithBold = (text) => {
//     return text.split('\n').map((line, index) => {
//       if (line.includes('<strong>')) {
//         return (
//           <p key={index} className="mb-4 leading-relaxed">
//             <strong>{line.replace(/<strong>|<\/strong>/g, '')}</strong>
//           </p>
//         );
//       }
//       return (
//         <p key={index} className="mb-4 leading-relaxed">
//           {line}
//         </p>
//       );
//     });
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Header Section */}
//       <section 
//         className="relative py-20 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2023/06/bigstock-top-computer-corporation-compa-67399066-jpg-e1686293198722.webp')` }}
//       >
//         <div className="absolute inset-0 bg-black/30"></div>
//         <div className="relative container mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
//             {t('aboutInstitute.title')}
//           </h1>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4 max-w-4xl">
//           {/* Text Content */}
//           <div className="mb-12">
//             <div className="prose max-w-none text-gray-700">
//               {formatTextWithBold(t('aboutInstitute.content'))}
//             </div>
//           </div>

//           {/* Two Full Width Images */}
//           <div className="mb-12 space-y-8">
//             <div className="w-full">
//               <img 
//                 src="https://salymbekov.com/wp-content/uploads/2023/07/licenzija-ait_00001-300x211.webp" 
//                 alt="AIT Image 1"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <div className="w-full">
//               <img 
//                 src="https://salymbekov.com/wp-content/uploads/2023/07/qip-shot-screen-137-300x210.png" 
//                 alt="AIT Image 2"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>


// components/AboutInstitutePage.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AboutInstitutePage = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const carouselImages = [
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5232.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5240.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5280.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5148.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5188.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5211.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5124.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5306.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5370.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5361.jpg'
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
            <strong>{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-4 leading-relaxed">
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
        style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2023/06/bigstock-top-computer-corporation-compa-67399066-jpg-e1686293198722.webp')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('aboutInstitute.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Text Content */}
          <div className="mb-12">
            <div className="prose max-w-none text-gray-700">
              {formatTextWithBold(t('aboutInstitute.content'))}
            </div>
          </div>

          {/* Two Full Width Images */}
          <div className="mb-12 space-y-8">
            <div className="w-full">
              <img 
                src="https://salymbekov.com/wp-content/uploads/2023/07/licenzija-ait_00001-300x211.webp" 
                alt="AIT Image 1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full">
              <img 
                src="https://salymbekov.com/wp-content/uploads/2023/07/qip-shot-screen-137-300x210.png" 
                alt="AIT Image 2"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Welcome Section */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('aboutInstitute.welcome')}
            </h2>
          </div>

          {/* Carousel Section */}
          <div className="relative">
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
        </div>
      </section>
    </div>
  );
};

export default AboutInstitutePage;


