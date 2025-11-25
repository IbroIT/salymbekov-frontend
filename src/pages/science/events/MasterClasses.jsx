import React from 'react';
import { Link } from 'react-router-dom';

const MasterClasses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <Link to="/science/events" className="text-gray-200 hover:text-white mb-2 inline-block">
              ← Назад к мероприятиям
            </Link>
            <h1 className="text-5xl font-bold mb-4">Мастер классы</h1>
            <p className="text-xl text-gray-200">
              Мастер-классы от ведущих специалистов
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-6xl mb-6">🎓</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Мастер классы</h2>
          <p className="text-gray-600 text-lg">
            Раздел находится в разработке. Информация о мастер-классах будет добавлена в ближайшее время.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasterClasses;
