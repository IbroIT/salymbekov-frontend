import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const FounderMessage = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 relative overflow-hidden ">
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6 shadow-lg"
          >
            <FaQuoteLeft className="text-lg" />
            <span className="font-semibold text-sm uppercase tracking-wide">{t('founderMessage.badge')}</span>
            <FaQuoteRight className="text-lg" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] via-[#0077B6] to-[#023E8A] bg-clip-text text-transparent leading-tight">
            {t('founderMessage.title')}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Фото основателя */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 w-full max-w-sm group"
            >
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#0077B6] to-[#023E8A] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <motion.div
                  className="h-[28rem] w-full relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/askar.jpg"
                    alt={t('founderMessage.founderName')}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center text-gray-600';
                      fallback.innerHTML = `
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                          class="w-20 h-20 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mb-4"
                        >
                          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </motion.div>
                        <p class="text-lg font-bold">${t('founderMessage.founderName')}</p>
                        <p class="text-sm text-gray-500 mt-2 text-center px-4">${t('founderMessage.founderPosition')}</p>
                      `;
                      e.target.parentNode.appendChild(fallback);
                    }}
                  />

                  {/* Оверлей при hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium">{t('founderMessage.founderQuote')}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 text-center"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t('founderMessage.founderName')}
                </h3>
                <p className="text-[#0077B6] font-semibold text-sm">
                  {t('founderMessage.founderPosition')}
                </p>
                <div className="mt-3 flex justify-center">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Сообщение основателя */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 text-4xl text-[#023E8A] opacity-20">
                <FaQuoteLeft />
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed pl-8">
                <p className="font-medium text-gray-800">{t('founderMessage.paragraph1')}</p>
                <p>{t('founderMessage.paragraph2')}</p>
                <p className="text-[#0077B6] font-semibold italic">{t('founderMessage.paragraph3')}</p>
              </div>
              <div className="absolute -right-4 bottom-0 text-4xl text-[#023E8A] opacity-20">
                <FaQuoteRight />
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                x: 8,
                boxShadow: "0 20px 40px rgba(2, 62, 138, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/university/Appeal'}
              className="inline-flex items-center gap-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0077B6] to-[#023E8A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">{t('founderMessage.readMore')}</span>
              <motion.div
                className="relative z-10"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <FaArrowRight className="text-lg" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
