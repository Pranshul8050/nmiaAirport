import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Coffee, Gift, Watch, Store, UtensilsCrossed, ArrowRight } from "lucide-react";

const Shopping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-[#003366] to-[#0077B6]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="w-8 h-8 text-white" />
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">Shopping & Dining</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Shop, Dine & Relax
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover premium retail brands, world-class dining, and exclusive duty-free shopping at NMIA Airport.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Browse By Category</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-[#0077B6] group">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-[#0077B6] transition-all">
              <ShoppingBag className="w-7 h-7 text-[#003366] group-hover:text-white transition-all" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Fashion & Accessories</h3>
            <p className="text-slate-600 text-sm mb-3">Designer brands, jewelry, and accessories</p>
            <div className="flex items-center gap-2 text-[#0077B6] text-sm font-semibold">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-[#0077B6] group">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-[#0077B6] transition-all">
              <Gift className="w-7 h-7 text-[#003366] group-hover:text-white transition-all" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Duty Free</h3>
            <p className="text-slate-600 text-sm mb-3">Perfumes, cosmetics, liquor, and tobacco</p>
            <div className="flex items-center gap-2 text-[#0077B6] text-sm font-semibold">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-[#0077B6] group">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-[#0077B6] transition-all">
              <UtensilsCrossed className="w-7 h-7 text-[#003366] group-hover:text-white transition-all" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Restaurants</h3>
            <p className="text-slate-600 text-sm mb-3">Fine dining and casual restaurants</p>
            <div className="flex items-center gap-2 text-[#0077B6] text-sm font-semibold">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-[#0077B6] group">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-[#0077B6] transition-all">
              <Coffee className="w-7 h-7 text-[#003366] group-hover:text-white transition-all" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Cafés & Bars</h3>
            <p className="text-slate-600 text-sm mb-3">Coffee shops, lounges, and bars</p>
            <div className="flex items-center gap-2 text-[#0077B6] text-sm font-semibold">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Card>
        </div>
      </div>

      {/* Featured Stores */}
      <div className="bg-slate-50 py-16">
        <div className="container px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Featured Stores</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                <Store className="w-16 h-16 text-slate-400" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-2">Designer Boutique</h3>
                <p className="text-slate-600 mb-3">Luxury fashion brands including Gucci, Prada, and Louis Vuitton</p>
                <div className="text-sm text-slate-500">Terminal 2, Gate B Area</div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                <Watch className="w-16 h-16 text-slate-400" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-2">Timepiece Gallery</h3>
                <p className="text-slate-600 mb-3">Premium watches from Rolex, Omega, and Cartier</p>
                <div className="text-sm text-slate-500">Terminal 2, Central Plaza</div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                <Gift className="w-16 h-16 text-slate-400" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-2">Duty Free Emporium</h3>
                <p className="text-slate-600 mb-3">Tax-free shopping on perfumes, cosmetics, and spirits</p>
                <div className="text-sm text-slate-500">Both Terminals</div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Dining Options */}
      <div className="container px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Dining Experiences</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <UtensilsCrossed className="w-6 h-6 text-[#003366]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">Fine Dining</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Experience world-class cuisine from renowned chefs. Our fine dining restaurants offer 
                  international flavors and premium service.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                    <span>Indian, Continental, Asian cuisines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                    <span>Wine and spirits selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                    <span>Reservations recommended</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Coffee className="w-6 h-6 text-[#003366]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">Quick Bites</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Grab a quick meal or snack before your flight. Fast food, cafés, and food courts 
                  available throughout the airport.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                    <span>Starbucks, Café Coffee Day, Costa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                    <span>McDonald's, Subway, KFC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                    <span>24/7 operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Shopping Tips */}
      <div className="bg-gradient-to-r from-[#003366] to-[#0077B6] py-16">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Shopping Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Duty Free Allowances</h3>
                <p className="text-white/90 leading-relaxed">
                  International passengers can purchase duty-free items. Check your destination country's 
                  allowances to avoid customs issues.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">VAT Refund</h3>
                <p className="text-white/90 leading-relaxed">
                  Tourists eligible for VAT refund on purchases. Present your receipts at the VAT refund 
                  counter before security.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Currency Exchange</h3>
                <p className="text-white/90 leading-relaxed">
                  Multiple currency exchange offices available. Major credit cards accepted at all stores 
                  and restaurants.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Store Hours</h3>
                <p className="text-white/90 leading-relaxed">
                  Most stores open from 6 AM to 11 PM. Some cafés and convenience stores operate 24/7 
                  for your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shopping;
