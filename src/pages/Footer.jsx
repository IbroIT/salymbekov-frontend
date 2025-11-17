import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaGlobeAmericas, 
  FaEnvelope,
  FaCircle,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  const usefulLinks = [
    { key: 'associationDordoi', href: '#' },
    { key: 'dordoiPlaza', href: '#' },
    { key: 'cementora', href: '#' },
    { key: 'mohaf09', href: '#' },
    { key: 'msSp', href: '#' }
  ];

  const contacts = [
    { key: 'internationalMedical', href: '#' },
    { key: 'itBusinessCompetition', href: '#' },
    { key: 'businessSchool', href: '#' }
  ];

  const clinics = [
    { key: 'docUniversityClinic', href: '#' },
    { key: 'docUniversityHospital', href: '#' },
    { key: 'dordoiOphthalmology', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0066FF] to-[#0033FF] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              SALYMBEKOV UNIVERSITY
            </h3>
            <div className="space-y-3 text-blue-100">
              <p className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 flex-shrink-0 text-[#66B3FF]" />
                {t('footer.address')}
              </p>
              <p className="flex items-center">
                <FaGlobeAmericas className="mr-3 flex-shrink-0 text-[#66B3FF]" />
                <a 
                  href={t('footer.website')} 
                  className="hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.website')}
                </a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0 text-[#66B3FF]" />
                <a 
                  href={`mailto:${t('footer.email')}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {t('footer.email')}
                </a>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-[#3366FF] pb-2">
              {t('footer.usefulLinks')}
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={link.key}>
                  <a 
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#66B3FF] rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    {t(`footer.links.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-[#3366FF] pb-2">
              {t('footer.contacts')}
            </h4>
            <ul className="space-y-3">
              {contacts.map((contact, index) => (
                <li key={contact.key}>
                  <a 
                    href={contact.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    {t(`footer.contactsList.${contact.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-[#3366FF] pb-2">
              {t('footer.ourClinics')}
            </h4>
            <ul className="space-y-3">
              {clinics.map((clinic, index) => (
                <li key={clinic.key}>
                  <a 
                    href={clinic.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    {t(`footer.clinics.${clinic.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="border-t border-[#3366FF]"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © Salymbekov University 2025 | {t('footer.rights')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-sm">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-sm">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 text-sm">
                {t('footer.sitemap')}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

