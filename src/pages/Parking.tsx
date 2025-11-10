import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, Clock, CreditCard, Shield, MapPin, Calendar, ArrowRight } from "lucide-react";

const Parking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-[#003366] to-[#0077B6]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-8 h-8 text-white" />
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">Parking & Transportation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Airport Parking Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Convenient, secure, and affordable parking options for all travelers at NMIA Airport.
            </p>
          </div>
        </div>
      </div>

      {/* Parking Reservation */}
      <div className="container px-6 -mt-12 relative z-20">
        <Card className="p-8 shadow-2xl bg-white">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Reserve Your Parking Spot</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Entry Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input type="date" className="pl-10 h-12 border-slate-300" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Exit Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input type="date" className="pl-10 h-12 border-slate-300" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Parking Type</label>
              <select className="w-full h-12 border border-slate-300 rounded-md px-3">
                <option>Short-term</option>
                <option>Long-term</option>
                <option>Valet</option>
                <option>Premium</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full h-12 bg-gradient-to-r from-[#003366] to-[#0077B6] text-white font-semibold hover:shadow-lg transition-all">
                Check Availability
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Parking Options */}
      <div className="container px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Parking Options</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0077B6]">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#003366]" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Short-Term</h3>
            <div className="text-3xl font-bold text-[#003366] mb-2">₹100<span className="text-sm font-normal text-slate-600">/hour</span></div>
            <p className="text-slate-600 text-sm mb-4">Ideal for pickups and drop-offs, up to 4 hours</p>
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Closest to terminals</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Covered parking</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>24/7 surveillance</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-[#0077B6] text-[#0077B6]">Select</Button>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all border-2 border-[#0077B6] relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#0077B6] text-white px-3 py-1 text-xs font-bold rounded-full">POPULAR</div>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-[#003366]" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Long-Term</h3>
            <div className="text-3xl font-bold text-[#003366] mb-2">₹500<span className="text-sm font-normal text-slate-600">/day</span></div>
            <p className="text-slate-600 text-sm mb-4">Perfect for extended trips, weekly discounts available</p>
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Free shuttle to terminal</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Weekly rates available</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Secure & monitored</span>
              </li>
            </ul>
            <Button className="w-full bg-gradient-to-r from-[#003366] to-[#0077B6] text-white">Select</Button>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0077B6]">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[#003366]" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Valet</h3>
            <div className="text-3xl font-bold text-[#003366] mb-2">₹1000<span className="text-sm font-normal text-slate-600">/day</span></div>
            <p className="text-slate-600 text-sm mb-4">Premium service with car care options</p>
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Terminal curbside service</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Car wash available</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Indoor climate control</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-[#0077B6] text-[#0077B6]">Select</Button>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0077B6]">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-[#003366]" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Premium</h3>
            <div className="text-3xl font-bold text-[#003366] mb-2">₹1500<span className="text-sm font-normal text-slate-600">/day</span></div>
            <p className="text-slate-600 text-sm mb-4">Luxury parking with exclusive amenities</p>
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Reserved covered spots</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Concierge service</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Lounge access included</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-[#0077B6] text-[#0077B6]">Select</Button>
          </Card>
        </div>
      </div>

      {/* Features & Information */}
      <div className="bg-slate-50 py-16">
        <div className="container px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Parking Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#003366]" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">24/7 Security</h3>
              <p className="text-slate-600">Round-the-clock surveillance and security personnel for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-[#003366]" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Easy Payment</h3>
              <p className="text-slate-600">Accept all major credit cards, digital wallets, and cash payments</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#003366]" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Prime Location</h3>
              <p className="text-slate-600">Conveniently located with easy access to all terminals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="container px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-[#003366] to-[#0077B6] text-white">
            <h2 className="text-2xl font-bold mb-6">Important Parking Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">Pre-booking recommended during peak travel seasons to guarantee your spot</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">Free shuttle service runs every 10 minutes from long-term parking to terminals</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">Electric vehicle charging stations available in all parking areas</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">Disabled parking spaces located closest to terminal entrances</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">Lost ticket? Contact parking office with entry timestamp for assistance</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Parking;
