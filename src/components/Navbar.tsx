import { Button } from '@/components/ui/button';
import { Globe, HelpCircle, Menu, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NMIALogo from './NMIALogo';
import WeatherWidget from './WeatherWidget';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation - Professional with gradient backdrop and glass morphism */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-slate-200/50'
            : 'bg-gradient-to-r from-slate-50/90 via-white/95 to-sky-50/90 backdrop-blur-md shadow-lg'
        }`}
      >
        {/* Decorative top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003366] via-[#0077B6] to-[#003366] opacity-80"></div>

        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with enhanced styling */}
            <div className="flex items-center gap-3 group flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 relative">
                {/* Glowing ring effect on logo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#003366] to-[#0077B6] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                  <NMIALogo className="w-12 h-12 lg:w-14 lg:h-14" showText={false} />
                </div>
                <div className="leading-tight">
                  <h1 className="text-[16px] lg:text-[20px] font-bold text-[#003366] tracking-tight group-hover:text-[#0077B6] transition-all duration-300 whitespace-nowrap">
                    NMIA Airport
                  </h1>
                  <p className="text-[9px] lg:text-[11px] text-slate-600 font-medium tracking-wide group-hover:text-[#004d99] transition-colors duration-300 whitespace-nowrap hidden sm:block">
                    Mumbai International
                  </p>
                </div>
              </Link>
            </div>

            {/* Center navigation - Enhanced typography with multiple font weights */}
            <div className="hidden lg:flex flex-1 justify-center px-4">
              <ul className="flex items-center gap-0.5 xl:gap-1">
                <li className="group relative">
                  <Link
                    to="/flight"
                    className="relative px-3 xl:px-5 py-3 text-[14px] xl:text-[15px] font-semibold text-slate-700 hover:text-[#003366] transition-all duration-300 flex flex-col items-center"
                  >
                    <span className="tracking-wide">Flight</span>
                    <span className="text-[10px] xl:text-[11px] text-slate-500 font-normal tracking-wider uppercase">
                      Information
                    </span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#003366] to-[#0077B6] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li className="group relative">
                  <Link
                    to="/travel"
                    className="relative px-3 xl:px-5 py-3 text-[14px] xl:text-[15px] font-semibold text-slate-700 hover:text-[#003366] transition-all duration-300 flex flex-col items-center"
                  >
                    <span className="tracking-wide">Travel</span>
                    <span className="text-[10px] xl:text-[11px] text-slate-500 font-normal tracking-wider uppercase">
                      Information
                    </span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#003366] to-[#0077B6] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li className="group relative">
                  <Link
                    to="/parking"
                    className="relative px-3 xl:px-5 py-3 text-[14px] xl:text-[15px] font-semibold text-slate-700 hover:text-[#003366] transition-all duration-300 flex flex-col items-center"
                  >
                    <span className="tracking-wide">Parking</span>
                    <span className="text-[10px] xl:text-[11px] text-slate-500 font-normal tracking-wider uppercase">
                      Transport
                    </span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#003366] to-[#0077B6] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li className="group relative">
                  <Link
                    to="/shopping"
                    className="relative px-3 xl:px-5 py-3 text-[14px] xl:text-[15px] font-semibold text-slate-700 hover:text-[#003366] transition-all duration-300 flex flex-col items-center"
                  >
                    <span className="tracking-wide">Shopping</span>
                    <span className="text-[10px] xl:text-[11px] text-slate-500 font-normal tracking-wider uppercase">
                      Dining
                    </span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#003366] to-[#0077B6] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li className="group relative">
                  <Link
                    to="/customer-service"
                    className="relative px-3 xl:px-5 py-3 text-[14px] xl:text-[15px] font-semibold text-slate-700 hover:text-[#003366] transition-all duration-300 flex flex-col items-center"
                  >
                    <span className="tracking-wide">Customer</span>
                    <span className="text-[10px] xl:text-[11px] text-slate-500 font-normal tracking-wider uppercase">
                      Service
                    </span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#003366] to-[#0077B6] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                {/* Mega menu with stunning animations */}
                <li className="group relative">
                  <Link
                    to="/about"
                    className="relative px-3 xl:px-5 py-3 text-[14px] xl:text-[15px] font-semibold text-slate-700 hover:text-[#003366] transition-all duration-300 flex flex-col items-center"
                  >
                    <span className="tracking-wide">About</span>
                    <span className="text-[10px] xl:text-[11px] text-slate-500 font-normal tracking-wider uppercase">
                      Airport
                    </span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#003366] to-[#0077B6] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li className="group relative">
                  <Link
                    to="/contact"
                    className="relative px-3 xl:px-5 py-3 text-[14px] xl:text-[15px] font-semibold text-slate-700 hover:text-[#003366] transition-all duration-300 flex flex-col items-center"
                  >
                    <span className="tracking-wide">Contact</span>
                    <span className="text-[10px] xl:text-[11px] text-slate-500 font-normal tracking-wider uppercase">
                      Us
                    </span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#003366] to-[#0077B6] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right icons with enhanced styling */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Weather Widget */}
              <div className="hidden xl:block">
                <WeatherWidget />
              </div>

              <div className="hidden lg:flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-slate-100 hover:text-[#0077B6] transition-all duration-300 hover:scale-110"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-slate-100 hover:text-[#0077B6] transition-all duration-300 hover:scale-110"
                >
                  <HelpCircle className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-slate-100 hover:text-[#0077B6] transition-all duration-300 hover:scale-110"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile hamburger menu with animation */}
              <div className="lg:hidden">
                <button
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle menu"
                  className="p-2.5 rounded-lg hover:bg-slate-100 transition-all duration-300 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#0077B6] rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  {open ? (
                    <X className="h-6 w-6 relative z-10" />
                  ) : (
                    <Menu className="h-6 w-6 relative z-10" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated bottom shadow on scroll */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
      </nav>

      {/* Mobile menu with stunning animations and backdrop blur */}
      <div className={`${open ? 'fixed' : 'hidden'} inset-0 z-50 lg:hidden`}>
        {/* Backdrop with blur */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/50 to-slate-900/60 backdrop-blur-md"
          onClick={() => setOpen(false)}
        ></div>

        {/* Sliding menu panel */}
        <div
          className={`absolute right-0 top-0 w-3/4 max-w-sm h-full bg-white shadow-2xl overflow-auto transition-transform duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Decorative gradient top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003366] via-[#0077B6] to-[#003366]"></div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <NMIALogo className="w-12 h-12" showText={false} />
                <div>
                  <div className="font-bold text-[#003366]">NMIA Airport</div>
                  <div className="text-xs text-slate-500 tracking-wide">
                    Navi Mumbai International Airport
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Weather Widget for mobile */}
            <div className="mb-6 flex justify-center">
              <WeatherWidget />
            </div>

            <nav className="space-y-1">
              <Link
                to="/flight"
                className="block py-3.5 px-4 font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-[#003366]/5 hover:to-[#0077B6]/5 hover:text-[#003366] rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-[#0077B6]"
                onClick={() => setOpen(false)}
              >
                Flight Information
              </Link>
              <Link
                to="/travel"
                className="block py-3.5 px-4 font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-[#003366]/5 hover:to-[#0077B6]/5 hover:text-[#003366] rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-[#0077B6]"
                onClick={() => setOpen(false)}
              >
                Travel Information
              </Link>
              <Link
                to="/parking"
                className="block py-3.5 px-4 font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-[#003366]/5 hover:to-[#0077B6]/5 hover:text-[#003366] rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-[#0077B6]"
                onClick={() => setOpen(false)}
              >
                Parking & Transportation
              </Link>
              <Link
                to="/shopping"
                className="block py-3.5 px-4 font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-[#003366]/5 hover:to-[#0077B6]/5 hover:text-[#003366] rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-[#0077B6]"
                onClick={() => setOpen(false)}
              >
                Shopping & Dining
              </Link>
              <Link
                to="/customer-service"
                className="block py-3.5 px-4 font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-[#003366]/5 hover:to-[#0077B6]/5 hover:text-[#003366] rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-[#0077B6]"
                onClick={() => setOpen(false)}
              >
                Customer Service
              </Link>
              <Link
                to="/about"
                className="block py-3.5 px-4 font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-[#003366]/5 hover:to-[#0077B6]/5 hover:text-[#003366] rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-[#0077B6]"
                onClick={() => setOpen(false)}
              >
                About the Airport
              </Link>
              <Link
                to="/contact"
                className="block py-3.5 px-4 font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-[#003366]/5 hover:to-[#0077B6]/5 hover:text-[#003366] rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-[#0077B6]"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
      {/* end header */}
    </>
  );
};

export default Navbar;
