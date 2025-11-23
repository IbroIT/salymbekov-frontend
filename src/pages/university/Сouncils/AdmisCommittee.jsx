import React from 'react';
import { useTranslation } from 'react-i18next';

const AdmissionCommitteePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2021/04/askar-salymbekov-v-vypusknikami-mlk-s.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('admissionCommittee.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Contacts Section */}
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {t('admissionCommittee.contactsTitle')}
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-gray-700 mb-2">{t('admissionCommittee.address')}</p>
                <p className="text-gray-600">{t('admissionCommittee.address1')}</p>
                <p className="text-gray-600">{t('admissionCommittee.address2')}</p>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-700 mb-2">{t('admissionCommittee.phones')}</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>{t('admissionCommittee.phone1')}</li>
                  <li>{t('admissionCommittee.phone2')}</li>
                  <li>{t('admissionCommittee.phone3')}</li>
                  <li>{t('admissionCommittee.phone4')}</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-700 mb-2">Email:</p>
                <p className="text-gray-600">{t('admissionCommittee.email')}</p>
              </div>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="prose prose-lg max-w-none text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {t('admissionCommittee.welcomeTitle')}
            </h2>

            <p className="text-lg mb-4 leading-relaxed">
              {t('admissionCommittee.welcomeText1')}
            </p>

            <p className="text-lg mb-4 leading-relaxed">
              {t('admissionCommittee.welcomeText2')}
            </p>

            {/* Gray Divider */}
            <div className="bg-gray-200 h-px my-8"></div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {t('admissionCommittee.medicineFacultyTitle')}
            </h3>

            <p className="text-lg mb-4 leading-relaxed">
              {t('admissionCommittee.medicineFacultyText')}
            </p>

            {/* Gray Divider */}
            <div className="bg-gray-200 h-px my-8"></div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {t('admissionCommittee.itCollegeTitle')}
            </h3>

            <p className="text-lg mb-4 leading-relaxed">
              {t('admissionCommittee.itCollegeText1')}
            </p>

            <p className="text-lg mb-4 leading-relaxed">
              {t('admissionCommittee.itCollegeText2')}
            </p>

            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed mb-4">
              <li>{t('admissionCommittee.itDirection1')}</li>
              <li>{t('admissionCommittee.itDirection2')}</li>
              <li>{t('admissionCommittee.itDirection3')}</li>
            </ul>

            <p className="text-lg mb-4 leading-relaxed">
              {t('admissionCommittee.itCollegeText3')}
            </p>

            {/* Gray Divider */}
            <div className="bg-gray-200 h-px my-8"></div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {t('admissionCommittee.recognitionTitle')}
            </h3>

            <p className="text-lg mb-4 leading-relaxed">
              {t('admissionCommittee.recognitionText')}
            </p>

            {/* Gray Divider */}
            <div className="bg-gray-200 h-px my-8"></div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {t('admissionCommittee.internationalTitle')}
            </h3>

            <p className="text-lg mb-4 leading-relaxed">
              {t('admissionCommittee.internationalText')}
            </p>

            {/* Gray Divider */}
            <div className="bg-gray-200 h-px my-8"></div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {t('admissionCommittee.extracurricularTitle')}
            </h3>

            <p className="text-lg mb-4 leading-relaxed">
              {t('admissionCommittee.extracurricularText')}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 text-center">
              {t('admissionCommittee.finalWelcome')}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionCommitteePage;