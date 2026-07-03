import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Youtube } from 'lucide-react';

const VideoSection = () => {
  const { t, i18n } = useTranslation();

  // Debug: проверим текущий язык и переводы
  React.useEffect(() => {
    console.log('VideoSection - Current language:', i18n.language);
    console.log('VideoSection - Title translation:', t('home.video.title'));
    console.log('VideoSection - Available languages:', i18n.languages);
  }, [i18n.language, t]);

  // YouTube video ID из ссылки
  const videoId = 'SdluvCyzd6M';
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-pink-600 mb-6 shadow-lg">
            <Youtube className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Видео контейнер */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
            {/* Градиентная рамка */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 rounded-3xl opacity-20"></div>

            {/* Видео iframe */}
            <div className="relative z-10 p-2">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900">
                <iframe
                  src={embedUrl}
                  title="University Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Декоративные элементы */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>

            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Youtube className="w-4 h-4 text-red-500" />
                {t('home.video.platform', 'YouTube')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;