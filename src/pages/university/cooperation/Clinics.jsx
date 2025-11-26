import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaHospital,
  FaStethoscope,
  FaUserMd,
  FaHeartbeat,
  FaFilePdf,
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaDownload,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaGlobe,
  FaStar,
  FaHandshake,
  FaShieldAlt
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ClinicCooperationPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const stateClinics = [
    { 
      title: t('clinicCooperation.stateClinics.clinic1'), 
      url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-soklukskaja-tb.pdf',
      type: "state",
      specialty: t('clinicCooperation.specialties.tuberculosis'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.8
    },
    { 
      title: t('clinicCooperation.stateClinics.clinic2'), 
      url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-ncomid.pdf',
      type: "state",
      specialty: t('clinicCooperation.specialties.infectious'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.6
    },
    { 
      title: t('clinicCooperation.stateClinics.clinic3'), 
      url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-ncoig-2.pdf',
      type: "state",
      specialty: t('clinicCooperation.specialties.gynecology'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.9
    },
    { 
      title: t('clinicCooperation.stateClinics.clinic4'), 
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/sudmedjekspert.pdf',
      type: "state",
      specialty: t('clinicCooperation.specialties.forensic'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.7
    },
    { 
      title: t('clinicCooperation.stateClinics.clinic5'), 
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/patologo-anatomicheskoe-bjuro.pdf',
      type: "state",
      specialty: t('clinicCooperation.specialties.pathology'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.5
    },
    { 
      title: t('clinicCooperation.stateClinics.clinic6'), 
      url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-na-okazanie-diagn.-lab.-uslug.pdf',
      type: "state",
      specialty: t('clinicCooperation.specialties.laboratory'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.8
    },
    { 
      title: t('clinicCooperation.stateClinics.clinic7'), 
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/institut-biologii-i-nan-kr.pdf',
      type: "state",
      specialty: t('clinicCooperation.specialties.biology'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.4
    }
  ];

  const privateClinics = [
    { 
      title: t('clinicCooperation.privateClinics.clinic1'), 
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/6.1.13.-soglashenie-o-sotrudnichestve-s-osoo-jeos-pljus.pdf',
      type: "private",
      specialty: t('clinicCooperation.specialties.multidisciplinary'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.9
    },
    { 
      title: t('clinicCooperation.privateClinics.clinic2'), 
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/6.1.11.-soglashenie-o-sotrudnichestve-s-lcd-andromed-doc.pdf',
      type: "private",
      specialty: t('clinicCooperation.specialties.diagnostic'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.7
    },
    { 
      title: t('clinicCooperation.privateClinics.clinic3'), 
      url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-klinika-asymbekovoi.pdf',
      type: "private",
      specialty: t('clinicCooperation.specialties.family'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.8
    },
    { 
      title: t('clinicCooperation.privateClinics.clinic4'), 
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/6.1.12.-soglashenie-o-sotrudnichestve-s-azija-med-karkyra-med.pdf',
      type: "private",
      specialty: t('clinicCooperation.specialties.general'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.6
    },
    { 
      title: t('clinicCooperation.privateClinics.clinic5'), 
      url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-kjeir-grupp.pdf',
      type: "private",
      specialty: t('clinicCooperation.specialties.corporate'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.5
    },
    { 
      title: t('clinicCooperation.privateClinics.clinic6'), 
      url: 'https://salymbekov.com/wp-content/uploads/2022/05/6.1.14.-soglashenie-o-sotrudnichestve-s-osoo-jeos-med.pdf',
      type: "private",
      specialty: t('clinicCooperation.specialties.emergency'),
      location: t('clinicCooperation.locations.bishkek'),
      rating: 4.7
    }
  ];

  const allClinics = [...stateClinics, ...privateClinics];

  // Фильтры
  const filters = [
    { id: "all", label: t('clinicCooperation.filters.all'), count: allClinics.length },
    { id: "state", label: t('clinicCooperation.filters.state'), count: stateClinics.length },
    { id: "private", label: t('clinicCooperation.filters.private'), count: privateClinics.length }
  ];

  // Статистика
  const stats = [
    { number: stateClinics.length.toString(), label: t('clinicCooperation.stats.stateClinics'), icon: <FaHospital className="text-[#023E8A]" /> },
    { number: privateClinics.length.toString(), label: t('clinicCooperation.stats.privateClinics'), icon: <FaStethoscope className="text-[#023E8A]" /> },
    { number: "100%", label: t('clinicCooperation.stats.quality'), icon: <FaShieldAlt className="text-[#023E8A]" /> },
    { number: "24/7", label: t('clinicCooperation.stats.support'), icon: <FaHeartbeat className="text-[#023E8A]" /> }
  ];

  // Преимущества сотрудничества
  const benefits = [
    {
      icon: <FaHandshake className="text-white" size={24} />,
      title: t('clinicCooperation.benefits.partnership.title'),
      description: t('clinicCooperation.benefits.partnership.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaUserMd className="text-white" size={24} />,
      title: t('clinicCooperation.benefits.expertise.title'),
      description: t('clinicCooperation.benefits.expertise.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaShieldAlt className="text-white" size={24} />,
      title: t('clinicCooperation.benefits.quality.title'),
      description: t('clinicCooperation.benefits.quality.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaGlobe className="text-white" size={24} />,
      title: t('clinicCooperation.benefits.network.title'),
      description: t('clinicCooperation.benefits.network.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const filteredClinics = allClinics.filter(clinic => {
    const matchesFilter = activeFilter === "all" || clinic.type === activeFilter;
    const matchesSearch = clinic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         clinic.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
            <FaHandshake className="text-xl" />
            <span className="font-semibold">{t('clinicCooperation.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('clinicCooperation.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('clinicCooperation.subtitle')}
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

        {/* Введение */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="prose max-w-none text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('clinicCooperation.intro')}
            </p>
          </div>
        </motion.div>

        {/* Поиск и фильтры */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Поиск */}
            <div className="flex-1 w-full">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('clinicCooperation.search.placeholder')}
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

        {/* Список клиник */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="grid gap-6">
            {filteredClinics.map((clinic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    {/* Основная информация */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                          clinic.type === "state" 
                            ? 'bg-blue-100 text-[#023E8A]' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {clinic.type === "state" ? t('clinicCooperation.state') : t('clinicCooperation.private')}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {clinic.specialty}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {clinic.title}
                      </h3>

                      {/* Детали клиники */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaMapMarkerAlt className="text-[#023E8A]" />
                          <span>{clinic.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaStar className="text-yellow-400" />
                          <span>{clinic.rating}/5.0</span>
                        </div>
                      </div>
                    </div>

                    {/* Боковая панель с действиями */}
                    <div className="flex flex-col gap-4 lg:w-48">
                      <motion.a
                        href={clinic.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaFilePdf />
                        {t('clinicCooperation.viewAgreement')}
                      </motion.a>

                      <div className="flex gap-2">
                        <motion.a
                          href={clinic.url}
                          download
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex-1 bg-gray-100 text-gray-600 py-2 rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                          <FaDownload />
                        </motion.a>
                        <motion.a
                          href={clinic.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex-1 bg-gray-100 text-gray-600 py-2 rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Преимущества сотрудничества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('clinicCooperation.benefitsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('clinicCooperation.benefitsDescription')}
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

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('clinicCooperation.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('clinicCooperation.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('clinicCooperation.cta.partner')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('clinicCooperation.cta.contact')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClinicCooperationPage;