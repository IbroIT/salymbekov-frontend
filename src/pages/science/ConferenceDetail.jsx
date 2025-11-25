import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getConferenceById } from '../../data/conferences';

const ConferenceDetail = () => {
  const { id } = useParams();
  const conf = getConferenceById(id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!conf) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Конференция не найдена.</p>
          <Link to="/science/events/conferences" className="text-blue-600 hover:underline">Вернуться к списку</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-72 w-full overflow-hidden bg-black">
        <img
          src={conf.image}
          alt={conf.title}
          className="w-full h-full object-cover object-top opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-xs tracking-wide text-gray-300 uppercase mb-2">{conf.category}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white max-w-4xl leading-snug">{conf.title}</h1>
          {conf.date ? (
            <p className="text-sm text-gray-200 mt-2">{conf.date}</p>
          ) : (
            <p className="text-sm text-orange-400 mt-2">Дата уточняется</p>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <div className="prose prose-sm max-w-none">
              {conf.content ? (
                <div dangerouslySetInnerHTML={{ __html: conf.content }} />
              ) : (
                <p className="text-gray-600">Текст отчёта ещё не добавлен. Заполните поле <code>content</code> в объекте конференции.</p>
              )}
            </div>
            {conf.summary && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded">
                <p className="text-sm text-blue-800"><span className="font-semibold">Кратко:</span> {conf.summary}</p>
              </div>
            )}
            <div className="mt-8">
              <Link to="/science/events/conferences" className="inline-block text-sm px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100">← Все конференции</Link>
            </div>
          </div>
          <aside className="w-full md:w-72 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-semibold mb-3">Галерея</h3>
              {conf.gallery && conf.gallery.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {conf.gallery.map((g,i) => (
                    <img 
                      key={i} 
                      src={g} 
                      alt={`Фото ${i+1}`} 
                      className="rounded object-cover h-24 w-full cursor-pointer hover:opacity-75 transition-opacity" 
                      onClick={() => setSelectedImage(g)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500">Фотографии будут добавлены позже.</p>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Модальное окно для просмотра фото */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 z-10"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Увеличенное фото"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConferenceDetail;