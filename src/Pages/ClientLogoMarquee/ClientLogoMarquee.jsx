import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../assets/brands/amazon.png";
import logo2 from "../../assets/brands/amazon_vector.png";
import logo3 from "../../assets/brands/casio.png";
import logo4 from "../../assets/brands/moonstar.png";
import logo5 from "../../assets/brands/randstad.png";
import logo6 from "../../assets/brands/start-people 1.png";
import logo7 from "../../assets/brands/start.png";
//  Example brand logos (replace with your actual logo URLs)
const brands = [
  { name: "amazon", src: logo1 },
  { name: "amazon_vector", src: logo2 },
  { name: "casio", src: logo3 },
  { name: "moonstar", src: logo4 },
  { name: "randstad", src: logo5 },
  { name: "start-people ", src: logo6 },
  { name: "start", src: logo7 },
];

const ClientLogoMarquee = () => {
  return (
    <div className="py-10 mb-12">
      <h2 className="text-3xl font-bold  text-center mb-6 pb-12">
        Brands Who Trust Us
      </h2>
      <Marquee gradient={false} speed={50}>
        {brands.map((brand, idx) => (
          <div key={idx} className="mx-24 flex items-center">
            <img
              src={brand.src}
              alt={brand.name}
              className="h-6 w-auto "
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientLogoMarquee;
