// ITCollege.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaPhone,
  FaWhatsapp,
  FaGraduationCap,
  FaLaptop,
  FaUsers,
  FaDownload,
  FaArrowRight,
  FaTimes
} from 'react-icons/fa';

const ITBusinessCollege = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  // Массив URL для картинок галереи
  const galleryImages = [
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2481-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2721-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2745-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2716-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2741-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2725-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2664-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2674-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2687-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2662-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2512-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2487-600x800.jpg", 
    "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2562-600x800.jpg"
  ];

  const features = [
    {
      icon: <FaLaptop className="text-white" size={24} />,
      title: t('itBusinessCollege.features.modernEquipment.title'),
      description: t('itBusinessCollege.features.modernEquipment.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('itBusinessCollege.features.professionalTeachers.title'),
      description: t('itBusinessCollege.features.professionalTeachers.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('itBusinessCollege.features.practicalSkills.title'),
      description: t('itBusinessCollege.features.practicalSkills.description'),
      color: "bg-[#0096C7]"
    }
  ];

  const phoneNumbers = [
    {
      icon: <FaWhatsapp className="text-green-500" size={20} />,
      label: t('itBusinessCollege.phoneNumbers.whatsapp'),
      number: "+996 555 123 456",
      link: "https://wa.me/996555123456"
    },
    {
      icon: <FaPhone className="text-[#023E8A]" size={20} />,
      label: t('itBusinessCollege.phoneNumbers.number1'),
      number: "+996 (312) 54-19-41",
      link: "tel:+996312541941"
    },
    {
      icon: <FaPhone className="text-[#0077B6]" size={20} />,
      label: t('itBusinessCollege.phoneNumbers.number2'),
      number: "+996 555 987 654",
      link: "tel:+996555987654"
    },
    {
      icon: <FaPhone className="text-[#0096C7]" size={20} />,
      label: t('itBusinessCollege.phoneNumbers.number3'),
      number: "+996 777 888 999",
      link: "tel:+996777888999"
    }
  ];

  const openImageModal = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.03, 0.1, 0.03],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Герой секция с белым фоном и синим текстом */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white py-24"
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
            >
              <FaLaptop className="text-xl" />
              <span className="font-semibold">{t('itBusinessCollege.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {t('itBusinessCollege.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('itBusinessCollege.subtitle')}
            </p>
          </div>
        </motion.div>

        {/* Отдельный блок с фоновым изображением */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto px-4 -mt-8 relative z-20"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b2741-600x800.jpg"
              alt={t('itBusinessCollege.hero.imageAlt')}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </motion.div>

        {/* Основной контент */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Пригласительный текст */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12 text-center"
          >
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              {t('itBusinessCollege.invitationText')}
            </p>
          </motion.div>

          {/* Особенности колледжа */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Основной контент с изображением */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              <img 
                src="https://salymbekov.com/wp-content/uploads/2021/01/%D0%96%D1%83%D0%BC%D0%B0%D0%B4%D0%B8%D0%BB%D0%BE%D0%B2-%D0%AD%D1%81%D0%B5%D0%BD%D0%B3%D0%B5%D0%BB%D0%B4%D0%B8-%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%A1%D0%B0%D0%BB%D1%8B%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82-1024x683.jpg"
                alt={t('itBusinessCollege.mainImageAlt')}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="flex items-center">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('itBusinessCollege.description1')}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('itBusinessCollege.description2')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('itBusinessCollege.description3')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center">
                <FaPhone className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                {t('itBusinessCollege.admissionText')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {phoneNumbers.map((phone, index) => (
                <motion.a
                  key={index}
                  href={phone.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    {phone.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-700">
                      {phone.label}
                    </div>
                    <div className="text-lg font-bold text-[#023E8A]">
                      {phone.number}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Галерея */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('itBusinessCollege.gallery.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('itBusinessCollege.gallery.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((imageUrl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="cursor-pointer bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                  onClick={() => openImageModal(index)}
                >
                  <img 
                    src={imageUrl}
                    alt={t('itBusinessCollege.gallery.imageAlt', { number: index + 1 })}
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Призыв к действию */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              {t('itBusinessCollege.cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('itBusinessCollege.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+996312541941"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPhone />
                {t('itBusinessCollege.cta.callNow')}
              </motion.a>
             
            </div>
          </motion.div>
        </div>
      </div>

      {/* Модальное окно для просмотра картинки */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors z-10"
              onClick={closeImageModal}
            >
              <FaTimes size={24} />
            </button>
            
            <div className="relative">
              <img 
                src={galleryImages[selectedImage]}
                alt={t('itBusinessCollege.gallery.imageAlt', { number: selectedImage + 1 })}
                className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
              >
                ‹
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
              >
                ›
              </button>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ITBusinessCollege;