import { useEffect, useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

const ComingSoonPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenComingSoonPopup');
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        triggerCelebration();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const triggerCelebration = () => {
    // Fire confetti from multiple positions
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Fire from left side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#003366', '#0077B6', '#FFA500', '#FFD700', '#FF6B6B']
      });

      // Fire from right side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#003366', '#0077B6', '#FFA500', '#FFD700', '#FF6B6B']
      });
    }, 250);
  };

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenComingSoonPopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] animate-in fade-in duration-500" />

      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-2xl shadow-2xl max-w-2xl w-full transform animate-in zoom-in-95 slide-in-from-bottom-4 duration-500 overflow-hidden border border-amber-500/30">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10 bg-slate-800/80 hover:bg-slate-700 rounded-full p-2 shadow-lg border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Subtle animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative p-10 md:p-12">
            {/* Icon with subtle animation */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-full blur-xl" />
                <div className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-2xl">
                  <Sparkles className="w-10 h-10" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 animate-in slide-in-from-bottom-2 duration-700 text-center">
              Exciting News!
            </h2>

            {/* Subtitle */}
            <div className="mb-8 animate-in slide-in-from-bottom-3 duration-700 delay-100 text-center">
              <p className="text-xl md:text-2xl font-semibold text-white mb-2">
                NMIA is Coming Soon
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                Navi Mumbai International Airport is preparing to take flight
              </p>
            </div>

            {/* Description */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50 animate-in slide-in-from-bottom-4 duration-700 delay-200">
              <p className="text-slate-300 leading-relaxed mb-4 text-center text-sm">
                World-class airport experience with cutting-edge features:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-200 text-sm">
                  <span className="text-xl">✈️</span>
                  <span>Modern Terminals</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm">
                  <span className="text-xl">⭐</span>
                  <span>Premium Services</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm">
                  <span className="text-xl">🌱</span>
                  <span>Eco-Friendly</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm">
                  <span className="text-xl">🚀</span>
                  <span>Smart Technology</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                onClick={handleClose}
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-10 py-6 text-base rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-5 duration-700 delay-300"
              >
                Explore Preview Site
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Footer note */}
            <p className="text-xs text-slate-500 mt-6 animate-in fade-in duration-700 delay-500 text-center">
              Stay tuned for our official launch announcement
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPopup;
