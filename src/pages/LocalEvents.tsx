import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Heart, MapPin, Music, Tag, Users, Utensils } from 'lucide-react';

const LocalEvents = () => {
  const featuredEvents = [
    {
      id: 1,
      title: 'Navi Mumbai Cultural Festival',
      category: 'Festival',
      date: 'December 15-17, 2025',
      time: '10:00 AM - 10:00 PM',
      location: 'Central Park, Navi Mumbai',
      distance: '10 km from airport',
      image:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop',
      description:
        'Annual cultural extravaganza celebrating art, music, dance, and local cuisine from across Maharashtra. Features live performances, food stalls, and art exhibitions.',
      price: 'Free Entry',
      attendees: '50,000+ expected'
    },
    {
      id: 2,
      title: 'Seawoods Food & Music Carnival',
      category: 'Food & Music',
      date: 'November 20-22, 2025',
      time: '5:00 PM - 11:00 PM',
      location: 'Seawoods Grand Central',
      distance: '12 km from airport',
      image:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop',
      description:
        'A fusion of culinary delights and live music performances. Enjoy international cuisines, craft beer, and performances by popular bands.',
      price: '₹500 per person',
      attendees: '20,000+ expected'
    },
    {
      id: 3,
      title: 'Pandeshwar Night Market',
      category: 'Market',
      date: 'Every Friday & Saturday',
      time: '7:00 PM - 1:00 AM',
      location: 'Pandeshwar, Vashi',
      distance: '8 km from airport',
      image:
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop',
      description:
        'Vibrant night market featuring local handicrafts, street food, live entertainment, and shopping. A must-visit for authentic local experience.',
      price: 'Free Entry',
      attendees: '15,000+ weekly'
    },
    {
      id: 4,
      title: 'Kharghar Hills Adventure Festival',
      category: 'Sports & Adventure',
      date: 'January 10-12, 2026',
      time: '6:00 AM - 6:00 PM',
      location: 'Kharghar Hills',
      distance: '15 km from airport',
      image:
        'https://images.unsplash.com/photo-1526139334526-f591a54b477c?q=80&w=2070&auto=format&fit=crop',
      description:
        'Three-day adventure sports festival featuring trekking, rock climbing, paragliding, and mountain biking. Suitable for all skill levels.',
      price: '₹1,500 - ₹5,000',
      attendees: '10,000+ expected'
    },
    {
      id: 5,
      title: 'Belapur Art & Craft Fair',
      category: 'Art & Culture',
      date: 'December 1-3, 2025',
      time: '11:00 AM - 9:00 PM',
      location: 'CBD Belapur',
      distance: '11 km from airport',
      image:
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop',
      description:
        'Showcasing works by local and national artists. Features paintings, sculptures, handmade jewelry, pottery, and traditional crafts.',
      price: '₹200 per person',
      attendees: '8,000+ expected'
    },
    {
      id: 6,
      title: "New Year's Eve Celebration",
      category: 'Celebration',
      date: 'December 31, 2025',
      time: '8:00 PM - 2:00 AM',
      location: 'Various Locations',
      distance: '8-15 km from airport',
      image:
        'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=2069&auto=format&fit=crop',
      description:
        'Ring in the new year with spectacular fireworks, live DJs, concerts, and parties across multiple venues in Navi Mumbai.',
      price: '₹2,000 - ₹10,000',
      attendees: '100,000+ across venues'
    }
  ];

  const categories = [
    { name: 'All Events', icon: Calendar, color: 'blue' },
    { name: 'Festivals', icon: Music, color: 'purple' },
    { name: 'Food & Dining', icon: Utensils, color: 'orange' },
    { name: 'Markets', icon: Tag, color: 'green' },
    { name: 'Sports', icon: Users, color: 'red' },
    { name: 'Art & Culture', icon: Heart, color: 'pink' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/85 to-[#0077B6]/90"></div>
        <div className="container relative z-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 mb-6">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">Events & Experiences</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Discover Local Events
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Explore exciting happenings, festivals, and cultural experiences near Navi Mumbai
              International Airport
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className="bg-white text-[#003366] hover:bg-slate-100 px-8 py-6 text-lg font-semibold shadow-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Browse All Events
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                <MapPin className="w-5 h-5 mr-2" />
                View on Map
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    index === 0
                      ? 'bg-gradient-to-r from-[#003366] to-[#0077B6] text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Events Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">Featured Events</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From cultural festivals to adventure sports, discover the best events happening around
            you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-[#003366]">
                    {event.category}
                  </span>
                </div>

                {/* Distance Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-[#0077B6]" />
                  <span className="text-sm font-semibold text-slate-700">{event.distance}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#003366] mb-3 group-hover:text-[#0077B6] transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4 text-[#0077B6]" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4 text-[#0077B6]" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-[#0077B6]" />
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">{event.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-xs text-slate-500">Entry Fee</p>
                    <p className="text-lg font-bold text-[#003366]">{event.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Expected</p>
                    <p className="text-sm font-semibold text-slate-700">{event.attendees}</p>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-gradient-to-r from-[#003366] to-[#0077B6] text-white hover:shadow-lg transition-all">
                  View Details & Book
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#003366] to-[#0077B6] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Never Miss an Event</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get notified about upcoming events, exclusive offers,
            and local experiences
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="w-full sm:w-auto bg-white text-[#003366] hover:bg-slate-100 px-8 py-4 font-bold whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocalEvents;
