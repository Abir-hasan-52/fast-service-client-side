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
  { name: "Daraz", src: logo1 },
  { name: "Evaly", src: logo2 },
  { name: "Pickaboo", src: logo3 },
  { name: "AjkerDeal", src: logo4 },
  { name: "Othoba", src: logo5 },
  { name: "Rokomari", src: logo6 },
  { name: "PriyoShop", src: logo7 },
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
