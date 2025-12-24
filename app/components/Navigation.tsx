"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentButton from "./AppointmentButton";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = "home" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#services", label: "Services", id: "services" },
    { href: "/treatments", label: "Treatments", id: "treatments" },
    { href: "/#gallery", label: "Gallery", id: "gallery" },
    { href: "/#testimonials", label: "Testimonials", id: "testimonials" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ];

  // Handle home page anchor links differently
  const getHref = (link: typeof navLinks[0]) => {
    if (link.id === "home") {
      return "/";
    }
    // If we're on home page, use anchor links, otherwise use full path
    if (currentPage === "home" && link.href.startsWith("/#")) {
      return link.href.substring(1); // Remove leading slash for anchor links
    }
    return link.href;
  };

  return (
    <nav className="fixed w-full bg-white bg-opacity-90 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600"
              onClick={closeMobileMenu}
            >
              Dental World
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={getHref(link)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === link.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <AppointmentButton className="ml-8 bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300">
              Book Appointment
            </AppointmentButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={getHref(link)}
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                currentPage === link.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-800 hover:bg-gray-50 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <div onClick={closeMobileMenu}>
              <AppointmentButton className="w-full bg-blue-600 text-white px-6 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition duration-300 text-center">
                Book Appointment
              </AppointmentButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

