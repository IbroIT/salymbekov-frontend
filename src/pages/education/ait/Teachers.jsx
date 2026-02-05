import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGraduationCap,
  FaAward,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaBook,
  FaRocket,
  FaCode,
  FaSearch,
  FaFilter,
  FaQuoteLeft
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const TeachersPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = [
    { id: "all", label: t('teachers.filters.all'), count: 8 },
    { id: "tech", label: t('teachers.filters.tech'), count: 4 },
    { id: "design", label: t('teachers.filters.design'), count: 2 },
    { id: "business", label: t('teachers.filters.business'), count: 2 }
  ];

  const teachers = [
    {
      id: 1,
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/photo_2023-06-09_17-07-45-225x300.webp',
      name: t('teachers.teachers.teacher1.name'),
      position: t('teachers.teachers.teacher1.position'),
      text: t('teachers.teachers.teacher1.text'),
      subjects: t('teachers.teachers.teacher1.subjects', { returnObjects: true }),
      experience: t('teachers.teachers.teacher1.experience'),
      category: "tech",
      featured: true,
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      id: 2,
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/photo_2023-06-09_17-17-49-225x300.webp',
      name: t('teachers.teachers.teacher2.name'),
      position: t('teachers.teachers.teacher2.position'),
      text: t('teachers.teachers.teacher2.text'),
      subjects: t('teachers.teachers.teacher2.subjects', { returnObjects: true }),
      experience: t('teachers.teachers.teacher2.experience'),
      category: "tech",
      featured: true,
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },

  ];

  const stats = [
  ];

  const benefits = [
    {
      icon: <FaCode className="text-white" size={24} />,
      title: t('teachers.benefits.practical.title'),
      description: t('teachers.benefits.practical.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaGlobe className="text-white" size={24} />,
      title: t('teachers.benefits.international.title'),
      description: t('teachers.benefits.international.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('teachers.benefits.certified.title'),
      description: t('teachers.benefits.certified.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaRocket className="text-white" size={24} />,
      title: t('teachers.benefits.innovative.title'),
      description: t('teachers.benefits.innovative.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesFilter = activeFilter === "all" || teacher.category === activeFilter;
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-4 leading-relaxed text-lg">
            <strong className="font-bold text-gray-800">{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-4 leading-relaxed text-gray-600">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
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
            <FaGraduationCap className="text-xl" />
            <span className="font-semibold">{t('teachers.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('teachers.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('teachers.subtitle')}
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
                  placeholder={t('teachers.search.placeholder')}
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
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeFilter === filter.id
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

        {/* Список преподавателей */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="grid gap-8">
            {filteredTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Фото и основная информация */}
                    <div className="lg:w-1/3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative group"
                      >
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-full h-auto rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300"
                        />

                      </motion.div>

                      <div className="text-center mt-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {teacher.name}
                        </h3>
                        <p className="text-lg text-[#023E8A] font-semibold mb-3">
                          {teacher.position}
                        </p>
                        <p className="text-gray-600 mb-4">
                          {teacher.experience}
                        </p>


                      </div>
                    </div>

                    {/* Текст и предметы */}
                    <div className="lg:w-2/3">
                      <div className="flex items-start gap-3 mb-6">
                        <FaQuoteLeft className="text-3xl text-[#023E8A] mt-1 flex-shrink-0" />
                        <div className="text-gray-700 leading-relaxed">
                          {formatTextWithBold(teacher.text)}
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Преимущества обучения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('teachers.whyOurTeachers')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('teachers.whyOurTeachersDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default TeachersPage;