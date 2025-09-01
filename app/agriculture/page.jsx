'use client';

import React, { useState } from 'react';

const App = () => {
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
            <a href="/real-estate" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Real Estate</a>
            <a href="/education" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Education</a>
            <a href="/technology" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Technology</a>
            <a href="/agriculture" className="text-yellow-400 hover:text-yellow-400 font-medium transition-colors duration-300">Agriculture</a>
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
          <a href="/real-estate" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Real Estate</a>
          <a href="/education" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Education</a>
          <a href="/technology" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Technology</a>
          <a href="/agriculture" onClick={() => setIsMenuOpen(false)} className="text-yellow-400 hover:text-yellow-400 transition-colors duration-300">Agriculture</a>
          <a href="/about-us" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">About Us</a>
          <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</a>
        </div>
      </div>

      <main className="pt-20">
        {/* Hero Section */}
        <header className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center p-6" style={{ backgroundImage: 'url("agr-bg.png")', backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">Cultivating Growth, Harvesting Innovation</h1>
            <p className="text-base md:text-xl font-light max-w-3xl mx-auto">We are pioneering a new era of agriculture through technology, sustainability, and strategic agribusiness solutions.</p>
          </div>
        </header>

        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">A Modern Approach to Sustainable Farming</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                DLTSynergy's Agriculture division is committed to revolutionizing food production. We integrate advanced technologies with sustainable practices to enhance crop yields, optimize resource management, and build resilient food systems for the future.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            {/* Sustainable Farming & Modern Agribusiness */}
            <div className="flex flex-col md:flex-row items-center mb-20 md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="./agr-mod.jpeg" alt="Sustainable Farming" className="rounded-xl shadow-xl w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Sustainable Farming & Modern Agribusiness</h3>
                <p className="text-gray-300 text-lg mb-4">
                  We develop and implement sustainable farming solutions that reduce environmental impact while maximizing productivity. Our agribusiness services help farmers and companies adopt smart practices for long-term profitability and ecological health.
                </p>
              </div>
            </div>

            {/* Supply Chain Management */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-20 md:space-x-reverse md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="./agr-supply.png" alt="Supply Chain Management" className="rounded-xl shadow-xl w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Supply Chain Management</h3>
                <p className="text-gray-300 text-lg mb-4">
                  Our technology-driven solutions optimize the agricultural supply chain from farm to fork. We help clients improve logistics, reduce waste, and ensure product quality and traceability, creating a more efficient and transparent food system.
                </p>
              </div>
            </div>

            {/* Agribusiness Consulting */}
            <div className="flex flex-col md:flex-row items-center mb-20 md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="./agr-cons.jpg" alt="Agribusiness Consulting" className="rounded-xl shadow-xl w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Agribusiness Consulting</h3>
                <p className="text-gray-300 text-lg mb-4">
                  We offer expert consulting services to help agricultural businesses thrive. Our team provides strategic guidance on market analysis, operational efficiency, and the adoption of modern farming technologies to boost profitability.
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

export default App;
