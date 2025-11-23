
import { useTranslation } from 'react-i18next';

const UniversityCooperationPage = () => {
  const { t } = useTranslation();

  const memorandums = [
    { title: t('universityCooperation.memorandums.memorandum1'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/moi-bn-itc-and-salymbekov-1.pdf' },
    { title: t('universityCooperation.memorandums.memorandum2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/inha.pdf' },
    { title: t('universityCooperation.memorandums.memorandum3'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/dogovor-o-sotrudnichestve.pdf' },
    { title: t('universityCooperation.memorandums.memorandum4'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/institutom-biologii-nan-kr.pdf' },
    { title: t('universityCooperation.memorandums.memorandum5'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/urgenchskij-filial-tashkentskoj-medicinskoj-akademija.pdf' },
    { title: t('universityCooperation.memorandums.memorandum6'), url: 'https://www.instagram.com/p/COCO6E5qrCH/' },
    { title: t('universityCooperation.memorandums.memorandum7'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/international-contemporary-medical-academy-of-science.pdf' },
    { title: t('universityCooperation.memorandums.memorandum8'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/zhalal-abadskij-gosudarstvennyj-universitet.pdf' },
    { title: t('universityCooperation.memorandums.memorandum9'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/evropejskij-medicinskij-universitet.pdf' },
    { title: t('universityCooperation.memorandums.memorandum10'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/trehstornnij-memorandum-s-moin-kr.pdf' },
    { title: t('universityCooperation.memorandums.memorandum11'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/memorandum-s-lincoln-college-malasya.pdf' },
    { title: t('universityCooperation.memorandums.memorandum12'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/kfu.pdf' },
    { title: t('universityCooperation.memorandums.memorandum13'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/kazanskij-kooperativnyj-institut.pdf' },
    { title: t('universityCooperation.memorandums.memorandum14'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/kgmipipk-im.-s.-b.-danijarrva.pdf' },
    { title: t('universityCooperation.memorandums.memorandum15'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/istinye.pdf' },
    { title: t('universityCooperation.memorandums.memorandum16'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/itm-university-gwalior-india.pdf' },
    { title: t('universityCooperation.memorandums.memorandum17'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/universitet-akfa.pdf' },
    { title: t('universityCooperation.memorandums.memorandum18'), url: 'https://salymbekov.com/wp-content/uploads/2023/02/universitet-adam.pdf' }
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
            {t('universityCooperation.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Intro Text Section */}
          <div className="mb-12">
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              {t('universityCooperation.intro')}
            </p>
          </div>

          {/* Memorandums Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('universityCooperation.memorandums.title')}
            </h2>
            
            <div className="space-y-3">
              {memorandums.map((memorandum, index) => (
                <a
                  key={index}
                  href={memorandum.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">
                    {index + 1}. {memorandum.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniversityCooperationPage;