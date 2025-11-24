
import { useTranslation } from 'react-i18next';

const MedicalFacultyDeaneryPage = () => {
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
        style={{ backgroundImage: `url('https://coolbackgrounds.imgix.net/1ImfDgm1Ze4X2YS2CRiQxN/a426817af36443afa06274e55836b3e3/pure-blue-background-0000ff.jpg?w=3840&q=60&auto=format,compress')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('medicalFacultyDeanery.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction Section */}
          <div className="mb-12">
            <div className="prose max-w-none text-gray-700">
              {formatTextWithBold(t('medicalFacultyDeanery.introduction'))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {t('medicalFacultyDeanery.leadership.title')}
            </h2>
            
            {/* Dean */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/3">
                  <img 
                    src="https://salymbekov.com/wp-content/uploads/2023/02/maana-300x200.jpg" 
                    alt="Декан факультета"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <div className="text-gray-700">
                    {formatTextWithBold(t('medicalFacultyDeanery.leadership.dean'))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-8"></div>

            {/* Deputy Dean */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/3">
                  <img 
                    src="https://salymbekov.com/wp-content/uploads/2023/02/arzieva-nazgul-nurmamatovna-300x200.jpg" 
                    alt="Заместитель декана"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <div className="text-gray-700">
                    {formatTextWithBold(t('medicalFacultyDeanery.leadership.deputyDean'))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-8"></div>

            {/* Contact Section */}
            <div className="mt-12">
              <div className="prose max-w-none text-gray-700">
                {formatTextWithBold(t('medicalFacultyDeanery.contact'))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalFacultyDeaneryPage;