import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroAirport1 from "@/assets/hero-airport-1.jpg";
import heroAirport2 from "@/assets/hero-airport-2.png";
import heroMumbai3 from "@/assets/hero-mumbai-3.png";

const slides = [
  {
    image: heroAirport1,
    title: "Welcome to Mumbai International Airport",
    subtitle: "Connecting travellers to Mumbai with modern facilities and friendly service.",
    cta: "Explore services",
  },
  {
    image: heroAirport2,
    title: "Fly to your next destination",
    subtitle: "Search, compare and book flights from leading carriers.",
    cta: "Book flights",
  },
  {
    image: heroMumbai3,
    title: "Your journey begins here",
    subtitle: "Enjoy seamless connections and passenger-first services.",
    cta: "Learn more",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[90vh] overflow-hidden bg-navy">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))'}} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-wide drop-shadow-lg" style={{letterSpacing: '0.5px'}}>
              {slide.title}
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-3xl">
              {slide.subtitle}
            </p>
            <button
              className="border border-white text-white bg-transparent px-6 py-3 rounded transition-all duration-300"
              onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.background = '#ffffff'; (e.target as HTMLButtonElement).style.color = '#003f8a'; }}
              onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.background = 'transparent'; (e.target as HTMLButtonElement).style.color = '#ffffff'; }}
            >
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all hover:scale-110"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all hover:scale-110"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-12" : "bg-white/50 w-3 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Overlay boxes at bottom of banner */}
      <div className="absolute left-0 right-0 bottom-0">
        <div className="bg-black/60 text-white flex justify-around items-center py-4 text-lg">
          <div className="px-6">Flight Status</div>
          <div className="px-6">Reserve Parking</div>
          <div className="px-6">Parking Availability</div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
