import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const quickLinks = [
    { key: 'about', href: '/university/structure/University-main' },
    { key: 'science', href: '/science/labs' },
    { key: 'contacts', href: '/contacts' }
  ];

  const academicPrograms = [
    { key: 'ait', href: '/education/ait/about' },
    { key: 'mfm', href: '/education/mfm/about' },
    { key: 'itCollege', href: '/university/structure/it-college' }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/salymbekov.kg/', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: 'https://www.instagram.com/salymbekovuniversity', color: 'hover:text-pink-500' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@salymbekovuniversity8213/', color: 'hover:text-red-500' }
  ];

  // Mobile Accordion Section
  const MobileSection = ({ title, children, sectionKey }) => (
    <div className="lg:hidden bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-4 overflow-hidden">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <h4 className="text-lg font-semibold text-white">
          {title}
        </h4>
        <motion.div
          animate={{ rotate: expandedSections[sectionKey] ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {expandedSections[sectionKey] ? (
            <FaChevronUp className="w-4 h-4 text-blue-300" />
          ) : (
            <FaChevronDown className="w-4 h-4 text-blue-300" />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {expandedSections[sectionKey] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Mobile View */}
        <div className="lg:hidden">
          {/* University Info - Always visible on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              SALYMBEKOV <span className="text-blue-200">UNIVERSITY</span>
            </h3>
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">{t('footer.phone')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <a 
                  href={`mailto:${t('footer.email')}`}
                  className="text-blue-100 hover:text-white transition-colors duration-300 text-sm break-all"
                >
                  {t('footer.email')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaGlobe className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <a 
                  href={t('footer.website')}
                  className="text-blue-100 hover:text-white transition-colors duration-300 text-sm break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.website')}
                </a>
              </div>
            </div>

            {/* Social Media - Mobile */}
            <div className="mt-6 pt-6 border-t border-blue-400/30">
              <p className="text-blue-100 text-sm mb-4 text-center">{t('footer.followUs')}</p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${social.color} backdrop-blur-sm border border-white/20`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links Accordion */}
          <MobileSection title={t('footer.quickLinks')} sectionKey="quickLinks">
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-all duration-300 flex items-center group py-2"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-all duration-300 group-hover:scale-125"></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {t(`footer.links.${link.key}`)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </MobileSection>

          {/* Academic Programs Accordion */}
          <MobileSection title={t('footer.academicPrograms')} sectionKey="academicPrograms">
            <ul className="space-y-3">
              {academicPrograms.map((program) => (
                <li key={program.key}>
                  <a 
                    href={program.href}
                    className="text-blue-100 hover:text-white transition-all duration-300 flex items-center group py-2"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:bg-white transition-all duration-300 group-hover:scale-125"></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {t(`footer.programs.${program.key}`)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </MobileSection>

          {/* Newsletter - Mobile */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h4 className="text-lg font-semibold mb-4 text-white text-center">
              {t('footer.newsletter')}
            </h4>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 text-sm focus:outline-none focus:border-blue-300"
              />
              <button className="bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-xl text-white text-sm font-medium transition-colors duration-300 whitespace-nowrap">
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* University Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full">
              <h3 className="text-2xl font-bold mb-4 text-white">
                SALYMBEKOV <span className="text-blue-200">UNIVERSITY</span>
              </h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                {t('footer.description')}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 mt-1 text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100 text-sm">{t('footer.address')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100 text-sm">{t('footer.phone')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a 
                    href={`mailto:${t('footer.email')}`}
                    className="text-blue-100 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {t('footer.email')}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaGlobe className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a 
                    href={t('footer.website')}
                    className="text-blue-100 hover:text-white transition-colors duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('footer.website')}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full">
              <h4 className="text-lg font-semibold mb-6 text-white border-b border-blue-400/30 pb-3">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <a 
                      href={link.href}
                      className="text-blue-100 hover:text-white transition-all duration-300 flex items-center group py-2"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-all duration-300 group-hover:scale-125"></div>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {t(`footer.links.${link.key}`)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Academic Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full">
              <h4 className="text-lg font-semibold mb-6 text-white border-b border-blue-400/30 pb-3">
                {t('footer.academicPrograms')}
              </h4>
              <ul className="space-y-3">
                {academicPrograms.map((program) => (
                  <li key={program.key}>
                    <a 
                      href={program.href}
                      className="text-blue-100 hover:text-white transition-all duration-300 flex items-center group py-2"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:bg-white transition-all duration-300 group-hover:scale-125"></div>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {t(`footer.programs.${program.key}`)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full">
              <h4 className="text-lg font-semibold mb-6 text-white border-b border-blue-400/30 pb-3">
                {t('footer.connectWithUs')}
              </h4>
              
              {/* Social Media */}
              <div className="mb-6">
                <p className="text-blue-100 text-sm mb-4">{t('footer.followUs')}</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${social.color} backdrop-blur-sm border border-white/20`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
             
             
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="border-t border-blue-700/50 bg-blue-950/30 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-blue-200 text-xs sm:text-sm text-center md:text-left">
              © 2026 Salymbekov University | {t('footer.rights')}
            </p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
             
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;