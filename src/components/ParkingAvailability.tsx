import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ParkingLot {
  name: string;
  total: number;
  available: number;
  status: string;
}

const ParkingAvailability = () => {
  const [parkingData, setParkingData] = useState<ParkingLot[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchParkingAvailability = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('get-parking-availability');
      
      if (error) throw error;
      setParkingData(data.data || []);
    } catch (error) {
      console.error('Error fetching parking availability:', error);
      toast({
        title: "Error",
        description: "Failed to fetch parking availability",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchParkingAvailability();
  }, [fetchParkingAvailability]);

  return (
    <div className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center text-foreground mb-4 tracking-wider">
          PARKING AVAILABILITY
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Real-time parking space availability across all lots
        </p>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {parkingData.map((lot, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary bg-white"
              >
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2">{lot.name}</h3>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <span className="text-sm font-semibold text-green-600">{lot.status}</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-3xl font-bold text-primary">{lot.available}</span>
                      <span className="text-sm text-muted-foreground">out of {lot.total}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">spaces available</div>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full transition-all duration-500"
                      style={{ width: `${(lot.available / lot.total) * 100}%` }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            onClick={fetchParkingAvailability}
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white transition-all hover:shadow-lg hover:scale-105 px-10 py-6 text-base font-semibold"
          >
            REFRESH AVAILABILITY
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            In the event that a facility fills, reservations will still be honored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParkingAvailability;
