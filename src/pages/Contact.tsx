import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Headphones } from "lucide-react";

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
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">Contact Support</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Have questions? We're here to help. Reach out to our support team anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container px-6 -mt-12 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 bg-white shadow-2xl hover:shadow-3xl transition-all text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#003366] to-[#0077B6] flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Call Us</h3>
            <p className="text-slate-600 mb-4">Available 24/7 for your support</p>
            <div className="space-y-2">
              <p className="text-lg font-bold text-[#0077B6]">+91 22 1234 5678</p>
              <p className="text-sm text-slate-500">Toll-Free: 1800 123 4567</p>
            </div>
          </Card>

          <Card className="p-8 bg-white shadow-2xl hover:shadow-3xl transition-all text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#003366] to-[#0077B6] flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Email Us</h3>
            <p className="text-slate-600 mb-4">We'll respond within 24 hours</p>
            <div className="space-y-2">
              <p className="text-sm font-bold text-[#0077B6]">info@nmia.in</p>
              <p className="text-sm text-slate-500">support@nmia.in</p>
            </div>
          </Card>

          <Card className="p-8 bg-white shadow-2xl hover:shadow-3xl transition-all text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#003366] to-[#0077B6] flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Live Chat</h3>
            <p className="text-slate-600 mb-4">Instant support via live chat</p>
            <Button className="bg-gradient-to-r from-[#003366] to-[#0077B6] hover:shadow-lg transition-all">
              Start Chat Now
            </Button>
          </Card>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="container px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Send a Message</h2>
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

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#003366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Main Office</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Navi Mumbai International Airport<br />
                      CIDCO, Navi Mumbai<br />
                      Maharashtra 400708, India
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#003366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Office Hours</h3>
                    <div className="space-y-1 text-slate-600">
                      <p><strong>Customer Service:</strong> 24/7</p>
                      <p><strong>Administration:</strong> Mon-Fri, 9 AM - 6 PM</p>
                      <p><strong>Lost & Found:</strong> Daily, 6 AM - 10 PM</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#003366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Department Contacts</h3>
                    <div className="space-y-2 text-sm text-slate-600">
                      <p><strong>General Inquiries:</strong> +91 22 1234 5678</p>
                      <p><strong>Lost & Found:</strong> +91 22 1234 5679</p>
                      <p><strong>Parking Services:</strong> +91 22 1234 5680</p>
                      <p><strong>Special Assistance:</strong> +91 22 1234 5681</p>
                      <p><strong>Media Relations:</strong> +91 22 1234 5682</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-[#003366] to-[#0077B6] text-white">
                <h3 className="font-bold text-lg mb-3">Emergency Contacts</h3>
                <div className="space-y-2">
                  <p><strong>Airport Security:</strong> +91 22 1234 9999</p>
                  <p><strong>Medical Emergency:</strong> +91 22 1234 0000</p>
                  <p><strong>Fire Department:</strong> 101</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-slate-50 py-16">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Connect With Us</h2>
            <p className="text-slate-600 mb-8">Follow us on social media for the latest updates and news</p>
            
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

      {/* Map Section */}
      <div className="container px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Find Us on Map</h2>
          <Card className="overflow-hidden">
            <div className="bg-slate-100 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-20 h-20 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">Interactive map will be displayed here</p>
                <p className="text-sm text-slate-500 mt-2">Navi Mumbai International Airport, Maharashtra</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
