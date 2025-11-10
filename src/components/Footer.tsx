/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Loader2, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCookie, setShowCookie] = useState(true);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
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
        title: "Success!",
        description: "You've been subscribed to our newsletter",
      });
      
      setEmail("");
    } catch (error: any) {
      console.error('Error subscribing:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-dark-navy text-white">
      {/* Newsletter Section */}
      <div className="bg-dark-navy py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4 tracking-wider">
            Subscribe for Updates!
          </h2>
          <p className="text-center text-white/90 mb-10 text-lg">
            Get our latest flight destination information, shopping/dining and parking promotions sent directly to your inbox!
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL ADDRESS..."
              className="bg-transparent border-2 border-white text-white placeholder:text-white/50 h-14"
              disabled={loading}
            />
            <Button 
              type="submit"
              className="bg-primary hover:bg-primary/90 px-10 h-14 text-base font-semibold"
              disabled={loading}
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "JOIN US"}
            </Button>
          </form>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-navy py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy and Cookies</a>
            </div>
            <div className="text-sm">
              <span>Select Language</span>
              <select className="ml-2 bg-navy border border-white/20 px-2 py-1 rounded">
                <option>ENGLISH</option>
                <option>HINDI</option>
                <option>MARATHI</option>
              </select>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-white/60">
            <p>Mumbai International Airport Authority © 2025</p>
          </div>
        </div>
      </div>
      {showCookie && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#002f5f] text-white text-sm z-50">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div>
              Airport Authority utilizes cookies saved on your devices to ensure we give you the best experience and to see how people use the website. Read more about our <a href="#" className="underline">Privacy policy</a>.
            </div>
            <div>
              <button className="border border-white px-3 py-1 rounded mr-3 bg-transparent text-white" onClick={() => setShowCookie(false)}>OK</button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
