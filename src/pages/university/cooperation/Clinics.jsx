
import { useTranslation } from 'react-i18next';

const ClinicCooperationPage = () => {
  const { t } = useTranslation();

  const stateClinics = [
    { title: t('clinicCooperation.stateClinics.clinic1'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-soklukskaja-tb.pdf' },
    { title: t('clinicCooperation.stateClinics.clinic2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-ncomid.pdf' },
    { title: t('clinicCooperation.stateClinics.clinic3'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-ncoig-2.pdf' },
    { title: t('clinicCooperation.stateClinics.clinic4'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/sudmedjekspert.pdf' },
    { title: t('clinicCooperation.stateClinics.clinic5'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/patologo-anatomicheskoe-bjuro.pdf' },
    { title: t('clinicCooperation.stateClinics.clinic6'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-na-okazanie-diagn.-lab.-uslug.pdf' },
    { title: t('clinicCooperation.stateClinics.clinic7'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/institut-biologii-i-nan-kr.pdf' }
  ];

  const privateClinics = [
    { title: t('clinicCooperation.privateClinics.clinic1'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/6.1.13.-soglashenie-o-sotrudnichestve-s-osoo-jeos-pljus.pdf' },
    { title: t('clinicCooperation.privateClinics.clinic2'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/6.1.11.-soglashenie-o-sotrudnichestve-s-lcd-andromed-doc.pdf' },
    { title: t('clinicCooperation.privateClinics.clinic3'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-klinika-asymbekovoi.pdf' },
    { title: t('clinicCooperation.privateClinics.clinic4'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/6.1.12.-soglashenie-o-sotrudnichestve-s-azija-med-karkyra-med.pdf' },
    { title: t('clinicCooperation.privateClinics.clinic5'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-kjeir-grupp.pdf' },
    { title: t('clinicCooperation.privateClinics.clinic6'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/6.1.14.-soglashenie-o-sotrudnichestve-s-osoo-jeos-med.pdf' }
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
            {t('clinicCooperation.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Intro Text Section */}
          <div className="mb-12">
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              {t('clinicCooperation.intro')}
            </p>
          </div>

          {/* State Clinics Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('clinicCooperation.stateClinics.title')}
            </h2>
            
            <div className="space-y-3">
              {stateClinics.map((clinic, index) => (
                <a
                  key={index}
                  href={clinic.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{clinic.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Private Clinics Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('clinicCooperation.privateClinics.title')}
            </h2>
            
            <div className="space-y-3">
              {privateClinics.map((clinic, index) => (
                <a
                  key={index}
                  href={clinic.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{clinic.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClinicCooperationPage;