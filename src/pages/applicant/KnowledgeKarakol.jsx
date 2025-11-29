import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaWhatsapp, FaVk, FaTelegram } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const KnowledgeKarakol = () => {
  const imageNames = [
    '490535458_18073487431843726_191185903802627713_n.jpg',
    '490746712_18073487428843726_6636239492879015718_n.jpg',
    '490752537_18073487458843726_9043068194049831220_n.jpg',
    '490769588_18073487530843726_8488873142067064305_n-1.jpg',
    '490794879_18073487461843726_4713487159938951501_n.jpg',
    '491437323_18073487464843726_6660547102302229365_n.jpg',
    '491442550_18073487467843726_6116804501253491357_n.jpg',
    '491444385_18073487515843726_6002970695714723189_n.jpg',
    '491445046_18073487509843726_2529041618617258724_n.jpg',
    '491499321_18073487512843726_648461341101065649_n.jpg'
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = imageNames.map(name =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = `/src/assets/applicant/orientatioin/moredetails/karakol/${name}`;
          img.onload = () => resolve(img.src);
          img.onerror = () => resolve(null);
        })
      );
      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages.filter(img => img !== null));
    };
    loadImages();
  }, []);

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/sharer/sharer.php?u=https://salymbekov.com/ru/karavan-znanij-v-karakole/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://x.com/intent/tweet?text=%D0%9A%D0%B0%D1%80%D0%B0%D0%B2%D0%B0%D0%BD%20%D0%B7%D0%BD%D0%B0%D0%BD%D0%B8%D0%B9%20%D0%B2%20%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%BB%D0%B5!%C2%A0https://salymbekov.com/ru/karavan-znanij-v-karakole/',
      color: 'hover:bg-sky-500'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/?text=%D0%9A%D0%B0%D1%80%D0%B0%D0%B2%D0%B0%D0%BD%20%D0%B7%D0%BD%D0%B0%D0%BD%D0%B8%D0%B9%20%D0%B2%20%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%BB%D0%B5!%20https://salymbekov.com/ru/karavan-znanij-v-karakole/',
      color: 'hover:bg-green-500'
    },
    {
      name: 'VK',
      icon: FaVk,
      url: 'https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%3A%2F%2Fsalymbekov.com%2Fru%2Fkaravan-znanij-v-karakole%2F%26title%3D%25D0%259A%25D0%25B0%25D1%2580%25D0%25B0%25D0%25B2%25D0%25B0%25D0%25BD%2520%25D0%25B7%25D0%25BD%25D0%25B0%25D0%25BD%25D0%25B8%25D0%25B9%2520%25D0%25B2%2520%25D0%259A%25D0%25B0%25D1%2580%25D0%25B0%25D0%25BA%25D0%25BE%25D0%25BB%25D0%25B5%21&display=widget',
      color: 'hover:bg-blue-700'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      url: 'https://telegram.me/share/url?url=https://salymbekov.com/ru/karavan-znanij-v-karakole/&title=%D0%9A%D0%B0%D1%80%D0%B0%D0%B2%D0%B0%D0%BD%20%D0%B7%D0%BD%D0%B0%D0%BD%D0%B8%D0%B9%20%D0%B2%20%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%BB%D0%B5!',
      color: 'hover:bg-blue-500'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/src/assets/applicant/orientatioin/1.jpg"
            alt="Караван знаний в Караколе"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1920x1080/0077B6/FFFFFF?text=Караван+знаний+в+Караколе';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#023E8A]/90 to-[#0077B6]/90" />
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white text-sm font-semibold mb-6 shadow-lg">
            Профориентация
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Караван знаний в Караколе
          </h1>
          <div className="flex items-center justify-center gap-8 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-6 h-6" />
              <span>30.05.2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-6 h-6" />
              <span>Каракол</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8">
            {/* Social Share Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block sticky top-24 h-fit"
            >
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-3 bg-white rounded-full shadow-lg ${social.color} text-gray-600 hover:text-white transition-all duration-300 hover:scale-110`}
                    title={`Поделиться в ${social.name}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-12"
              >
                <Link
                  to="/applicants/career-guidance"
                  className="inline-flex items-center gap-2 text-[#0077B6] hover:text-[#023E8A] transition-colors font-semibold text-lg"
                >
                  <FiArrowLeft className="w-5 h-5" />
                  Вернуться к мероприятиям
                </Link>
              </motion.div>

              {/* Mobile Social Share */}
              <div className="lg:hidden mb-8">
                <div className="flex gap-3 justify-center flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white rounded-full shadow-lg ${social.color} text-gray-600 hover:text-white transition-all duration-300`}
                      title={`Поделиться в ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl p-10 mb-12"
              >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-8">
                  Караван знаний в Караколе!
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    По инициативе Министерства образования и науки Кыргызской Республики и при поддержке Аппарата
                    Полномочного представителя Президента КР в Иссык-Кульской области в городе Каракол прошла
                    масштабная акция <strong className="text-[#0077B6]">«Караван знаний»</strong> для учеников
                    9-х и 11-х классов.
                  </p>
                  <p>
                    В мероприятии приняли участие специалисты, получившие образование за рубежом и имеющие опыт
                    работы в международных компаниях.
                  </p>
                  <p>
                    Они провели мотивационные встречи, мастер-классы и поделились важной информацией о будущих
                    профессиях, трансформации образования в Кыргызстане, глобальных возможностях для молодежи и
                    вопросах социального развития.
                  </p>
                  <p>
                    <strong className="text-[#0077B6]">Цель акции</strong> — вдохновить школьников, расширить их
                    кругозор, помочь определиться с будущей профессией и открыть путь к качественному образованию
                    и социально активной жизни в обществе.
                  </p>
                </div>
              </motion.div>

              {/* Photo Gallery */}
              {images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h3 className="text-3xl font-bold text-[#023E8A] mb-6">Фотогалерея</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow group"
                      >
                        <img
                          src={img}
                          alt={`Караван знаний ${index + 1}`}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeKarakol;
