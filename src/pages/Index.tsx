import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import QuickActions from "@/components/QuickActions";
import ServiceCards from "@/components/ServiceCards";
import EnhanceExperience from "@/components/EnhanceExperience";
import NewsSection from "@/components/NewsSection";
import ShopDine from "@/components/ShopDine";
import RewardsSection from "@/components/RewardsSection";
import GoodToKnow from "@/components/GoodToKnow";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <QuickActions />
      <RewardsSection />
      <NewsSection />
      <ShopDine />
      <ServiceCards />
      <EnhanceExperience />
      <GoodToKnow />
      <Footer />
    </div>
  );
};

export default Index;
