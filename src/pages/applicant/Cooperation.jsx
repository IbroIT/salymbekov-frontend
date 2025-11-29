import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiFileText, FiCheckCircle } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaWhatsapp, FaVk, FaTelegram } from 'react-icons/fa';

const Cooperation = () => {
  const imageNames = [
    '330436291_687459536399845_7798914401833942415_n.jpg',
    '334796562_377589124835592_5592494686203681321_n.jpg'
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = imageNames.map(name =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = `/src/assets/applicant/orientatioin/moredetails/cooperation/${name}`;
          img.onload = () => resolve(img.src);
          img.onerror = () => resolve(null);
        })
      );
      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages.filter(img => img !== null));
    };
    loadImages();
  }, []);

  const shareUrl = encodeURIComponent('https://salymbekov.com/ru/memorandum-o-sotrudnichestve-so-shkoloj-gimnaziej-68-im-a-osmonova/');
  const shareTitle = encodeURIComponent('Меморандум о сотрудничестве со школой-гимназией 68 им А. Осмонова');

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/sharer/sharer.php?u=https://salymbekov.com/ru/memorandum-o-sotrudnichestve-so-shkoloj-gimnaziej-68-im-a-osmonova/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://x.com/intent/tweet?text=%D0%9C%D0%B5%D0%BC%D0%BE%D1%80%D0%B0%D0%BD%D0%B4%D1%83%D0%BC%20%D0%BE%20%D1%81%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%20%D1%81%D0%BE%20%D1%88%D0%BA%D0%BE%D0%BB%D0%BE%D0%B9-%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D0%B7%D0%B8%D0%B5%D0%B9%2068%20%D0%B8%D0%BC%20%D0%90.%20%D0%9E%D1%81%D0%BC%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%C2%A0https://salymbekov.com/ru/memorandum-o-sotrudnichestve-so-shkoloj-gimnaziej-68-im-a-osmonova/',
      color: 'hover:bg-sky-500'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://api.whatsapp.com/send/?text=https%3A%2F%2Fsalymbekov.com%2Fru%2Fmemorandum-o-sotrudnichestve-so-shkoloj-gimnaziej-68-im-a-osmonova%2F&type=custom_url&app_absent=0',
      color: 'hover:bg-green-500'
    },
    {
      name: 'VK',
      icon: FaVk,
      url: 'https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%3A%2F%2Fsalymbekov.com%2Fru%2Fmemorandum-o-sotrudnichestve-so-shkoloj-gimnaziej-68-im-a-osmonova%2F%26title%3D%25D0%259C%25D0%25B5%25D0%25BC%25D0%25BE%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B4%25D1%2583%25D0%25BC%2520%25D0%25BE%2520%25D1%2581%25D0%25BE%25D1%2582%25D1%2580%25D1%2583%25D0%25B4%25D0%25BD%25D0%25B8%25D1%2587%25D0%25B5%25D1%2581%25D1%2582%25D0%25B2%25D0%25B5%2520%25D1%2581%25D0%25BE%2520%25D1%2588%25D0%25BA%25D0%25BE%25D0%25BB%25D0%25BE%25D0%25B9-%25D0%25B3%25D0%25B8%25D0%25BC%25D0%25BD%25D0%25B0%25D0%25B7%25D0%25B8%25D0%25B5%25D0%25B9%252068%2520%25D0%25B8%25D0%25BC%2520%25D0%2590.%2520%25D0%259E%25D1%2581%25D0%25BC%25D0%25BE%25D0%25BD%25D0%25BE%25D0%25B2%25D0%25B0&display=widget',
      color: 'hover:bg-blue-700'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      url: 'https://telegram.me/share/url?url=https://salymbekov.com/ru/memorandum-o-sotrudnichestve-so-shkoloj-gimnaziej-68-im-a-osmonova/&title=%D0%9C%D0%B5%D0%BC%D0%BE%D1%80%D0%B0%D0%BD%D0%B4%D1%83%D0%BC%20%D0%BE%20%D1%81%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%20%D1%81%D0%BE%20%D1%88%D0%BA%D0%BE%D0%BB%D0%BE%D0%B9-%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D0%B7%D0%B8%D0%B5%D0%B9%2068%20%D0%B8%D0%BC%20%D0%90.%20%D0%9E%D1%81%D0%BC%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0',
      color: 'hover:bg-blue-500'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
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
            src="/src/assets/applicant/orientatioin/3.jpg"
            alt="Меморандум о сотрудничестве"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1920x1080/0077B6/FFFFFF?text=Меморандум+о+сотрудничестве';
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
            Новости
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Меморандум о сотрудничестве со школой-гимназией 68 им А. Осмонова
          </h1>
          <div className="flex items-center justify-center gap-8 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-6 h-6" />
              <span>14.03.2023</span>
            </div>
            <div className="flex items-center gap-2">
              <FiFileText className="w-6 h-6" />
              <span>Партнерство</span>
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl p-10 mb-12"
              >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-8">
                  Меморандум о сотрудничестве со школой-гимназией 68 им А. Осмонова
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    Салымбеков Университет подписал меморандум о сотрудничестве со школой-гимназией 68 им А. Осмонова.
                  </p>
                  <p>
                    В рамках сотрудничества будем проводить <strong className="text-[#0077B6]">совместные мероприятия и профориентационные встречи</strong>, которые помогут школьникам реализовывать свой потенциал и достигать успеха в жизни.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-10 mb-12"
              >
                <h3 className="text-3xl font-bold text-[#023E8A] mb-8 flex items-center gap-3">
                  <FiCheckCircle className="w-8 h-8" />
                  Ключевые направления сотрудничества
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      title: 'Профориентация',
                      desc: 'Организация профориентационных мероприятий, дней открытых дверей и карьерных консультаций для учащихся'
                    },
                    {
                      title: 'Образовательные программы',
                      desc: 'Проведение подготовительных курсов, олимпиад и интеллектуальных конкурсов для школьников'
                    },
                    {
                      title: 'Мастер-классы',
                      desc: 'Регулярные мастер-классы от преподавателей университета по IT-технологиям, медицине и бизнесу'
                    },
                    {
                      title: 'Льготы для выпускников',
                      desc: 'Специальные условия поступления и скидки на обучение для выпускников школы-гимназии №68'
                    },
                    {
                      title: 'Обмен опытом',
                      desc: 'Совместные научно-методические семинары и обмен передовым педагогическим опытом'
                    },
                    {
                      title: 'Практика студентов',
                      desc: 'Организация педагогической практики студентов университета на базе школы-гимназии'
                    }
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
                    >
                      <h4 className="text-xl font-bold text-[#0077B6] mb-2">{point.title}</h4>
                      <p className="text-gray-700">{point.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-8">
                    Фотогалерея
                  </h2>
                  <div className="grid grid-cols-1 gap-6">
                    {images.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group overflow-hidden rounded-2xl shadow-lg h-[800px]"
                      >
                        <img
                          src={img}
                          alt={`Меморандум о сотрудничестве ${index + 1}`}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
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

export default Cooperation;
