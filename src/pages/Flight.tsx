import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Plane, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FlightData {
  flightNumber: string;
  airline: string;
  origin?: string;
  destination?: string;
  originCity?: string;
  destinationCity?: string;
  time: string;
  status: string;
  terminal: string;
  gate: string;
}

const Flight = () => {
  const [activeTab, setActiveTab] = useState<'arrivals' | 'departures'>('arrivals');
  const [flights, setFlights] = useState<FlightData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchFlight, setSearchFlight] = useState('');
  const [selectedAirline, setSelectedAirline] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedTime, setSelectedTime] = useState('All');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const { toast } = useToast();

  // Common airlines
  const airlines = [
    'All',
    'Air India',
    'IndiGo',
    'SpiceJet',
    'Vistara',
    'Go First',
    'AirAsia India',
    'Emirates',
    'Qatar Airways',
    'Singapore Airlines'
  ];

  // Common cities
  const cities = [
    'All',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Kolkata',
    'Chennai',
    'Ahmedabad',
    'Pune',
    'Goa',
    'Jaipur',
    'Dubai',
    'Singapore',
    'London'
  ];

  // Time slots
  const timeSlots = [
    'All',
    'Morning (6am-12pm)',
    'Afternoon (12pm-6pm)',
    'Evening (6pm-12am)',
    'Night (12am-6am)'
  ];

  const fetchFlights = async () => {
    setLoading(true);
    try {
      // Fetch directly from Aviation Stack API
      const apiKey = import.meta.env.VITE_AVIATION_STACK_API_KEY;
      let apiUrl = `https://api.aviationstack.com/v1/flights?access_key=${apiKey}`;

      // Add airport filter (Mumbai)
      if (activeTab === 'departures') {
        apiUrl += '&dep_iata=BOM';
      } else {
        apiUrl += '&arr_iata=BOM';
      }

      // Add flight number filter if provided
      if (searchFlight) {
        apiUrl += `&flight_iata=${searchFlight}`;
      }

      apiUrl += '&limit=50';

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      // Transform API data
      let transformedFlights = (data.data || []).map((flight: any) => {
        const isArrival = activeTab === 'arrivals';
        const scheduledTime = isArrival ? flight.arrival?.scheduled : flight.departure?.scheduled;
        const actualTime = isArrival ? flight.arrival?.actual : flight.departure?.actual;
        const estimatedTime = isArrival ? flight.arrival?.estimated : flight.departure?.estimated;

        const bestTime = actualTime || estimatedTime || scheduledTime;

        return {
          time: bestTime
            ? new Date(bestTime).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              })
            : 'N/A',
          origin: flight.departure?.airport || flight.departure?.iata || 'Unknown',
          destination: flight.arrival?.airport || flight.arrival?.iata || 'Unknown',
          originCity: flight.departure?.timezone || flight.departure?.iata || '',
          destinationCity: flight.arrival?.timezone || flight.arrival?.iata || '',
          flightNumber:
            flight.flight?.iata || flight.flight?.icao || flight.flight?.number || 'N/A',
          airline: flight.airline?.name || flight.airline?.iata || 'Unknown',
          gate: (isArrival ? flight.arrival?.gate : flight.departure?.gate) || 'TBA',
          terminal: (isArrival ? flight.arrival?.terminal : flight.departure?.terminal) || 'TBA',
          status: flight.flight_status || 'scheduled'
        };
      });

      let filteredFlights = transformedFlights;

      // Apply filters
      if (selectedAirline !== 'All') {
        filteredFlights = filteredFlights.filter((f: FlightData) =>
          f.airline?.toLowerCase().includes(selectedAirline.toLowerCase())
        );
      }

      if (selectedCity !== 'All') {
        filteredFlights = filteredFlights.filter((f: FlightData) => {
          const location = activeTab === 'arrivals' ? f.origin : f.destination;
          return location?.toLowerCase().includes(selectedCity.toLowerCase());
        });
      }

      if (selectedTime !== 'All') {
        filteredFlights = filteredFlights.filter((f: FlightData) => {
          const time = f.time;
          const hour = parseInt(time.split(':')[0]);

          if (selectedTime.includes('Morning')) return hour >= 6 && hour < 12;
          if (selectedTime.includes('Afternoon')) return hour >= 12 && hour < 18;
          if (selectedTime.includes('Evening')) return hour >= 18 && hour < 24;
          if (selectedTime.includes('Night')) return hour >= 0 && hour < 6;
          return true;
        });
      }

      setFlights(filteredFlights);
      setLastUpdated(new Date());

      toast({
        title: 'Flights Updated',
        description: `Showing ${filteredFlights.length} live flights from Aviation Stack API`,
        variant: 'default'
      });
    } catch (error: any) {
      console.error('Error fetching flights:', error);
      toast({
        title: 'Error Loading Flights',
        description: error.message || 'Unable to fetch flight information. Please try again.',
        variant: 'destructive'
      });

      // Fallback to mock data
      const mockData = {
        departures: [
          {
            time: '02:25 PM',
            destination: 'Indira Gandhi International Airport',
            destinationCity: 'New Delhi, India',
            origin: 'Mumbai',
            originCity: 'Mumbai, Maharashtra',
            flightNumber: '6E 2134',
            airline: 'IndiGo',
            gate: 'A14',
            terminal: 'T2',
            status: 'on time'
          },
          {
            time: '02:45 PM',
            destination: 'Kempegowda International Airport',
            destinationCity: 'Bangalore, Karnataka',
            origin: 'Mumbai',
            originCity: 'Mumbai, Maharashtra',
            flightNumber: 'AI 619',
            airline: 'Air India',
            gate: 'C17',
            terminal: 'T2',
            status: 'boarding'
          },
          {
            time: '03:00 PM',
            destination: 'Dubai International Airport',
            destinationCity: 'Dubai, UAE',
            origin: 'Mumbai',
            originCity: 'Mumbai, Maharashtra',
            flightNumber: 'EK 501',
            airline: 'Emirates',
            gate: 'B37',
            terminal: 'T2',
            status: 'scheduled'
          },
          {
            time: '03:15 PM',
            destination: 'Singapore',
            origin: 'Mumbai',
            flightNumber: 'SQ 423',
            airline: 'Singapore Airlines',
            gate: 'D22',
            terminal: 'T2',
            status: 'on time'
          }
        ],
        arrivals: [
          {
            time: '02:10 PM',
            origin: 'Delhi',
            destination: 'Mumbai',
            flightNumber: '6E 2111',
            airline: 'IndiGo',
            gate: 'A5',
            terminal: 'T2',
            status: 'landed'
          },
          {
            time: '02:20 PM',
            origin: 'Bangalore',
            destination: 'Mumbai',
            flightNumber: 'AI 502',
            airline: 'Air India',
            gate: 'B12',
            terminal: 'T2',
            status: 'on time'
          },
          {
            time: '02:35 PM',
            origin: 'Dubai',
            destination: 'Mumbai',
            flightNumber: 'EK 500',
            airline: 'Emirates',
            gate: 'C8',
            terminal: 'T2',
            status: 'active'
          },
          {
            time: '02:50 PM',
            origin: 'Singapore',
            destination: 'Mumbai',
            flightNumber: 'SQ 422',
            airline: 'Singapore Airlines',
            gate: 'D18',
            terminal: 'T2',
            status: 'active'
          }
        ]
      };

      setFlights(activeTab === 'departures' ? mockData.departures : mockData.arrivals);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();

    // Auto-refresh every 2 minutes
    const interval = setInterval(() => {
      fetchFlights();
    }, 120000);

    return () => clearInterval(interval);
  }, [activeTab, selectedAirline, selectedCity, selectedTime]);

  const handleSearch = () => {
    fetchFlights();
  };

  const handleClear = () => {
    setSearchFlight('');
    setSelectedAirline('All');
    setSelectedCity('All');
    setSelectedTime('All');
    fetchFlights();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Matching Dulles style */}
      <div
        className="relative pt-32 pb-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="container relative z-10 px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-wide">
            ARRIVALS AND DEPARTURES
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
            <span>🏠</span>
            <span>✈️</span>
            <span className="font-semibold">Flight Information</span>
          </div>
          <p className="text-white/80 mt-4 text-lg">
            Your airline is the best source for the most up-to-date flight status.
          </p>
        </div>
      </div>

      {/* Arrivals/Departures Toggle - Matching Dulles design */}
      <div className="bg-white border-b border-slate-200">
        <div className="container px-6 py-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('arrivals')}
              className={`px-12 py-3 text-lg font-semibold tracking-wide transition-all ${
                activeTab === 'arrivals'
                  ? 'bg-gradient-to-r from-[#003366] to-[#0077B6] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              ARRIVALS
            </button>
            <div className="w-12 h-12 rounded-full border-4 border-slate-300 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-slate-300"></div>
            </div>
            <button
              onClick={() => setActiveTab('departures')}
              className={`px-12 py-3 text-lg font-semibold tracking-wide transition-all ${
                activeTab === 'departures'
                  ? 'bg-gradient-to-r from-[#003366] to-[#0077B6] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              DEPARTURES
            </button>
          </div>

          {/* Search Filters */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                  Flight Number
                </label>
                <input
                  type="text"
                  value={searchFlight}
                  onChange={(e) => setSearchFlight(e.target.value.toUpperCase())}
                  placeholder="e.g., AI 101"
                  className="w-full px-4 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                  Airline
                </label>
                <select
                  value={selectedAirline}
                  onChange={(e) => setSelectedAirline(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                >
                  {airlines.map((airline) => (
                    <option key={airline} value={airline}>
                      {airline}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                  {activeTab === 'arrivals' ? 'From' : 'To'}
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                  Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  onClick={handleClear}
                  className="w-full bg-slate-400 hover:bg-slate-500 text-white px-6 py-2.5 text-sm font-bold tracking-wider uppercase"
                >
                  CLEAR
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                onClick={handleSearch}
                className="bg-gradient-to-r from-[#003366] to-[#0077B6] hover:opacity-90 text-white px-12 py-2.5 text-sm font-bold tracking-wider uppercase"
              >
                <Plane className="w-4 h-4 mr-2" />
                SEARCH FLIGHTS
              </Button>
              <Button
                onClick={fetchFlights}
                variant="outline"
                className="text-slate-600 hover:text-[#0077B6] flex items-center gap-2 px-8 py-2.5"
                disabled={loading}
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                {loading ? 'Updating...' : 'Refresh'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Status Table */}
      <div className="container px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-slate-600 text-lg">
              Showing <span className="font-bold">{flights.length}</span>{' '}
              {activeTab === 'arrivals' ? 'arrivals' : 'departures'}
            </p>
            <p className="text-sm text-slate-500">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-24">
              <Loader2 className="w-12 h-12 animate-spin text-[#0077B6] mb-4" />
              <p className="text-slate-600">Loading flight information...</p>
            </div>
          ) : flights.length === 0 ? (
            <div className="text-center py-24">
              <Plane className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-xl text-slate-600 mb-2">No flights found</p>
              <p className="text-slate-500">Try adjusting your search or check back later</p>
            </div>
          ) : (
            <>
              {/* Table */}
              <div className="bg-white border border-slate-200 overflow-hidden overflow-x-auto">
                {/* Table Header */}
                <div className="grid grid-cols-8 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wide min-w-[900px]">
                  <div className="px-4 py-4">Flight</div>
                  <div className="px-4 py-4">Airline</div>
                  <div className="px-4 py-4 col-span-2">
                    {activeTab === 'arrivals' ? 'From' : 'To'}
                  </div>
                  <div className="px-4 py-4">Scheduled</div>
                  <div className="px-4 py-4">Status</div>
                  <div className="px-4 py-4">Terminal</div>
                  <div className="px-4 py-4">Gate</div>
                </div>

                {/* Table Body */}
                <div>
                  {flights.map((flight, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-8 border-b border-slate-100 hover:bg-slate-50 transition-colors text-slate-700 min-w-[900px]"
                    >
                      <div className="px-4 py-4 font-bold text-[#0077B6]">
                        {flight.flightNumber}
                      </div>
                      <div className="px-4 py-4 text-sm">{flight.airline || 'N/A'}</div>
                      <div className="px-4 py-4 col-span-2">
                        <div className="font-medium text-slate-800">
                          {activeTab === 'arrivals' ? flight.origin : flight.destination}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          {activeTab === 'arrivals' ? flight.originCity : flight.destinationCity}
                        </div>
                      </div>
                      <div className="px-4 py-4 text-sm">{flight.time}</div>
                      <div className="px-4 py-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide rounded ${
                            flight.status.toLowerCase().includes('on time') ||
                            flight.status.toLowerCase().includes('scheduled')
                              ? 'bg-green-100 text-green-700'
                              : flight.status.toLowerCase().includes('delay') ||
                                flight.status.toLowerCase().includes('cancel')
                              ? 'bg-red-100 text-red-700'
                              : flight.status.toLowerCase().includes('boarding') ||
                                flight.status.toLowerCase().includes('active')
                              ? 'bg-blue-100 text-blue-700'
                              : flight.status.toLowerCase().includes('landed') ||
                                flight.status.toLowerCase().includes('arrived')
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {flight.status}
                        </span>
                      </div>
                      <div className="px-4 py-4 text-sm">{flight.terminal}</div>
                      <div className="px-4 py-4 font-semibold">{flight.gate}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Message */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-[#0077B6] rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Plane className="w-5 h-5 text-[#0077B6] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-700 leading-relaxed mb-2">
                      <span className="font-bold">Real-time Flight Tracking:</span> Flight
                      information is automatically updated every 2 minutes using live aviation data.
                    </p>
                    <p className="text-sm text-slate-600">
                      For the most accurate status, please verify with your airline or check the
                      airport information displays.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Flight;
