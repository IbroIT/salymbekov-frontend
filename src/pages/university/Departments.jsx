import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { 
  FaUserTie,
  FaGraduationCap,
  FaGlobe,
  FaUsers,
  FaChartLine,
  FaAward,
  FaBook,
  FaHandshake,
  FaUniversity,
  FaArrowRight,
  FaCalendarAlt,
  FaMicroscope
} from "react-icons/fa";

const Departments = () => {
  const { t } = useTranslation();

  const tasks = [
    {
      icon: <FaUniversity className="text-white" size={24} />,
      title: t('departments.tasks.organization.title'),
      description: t('departments.tasks.organization.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaGlobe className="text-white" size={24} />,
      title: t('departments.tasks.international.title'),
      description: t('departments.tasks.international.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('departments.tasks.cooperation.title'),
      description: t('departments.tasks.cooperation.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('departments.tasks.grants.title'),
      description: t('departments.tasks.grants.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const programs = [
    t('departments.programs.program1'),
    t('departments.programs.program2'),
    t('departments.programs.program3'),
    t('departments.programs.program4'),
    t('departments.programs.program5'),
    t('departments.programs.program6')
  ];

  const directorInfo = [
    { label: t('departments.director.specialization'), value: t('departments.director.specializationValue') },
    { label: t('departments.director.degree'), value: t('departments.director.degreeValue') },
    { label: t('departments.director.professor'), value: t('departments.director.professorValue') },
    { label: t('departments.director.education'), value: t('departments.director.educationValue') },
    { label: t('departments.director.experience'), value: t('departments.director.experienceValue') },
    { label: t('departments.director.publications'), value: t('departments.director.publicationsValue') }
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
            <FaMicroscope className="text-xl" />
            <span className="font-semibold">{t('departments.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('departments.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('departments.subtitle')}
          </p>
        </motion.div>

        {/* Описание департамента */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12">
            <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                {t('departments.description')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Руководитель департамента */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center">
                  <FaUserTie className="text-white text-4xl" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">
                  {t('departments.director.title')}
                </h2>
                <h3 className="text-2xl font-semibold mb-6">
                  {t('departments.director.name')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {directorInfo.map((info, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-blue-100 text-sm font-semibold">
                        {info.label}
                      </span>
                      <span className="text-white font-medium">
                        {info.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Цели департамента */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('departments.goalsTitle')}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-[#023E8A] mb-4">
                  {t('departments.goal1.title')}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('departments.goal1.description')}
                </p>
              </div>
              
              <div className="bg-cyan-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-[#0077B6] mb-4">
                  {t('departments.goal2.title')}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('departments.goal2.description')}
                </p>
                <div className="mt-4 space-y-2">
                  {programs.map((program, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0077B6] rounded-full"></div>
                      <span className="text-gray-600">{program}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Основные задачи */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('departments.tasksTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('departments.tasksSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${task.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {task.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {task.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {task.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Departments;