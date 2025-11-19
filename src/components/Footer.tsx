/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowRight, Facebook, Instagram, Plane, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { email }
      });

      if (error) throw error;

      toast({
        title: 'Success!',
        description: "You've been subscribed to our newsletter"
      });

      setEmail('');
    } catch (error: any) {
      console.error('Error subscribing:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to subscribe',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Decorative Airport Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side decorations */}
        <div className="absolute left-0 top-20 opacity-10">
          <Plane className="w-32 h-32 text-amber-500 transform -rotate-45" />
        </div>
        <div className="absolute left-10 bottom-40 opacity-5">
          <Plane className="w-48 h-48 text-blue-400 transform rotate-12" />
        </div>

        {/* Right side decorations */}
        <div className="absolute right-10 top-32 opacity-10">
          <Plane className="w-40 h-40 text-orange-500 transform rotate-45" />
        </div>
        <div className="absolute right-0 bottom-32 opacity-5">
          <Plane className="w-56 h-56 text-cyan-400 transform -rotate-12" />
        </div>

        {/* Dotted pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>

      {/* CTA Section - Centered Hero Banner */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-6 py-24">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-zinc-800/60 via-zinc-900/40 to-black/20 backdrop-blur-sm rounded-3xl border border-zinc-700/50 px-16 py-20 shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 px-4 py-2 rounded-full mb-6">
              <Plane className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Your Gateway to the World
              </span>
            </div>
            <h2 className="text-[52px] leading-[1.15] font-normal text-white mb-4">
              Experience Seamless Travel.
              <br />
              Fly With NMIA!
            </h2>
            <p className="text-zinc-400 text-base mb-8 max-w-2xl mx-auto">
              Book your flights, reserve parking, explore dining options, and enjoy world-class
              airport services
            </p>
            <Button className="bg-white hover:bg-gray-200 text-black px-7 py-2.5 text-[15px] font-medium rounded-lg transition-all inline-flex items-center gap-2 shadow-xl">
              Book Your Flight
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-6 py-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#003366] to-[#0077B6] flex items-center justify-center shadow-lg shadow-blue-500/20 animate-pulse">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <span className="text-[17px] font-semibold text-white">NMIA</span>
              </div>
              <p className="text-[13px] text-zinc-500 leading-[1.6] mb-6">
                Navi Mumbai International Airport - Your premier gateway connecting Mumbai to the
                world.
              </p>
              <p className="text-[13px] text-zinc-500 leading-[1.6]">
                Made with 💛 by{' '}
                <a
                  href="https://github.com/Pranshul8050"
                  target="_blank"
                  className="text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  Pranshul
                </a>{' '}
                and{' '}
                <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Team
                </a>
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-[0.08em] mb-4">
                SERVICES
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="/flight"
                    className="text-[14px] text-zinc-400 hover:text-white transition-colors block"
                  >
                    Flight Information
                  </a>
                </li>
                <li>
                  <a
                    href="/parking"
                    className="text-[14px] text-zinc-400 hover:text-white transition-colors block"
                  >
                    Parking
                  </a>
                </li>
                <li>
                  <a
                    href="/shopping"
                    className="text-[14px] text-zinc-400 hover:text-white transition-colors block"
                  >
                    Shopping & Dining
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-[0.08em] mb-4">
                RESOURCES
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#"
                    className="text-[14px] text-zinc-400 hover:text-white transition-colors block"
                  >
                    Airport Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] text-zinc-400 hover:text-white transition-colors block"
                  >
                    Travel Tips
                  </a>
                </li>
                <li>
                  <a
                    href="/local-events"
                    className="text-[14px] text-zinc-400 hover:text-white transition-colors block"
                  >
                    Local Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] text-zinc-400 hover:text-white transition-colors block"
                  >
                    Airport Map
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] text-zinc-400 hover:text-white transition-colors block"
                  >
                    Lost & Found
                  </a>
                </li>
                <li>
                  <a
                    href="/travel"
                    className="text-[14px] text-zinc-400 hover:text-white transition-colors block"
                  >
                    Transportation
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-[0.08em] mb-4">
                LEGAL
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#"
                    className="text-[14px] text-zinc-400 hover:text-white transition-colors block"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] text-zinc-400 hover:text-white transition-colors block"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright & Stats */}
          <div className="pt-12 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-[11px] text-zinc-500 uppercase tracking-wide">Open</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">2M+</div>
                  <div className="text-[11px] text-zinc-500 uppercase tracking-wide">
                    Passengers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-[11px] text-zinc-500 uppercase tracking-wide">
                    Destinations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">100+</div>
                  <div className="text-[11px] text-zinc-500 uppercase tracking-wide">Airlines</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center transition-all group"
                >
                  <Instagram className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center transition-all group"
                >
                  <Facebook className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center transition-all group"
                >
                  <Twitter className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center transition-all group"
                >
                  <Youtube className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[11px] text-zinc-600">2025 NMIA. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
