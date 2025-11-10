import { Button } from "@/components/ui/button";
import rewardsCard from "@/assets/rewards-card.jpg";

const RewardsSection = () => {
  return (
    <section 
      className="relative py-36 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${rewardsCard})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/95 via-navy/85 to-dark-navy/95" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-6xl md:text-7xl font-light text-white mb-8 tracking-widest animate-fade-in drop-shadow-2xl">
            REWARDS
          </h2>
          <p className="text-2xl text-white/95 mb-10 leading-relaxed animate-slide-up">
            Loyalty program that allows you to earn points on parking reservations. Earn rewards with every visit and unlock exclusive benefits.
          </p>
          <Button 
            size="lg"
            className="bg-white text-navy hover:bg-white/90 hover:scale-105 transition-all duration-300 px-12 py-6 text-lg font-semibold tracking-wider shadow-2xl"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
