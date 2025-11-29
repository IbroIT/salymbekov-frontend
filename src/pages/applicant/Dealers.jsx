import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ExtraNavigation from './extrapages/ExtraNavigation';

const Dealers = () => {
  const navigate = useNavigate();

  // Animated background balls
  const backgroundBalls = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 300 + 100,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      color: ['from-blue-400/20 to-purple-400/20', 'from-green-400/20 to-blue-400/20', 'from-purple-400/20 to-pink-400/20'][i % 3]
    }));
  }, []);

  const countries = [
    {
      id: 1,
      name: 'Индия',
      flag: '🇮🇳',
      description: 'Страна с богатой культурой и историей',
      color: 'from-orange-500 to-pink-500',
      route: '/applicants/dealers/india'
    },
    {
      id: 2,
      name: 'Пакистан',
      flag: '🇵🇰',
      description: 'Исламская республика в Южной Азии',
      color: 'from-green-500 to-white',
      route: '/applicants/dealers/pakistan'
    },
    {
      id: 3,
      name: 'Узбекистан',
      flag: '🇺🇿',
      description: 'Страна в Центральной Азии с древними городами',
      color: 'from-blue-500 to-white',
      route: '/applicants/dealers/uzbekistan'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Balls */}
      {backgroundBalls.map((ball) => (
        <motion.div
          key={ball.id}
          className={`absolute rounded-full bg-gradient-to-br ${ball.color} blur-3xl`}
          style={{
            width: ball.size,
            height: ball.size,
            left: `${ball.x}%`,
            top: `${ball.y}%`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: ball.duration,
            delay: ball.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Hero Section */}
      <motion.div
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Партнеры — Официальные дилеры
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Выберите страну для получения подробной информации
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content with Navigation */}
      <div className="relative z-10 container mx-auto px-4 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation */}
          <div className="lg:w-80 flex-shrink-0">
            <ExtraNavigation />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Countries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {countries.map((country, index) => (
                <motion.div
                  key={country.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  onClick={() => navigate(country.route)}
                >
                  {/* Card Header with Gradient */}
                  <div className={`h-32 bg-gradient-to-r ${country.color} relative`}>
                    <div className="absolute -bottom-6 left-6">
                      <div className="text-6xl bg-white p-3 rounded-2xl shadow-lg">
                        {country.flag}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-10 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {country.name}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {country.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Нажмите для подробностей
                      </span>
                      <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-4 py-2 rounded-full text-sm font-semibold transform transition-transform group-hover:scale-110">
                        Подробнее →
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dealers;
