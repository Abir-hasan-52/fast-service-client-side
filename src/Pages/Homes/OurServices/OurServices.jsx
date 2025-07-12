import React from "react";
import {
  FaTruck,
  FaGlobeAsia,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaUndo,
} from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FaTruck size={30} className="text-indigo-600" />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FaGlobeAsia size={30} className="text-indigo-600" />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FaWarehouse size={30} className="text-indigo-600" />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FaMoneyBillWave size={30} className="text-indigo-600" />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FaBuilding size={30} className="text-indigo-600" />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FaUndo size={30} className="text-indigo-600" />,
  },
];

const OurServices = () => {
  return (
    <div className="max-w-7xl bg-[#03373D] rounded-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
        We provide fast and secure delivery services across Bangladesh,
        including same-day express options in major cities. From
        cash-on-delivery to fulfillment and corporate logistics, our solutions
        are built to support businesses of all sizes. 
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border hover:border-indigo-500 group hover:bg-emerald-300 "
          >
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
