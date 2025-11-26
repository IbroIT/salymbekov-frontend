import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaPlay,
  FaYoutube,
  FaClock,
  FaCalendarAlt,
  FaEye,
  FaSearch,
  FaFilter
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Videos = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Фильтры видео
  const filters = [
    { id: "all", label: t('videos.filters.all'), count: 12 },
    { id: "interviews", label: t('videos.filters.interviews'), count: 5 },
    { id: "projects", label: t('videos.filters.projects'), count: 4 },
    { id: "events", label: t('videos.filters.events'), count: 3 }
  ];

  // Список видео
  const videos = [
    {
      id: 1,
      title: t('videos.mainVideos.video1.title'),
      description: t('videos.mainVideos.video1.description'),
      videoUrl: "https://www.youtube.com/embed/F1IfnjgFVcA?si=9LnNixdPUyt-spHF",
      duration: "15:30",
      views: "24.5K",
      date: t('videos.mainVideos.video1.date'),
      category: "interviews",
      featured: true,
      thumbnail: "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2562-1024x683.jpg"
    },
    {
      id: 2,
      title: t('videos.mainVideos.video2.title'),
      description: t('videos.mainVideos.video2.description'),
      videoUrl: "https://www.youtube.com/embed/W2whiny-HTY?si=uL5KGqkUp6apwFyt",
      duration: "22:15",
      views: "18.2K",
      date: t('videos.mainVideos.video2.date'),
      category: "projects",
      featured: true,
      thumbnail: "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2562-1024x683.jpg"
    },
    {
      id: 3,
      title: t('videos.mainVideos.video3.title'),
      description: t('videos.mainVideos.video3.description'),
      videoUrl: "https://www.youtube.com/embed/8z__0RtjvWY?si=76kYPDYIcnW9yhEF",
      duration: "18:45",
      views: "31.7K",
      date: t('videos.mainVideos.video3.date'),
      category: "events",
      featured: false,
      thumbnail: "https://salymbekov.com/wp-content/uploads/2022/07/bc0b2562-1024x683.jpg"
    }
  ];

  // Статистика
  const stats = [
    { number: "150+", label: t('videos.stats.videos'), icon: <FaPlay className="text-[#023E8A]" /> },
    { number: "2.5M", label: t('videos.stats.views'), icon: <FaEye className="text-[#023E8A]" /> },
    { number: "50+", label: t('videos.stats.projects'), icon: <FaYoutube className="text-[#023E8A]" /> },
    { number: "15", label: t('videos.stats.categories'), icon: <FaFilter className="text-[#023E8A]" /> }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesFilter = activeFilter === "all" || video.category === activeFilter;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Герой секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaYoutube className="text-xl" />
            <span className="font-semibold">{t('videos.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('videos.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('videos.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Поиск и фильтры */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Поиск */}
            <div className="flex-1 w-full">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('videos.search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#023E8A] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Фильтры */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FaFilter className="text-sm" />
                  {filter.label}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Список видео */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="grid gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Видео превью */}
                    <div className="lg:w-2/5">
                      <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-w-16 aspect-h-9">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-64 object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => openVideoModal(video)}
                            className="bg-red-600 text-white rounded-full p-4 shadow-2xl hover:bg-red-700 transition-colors duration-300"
                          >
                            <FaPlay className="text-2xl ml-1" />
                          </motion.button>
                        </div>
                        <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
                          <span className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
                            <FaClock className="text-xs" />
                            {video.duration}
                          </span>
                          <span className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
                            <FaEye className="text-xs" />
                            {video.views}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Информация о видео */}
                    <div className="lg:w-3/5">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        {video.featured && (
                          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            <FaYoutube className="text-xs" />
                            {t('videos.featured')}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-[#023E8A] px-3 py-1 rounded-full text-sm font-semibold">
                          {filters.find(f => f.id === video.category)?.label}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {video.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {video.description}
                      </p>

                      {/* Мета информация */}
                      <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-[#023E8A]" />
                          <span>{video.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaEye className="text-[#023E8A]" />
                          <span>{video.views} {t('videos.views')}</span>
                        </div>
                      </div>

                      {/* Кнопка просмотра */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openVideoModal(video)}
                        className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaPlay className="text-sm" />
                        {t('videos.watch')}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Модальное окно видео */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-900">
              <iframe
                src={selectedVideo.videoUrl}
                className="w-full h-96"
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedVideo.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{selectedVideo.views} {t('videos.views')}</span>
                <span>{selectedVideo.date}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Videos;