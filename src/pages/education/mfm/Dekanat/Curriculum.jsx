import { useTranslation } from 'react-i18next';

const CurriculumPage = () => {
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
            {t('curriculum.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* 1st Year Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {t('curriculum.year1.title')}
            </h2>
            <div className="text-gray-700">
              {formatTextWithBold(t('curriculum.year1.description'))}
            </div>
          </div>

          {/* 2nd Year Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {t('curriculum.year2.title')}
            </h2>
            <div className="text-gray-700">
              {formatTextWithBold(t('curriculum.year2.description'))}
            </div>
          </div>

          {/* 3rd Year Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {t('curriculum.year3.title')}
            </h2>
            <div className="text-gray-700">
              {formatTextWithBold(t('curriculum.year3.description'))}
            </div>
          </div>

          {/* 4th Year Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {t('curriculum.year4.title')}
            </h2>
            <div className="text-gray-700">
              {formatTextWithBold(t('curriculum.year4.description'))}
            </div>
          </div>

          {/* 5th Year Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {t('curriculum.year5.title')}
            </h2>
            <div className="text-gray-700">
              {formatTextWithBold(t('curriculum.year5.description'))}
            </div>
          </div>

          {/* Buttons Section */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://salymbekov.com/wp-content/uploads/2023/10/uchebnyj-plan-5-let-jeksperimentalnyj.pdf" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-center transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('curriculum.buttons.experimental5Year')}
              </a>
              <a 
                href="https://salymbekov.com/wp-content/uploads/2023/10/uchebnyj-plan-5-let-na-2021-2022-uch.god.pdf" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-center transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('curriculum.buttons.fiveYear2021')}
              </a>
              <a 
                href="https://salymbekov.com/wp-content/uploads/2023/10/uchebnyj-plan-5-let-na-2023-2024-uch.god.pdf" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-center transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('curriculum.buttons.fiveYear2023')}
              </a>
              <a 
                href="https://salymbekov.com/wp-content/uploads/2023/10/uchebnyj-plan-6-let-na-2021-2022-uch.god.pdf" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-center transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('curriculum.buttons.sixYear')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurriculumPage;