
import { useTranslation } from 'react-i18next';

const GeneralEducationDepartmentPage = () => {
  const { t } = useTranslation();

  const teachers = [
    {
      name: t('generalEducation.teachers.teacher1.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/alijarova-mukaddas-juldashevna-300x200.jpg',
      text: t('generalEducation.teachers.teacher1.text')
    },
    {
      name: t('generalEducation.teachers.teacher2.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/arykov-danijar-kanybekovich-300x200.png',
      text: t('generalEducation.teachers.teacher2.text')
    },
    {
      name: t('generalEducation.teachers.teacher3.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/kurbanbaeva-nurgul-toktoshevna-300x200.jpg',
      text: t('generalEducation.teachers.teacher3.text')
    },
    {
      name: t('generalEducation.teachers.teacher4.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2021/04/mazekova-nazgul-zholochievna-300x200.jpg',
      text: t('generalEducation.teachers.teacher4.text')
    },
    {
      name: t('generalEducation.teachers.teacher5.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/pirimbaeva-zharkyn-zhusupzhanovna-300x200.jpg',
      text: t('generalEducation.teachers.teacher5.text')
    },
    {
      name: t('generalEducation.teachers.teacher7.name'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/toktoraliev-jerkinbek-torobekovich-300x200.png',
      text: t('generalEducation.teachers.teacher7.text')
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
            {t('generalEducation.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Department Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('generalEducation.department.title')}
            </h2>
            <div className="prose max-w-none text-gray-700">
              {formatTextWithBold(t('generalEducation.department.content'))}
            </div>
          </div>

          {/* Head of Department */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('generalEducation.headOfDepartment.name')}
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/3">
                <img 
                  src="https://salymbekov.com/wp-content/uploads/2023/02/foto-batrakeeva-gulina-211x300.jpg" 
                  alt="Заведующая отделением"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-2/3">
                <div className="text-gray-700">
                  {formatTextWithBold(t('generalEducation.headOfDepartment.text'))}
                </div>
              </div>
            </div>
          </div>

          {/* Teachers Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('generalEducation.teachers.title')}
            </h2>
            
            <div className="space-y-8">
              {teachers.map((teacher1, index) => (
                <div key={index}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {teacher1.name}
                    </h3>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-1/3">
                        <img 
                          src={teacher1.image} 
                          alt={teacher1.name}
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-full md:w-2/3">
                        <div className="text-gray-700">
                          {formatTextWithBold(teacher1.text)}
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
        </div>
      </section>
    </div>
  );
};

export default GeneralEducationDepartmentPage;