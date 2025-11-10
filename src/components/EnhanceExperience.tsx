import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import travelerImage from "@/assets/traveler-happy.png";

const EnhanceExperience = () => {
  const services = [
    {
      id: 1,
      title: "Hotels",
      description: "Book comfortable rooms with flexible cancellation and great rates.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
      affiliateLink: "#" // Add affiliate link later
    },
    {
      id: 2,
      title: "Cabs",
      description: "Book reliable airport transfers — sedan, SUV, or luxury vehicles.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
      affiliateLink: "#" // Add affiliate link later
    },
    {
      id: 3,
      title: "Flights",
      description: "Search and compare flights from trusted carriers.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop",
      affiliateLink: "#" // Add affiliate link later
    },
    {
      id: 4,
      title: "Packages",
      description: "Hand-picked vacation packages for every kind of traveler.",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2026&auto=format&fit=crop",
      affiliateLink: "#" // Add affiliate link later
    },
    {
      id: 5,
      title: "Local Events",
      description: "Discover experiences and events happening near the airport.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
      affiliateLink: "#" // Add affiliate link later
    },
    {
      id: 6,
      title: "Parking",
      description: "Reserve a guaranteed parking spot close to the terminal.",
      image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2070&auto=format&fit=crop",
      affiliateLink: "#" // Add affiliate link later
    },
  ];

  const handleCardClick = (affiliateLink: string) => {
    // This will be used to redirect to affiliate links later
    if (affiliateLink !== "#") {
      window.location.href = affiliateLink;
    }
  };

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Services Grid - 3x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer bg-white shadow-md hover:shadow-2xl transition-all duration-300"
              onClick={() => handleCardClick(service.affiliateLink)}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-700 mb-4 tracking-wide uppercase">
            Enhance Your Experience
          </h2>
          <p className="text-slate-600 text-lg">
            Browse these quick links to explore the essentials at NMIA:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={travelerImage}
              alt="Happy travelers at airport"
              className="w-full h-auto"
            />
          </div>

          {/* Accordion */}
          <div className="order-1 lg:order-2">
            <Accordion type="single" collapsible className="w-full space-y-0">
              <AccordionItem value="flying-out" className="border-0">
                <AccordionTrigger className="bg-slate-200 text-slate-700 px-6 py-5 hover:bg-slate-300 text-base font-semibold [&[data-state=open]]:bg-[#0077B6] [&[data-state=open]]:text-white transition-colors">
                  Flying Out
                </AccordionTrigger>
                <AccordionContent className="bg-slate-50 px-6 py-6 border-0">
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Private Pick up</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Airport Map</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Parking</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Arrivals & Departures</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="flying-in" className="border-0">
                <AccordionTrigger className="bg-slate-200 text-slate-700 px-6 py-5 hover:bg-slate-300 text-base font-semibold [&[data-state=open]]:bg-[#0077B6] [&[data-state=open]]:text-white transition-colors">
                  Flying In
                </AccordionTrigger>
                <AccordionContent className="bg-slate-50 px-6 py-6 border-0">
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Baggage Claim</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Ground Transportation</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Customs & Immigration</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Airport Hotels</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="connecting" className="border-0">
                <AccordionTrigger className="bg-slate-200 text-slate-700 px-6 py-5 hover:bg-slate-300 text-base font-semibold [&[data-state=open]]:bg-[#0077B6] [&[data-state=open]]:text-white transition-colors">
                  Connecting
                </AccordionTrigger>
                <AccordionContent className="bg-slate-50 px-6 py-6 border-0">
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Transfer Procedures</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Minimum Connect Time</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Transit Lounges</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Visa Requirements</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="meet-greet" className="border-0">
                <AccordionTrigger className="bg-slate-200 text-slate-700 px-6 py-5 hover:bg-slate-300 text-base font-semibold [&[data-state=open]]:bg-[#0077B6] [&[data-state=open]]:text-white transition-colors">
                  Meet & Greet
                </AccordionTrigger>
                <AccordionContent className="bg-slate-50 px-6 py-6 border-0">
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Private Pick up</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Airport Map</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Parking</a></li>
                    <li><a href="#" className="text-[#0077B6] hover:underline text-sm">Arrivals & Departures</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhanceExperience;
