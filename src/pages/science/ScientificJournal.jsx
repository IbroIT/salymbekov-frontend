import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft,
  FaBook,
  FaDownload,
  FaFileAlt,
  FaExternalLinkAlt
} from 'react-icons/fa';

// Импорты PDF файлов
import SravnitelnyAnaliz from '../../assets/science/publications/sravnitelnyj-analiz-predstavlenij-o-professii-bakalavra-sestrinskogo-dela-u-studentov-i-prepodavatelej.pdf';
import Raimkulova from '../../assets/science/publications/raimkulova.pdf';
import Raimkulova2 from '../../assets/science/publications/raimkulova2.pdf';
import SakibaevOshgu from '../../assets/science/publications/sakibaev-oshgu.pdf';
import SakibaevMuscle from '../../assets/science/publications/sakibaev-osobennosti-myshechnogo-komponenta.pdf';
import Somaticheskie from '../../assets/science/publications/somaticheskie-osobennosti-detej-g.-osh.pdf';
import Solovev from '../../assets/science/publications/solovev-sosudisto-tkanevye-otnoshenija.pdf';
import Alekseeva from '../../assets/science/publications/alekseeva.pdf';
import Parazity from '../../assets/science/publications/parazity-i-ih-vlijanie-na-organizm-cheloveka.pdf';
import Fedorova from '../../assets/science/publications/fedorova-iksodovye-kleshhi.pdf';
import Adamdyn from '../../assets/science/publications/adamdyn-fizikalyk-abaly.pdf';
import Ajbalaev from '../../assets/science/publications/ajbalaev-psihologo-pedagogicheskie-problemy.pdf';
import Dinamika from '../../assets/science/publications/dinamika-psihicheskih-kachestv.pdf';
import Akylbekova from '../../assets/science/publications/akylbekova-ospurum-baldardyn.pdf';
import Bijnazarova from '../../assets/science/publications/bijnazarova-teoreticheskoe-obosnovanie-problemy-1.pdf';
import Bolotova from '../../assets/science/publications/bolotova-akyndar-pojezijasy.pdf';
import Moldokmatova from '../../assets/science/publications/moldokmatova.pdf';
import Osmonbaeva from '../../assets/science/publications/osmonbaeva-kriticheskoj-myshlenie.pdf';
import Voprosy from '../../assets/science/publications/voprosy-kompleksnogo-prepodavanija-nacionalnyh-cennostej-dlja-studentov.pdf';
import Tolobekov from '../../assets/science/publications/tolobekov-n.pdf';
import Etnopedagogika from '../../assets/science/publications/jetnopedagogika-v-medicine.pdf';
import Udk from '../../assets/science/publications/udk-378.pdf';
import Vypusk from '../../assets/science/publications/vypusk-1i-vmio-2021g.pdf';

