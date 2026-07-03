import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, FaFlask, FaMicroscope, FaLaptop, FaUserMd, 
  FaBrain, FaAtom, FaDna, FaHeart, FaBone, FaVial, FaChartLine,
  FaFire, FaTint, FaSeedling, FaDesktop, FaChalkboardTeacher, FaBook
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import photo1 from '../../assets/science/management/bc0b1100-300x200.jpg';
import photo2 from '../../assets/science/management/bc0b1136-300x200.jpg';
import photo3 from '../../assets/science/management/bc0b1248-300x200.jpg';
import photo4 from '../../assets/science/management/bc0b3947-300x200.jpg';
import photo5 from '../../assets/science/management/bc0b3948-300x200.jpg';
import photo6 from '../../assets/science/management/bc0b2371-300x200.jpg';

const Labs = () => {
  const [activeLab, setActiveLab] = useState('anatomy');
  const { t } = useTranslation();

  const labSections = [
    { 
      id: 'anatomy',
      name: t('labs.sections.anatomy'), 
      icon: FaBone 
    },
    { 
      id: 'biochemistry',
      name: t('labs.sections.biochemistry'), 
      icon: FaFlask 
    },
    { 
      id: 'chemistry',
      name: t('labs.sections.chemistry'), 
      icon: FaAtom 
    },
    { 
      id: 'biology',
      name: t('labs.sections.biology'), 
      icon: FaDna 
    },
    { 
      id: 'interactive',
      name: t('labs.sections.interactive'), 
      icon: FaMicroscope 
    },
    { 
      id: 'computer',
      name: t('labs.sections.computer'), 
      icon: FaLaptop 
    },
    { 
      id: 'study',
      name: t('labs.sections.study'), 
      icon: FaBook 
    }
  ];

  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  const labData = {
    anatomy: {
      title: t('labs.anatomy.title'),
      description: t('labs.anatomy.description'),
      icon: FaBone,
      content: {
        description: [
          t('labs.anatomy.content.description.0'),
          t('labs.anatomy.content.description.1')
        ],
        features: [
          {
            title: t('labs.anatomy.features.0.title'),
            description: t('labs.anatomy.features.0.description'),
            icon: FaBone
          },
          {
            title: t('labs.anatomy.features.1.title'),
            description: t('labs.anatomy.features.1.description'),
            icon: FaHeart
          },
          {
            title: t('labs.anatomy.features.2.title'),
            description: t('labs.anatomy.features.2.description'),
            icon: FaMicroscope
          }
        ],
        equipment: [
          t('labs.anatomy.equipment.0'),
          t('labs.anatomy.equipment.1'),
          t('labs.anatomy.equipment.2'),
          t('labs.anatomy.equipment.3'),
          t('labs.anatomy.equipment.4'),
          t('labs.anatomy.equipment.5')
        ],
        hasGallery: false
      }
    },
    biochemistry: {
      title: t('labs.biochemistry.title'),
      description: t('labs.biochemistry.description'),
      icon: FaFlask,
      content: {
        description: [
          t('labs.biochemistry.content.description.0'),
          t('labs.biochemistry.content.description.1')
        ],
        features: [
          {
            title: t('labs.biochemistry.features.0.title'),
            description: t('labs.biochemistry.features.0.description'),
            icon: FaVial
          },
          {
            title: t('labs.biochemistry.features.1.title'),
            description: t('labs.biochemistry.features.1.description'),
            icon: FaChartLine
          },
          {
            title: t('labs.biochemistry.features.2.title'),
            description: t('labs.biochemistry.features.2.description'),
            icon: FaMicroscope
          }
        ],
        equipment: [
          t('labs.biochemistry.equipment.0'),
          t('labs.biochemistry.equipment.1'),
          t('labs.biochemistry.equipment.2'),
          t('labs.biochemistry.equipment.3'),
          t('labs.biochemistry.equipment.4'),
          t('labs.biochemistry.equipment.5')
        ],
        researchAreas: [
          t('labs.biochemistry.researchAreas.0'),
          t('labs.biochemistry.researchAreas.1'),
          t('labs.biochemistry.researchAreas.2'),
          t('labs.biochemistry.researchAreas.3'),
          t('labs.biochemistry.researchAreas.4'),
          t('labs.biochemistry.researchAreas.5')
        ],
        hasGallery: false
      }
    },
    chemistry: {
      title: t('labs.chemistry.title'),
      description: t('labs.chemistry.description'),
      icon: FaAtom,
      content: {
        description: [
          t('labs.chemistry.content.description.0'),
          t('labs.chemistry.content.description.1')
        ],
        features: [
          {
            title: t('labs.chemistry.features.0.title'),
            description: t('labs.chemistry.features.0.description'),
            icon: FaFlask
          },
          {
            title: t('labs.chemistry.features.1.title'),
            description: t('labs.chemistry.features.1.description'),
            icon: FaTint
          },
          {
            title: t('labs.chemistry.features.2.title'),
            description: t('labs.chemistry.features.2.description'),
            icon: FaFire
          }
        ],
        equipment: [
          t('labs.chemistry.equipment.0'),
          t('labs.chemistry.equipment.1'),
          t('labs.chemistry.equipment.2'),
          t('labs.chemistry.equipment.3'),
          t('labs.chemistry.equipment.4'),
          t('labs.chemistry.equipment.5')
        ],
        experiments: [
          t('labs.chemistry.experiments.0'),
          t('labs.chemistry.experiments.1'),
          t('labs.chemistry.experiments.2'),
          t('labs.chemistry.experiments.3'),
          t('labs.chemistry.experiments.4'),
          t('labs.chemistry.experiments.5')
        ],
        safetyFeatures: [
          t('labs.chemistry.safetyFeatures.0'),
          t('labs.chemistry.safetyFeatures.1'),
          t('labs.chemistry.safetyFeatures.2'),
          t('labs.chemistry.safetyFeatures.3'),
          t('labs.chemistry.safetyFeatures.4'),
          t('labs.chemistry.safetyFeatures.5')
        ],
        hasGallery: false
      }
    },
    biology: {
      title: t('labs.biology.title'),
      description: t('labs.biology.description'),
      icon: FaDna,
      content: {
        description: [
          t('labs.biology.content.description.0'),
          t('labs.biology.content.description.1')
        ],
        features: [
          {
            title: t('labs.biology.features.0.title'),
            description: t('labs.biology.features.0.description'),
            icon: FaMicroscope
          },
          {
            title: t('labs.biology.features.1.title'),
            description: t('labs.biology.features.1.description'),
            icon: FaDna
          },
          {
            title: t('labs.biology.features.2.title'),
            description: t('labs.biology.features.2.description'),
            icon: FaSeedling
          }
        ],
        equipment: [
          t('labs.biology.equipment.0'),
          t('labs.biology.equipment.1'),
          t('labs.biology.equipment.2'),
          t('labs.biology.equipment.3'),
          t('labs.biology.equipment.4'),
          t('labs.biology.equipment.5')
        ],
        researchAreas: [
          t('labs.biology.researchAreas.0'),
          t('labs.biology.researchAreas.1'),
          t('labs.biology.researchAreas.2'),
          t('labs.biology.researchAreas.3'),
          t('labs.biology.researchAreas.4'),
          t('labs.biology.researchAreas.5')
        ],
        hasGallery: false
      }
    },
    interactive: {
      title: t('labs.interactive.title'),
      description: t('labs.interactive.description'),
      icon: FaMicroscope,
      content: {
        description: [
          t('labs.interactive.content.description.0'),
          t('labs.interactive.content.description.1')
        ],
        features: [
          {
            title: t('labs.interactive.features.0.title'),
            description: t('labs.interactive.features.0.description'),
            icon: FaDesktop
          },
          {
            title: t('labs.interactive.features.1.title'),
            description: t('labs.interactive.features.1.description'),
            icon: FaBrain
          },
          {
            title: t('labs.interactive.features.2.title'),
            description: t('labs.interactive.features.2.description'),
            icon: FaChalkboardTeacher
          }
        ],
        equipment: [
          t('labs.interactive.equipment.0'),
          t('labs.interactive.equipment.1'),
          t('labs.interactive.equipment.2'),
          t('labs.interactive.equipment.3'),
          t('labs.interactive.equipment.4'),
          t('labs.interactive.equipment.5')
        ],
        capabilities: [
          t('labs.interactive.capabilities.0'),
          t('labs.interactive.capabilities.1'),
          t('labs.interactive.capabilities.2'),
          t('labs.interactive.capabilities.3'),
          t('labs.interactive.capabilities.4'),
          t('labs.interactive.capabilities.5')
        ],
        hasGallery: false
      }
    },
    computer: {
      title: t('labs.computer.title'),
      description: t('labs.computer.description'),
      icon: FaLaptop,
      content: {
        description: [
          t('labs.computer.content.description.0'),
          t('labs.computer.content.description.1')
        ],
        features: [
          {
            title: t('labs.computer.features.0.title'),
            description: t('labs.computer.features.0.description'),
            icon: FaChartLine
          },
          {
            title: t('labs.computer.features.1.title'),
            description: t('labs.computer.features.1.description'),
            icon: FaDna
          },
          {
            title: t('labs.computer.features.2.title'),
            description: t('labs.computer.features.2.description'),
            icon: FaAtom
          }
        ],
        equipment: [
          t('labs.computer.equipment.0'),
          t('labs.computer.equipment.1'),
          t('labs.computer.equipment.2'),
          t('labs.computer.equipment.3'),
          t('labs.computer.equipment.4'),
          t('labs.computer.equipment.5')
        ],
        software: [
          t('labs.computer.software.0'),
          t('labs.computer.software.1'),
          t('labs.computer.software.2'),
          t('labs.computer.software.3'),
          t('labs.computer.software.4'),
          t('labs.computer.software.5')
        ],
        hasGallery: false
      }
    },
    study: {
      title: t('labs.study.title'),
      description: t('labs.study.description'),
      icon: FaBook,
      content: {
        description: [
          t('labs.study.content.description.0'),
          t('labs.study.content.description.1')
        ],
        features: [
          {
            title: t('labs.study.features.0.title'),
            description: t('labs.study.features.0.description'),
            icon: FaUserMd
          },
          {
            title: t('labs.study.features.1.title'),
            description: t('labs.study.features.1.description'),
            icon: FaDesktop
          },
          {
            title: t('labs.study.features.2.title'),
            description: t('labs.study.features.2.description'),
            icon: FaChalkboardTeacher
          }
        ],
        equipment: [
          t('labs.study.equipment.0'),
          t('labs.study.equipment.1'),
          t('labs.study.equipment.2'),
          t('labs.study.equipment.3'),
          t('labs.study.equipment.4'),
          t('labs.study.equipment.5')
        ],
        amenities: [
          t('labs.study.amenities.0'),
          t('labs.study.amenities.1'),
          t('labs.study.amenities.2'),
          t('labs.study.amenities.3'),
          t('labs.study.amenities.4'),
          t('labs.study.amenities.5')
        ],
        hasGallery: false
      }
    }
  };

  const currentLab = labData[activeLab];
  const IconComponent = currentLab.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('labs.category')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {currentLab.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {currentLab.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaFlask className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">{t('labs.sidebarTitle')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {labSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => setActiveLab(section.id)}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          activeLab === section.id
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium">{section.name}</span>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <motion.div
              key={activeLab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
                  <IconComponent className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{currentLab.title}</h2>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                {currentLab.content.description.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentLab.content.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mx-auto mb-4">
                        <FeatureIcon className="text-white text-xl" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-700 text-sm">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Equipment Section */}
              {currentLab.content.equipment && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaFlask className="mr-3 text-[#023E8A]" />
                    {t('labs.sections.equipment')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <ul className="space-y-3">
                      {currentLab.content.equipment.slice(0, Math.ceil(currentLab.content.equipment.length / 2)).map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-[#023E8A] rounded-full mr-3"></div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    <ul className="space-y-3">
                      {currentLab.content.equipment.slice(Math.ceil(currentLab.content.equipment.length / 2)).map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-[#023E8A] rounded-full mr-3"></div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Additional Sections */}
              {currentLab.content.researchAreas && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaChartLine className="mr-3 text-[#023E8A]" />
                    {t('labs.sections.researchAreas')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {currentLab.content.researchAreas.map((area, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center p-3 bg-white/50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span>{area}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Experiments Section */}
              {currentLab.content.experiments && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaFlask className="mr-3 text-[#023E8A]" />
                    {t('labs.sections.experiments')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentLab.content.experiments.map((experiment, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center p-3 bg-white/70 rounded-lg border border-gray-200"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{experiment}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Safety Features */}
              {currentLab.content.safetyFeatures && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaFire className="mr-3 text-[#023E8A]" />
                    {t('labs.sections.safetyFeatures')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {currentLab.content.safetyFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Capabilities Section */}
              {currentLab.content.capabilities && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaDesktop className="mr-3 text-[#023E8A]" />
                    {t('labs.sections.capabilities')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {currentLab.content.capabilities.map((capability, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center p-3 bg-white/50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span>{capability}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Software Section */}
              {currentLab.content.software && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaLaptop className="mr-3 text-[#023E8A]" />
                    {t('labs.sections.software')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {currentLab.content.software.map((software, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-[#023E8A] rounded-full mr-3"></div>
                        {software}
                      </motion.li>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Amenities Section */}
              {currentLab.content.amenities && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaUserMd className="mr-3 text-[#023E8A]" />
                    {t('labs.sections.amenities')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {currentLab.content.amenities.map((amenity, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-[#023E8A] rounded-full mr-3"></div>
                        {amenity}
                      </motion.li>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Photo Gallery - Only for Simulation Center */}
              {currentLab.content.hasGallery && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FaFlask className="mr-3 text-[#023E8A]" />
                    {t('labs.sections.gallery')}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {photos.map((photo, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative overflow-hidden rounded-2xl shadow-lg group"
                      >
                        <img 
                          src={photo} 
                          alt={`${currentLab.title} ${index + 1}`} 
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Labs;