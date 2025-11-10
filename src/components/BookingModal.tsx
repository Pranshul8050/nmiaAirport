/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type BookingType = "hotel" | "car" | "flight" | "package" | "event" | "parking";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: BookingType;
  image?: string;
}

export const BookingModal = ({ open, onOpenChange, type, image }: BookingModalProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState<any>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let functionName = '';
      let payload: any = {};

      switch (type) {
        case 'hotel':
          functionName = 'book-hotel';
          payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            checkInDate: formData.checkInDate,
            checkOutDate: formData.checkOutDate,
            guests: parseInt(formData.guests),
            roomType: formData.roomType,
            specialRequests: formData.specialRequests
          };
          break;
        case 'car':
          functionName = 'book-car';
          payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            pickupDate: formData.pickupDate,
            pickupTime: formData.pickupTime,
            returnDate: formData.returnDate,
            returnTime: formData.returnTime,
            carType: formData.carType
          };
          break;
        case 'flight':
          functionName = 'book-flight';
          payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            departureCity: formData.departureCity,
            arrivalCity: formData.arrivalCity,
            departureDate: formData.departureDate,
            returnDate: formData.returnDate,
            passengers: parseInt(formData.passengers),
            flightClass: formData.flightClass
          };
          break;
        case 'package':
          functionName = 'book-package';
          payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            packageType: formData.packageType,
            destination: formData.destination,
            travelDate: formData.travelDate,
            durationDays: parseInt(formData.durationDays),
            travelers: parseInt(formData.travelers)
          };
          break;
        case 'event':
          functionName = 'book-event';
          payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            eventName: formData.eventName,
            eventDate: formData.eventDate,
            tickets: parseInt(formData.tickets)
          };
          break;
      }

      const { data, error } = await supabase.functions.invoke(functionName, {
        body: payload
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: data.message || "Booking confirmed successfully",
      });

      setFormData({});
      onOpenChange(false);
    } catch (error: any) {
      console.error('Booking error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to complete booking",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    switch (type) {
      case 'hotel':
        return (
          <>
            {image && <img src={image} alt="Hotel" className="w-full h-48 object-cover rounded-lg mb-6" />}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" value={formData.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div>
                <Label>Phone</Label>
                <Input value={formData.phone || ''} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              </div>
              <div>
                <Label>Room Type</Label>
                <Select value={formData.roomType} onValueChange={(value) => setFormData({...formData, roomType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select room" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Room</SelectItem>
                    <SelectItem value="deluxe">Deluxe Room</SelectItem>
                    <SelectItem value="suite">Suite</SelectItem>
                    <SelectItem value="presidential">Presidential Suite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Check-in Date</Label>
                <Input type="date" value={formData.checkInDate || ''} onChange={(e) => setFormData({...formData, checkInDate: e.target.value})} required />
              </div>
              <div>
                <Label>Check-out Date</Label>
                <Input type="date" value={formData.checkOutDate || ''} onChange={(e) => setFormData({...formData, checkOutDate: e.target.value})} required />
              </div>
              <div className="col-span-2">
                <Label>Number of Guests</Label>
                <Input type="number" min="1" value={formData.guests || ''} onChange={(e) => setFormData({...formData, guests: e.target.value})} required />
              </div>
              <div className="col-span-2">
                <Label>Special Requests</Label>
                <Textarea value={formData.specialRequests || ''} onChange={(e) => setFormData({...formData, specialRequests: e.target.value})} />
              </div>
            </div>
          </>
        );

      case 'car':
        return (
          <>
            {image && <img src={image} alt="Cab" className="w-full h-48 object-cover rounded-lg mb-6" />}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" value={formData.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div>
                <Label>Phone</Label>
                <Input value={formData.phone || ''} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              </div>
              <div>
                <Label>Cab Type</Label>
                <Select value={formData.carType} onValueChange={(value) => setFormData({...formData, carType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cab type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="premium">Premium Sedan</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Pickup Date</Label>
                <Input type="date" value={formData.pickupDate || ''} onChange={(e) => setFormData({...formData, pickupDate: e.target.value})} required />
              </div>
              <div>
                <Label>Pickup Time</Label>
                <Input type="time" value={formData.pickupTime || ''} onChange={(e) => setFormData({...formData, pickupTime: e.target.value})} required />
              </div>
              <div>
                <Label>Return Date</Label>
                <Input type="date" value={formData.returnDate || ''} onChange={(e) => setFormData({...formData, returnDate: e.target.value})} required />
              </div>
              <div>
                <Label>Return Time</Label>
                <Input type="time" value={formData.returnTime || ''} onChange={(e) => setFormData({...formData, returnTime: e.target.value})} required />
              </div>
            </div>
          </>
        );

      case 'flight':
        return (
          <>
            {image && <img src={image} alt="Flight" className="w-full h-48 object-cover rounded-lg mb-6" />}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" value={formData.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div>
                <Label>Phone</Label>
                <Input value={formData.phone || ''} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              </div>
              <div>
                <Label>Class</Label>
                <Select value={formData.flightClass} onValueChange={(value) => setFormData({...formData, flightClass: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="premium">Premium Economy</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="first">First Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>From</Label>
                <Input value={formData.departureCity || ''} onChange={(e) => setFormData({...formData, departureCity: e.target.value})} placeholder="Departure City" required />
              </div>
              <div>
                <Label>To</Label>
                <Input value={formData.arrivalCity || ''} onChange={(e) => setFormData({...formData, arrivalCity: e.target.value})} placeholder="Arrival City" required />
              </div>
              <div>
                <Label>Departure Date</Label>
                <Input type="date" value={formData.departureDate || ''} onChange={(e) => setFormData({...formData, departureDate: e.target.value})} required />
              </div>
              <div>
                <Label>Return Date (Optional)</Label>
                <Input type="date" value={formData.returnDate || ''} onChange={(e) => setFormData({...formData, returnDate: e.target.value})} />
              </div>
              <div className="col-span-2">
                <Label>Passengers</Label>
                <Input type="number" min="1" value={formData.passengers || ''} onChange={(e) => setFormData({...formData, passengers: e.target.value})} required />
              </div>
            </div>
          </>
        );

      case 'package':
        return (
          <>
            {image && <img src={image} alt="Package" className="w-full h-48 object-cover rounded-lg mb-6" />}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" value={formData.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div>
                <Label>Phone</Label>
                <Input value={formData.phone || ''} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              </div>
              <div>
                <Label>Package Type</Label>
                <Select value={formData.packageType} onValueChange={(value) => setFormData({...formData, packageType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beach">Beach Escape</SelectItem>
                    <SelectItem value="adventure">Adventure Tour</SelectItem>
                    <SelectItem value="cultural">Cultural Heritage</SelectItem>
                    <SelectItem value="luxury">Luxury Retreat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Destination</Label>
                <Input value={formData.destination || ''} onChange={(e) => setFormData({...formData, destination: e.target.value})} required />
              </div>
              <div>
                <Label>Travel Date</Label>
                <Input type="date" value={formData.travelDate || ''} onChange={(e) => setFormData({...formData, travelDate: e.target.value})} required />
              </div>
              <div>
                <Label>Duration (Days)</Label>
                <Input type="number" min="1" value={formData.durationDays || ''} onChange={(e) => setFormData({...formData, durationDays: e.target.value})} required />
              </div>
              <div>
                <Label>Number of Travelers</Label>
                <Input type="number" min="1" value={formData.travelers || ''} onChange={(e) => setFormData({...formData, travelers: e.target.value})} required />
              </div>
            </div>
          </>
        );

      case 'event':
        return (
          <>
            {image && <img src={image} alt="Event" className="w-full h-48 object-cover rounded-lg mb-6" />}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" value={formData.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div>
                <Label>Phone</Label>
                <Input value={formData.phone || ''} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              </div>
              <div>
                <Label>Event Name</Label>
                <Input value={formData.eventName || ''} onChange={(e) => setFormData({...formData, eventName: e.target.value})} placeholder="e.g., Mumbai Festival" required />
              </div>
              <div>
                <Label>Event Date</Label>
                <Input type="date" value={formData.eventDate || ''} onChange={(e) => setFormData({...formData, eventDate: e.target.value})} required />
              </div>
              <div>
                <Label>Number of Tickets</Label>
                <Input type="number" min="1" value={formData.tickets || ''} onChange={(e) => setFormData({...formData, tickets: e.target.value})} required />
              </div>
            </div>
          </>
        );
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'hotel': return 'Reserve a Room';
      case 'car': return 'Book a Cab';
      case 'flight': return 'Book a Flight';
      case 'package': return 'Book a Package';
      case 'event': return 'Book Event Tickets';
      case 'parking': return 'Reserve Parking';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">{getTitle()}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {renderForm()}
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold"
            disabled={loading}
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Confirm Reservation'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
