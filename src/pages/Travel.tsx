import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Bus, Calendar, Car, MapPin, Navigation, Plane, Train } from 'lucide-react';
import { useState } from 'react';

const Travel = () => {
  const [activeSection, setActiveSection] = useState('directions');

  const menuItems = [
    { id: 'directions', label: 'Airport Map', icon: MapPin },
    { id: 'security', label: 'Security Information', icon: null },
    { id: 'customs', label: 'Customs & Immigration', icon: null },
    { id: 'construction', label: 'Construction', icon: null },
    { id: 'services', label: 'Services & Amenities', icon: null },
    { id: 'pets', label: 'Traveling With Pets', icon: null },
    { id: 'meeting', label: 'Meeting Passengers', icon: null },
    { id: 'tourism', label: 'Local Tourism', icon: null },
    { id: 'booking', label: 'Book Your Next Trip', icon: null }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Matching Dulles style */}
      <div
        className="relative pt-32 pb-12 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-900/50"></div>
        <div className="container relative z-10 px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-wide">
            DIRECTIONS & MAPS
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
            <span>🏠</span>
            <Plane className="w-4 h-4" />
            <span className="font-semibold">Travel Information</span>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar - Matching Dulles Layout */}
      <div className="flex">
        {/* Left Sidebar Navigation */}
        <div className="w-80 bg-black text-white flex-shrink-0">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">
              Directions & Maps
            </h2>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-white/10 transition-all flex items-center gap-2 ${
                    activeSection === item.id ? 'bg-white/20' : ''
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className={item.icon ? '' : 'pl-6'}>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white">
          {/* Live Traffic Map Section */}
          <div className="relative">
            {/* Real Google Maps Integration */}
            <div className="relative h-[500px] bg-slate-800">
              {/* Google Maps Embed - Navi Mumbai International Airport */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30178.12345678901!2d73.06!3d19.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c14aa5559bc5%3A0x3c7e9ac5d65b8394!2sNavi%20Mumbai%20International%20Airport!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin&maptype=roadmap"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Navi Mumbai International Airport Location"
                className="absolute inset-0"
              ></iframe>

              {/* "LIVE TRAFFIC" Overlay Text */}
              <div className="absolute top-8 left-8 bg-[#003366]/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg pointer-events-none z-10">
                <h2 className="text-3xl font-light tracking-wider text-white">LIVE TRAFFIC</h2>
                <p className="text-white/80 text-sm mt-1">Real-time navigation to airport</p>
              </div>

              {/* Get Directions Button */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <Button
                  onClick={() =>
                    window.open(
                      'https://www.google.com/maps/dir//Navi+Mumbai+International+Airport',
                      '_blank'
                    )
                  }
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold tracking-wide transition-all shadow-xl"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  GET DIRECTIONS
                </Button>
              </div>

              {/* Airport Location Badge */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg z-10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Airport Location</p>
                    <p className="text-sm font-bold text-slate-900">Navi Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Info Below Map */}
            <div className="p-8 bg-white border-t border-slate-200">
              <p
                onClick={() =>
                  window.open(
                    'https://www.google.com/maps/dir//Navi+Mumbai+International+Airport,+Navi+Mumbai,+Maharashtra',
                    '_blank'
                  )
                }
                className="text-[#0077B6] mb-4 hover:underline cursor-pointer font-medium flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Get directions from your current location.
              </p>

              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  For directions using a GPS device, enter "NMIA Airport" or "Navi Mumbai
                  International Airport." If the location is not recognized, use this physical
                  street address or coordinates:
                </p>

                <div className="bg-slate-50 p-4 rounded border-l-4 border-[#0077B6]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0077B6] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Navi Mumbai International Airport
                      </p>
                      <p className="text-slate-700">Kopra-Panvel Road, CIDCO</p>
                      <p className="text-slate-700">Navi Mumbai, Maharashtra 410218, India</p>
                      <p className="text-slate-500 text-sm mt-2">
                        GPS Coordinates:{' '}
                        <span className="font-mono font-semibold">19.0896° N, 73.0607° E</span>
                      </p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('19.0896, 73.0607');
                          alert('Coordinates copied to clipboard!');
                        }}
                        className="text-xs text-[#0077B6] hover:underline mt-1"
                      >
                        Copy coordinates
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="font-bold text-slate-900 mb-2">**Please Note**</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>
                        Mumbai Metro and local trains provide direct access to the airport. You can{' '}
                        <a href="#" className="text-[#0077B6] hover:underline">
                          review the transit routes carefully here
                        </a>{' '}
                        or visit{' '}
                        <a href="#" className="text-[#0077B6] hover:underline">
                          mumbaitransit.org
                        </a>
                        .
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>
                        For real-time traffic updates and route planning, use Google Maps or check
                        the{' '}
                        <a href="#" className="text-[#0077B6] hover:underline">
                          Mumbai Traffic Police website
                        </a>
                        .
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Ground Transportation Options */}
          <div className="p-8 bg-slate-50">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Ground Transportation Options
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Ride-Sharing Services */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ride-Sharing</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Book Ola, Uber, or local taxi services directly from the airport pickup zones.
                </p>
                <div className="space-y-2 mb-4">
                  <Button className="w-full bg-black text-white hover:bg-slate-800 justify-start gap-2">
                    <Car className="w-4 h-4" />
                    Book Ola Ride
                  </Button>
                  <Button className="w-full bg-black text-white hover:bg-slate-800 justify-start gap-2">
                    <Car className="w-4 h-4" />
                    Book Uber Ride
                  </Button>
                </div>
                <p className="text-xs text-slate-500">
                  Pickup locations: Terminal 1 - Gate 5, Terminal 2 - Gate 8
                </p>
              </div>

              {/* Metro & Train */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Train className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Metro Connection</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Direct metro link from Mumbai Central and Navi Mumbai stations. Trains every 10
                  minutes.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0077B6] mt-1">•</span>
                    <span>Operating hours: 5:00 AM - 12:00 AM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0077B6] mt-1">•</span>
                    <span>Fare: ₹20 - ₹80 depending on distance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0077B6] mt-1">•</span>
                    <span>Journey time: 30-45 minutes</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white"
                >
                  View Schedule
                </Button>
              </div>

              {/* Airport Shuttle */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Bus className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Airport Shuttle</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Complimentary shuttle service to major hotels and business districts in the area.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0077B6] mt-1">•</span>
                    <span>Free for hotel guests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0077B6] mt-1">•</span>
                    <span>Runs every 30 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0077B6] mt-1">•</span>
                    <span>Covers 15+ hotel locations</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white"
                >
                  Book Shuttle
                </Button>
              </div>
            </div>
          </div>

          {/* Parking Information */}
          <div className="p-8 bg-white border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Airport Parking</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              NMIA Airport offers multiple parking options including short-term, long-term, valet,
              and premium parking services. Pre-booking is recommended during peak travel seasons.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Parking Rates</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex justify-between">
                    <span>Short-term (per hour)</span>
                    <span className="font-semibold">₹100</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Long-term (per day)</span>
                    <span className="font-semibold">₹500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Valet (per day)</span>
                    <span className="font-semibold">₹1,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Premium (per day)</span>
                    <span className="font-semibold">₹1,500</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-3">Features</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0077B6] mt-1">✓</span>
                    <span>24/7 Security Surveillance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0077B6] mt-1">✓</span>
                    <span>EV Charging Stations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0077B6] mt-1">✓</span>
                    <span>Covered Parking Available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0077B6] mt-1">✓</span>
                    <span>Free Shuttle to Terminals</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Button className="bg-gradient-to-r from-[#003366] to-[#0077B6] text-white hover:shadow-lg px-8">
                Reserve Parking Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Ride Sharing Section */}
      <div id="ride-sharing" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#003366] mb-8">Ride Sharing Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366]">Ola</h3>
                  <p className="text-slate-600">Reliable rides at your fingertips</p>
                </div>
              </div>
              <p className="text-slate-700 mb-6">
                Book comfortable airport transfers with Ola. Choose from sedans, SUVs, or luxury
                vehicles for a smooth journey to your destination.
              </p>
              <a
                href="https://www.olacabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Book Ola Ride
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-lg flex items-center justify-center">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366]">Uber</h3>
                  <p className="text-slate-600">Quick and convenient rides</p>
                </div>
              </div>
              <p className="text-slate-700 mb-6">
                Get reliable airport rides with Uber. Multiple vehicle options available including
                UberGo, UberXL, and Uber Premier for your comfort.
              </p>
              <a
                href="https://www.uber.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Book Uber Ride
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-[#0077B6] rounded">
            <h4 className="font-bold text-[#003366] mb-2">Pickup Locations</h4>
            <p className="text-slate-700">
              Designated ride-sharing pickup zones are located outside Terminal 1 (Domestic) and
              Terminal 2 (International). Follow the signs for "App-Based Rides" or "Ride Sharing
              Services".
            </p>
          </div>
        </div>
      </div>

      {/* Local Events Section */}
      <div id="local-events" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">Local Events Near Airport</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Discover exciting events, festivals, and attractions happening near Navi Mumbai
            International Airport
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold mb-3">
                  Festival
                </span>
                <h3 className="text-xl font-bold text-[#003366] mb-2">Navi Mumbai Festival</h3>
                <p className="text-slate-600 mb-4">
                  Annual cultural festival celebrating art, music, and local cuisine. Multiple
                  venues across the city.
                </p>
                <p className="text-sm text-slate-500">📍 10 km from airport</p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-3">
                  Attraction
                </span>
                <h3 className="text-xl font-bold text-[#003366] mb-2">Central Park</h3>
                <p className="text-slate-600 mb-4">
                  Sprawling green space with walking trails, gardens, and weekend events. Perfect
                  for a quick visit.
                </p>
                <p className="text-sm text-slate-500">📍 8 km from airport</p>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Bus className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold mb-3">
                  Market
                </span>
                <h3 className="text-xl font-bold text-[#003366] mb-2">Seawoods Grand Central</h3>
                <p className="text-slate-600 mb-4">
                  Premium shopping and dining destination. Weekend markets and live entertainment.
                </p>
                <p className="text-sm text-slate-500">📍 12 km from airport</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              Want to explore more events and attractions in the area?
            </p>
            <Button className="bg-gradient-to-r from-[#003366] to-[#0077B6] text-white hover:shadow-lg px-8">
              View All Local Events
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Travel;
