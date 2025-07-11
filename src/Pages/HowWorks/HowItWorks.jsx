import React from "react";
import {
  FaClipboardCheck,
  FaBoxOpen,
  FaTruckMoving,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    title: "Booking Pick & Drop",
    description:
      "Schedule your parcel pickup through our platform with just a few clicks. Choose pickup time, location, and delivery destination easily.",
    icon: <FaClipboardCheck size={28} className="text-indigo-600" />,
  },
  {
    title: "Parcel Collection",
    description:
      "Our delivery agent collects the parcel from your specified address at the scheduled time, ensuring proper packaging and tagging.",
    icon: <FaBoxOpen size={28} className="text-indigo-600" />,
  },
  {
    title: "In-Transit & Tracking",
    description:
      "Your parcel is safely transported through our logistics network. Real-time tracking keeps you and your customer informed at every step.",
    icon: <FaTruckMoving size={28} className="text-indigo-600" />,
  },
  {
    title: "Final Delivery",
    description:
      "We deliver the parcel to the customer’s doorstep on time. You receive confirmation upon successful delivery or return if needed.",
    icon: <FaCheckCircle size={28} className="text-indigo-600" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          How It Works
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Our streamlined process ensures fast, safe, and reliable delivery for
          every shipment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
