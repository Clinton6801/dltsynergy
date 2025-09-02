'use client';

import React, { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'submitting'

  // Replace this with your unique Formspree endpoint.
  // You can find this URL after creating a new form on the Formspree website.
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/movnlogq";

  // Check if all form fields are filled
  const isFormValid = formData.name.trim() !== '' &&
                      formData.email.trim() !== '' &&
                      formData.subject.trim() !== '' &&
                      formData.message.trim() !== '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Set submission status to success and reload the page after 10 seconds
        setSubmissionStatus('success');
        setTimeout(() => {
          window.location.reload();
        }, 10000); // 10000 milliseconds = 10 seconds
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  const renderStatusMessage = () => {
    if (submissionStatus === 'success') {
      return (
        <div className="mt-8 p-4 bg-green-500 rounded-lg text-white font-bold text-center">
          Thank you for your message! We will get back to you shortly.
        </div>
      );
    }
    if (submissionStatus === 'error') {
      return (
        <div className="mt-8 p-4 bg-red-500 rounded-lg text-white font-bold text-center">
          Something went wrong. Please try again later.
        </div>
      );
    }
    if (submissionStatus === 'submitting') {
      return (
        <div className="mt-8 p-4 bg-blue-500 rounded-lg text-white font-bold text-center">
          Sending...
        </div>
      );
    }
    return null;
  };

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
            <a href="/contact" className="text-yellow-400 hover:text-yellow-400 font-medium transition-colors duration-300">Contact</a>
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
          <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-yellow-400 hover:text-yellow-400 transition-colors duration-300">Contact</a>
        </div>
      </div>

      <main className="pt-20">
        {/* Hero Section */}
        <header className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center p-6" style={{ backgroundImage: 'url("./contact.webp")', backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">Get in Touch with Us</h1>
            <p className="text-base md:text-xl font-light max-w-3xl mx-auto">We're here to answer your questions and discuss how we can help your business thrive. Please fill out the form below, and we'll get back to you promptly.</p>
          </div>
        </header>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Contact Form</h2>
              {/* Formspree form integration */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none text-white"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none text-white"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none text-white"
                      placeholder="Subject of your message"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none text-white"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={!isFormValid || submissionStatus === 'submitting'}
                      className="w-full md:w-auto px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300 font-bold text-white shadow-lg disabled:opacity-50"
                    >
                      Send Message
                    </button>
                  </div>
                  {renderStatusMessage()}
                </form>
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
