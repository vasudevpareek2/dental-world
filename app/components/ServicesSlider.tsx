"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "../constants";

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out h-80"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {SERVICES.map((service, index) => (
          <div key={service.id} className="w-full flex-shrink-0 relative">
            <div className="relative h-80 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white p-8">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg md:text-xl mb-6 opacity-90">{service.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition duration-300 z-20"
        aria-label="Previous service"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition duration-300 z-20"
        aria-label="Next service"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {SERVICES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
