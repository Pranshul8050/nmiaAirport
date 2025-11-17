import EnhanceExperience from '@/components/EnhanceExperience';
import Footer from '@/components/Footer';
import GoodToKnow from '@/components/GoodToKnow';
import HeroCarousel from '@/components/HeroCarousel';
import Navbar from '@/components/Navbar';
import NewsSection from '@/components/NewsSection';
import ParkingAvailability from '@/components/ParkingAvailability';
import QuickActions from '@/components/QuickActions';
import ShopDine from '@/components/ShopDine';

const Index = () => {
  return (
    <div className="min-h-screen pt-24">
      <Navbar />
      <HeroCarousel />
      <QuickActions />
      <ParkingAvailability />
      <NewsSection />
      <ShopDine />
      <EnhanceExperience />
      <GoodToKnow />
      <Footer />
    </div>
  );
};

export default Index;
