import Hero from '../components/Home/Hero';
import FounderMessage from './FounderMessage';
import MaterialBaseGallery from './MaterialBaseGallery';
import HomeNews from './university/HomeNewsSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <FounderMessage/>
      <HomeNews />
      <MaterialBaseGallery />
    </div>
  );
};

export default Home;
