import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Headphones, Users, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-[#003366] to-[#0077B6]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Headphones className="w-8 h-8 text-white" />
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">Website Support</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Contact Website Team
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Questions about this preview website? Reach out to our development team.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container px-6 -mt-12 relative z-20">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white shadow-2xl hover:shadow-3xl transition-all text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#003366] to-[#0077B6] flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Email the Website Team</h3>
            <p className="text-slate-600 mb-4">For inquiries about this preview website</p>
            <a 
              href="mailto:nmia.dasani@gmail.com"
              className="inline-block text-lg font-bold text-[#0077B6] hover:text-[#003366] transition-colors"
            >
              nmia.dasani@gmail.com
            </a>
          </Card>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="container px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Send Us Feedback</h2>
            <p className="text-slate-600 mb-6">Have suggestions or found an issue with the website? Let us know!</p>
            <Card className="p-8 bg-white shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                  <Input placeholder="Enter your full name" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <Input placeholder="+91 98765 43210" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject *</label>
                  <Input placeholder="What is this regarding?" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                  <Textarea 
                    placeholder="Please provide details about your inquiry..." 
                    className="min-h-[150px]"
                  />
                </div>

                <Button className="w-full h-12 bg-gradient-to-r from-[#003366] to-[#0077B6] text-white font-semibold hover:shadow-lg transition-all">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* About This Website */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">About This Website</h2>
            
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#003366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Website Creators</h3>
                    <p className="text-slate-600 leading-relaxed">
                      This is a preview/demo website created to showcase NMIA. 
                      Built with 💛 by <strong>Pranshul</strong> and the development team.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#003366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Contact Email</h3>
                    <p className="text-slate-600 mb-3">For website-related queries, bug reports, or suggestions:</p>
                    <a 
                      href="mailto:nmia.dasani@gmail.com"
                      className="text-[#0077B6] font-semibold hover:text-[#003366] transition-colors"
                    >
                      nmia.dasani@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-[#003366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Purpose</h3>
                    <p className="text-slate-600 leading-relaxed">
                      This website is a preview demonstration of what the official NMIA website could look like. 
                      It's not affiliated with the official Navi Mumbai International Airport authority.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-[#003366] to-[#0077B6] text-white">
                <h3 className="font-bold text-lg mb-3">⚠️ Important Note</h3>
                <p className="leading-relaxed">
                  This is an unofficial preview website. For official NMIA information, 
                  please refer to the official airport authority channels. Visit our <strong>About</strong> page 
                  for official contact details.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-slate-50 py-16">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Follow Development</h2>
            <p className="text-slate-600 mb-8">Connect with the development team and stay updated</p>
            
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" className="border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white">
                Facebook
              </Button>
              <Button variant="outline" size="lg" className="border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white">
                Twitter
              </Button>
              <Button variant="outline" size="lg" className="border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white">
                Instagram
              </Button>
              <Button variant="outline" size="lg" className="border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
