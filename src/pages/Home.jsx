import Hero from '../components/Home/Hero';
import FounderMessage from './FounderMessage';
import MaterialBaseGallery from './MaterialBaseGallery';
import HomeNews from './university/HomeNewsSection';
import PartnersSection from '../components/Home/PartnersSection';
import VideoSection from '../components/Home/VideoSection';

const Home = ({ isSplashVisible = false }) => {
  return (
    <div className='relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden'>
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Декоративные линии */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#023E8A" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Геометрические формы */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#023E8A] opacity-[0.05] rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#0077B6] opacity-[0.05] rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#00A8E8] opacity-[0.03] rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-[#023E8A] opacity-[0.04] rotate-45 animate-pulse" style={{animationDelay: '4s'}}></div>

        {/* Градиентные оверлеи */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-50/50 to-transparent"></div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10">
        <Hero isSplashVisible={isSplashVisible} />
        <FounderMessage/>
        <HomeNews />
        <PartnersSection />
        <VideoSection />
        <MaterialBaseGallery />
      </div>

      {/* Нижний градиент для плавного перехода */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Home;
