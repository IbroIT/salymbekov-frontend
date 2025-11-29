import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaDownload, FaFileAlt, FaCalendarCheck, FaClock, FaChartLine, FaRegFileAlt, FaLaptop, FaBookOpen, FaHospital, FaStethoscope, FaEye, FaClinicMedical, FaMapMarkerAlt, FaPhone, FaClock as FaTime, FaBed, FaHandHoldingHeart, FaGlobe, FaBrain, FaUsersCog } from 'react-icons/fa';
import img1 from '../../../assets/science/studentsphoto/1.jpg';
import img2 from '../../../assets/science/studentsphoto/2.jpg';
import img3 from '../../../assets/science/studentsphoto/3.jpg';
import img4 from '../../../assets/science/studentsphoto/4.jpg';
import img5 from '../../../assets/science/studentsphoto/5.jpg';
import img6 from '../../../assets/science/studentsphoto/6.jpg';
import img7 from '../../../assets/science/studentsphoto/7.jpg';
import img8 from '../../../assets/science/studentsphoto/8.jpg';
import img9 from '../../../assets/science/studentsphoto/9.jpg';
import img10 from '../../../assets/science/studentsphoto/10.jpg';
import img11 from '../../../assets/science/studentsphoto/11.jpg';
import img12 from '../../../assets/science/studentsphoto/12.jpg';
import img13 from '../../../assets/science/studentsphoto/13.jpg';
import img14 from '../../../assets/science/studentsphoto/14.jpg';
import img15 from '../../../assets/science/studentsphoto/15.jpg';
import img16 from '../../../assets/science/studentsphoto/16.jpg';

const MedicalCenter = () => {
  const navigate = useNavigate();

  const opportunitiesSections = [
    { 
      path: "/student/opportunities/medical", 
      name: "МЕДИЦИНСКИЙ ЦЕНТР", 
      icon: FaHospital,
      active: true,
    },
    { 
      path: "/student/opportunities/dorm", 
      name: "ОБЩЕЖИТИЕ", 
      icon: FaBed,
    },
    { 
      path: "/student/opportunities/social", 
      name: "СОЦИАЛЬНАЯ ПОДДЕРЖКА", 
      icon: FaHandHoldingHeart,
    },
    { 
      path: "/student/opportunities/courses", 
      name: "КУРСЫ ПО ВЫБОРУ", 
      icon: FaBookOpen,
    },
    { 
      path: "/student/opportunities/mobility", 
      name: "АКАДЕМИЧЕСКАЯ МОБИЛЬНОСТЬ", 
      icon: FaGlobe,
    },
    { 
      path: "/student/opportunities/psychology", 
      name: "ПСИХОЛОГИЧЕСКАЯ ПОДДЕРЖКА", 
      icon: FaBrain,
    },
    { 
      path: "/student/opportunities/service-center", 
      name: "ЦЕНТР ОБСЛУЖИВАНИЯ СТУДЕНТОВ", 
      icon: FaUsersCog,
    },
    { 
      path: "/student/opportunities/adaptation", 
      name: "АДАПТАЦИОННЫЕ ПРОГРАММЫ", 
      icon: FaUserGraduate,
    },
  ];

  const medicalCenters = [
    {
      icon: FaHospital,
      title: "DOC University Clinic",
      description: "Современная многопрофильная 6-этажная клиника, расположенная в деловом центре города Бишкек на пересечении улиц Тимирязева и Киевской.",
      details: [
        "39 койко-мест",
        "Передовое медицинское оборудование",
        "Профессиональный медицинский персонал"
      ],
      specializations: [
        "Общая хирургия", "Урология", "Кардиология", "Неврология", 
        "Терапия", "Педиатрия", "Эндоскопия", "Оториноларингология",
        "Рентгенография", "Рентгенхирургия", "Гинекология", "Эндокринология",
        "Стоматология", "Функциональная диагностика"
      ],
      address: "ул. Тимирязева и Киевская, г. Бишкек",
      color: "from-blue-500 to-cyan-500",
      images: [
        img1,
        img2,
        img3,
        img4
      ]
    },
    {
      icon: FaClinicMedical,
      title: "DOC University Hospital",
      description: "Новая современная поликлиника, оснащенная необходимым медицинским оборудованием для проведения диагностики и лечения широкого спектра медицинских заболеваний.",
      details: [
        "Современное диагностическое оборудование",
        "Профессиональный медицинский персонал",
        "Широкий спектр медицинских услуг"
      ],
      specializations: [
        "Общая хирургия", "Урология", "Кардиология", "Неврология", 
        "Терапия", "Педиатрия", "Эндоскопия", "Оториноларингология",
        "Рентгенография", "Рентгенхирургия", "Гинекология", "Эндокринология",
        "Стоматология", "Функциональная диагностика"
      ],
      address: "ул. Боконбаева, 144, г. Бишкек",
      color: "from-green-500 to-emerald-500",
      images: [
        img5,
        img6,
        img7,
        img8
      ]
    },
    {
      icon: FaStethoscope,
      title: "Клиника «Лазмед»",
      description: "Успешно функционирующий с 2010 года многопрофильный медицинский центр, применяющий передовые разработки лечения лазерной медицины.",
      details: [
        "Основана в 2010 году",
        "Передовые разработки лазерной медицины",
        "Многопрофильный медицинский центр"
      ],
      specializations: [
        "Лазерная медицина", "Педиатрия", "Гинекология", 
        "Урология", "Диагностика", "Общая хирургия", 
        "Пластическая хирургия"
      ],
      address: "ул. Шабдан Баатыра, 3, г. Бишкек",
      color: "from-purple-500 to-pink-500",
      images: [
        img9,
        img10,
        img11,
        img12
      ]
    },
    {
      icon: FaEye,
      title: "Центр микрохирургии глаза «Дордой-Офтальмик Сервис»",
      description: "Офтальмологическая клиника, имеющая 20-летний успешный опыт качественного лечения глазных заболеваний, пользуется заслуженным высоким доверием среди граждан КР и иностранных граждан.",
      details: [
        "20-летний успешный опыт",
        "Высококвалифицированный персонал",
        "Передовое мировое оборудование"
      ],
      specializations: [
        "Микрохирургия глаза", "Офтальмология", 
        "Ультразвуковая факоэмульсификация", 
        "Лечение глазных заболеваний"
      ],
      equipment: [
        "Ультразвуковой факоэмульсификатор «LEGACI» (США)",
        "Последние технологии диагностики",
        "Современное хирургическое оборудование"
      ],
      address: "ул. Фучика, 3/4, г. Бишкек",
      color: "from-orange-500 to-red-500",
      images: [
        img13,
        img14,
        img15,
        img16
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/student')}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Назад к студенту
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                Условия обучения
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Медицинский центр
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Университет имеет сеть собственных клиник для прохождения производственной практики, повышения знаний и навыков и оказания медицинских услуг
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaUsers className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">СТУДЕНТАМ</h3>
                </div>
              </div>
              <nav className="p-2">
                {opportunitiesSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.path}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => navigate(section.path)}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium text-sm">{section.name}</span>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Введение */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaHospital className="mr-3 text-[#023E8A]" />
                    СЕТЬ МЕДИЦИНСКИХ ЦЕНТРОВ УНИВЕРСИТЕТА
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Университет имеет сеть собственных клиник для прохождения производственной практики, 
                    повышения знаний и навыков и оказания всех видов медицинских услуг, в том числе собственным студентам.
                  </p>
                </div>
              </motion.div>

              {/* Медицинские центры */}
              <div className="space-y-12">
                {medicalCenters.map((center, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col lg:flex-row gap-6 mb-6">
                      {/* Основная информация */}
                      <div className="lg:w-2/3">
                        <div className="flex items-start mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${center.color} rounded-2xl flex items-center justify-center mr-4`}>
                            <center.icon className="text-white text-2xl" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {center.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              {center.description}
                            </p>
                          </div>
                        </div>

                        {/* Детали */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <FaMapMarkerAlt className="mr-2 text-[#023E8A]" />
                              Адрес
                            </h4>
                            <p className="text-gray-700">{center.address}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Особенности</h4>
                            <div className="space-y-1">
                              {center.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-700 text-sm">• {detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Специализации */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Специализации</h4>
                          <div className="flex flex-wrap gap-2">
                            {center.specializations.map((spec, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-white/70 rounded-full text-sm text-gray-700 border border-green-200"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Оборудование (если есть) */}
                        {center.equipment && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Оборудование</h4>
                            <div className="space-y-1">
                              {center.equipment.map((equip, idx) => (
                                <p key={idx} className="text-gray-700 text-sm">• {equip}</p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Галерея изображений */}
                      <div className="lg:w-1/3">
                        <h4 className="font-semibold text-gray-900 mb-3">Галерея</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {center.images.map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: imgIndex * 0.1 }}
                              className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                            >
                              <img 
                                src={image} 
                                alt={`${center.title} - фото ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Медпункты */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaClinicMedical className="mr-3 text-[#023E8A]" />
                  Медпункты в подразделениях университета
                </h3>
                <p className="text-gray-700 mb-4">
                  Также университет имеет в своей структуре медпункт в каждом подразделении для оказания первой помощи студентам и сотрудникам.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Главный корпус - 1 этаж",
                    "Колледж IT и бизнеса - 2 этаж", 
                    "Международный факультет медицины - 1 этаж",
                    "Библиотечный корпус - цокольный этаж",
                    "Спортивный комплекс - раздевалка",
                    "Студенческое общежитие - 1 этаж"
                  ].map((location, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center p-3 bg-white/70 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">+</span>
                      </div>
                      <span className="text-gray-700">{location}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Контактная информация */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200"
              >
                <div className="flex items-start">
                  <FaHospital className="text-yellow-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Запись на прием и консультации
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Для записи на прием в медицинские центры университета или получения дополнительной информации:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        📞 Единый call-центр: +996 (312) 00-00-00
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        📧 Email: medical@salymbekov.com
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-yellow-300">
                        🕒 Регистратура: 8:00 - 20:00
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MedicalCenter;