import { Button } from "@/components/ui/button";
import rewardsCard from "@/assets/rewards-card.jpg";

const RewardsSection = () => {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${rewardsCard})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/95 via-navy/90 to-dark-navy/95" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wide animate-fade-in">
            PassPark Rewards
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-up">
            Loyalty program that allows you to earn points on parking reservations.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-navy transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
