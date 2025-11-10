/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Loader2, CheckCircle2, Plane } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const QuickActions = () => {
  const { toast } = useToast();
  const [flightNumber, setFlightNumber] = useState("");
  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [parkingLoading, setParkingLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("departures");
  
  const [parkingData, setParkingData] = useState({
    arrivalDate: "2025-11-02",
    arrivalTime: "13:00",
    departureDate: "2025-11-05",
    departureTime: "13:00",
    promoCode: ""
  });

  const fetchFlights = useCallback(async (type: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('get-flight-status', {
        body: { flightNumber, type }
      });
      
      if (error) throw error;
      setFlights(data.data || []);
    } catch (error) {
      console.error('Error fetching flights:', error);
      toast({
        title: "Error",
        description: "Failed to fetch flight data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }, [flightNumber, toast]);

  useEffect(() => {
    fetchFlights(activeTab);
  }, [activeTab, fetchFlights]);

  const handleParkingReservation = async () => {
    setParkingLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-parking-reservation', {
        body: {
          arrivalDate: parkingData.arrivalDate,
          arrivalTime: parkingData.arrivalTime,
          departureDate: parkingData.departureDate,
          departureTime: parkingData.departureTime,
          promoCode: parkingData.promoCode
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Success!",
        description: "Parking reserved successfully",
      });
      
      setParkingData({
        arrivalDate: "2025-11-02",
        arrivalTime: "13:00",
        departureDate: "2025-11-05",
        departureTime: "13:00",
        promoCode: ""
      });
    } catch (error) {
      console.error('Error creating reservation:', error);
      toast({
        title: "Error",
        description: "Failed to reserve parking",
        variant: "destructive"
      });
    } finally {
      setParkingLoading(false);
    }
  };

  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [
    'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583415032420-e2ba9c0af5c1?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=2070&auto=format&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative -mt-24 z-20 overflow-hidden">
      {/* Animated Background Image Layer */}
      <div className="absolute inset-0">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${bg}')`,
              opacity: bgIndex === index ? 1 : 0,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Flight Status */}
          <Card className="relative border border-white/10 p-6 hover:shadow-2xl hover:shadow-black/30 transition-all duration-500 animate-fade-in group hover:scale-[1.02] overflow-hidden backdrop-blur-xl bg-slate-900/40">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-white/10 rounded backdrop-blur-sm">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Flight Status</h3>
              </div>
            <Input
              placeholder="ENTER FLIGHT NUMBER"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              className="mb-4 bg-black/20 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 transition-all focus:border-white/50 focus:ring-1 focus:ring-white/30 focus:bg-black/30"
            />
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-black/20 backdrop-blur-sm border border-white/10 p-1">
                <TabsTrigger 
                  value="departures" 
                  className="data-[state=active]:bg-white data-[state=active]:text-slate-900 transition-all duration-300 data-[state=active]:font-bold data-[state=active]:shadow-lg text-white/90 font-semibold"
                >
                  DEPARTURES
                </TabsTrigger>
                <TabsTrigger 
                  value="arrivals" 
                  className="data-[state=active]:bg-white data-[state=active]:text-slate-900 transition-all duration-300 data-[state=active]:font-bold data-[state=active]:shadow-lg text-white/90 font-semibold"
                >
                  ARRIVALS
                </TabsTrigger>
              </TabsList>
              <TabsContent value="departures" className="text-white space-y-2">
                {loading ? (
                  <div className="flex justify-center items-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-white" />
                  </div>
                ) : (
                  flights.map((flight, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center py-3 border-b border-white/20 hover:bg-white/10 transition-all duration-200 px-2 rounded"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-1">
                        <span className="font-medium text-white">{flight.time} {flight.destination}</span>
                        <span className="text-white/80 ml-2">- {flight.flightNumber}</span>
                      </div>
                      <div className="text-right">
                        <span className="block font-bold text-white">{flight.gate}</span>
                        <span className="text-sm text-green-300 font-semibold">{flight.status}</span>
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
              <TabsContent value="arrivals" className="text-white space-y-2">
                {loading ? (
                  <div className="flex justify-center items-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-white" />
                  </div>
                ) : (
                  flights.map((flight, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center py-3 border-b border-white/20 hover:bg-white/10 transition-all duration-200 px-2 rounded"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-1">
                        <span className="font-medium text-white">{flight.time} {flight.origin}</span>
                        <span className="text-white/80 ml-2">- {flight.flightNumber}</span>
                      </div>
                      <div className="text-right">
                        <span className="block font-bold text-white">{flight.gate}</span>
                        <span className="text-sm text-green-300 font-semibold">{flight.status}</span>
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
            </Tabs>
            <Button 
              className="w-full mt-4 bg-white/90 hover:bg-white text-slate-900 transition-all font-bold tracking-wide shadow-lg hover:shadow-xl"
              onClick={() => fetchFlights(activeTab)}
            >
              VIEW TODAY'S FLIGHTS
            </Button>
            </div>
          </Card>

          {/* Reserve Parking */}
          <Card className="relative border border-white/10 p-6 hover:shadow-2xl hover:shadow-black/30 transition-all duration-500 animate-fade-in group hover:scale-[1.02] overflow-hidden backdrop-blur-xl bg-slate-900/40" style={{ animationDelay: "200ms" }}>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-white/10 rounded backdrop-blur-sm">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Reserve Parking</h3>
              </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded backdrop-blur-sm">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
                <Input
                  type="date"
                  value={parkingData.arrivalDate}
                  onChange={(e) => setParkingData({...parkingData, arrivalDate: e.target.value})}
                  className="bg-black/20 backdrop-blur-sm border-white/20 text-white transition-all focus:border-white/50 focus:ring-1 focus:ring-white/30 focus:bg-black/30"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <Input
                  type="time"
                  value={parkingData.arrivalTime}
                  onChange={(e) => setParkingData({...parkingData, arrivalTime: e.target.value})}
                  className="bg-black/20 backdrop-blur-sm border-white/20 text-white transition-all focus:border-white/50 focus:ring-1 focus:ring-white/30 focus:bg-black/30"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded backdrop-blur-sm">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
                <Input
                  type="date"
                  value={parkingData.departureDate}
                  onChange={(e) => setParkingData({...parkingData, departureDate: e.target.value})}
                  className="bg-black/20 backdrop-blur-sm border-white/20 text-white transition-all focus:border-white/50 focus:ring-1 focus:ring-white/30 focus:bg-black/30"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <Input
                  type="time"
                  value={parkingData.departureTime}
                  onChange={(e) => setParkingData({...parkingData, departureTime: e.target.value})}
                  className="bg-black/20 backdrop-blur-sm border-white/20 text-white transition-all focus:border-white/50 focus:ring-1 focus:ring-white/30 focus:bg-black/30"
                />
              </div>
              <Input
                placeholder="Promo/Voucher Code"
                value={parkingData.promoCode}
                onChange={(e) => setParkingData({...parkingData, promoCode: e.target.value})}
                className="bg-black/20 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 transition-all focus:border-white/50 focus:ring-1 focus:ring-white/30 focus:bg-black/30"
              />
              <Button 
                className="w-full bg-white/90 hover:bg-white text-slate-900 font-bold transition-all tracking-wide shadow-lg hover:shadow-xl"
                onClick={handleParkingReservation}
                disabled={parkingLoading}
              >
                {parkingLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    RESERVING...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    RESERVE NOW FOR BEST RATES
                  </>
                )}
              </Button>
              <p className="text-sm text-white text-center italic font-medium">
                Guarantee your parking space at the lowest possible rate.
              </p>
            </div>
            </div>
          </Card>

          {/* Parking Availability */}
          <Card className="relative border border-white/10 p-6 hover:shadow-2xl hover:shadow-black/30 transition-all duration-500 animate-fade-in group hover:scale-[1.02] overflow-hidden backdrop-blur-xl bg-slate-900/40" style={{ animationDelay: "400ms" }}>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-white/10 rounded backdrop-blur-sm">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Parking Availability</h3>
              </div>
            <div className="space-y-3">
              {[
                { name: "Valet", available: "OPEN", total: "2022" },
                { name: "Terminal Lot", available: "629 out of 2022", total: "Available" },
                { name: "Garage 1", available: "646 out of 4508", total: "Available" },
                { name: "Garage 2", available: "567 out of 3727", total: "Available" },
                { name: "Economy Lot", available: "2255 out of 11431", total: "Available" },
              ].map((lot, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-white/15 hover:bg-white/5 transition-all duration-200 px-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-white font-semibold">{lot.name}</span>
                  <span className="text-right">
                    <span className="text-green-400 font-bold block text-sm">OPEN</span>
                    <span className="text-white/70 text-xs font-medium">{lot.available} {lot.total}</span>
                  </span>
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all font-bold tracking-wide"
            >
              LEARN MORE
            </Button>
            <p className="text-sm text-white text-center mt-4 italic font-medium">
              In the event that a facility fills, reservations will still be honored.
            </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
