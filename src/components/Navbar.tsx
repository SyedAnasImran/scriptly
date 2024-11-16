"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="" className="text-2xl font-bold text-gray-800">
              Scriptly
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="#community"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Community
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#features"
              className="block text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="#community"
              className="block text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Community
            </Link>
            <Link
              href="#pricing"
              className="block text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="block text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
