import { useTranslation } from 'react-i18next';
import React from 'react';

const DevelopmentCouncilPage = () => {
  const { t } = useTranslation();

  const councilMembers = [
    {
      name: t('developmentCouncil.member1Name'),
      image: "https://salymbekov.com/wp-content/uploads/2021/03/jeshmambetov-azisbek-jeshmambetovich.jpg",
      text: t('developmentCouncil.member1Text')
    },
    {
      name: t('developmentCouncil.member2Name'),
      image: "https://salymbekov.com/wp-content/uploads/2021/05/whatsapp-image-2021-04-29-at-14.30.42.jpeg",
      text: t('developmentCouncil.member2Text')
    },
    {
      name: t('developmentCouncil.member3Name'),
      image: "https://salymbekov.com/wp-content/uploads/2022/10/amiya-bhaumik-258x300.png",
      text: t('developmentCouncil.member3Text')
    },
    {
      name: t('developmentCouncil.member4Name'),
      image: "https://salymbekov.com/wp-content/uploads/2022/10/qip-shot-screen-010-288x300.png",
      text: t('developmentCouncil.member4Text')
    },
    {
      name: t('developmentCouncil.member5Name'),
      image: "https://salymbekov.com/wp-content/uploads/2022/05/hideo-shinagawa.jpg",
      text: t('developmentCouncil.member5Text')
    },
    {
      name: t('developmentCouncil.member6Name'),
      image: "https://salymbekov.com/wp-content/uploads/2022/05/rysbek-aldagandaevich.jpg",
      text: t('developmentCouncil.member6Text')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://salymbekov.com/wp-content/uploads/2021/03/sovet-po-razvitiju-1.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {t('developmentCouncil.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {t('developmentCouncil.mainTitle')}
          </h2>
          
          {/* First Paragraph */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t('developmentCouncil.firstParagraph')}
          </p>

          {/* Chairman Section */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {t('developmentCouncil.chairmanTitle')}
          </h3>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <img 
                src="https://salymbekov.com/wp-content/uploads/2021/02/salymbekov-askar-maatkabylovich-main.jpg" 
                alt={t('developmentCouncil.chairmanName')}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t('developmentCouncil.chairmanText1')}
                <a 
                  href="https://fpi.kg/?lang=ru" 
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('developmentCouncil.foundationName')}
                </a>
                {t('developmentCouncil.chairmanText2')}
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t('developmentCouncil.chairmanText3')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('developmentCouncil.chairmanText4')}
              </p>
            </div>
          </div>

          {/* Council Composition */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {t('developmentCouncil.compositionTitle')}
          </h3>

          {/* First Council Member (original) */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <img 
                src="https://salymbekov.com/wp-content/uploads/2021/03/batyraliev-talant.jpg" 
                alt={t('developmentCouncil.memberName')}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t('developmentCouncil.memberText1')}
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t('developmentCouncil.memberText2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('developmentCouncil.memberText3')}
              </p>
            </div>
          </div>

          {/* Additional Council Members */}
          {councilMembers.map((member, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/3">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {member.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DevelopmentCouncilPage;