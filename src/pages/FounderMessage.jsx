import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";

const FounderMessage = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full -translate-y-36 translate-x-36 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full translate-y-48 -translate-x-48 opacity-30"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('founderMessage.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="bg-white rounded-3xl p-4 shadow-2xl border border-gray-100 w-full max-w-xs">
              <div className="relative overflow-hidden rounded-2xl">
                {}
                <div className="aspect-[9/16] w-full">
                  <img 
                    src="/askar.jpg" 
                    alt={t('founderMessage.imageAlt')}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback если изображение не загрузилось
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center text-gray-600';
                      fallback.innerHTML = `
                        <div class="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mb-3">
                          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p class="text-base font-medium">${t('founderMessage.founderName')}</p>
                        <p class="text-xs text-gray-500 mt-1">${t('founderMessage.founderPosition')}</p>
                      `;
                      e.target.parentNode.appendChild(fallback);
                    }}
                  />
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">
                  {t('founderMessage.founderName')}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {t('founderMessage.founderPosition')}
                </p>
              </div>
            </div>
            
            {}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-60"></div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>{t('founderMessage.paragraph1')}</p>
              <p>{t('founderMessage.paragraph2')}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 group"
            >
              <span>{t('founderMessage.readMore')}</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
