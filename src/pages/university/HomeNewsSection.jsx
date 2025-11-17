import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  FaCalendarAlt,
  FaArrowRight,
  FaEye,
  FaClock
} from "react-icons/fa";

const HomeNewsSection = () => {
  const { t } = useTranslation();

  const latestNews = [
    {
      id: 1,
      title: t('news.items.professor.title'),
      description: t('news.items.professor.description'),
      date: "17-11-2025",
      category: "achievement",
      readTime: "3 мин",
      views: "1.2K",
      image: "/images/professor-achievement.jpg"
    },
    {
      id: 2,
      title: t('news.items.seminar.title'),
      description: t('news.items.seminar.description'),
      date: "25-10-2025",
      category: "seminar",
      readTime: "4 мин",
      views: "856",
      image: "/images/seminar.jpg"
    },
    {
      id: 3,
      title: t('news.items.forum.title'),
      description: t('news.items.forum.description'),
      date: "21-10-2025",
      category: "forum",
      readTime: "5 мин",
      views: "1.5K",
      image: "/images/forum.jpg"
    }
  ];

  const NewsCard = ({ news, index }) => {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
      >
        <div className="relative h-48 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] flex items-center justify-center">
            <div className="text-white text-4xl opacity-20">
              <FaCalendarAlt />
            </div>
          </div>
          
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1 rounded-full text-white text-xs font-semibold bg-gradient-to-r from-[#023E8A] to-[#0077B6]">
              {t(`news.categories.${news.category}`)}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#023E8A] transition-colors line-clamp-2 leading-tight">
            {news.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
            {news.description}
          </p>

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
      </motion.article>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('news.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestNews.map((news, index) => (
            <NewsCard key={news.id} news={news} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/news">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              {t('news.buttons.allNews')}
              <FaArrowRight className="text-sm" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsSection;