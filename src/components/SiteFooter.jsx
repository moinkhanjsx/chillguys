import React, { useState } from 'react';
import { FaSnowflake, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();
  const [hoverIndex, setHoverIndex] = useState(null);
  
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 relative">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Company info */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-neumorph mr-3">
                <FaSnowflake className="text-blue-500 text-xl" />
              </div>
              <div>
                <div className="font-bold text-xl text-gray-800">Cool Air Repairs</div>
                <div className="text-xs text-blue-500">Premium AC Services</div>
              </div>
            </div>
          </div>
          
          {/* Contact info - simplified */}
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
            <a href="tel:+917620373841" className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-gray-100 mr-2 flex items-center justify-center shadow-neumorph-button">
                <FaPhone className="text-blue-500" />
              </div>
              <span>+91 7620373841</span>
            </a>
            
            <a href="mailto:service@coolairrepairs.com" className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-gray-100 mr-2 flex items-center justify-center shadow-neumorph-button">
                <FaEnvelope className="text-blue-500" />
              </div>
              <span>service@coolairrepairs.com</span>
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="border-t border-gray-200 pt-6 pb-4 flex flex-col sm:flex-row justify-center items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0 sm:mr-8">
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-500 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
          </div>
          <div className="text-sm text-gray-500">
            © {year} Cool Air Repairs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
