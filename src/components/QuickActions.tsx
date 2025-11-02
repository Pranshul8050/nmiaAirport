import { useState, useEffect } from "react";
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

  useEffect(() => {
    fetchFlights(activeTab);
  }, [activeTab]);

  const fetchFlights = async (type: string) => {
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
  };

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

  return (
    <div className="bg-dark-navy relative -mt-24 z-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Flight Status */}
          <Card className="bg-navy border-0 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-primary animate-pulse-slow" />
              <h3 className="text-xl font-semibold text-white">Flight Status</h3>
            </div>
            <Input
              placeholder="ENTER FLIGHT NUMBER"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              className="mb-4 bg-dark-navy border-muted text-white placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-primary transition-all">
                <TabsTrigger 
                  value="departures" 
                  className="data-[state=active]:bg-white data-[state=active]:text-primary transition-all duration-300 data-[state=active]:shadow-lg"
                >
                  DEPARTURES
                </TabsTrigger>
                <TabsTrigger 
                  value="arrivals" 
                  className="data-[state=active]:bg-white data-[state=active]:text-primary transition-all duration-300 data-[state=active]:shadow-lg"
                >
                  ARRIVALS
                </TabsTrigger>
              </TabsList>
              <TabsContent value="departures" className="text-white space-y-2">
                {loading ? (
                  <div className="flex justify-center items-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : (
                  flights.map((flight, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center py-3 border-b border-muted hover:bg-dark-navy/50 transition-all duration-200 px-2 rounded"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-1">
                        <span className="font-medium">{flight.time} {flight.destination}</span>
                        <span className="text-muted-foreground ml-2">- {flight.flightNumber}</span>
                      </div>
                      <div className="text-right">
                        <span className="block font-semibold text-primary">{flight.gate}</span>
                        <span className="text-sm text-green-400">{flight.status}</span>
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
              <TabsContent value="arrivals" className="text-white space-y-2">
                {loading ? (
                  <div className="flex justify-center items-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : (
                  flights.map((flight, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center py-3 border-b border-muted hover:bg-dark-navy/50 transition-all duration-200 px-2 rounded"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-1">
                        <span className="font-medium">{flight.time} {flight.origin}</span>
                        <span className="text-muted-foreground ml-2">- {flight.flightNumber}</span>
                      </div>
                      <div className="text-right">
                        <span className="block font-semibold text-primary">{flight.gate}</span>
                        <span className="text-sm text-green-400">{flight.status}</span>
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
            </Tabs>
            <Button 
              className="w-full mt-4 bg-dark-navy hover:bg-dark-navy/80 border border-muted text-white transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20"
              onClick={() => fetchFlights(activeTab)}
            >
              VIEW TODAY'S FLIGHTS
            </Button>
          </Card>

          {/* Reserve Parking */}
          <Card className="bg-navy border-0 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-semibold text-white mb-4">Reserve Parking</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <Input
                  type="date"
                  value={parkingData.arrivalDate}
                  onChange={(e) => setParkingData({...parkingData, arrivalDate: e.target.value})}
                  className="bg-dark-navy border-muted text-white transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <Input
                  type="time"
                  value={parkingData.arrivalTime}
                  onChange={(e) => setParkingData({...parkingData, arrivalTime: e.target.value})}
                  className="bg-dark-navy border-muted text-white transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <Input
                  type="date"
                  value={parkingData.departureDate}
                  onChange={(e) => setParkingData({...parkingData, departureDate: e.target.value})}
                  className="bg-dark-navy border-muted text-white transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <Input
                  type="time"
                  value={parkingData.departureTime}
                  onChange={(e) => setParkingData({...parkingData, departureTime: e.target.value})}
                  className="bg-dark-navy border-muted text-white transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Input
                placeholder="Promo/Voucher Code"
                value={parkingData.promoCode}
                onChange={(e) => setParkingData({...parkingData, promoCode: e.target.value})}
                className="bg-dark-navy border-muted text-white placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]"
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
              <p className="text-sm text-white text-center italic">
                Guarantee your parking space at the lowest possible rate.
              </p>
            </div>
          </Card>

          {/* Parking Availability */}
          <Card className="bg-navy border-0 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl font-semibold text-white mb-4">Parking Availability</h3>
            <div className="space-y-3">
              {[
                { name: "Valet", available: "OPEN", total: "2022" },
                { name: "Terminal Lot", available: "445 out of 2022", total: "Available" },
                { name: "Garage 1", available: "491 out of 4508", total: "Available" },
                { name: "Garage 2", available: "1090 out of 3727", total: "Available" },
                { name: "Economy Lot", available: "3699 out of 11431", total: "Available" },
              ].map((lot, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-muted hover:bg-dark-navy/50 transition-all duration-200 px-2 rounded group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-white font-medium group-hover:text-primary transition-colors">{lot.name}</span>
                  <span className="text-right">
                    <span className="text-green-400 font-semibold block animate-pulse-slow">OPEN</span>
                    <span className="text-white text-sm">{lot.available} {lot.total}</span>
                  </span>
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4 bg-transparent border-white text-white hover:bg-white hover:text-navy transition-all hover:shadow-lg"
            >
              LEARN MORE
            </Button>
            <p className="text-sm text-white text-center mt-4 italic">
              In the event that a facility fills, reservations will still be honored.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
