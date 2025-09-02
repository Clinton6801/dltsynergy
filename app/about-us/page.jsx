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
            <a href="/agriculture" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300">Agriculture</a>
            <a href="/about-us" className="text-yellow-400 hover:text-yellow-400 font-medium transition-colors duration-300">About Us</a>
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
          <a href="/agriculture" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Agriculture</a>
          <a href="/about-us" onClick={() => setIsMenuOpen(false)} className="text-yellow-400 hover:text-yellow-400 transition-colors duration-300">About Us</a>
          <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</a>
        </div>
      </div>

      <main className="pt-20">
        {/* Hero Section */}
        <header className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center p-6" style={{ backgroundImage: 'url("./about.jpg")', backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">Innovating with Integrity</h1>
            <p className="text-base md:text-xl font-light max-w-3xl mx-auto">We are a team of dedicated professionals committed to building a better future through technology, sustainability, and visionary leadership.</p>
          </div>
        </header>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                At DLTSynergy, our mission is to leverage cutting-edge solutions to drive transformative change across key industries. We believe in creating sustainable value for our clients, partners, and the communities we serve.
              </p>
            </div>
          </div>
        </section>
        {/* Our Vission Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                At DLTSynergy, Our vision is to be the leading force in global technological advancement, creating a future where our solutions empower industries and communities to thrive sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
              <div className="md:w-1/3 mb-8 md:mb-0 text-center">
                <img src="./gregitah.jpg" alt="CEO's Photo" className="rounded-full shadow-xl w-64 h-64 mx-auto object-cover" />
                <h3 className="text-3xl font-bold text-yellow-400 mt-6">AMB. GREGORY ITAH (PhD)</h3>
                <p className="text-lg text-gray-400">Chief Executive Officer</p>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-gray-300 text-lg mb-4">
                  Amb. Gregory is the visionary founder and CEO of DLTSynergy. With over two decades of experience in technology and business development, He has successfully led numerous ventures to market leadership. His philosophy centers on the power of innovation, integrity, and collaboration to solve complex challenges. He is a recognized leader in the tech and real estate sectors, with a passion for building teams that are dedicated to excellence and ethical practices.
                </p>
                <p className="text-gray-300 text-lg">
                  Under his leadership, DLTSynergy has grown into a multi-faceted organization, driven by a commitment to sustainable growth and a positive impact on society.
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
