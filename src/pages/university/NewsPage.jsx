import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  FaCalendarAlt,
  FaUser,
  FaGlobe,
  FaShieldAlt,
  FaHandshake,
  FaUniversity,
  FaArrowRight,
  FaEye,
  FaBookmark,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaStar,
  FaExternalLinkAlt,
  FaRegBookmark,
  FaRegHeart,
  FaHeart
} from "react-icons/fa";

const NewsPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [savedNews, setSavedNews] = useState(new Set());
  const [likedNews, setLikedNews] = useState(new Set());

  const newsStats = [
    { number: "50+", label: t('news.stats.articles'), icon: <FaBookmark className="text-[#023E8A]" /> },
    { number: "6", label: t('news.stats.categories'), icon: <FaUniversity className="text-[#023E8A]" /> },
    { number: "1000+", label: t('news.stats.readers'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "24/7", label: t('news.stats.updates'), icon: <FaClock className="text-[#023E8A]" /> }
  ];

  const newsCategories = [
    {
      id: "all",
      title: t('news.categories.all'),
      icon: <FaGlobe className="text-lg" />,
      color: "from-[#023E8A] to-[#0077B6]",
      bgColor: "bg-gradient-to-r from-[#023E8A] to-[#0077B6]",
      count: 6
    },
    {
      id: "seminar",
      title: t('news.categories.seminar'),
      icon: <FaUniversity className="text-lg" />,
      color: "from-[#0096C7] to-[#00B4D8]",
      bgColor: "bg-gradient-to-r from-[#0096C7] to-[#00B4D8]",
      count: 2
    },
    {
      id: "forum",
      title: t('news.categories.forum'),
      icon: <FaUser className="text-lg" />,
      color: "from-[#0077B6] to-[#0096C7]",
      bgColor: "bg-gradient-to-r from-[#0077B6] to-[#0096C7]",
      count: 1
    },
    {
      id: "lecture",
      title: t('news.categories.lecture'),
      icon: <FaShieldAlt className="text-lg" />,
      color: "from-[#023E8A] to-[#0077B6]",
      bgColor: "bg-gradient-to-r from-[#023E8A] to-[#0077B6]",
      count: 1
    },
    {
      id: "visit",
      title: t('news.categories.visit'),
      icon: <FaHandshake className="text-lg" />,
      color: "from-[#0096C7] to-[#00B4D8]",
      bgColor: "bg-gradient-to-r from-[#0096C7] to-[#00B4D8]",
      count: 2
    },
    {
      id: "achievement",
      title: t('news.categories.achievement'),
      icon: <FaStar className="text-lg" />,
      color: "from-[#FF6B35] to-[#FF8E53]",
      bgColor: "bg-gradient-to-r from-[#FF6B35] to-[#FF8E53]",
      count: 1
    }
  ];

  const newsItems = [
    {
      id: 1,
      title: t('news.items.professor.title'),
      description: t('news.items.professor.description'),
      fullContent: t('news.items.professor.description') + " Полный текст новости...",
      category: "achievement",
      date: "17-11-2025",
      type: "news",
      image: "/images/professor-achievement.jpg",
      url: "www.anmahav.com",
      featured: true,
      tags: ["ВРАЧИ", "ЕВРАЗИЯ"],
      readTime: "3 мин",
      views: "1.2K",
      likes: 45
    },
    {
      id: 2,
      title: t('news.items.seminar.title'),
      description: t('news.items.seminar.description'),
      fullContent: t('news.items.seminar.description') + " Полный текст новости...",
      category: "seminar",
      date: "25-10-2025",
      type: "news",
      location: "Бухара",
      period: "17-19 октября 2025",
      image: "/images/seminar.jpg",
      url: "www.anmahav.com",
      readTime: "4 мин",
      views: "856",
      likes: 23
    },
    {
      id: 3,
      title: t('news.items.forum.title'),
      description: t('news.items.forum.description'),
      fullContent: t('news.items.forum.description') + " Полный текст новости...",
      category: "forum",
      date: "21-10-2025",
      type: "forum",
      image: "/images/forum.jpg",
      url: "www.anmahav.com",
      speaker: t('news.items.forum.speaker'),
      readTime: "5 мин",
      views: "1.5K",
      likes: 67
    },
    {
      id: 4,
      title: t('news.items.cybersecurity.title'),
      description: t('news.items.cybersecurity.description'),
      fullContent: t('news.items.cybersecurity.description') + " Полный текст новости...",
      category: "lecture",
      date: "23-10-2025",
      type: "lecture",
      image: "/images/cybersecurity.jpg",
      organizer: "ГУВД Г. ВИШКЕК",
      readTime: "6 мин",
      views: "2.1K",
      likes: 89
    },
    {
      id: 5,
      title: t('news.items.koreaVisit.title'),
      description: t('news.items.koreaVisit.description'),
      fullContent: t('news.items.koreaVisit.description') + " Полный текст новости...",
      category: "visit",
      date: "20-10-2025",
      type: "visit",
      image: "/images/korea-visit.jpg",
      country: "Республика Корея",
      url: "www.anmahav.com",
      readTime: "4 мин",
      views: "987",
      likes: 34
    },
    {
      id: 6,
      title: t('news.items.delegation.title'),
      description: t('news.items.delegation.description'),
      fullContent: t('news.items.delegation.description') + " Полный текст новости...",
      category: "visit",
      date: "19-10-2025",
      type: "visit",
      image: "/images/delegation.jpg",
      university: "РА! СНА! UNIVERSITY",
      country: "ЮЖНАЯ КОРЕЯ",
      url: "www.anmahav.com",
      readTime: "3 мин",
      views: "1.1K",
      likes: 56
    }
  ];

  const filteredNews = activeCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const featuredNews = newsItems.find(item => item.featured);

  const toggleSaveNews = (newsId) => {
    setSavedNews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(newsId)) {
        newSet.delete(newsId);
      } else {
        newSet.add(newsId);
      }
      return newSet;
    });
  };

  const toggleLikeNews = (newsId) => {
    setLikedNews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(newsId)) {
        newSet.delete(newsId);
      } else {
        newSet.add(newsId);
      }
      return newSet;
    });
  };

  const NewsCard = ({ news, index }) => {
    const category = newsCategories.find(cat => cat.id === news.category);
    
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
      >
        <Link to={`/news/${news.id}`}>
          <div className="relative h-48 overflow-hidden">
            <div className={`w-full h-full ${category?.bgColor || 'bg-gradient-to-r from-[#023E8A] to-[#0077B6]'} flex items-center justify-center`}>
              <div className="text-white text-4xl opacity-20">
                {category?.icon || <FaUniversity />}
              </div>
            </div>
            
            <div className="absolute top-4 left-4">
              <div className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${category?.bgColor || 'bg-gradient-to-r from-[#023E8A] to-[#0077B6]'}`}>
                {category?.title}
              </div>
            </div>

            <div className="absolute top-4 right-4 flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleSaveNews(news.id);
                }}
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              >
                {savedNews.has(news.id) ? (
                  <FaBookmark className="text-[#023E8A]" />
                ) : (
                  <FaRegBookmark className="text-gray-600" />
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleLikeNews(news.id);
                }}
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              >
                {likedNews.has(news.id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-600" />
                )}
              </motion.button>
            </div>
          </div>
        </Link>

        <div className="p-6">
          <Link to={`/news/${news.id}`}>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#023E8A] transition-colors line-clamp-2 leading-tight">
              {news.title}
            </h3>
          </Link>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
            {news.description}
          </p>

          <div className="space-y-2 mb-4">
            {news.location && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaMapMarkerAlt className="text-xs flex-shrink-0" />
                <span className="truncate">{news.location}</span>
              </div>
            )}
            {news.period && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaCalendarAlt className="text-xs flex-shrink-0" />
                <span>{news.period}</span>
              </div>
            )}
            {news.speaker && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaUser className="text-xs flex-shrink-0" />
                <span className="truncate">{news.speaker}</span>
              </div>
            )}
            {news.organizer && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaUniversity className="text-xs flex-shrink-0" />
                <span className="truncate">{news.organizer}</span>
              </div>
            )}
          </div>

          {news.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {news.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-blue-50 text-[#023E8A] text-xs rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-xs" />
                  {news.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock className="text-xs" />
                  {news.readTime}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FaEye className="text-xs" />
                {news.views}
              </div>
            </div>

            <div className="flex items-center justify-between">
              {news.url && (
                <span className="text-[#023E8A] text-xs font-medium bg-blue-50 px-3 py-1 rounded-full flex items-center gap-1">
                  {news.url}
                  <FaExternalLinkAlt className="text-xs" />
                </span>
              )}
              
              <Link to={`/news/${news.id}`}>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-2 text-[#023E8A] font-semibold text-sm group/btn"
                >
                  {t('news.readMore')}
                  <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaCalendarAlt className="text-xl" />
            <span className="font-semibold">{t('news.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('news.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('news.subtitle')}
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {newsStats.map((stat, index) => (
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

        {/* Categories and News */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header and Filters */}
            <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {t('news.latestNews')}
                  </h2>
                  <p className="text-gray-600">
                    {t('news.selectCategory')}
                  </p>
                </div>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-3">
                {newsCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 relative ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {category.icon}
                    {category.title}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id 
                        ? 'bg-white/20' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* News List */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((news, index) => (
                  <NewsCard key={news.id} news={news} index={index} />
                ))}
              </div>

              {/* No News Message */}
              {filteredNews.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-gray-400 text-lg mb-4">
                    {t('news.noNews')}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveCategory("all")}
                    className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-2xl font-semibold"
                  >
                    {t('news.showAll')}
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsPage;