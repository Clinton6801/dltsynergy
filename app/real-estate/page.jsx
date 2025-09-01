'use client';
import React, { useState } from 'react';

const Realestate = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-gray-800 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-3xl font-bold text-blue-500">DLTSynergy</a>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4"></path>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-wrap justify-end space-x-2 md:space-x-8 text-sm md:text-base">
            <a href="/real-estate" className="text-yellow-400 hover:text-yellow-400 font-medium transition-colors duration-300">Real Estate</a>
            <a href="/education" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Education</a>
            <a href="/technology" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Technology</a>
            <a href="/agriculture" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Agriculture</a>
            <a href="/about-us" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">About Us</a>
            <a href="/contact" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed top-0 left-0 h-full w-full bg-gray-800 z-40 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-8 text-lg font-medium py-10">
          <a href="/real-estate" onClick={() => setIsMenuOpen(false)} className="text-yellow-400 hover:text-yellow-400 transition-colors duration-300">Real Estate</a>
          <a href="/education" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Education</a>
          <a href="/technology" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Technology</a>
          <a href="/agriculture" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Agriculture</a>
          <a href="/about-us" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">About Us</a>
          <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</a>
        </div>
      </div>

      <main className="pt-20">
        {/* Hero Section */}
        <header className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center p-6" style={{ backgroundImage: 'url("./re-bg.png")', backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">Innovative Real Estate Solutions</h1>
            <p className="text-base md:text-xl font-light max-w-3xl mx-auto">From residential properties to commercial developments, we're building the future of real estate with integrity and vision.</p>
          </div>
        </header>

        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Shaping Communities, Building Legacies</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                DLTSynergy's Real Estate division is at the forefront of modern property development. We specialize in creating spaces that not only meet the needs of today but also stand as a testament to quality and sustainable growth for generations to come. Our portfolio includes diverse projects that range from luxury residential complexes to state-of-the-art commercial hubs and impactful land development.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            {/* Residential Development */}
            <div className="flex flex-col md:flex-row items-center mb-20 md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="./re-residential.jpeg" alt="Residential Development" className="rounded-xl shadow-xl w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Residential Development</h3>
                <p className="text-gray-300 text-lg mb-4">
                  We craft residential properties that offer more than just a place to live. Our projects are designed to be vibrant communities, with a focus on modern amenities, sustainable living, and a sense of belonging. We handle everything from concept and design to construction and sales, ensuring every detail reflects our commitment to excellence.
                </p>
              </div>
            </div>

            {/* Commercial Properties */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-20 md:space-x-reverse md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="./re-commercial.jpeg" alt="Commercial Properties" className="rounded-xl shadow-xl w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Commercial Properties</h3>
                <p className="text-gray-300 text-lg mb-4">
                  Our commercial portfolio is built to support the future of business. We develop and manage cutting-edge office spaces, retail centers, and industrial facilities that are strategically located and designed for maximum efficiency. Our properties provide the perfect environment for companies to thrive and grow.
                </p>
              </div>
            </div>

            {/* Land Development */}
            <div className="flex flex-col md:flex-row items-center mb-20 md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="./re-land.jpeg" alt="Land Development" className="rounded-xl shadow-xl w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Land Development</h3>
                <p className="text-gray-300 text-lg mb-4">
                  We identify and acquire prime parcels of land, transforming them into valuable assets for future development. Our expert team navigates the complexities of zoning, permits, and infrastructure planning to ensure every project is set up for success from the ground up.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 md:py-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 DLTSynergy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Realestate;
