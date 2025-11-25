import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StudentScience = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: 'Студенческое научное общество',
      description: 'Положение и состав научного общества',
      icon: '👥',
      link: '/science/student-society'
    },
    {
      title: 'Научные кружки',
      description: 'Студенческие научные кружки и секции',
      icon: '🔬',
      link: '/science/student-science/clubs'
    },
    {
      title: 'Студенческие конференции',
      description: 'Конференции и мероприятия для студентов',
      icon: '📊',
      link: '/science/student-science/conferences'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Студенческая наука</h1>
            <p className="text-xl text-gray-200">
              Научная деятельность студентов
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.link}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{section.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h3>
              <p className="text-gray-600">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentScience;
