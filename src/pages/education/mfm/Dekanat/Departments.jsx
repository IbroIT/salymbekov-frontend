import { useTranslation } from 'react-i18next';

const HumanitiesDepartmentPage = () => {
  const { t } = useTranslation();

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-4 leading-relaxed">
            <strong className="text-xl">{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-4 leading-relaxed text-lg text-gray-700">
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
        style={{ backgroundImage: `url('https://coolbackgrounds.imgix.net/1ImfDgm1Ze4X2YS2CRiQxN/a426817af36443afa06274e55836b3e3/pure-blue-background-0000ff.jpg?w=3840&q=60&auto=format,compres')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('humanitiesDepartment.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* History Section */}
          <div className="mb-12">
            <div className="text-gray-700">
              {formatTextWithBold(t('humanitiesDepartment.history'))}
            </div>
          </div>

          {/* Educational Activity Section */}
          <div className="mb-12">
            <div className="text-gray-700">
              {formatTextWithBold(t('humanitiesDepartment.educationalActivity'))}
            </div>
          </div>

          {/* Disciplines Section */}
          <div className="mb-12">
            <div className="text-gray-700">
              {formatTextWithBold(t('humanitiesDepartment.disciplines'))}
            </div>
          </div>

          {/* Methodological Work Section */}
          <div className="mb-12">
            <div className="text-gray-700">
              {formatTextWithBold(t('humanitiesDepartment.methodologicalWork'))}
            </div>
          </div>

          {/* Gray Divider */}
          <div className="border-t border-gray-300 my-12"></div>

          {/* Morpho-Physiological Department Section */}
          <div className="mb-12">
            <div className="text-gray-700">
              {formatTextWithBold(t('humanitiesDepartment.morphoPhysiological'))}
            </div>
          </div>

          {/* Gray Divider */}
          <div className="border-t border-gray-300 my-12"></div>

          {/* Clinical Department Section */}
          <div className="mb-12">
            <div className="text-gray-700">
              {formatTextWithBold(t('humanitiesDepartment.clinicalDepartment'))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanitiesDepartmentPage;