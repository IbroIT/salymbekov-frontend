// components/ActsPage.jsx
import { useTranslation } from 'react-i18next';

const ActsPage = () => {
  const { t } = useTranslation();

  const actsList = [
    { text: t('acts.act1'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-sport-kompleks-2021.pdf" },
    { text: t('acts.act2'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-sport-kompleks-2021.pdf" },
    { text: t('acts.act3'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-lazmed-2021.pdf" },
    { text: t('acts.act4'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-stolovoj-universiteta.pdf" },
    { text: t('acts.act5'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-lazmed-2021.pdf" },
    { text: t('acts.act6'), url: "https://salymbekov.com/wp-content/uploads/2021/04/akt-sanjepid-lazmed-2021.pdf" }
  ];

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
            {t('acts.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Main Text */}
          <div className="prose prose-lg max-w-none text-gray-800 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('acts.mainTitle')}
            </h2>
           
            
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              {t('acts.documentsList')}
            </h3>
          </div>

          {/* Acts List */}
          <div className="space-y-4">
            {actsList.map((act, index) => (
              <div key={index} className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">–</span>
                <a 
                  href={act.url}
                  className="text-blue-600 hover:text-blue-800 hover:underline text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {act.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActsPage;