// components/LawsRegulationsPage.jsx
import { useTranslation } from 'react-i18next';

const LawsRegulationsPage = () => {
  const { t } = useTranslation();

  const laws = [
    {
      title: t('lawsRegulations.laws.law1'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/zakon-kyrgyzskoj-respubliki-ob-obrazovanii.pdf'
    },
    {
      title: t('lawsRegulations.laws.law2'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/zakon_kr_ob_ohrane_zdorovya_grajdan_v_kyrgyzskoy_respublike_ot_9_yanvarya_2005_goda_6.pdf'
    },
    {
      title: t('lawsRegulations.laws.law3'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/zakon_kr_ob_organizaciyah_zdravoohraneniya_v_kyrgyzskoy_respublike__ot_13_avgusta_2004_goda_116.pdf'
    }
  ];

  const regulations = [
    {
      title: t('lawsRegulations.regulations.regulation1'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/polozhenie-o-porjadke-prisvoenija-uchenyh-zvanij-utverzhdeno-postanovleniem-pravitelstva-kyrgyzskoj-respubliki-ot-22-avgusta-2012-goda-57.pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation2'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/ob-uchenom-sovete-vysshego-uchebnogo-zavedenija-kyrgyzskoj-respubliki.pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation3'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/ob-utverzhdenii-normativnyh-pravovyh-aktov-regulirujushhih-dejatelnost-obrazovatelnyh-organizacij-vysshego-i-srednego-professionalnogo-obrazovanija-kyrgyzskoj-respubliki.pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation4'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-provedenii-tekushhego-kontrolja-i-promezhutochnoj-attestacii-studentov-vysshih-uchebnyh-zavedenij-kyrgyzskoj-respubliki.pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation5'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-kafedre-vysshego-uchebnogo-zavedenija-kyrgyzskoj-respubliki.pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation6'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-porjadke-perevoda-otchislenija-i-vosstanovlenija-studentov-vysshih-uchebnyh-zavedenij-kyrgyzskoj-respubliki.pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation7'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-porjadke-zameshhenija-dolzhnostej-professorsko-prepodavatelskogo-sostava-vysshih-uchebnyh-zavedenij-kyrgyzskoj-respubliki.pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation8'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/postanovlenie-pravitelstva-kr-517-instrukcija-po-deloproizvodstvu-v-kr-ot-23.07.2012g..pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation9'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/postanovlenie-pravitelstva-kr-o-voprosah-registracii-ig-i-lic-bez-grazhdanstva-na-territorii-kyrgyzskoj-respubliki-ot-19.12.2016-goda-68.pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation10'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/ob-utverzhdenii-normativnyh-pravovyh-aktov-regulirujushhih-dejatelnost-obrazovatelnyh-organizacij-vysshego-i-srednego-professionalnogo-obrazovanija-kyrgyzskoj-respubliki.pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation11'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/ob-itogovoj-gosudarstvennoj-attestacii-vypusknikov-vysshih-uchebnyh-zavedenij-kyrgyzskoj-respubliki.pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation12'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-fakultete-vysshego-uchebnogo-zavedenija-kyrgyzskoj-respubliki.pdf'
    },
    {
      title: t('lawsRegulations.regulations.regulation13'),
      url: 'https://salymbekov.com/wp-content/uploads/2023/02/o-strukturnom-podrazdelenii-vysshego-i-srednego-professionalnogo-uchebnogo-zavedenija-realizujushhem-programmy-dopolnitelnogo-professionalnogo-obrazovanija.pdf'
    }
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
            {t('lawsRegulations.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Laws Section */}
          <div className="mb-12">
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('lawsRegulations.intro')}
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t('lawsRegulations.laws.title')}
            </h2>
            
            <div className="space-y-3">
              {laws.map((law, index) => (
                <a
                  key={index}
                  href={law.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{law.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Regulations Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('lawsRegulations.regulations.mainTitle')}
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('lawsRegulations.regulations.intro')}
            </p>
            
            <div className="space-y-3">
              {regulations.map((regulation, index) => (
                <a
                  key={index}
                  href={regulation.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{regulation.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LawsRegulationsPage;