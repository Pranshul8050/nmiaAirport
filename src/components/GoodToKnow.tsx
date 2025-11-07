import { Shield, Wifi, HelpCircle, PawPrint } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Security Checks",
    description: "What to expect.",
    link: "#",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Stay connected on your travel",
    link: "#",
  },
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions?",
    description: "Did you know we have an FAQ section?",
    link: "#",
  },
  {
    icon: PawPrint,
    title: "Traveling with a Pet?",
    description: "Learn more about airport pet accommodations...",
    link: "#",
  },
];

const GoodToKnow = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-16 tracking-wider">GOOD TO KNOW</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="border-l-4 border-accent pl-6 hover:pl-8 transition-all group cursor-pointer">
              <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-bold text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoodToKnow;
