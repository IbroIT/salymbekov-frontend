
import { useTranslation } from 'react-i18next';

const CollegeDirectorPage = () => {
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
        <p key={index} className="mb-4 leading-relaxed text-lg">
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
            {t('collegeDirector.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Greeting Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('collegeDirector.greeting')}
            </h2>
          </div>

          {/* Director Message Section */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image on left side */}
            <div className="w-full md:w-1/3">
              <img 
                src="https://salymbekov.com/wp-content/uploads/2023/02/zhunushalieva-nurzat-manasovna-e1676031324273-975x1024.jpg" 
                alt="Директор колледжа"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            {/* Text on right side */}
            <div className="w-full md:w-2/3">
              <div className="prose max-w-none text-gray-700">
                {formatTextWithBold(t('collegeDirector.message'))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeDirectorPage;