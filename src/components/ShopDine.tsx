import shopDine1 from "@/assets/shop-dine-1.jpg";
import shopDine2 from "@/assets/shop-dine-2.jpg";
import shopDine3 from "@/assets/shop-dine-3.jpg";
import shopDine4 from "@/assets/shop-dine-4.jpg";
import shopDine5 from "@/assets/shop-dine-5.jpg";

const ShopDine = () => {
  const images = [
    { src: shopDine1, alt: "Cafe Glory" },
    { src: shopDine2, alt: "Bracket Room" },
    { src: shopDine3, alt: "Restaurant Dining" },
    { src: shopDine4, alt: "Airport Shopping" },
    { src: shopDine5, alt: "Capitol Grounds Coffee" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-light text-slate-700 tracking-wide mb-3">
            SHOP & DINE
          </h2>
          <p className="text-lg text-slate-600">
            Looking for Something Local?
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="col-span-1 row-span-2">
            <div className="relative overflow-hidden rounded-lg h-full min-h-[400px]">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="col-span-1 row-span-2">
            <div className="relative overflow-hidden rounded-lg h-full min-h-[400px]">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="col-span-1 row-span-2">
            <div className="relative overflow-hidden rounded-lg h-full min-h-[400px]">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="col-span-1 row-span-2">
            <div className="relative overflow-hidden rounded-lg h-full min-h-[400px]">
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 row-span-1">
            <div className="relative overflow-hidden rounded-lg h-64 md:h-full md:min-h-[195px]">
              <img
                src={images[4].src}
                alt={images[4].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDine;
