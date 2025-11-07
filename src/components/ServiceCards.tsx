import { Card } from "@/components/ui/card";
import { Hotel, Car, Plane, Package, Calendar as CalendarIcon, MapPin } from "lucide-react";

const services = [
  {
    icon: Hotel,
    title: "BOOK HOTELS",
    description: "GREAT DEALS ON HOTELS WORLDWIDE",
    color: "text-primary",
  },
  {
    icon: Car,
    title: "RENT A CAR",
    description: "GET EXPRESS DEALS ON RENTAL CARS",
    color: "text-primary",
  },
  {
    icon: Plane,
    title: "BOOK FLIGHTS",
    description: "COMPARE THOUSANDS OF FLIGHT DEALS",
    color: "text-primary",
  },
  {
    icon: Package,
    title: "BOOK PACKAGES",
    description: "GREAT DEALS ON VACATION PACKAGES",
    color: "text-primary",
  },
  {
    icon: CalendarIcon,
    title: "SEARCH LOCAL EVENTS",
    description: "SEE THINGS TO DO AROUND MUMBAI",
    color: "text-primary",
  },
  {
    icon: MapPin,
    title: "RESERVE PARKING",
    description: "RESERVE ONLINE IN ADVANCE FOR THE BEST DEAL",
    color: "text-primary",
  },
];

const ServiceCards = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group border-0 shadow-md bg-white"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className={`h-14 w-14 ${service.color} group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-3 tracking-wide">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
