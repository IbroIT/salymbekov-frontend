
import { useTranslation } from 'react-i18next';

const ITDepartmentPage = () => {
  const { t } = useTranslation();

  const teachers = [
    {
      name: t('itDepartment.teachers.teacher1.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2022/10/alisa.png',
      text: t('itDepartment.teachers.teacher1.text')
    },
    {
      name: t('itDepartment.teachers.teacher2.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2022/10/nursultan.png',
      text: t('itDepartment.teachers.teacher2.text')
    },
    {
      name: t('itDepartment.teachers.teacher3.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2022/10/syrdybaev.png',
      text: t('itDepartment.teachers.teacher3.text')
    },
    {
      name: t('itDepartment.teachers.teacher4.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2022/10/kalbaeva.png',
      text: t('itDepartment.teachers.teacher4.text')
    },
    {
      name: t('itDepartment.teachers.teacher5.name'),
      image: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%BD%D0%B0%D0%BA-man-avatar-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2-215427929.jpg',
      text: t('itDepartment.teachers.teacher5.text')
    },
    {
      name: t('itDepartment.teachers.teacher6.name'),
      image: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%BD%D0%B0%D0%BA-man-avatar-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2-215427929.jpg',
      text: t('itDepartment.teachers.teacher6.text')
    },
    {
      name: t('itDepartment.teachers.teacher7.name'),
      image: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%BD%D0%B0%D0%BA-man-avatar-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2-215427929.jpg',
      text: t('itDepartment.teachers.teacher7.text')
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
        <p key={index} className="mb-3 leading-relaxed text-gray-700">
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
            {t('itDepartment.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Department Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('itDepartment.department.title')}
            </h2>
            <div className="prose max-w-none text-gray-700">
              {formatTextWithBold(t('itDepartment.department.content'))}
            </div>
          </div>

          {/* Teachers Section */}
          <div className="space-y-8">
            {teachers.map((teacher, index) => (
              <div key={index}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {teacher.name}
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-1/3">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <div className="text-gray-700">
                        {formatTextWithBold(teacher.text)}
                      </div>
                    </div>
                  </div>
                </div>
                {index < teachers.length - 1 && (
                  <div className="border-t border-gray-300 my-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITDepartmentPage;