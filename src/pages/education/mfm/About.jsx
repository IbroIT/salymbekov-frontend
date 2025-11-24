import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';

const MedicalFaculty = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section с фоновым изображением */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://salymbekov.com/wp-content/uploads/2021/03/bc0b5813.jpg)` }} // URL_ФОНОВОЕ_ИЗОБРАЖЕНИЕ_МЕДИЦИНА
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white ">{t('medicalFaculty.hero.title')}</h1>
        </div>
      </section>

      {/* Основной контент */}
      <div className="container mx-auto px-6 py-12">
        {/* Кнопка Высшая школа медицины */}
        <div className="text-center mb-12">
          <a 
            href="https://www.su-medical-school.com/" // URL_СТРАНИЦЫ_ВЫСШЕЙ_ШКОЛЫ_МЕДИЦИНЫ
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            {t('medicalFaculty.higherSchoolButton')}
            <FaArrowRight className="ml-2" />
          </a>
        </div>

        {/* Текстовый контент */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* О факультете */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('medicalFaculty.about.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('medicalFaculty.about.description1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('medicalFaculty.about.description2')}
            </p>
          </div>

          {/* Сотрудники и преподаватели */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('medicalFaculty.staff.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('medicalFaculty.staff.description1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('medicalFaculty.staff.description2')}
            </p>
          </div>

          {/* Учебная база */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('medicalFaculty.facilities.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('medicalFaculty.facilities.description1')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('medicalFaculty.facilities.description2')}
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-1 mb-4">
              <li>• {t('medicalFaculty.facilities.list.item1')}</li>
              <li>• {t('medicalFaculty.facilities.list.item2')}</li>
              <li>• {t('medicalFaculty.facilities.list.item3')}</li>
              <li>• {t('medicalFaculty.facilities.list.item4')}</li>
              <li>• {t('medicalFaculty.facilities.list.item5')}</li>
              <li>• {t('medicalFaculty.facilities.list.item6')}</li>
              <li>• {t('medicalFaculty.facilities.list.item7')}</li>
              <li>• {t('medicalFaculty.facilities.list.item8')}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              {t('medicalFaculty.facilities.description3')}
            </p>
          </div>

          {/* Наши ценности */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('medicalFaculty.values.title')}</h2>
            <p className="text-gray-700 leading-relaxed">
              {t('medicalFaculty.values.description')}
            </p>
          </div>

          {/* Политика университета */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('medicalFaculty.policy.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('medicalFaculty.policy.description1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('medicalFaculty.policy.description2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalFaculty;