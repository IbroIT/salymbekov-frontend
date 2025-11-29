import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaFileAlt, FaDatabase, FaUniversity } from 'react-icons/fa';

const ELibrary = () => {
  const navigate = useNavigate();

  const resourcesSections = [
    { 
      path: "/student/resources/instructions", 
      name: "ИНСТРУКЦИИ И ПОЛОЖЕНИЯ", 
      icon: FaFileAlt,
    },
    { 
      path: "/student/resources/infosystem", 
      name: "ИНФОРМАЦИОННАЯ СИСТЕМА", 
      icon: FaDatabase,
    },
    { 
      name: "ЭЛЕКТРОННАЯ БИБЛИОТЕКА", 
      icon: FaBook,
      disabled: true,
      active: true,
    },
    { 
      path: "/student/resources/edu-resources", 
      name: "УЧЕБНЫЕ РЕСУРСЫ", 
      icon: FaUniversity,
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        padding: '4rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }} />
        
        <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>
          <motion.button
            onClick={() => navigate('/student')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <FaArrowLeft />
            <span>Назад к разделу "Студенту"</span>
          </motion.button>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            ЭЛЕКТРОННАЯ БИБЛИОТЕКА
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg"
          >
            Доступ к электронным образовательным ресурсам
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaUsers className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">СТУДЕНТАМ</h3>
                </div>
              </div>
              <nav className="p-2">
                {resourcesSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.path || section.name}
                      whileHover={section.disabled ? {} : { scale: 1.02 }}
                      whileTap={section.disabled ? {} : { scale: 0.98 }}
                    >
                      <button
                        onClick={section.disabled ? undefined : () => navigate(section.path)}
                        disabled={section.disabled}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          section.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50'
                        } ${section.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                      >
                        <SectionIcon className={`mr-3 ${section.active ? 'text-blue-600' : 'text-gray-500'}`} />
                        <span className="text-xs font-semibold">{section.name}</span>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center py-16">
                <FaBook className="text-6xl text-blue-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Электронная библиотека
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Раздел находится в разработке
                </p>
                <div className="max-w-2xl mx-auto text-left bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-blue-900 mb-3">
                    Планируемые возможности:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Доступ к электронным учебникам и учебным пособиям
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Научные статьи и периодические издания
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Методические материалы по дисциплинам
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Онлайн-каталог библиотечного фонда
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default ELibrary;
