import React, { useState } from 'react';
import { FaSnowflake } from 'react-icons/fa';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-neumorph mr-3">
              <FaSnowflake className="text-blue-500 text-xl" />
            </div>
            <div>
              <div className="font-bold text-xl text-gray-800">Cool Air Repairs</div>
              <div className="text-xs text-blue-500">Premium AC Services</div>
            </div>
          </a>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-500 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu, toggle classes based on menu state */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 py-2 mt-2">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="text-gray-600 hover:text-blue-500 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
