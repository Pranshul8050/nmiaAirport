import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Headphones, MessageCircle, Phone, Mail, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const CustomerService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-[#003366] to-[#0077B6]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Headphones className="w-8 h-8 text-white" />
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">Customer Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We're Here to Help
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              24/7 support, assistance services, and solutions for all your airport needs at NMIA.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="container px-6 -mt-12 relative z-20">
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 bg-white shadow-xl hover:shadow-2xl transition-all text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-[#003366]" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Call Us</h3>
            <p className="text-sm text-slate-600 mb-3">24/7 Support Line</p>
            <p className="text-lg font-bold text-[#0077B6]">+91 22 1234 5678</p>
          </Card>

          <Card className="p-6 bg-white shadow-xl hover:shadow-2xl transition-all text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-[#003366]" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Email Us</h3>
            <p className="text-sm text-slate-600 mb-3">Response in 24 hours</p>
            <p className="text-sm font-bold text-[#0077B6]">support@nmia.in</p>
          </Card>

          <Card className="p-6 bg-white shadow-xl hover:shadow-2xl transition-all text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-[#003366]" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Live Chat</h3>
            <p className="text-sm text-slate-600 mb-3">Instant assistance</p>
            <Button size="sm" className="bg-[#0077B6] hover:bg-[#003366]">Start Chat</Button>
          </Card>

          <Card className="p-6 bg-white shadow-xl hover:shadow-2xl transition-all text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-[#003366]" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Visit Us</h3>
            <p className="text-sm text-slate-600 mb-3">Information desk</p>
            <p className="text-sm font-bold text-[#0077B6]">Both Terminals</p>
          </Card>
        </div>
      </div>

      {/* Services */}
      <div className="container px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Our Services</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0077B6]">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#003366]" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-3">Special Assistance</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Wheelchair services, meet & assist, unaccompanied minors, elderly passenger support
            </p>
            <Button variant="outline" className="w-full border-[#0077B6] text-[#0077B6]">Request Service</Button>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0077B6]">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-[#003366]" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-3">Lost & Found</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Report lost items or claim found belongings through our dedicated lost property office
            </p>
            <Button variant="outline" className="w-full border-[#0077B6] text-[#0077B6]">Report Item</Button>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-[#0077B6]">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6 text-[#003366]" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-3">Feedback & Complaints</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Share your experience or report issues. We value your feedback for continuous improvement
            </p>
            <Button variant="outline" className="w-full border-[#0077B6] text-[#0077B6]">Submit Feedback</Button>
          </Card>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-slate-50 py-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Send Us a Message</h2>
              <p className="text-slate-600">Fill out the form below and our team will get back to you within 24 hours</p>
            </div>
            
            <Card className="p-8 bg-white">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <Input placeholder="John Doe" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="h-12" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <Input placeholder="+91 98765 43210" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                    <select className="w-full h-12 border border-slate-300 rounded-md px-3">
                      <option>General Inquiry</option>
                      <option>Flight Information</option>
                      <option>Lost & Found</option>
                      <option>Special Assistance</option>
                      <option>Complaint</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <Textarea 
                    placeholder="Please describe your inquiry or feedback in detail..." 
                    className="min-h-[150px]"
                  />
                </div>

                <Button className="w-full h-12 bg-gradient-to-r from-[#003366] to-[#0077B6] text-white font-semibold hover:shadow-lg transition-all">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          <Card className="p-6 hover:shadow-lg transition-all">
            <h3 className="font-bold text-lg text-[#003366] mb-2">What items are prohibited in carry-on luggage?</h3>
            <p className="text-slate-600 leading-relaxed">
              Liquids over 100ml, sharp objects, flammable materials, and weapons are prohibited. Check TSA guidelines for complete list.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all">
            <h3 className="font-bold text-lg text-[#003366] mb-2">How early should I arrive at the airport?</h3>
            <p className="text-slate-600 leading-relaxed">
              We recommend arriving 2 hours before domestic flights and 3 hours before international flights for smooth check-in and security clearance.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all">
            <h3 className="font-bold text-lg text-[#003366] mb-2">Is WiFi available at the airport?</h3>
            <p className="text-slate-600 leading-relaxed">
              Yes, free high-speed WiFi is available throughout both terminals. Connect to "NMIA-Free-WiFi" network.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all">
            <h3 className="font-bold text-lg text-[#003366] mb-2">Where can I find charging stations?</h3>
            <p className="text-slate-600 leading-relaxed">
              Charging stations are located near all gate areas, lounges, and food courts. USB and standard power outlets available.
            </p>
          </Card>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-gradient-to-r from-[#003366] to-[#0077B6] py-16">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-white text-center">
            <Clock className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Customer Service Hours</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Information Desk</h3>
                <p className="text-white/90">24/7 - Both Terminals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Lost & Found</h3>
                <p className="text-white/90">6 AM - 10 PM Daily</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Special Assistance</h3>
                <p className="text-white/90">24/7 - Pre-booking Required</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerService;
