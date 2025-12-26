"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "../constants";
import Navigation from "../components/Navigation";
import AppointmentButton from "../components/AppointmentButton";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);

  const handleServiceSelect = (service: typeof SERVICES[0]) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="services" />

      {/* Hero Section with Main Image */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={selectedService.image}
            alt={selectedService.title}
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white p-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedService.title}</h1>
          </div>
        </div>
      </section>

      {/* Main Content with Index and Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Side - Service Index */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Index</h2>
                <nav className="space-y-2">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition duration-300 ${
                        selectedService.id === service.id
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                      }`}
                    >
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={service.icon}
                          />
                        </svg>
                        <div>
                          <div className="font-medium">{service.title}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right Side - Service Information */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-xl p-8">
                {/* Service Header */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={selectedService.icon}
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedService.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{selectedService.description}</p>
                </div>

                {/* Service Image */}
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features & Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ready to experience {selectedService.title}?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our expert team is here to provide you with the best dental care in Jaipur. 
                    Schedule a consultation today to learn more about how we can help you achieve optimal oral health.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <AppointmentButton className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                      Book Appointment
                    </AppointmentButton>
                    <Link
                      href="#contact"
                      className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Other Services</h2>
            <p className="text-lg text-gray-600">Discover comprehensive dental care solutions tailored to your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.filter(service => service.id !== selectedService.id).slice(0, 3).map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:shadow-lg transition duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600 mr-3 group-hover:scale-110 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={service.icon}
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <span className="text-blue-600 font-medium text-sm hover:underline">
                  Learn More →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
