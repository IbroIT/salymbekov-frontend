import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

const CareerGuidance = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const showEvents = location.pathname.includes('/applicants/career-guidance/events');
  const showNews = location.pathname.includes('/applicants/career-guidance/news');

  const events = [
    {
      id: 1,
      title: 'Караван знаний в Караколе',
      date: '30.05.2025',
      category: 'Профориентация',
      image: '/src/assets/applicant/orientatioin/1.jpg',
      link: '/applicants/career-guidance/knowledge-karakol'
    },
    {
      id: 2,
      title: 'Билим кербени Ош шаарында',
      date: '23.05.2024',
      category: 'Мероприятие',
      image: '/src/assets/applicant/orientatioin/2.webp',
      link: '/applicants/career-guidance/knowledge-osh'
    },
    {
      id: 3,
      title: 'Меморандум о сотрудничестве со школой-гимназией 68',
      date: '14.03.2023',
      category: 'Новости',
      image: '/src/assets/applicant/orientatioin/3.jpg',
      link: '/applicants/career-guidance/cooperation'
    },
    {
      id: 4,
      title: 'Встречи с студентами из Пакистана',
      date: '14.03.2023',
      category: 'Новости',
      image: '/src/assets/applicant/orientatioin/4.jpg',
      link: '/applicants/career-guidance/meeting'
    }
  ];

  const newsItems = [
    {
      id: 1,
      title: t('careerGuidance.newsList.eurasianCongress.title'),
      description: t('careerGuidance.newsList.eurasianCongress.description'),
      date: t('careerGuidance.newsList.eurasianCongress.date'),
      image: '/src/assets/applicant/orientatioin/news/1.jpg',
      link: '/applicants/career-guidance/news/eurasian-congress'
    },
    {
      id: 2,
      title: t('careerGuidance.newsList.itSecurityMeeting.title'),
      description: t('careerGuidance.newsList.itSecurityMeeting.description'),
      date: t('careerGuidance.newsList.itSecurityMeeting.date'),
      image: '/src/assets/applicant/orientatioin/news/2.jpg',
      link: '/applicants/career-guidance/news/it-security-meeting'
    },
    {
      id: 3,
      title: t('careerGuidance.newsList.paiChaiVisit.title'),
      description: t('careerGuidance.newsList.paiChaiVisit.description'),
      date: t('careerGuidance.newsList.paiChaiVisit.date'),
      image: '/src/assets/applicant/orientatioin/news/3.jpg',
      link: '/applicants/career-guidance/news/pai-chai-visit'
    },
    {
      id: 4,
      title: t('careerGuidance.newsList.youthForum.title'),
      description: t('careerGuidance.newsList.youthForum.description'),
      date: t('careerGuidance.newsList.youthForum.date'),
      image: '/src/assets/applicant/orientatioin/events/4.jpg',
      link: '/applicants/career-guidance/news/youth-forum'
    },
    {
      id: 5,
      title: t('careerGuidance.newsList.chungAngVisit.title'),
      description: t('careerGuidance.newsList.chungAngVisit.description'),
      date: t('careerGuidance.newsList.chungAngVisit.date'),
      image: '/src/assets/applicant/orientatioin/events/5.jpg',
      link: '/applicants/career-guidance/news/chung-ang-visit'
    },
    {
      id: 6,
      title: t('careerGuidance.newsList.asiaCharityCenter.title'),
      description: t('careerGuidance.newsList.asiaCharityCenter.description'),
      date: t('careerGuidance.newsList.asiaCharityCenter.date'),
      image: '/src/assets/applicant/orientatioin/events/6.jpg',
      link: '/applicants/career-guidance/news/asia-charity-center'
    }
  ];

  const categories = [
    { name: t('careerGuidance.categories.events'), link: '/applicants/career-guidance/events' },
    { name: t('careerGuidance.categories.news'), link: '/applicants/career-guidance/news' }
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
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#023E8A] to-[#0077B6]" />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">{t('careerGuidance.title')}</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {t('careerGuidance.subtitle')}
          </p>
        </motion.div>
      </motion.section>

      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-8 flex gap-8">
          <ExtraNavigation />
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-8">
                {t('careerGuidance.ourEvents')}
              </h2>

              {/* Категории навигация */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                {categories.map((category, index) => (
                  <Link
                    key={category.name}
                    to={category.link}
                    className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#023E8A] to-[#0077B6] 
                             shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {category.name}
                  </Link>
                ))}
              </motion.div>

              <p className="text-gray-600 text-lg">
                {t('careerGuidance.description')}
              </p>
            </motion.div>

            {/* Университетские мероприятия - показываем только при клике на кнопку "Мероприятия" */}
            {showEvents && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-8">
                  {t('careerGuidance.universityEvents')}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* День учителя */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Link to="/applicants/orientation/teachers-day" className="block group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src="/src/assets/applicant/orientatioin/events/1.jpg"
                            alt="День учителя"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
                            <FiCalendar className="w-4 h-4" />
                            <span>15.10.2025</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {t('careerGuidance.eventsList.teachersDay.title')}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {t('careerGuidance.eventsList.teachersDay.location')}
                          </p>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                            <span>{t('careerGuidance.readMore')}</span>
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* День государственного языка */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to="/applicants/orientation/state-language-day" className="block group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src="/src/assets/applicant/orientatioin/events/2.jpg"
                            alt="День государственного языка"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
                            <FiCalendar className="w-4 h-4" />
                            <span>15.10.2025</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {t('careerGuidance.eventsList.stateLanguageDay.title')}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {t('careerGuidance.eventsList.stateLanguageDay.location')}
                          </p>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                            <span>{t('careerGuidance.readMore')}</span>
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Визит Культурного центра Бэксан */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Link to="/applicants/orientation/korean-center" className="block group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src="/src/assets/applicant/orientatioin/events/3.jpg"
                            alt="Визит Культурного центра Бэксан"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
                            <FiCalendar className="w-4 h-4" />
                            <span>13.10.2025</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {t('careerGuidance.eventsList.koreanCenter.title')}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {t('careerGuidance.eventsList.koreanCenter.location')}
                          </p>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                            <span>{t('careerGuidance.readMore')}</span>
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Международная медицинская миссия */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Link to="/applicants/orientation/medical-mission" className="block group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src="/src/assets/applicant/orientatioin/events/4.jpg"
                            alt="Международная медицинская миссия"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
                            <FiCalendar className="w-4 h-4" />
                            <span>27.06.2025</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {t('careerGuidance.eventsList.medicalMission.title')}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {t('careerGuidance.eventsList.medicalMission.location')}
                          </p>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                            <span>{t('careerGuidance.readMore')}</span>
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Выпускной 2025 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Link to="/applicants/orientation/graduation-2025" className="block group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src="/src/assets/applicant/orientatioin/events/5.jpg"
                            alt="Выпускной 2025"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
                            <FiCalendar className="w-4 h-4" />
                            <span>26.06.2025</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {t('careerGuidance.eventsList.graduation2025.title')}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {t('careerGuidance.eventsList.graduation2025.location')}
                          </p>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                            <span>{t('careerGuidance.readMore')}</span>
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Вручение дипломов */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Link to="/applicants/orientation/diploma-award" className="block group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src="/src/assets/applicant/orientatioin/events/6.jpg"
                            alt="Вручение дипломов"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
                            <FiCalendar className="w-4 h-4" />
                            <span>19.06.2025</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {t('careerGuidance.eventsList.diplomaAward.title')}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {t('careerGuidance.eventsList.diplomaAward.location')}
                          </p>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                            <span>{t('careerGuidance.readMore')}</span>
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Секция новостей - показываем только при клике на кнопку "Новости" */}
            {showNews && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-8">
                  {t('careerGuidance.universityNews')}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsItems.slice(0, 3).map((news, index) => (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link to={news.link} className="block group">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/800x600/0077B6/FFFFFF?text=' + encodeURIComponent(news.title);
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
                              <FiCalendar className="w-4 h-4" />
                              <span>{news.date}</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                              {news.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {news.description}
                            </p>
                            <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                              <span>{t('careerGuidance.readMore')}</span>
                              <FiArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Старые мероприятия профориентации - показываем всегда */}
            {!showEvents && !showNews && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-8">
                  {t('careerGuidance.orientationPrograms')}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {events.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link to={event.link}>
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="relative group h-[400px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                        >
                          <div className="absolute inset-0">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/800x600/0077B6/FFFFFF?text=' + encodeURIComponent(event.title);
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                          </div>

                          <div className="relative h-full flex flex-col justify-end p-8">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                                {event.title}
                              </h3>
                              <div className="flex items-center text-gray-300">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-lg">{event.date}</span>
                              </div>
                            </div>
                          </div>

                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className="absolute bottom-8 right-8 text-white"
                          >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerGuidance;