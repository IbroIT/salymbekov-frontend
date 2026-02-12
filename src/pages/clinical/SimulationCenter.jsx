import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { FaFlask, FaHeartbeat, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SimulationCenter = () => {
  const { t } = useTranslation();
  
  const animatedBalls = useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      id: i,
      size: Math.random() * 80 + 40,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 3
    }));
  }, []);

  const simulationData = {
    title: t('labs.simulation.title', 'Simulation Center'),
    description: t('labs.simulation.description', 'Modern equipment for practical training'),
    features: [
      {
        title: t('labs.simulation.features.0.title', 'Practical Skills'),
        description: t('labs.simulation.features.0.description', 'Practicing medical manipulations')
      },
      {
        title: t('labs.simulation.features.1.title', 'Modern Equipment'),
        description: t('labs.simulation.features.1.description', 'Digital microscopes and diagnostic systems')
      },
      {
        title: t('labs.simulation.features.2.title', 'Teamwork'),
        description: t('labs.simulation.features.2.description', 'Interaction training in emergency situations')
      }
    ],
    equipment: [
      t('labs.simulation.equipment.0', 'Phantoms and mannequins'),
      t('labs.simulation.equipment.1', 'Surgical intervention simulators'),
      t('labs.simulation.equipment.2', 'Cardiopulmonary resuscitation trainers'),
      t('labs.simulation.equipment.3', 'Digital monitoring systems'),
      t('labs.simulation.equipment.4', 'Interactive anatomy tables'),
      t('labs.simulation.equipment.5', 'Video systems')
    ],
    descriptions: [
      t('labs.simulation.content.description.0', 'Practical classes are equipped with visual aids...'),
      t('labs.simulation.content.description.1', 'The center practices basic and advanced skills...')
    ]
  };

  return (
    <div className="w-full relative">
      {/* Animated gradient balls */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {animatedBalls.map((ball) => (
          <motion.div
            key={ball.id}
            className="absolute rounded-full opacity-5"
            style={{
              width: ball.size,
              height: ball.size,
              left: ball.left,
              top: ball.top,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: ball.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7]" />
          <div className="relative max-w-3xl px-6 sm:px-12 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-bold text-white mb-4"
            >
              {simulationData.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90"
            >
              {simulationData.description}
            </motion.p>
          </div>
        </div>

        {/* Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-12 mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#023E8A] mb-6">
              {simulationData.title}
            </h2>
            {simulationData.descriptions.map((desc, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {desc}
              </p>
            ))}
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {simulationData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">
                  {index === 0 && <FaFlask className="text-[#023E8A] mx-auto" />}
                  {index === 1 && <FaHeartbeat className="text-[#0077B6] mx-auto" />}
                  {index === 2 && <FaUsers className="text-[#0096C7] mx-auto" />}
                </div>
                <h3 className="text-lg font-semibold text-[#023E8A] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Equipment List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-12 mb-12"
          >
            <h3 className="text-2xl font-bold text-[#023E8A] mb-6">Оборудование и материалы</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {simulationData.equipment.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0077B6] mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-blue-100">г. Бишкек, Ахунбаева 113а</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-blue-100">+996 (312) XXX-XX-XX</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SimulationCenter;
