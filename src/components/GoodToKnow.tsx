import { ArrowRight, HelpCircle, PawPrint, Shield, Wifi } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Security Checks',
    description: 'What to expect.',
    details: 'Streamlined security procedures designed for your safety and convenience',
    link: '#'
  },
  {
    icon: Wifi,
    title: 'Free WiFi',
    description: 'Stay connected on your travel',
    details: 'High-speed complimentary internet access throughout all terminals',
    link: '#'
  },
  {
    icon: HelpCircle,
    title: 'Frequently Asked Questions?',
    description: 'Did you know we have an FAQ section?',
    details: 'Find answers to common queries about flights, services, and facilities',
    link: '#'
  },
  {
    icon: PawPrint,
    title: 'Traveling with a Pet?',
    description: 'Learn more about airport pet accommodations...',
    details: 'Comprehensive pet travel services and dedicated accommodation areas',
    link: '#'
  }
];

const GoodToKnow = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(51, 65, 85) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-600 uppercase">
              Essential Information
            </span>
            <div className="h-px w-full bg-gradient-to-r from-amber-500 to-transparent mt-2"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight leading-tight">
            Good to Know
          </h2>
          <p className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
            We've compiled essential information to ensure your journey through NMIA is seamless and
            stress-free
          </p>
        </div>

        {/* Information cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative bg-white rounded-lg p-8 border border-slate-100 hover:border-amber-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-amber-500 to-amber-600 group-hover:h-full transition-all duration-500 rounded-tl-lg"></div>

              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-14 h-14 rounded-full bg-slate-50 group-hover:bg-amber-50 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <item.icon
                    className="h-7 w-7 text-slate-600 group-hover:text-amber-600 transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-amber-700 transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{item.details}</p>
              </div>

              {/* Arrow indicator */}
              <div className="mt-6 flex items-center text-slate-400 group-hover:text-amber-600 transition-all duration-300">
                <span className="text-xs font-medium tracking-wide uppercase mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                </span>
                <ArrowRight
                  className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                  strokeWidth={2}
                />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoodToKnow;
