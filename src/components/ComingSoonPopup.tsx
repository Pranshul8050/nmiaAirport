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
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] animate-in fade-in duration-300" />

      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
        <div className="bg-gradient-to-br from-white via-blue-50 to-amber-50 rounded-3xl shadow-2xl max-w-2xl w-full transform animate-in zoom-in-95 slide-in-from-bottom-4 duration-500 overflow-hidden border-4 border-amber-400">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 transition-colors z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-2xl animate-pulse delay-75" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-amber-300/10 rounded-full blur-3xl animate-pulse delay-150" />
          </div>

          {/* Content */}
          <div className="relative p-12 text-center">
            {/* Icon with animation */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-r from-[#003366] to-[#0077B6] text-white w-24 h-24 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <Sparkles className="w-12 h-12" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#003366] via-[#0077B6] to-amber-600 bg-clip-text text-transparent mb-4 animate-in slide-in-from-bottom-2 duration-700">
              Exciting News!
            </h2>

            {/* Subtitle */}
            <div className="mb-6 animate-in slide-in-from-bottom-3 duration-700 delay-100">
              <p className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                NMIA is Coming Soon! 🎉
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Navi Mumbai International Airport is preparing to take flight!
              </p>
            </div>

            {/* Description */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg animate-in slide-in-from-bottom-4 duration-700 delay-200">
              <p className="text-slate-700 leading-relaxed mb-3">
                We're working hard to bring you a world-class airport experience with:
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-left">
                  <span className="text-amber-500">✈️</span>
                  <span>Modern Terminals</span>
                </div>
                <div className="flex items-center gap-2 text-left">
                  <span className="text-blue-500">🌟</span>
                  <span>Premium Services</span>
                </div>
                <div className="flex items-center gap-2 text-left">
                  <span className="text-green-500">🌱</span>
                  <span>Eco-Friendly Design</span>
                </div>
                <div className="flex items-center gap-2 text-left">
                  <span className="text-purple-500">🚀</span>
                  <span>Smart Technology</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleClose}
              size="lg"
              className="bg-gradient-to-r from-[#003366] to-[#0077B6] hover:from-[#004080] hover:to-[#0088CC] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-5 duration-700 delay-300"
            >
              Explore Preview Site
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>

            {/* Footer note */}
            <p className="text-xs text-slate-500 mt-6 animate-in fade-in duration-700 delay-500">
              Stay tuned for our official launch date announcement!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPopup;