const ScientificJournal = () => {
  const { t } = useTranslation();
  const [activeIssue, setActiveIssue] = useState(1);

  // Возвращает название выпуска, если ключ journal.issues.{n} существует — используем его,
  // иначе делаем fallback: "Выпуск №n" (или соответствующий перевод journal.issue)
  const getIssueTitle = (issue) => {
    const key = `journal.issues.${issue}`;
    const translated = t(key);
    // Если в текущей локали ключ отсутствует — i18next возвращает сам key
    if (!translated || translated === key) {
      return `${t('journal.issue')} №${issue}`;
    }
    return translated;
  };

  const issues = Array.from({ length: 9 }, (_, i) => i + 1);

  // Article data for Issue 1 с ПРЯМЫМИ ССЫЛКАМИ на импортированные файлы
  const issue1Articles = {
    sections: [
      {
        titleKey: "journal.sections.medical",
        articles: [
          {
            title: t('journal.articles.comparativeAnalysis'),
            authors: "Лапик С.В., Матвиенко В.В., Захарчук О.В.",
            file: SravnitelnyAnaliz
          },
          {
            title: t('journal.articles.kyrgyzParasites'),
            authors: "Раимкулов К.М., Мамбет к. Гулина, АкылбековаА.А.",
            file: Raimkulova
          },
          {
            title: t('journal.articles.echinococcosisSituation'),
            authors: "Раимкулов К.М., Тойгомбаева В.С., Куттубаев О.Т., Акылбекова А.А",
            file: Raimkulova2
          },
          {
            title: t('journal.articles.constitutionalFeatures'),
            authors: "Сакибаев К.Ш.",
            file: SakibaevOshgu
          },
          {
            title: t('journal.articles.muscleComponent'),
            authors: "Сакибаев К.Ш., Никитюк Д.Б.",
            file: SakibaevMuscle
          },
          {
            title: t('journal.articles.somatotypologicalCharacteristics'),
            authors: "Саттаров А.Э., Тулекеев Т.М., Джолдошева Г.Т",
            file: Somaticheskie
          },
          {
            title: t('journal.articles.vascularTissueRelations'),
            authors: "Соловьев Г.С., Матвиенко В.В., Соловьева О.Г., Шидин В.А., Шведский М.С., Захарчук О.В.",
            file: Solovev
          },
          {
            title: t('journal.articles.placentalIndicators'),
            authors: "Н.М., Алексеева Н.Т., Тулекеев Т.М., Сакибаев К.Ш.",
            file: Alekseeva
          }
        ]
      },
      {
        titleKey: "journal.sections.biological",
        articles: [
          {
            title: t('journal.articles.parasitesAndHealth'),
            authors: "Сариева Н.А., Солпиева К.Т., Жалилова А.А. П",
            file: Parazity
          },
          {
            title: t('journal.articles.ixodidTicks'),
            authors: "Федорова С.Ж., Жалилова А.А., Сариева Н.А., Солпиева К.Т.",
            file: Fedorova
          }
        ]
      },
      {
        titleKey: "journal.sections.pedagogical",
        articles: [
          {
            title: t('journal.articles.physicalConditionGames'),
            authors: "Абдырасулова Э.К., Акылбекова А.А.",
            file: Adamdyn
          },
          {
            title: t('journal.articles.volleyballProblems'),
            authors: "Айбалаев А.Ж., Бейшекеев Э.М.",
            file: Ajbalaev
          },
          {
            title: t('journal.articles.mentalQualities'),
            authors: "Айбалаев А.Ж., Байжигитов Б.Б.",
            file: Dinamika
          },
          {
            title: t('journal.articles.nationalGamesInfluence'),
            authors: "Акылбекова А.А., Каримова С.Х.",
            file: Akylbekova
          },
          {
            title: t('journal.articles.communicationSkills'),
            authors: "Бийназарова Н.С.",
            file: Bijnazarova
          },
          {
            title: t('journal.articles.poetryTeaching'),
            authors: "Болотова А.Б.",
            file: Bolotova
          },
          {
            title: t('journal.articles.professionalCompetence'),
            authors: "Молдокматова Н.Т.",
            file: Moldokmatova
          },
          {
            title: t('journal.articles.criticalThinking'),
            authors: "Осмонбаева М.Т.",
            file: Osmonbaeva
          },
          {
            title: t('journal.articles.nationalValues'),
            authors: "Токушева Т.С.",
            file: Voprosy
          },
          {
            title: t('journal.articles.morphologyResearch'),
            authors: "Төлөбеков Н.Т.",
            file: Tolobekov
          },
          {
            title: t('journal.articles.ethnopedagogy'),
            authors: "Шабданбаева Ж.",
            file: Etnopedagogika
          },
          {
            title: t('journal.articles.distanceLearning'),
            authors: "Шайылдаева А.К.",
            file: Udk
          }
        ]
      },
      {
        titleKey: "journal.sections.reviews",
        articles: [
          {
            title: t('journal.articles.liverDisease'),
            authors: "Kniazev I.A.",
            file: Vypusk
          },
          {
            title: t('journal.articles.covidLungs'),
            authors: "Мукашев М.Ш., Турганбаев А.Э., Турганбаев Ж.Т., Токтосун у. Б., Ибраимов А.Б.",
            file: Vypusk
          }
        ]
      }
    ],
    fullIssuePdf: Vypusk
  };

  // Безопасное открытие PDF
  const openPdf = (pdfFile) => {
    window.open(pdfFile, '_blank', 'noopener,noreferrer');
  };

  // Функция для скачивания полного выпуска
  const downloadFullIssue = (pdfFile, fileName) => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = fileName || `vestnik-issue-${activeIssue}.pdf`;
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderArticles = (section, sectionIndex) => {
    return (
      <div key={sectionIndex} className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-lg text-[#023E8A] uppercase border-b border-[#023E8A]/20 pb-2 flex-1">
            {t(section.titleKey)}
          </h4>
        </div>
        <div className="space-y-3">
          {section.articles.map((article, articleIndex) => (
            <motion.div
              key={articleIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (articleIndex * 0.05) }}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-[#0077B6]/30 hover:shadow-md transition-all group"
            >
              <p className="text-gray-900 font-medium mb-2 leading-relaxed">{article.title}</p>
              <p className="text-sm text-gray-600 mb-3">{article.authors}</p>
              <button 
                onClick={() => openPdf(article.file)}
                className="text-[#0077B6] hover:text-[#023E8A] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                <FaExternalLinkAlt className="text-xs" />
                {t('journal.openPdf')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('journal.badge')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('journal.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('journal.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Issues Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaBook className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">{t('journal.issuesTitle')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {issues.map((issue) => (
                  <motion.button
                    key={issue}
                    onClick={() => setActiveIssue(issue)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                      activeIssue === issue
                        ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {getIssueTitle(issue)}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Journal Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
                  <FaFileAlt className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t('journal.aboutJournal')}
                </h2>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('journal.description')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('journal.publishes')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-gray-900 font-semibold">
                    {t('journal.directions.medical')}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-gray-900 font-semibold">
                    {t('journal.directions.biological')}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-gray-900 font-semibold">
                    {t('journal.directions.education')}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Active Issue Content */}
            <motion.div
              key={activeIssue}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {getIssueTitle(activeIssue)}
                  </h2>
                  <p className="text-gray-600">
                    {t('journal.title')}
                  </p>
                </div>
                <motion.button
                  onClick={() => downloadFullIssue(issue1Articles.fullIssuePdf, `vestnik-issue-${activeIssue}.pdf`)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow whitespace-nowrap"
                >
                  <FaDownload />
                  {t('journal.downloadPdf')}
                </motion.button>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                {t('journal.articlesList')}
              </h3>

              {activeIssue === 1 ? (
                <div className="space-y-8">
                  {issue1Articles.sections.map((section, index) => renderArticles(section, index))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBook className="text-4xl text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg">
                    {t('journal.comingSoon', { issue: activeIssue })}
                  </p>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ScientificJournal;