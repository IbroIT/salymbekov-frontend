
import { useTranslation } from 'react-i18next';

const LegalDocumentsPage = () => {
  const { t } = useTranslation();

  const licenses = [
    { title: t('legalDocuments.licenses.license1'), url: 'https://salymbekov.com/ru/licenzii/' },
    { title: t('legalDocuments.licenses.license2'), url: 'https://salymbekov.com/ru/logotip/' }
  ];

  const nationalActs = [
    { title: t('legalDocuments.nationalActs.act1'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-vuze-kr.pdf' },
    { title: t('legalDocuments.nationalActs.act2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-porjadke-zameshhenija-vakantnyh-dolzhnostej-moin-kr.pdf' },
    { title: t('legalDocuments.nationalActs.act3'), url: 'https://salymbekov.com/wp-content/uploads/2021/03/trudovoj-kodeks-kr.doc' }
  ];

  const universityActs = [
    { title: t('legalDocuments.universityActs.act1'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/ustav-salymbekov-universitet.pdf' },
    { title: t('legalDocuments.universityActs.act2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-ob-akademicheskoj-mobilnosti-1.pdf' },
    { title: t('legalDocuments.universityActs.act3'), url: 'https://salymbekov.com/ru/struktura-universiteta/' },
    { title: t('legalDocuments.universityActs.act4'), url: 'https://salymbekov.com/ru/logotip/' },
    { title: t('legalDocuments.universityActs.act5'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-o-finansovo-jekonomicheskom-departamente.pdf' },
    { title: t('legalDocuments.universityActs.act6'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-departamente-razvitija-i-kachestva-obrazovanija-1.pdf' },
    { title: t('legalDocuments.universityActs.act7'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-departamente-upravlenija-delami.pdf' },
    { title: t('legalDocuments.universityActs.act8'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-kafedre-1.pdf' },
    { title: t('legalDocuments.universityActs.act9'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-kuratorstve.pdf' },
    { title: t('legalDocuments.universityActs.act10'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-medicinskom-punkte-2.pdf' },
    { title: t('legalDocuments.universityActs.act11'), url: 'https://salymbekov.com/wp-content/uploads/2021/03/polozhenie-o-mezhdunarodnom-otdele.pdf' },
    { title: t('legalDocuments.universityActs.act12'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-ob-mrso.pdf' }
   
  ];

  const jobInstructions = [
    { title: t('legalDocuments.jobInstructions.instruction1'), url: 'https://salymbekov.com/wp-content/uploads/2022/05/di-rektora.pdf' },
    { title: t('legalDocuments.jobInstructions.instruction2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-prorektora-po-uchebno-vospitatelnoi-rabote.pdf' },
    { title: t('legalDocuments.jobInstructions.instruction3'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/dolzhnostnaja-instrukcija-prorektora-po-vneshnim-svjazjam-i-razvitiju.pdf' },
    { title: t('legalDocuments.jobInstructions.instruction4'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-prorektora-po-gos.jazyku-i-nauki.pdf' },
    { title: t('legalDocuments.jobInstructions.instruction5'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-prorektora-po-klinicheskoi-rabote.pdf' },
    { title: t('legalDocuments.jobInstructions.instruction6'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-rukovoditelja-departamenta-razvitija-i-kachestva-obrazovanija-2.pdf' },
    { title: t('legalDocuments.jobInstructions.instruction7'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-specialista-po-msk-departamenta-razvitija-i-kachestva-obrazovanija.pdf' },
    { title: t('legalDocuments.jobInstructions.instruction8'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-dekana-fakulteta.pdf' },
    { title: t('legalDocuments.jobInstructions.instruction9'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-docenta-kafedry.pdf' },
    { title: t('legalDocuments.jobInstructions.instruction10'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-zav.-umo-1.pdf' },
    { title: t('legalDocuments.jobInstructions.instruction11'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-zavedujushhego-kafedroj.pdf' },
    { title: t('legalDocuments.jobInstructions.instruction12'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/di-specialista-centra-razvitija-karery-uchrezhdenija-su.pdf' }
   
  ];

  const teachers = [
    { title: t('legalDocuments.teachers.teacher1'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/fond-ocenochnyh-sredstv.pdf' },
    { title: t('legalDocuments.teachers.teacher2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/fond-ocenochnyh-soedstv-2.pdf' }
  ];

  const competition = [
    { title: t('legalDocuments.competition.competition1'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/whatsapp-image-2021-04-23-at-15.52.31-3.pdf' },
    { title: t('legalDocuments.competition.competition2'), url: 'https://salymbekov.com/wp-content/uploads/2021/04/whatsapp-image-2021-04-23-at-16.30.51.pdf' }
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
            {t('legalDocuments.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Licenses Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('legalDocuments.licenses.title')}
            </h2>
            <div className="space-y-3">
              {licenses.map((license, index) => (
                <a
                  key={index}
                  href={license.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{license.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* National Acts Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('legalDocuments.nationalActs.title')}
            </h2>
            <div className="space-y-3">
              {nationalActs.map((act, index) => (
                <a
                  key={index}
                  href={act.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{act.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* University Acts Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('legalDocuments.universityActs.title')}
            </h2>
            <div className="space-y-3">
              {universityActs.map((act, index) => (
                <a
                  key={index}
                  href={act.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{act.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Job Instructions Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('legalDocuments.jobInstructions.title')}
            </h2>
            <div className="space-y-3">
              {jobInstructions.map((instruction, index) => (
                <a
                  key={index}
                  href={instruction.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{instruction.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Teachers Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('legalDocuments.teachers.title')}
            </h2>
            <div className="space-y-3">
              {teachers.map((teacher, index) => (
                <a
                  key={index}
                  href={teacher.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{teacher.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Competition Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('legalDocuments.competition.title')}
            </h2>
            <div className="space-y-3">
              {competition.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="block w-full px-4 py-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalDocumentsPage;