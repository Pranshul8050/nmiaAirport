import { useState } from "react";
import { Card } from "@/components/ui/card";
import { BookingModal } from "./BookingModal";
import hotelLuxury from "@/assets/hotel-luxury.jpg";
import carRental from "@/assets/car-rental.jpg";
import flightBooking from "@/assets/flight-booking.jpg";
import packageDeals from "@/assets/package-deals.jpg";
import localEvents from "@/assets/local-events.jpg";
import parkingGarage from "@/assets/parking-garage.jpg";

const services = [
  {
    key: 'hotels',
    title: "Hotels",
    description: "Book comfortable rooms with flexible cancellation and great rates.",
  },
  {
    key: 'cabs',
    title: "Cabs",
    description: "Book reliable airport transfers — sedan, SUV, or luxury vehicles.",
  },
  {
    key: 'flights',
    title: "Flights",
    description: "Search and compare flights from trusted carriers.",
  },
  {
    key: 'packages',
    title: "Packages",
    description: "Hand-picked vacation packages for every kind of traveler.",
  },
  {
    key: 'events',
    title: "Local Events",
    description: "Discover experiences and events happening near the airport.",
  },
  {
    key: 'parking',
    title: "Parking",
    description: "Reserve a guaranteed parking spot close to the terminal.",
  },
];

const ServiceCards = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{ type: 'hotel' | 'car' | 'flight' | 'package' | 'event' | 'parking'; image: string } | null>(null);

  const handleServiceClick = (type: 'hotel' | 'car' | 'flight' | 'package' | 'event' | 'parking', image: string) => {
    setSelectedService({ type, image });
    setModalOpen(true);
  };

  const serviceImages: Record<string, string> = {
    'Hotels': hotelLuxury,
    'Cars': carRental,
    'Flights': flightBooking,
    'Packages': packageDeals,
    'Local Events': localEvents,
    'Parking': parkingGarage
  };

  return (
    <>
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const typeMap: Record<string, 'hotel' | 'car' | 'flight' | 'package' | 'event' | 'parking'> = {
                'Hotels': 'hotel',
                'Cabs': 'car',
                'Flights': 'flight',
                'Packages': 'package',
                'Local Events': 'event',
                'Parking': 'parking'
              };

              const imageMap: Record<string, string> = {
                'Hotels': hotelLuxury,
                'Cabs': carRental,
                'Flights': flightBooking,
                'Packages': packageDeals,
                'Local Events': localEvents,
                'Parking': parkingGarage
              };

              return (
                <Card
                  key={index}
                  onClick={() => handleServiceClick(typeMap[service.title], imageMap[service.title])}
                  className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group border-0 shadow-md bg-white overflow-hidden"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full h-40 mb-4 rounded-lg overflow-hidden shadow-inner">
                      <img src={imageMap[service.title]} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 tracking-wide">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {selectedService && (
        <BookingModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          type={selectedService.type}
          image={selectedService.image}
        />
      )}
    </>
  );
};

export default ServiceCards;
