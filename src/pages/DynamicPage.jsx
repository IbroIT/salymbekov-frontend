import React from 'react';

const normalizeItems = (value) => (Array.isArray(value) ? value : []);

const mediaUrl = (item) => item?.url || item?.src || item?.image || '';

const DynamicMedia = ({ item, className = '' }) => {
  const url = mediaUrl(item);
  if (!url) return null;

  if (item.media_type === 'video' || item.type === 'video') {
    return (
      <video controls className={`w-full rounded-lg bg-black ${className}`}>
        <source src={url} />
      </video>
    );
  }

  return (
    <img
      src={url}
      alt={item.title || item.alt || ''}
      className={`w-full rounded-lg object-cover ${className}`}
    />
  );
};

const DynamicSection = ({ section }) => {
  const type = section.type || 'text';

  if (type === 'gallery') {
    const images = normalizeItems(section.items || section.images);
    return (
      <section className="py-8">
        {section.title && <h2 className="mb-6 text-3xl font-bold text-slate-900">{section.title}</h2>}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <DynamicMedia key={item.id || item.url || index} item={item} className="aspect-[4/3]" />
          ))}
        </div>
      </section>
    );
  }

  if (type === 'cards') {
    const cards = normalizeItems(section.items || section.cards);
    return (
      <section className="py-8">
        {section.title && <h2 className="mb-6 text-3xl font-bold text-slate-900">{section.title}</h2>}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <article key={card.id || card.title || index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              {mediaUrl(card) && <DynamicMedia item={card} className="mb-4 aspect-video" />}
              {card.title && <h3 className="mb-3 text-xl font-semibold text-slate-900">{card.title}</h3>}
              {card.text && <p className="text-slate-600">{card.text}</p>}
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (type === 'video') {
    const embedUrl = section.embed_url || (section.youtube_id ? `https://www.youtube.com/embed/${section.youtube_id}` : section.url);
    return (
      <section className="py-8">
        {section.title && <h2 className="mb-6 text-3xl font-bold text-slate-900">{section.title}</h2>}
        {embedUrl && (
          <div className="aspect-video overflow-hidden rounded-lg bg-slate-950">
            <iframe
              src={embedUrl}
              title={section.title || 'Video'}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </section>
    );
  }

  if (type === 'files') {
    const files = normalizeItems(section.items || section.files);
    return (
      <section className="py-8">
        {section.title && <h2 className="mb-6 text-3xl font-bold text-slate-900">{section.title}</h2>}
        <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {files.map((file, index) => (
            <a
              key={file.id || file.url || index}
              href={file.url}
              className="block px-5 py-4 font-medium text-[#023E8A] hover:bg-slate-50"
              target="_blank"
              rel="noreferrer"
            >
              {file.title || file.name || file.url}
            </a>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      {section.title && <h2 className="mb-4 text-3xl font-bold text-slate-900">{section.title}</h2>}
      {section.text && <p className="text-lg leading-8 text-slate-700">{section.text}</p>}
      {section.html && (
        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: section.html }}
        />
      )}
    </section>
  );
};

const DynamicPage = ({ content }) => {
  const sections = normalizeItems(content?.data?.sections);
  const media = normalizeItems(content?.media);
  const hasMainContent = Boolean(content?.body || media.length > 0 || sections.length > 0);
  const emptyMessage = content?.data?.empty_message;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {content?.title && (
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              {content.title}
            </h1>
          )}
          {content?.subtitle && (
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
              {content.subtitle}
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {content?.body && (
          <div
            className="prose prose-slate max-w-none rounded-lg bg-white p-6 shadow-sm"
            dangerouslySetInnerHTML={{ __html: content.body }}
          />
        )}

        {!hasMainContent && emptyMessage && (
          <div className="rounded-lg border border-slate-200 bg-white p-6 text-lg leading-8 text-slate-700 shadow-sm">
            {emptyMessage}
          </div>
        )}

        {media.length > 0 && (
          <section className="py-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {media.map((item, index) => (
                <DynamicMedia key={item.id || index} item={item} className="aspect-[4/3]" />
              ))}
            </div>
          </section>
        )}

        {sections.map((section, index) => (
          <DynamicSection key={section.id || section.title || index} section={section} />
        ))}
      </div>
    </main>
  );
};

export default DynamicPage;
