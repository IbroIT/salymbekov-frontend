
import { useTranslation } from 'react-i18next';

const PedagogicalCouncilPage = () => {
  const { t } = useTranslation();

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
            {t('pedagogicalCouncil.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Plan Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t('pedagogicalCouncil.plan.title')}
            </h2>
            <div className="w-full">
              <img 
                src="/plan.png" 
                alt="План Педагогического совета"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Composition Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t('pedagogicalCouncil.composition.title')}
            </h2>
            <div className="w-full">
              <img 
                src="/COMPOSITION.png" 
                alt="Состав Педагогического совета"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Regulation Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t('pedagogicalCouncil.regulation.title')}
            </h2>
            <div className="w-full">
              <img 
                src="/REGULATION.png" 
                alt="Положение о педагогическом совете"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PedagogicalCouncilPage;