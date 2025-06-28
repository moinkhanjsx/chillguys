import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Professional Air Conditioning Services</h1>
          <p className="text-gray-600 mb-8">Keep your home comfortable all year round with our expert AC repair and maintenance services.</p>
          <a href="#contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors active:scale-95">
              Schedule Service
            </button>
          </a>
        </div>
      </div>
      
      {/* Services Overview */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <a href="#services" className="block">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
              <div className="text-blue-500 text-4xl mb-4">🧊</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AC Repair</h3>
              <p className="text-gray-600">Fast, reliable repairs for all air conditioning systems. Available 24/7 for emergency service.</p>
            </div>
          </a>
          
          {/* Service Card 2 */}
          <a href="#services" className="block">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
              <div className="text-blue-500 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Maintenance</h3>
              <p className="text-gray-600">Regular maintenance to keep your AC running efficiently and prevent costly breakdowns.</p>
            </div>
          </a>
          
          {/* Service Card 3 */}
          <a href="#services" className="block">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
              <div className="text-blue-500 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Installation</h3>
              <p className="text-gray-600">Expert installation of new air conditioning systems with warranty and follow-up service.</p>
            </div>
          </a>
        </div>
      </div>
      
      {/* Testimonial */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 italic text-lg mb-4">"The technician from Cool Air Repairs was professional, on time, and fixed our AC issue quickly. Highly recommend their services!"</p>
          <p className="font-semibold">- Rajesh Sharma, Mumbai</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
