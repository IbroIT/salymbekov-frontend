// Contacts.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaUniversity,
  FaBuilding,
  FaCreditCard,
  FaMap
} from 'react-icons/fa';

const Contacts = () => {
  const { t } = useTranslation();

  const contactInfo = {
    phone: '+996 (312) 54-19-41',
    email: 'info@salymbekov.com',
    address: 'г. Бишкек, ул. Ахунбаева 119а',
    workingHours: 'Пн - Пт: 9:00 - 18:00',
    legalAddress: 'г. Бишкек, ул. Ибраимова, 115А',
    actualAddress: 'г. Бишкек, ул. Малдыбаева 24б',
    inn: '01206201910192',
    bank: 'Филиал ОАО «Оптима Банк» в г.Бишкек №1',
    bik: '109008',
    account: '1090808380720219'
  };

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5850.721815517088!2d74.600258!3d42.844112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec987f324329b%3A0x2cd99bcd0df5fc1f!2sSalymbekov%20Medical%20University%20(%20International%20university)!5e0!3m2!1sen!2skg!4v1763703452491!5m2!1sen!2skg";

  // Контактные методы
  const contactMethods = [
    {
      icon: <FaPhone className="text-white" size={20} />,
      title: t('contacts.ourContacts.phone.title'),
      details: contactInfo.phone,
      description: t('contacts.ourContacts.phone.description'),
      color: "bg-[#023E8A]",
      link: "tel:+996312541941"
    },
    {
      icon: <FaEnvelope className="text-white" size={20} />,
      title: t('contacts.ourContacts.email.title'),
      details: contactInfo.email,
      description: t('contacts.ourContacts.email.description'),
      color: "bg-[#0077B6]",
      link: "mailto:info@salymbekov.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-white" size={20} />,
      title: t('contacts.ourContacts.address.title'),
      details: contactInfo.address,
      description: t('contacts.ourContacts.address.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaClock className="text-white" size={20} />,
      title: t('contacts.ourContacts.hours.title'),
      details: contactInfo.workingHours,
      description: t('contacts.ourContacts.hours.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  // Банковские реквизиты
  const bankDetails = [
    {
      icon: <FaUniversity className="text-[#023E8A]" size={20} />,
      label: t('contacts.bankDetails.institution'),
      value: t('contacts.bankDetails.institutionName')
    },
    {
      icon: <FaBuilding className="text-[#0077B6]" size={20} />,
      label: t('contacts.bankDetails.legalAddress'),
      value: contactInfo.legalAddress
    },
    {
      icon: <FaMapMarkerAlt className="text-[#0096C7]" size={20} />,
      label: t('contacts.bankDetails.actualAddress'),
      value: contactInfo.actualAddress
    },
    {
      icon: <FaCreditCard className="text-[#00B4D8]" size={20} />,
      label: t('contacts.bankDetails.inn'),
      value: contactInfo.inn
    },
    {
      icon: <FaBuilding className="text-[#023E8A]" size={20} />,
      label: t('contacts.bankDetails.bank'),
      value: contactInfo.bank
    },
    {
      icon: <FaCreditCard className="text-[#0077B6]" size={20} />,
      label: t('contacts.bankDetails.bik'),
      value: contactInfo.bik
    },
    {
      icon: <FaCreditCard className="text-[#0096C7]" size={20} />,
      label: t('contacts.bankDetails.account'),
      value: contactInfo.account
    }
  ];

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
            <FaMapMarkerAlt className="text-xl" />
            <span className="font-semibold">{t('contacts.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('contacts.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('contacts.subtitle')}
          </p>
        </motion.div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Банковские реквизиты */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center">
                <FaCreditCard className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                {t('contacts.bankDetails.title')}
              </h2>
            </div>

            <div className="space-y-4">
              {bankDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    {detail.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-700 mb-1">
                      {detail.label}
                    </div>
                    <div className="text-gray-600">
                      {detail.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Карта */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            <div className="h-96 w-full">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contacts.map.iframeTitle')}
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <FaMap className="text-[#023E8A]" size={20} />
                <h3 className="text-xl font-semibold text-gray-800">
                  {t('contacts.map.locationTitle')}
                </h3>
              </div>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>

        {/* Контактные методы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('contacts.ourContacts.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('contacts.ourContacts.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center cursor-pointer ${
                  method.link ? 'hover:bg-blue-50' : ''
                }`}
                onClick={() => method.link && window.open(method.link, '_blank')}
              >
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {method.title}
                </h3>
                <p className="text-lg font-semibold text-[#023E8A] mb-2">
                  {method.details}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('contacts.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('contacts.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;