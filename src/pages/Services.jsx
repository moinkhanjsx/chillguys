import React from 'react';

function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive air conditioning solutions for residential and commercial properties.
        </p>
      </div>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-blue-500 text-4xl mb-4">🧊</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">AC Repair</h3>
          <p className="text-gray-600 mb-4">Expert diagnosis and repair of all air conditioning issues, from simple fixes to complex system failures.</p>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li>• Complete system diagnostics</li>
            <li>• Compressor repairs and replacement</li>
            <li>• Refrigerant leak detection and repair</li>
            <li>• Electrical component troubleshooting</li>
            <li>• Thermostat repairs and upgrades</li>
          </ul>
          <p className="text-gray-600 font-semibold">Starting at ₹999</p>
        </div>
        
        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-blue-500 text-4xl mb-4">🧹</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">AC Maintenance</h3>
          <p className="text-gray-600 mb-4">Regular maintenance to keep your system running efficiently and extend its lifespan.</p>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li>• Cleaning of filters, coils, and fins</li>
            <li>• Checking refrigerant levels</li>
            <li>• Inspecting electrical connections</li>
            <li>• Lubricating moving parts</li>
            <li>• Performance evaluation</li>
          </ul>
          <p className="text-gray-600 font-semibold">Starting at ₹799</p>
        </div>
        
        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-blue-500 text-4xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">New AC Installation</h3>
          <p className="text-gray-600 mb-4">Professional installation of new air conditioning systems tailored to your space.</p>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li>• Expert consultation and system sizing</li>
            <li>• Quality installation by certified technicians</li>
            <li>• Setup and configuration</li>
            <li>• Post-installation inspection</li>
            <li>• Warranty registration assistance</li>
          </ul>
          <p className="text-gray-600 font-semibold">Starting at ₹2,499</p>
        </div>
        
        {/* Service 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-blue-500 text-4xl mb-4">🔄</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">AC Replacement</h3>
          <p className="text-gray-600 mb-4">Upgrade your old system to a more efficient, modern air conditioner.</p>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li>• System evaluation and recommendations</li>
            <li>• Removal and disposal of old unit</li>
            <li>• Installation of new system</li>
            <li>• Energy efficiency optimization</li>
            <li>• Complete testing and demonstration</li>
          </ul>
          <p className="text-gray-600 font-semibold">Starting at ₹3,999</p>
        </div>
      </div>
      
      {/* Maintenance Plans */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Annual Maintenance Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Basic Plan</h3>
            <p className="text-blue-500 text-center text-2xl font-bold mb-4">₹2,999/year</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• 2 service visits per year</li>
              <li>• Filter cleaning</li>
              <li>• Basic system check</li>
              <li>• 10% discount on repairs</li>
              <li>• Standard response time</li>
            </ul>
            <a href="#contact">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition-colors active:scale-95">
                Choose Plan
              </button>
            </a>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md transform scale-105 border-2 border-blue-500">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Premium Plan</h3>
            <p className="text-blue-500 text-center text-2xl font-bold mb-4">₹4,999/year</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• 4 service visits per year</li>
              <li>• Deep cleaning of all components</li>
              <li>• Complete system diagnostics</li>
              <li>• 20% discount on repairs</li>
              <li>• Priority response time</li>
            </ul>
            <a href="#contact">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition-colors active:scale-95">
                Choose Plan
              </button>
            </a>
          </div>
          
          {/* Business Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Business Plan</h3>
            <p className="text-blue-500 text-center text-2xl font-bold mb-4">Custom Pricing</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Custom service schedule</li>
              <li>• Multiple unit coverage</li>
              <li>• Emergency service</li>
              <li>• 25% discount on repairs</li>
              <li>• 24/7 priority support</li>
            </ul>
            <a href="#contact">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition-colors active:scale-95">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to schedule a service?</h2>
        <p className="text-gray-600 mb-6">Our expert technicians are just a call away.</p>
        <a href="#contact">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors active:scale-95">
            Contact Us Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Services;
