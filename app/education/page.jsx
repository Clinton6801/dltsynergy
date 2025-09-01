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
            <a href="/education" className="text-yellow-400 hover:text-yellow-400 font-medium transition-colors duration-300">Education</a>
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
          <a href="/education" onClick={() => setIsMenuOpen(false)} className="text-yellow-400 hover:text-yellow-400 transition-colors duration-300">Education</a>
          <a href="/technology" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Technology</a>
          <a href="/agriculture" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Agriculture</a>
          <a href="/about-us" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">About Us</a>
          <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</a>
        </div>
      </div>

      <main className="pt-20">
        {/* Hero Section */}
        <header className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center p-6" style={{ backgroundImage: 'url("https://placehold.co/1920x1080/1F2937/ffffff?text=Education")', backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">Empowering Minds, Shaping Futures</h1>
            <p className="text-base md:text-xl font-light max-w-3xl mx-auto">Our commitment to education drives us to create innovative learning solutions that inspire and empower the next generation.</p>
          </div>
        </header>

        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">A Modern Approach to Learning</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                DLTSynergy's Education division is dedicated to transforming the learning landscape. We develop robust digital platforms, engaging curricula, and provide strategic consulting services to educational institutions, helping them adapt to the challenges of the modern world.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            {/* Digital Learning Platforms */}
            <div className="flex flex-col md:flex-row items-center mb-20 md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="https://placehold.co/800x600/1F2937/ffffff?text=Digital+Learning" alt="Digital Learning Platforms" className="rounded-xl shadow-xl w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Digital Learning Platforms</h3>
                <p className="text-gray-300 text-lg mb-4">
                  We build intuitive and powerful digital learning platforms that make education accessible and engaging. Our solutions support online courses, virtual classrooms, and interactive content, providing a seamless experience for students and educators alike.
                </p>
              </div>
            </div>

            {/* Curriculum Development */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-20 md:space-x-reverse md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="https://placehold.co/800x600/1F2937/ffffff?text=Curriculum+Development" alt="Curriculum Development" className="rounded-xl shadow-xl w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Curriculum Development</h3>
                <p className="text-gray-300 text-lg mb-4">
                  Our team of experts collaborates with institutions to design and develop comprehensive and relevant curricula. We focus on integrating cutting-edge research and pedagogical best practices to create effective learning pathways that prepare students for the future.
                </p>
              </div>
            </div>

            {/* Educational Consulting */}
            <div className="flex flex-col md:flex-row items-center mb-20 md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="https://placehold.co/800x600/1F2937/ffffff?text=Educational+Consulting" alt="Educational Consulting" className="rounded-xl shadow-xl w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Educational Consulting</h3>
                <p className="text-gray-300 text-lg mb-4">
                  We provide strategic guidance to schools, universities, and corporate training departments. Our consulting services help organizations optimize their educational programs, integrate new technologies, and achieve their academic goals.
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
