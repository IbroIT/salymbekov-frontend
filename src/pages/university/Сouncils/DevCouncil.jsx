import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // Добавил useEffect
import { FaUsers } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { getDevelopmentCouncil } from "../../../api";

const DevelopmentCouncilPage = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  const [councilMembers, setCouncilMembers] = useState([]); // is_council_member === true
  const [experts, setExperts] = useState([]);               // is_council_member === false

  useEffect(() => {
    const getCouncilData = async () => {
      const url = getDevelopmentCouncil();
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();

          if (Array.isArray(data)) {
            setCouncilMembers(data.filter(item => item.is_council_member === true));
            setExperts(data.filter(item => item.is_council_member === false));
          }
        }
      } catch (error) {
        console.error("Ошибка при загрузке:", error);
      } finally {
        setLoading(false);
      }
    };

    getCouncilData();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Загрузка...</div>;
  }




  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">

        {/* Заголовок страницы */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6">
            <FaUsers className="text-xl" />
            <span className="font-semibold">{t('developmentCouncil.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('developmentCouncil.title')}
          </h1>
        </motion.div>

        {/* --- СЕКЦИЯ 1: ОСНОВНОЙ СОСТАВ (is_council_member: true) --- */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            {t('developmentCouncil.compositionTitle')}
          </h2>

          <div className="grid gap-8">
            {councilMembers.map((member, index) => (
              <motion.div
                key={member.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden p-8"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="lg:w-1/4">
                    <img
                      src={member.image || member.photo}
                      alt={member.name}
                      className="w-full h-auto rounded-2xl shadow-md object-cover"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                      <p className="text-blue-600">{member.role || member.position}</p>
                    </div>
                  </div>
                  <div className="lg:w-3/4">
                    <p className="text-gray-700 leading-relaxed text-lg italic mb-4">
                      "{member.text || member.bio}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- СЕКЦИЯ 2: ЭКСПЕРТЫ И ПАРТНЕРЫ (is_council_member: false) --- */}
        {experts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 pt-12 border-t border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-700 mb-10 text-center">
              {t('developmentCouncil.expertsTitle', 'Экспертное сообщество')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experts.map((expert, index) => (
                <motion.div
                  key={expert.id || index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center gap-4"
                >
                  <img
                    src={expert.image || expert.photo}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                    alt={expert.name}
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{expert.name}</h4>
                    <p className="text-sm text-gray-500">{expert.role || expert.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DevelopmentCouncilPage;