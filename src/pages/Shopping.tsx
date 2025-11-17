import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import {
  ChevronRight,
  Clock,
  Coffee,
  Gift,
  MapPin,
  ShoppingBag,
  Star,
  UtensilsCrossed
} from 'lucide-react';

const Shopping = () => {
  const categories = [
    {
      id: 1,
      title: 'Fashion & Accessories',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070',
      description: 'Designer brands, jewelry, watches',
      stores: '25+ stores'
    },
    {
      id: 2,
      title: 'Duty Free',
      icon: Gift,
      image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2076',
      description: 'Perfumes, cosmetics, liquor',
      stores: '15+ stores'
    },
    {
      id: 3,
      title: 'Restaurants',
      icon: UtensilsCrossed,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
      description: 'Fine dining and cuisines',
      stores: '18+ outlets'
    },
    {
      id: 4,
      title: 'Cafés & Bars',
      icon: Coffee,
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071',
      description: 'Coffee shops and lounges',
      stores: '12+ venues'
    }
  ];

  const stores = [
    {
      name: 'Gucci',
      category: 'Luxury Fashion',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070',
      location: 'Terminal 2, Gate B',
      hours: '24/7',
      description: 'Italian luxury fashion house.'
    },
    {
      name: 'Rolex',
      category: 'Luxury Watches',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080',
      location: 'Terminal 2, Gate C',
      hours: '6 AM - 11 PM',
      description: 'Swiss luxury timepieces.'
    },
    {
      name: 'Hermès',
      category: 'Designer Accessories',
      image: 'https://images.unsplash.com/photo-1591348278863-fde894f7f79a?q=80&w=2070',
      location: 'Terminal 2, Gate B',
      hours: '24/7',
      description: 'French luxury brand.'
    },
    {
      name: 'Sephora',
      category: 'Beauty',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080',
      location: 'Terminal 1 & 2',
      hours: '5 AM - 12 AM',
      description: 'Beauty retailer.'
    },
    {
      name: 'Duty Free World',
      category: 'Duty Free',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074',
      location: 'All Terminals',
      hours: '24/7',
      description: 'Spirits, wines, tobacco.'
    },
    {
      name: 'Pandora',
      category: 'Jewelry',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070',
      location: 'Terminal 2, Gate A',
      hours: '6 AM - 11 PM',
      description: 'Danish jewelry brand.'
    }
  ];

  const restaurants = [
    {
      name: 'The Sky Lounge',
      cuisine: 'International',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
      location: 'Terminal 2, Level 3',
      rating: 4.8,
      price: '₹₹₹₹',
      description: 'Elegant dining with runway views.'
    },
    {
      name: 'Spice Route',
      cuisine: 'Indian & Asian',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070',
      location: 'Terminal 1 & 2',
      rating: 4.6,
      price: '₹₹₹',
      description: 'Authentic Indian flavors.'
    },
    {
      name: 'Burger & Co.',
      cuisine: 'American',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2070',
      location: 'All Terminals',
      rating: 4.5,
      price: '₹₹',
      description: 'Gourmet burgers and fries.'
    },
    {
      name: 'Sushi Bar',
      cuisine: 'Japanese',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2080',
      location: 'Terminal 2, Gate D',
      rating: 4.7,
      price: '₹₹₹',
      description: 'Fresh sushi and sashimi.'
    },
    {
      name: 'Starbucks',
      cuisine: 'Coffee',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2074',
      location: 'All Terminals',
      rating: 4.4,
      price: '₹₹',
      description: 'Coffee and pastries.'
    },
    {
      name: 'Wine & Dine',
      cuisine: 'European',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2070',
      location: 'Terminal 2, Gate C',
      rating: 4.9,
      price: '₹₹₹₹',
      description: 'Premium European cuisine.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div
        className="relative pt-32 pb-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/85 to-[#0077B6]/90"></div>
        <div className="container relative z-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 mb-6">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm font-semibold">Shopping & Dining</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Shop, Dine & Relax
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Discover premium retail brands, world-class dining, and exclusive duty-free shopping
              at NMIA Airport
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className="bg-white text-[#003366] hover:bg-slate-100 px-8 py-6 text-lg font-semibold shadow-xl">
                <MapPin className="w-5 h-5 mr-2" />
                View Airport Map
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                <Gift className="w-5 h-5 mr-2" />
                Duty Free Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">Browse By Category</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From luxury brands to quick bites, find everything you need
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="h-80 relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0077B6] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                    <p className="text-white/90 text-sm mb-3">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {cat.stores}
                      </span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">Featured Stores</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Shop from world-renowned luxury brands
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-xs font-bold text-[#003366]">{store.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#003366] mb-3 group-hover:text-[#0077B6] transition-colors">
                    {store.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{store.description}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#0077B6]" />
                      <span>{store.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#0077B6]" />
                      <span>{store.hours}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-semibold"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
              Restaurants & Cafés
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Savor delicious meals from international cuisines
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((rest, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={rest.image}
                    alt={rest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-slate-700">{rest.rating}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-bold text-[#003366]">{rest.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#003366] mb-2 group-hover:text-[#0077B6] transition-colors">
                    {rest.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#0077B6] mb-3">{rest.cuisine}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{rest.description}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <MapPin className="w-4 h-4 text-[#0077B6]" />
                    <span>{rest.location}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#003366] to-[#0077B6] text-white hover:shadow-lg transition-all">
                    View Menu
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#003366] to-[#0077B6] py-20">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ShoppingBag className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Exclusive Airport Offers
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Sign up for our loyalty program and get exclusive discounts
            </p>
            <Button className="bg-white text-[#003366] hover:bg-slate-100 px-8 py-6 text-lg font-bold">
              Join Now & Save
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shopping;
