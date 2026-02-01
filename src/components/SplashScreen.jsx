import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo_white.png';

const SplashScreen = ({ onFinish, onAnimationStartExit }) => {
  const [animationStage, setAnimationStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  // Начинаем с true, чтобы не было мерцания основного контента перед сплэшем
  const [showAnimation, setShowAnimation] = useState(true);
  const [rings, setRings] = useState([]);

  // Проверка, была ли анимация уже показана
  useEffect(() => {
    // В App.jsx уже есть проверка, но оставим как предохранитель
    // или если компонент используется где-то еще
    const hasShown = sessionStorage.getItem('splashAnimationShown');
    if (hasShown) {
      onAnimationStartExit?.();
      onFinish?.();
    }
    // else setShowAnimation(true) - уже true по умолчанию
  }, [onFinish, onAnimationStartExit]);

  // Инициализация колец
  useEffect(() => {
    if (!showAnimation) return;
    
    const newRings = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      size: 300 + i * 100,
      opacity: 0,
      delay: i * 200
    }));
    
    setRings(newRings);
  }, [showAnimation]);

  // Основная анимация - СОКРАЩЕННАЯ
  useEffect(() => {
    if (!showAnimation) return;
    
    const timeline = [
      { time: 0, stage: 1 },    // Начало
      { time: 300, stage: 2 },  // Лого появляется
      { time: 800, stage: 3 },  // Пик
      { time: 1200, stage: 4 }  // Стабильность
    ];

    const timeoutIds = [];
    timeline.forEach(({ time, stage }) => {
      timeoutIds.push(setTimeout(() => setAnimationStage(stage), time));
    });

    // Начало выхода с уходом вверх
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      onAnimationStartExit?.();
    }, 1800);
    timeoutIds.push(exitTimer);

    // Завершение (даем время на анимацию ухода вверх)
    const completionTimer = setTimeout(() => {
      sessionStorage.setItem('splashAnimationShown', 'true');
      onFinish?.();
    }, 2400); // Немного сократили общее время
    timeoutIds.push(completionTimer);

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [onFinish, showAnimation]);

  if (!showAnimation) {
    return null;
  }

  // Цветовая палитра в синих тонах
  const colors = {
    primary: '#3b82f6',    // blue-500
    secondary: '#2563eb',  // blue-600
    accent: '#1d4ed8',     // blue-700
    dark: '#0f172a',       // slate-900
    light: '#93c5fd',      // blue-300
    glow: 'rgba(59, 130, 246, 0.3)',
    whiteGlow: 'rgba(255, 255, 255, 0.2)'
  };

  return (
    <div 
      className="fixed inset-0 z-[100] overflow-hidden bg-[#0f172a]"
      style={{
        transform: isExiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: isExiting ? '0.1s' : '0s'
      }}
    >
      {/* Градиентный фон с анимацией ухода */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            circle at center,
            ${colors.accent}20 0%,
            ${colors.dark} 70%,
            #000 100%
          )`,
          opacity: isExiting ? 0 : 1,
          transform: isExiting ? 'translateY(-20%) scale(0.95)' : 'translateY(0) scale(1)',
          transition: 'all 0.5s ease'
        }}
      />

      {/* Концентрические кольца с анимацией ухода вверх */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {rings.map(ring => (
          <div
            key={ring.id}
            className="absolute border rounded-full"
            style={{
              width: ring.size,
              height: ring.size,
              borderColor: colors.primary,
              opacity: isExiting ? 0 : ring.opacity,
              borderWidth: '1px',
              transform: isExiting ? 
                `translateY(-30%) scale(0.7) rotate(${ring.id * 15}deg)` : 
                'translateY(0) scale(1)',
              transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${ring.delay}ms`
            }}
          />
        ))}
      </div>

      {/* Эффект подъема при завершении */}
      {isExiting && (
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              ${colors.primary}20 0%,
              transparent 30%,
              transparent 70%,
              ${colors.dark} 100%
            )`,
            opacity: 0.6,
            transform: 'translateY(-100%)',
            animation: 'slide-up-fade 0.8s ease-out forwards',
          }}
        />
      )}

      {/* Основной контент с анимацией ухода вверх */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <div 
          className="relative"
          style={{
            transform: isExiting ? 
              'translateY(-40vh) scale(0.7) rotate(-5deg)' : 
              (animationStage >= 3 ? 'scale(1.05)' : 'scale(1)'),
            opacity: isExiting ? 0 : 1,
            filter: isExiting ? 'blur(5px)' : 'none',
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transitionDelay: isExiting ? '0s' : '0.1s'
          }}
        >
          {/* Внешнее свечение */}
          <div 
            className="absolute inset-0 -m-12"
            style={{
              background: `radial-gradient(
                circle,
                ${colors.primary}40 0%,
                transparent 70%
              )`,
              opacity: animationStage >= 2 ? (isExiting ? 0.2 : 0.5) : 0,
              filter: 'blur(25px)',
              transform: isExiting ? 'translateY(-20%) scale(0.8)' : 'scale(1)',
              transition: 'all 0.5s ease'
            }}
          />

          {/* Среднее свечение */}
          <div 
            className="absolute inset-0 -m-8"
            style={{
              background: `radial-gradient(
                circle,
                ${colors.whiteGlow} 0%,
                transparent 60%
              )`,
              opacity: animationStage >= 3 ? (isExiting ? 0.1 : 0.3) : 0,
              filter: 'blur(15px)',
              mixBlendMode: 'screen',
              transform: isExiting ? 'translateY(-15%) scale(0.85)' : 'scale(1)',
              transition: 'all 0.4s ease'
            }}
          />

          {/* Основной логотип */}
          <div className="relative">
            <img
              src={Logo}
              alt="Salymbekov University"
              className="relative z-10 w-48 h-48 object-contain"
              style={{
                opacity: animationStage >= 1 ? (isExiting ? 0.8 : 1) : 0,
                transform: animationStage >= 1 ?
                  (isExiting ? 'translateY(-20px) scale(0.85)' : 
                   animationStage >= 3 ? 'scale(1.05)' : 'scale(1)') :
                  'scale(0.7)',
                filter: animationStage >= 3 && !isExiting 
                  ? `drop-shadow(0 0 30px ${colors.primary})
                     drop-shadow(0 0 15px ${colors.light})
                     brightness(1.05)` 
                  : 'none',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            />

            {/* Внутренняя подсветка */}
            <div 
              className="absolute inset-0 -m-4"
              style={{
                background: `radial-gradient(
                  circle,
                  white 0%,
                  transparent 60%
                )`,
                opacity: animationStage >= 3 ? (isExiting ? 0 : 0.15) : 0,
                filter: 'blur(8px)',
                mixBlendMode: 'overlay',
                transform: isExiting ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Точки по кругу с анимацией разлета вверх */}
          <div className="absolute inset-0 pointer-events-none">
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: '3px',
                  height: '3px',
                  backgroundColor: colors.light,
                  borderRadius: '50%',
                  boxShadow: `0 0 10px ${colors.light}`,
                  transform: isExiting ? 
                    `
                      translate(-50%, -50%)
                      rotate(${angle}deg)
                      translateY(-200px)
                      scale(0.5)
                    ` :
                    `
                      translate(-50%, -50%)
                      rotate(${angle}deg)
                      translateY(-140px)
                      scale(1)
                    `,
                  opacity: animationStage >= 3 ? (isExiting ? 0 : 0.8) : 0,
                  transition: `all 0.5s ease ${i * 100}ms`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Эффект частиц, улетающих вверх */}
      {isExiting && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: colors.light,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.random() * 100}px)`,
                animation: `particle-rise 0.8s ease-out forwards ${i * 0.05}s`,
                opacity: 0.7
              }}
            />
          ))}
        </div>
      )}

      {/* Стили для анимаций */}
      <style jsx>{`
        @keyframes collapse-center {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes slide-up-fade {
          0% {
            transform: translateY(0);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        @keyframes particle-rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            filter: blur(25px);
          }
          50% {
            opacity: 0.7;
            filter: blur(20px);
          }
        }

        @keyframes logo-float {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }
      `}</style>

      {/* Анимация пульсации */}
      {animationStage >= 4 && !isExiting && (
        <style jsx>{`
          .absolute.inset-0.-m-12 {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          img {
            animation: logo-float 3s ease-in-out infinite;
          }
        `}</style>
      )}

      {/* Анимация появления колец */}
      {animationStage >= 2 && (
        <style jsx>{`
          .absolute.border.rounded-full {
            opacity: 0.15 !important;
          }
        `}</style>
      )}
    </div>
  );
};

export default SplashScreen;