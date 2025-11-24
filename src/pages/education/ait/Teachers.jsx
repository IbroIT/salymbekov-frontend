
import { useTranslation } from 'react-i18next';

const TeachersPage = () => {
  const { t } = useTranslation();

  const teachers = [
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/photo_2023-06-09_17-07-45-225x300.webp',
      text: t('teachers.teacher1')
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/photo_2023-06-09_17-17-49-225x300.webp',
      text: t('teachers.teacher2')
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/dr-yunus-emre.png',
      text: t('teachers.teacher3')
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/ero-yeniaras.png',
      text: t('teachers.teacher4')
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/soji-omiwade.png',
      text: t('teachers.teacher5')
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/dr-alon-arad.png',
      text: t('teachers.teacher6')
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/dogukan-erenel1.png',
      text: t('teachers.teacher7')
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/ilyas-photo.png',
      text: t('teachers.teacher8')
    }
  ];

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-3 leading-relaxed">
            <strong className="text-lg">{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-3 leading-relaxed">
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
            {t('teachers.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Intro Text */}
          <div className="mb-12">
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              {t('teachers.intro')}
            </p>
          </div>

          {/* Teachers Sections */}
          <div className="space-y-12">
            {teachers.map((teacher, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                {/* Image on left side */}
                <div className="w-full md:w-1/3">
                  <img 
                    src={teacher.image} 
                    alt={`Teacher ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                
                {/* Text on right side */}
                <div className="w-full md:w-2/3">
                  <div className="text-gray-700">
                    {formatTextWithBold(teacher.text)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachersPage;