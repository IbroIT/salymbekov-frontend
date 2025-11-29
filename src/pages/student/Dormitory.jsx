import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaHome, FaWifi, FaUtensils, FaShower, FaBed, FaDesktop, FaMapMarkerAlt, FaHospital, FaHandHoldingHeart, FaBookOpen, FaGlobe, FaBrain, FaUsersCog } from 'react-icons/fa';

// Импорт 20 фото для галереи (17-36)
import img17 from '../../../assets/science/studentsphoto/17.jpg';
import img18 from '../../../assets/science/studentsphoto/18.jpg';
import img19 from '../../../assets/science/studentsphoto/19.jpg';
import img20 from '../../../assets/science/studentsphoto/20.jpg';
import img21 from '../../../assets/science/studentsphoto/21.jpg';
import img22 from '../../../assets/science/studentsphoto/22.jpg';
import img23 from '../../../assets/science/studentsphoto/23.jpg';
import img24 from '../../../assets/science/studentsphoto/24.jpg';
import img25 from '../../../assets/science/studentsphoto/25.jpeg';
import img26 from '../../../assets/science/studentsphoto/26.jpeg';
import img27 from '../../../assets/science/studentsphoto/27.jpeg';
import img28 from '../../../assets/science/studentsphoto/28.jpeg';
import img29 from '../../../assets/science/studentsphoto/29.jpeg';
import img30 from '../../../assets/science/studentsphoto/30.jpeg';
import img31 from '../../../assets/science/studentsphoto/31.jpeg';
import img32 from '../../../assets/science/studentsphoto/32.jpeg';
import img33 from '../../../assets/science/studentsphoto/33.jpeg';
import img34 from '../../../assets/science/studentsphoto/34.jpeg';
import img35 from '../../../assets/science/studentsphoto/35.jpeg';
import img36 from '../../../assets/science/studentsphoto/36.jpeg';

const Dormitory = () => {
  const navigate = useNavigate();

  const opportunitiesSections = [
    { 
      path: "/student/opportunities/medical", 
      name: "МЕДИЦИНСКИЙ ЦЕНТР", 
      icon: FaHospital,
    },
    { 
      path: "/student/opportunities/dorm", 
      name: "ОБЩЕЖИТИЕ", 
      icon: FaBed,
      active: true,
    },
    { 
      path: "/student/opportunities/social", 
      name: "СОЦИАЛЬНАЯ ПОДДЕРЖКА", 
      icon: FaHandHoldingHeart,
    },
    { 
      path: "/student/opportunities/courses", 
      name: "КУРСЫ ПО ВЫБОРУ", 
      icon: FaBookOpen,
    },
    { 
      path: "/student/opportunities/mobility", 
      name: "АКАДЕМИЧЕСКАЯ МОБИЛЬНОСТЬ", 
      icon: FaGlobe,
    },
    { 
      path: "/student/opportunities/psychology", 
      name: "ПСИХОЛОГИЧЕСКАЯ ПОДДЕРЖКА", 
      icon: FaBrain,
    },
    { 
      path: "/student/opportunities/service-center", 
      name: "ЦЕНТР ОБСЛУЖИВАНИЯ СТУДЕНТОВ", 
      icon: FaUsersCog,
    },
    { 
      path: "/student/opportunities/adaptation", 
      name: "АДАПТАЦИОННЫЕ ПРОГРАММЫ", 
      icon: FaUserGraduate,
    },
  ];

  const features = [
    {
      icon: FaBed,
      title: "Комфортабельные комнаты",
      description: "2-х и 3-х местные номера с удобными кроватями и столами для занятий"
    },
    {
      icon: FaWifi,
      title: "Высокоскоростной интернет",
      description: "Стабильное подключение для учебы и отдыха"
    },
    {
      icon: FaShower,
      title: "Современные душевые",
      description: "Душевые комнаты с постоянной горячей водой"
    },
    {
      icon: FaUtensils,
      title: "Столовая",
      description: "Полноценное питание в оборудованной столовой"
    },
    {
      icon: FaDesktop,
      title: "Учебные зоны",
      description: "Специально оборудованные места для подготовки к занятиям"
    },
    {
      icon: FaHome,
      title: "Благоустроенная территория",
      description: "4-этажное здание в живописном районе"
    }
  ];

  // 20 фото для галереи
  const dormPhotos = [
    img17, img18, img19, img20, img21, img22, img23, img24,
    img25, img26, img27, img28, img29, img30, img31, img32,
    img33, img34, img35, img36
  ];

  // Состояния для карусели и zoom
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [isHovering, setIsHovering] = React.useState(false);

  // Автоматическая прокрутка каждые 5 секунд
  React.useEffect(() => {
    if (isAutoPlaying && !isHovering && !modalOpen) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isHovering, modalOpen, carouselIndex]);

  // Количество фото на одной странице
  const photosPerPage = 4;
  const totalPages = Math.ceil(dormPhotos.length / photosPerPage);

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setCarouselIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const openModal = (photo) => {
    setModalImg(photo);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  // Получить текущие 4 фото для отображения
  const getCurrentPhotos = () => {
    const start = carouselIndex * photosPerPage;
    return dormPhotos.slice(start, start + photosPerPage);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/student')}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Назад к студенту
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                Условия проживания
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Студенческое общежитие
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Комфортабельное и современное общежитие, оснащенное всеми бытовыми условиями для проживания и подготовки к занятиям
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaUsers className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">СТУДЕНТАМ</h3>
                </div>
              </div>
              <nav className="p-2">
                {opportunitiesSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.path}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => navigate(section.path)}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium text-sm">{section.name}</span>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Основная информация */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaHome className="mr-3 text-[#023E8A]" />
                    ОБЩЕЖИТИЕ УНИВЕРСИТЕТА
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Учреждение "Салымбеков Университет" предоставляет студентам комфортабельное и современное общежитие, 
                    оснащенное всеми бытовыми условиями для проживания и подготовки к занятиям.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaMapMarkerAlt className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Местоположение</p>
                        <p className="text-gray-700">с. Новопокровка, недалеко от г. Бишкек</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaHome className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Здание</p>
                        <p className="text-gray-700">4-этажное здание, 54 комнаты</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaBed className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Размещение</p>
                        <p className="text-gray-700">2-х и 3-х местные номера</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/70 rounded-lg">
                      <FaWifi className="text-[#023E8A] text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Интернет</p>
                        <p className="text-gray-700">Высокоскоростное подключение</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Особенности и удобства */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Условия и удобства</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 text-center hover:shadow-lg transition-all"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="text-white text-2xl" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-700 text-sm">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Галерея фотографий */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-[#023E8A] pb-2">
                  Фотогалерея общежития
                </h3>
                
                {/* Адаптивная карусель галерея */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {/* Стрелка влево */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#023E8A] text-gray-800 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110"
                    aria-label="Предыдущие фото"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Контейнер с фотографиями */}
                  <div className="overflow-hidden px-12">
                    <motion.div
                      key={carouselIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                      {getCurrentPhotos().map((photo, index) => (
                        <motion.div
                          key={carouselIndex * photosPerPage + index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 group"
                          onClick={() => openModal(photo)}
                        >
                          <img
                            src={photo}
                            alt={`Общежитие - фото ${carouselIndex * photosPerPage + index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          {/* Overlay при hover */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                            <svg 
                              className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Стрелка вправо */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#023E8A] text-gray-800 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110"
                    aria-label="Следующие фото"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Индикаторы (точки) */}
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCarouselIndex(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === carouselIndex
                            ? 'w-8 h-3 bg-[#023E8A]'
                            : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Перейти к странице ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Счетчик и контроль автопрокрутки */}
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <span className="text-sm text-gray-600">
                      Страница {carouselIndex + 1} из {totalPages}
                    </span>
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      {isAutoPlaying ? '⏸ Остановить' : '▶ Запустить'}
                    </button>
                  </div>
                </div>

                {/* Модальное окно для увеличения фото */}
                {modalOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={closeModal}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 50 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 50 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-5xl w-full mx-4 flex flex-col items-center"
                      onClick={e => e.stopPropagation()}
                    >
                      <button
                        onClick={closeModal}
                        className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-lg transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Закрыть"
                      >
                        ×
                      </button>
                      <img
                        src={modalImg}
                        alt="Фото общежития увеличено"
                        className="max-h-[80vh] w-auto rounded-xl object-contain"
                        style={{boxShadow: '0 20px 60px rgba(2,62,138,0.3)'}}
                      />
                      <p className="mt-4 text-gray-600 text-sm">Нажмите на фон или крестик, чтобы закрыть</p>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>

              {/* Дополнительная информация */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaHome className="mr-3 text-[#023E8A]" />
                  Дополнительные услуги
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Снабжение свежими продуктами и овощами",
                    "Круглосуточная охрана и безопасность",
                "Прачечная и химчистка",
                    "Спортивные и рекреационные зоны",
                    "Комнаты для самостоятельных занятий",
                    "Зоны отдыха и социальной активности"
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center p-3 bg-white/70 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Контактная информация */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200"
              >
                <div className="flex items-start">
                  <FaHome className="text-yellow-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Заселение в общежитие
                    </h4>
                    <p className="text-gray-700 mb-3">
                      По вопросам заселения в студенческое общежитие обращайтесь в администрацию:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        📞 Администрация: +996 (312) 00-00-00
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        📧 Email: dormitory@salymbekov.com
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        🏢 Администратор: 1 этаж общежития
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        🕒 Часы приема: 9:00 - 18:00
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dormitory;