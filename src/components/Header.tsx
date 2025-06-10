import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white py-5 px-4 md:px-12 lg:px-28 flex items-center justify-between relative">
      {/* Logo - Replace with actual logo image */}
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold text-green-700">
          <img src="/src/assets/upworn-logo.png" alt="Upworn Logo" className="sm:h-10 h-8" />
        </a>                                             
      </div>
            
      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-3">
         <a href="/" className="text-white rounded-full bg-ecogreen px-3.5 py-1 hover:bg-green-800 transition-colors">Home</a>
          <div className='rounded-full py-1 px-1 bg-lightgreen'></div>
        <a href="#about" className="text-gray-700 hover:text-green-700">About</a>
        <div className='rounded-full py-1 px-1 bg-lightgreen'></div>
        <a href="#features" className="text-gray-700 hover:text-green-700">Features</a>
        <div className='rounded-full py-1 px-1 bg-lightgreen'></div>
        <a href="#impact" className="text-gray-700 hover:text-green-700">Impact</a>                         
      </nav>

      {/* CTA Button */}
      <a href="#contact" className="hidden sm:block bg-ecogreen text-white px-4 py-2 rounded-full text-sm hover:bg-green-800 transition-colors">
        Contact us
      </a>

      {/* Mobile menu button */}
      <button 
        className="md:hidden text-gray-600 z-50 relative"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          // Close icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-20 px-6">
          <nav className="flex flex-col space-y-6">
            <a 
              href="#solutions" 
              className="text-white rounded-full bg-ecogreen px-4 py-2 hover:bg-green-800 transition-colors text-center"
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-green-700 text-lg border-b border-gray-200 pb-2"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a 
              href="#features" 
              className="text-gray-700 hover:text-green-700 text-lg border-b border-gray-200 pb-2"
              onClick={closeMobileMenu}
            >
              Features
            </a>
            <a 
              href="#problems" 
              className="text-gray-700 hover:text-green-700 text-lg border-b border-gray-200 pb-2"
              onClick={closeMobileMenu}
            >
              Impact
            </a>
            <a 
              href="#contact" 
              className="bg-ecogreen text-white px-4 py-3 rounded-full text-center hover:bg-green-800 transition-colors mt-4"
              onClick={closeMobileMenu}
            >
              Contact us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;