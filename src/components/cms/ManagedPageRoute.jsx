import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContent } from '../../hooks/usePageContent';

// CMS "raw_html" bodies are static snapshots of the React pages captured while
// framer-motion's enter animations were at their `initial` state. That bakes
// hiding styles (opacity:0, scale(0), translateY offsets) into the HTML with no
// JS to animate them back, so the content stays permanently invisible. Reset
// those baked animation styles to their visible/final values before rendering.
const neutralizeBakedAnimations = (html) =>
  (html || '')
    .replace(/opacity:\s*0(?![.\d])/g, 'opacity:1')
    .replace(/scale\(\s*0(?:\.\d+)?\s*\)/g, 'scale(1)')
    .replace(/translate([XYZ]?)\(\s*-?\d+(?:\.\d+)?px\s*\)/g, 'translate$1(0px)');

const hasMeaningfulCmsContent = (pageContent) => {
  if (!pageContent) {
    return false;
  }

  if (pageContent.data?.force_backend_render) {
    return true;
  }

  return Boolean(
    pageContent.title ||
    pageContent.subtitle ||
    pageContent.body ||
    pageContent.media?.length ||
    pageContent.data?.sections?.length ||
    pageContent.data?.cards?.length ||
    pageContent.data?.stats?.length ||
    pageContent.data?.links?.length ||
    pageContent.data?.documents?.length
  );
};

const renderRichText = (html, className = '') => {
  if (!html) {
    return null;
  }

  return (
    <div
      className={`prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 ${className}`}
      dangerouslySetInnerHTML={{ __html: neutralizeBakedAnimations(html) }}
    />
  );
};

const CmsPageRenderer = ({ pageContent }) => {
  const data = pageContent?.data || {};
  const renderMode = data.render_mode || 'default';
  const heroImage = data.hero_image || pageContent?.media?.[0]?.url || null;
  const sections = Array.isArray(data.sections) ? data.sections : [];
  const cards = Array.isArray(data.cards) ? data.cards : [];
  const stats = Array.isArray(data.stats) ? data.stats : [];
  const links = Array.isArray(data.links) ? data.links : [];
  const documents = Array.isArray(data.documents) ? data.documents : [];
  const gallery = pageContent?.media?.filter((item) => item.media_type === 'image') || [];

  if (renderMode === 'raw_html') {
    return (
      <div className="min-h-screen bg-slate-50">
        <div
          className="[&_img]:h-auto [&_img]:max-w-full [&_a]:break-words"
          dangerouslySetInnerHTML={{ __html: neutralizeBakedAnimations(pageContent?.body) }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#023E8A] via-[#0353A4] to-[#0077B6] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8 lg:py-24">
          <div>
            {data.badge ? (
              <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em]">
                {data.badge}
              </span>
            ) : null}
            {pageContent?.title ? (
              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {pageContent.title}
              </h1>
            ) : null}
            {pageContent?.subtitle ? (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">
                {pageContent.subtitle}
              </p>
            ) : null}
          </div>
          {heroImage ? (
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl">
              <img src={heroImage} alt={pageContent?.title || 'Page hero'} className="h-full w-full object-cover" />
            </div>
          ) : null}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {pageContent?.body ? (
          <section className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200/80 sm:p-10">
            {renderRichText(pageContent.body)}
          </section>
        ) : null}

        {stats.length > 0 ? (
          <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <div key={`${item.label || 'stat'}-${index}`} className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200/70">
                <div className="text-3xl font-bold text-[#023E8A]">{item.value}</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500">{item.label}</div>
                {item.description ? <p className="mt-3 text-sm text-slate-600">{item.description}</p> : null}
              </div>
            ))}
          </section>
        ) : null}

        {sections.length > 0 ? (
          <section className="mt-10 space-y-8">
            {sections.map((section, index) => (
              <article key={`${section.title || 'section'}-${index}`} className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200/80 sm:p-10">
                {section.title ? <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2> : null}
                {section.subtitle ? <p className="mt-3 text-lg text-slate-600">{section.subtitle}</p> : null}
                {section.body ? renderRichText(section.body, 'mt-6') : null}
              </article>
            ))}
          </section>
        ) : null}

        {cards.length > 0 ? (
          <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card, index) => (
              <article key={`${card.title || 'card'}-${index}`} className="rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-slate-200/70">
                {card.title ? <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3> : null}
                {card.text ? <p className="mt-4 leading-7 text-slate-700">{card.text}</p> : null}
              </article>
            ))}
          </section>
        ) : null}

        {documents.length > 0 || links.length > 0 ? (
          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            {documents.length > 0 ? (
              <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200/80">
                <h2 className="text-2xl font-bold text-slate-900">Documents</h2>
                <div className="mt-6 space-y-4">
                  {documents.map((item, index) => (
                    <a
                      key={`${item.title || 'doc'}-${index}`}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-2xl border border-slate-200 px-5 py-4 text-slate-700 transition hover:border-[#0077B6] hover:bg-slate-50"
                    >
                      {item.title || item.url}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            {links.length > 0 ? (
              <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200/80">
                <h2 className="text-2xl font-bold text-slate-900">Useful links</h2>
                <div className="mt-6 space-y-4">
                  {links.map((item, index) => (
                    <a
                      key={`${item.title || 'link'}-${index}`}
                      href={item.url}
                      target={item.external === false ? '_self' : '_blank'}
                      rel="noreferrer"
                      className="block rounded-2xl border border-slate-200 px-5 py-4 text-slate-700 transition hover:border-[#0077B6] hover:bg-slate-50"
                    >
                      {item.title || item.url}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ) : null}

        {gallery.length > 1 ? (
          <section className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {gallery.map((item) => (
                <figure key={item.id} className="overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-slate-200/70">
                  <img src={item.url} alt={item.title || pageContent?.title || 'Page media'} className="h-72 w-full object-cover" />
                  {item.title ? <figcaption className="px-5 py-4 text-sm text-slate-600">{item.title}</figcaption> : null}
                </figure>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

const ManagedPageRoute = ({ path, fallback }) => {
  const { i18n } = useTranslation();
  const { data, isLoading, isError } = usePageContent(path, i18n.language);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="rounded-2xl bg-white px-6 py-4 text-slate-600 shadow-lg ring-1 ring-slate-200/70">
          Loading content...
        </div>
      </div>
    );
  }

  if (!isError && hasMeaningfulCmsContent(data)) {
    return <CmsPageRenderer pageContent={data} />;
  }

  if (!fallback) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-xl rounded-3xl bg-white px-8 py-6 text-center text-slate-600 shadow-lg ring-1 ring-slate-200/70">
          Content is temporarily unavailable.
        </div>
      </div>
    );
  }

  return fallback;
};

export default ManagedPageRoute;
