
import { useTranslation } from 'react-i18next';

const InstituteLeadershipPage = () => {
  const { t } = useTranslation();

  const leadership = [
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/2-300x300.png',
      text: t('instituteLeadership.leader1')
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/photo_2023-06-09_17-07-45-225x300.webp',
      text: t('instituteLeadership.leader2')
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/photo_2023-06-09_17-17-49-225x300.webp',
      text: t('instituteLeadership.leader3')
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2022/05/rysbek-aldagandaevich-250x300.jpg',
      text: t('instituteLeadership.leader4')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2023/06/bigstock-top-computer-corporation-compa-67399066-jpg-e1686293198722.webp')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('instituteLeadership.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Leadership Sections */}
          <div className="space-y-12">
            {leadership.map((leader, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                {/* Image on left side */}
                <div className="w-full md:w-1/3">
                  <img 
                    src={leader.image} 
                    alt={`Leader ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                
                {/* Text on right side */}
                <div className="w-full md:w-2/3">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {leader.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstituteLeadershipPage;