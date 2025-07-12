import React, { useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Rasel Ahamed",
    role: "CTO",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Sumaiya Khan",
    role: "UX Researcher",
    message:
      "A posture corrector supports posture and reduces back pain. Ideal for long workdays to keep you aligned and comfortable.",
  },
  {
    name: "Sadia Jahan",
    role: "Product Manager",
    message:
      "It helps reduce fatigue and discomfort by keeping you upright while working long hours.",
  },
  {
    name: "Rezaul Karim",
    role: "Logistics Head",
    message:
      "Very helpful tool for keeping my team energized and comfortable on the job.",
  },
  {
    name: "Mitu Chowdhury",
    role: "Sales Executive",
    message:
      "It's lightweight and effective — I feel the difference within an hour of using it.",
  },
];

const CustomerTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          What our customers are saying
        </h2>
        <p className="text-gray-600">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex gap-6 justify-center transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((item, i) => {
            const distance = Math.abs(i - activeIndex);
            const opacity =
              distance === 0
                ? "opacity-100 scale-100"
                : distance === 1
                ? "opacity-60 scale-95"
                : "opacity-0 scale-90 hidden sm:block";

            return (
              <div
                key={i}
                className={`bg-white rounded-xl shadow p-6 w-72 flex-shrink-0 text-center transform transition-all duration-300 ${opacity}`}
              >
                <FaQuoteLeft className="text-2xl text-indigo-400 mb-4 mx-auto" />
                <p className="text-gray-700 mb-6">{item.message}</p>
                <div className="border-t pt-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-indigo-900"></div>
                    <p className="font-semibold text-indigo-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={handlePrev}
            className="bg-white p-2 rounded-full shadow hover:bg-indigo-50"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-indigo-500 text-white p-2 rounded-full shadow hover:bg-indigo-600"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-indigo-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
