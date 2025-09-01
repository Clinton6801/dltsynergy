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
          <a href="/agriculture" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Agriculture</a>
          <a href="/about-us" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">About Us</a>
          <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</a>
        </div>
      </div>

      <main className="pt-20">
        {/* Hero Section */}
        <header className="relative w-full h-[50vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center p-6" style={{ backgroundImage: 'url("https://placehold.co/1920x1080/0F172A/ffffff?text=DLTSynergy")', backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">Driving Growth Across Key Industries</h1>
            <p className="text-base md:text-xl font-light max-w-3xl mx-auto">DLTSynergy is a multi-faceted organization dedicated to innovation and excellence in Real Estate, Education, Technology, and Agriculture. We build the future, one sector at a time.</p>
          </div>
        </header>

        {/* Services Grid Section */}
        <section id="services-grid" className="py-20 md:py-28 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Our Core Divisions</h2>
            <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">We bring expertise and a fresh perspective to some of the world's most vital sectors.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a href="/real-estate" className="block bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-5xl text-yellow-400 mb-4 text-center"><i className="fas fa-building"></i></div>
                <h3 className="text-2xl font-semibold text-white mb-2 text-center">Real Estate</h3>
                <p className="text-gray-300 text-center">Developing properties that shape communities and provide lasting value.</p>
              </a>
              <a href="/education" className="block bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-5xl text-yellow-400 mb-4 text-center"><i className="fas fa-user-graduate"></i></div>
                <h3 className="text-2xl font-semibold text-white mb-2 text-center">Education</h3>
                <p className="text-gray-300 text-center">Empowering the next generation with cutting-edge learning platforms and resources.</p>
              </a>
              <a href="/technology" className="block bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-5xl text-yellow-400 mb-4 text-center"><i className="fas fa-laptop-code"></i></div>
                <h3 className="text-2xl font-semibold text-white mb-2 text-center">Technology</h3>
                <p className="text-gray-300 text-center">Pioneering innovative solutions that solve complex problems and drive growth.</p>
              </a>
              <a href="/agriculture" className="block bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-5xl text-yellow-400 mb-4 text-center"><i className="fas fa-tractor"></i></div>
                <h3 className="text-2xl font-semibold text-white mb-2 text-center">Agriculture</h3>
                <p className="text-gray-300 text-center">Cultivating a sustainable future through modern farming practices and agribusiness.</p>
              </a>
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
