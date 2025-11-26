import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { 
  FaUsers,
  FaHandshake,
  FaGraduationCap,
  FaChild,
  FaComments,
  FaHeart,
  FaUserFriends,
  FaLightbulb,
  FaChevronDown
} from "react-icons/fa";

const ParentsCouncilPage = () => {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState(null);

  const tasksList = t('parentsCouncil.tasksList', { returnObjects: true });

  const stats = [
    { number: "500+", label: t('parentsCouncil.stats.families'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "50+", label: t('parentsCouncil.stats.meetings'), icon: <FaComments className="text-[#023E8A]" /> },
    { number: "100%", label: t('parentsCouncil.stats.support'), icon: <FaHeart className="text-[#023E8A]" /> },
    { number: "24/7", label: t('parentsCouncil.stats.availability'), icon: <FaUserFriends className="text-[#023E8A]" /> }
  ];

  const benefits = [
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('parentsCouncil.benefits.education.title'),
      description: t('parentsCouncil.benefits.education.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaChild className="text-white" size={24} />,
      title: t('parentsCouncil.benefits.support.title'),
      description: t('parentsCouncil.benefits.support.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaHandshake className="text-white" size={24} />,
      title: t('parentsCouncil.benefits.cooperation.title'),
      description: t('parentsCouncil.benefits.cooperation.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaLightbulb className="text-white" size={24} />,
      title: t('parentsCouncil.benefits.ideas.title'),
      description: t('parentsCouncil.benefits.ideas.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const councilMembers = [
    {
      name: "Абдыкалыков А.А.",
      role: "Председатель",
      description: "Опытный педагог и организатор"
    },
    {
      name: "Исмаилова Г.К.",
      role: "Заместитель председателя", 
      description: "Специалист по работе с семьями"
    },
    {
      name: "Садыков М.Т.",
      role: "Секретарь",
      description: "Координатор мероприятий"
    },
    {
      name: "Омурзакова Ж.А.",
      role: "Член совета",
      description: "Представитель родительской общественности"
    }
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
            <FaUsers className="text-xl" />
            <span className="font-semibold">{t('parentsCouncil.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('parentsCouncil.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('parentsCouncil.subtitle')}
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

        {/* Основной контент */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <p className="text-lg mb-6 leading-relaxed text-center text-gray-700">
              {t('parentsCouncil.mainText')}
            </p>
          </div>

          {/* Основные задачи */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6 cursor-pointer"
                 onClick={() => toggleSection('tasks')}>
              <h2 className="text-3xl font-bold text-gray-800">
                {t('parentsCouncil.tasksTitle')}
              </h2>
              <motion.div
                animate={{ rotate: expandedSection === 'tasks' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-[#023E8A]" />
              </motion.div>
            </div>

            {expandedSection === 'tasks' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="grid md:grid-cols-2 gap-6"
              >
                {tasksList.map((task, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-blue-50 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#023E8A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaHandshake className="text-white text-sm" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{task}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Состав совета */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t('parentsCouncil.membersTitle')}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {councilMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaUserFriends className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <div className="bg-[#023E8A] text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Преимущества сотрудничества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('parentsCouncil.benefitsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('parentsCouncil.benefitsDescription')}
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

export default ParentsCouncilPage;