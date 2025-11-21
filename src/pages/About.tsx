import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Building2, Users, Award, MapPin, TrendingUp, Target, ArrowRight, Globe, Phone, Mail, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-[#003366] to-[#0077B6]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-white" />
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">About Airport</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Navi Mumbai International Airport
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              India's newest world-class aviation hub, connecting people, cultures, and opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="container px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Story</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6 text-center">
            Navi Mumbai International Airport (NMIA) represents a transformative milestone in Indian aviation. 
            Strategically located in Navi Mumbai, this state-of-the-art facility is designed to alleviate congestion 
            and serve as a gateway to the Mumbai Metropolitan Region.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed text-center">
            With cutting-edge infrastructure, sustainable practices, and passenger-centric services, NMIA is poised 
            to become one of India's premier international airports.
          </p>
        </div>
      </div>

      {/* Key Stats */}
      <div className="bg-gradient-to-r from-[#003366] to-[#0077B6] py-16">
        <div className="container px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">60M+</div>
              <p className="text-white/90">Annual Passengers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-white/90">Destinations</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-white/90">Operations</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <p className="text-white/90">Retail Outlets</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="container px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[#003366]" />
            </div>
            <h3 className="text-2xl font-bold text-[#003366] mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              To be recognized as India's most sustainable, efficient, and passenger-friendly airport, setting 
              new benchmarks in aviation excellence and customer satisfaction.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Carbon-neutral operations by 2030</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>World-class passenger experience</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Regional economic catalyst</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-[#003366]" />
            </div>
            <h3 className="text-2xl font-bold text-[#003366] mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              To provide seamless connectivity, exceptional service, and sustainable growth while contributing 
              to the economic development of the Mumbai Metropolitan Region.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Excellence in operational efficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Innovation in airport services</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-[#0077B6] mt-0.5 flex-shrink-0" />
                <span>Community and environment focus</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Features */}
      <div className="bg-slate-50 py-16">
        <div className="container px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">World-Class Facilities</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-[#003366]" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-3">Modern Infrastructure</h3>
              <p className="text-slate-600 leading-relaxed">
                Two state-of-the-art terminals with advanced technology and passenger comfort amenities
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#003366]" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-3">Global Connectivity</h3>
              <p className="text-slate-600 leading-relaxed">
                Direct flights to major domestic and international destinations across 6 continents
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#003366]" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-3">Award-Winning Service</h3>
              <p className="text-slate-600 leading-relaxed">
                Recognized for excellence in customer service and operational efficiency
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Sustainability */}
      <div className="container px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-10 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
            <h2 className="text-3xl font-bold text-[#003366] mb-6 text-center">Commitment to Sustainability</h2>
            <p className="text-slate-700 leading-relaxed mb-6 text-center">
              NMIA is built with sustainability at its core, incorporating green building practices and 
              renewable energy solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-slate-700">Renewable Energy Target</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                <p className="text-slate-700">Water Recycling</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">0</div>
                <p className="text-slate-700">Waste to Landfill Goal</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Official Contact Information */}
      <div className="container px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Official Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#003366]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Phone Numbers</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><strong>General Inquiries:</strong> +91 22 1234 5678</p>
                    <p><strong>Customer Service:</strong> 1800 123 4567 (Toll-Free)</p>
                    <p><strong>Lost & Found:</strong> +91 22 1234 5679</p>
                    <p><strong>Parking Services:</strong> +91 22 1234 5680</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#003366]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Email Addresses</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><strong>General:</strong> info@nmia.in</p>
                    <p><strong>Support:</strong> support@nmia.in</p>
                    <p><strong>Media:</strong> media@nmia.in</p>
                    <p><strong>Careers:</strong> careers@nmia.in</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#003366]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Operating Hours</h3>
                  <div className="space-y-1 text-slate-600">
                    <p><strong>Airport:</strong> 24/7</p>
                    <p><strong>Customer Service:</strong> 24/7</p>
                    <p><strong>Administration:</strong> Mon-Fri, 9 AM - 6 PM</p>
                    <p><strong>Lost & Found:</strong> Daily, 6 AM - 10 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-red-800 mb-2">Emergency Contacts</h3>
                  <div className="space-y-1 text-slate-700">
                    <p><strong>Airport Security:</strong> +91 22 1234 9999</p>
                    <p><strong>Medical Emergency:</strong> +91 22 1234 0000</p>
                    <p><strong>Fire Services:</strong> 101</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="bg-slate-50 py-16">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <MapPin className="w-12 h-12 text-[#0077B6] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Location</h2>
              <p className="text-slate-600">Strategically positioned in Navi Mumbai for easy accessibility</p>
            </div>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl text-[#003366] mb-4">Address</h3>
                  <p className="text-slate-600 mb-6">
                    Navi Mumbai International Airport<br />
                    CIDCO, Navi Mumbai<br />
                    Maharashtra 400708<br />
                    India
                  </p>
                  <h3 className="font-bold text-xl text-[#003366] mb-4">Getting Here</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-[#0077B6] mt-0.5 flex-shrink-0" />
                      <span>30 min from Mumbai Central by metro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-[#0077B6] mt-0.5 flex-shrink-0" />
                      <span>Direct expressway access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-[#0077B6] mt-0.5 flex-shrink-0" />
                      <span>Free shuttle from major hotels</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-100 rounded-lg flex items-center justify-center h-64">
                  <MapPin className="w-20 h-20 text-slate-400" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
