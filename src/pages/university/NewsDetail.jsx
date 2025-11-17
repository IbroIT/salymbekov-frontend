import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  FaCalendarAlt,
  FaArrowLeft,
  FaEye,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaUniversity,
  FaShare,
  FaBookmark,
  FaRegBookmark
} from "react-icons/fa";

const NewsDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - в реальном приложении данные будут приходить из API
  const newsData = {
    1: {
      id: 1,
      title: t('news.items.professor.title'),
      description: t('news.items.professor.description'),
      fullContent: `
        <p>${t('news.items.professor.description')}</p>
        <p>Профессор АНМАХАВ был удостоен международной премии "За выдающийся вклад в развитие медицинского образования" 
        на церемонии в Женеве. Эта награда признает его многолетнюю работу по улучшению качества медицинского 
        образования в Центральной Азии.</p>
        <p>За последние 10 лет профессор разработал и внедрил инновационные учебные программы, которые сейчас 
        используются в медицинских вузах пяти стран региона. Его исследования в области медицинской педагогики 
        получили международное признание.</p>
        <p>Церемония награждения состоялась в рамках Всемирного конгресса медицинского образования, где собрались 
        ведущие эксперты из более чем 80 стран мира.</p>
      `,
      category: "achievement",
      date: "17-11-2025",
      readTime: "3 мин",
      views: "1.2K",
      image: "/images/professor-achievement.jpg",
      tags: ["ВРАЧИ", "ЕВРАЗИЯ", "МЕЖДУНАРОДНОЕ ПРИЗНАНИЕ"],
      author: "Пресс-служба АНМАХАВ"
    },
    2: {
      id: 2,
      title: t('news.items.seminar.title'),
      description: t('news.items.seminar.description'),
      fullContent: `
        <p>${t('news.items.seminar.description')}</p>
        <p>Семинар проходил в историческом городе Бухара и собрал более 200 участников из 15 стран. 
        Основными темами обсуждения стали современные подходы к диагностике и лечению сердечно-сосудистых 
        заболеваний, онкологии и инфекционных болезней.</p>
        <p>Ведущие специалисты из Европы, Азии и Америки поделились своими последними исследованиями и 
        клиническим опытом. Особое внимание было уделено вопросам telemedicine и цифровизации в здравоохранении.</p>
      `,
      category: "seminar",
      date: "25-10-2025",
      location: "Бухара",
      period: "17-19 октября 2025",
      readTime: "4 мин",
      views: "856",
      image: "/images/seminar.jpg",
      tags: ["СЕМИНАР", "МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО"],
      author: "Оргкомитет семинара"
    }
  };

  const news = newsData[id];
  const relatedNews = Object.values(newsData).filter(item => item.id !== parseInt(id)).slice(0, 3);

  if (!news) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Новость не найдена</h1>
          <Link to="/news" className="text-[#023E8A] hover:underline">
            Вернуться к списку новостей
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {}
      <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <FaArrowLeft />
            {t('news.buttons.backToNews')}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
              {t(`news.categories.${news.category}`)}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {news.title}
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {news.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>{t('news.details.published')}: {news.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{news.readTime} {t('news.details.readTime')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEye />
                <span>{news.views} {t('news.details.views')}</span>
              </div>
              {news.location && (
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  <span>{news.location}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div 
                className="text-gray-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: news.fullContent }}
              />
            </motion.div>

            {}
            {news.tags && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {t('news.details.tags')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {news.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-[#023E8A] rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Действия</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl hover:bg-gray-100 transition-colors text-gray-700">
                    <FaShare />
                    <span>{t('news.buttons.share')}</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl hover:bg-gray-100 transition-colors text-gray-700">
                    <FaBookmark />
                    <span>{t('news.buttons.save')}</span>
                  </button>
                </div>
              </div>

              {}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Информация</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <strong className="text-gray-800">{t('news.details.category')}:</strong>
                    <div className="mt-1">{t(`news.categories.${news.category}`)}</div>
                  </div>
                  {news.author && (
                    <div>
                      <strong className="text-gray-800">Автор:</strong>
                      <div className="mt-1">{news.author}</div>
                    </div>
                  )}
                  {news.period && (
                    <div>
                      <strong className="text-gray-800">Период:</strong>
                      <div className="mt-1">{news.period}</div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {}
        {relatedNews.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 pt-12 border-t border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              {t('news.details.relatedNews')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((related) => (
                <Link
                  key={related.id}
                  to={`/news/${related.id}`}
                  className="block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-[#023E8A]"
                >
                  <div className="text-sm text-[#023E8A] font-semibold mb-2">
                    {t(`news.categories.${related.category}`)}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {related.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{related.date}</span>
                    <span>{related.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;
