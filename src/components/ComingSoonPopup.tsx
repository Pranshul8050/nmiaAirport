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
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9998] animate-in fade-in duration-300" />

      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
        <div className="bg-black rounded-lg shadow-2xl max-w-xl w-full transform animate-in zoom-in-95 duration-300 overflow-hidden border border-zinc-800">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="relative p-8">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-white mb-2 text-center tracking-tight">
              Coming Soon
            </h2>

            {/* Subtitle */}
            <div className="mb-6 text-center">
              <p className="text-lg text-white mb-1">
                Navi Mumbai International Airport
              </p>
              <p className="text-sm text-zinc-400">
                Preview website - Official launch pending
              </p>
            </div>

            {/* Description */}
            <div className="bg-zinc-900/50 rounded-md p-5 mb-6 border border-zinc-800">
              <p className="text-zinc-300 text-sm mb-4 text-center">
                Advanced infrastructure and services
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-zinc-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                  <span>Modern Terminals</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                  <span>Premium Services</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                  <span>Sustainable Design</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                  <span>Smart Technology</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                onClick={handleClose}
                className="bg-white hover:bg-zinc-100 text-black font-medium px-8 py-2.5 text-sm rounded-md transition-all duration-200"
              >
                Continue to Preview
              </Button>
            </div>

            {/* Footer note */}
            <p className="text-xs text-zinc-600 mt-5 text-center">
              This is a preview demonstration website
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPopup;
