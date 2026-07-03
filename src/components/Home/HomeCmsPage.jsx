import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContent } from '../../hooks/usePageContent';
import Hero from './Hero';
import PartnersSection from '../Home/PartnersSection';
import VideoSection from '../Home/VideoSection';
import EmbeddedCmsBlock from './EmbeddedCmsBlock';
import HomeFounderSection from './HomeFounderSection';
import HomeNews from '../../pages/university/HomeNewsSection';
import MaterialBaseGallery from '../../pages/MaterialBaseGallery';

const pickLocalized = (value, language, fallback = '') => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return value || fallback;
  }

  const baseLang = `${language || 'ru'}`.toLowerCase().split('-')[0];
  const normalized = baseLang === 'ky' ? 'kg' : baseLang;
  return value[normalized] || value.ru || value.en || value.kg || fallback;
};

const neutralizeBakedAnimations = (html) =>
  (html || '')
    .replace(/opacity:\s*0(?![.\d])/g, 'opacity:1')
    .replace(/scale\(\s*0(?:\.\d+)?\s*\)/g, 'scale(1)')
    .replace(/translate([XYZ]?)\(\s*-?\d+(?:\.\d+)?px\s*\)/g, 'translate$1(0px)');

const HomeCmsPage = ({ fallback, isSplashVisible = false }) => {
  const { i18n } = useTranslation();
  const { data, isLoading, isError } = usePageContent('/', i18n.language, {
    retry: false,
  });

  if (isLoading || isError || !data || data.data?.render_mode !== 'homepage') {
    return fallback;
  }

  const homeData = data.data || {};
  const partners = homeData.partners || {};
  const video = homeData.video || {};
  const founderPagePath = homeData.founder_page_path || '/founderMessege';
  const galleryPagePath = homeData.gallery_page_path || '/MaterialBaseGallery';
  const hasIntro = Boolean(data.title || data.subtitle || data.body);

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden'>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="home-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#023E8A" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#home-grid)" />
          </svg>
        </div>
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#023E8A] opacity-[0.05] rotate-45 animate-spin" style={{animationDuration: '20s'}} />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#0077B6] opacity-[0.05] rotate-12 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#00A8E8] opacity-[0.03] rounded-full animate-bounce" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-[#023E8A] opacity-[0.04] rotate-45 animate-pulse" style={{animationDelay: '4s'}} />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-50/50 to-transparent" />
      </div>

      <div className="relative z-10">
        {homeData.show_hero !== false ? <Hero isSplashVisible={isSplashVisible} /> : null}

        {hasIntro ? (
          <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] bg-white/90 p-8 shadow-xl ring-1 ring-slate-200/70 sm:p-10">
              {data.title ? <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1> : null}
              {data.subtitle ? <p className="mt-4 text-lg text-slate-600">{data.subtitle}</p> : null}
              {data.body ? (
                <div
                  className="prose prose-lg mt-6 max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700"
                  dangerouslySetInnerHTML={{ __html: neutralizeBakedAnimations(data.body) }}
                />
              ) : null}
            </div>
          </section>
        ) : null}

        <HomeFounderSection path={founderPagePath} />
        {homeData.show_news !== false ? <HomeNews /> : null}
        {homeData.show_partners !== false ? (
          <PartnersSection
            badge={pickLocalized(partners.badge, i18n.language)}
            title={pickLocalized(partners.title, i18n.language)}
            subtitle={pickLocalized(partners.subtitle, i18n.language)}
          />
        ) : null}
        {homeData.show_video !== false ? (
          <VideoSection
            videoUrl={homeData.video_url}
            platformLabel={pickLocalized(video.platform_label, i18n.language)}
          />
        ) : null}
        <EmbeddedCmsBlock path={galleryPagePath} fallback={<MaterialBaseGallery />} />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default HomeCmsPage;
