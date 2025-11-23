
import { useTranslation } from 'react-i18next';

const QualityMonitoringPage = () => {
  const { t } = useTranslation();

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-4 leading-relaxed">
            <strong>{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2021/03/sotrudniki.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('qualityMonitoring.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose max-w-none text-gray-700">
            {formatTextWithBold(t('qualityMonitoring.content'))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityMonitoringPage;