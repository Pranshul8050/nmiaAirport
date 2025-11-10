import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Flight = () => {
  const [activeTab, setActiveTab] = useState<"arrivals" | "departures">("arrivals");
  const [selectedAirline, setSelectedAirline] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedDate, setSelectedDate] = useState("Today");

  // Mock flight data - will be replaced with API later
  const flights = [
    { number: "AI 101", airline: "Air India", city: "Delhi", time: "10:30 AM", status: "On Time", terminal: "T1", gate: "A12" },
    { number: "6E 234", airline: "IndiGo", city: "Bangalore", time: "11:15 AM", status: "Delayed", terminal: "T2", gate: "B08" },
    { number: "SG 456", airline: "SpiceJet", city: "Hyderabad", time: "12:00 PM", status: "On Time", terminal: "T1", gate: "A15" },
    { number: "UK 789", airline: "Vistara", city: "Kolkata", time: "01:30 PM", status: "Boarding", terminal: "T2", gate: "B12" },
    { number: "G8 321", airline: "Go First", city: "Chennai", time: "02:45 PM", status: "On Time", terminal: "T1", gate: "A18" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Matching Dulles style */}
      <div className="relative pt-32 pb-16 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920')" }}>
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
              onClick={() => setActiveTab("arrivals")}
              className={`px-12 py-3 text-lg font-semibold tracking-wide transition-all ${
                activeTab === "arrivals"
                  ? "bg-gradient-to-r from-[#003366] to-[#0077B6] text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              ARRIVALS
            </button>
            <div className="w-12 h-12 rounded-full border-4 border-slate-300 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-slate-300"></div>
            </div>
            <button
              onClick={() => setActiveTab("departures")}
              className={`px-12 py-3 text-lg font-semibold tracking-wide transition-all ${
                activeTab === "departures"
                  ? "bg-gradient-to-r from-[#003366] to-[#0077B6] text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              DEPARTURES
            </button>
          </div>

          {/* Search Filters */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                  Flight Number ...
                </label>
                <input
                  type="text"
                  placeholder="Search flight"
                  className="w-full px-4 py-2.5 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
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
                  <option>All</option>
                  <option>Air India</option>
                  <option>IndiGo</option>
                  <option>SpiceJet</option>
                  <option>Vistara</option>
                  <option>Go First</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                >
                  <option>All</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Kolkata</option>
                  <option>Chennai</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                  Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                >
                  <option>Today</option>
                  <option>Tomorrow</option>
                  <option>This Week</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-slate-400 hover:bg-slate-500 text-white px-16 py-2.5 text-sm font-bold tracking-wider uppercase">
                CLEAR
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Status Table */}
      <div className="container px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-slate-600 mb-8 text-lg">
            Showing <span className="font-bold">{flights.length}</span> {activeTab === "arrivals" ? "arrivals" : "departures"} • 
            Updated just now
          </p>

          {/* Table */}
          <div className="bg-white border border-slate-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-200 text-sm font-bold text-slate-700 uppercase tracking-wide">
              <div className="px-4 py-4">Flight</div>
              <div className="px-4 py-4">Airline</div>
              <div className="px-4 py-4">{activeTab === "arrivals" ? "From" : "To"}</div>
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
                  className="grid grid-cols-7 border-b border-slate-100 hover:bg-slate-50 transition-colors text-slate-700"
                >
                  <div className="px-4 py-4 font-semibold text-[#0077B6]">{flight.number}</div>
                  <div className="px-4 py-4">{flight.airline}</div>
                  <div className="px-4 py-4 font-medium">{flight.city}</div>
                  <div className="px-4 py-4">{flight.time}</div>
                  <div className="px-4 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                        flight.status === "On Time"
                          ? "bg-green-100 text-green-700"
                          : flight.status === "Delayed"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {flight.status}
                    </span>
                  </div>
                  <div className="px-4 py-4">{flight.terminal}</div>
                  <div className="px-4 py-4 font-semibold">{flight.gate}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Message */}
          <div className="mt-8 p-6 bg-slate-50 border-l-4 border-[#0077B6]">
            <p className="text-slate-700 leading-relaxed">
              <span className="font-bold">Note:</span> Flight information is updated in real-time. 
              For the most accurate and up-to-date flight status, please check directly with your airline 
              or visit the airport information desk.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Flight;
