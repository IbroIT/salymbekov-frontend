
import { useTranslation } from 'react-i18next';

const QualityPolicyPage = () => {
  const { t } = useTranslation();

  const qualityDocuments = [
    { title: t('qualityPolicy.documents.document1'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-smk-su_new.pdf' },
    { title: t('qualityPolicy.documents.document2'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/rukovodstvo-po-kachestvu-obrazovanija-2-versija.pdf' },
    { title: t('qualityPolicy.documents.document3'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/karta-processov-smk1.pdf' },
    { title: t('qualityPolicy.documents.document4'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/reestr-processov-smk.pdf' },
    { title: t('qualityPolicy.documents.document5'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/funkcionalnaja-matrica-processov-su.pdf' },
    { title: t('qualityPolicy.documents.document6'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/matrica-raspredelenija-otvetstvennosti-su.pdf' },
    { title: t('qualityPolicy.documents.document7'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/grafik-dokumentooborota-su.pdf' },
    { title: t('qualityPolicy.documents.document8'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-o-monitoringe-udovletvorennosti-stejkholderov.pdf' },
    { title: t('qualityPolicy.documents.document9'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-o-dokumentooborote.pdf' },
    { title: t('qualityPolicy.documents.document10'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/instrukcija-po-deloproizvodstvu.pdf' },
    { title: t('qualityPolicy.documents.document11'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-o-vzaimodejstvii-sp-so-stejkholderami.pdf' },
    { title: t('qualityPolicy.documents.document12'), url: 'https://salymbekov.com/wp-content/uploads/2025/11/akademicheskij_kalendar_na_2025_2026_uchebnyj_god_.pdf' }
  ];

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-4 leading-relaxed">
            <strong>{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-4 leading-relaxed">
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
        style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2021/03/sotrudniki.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('qualityPolicy.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Policy Text Section */}
          <div className="mb-12">
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed text-lg">
                {t('qualityPolicy.intro')}
              </p>
              
              <div className="text-gray-700">
                {formatTextWithBold(t('qualityPolicy.mainText'))}
              </div>
            </div>
          </div>

          {/* Quality Management System Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('qualityPolicy.documents.title')}
            </h2>
            
            <div className="space-y-3">
              {qualityDocuments.map((document, index) => (
                <a
                  key={index}
                  href={document.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{document.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPolicyPage;