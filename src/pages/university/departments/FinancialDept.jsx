import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaDollarSign,
  FaCreditCard,
  FaCalculator,
  FaFileInvoice,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaPhone,
  FaEnvelope,
  FaUserTie,
  FaChartLine,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaUniversity,
  FaArrowRight,
  FaCalendarAlt,
  FaDownload,
  FaPrint
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FinancialDept = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("tuition");
  const [selectedYear, setSelectedYear] = useState("2025");

  // Основной цвет и градиенты
  const primaryColor = "#023E8A";
  const gradientFrom = "from-[#023E8A]";
  const gradientTo = "to-[#0077B6]";

  const financialStats = [
    { 
      number: "15+", 
      label: t('financial.stats.years'), 
      icon: <FaChartLine className="text-[#023E8A]" />,
      description: t('financial.stats.yearsDesc')
    },
    { 
      number: "5K+", 
      label: t('financial.stats.students'), 
      icon: <FaUserTie className="text-[#023E8A]" />,
      description: t('financial.stats.studentsDesc')
    },
    { 
      number: "98%", 
      label: t('financial.stats.satisfaction'), 
      icon: <FaCheckCircle className="text-[#023E8A]" />,
      description: t('financial.stats.satisfactionDesc')
    },
    { 
      number: "24/7", 
      label: t('financial.stats.support'), 
      icon: <FaShieldAlt className="text-[#023E8A]" />,
      description: t('financial.stats.supportDesc')
    }
  ];

  const services = [
    {
      icon: <FaCreditCard className="text-white" size={24} />,
      title: t('financial.services.tuition.title'),
      description: t('financial.services.tuition.description'),
      features: [
        t('financial.services.tuition.features.online'),
        t('financial.services.tuition.features.installments'),
        t('financial.services.tuition.features.discounts')
      ],
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaFileInvoice className="text-white" size={24} />,
      title: t('financial.services.scholarships.title'),
      description: t('financial.services.scholarships.description'),
      features: [
        t('financial.services.scholarships.features.academic'),
        t('financial.services.scholarships.features.social'),
        t('financial.services.scholarships.features.special')
      ],
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaPiggyBank className="text-white" size={24} />,
      title: t('financial.services.financialAid.title'),
      description: t('financial.services.financialAid.description'),
      features: [
        t('financial.services.financialAid.features.grants'),
        t('financial.services.financialAid.features.loans'),
        t('financial.services.financialAid.features.workStudy')
      ],
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaCalculator className="text-white" size={24} />,
      title: t('financial.services.tax.title'),
      description: t('financial.services.tax.description'),
      features: [
        t('financial.services.tax.features.deductions'),
        t('financial.services.tax.features.consultation'),
        t('financial.services.tax.features.documentation')
      ],
      color: "bg-[#00B4D8]"
    }
  ];

  const tuitionRates = [
    {
      program: t('financial.tuition.undergraduate.title'),
      description: t('financial.tuition.undergraduate.description'),
      perYear: "450000",
      perSemester: "225000",
      discount: t('financial.tuition.undergraduate.discount'),
      features: [
        t('financial.tuition.undergraduate.features.library'),
        t('financial.tuition.undergraduate.features.labs'),
        t('financial.tuition.undergraduate.features.sports')
      ]
    },
    {
      program: t('financial.tuition.graduate.title'),
      description: t('financial.tuition.graduate.description'),
      perYear: "550000",
      perSemester: "275000",
      discount: t('financial.tuition.graduate.discount'),
      features: [
        t('financial.tuition.graduate.features.research'),
        t('financial.tuition.graduate.features.conferences'),
        t('financial.tuition.graduate.features.mentoring')
      ]
    },
    {
      program: t('financial.tuition.doctoral.title'),
      description: t('financial.tuition.doctoral.description'),
      perYear: "650000",
      perSemester: "325000",
      discount: t('financial.tuition.doctoral.discount'),
      features: [
        t('financial.tuition.doctoral.features.publications'),
        t('financial.tuition.doctoral.features.international'),
        t('financial.tuition.doctoral.features.stipend')
      ]
    }
  ];

  const paymentMethods = [
    {
      method: t('financial.paymentMethods.online.title'),
      description: t('financial.paymentMethods.online.description'),
      icon: <FaCreditCard className="text-2xl" />,
      processingTime: t('financial.paymentMethods.online.processingTime'),
      fee: t('financial.paymentMethods.online.fee'),
      color: "from-green-500 to-emerald-500"
    },
    {
      method: t('financial.paymentMethods.bank.title'),
      description: t('financial.paymentMethods.bank.description'),
      icon: <FaUniversity className="text-2xl" />,
      processingTime: t('financial.paymentMethods.bank.processingTime'),
      fee: t('financial.paymentMethods.bank.fee'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      method: t('financial.paymentMethods.installments.title'),
      description: t('financial.paymentMethods.installments.description'),
      icon: <FaHandHoldingUsd className="text-2xl" />,
      processingTime: t('financial.paymentMethods.installments.processingTime'),
      fee: t('financial.paymentMethods.installments.fee'),
      color: "from-purple-500 to-pink-500"
    }
  ];

  const deadlines = [
    {
      period: t('financial.deadlines.fall.title'),
      date: t('financial.deadlines.fall.date'),
      amount: t('financial.deadlines.fall.amount'),
      status: "active"
    },
    {
      period: t('financial.deadlines.spring.title'),
      date: t('financial.deadlines.spring.date'),
      amount: t('financial.deadlines.spring.amount'),
      status: "upcoming"
    },
    {
      period: t('financial.deadlines.summer.title'),
      date: t('financial.deadlines.summer.date'),
      amount: t('financial.deadlines.summer.amount'),
      status: "upcoming"
    }
  ];

  const contactInfo = {
    phone: "+996 778 99 88 89",
    email: "finance@salymbekov.com",
    hours: t('financial.contact.hours'),
    location: t('financial.contact.location')
  };

  const tabs = [
    { id: "tuition", label: t('financial.tabs.tuition'), icon: <FaDollarSign /> },
    { id: "scholarships", label: t('financial.tabs.scholarships'), icon: <FaPiggyBank /> },
    { id: "payment", label: t('financial.tabs.payment'), icon: <FaCreditCard /> }
  ];

  const years = ["2025", "2024", "2023"];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Анимированный фон */}
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
        {/* Герой секция */}
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
            <FaDollarSign className="text-xl" />
            <span className="font-semibold">{t('financial.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('financial.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('financial.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {financialStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2 text-center">
                {stat.number}
              </div>
              <div className="text-gray-800 font-semibold text-center mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600 text-sm text-center">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Основные услуги */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('financial.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('financial.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-green-500 text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Основной контент с табами */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Заголовок и табы */}
            <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {t('financial.financialInfo')}
                  </h2>
                  <p className="text-gray-600">
                    {t('financial.selectYear')}
                  </p>
                </div>
                
                {/* Выбор года */}
                <div className="flex gap-2">
                  {years.map((year) => (
                    <motion.button
                      key={year}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                        selectedYear === year
                          ? 'bg-[#023E8A] text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {year}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Переключение табов */}
              <div className="flex flex-col sm:flex-row gap-3">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Контент табов */}
            <div className="p-8">
              {activeTab === "tuition" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('financial.tuition.title')} {selectedYear}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {tuitionRates.map((program, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
                      >
                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                          {program.program}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {program.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">{t('financial.tuition.perYear')}</span>
                            <span className="text-lg font-bold text-[#023E8A]">{program.perYear} ₸</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">{t('financial.tuition.perSemester')}</span>
                            <span className="text-lg font-bold text-[#023E8A]">{program.perSemester} ₸</span>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4">
                          <p className="text-green-700 text-sm font-semibold text-center">
                            {program.discount}
                          </p>
                        </div>

                        <ul className="space-y-2">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <FaCheckCircle className="text-green-500 text-xs" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "payment" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('financial.paymentMethods.title')}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {paymentMethods.map((method, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group text-center"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {method.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                          {method.method}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {method.description}
                        </p>
                        
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center justify-center gap-2">
                            <FaClock className="text-[#023E8A]" />
                            {method.processingTime}
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <FaDollarSign className="text-[#023E8A]" />
                            {method.fee}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "scholarships" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('financial.scholarships.title')}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {t('financial.scholarships.description')}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-3 rounded-2xl font-semibold"
                    >
                      {t('financial.scholarships.applyButton')}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Сроки оплаты */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <FaCalendarAlt className="text-[#023E8A] text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{t('financial.deadlines.title')}</h3>
            </div>
            
            <div className="space-y-4">
              {deadlines.map((deadline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex justify-between items-center py-4 px-4 rounded-xl border-2 ${
                    deadline.status === "active" 
                      ? "border-green-200 bg-green-50" 
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div>
                    <span className="text-gray-700 font-medium">{deadline.period}</span>
                    {deadline.status === "active" && (
                      <span className="ml-2 text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                        {t('financial.deadlines.active')}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-gray-800 font-bold">{deadline.date}</div>
                    <div className="text-sm text-gray-600">{deadline.amount}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-yellow-800 text-sm flex items-center gap-2">
                <FaExclamationTriangle className="text-yellow-600" />
                {t('financial.deadlines.note')}
              </p>
            </div>
          </motion.div>

          {/* Контактная информация */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <FaPhone className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">{t('financial.contact.title')}</h3>
            </div>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{t('financial.contact.phone')}</p>
                  <p className="font-semibold">{contactInfo.phone}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{t('financial.contact.email')}</p>
                  <p className="font-semibold">{contactInfo.email}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaClock className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{t('financial.contact.hoursLabel')}</p>
                  <p className="font-semibold">{contactInfo.hours}</p>
                </div>
              </motion.div>

              <div className="flex gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-white text-[#023E8A] py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <FaDownload />
                  {t('financial.contact.download')}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 border-2 border-white text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <FaPrint />
                  {t('financial.contact.print')}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinancialDept;