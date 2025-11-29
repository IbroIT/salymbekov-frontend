import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaWhatsapp, FaVk, FaTelegram } from 'react-icons/fa';

const KnowledgeOsh = () => {
  const imageNames = [
    '438096373_18038299813843726_4132125349791637961_n-300x300.webp',
    '438099574_18038299756843726_3343549511451478769_n-300x300.webp',
    '438128536_18038299747843726_7366870107304122227_n-300x300.webp',
    '438128747_18038299774843726_6485398818871946661_n-300x300.webp'
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = imageNames.map(name =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = `/src/assets/applicant/orientatioin/moredetails/osh/${name}`;
          img.onload = () => resolve(img.src);
          img.onerror = () => resolve(null);
        })
      );
      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages.filter(img => img !== null));
    };
    loadImages();
  }, []);

  const shareUrl = encodeURIComponent('https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/');
  const shareTitle = encodeURIComponent('Билим кербени Ош шаарында');

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/`,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: `https://x.com/intent/tweet?text=${shareTitle}%C2%A0https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/`,
      color: 'hover:text-sky-500'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: `https://wa.me/?text=${shareTitle}%20https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/`,
      color: 'hover:text-green-500'
    },
    {
      name: 'VK',
      icon: FaVk,
      url: `https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%3A%2F%2Fsalymbekov.com%2Fru%2Fbilim-kerbeni-osh-shaarynda%2F%26title%3D%25D0%2591%25D0%25B8%25D0%25BB%25D0%25B8%25D0%25BC%2520%25D0%25BA%25D0%25B5%25D1%2580%25D0%25B1%25D0%25B5%25D0%25BD%25D0%25B8%2520%25D0%259E%25D1%2588%2520%25D1%2588%25D0%25B0%25D0%25B0%25D1%2580%25D1%258B%25D0%25BD%25D0%25B4%25D0%25B0&display=widget`,
      color: 'hover:text-blue-700'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      url: `https://telegram.me/share/url?url=https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/&title=${shareTitle}`,
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
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
            src="/src/assets/applicant/orientatioin/2.webp"
            alt="Билим кербени Ош"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1920x1080/0077B6/FFFFFF?text=Билим+кербени+Ош';
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
            Мероприятие
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Билим кербени Ош шаарында
          </h1>
          <div className="flex items-center justify-center gap-8 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-6 h-6" />
              <span>23.05.2024</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-6 h-6" />
              <span>Ош</span>
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
                  Билим кербени Ош шаарында
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    Салымбеков Университет Ош шаарынын мэриясы, Ош шаардык билим берүү башкармалыгы, жана Ош шаарындагы Салымбеков бизнес мектеби менен биргеликте мектеп окуучулар үчүн
                    <strong className="text-[#0077B6]"> "Билим берүүдөгү заманбап тенденциялар, мектеп билим берүүсүнүн келечектеги орду"</strong> аталышындагы семинар өткөрдү.
                  </p>
                  <p>
                    Иш чаранын жүрүшүндө Ош шаарынын мэринин орун басары Нурбек Кадыров сөз сүйлөп, билим алуунун маанилүүлүгүн баса белгиледи.
                  </p>
                  <p>
                    Ош шаарынын окуучулары жана мугалимдерине дүйнө жүзүндө болуп жаткан технологиялык өзгөрүүлөрдүн билим берүү жана эмгек рыногуна тийгизип жаткан таасирлери, 21-кылымдагы алдыга чыгып жаткан IT технологиялар жана биотехнология сыяктуу багыттардын орду жөнүндө баяндамалар көрсөтүлдү.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  { number: '500+', label: 'Участников', icon: '👥' },
                  { number: '15', label: 'Мастер-классов', icon: '🎓' },
                  { number: '8', label: 'Факультетов', icon: '🏛️' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 text-center shadow-xl"
                  >
                    <div className="text-5xl mb-4">{stat.icon}</div>
                    <div className="text-4xl font-bold text-[#0077B6] mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-10 mb-12"
              >
                <h3 className="text-3xl font-bold text-[#023E8A] mb-6 flex items-center gap-3">
                  <FiAward className="w-8 h-8" />
                  Семинардын спикерлери
                </h3>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-md"
                  >
                    <h4 className="text-xl font-bold text-[#0077B6] mb-3">Абдылдаев Рысбек</h4>
                    <p className="text-gray-600 mb-2">
                      Профессор, онколог, медицина илимдеринин доктору, Салымбеков Университеттин вице-президенти
                    </p>
                    <p className="text-gray-700 font-semibold">
                      "Медицинадагы жасалма интеллект"
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-md"
                  >
                    <h4 className="text-xl font-bold text-[#0077B6] mb-3">Билгазиев Эмиль (PhD)</h4>
                    <p className="text-gray-600 mb-2">
                      Америка Технологиялар Институнун негиздөөчүсү, АКШнын Хьюстон университетинин жасалма интеллект багытында докторлук (PhD) даражасын алган. 15 жылдан ашык Facebook, Instagram, UBER сыяктуу ири компанияларда ага инженер
                    </p>
                    <p className="text-gray-700 font-semibold">
                      "Батыш өлкөлөрүндө билим – бул акча"
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-md"
                  >
                    <h4 className="text-xl font-bold text-[#0077B6] mb-3">Казаков Аваз</h4>
                    <p className="text-gray-600 mb-2">
                      Салымбеков Университеттин проректору
                    </p>
                    <p className="text-gray-700 font-semibold">
                      "Билим берүүдөгү заманбап тенденциялар, кесип рыногундагы өзгөрүүлөр, мектеп билим берүүсүндөгү реформалар"
                    </p>
                  </motion.div>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square"
                      >
                        <img
                          src={img}
                          alt={`Билим кербени Ош ${index + 1}`}
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

export default KnowledgeOsh;
