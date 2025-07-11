import React from "react";
import illustrator1 from "../../assets/illustrator/live-tracking.png";
import illustrator2 from "../../assets/illustrator/tiny-deliveryman.png";
import illustrator3 from "../../assets/illustrator/safe-delivery.png";


const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: illustrator1,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: illustrator2,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: illustrator3,
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-center gap-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-40 sm:w-48 md:w-52 lg:w-56 object-contain"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
