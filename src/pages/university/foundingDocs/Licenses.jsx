// components/LicensesPage.jsx
import { useTranslation } from 'react-i18next';

const LicensesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-28 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2021/03/normativno-pravovye-akty.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
            {t('licenses.title')}
          </h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            {t('licenses.legalTitle')}
          </h2>
          
          {/* Legal Documents Text */}
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              {t('licenses.legalAddress')}
            </p>
            <p className="text-lg leading-relaxed mb-6">
              {t('licenses.ownershipForm')}
            </p>
            <p className="text-lg leading-relaxed mb-6">
              {t('licenses.legalForm')}
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('licenses.documentsTitle')}
            </h3>
            
            <p className="text-lg leading-relaxed">
              {t('licenses.registrationCertificate')}
            </p>
          </div>

          {/* Single Image Section */}
          <div className="flex justify-center mt-12">
            <div className="w-full max-w-2xl">
              <img 
                src="https://salymbekov.com/wp-content/uploads/2021/04/img4-rotated.jpg" 
                alt={t('licenses.imageAlt')}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LicensesPage;