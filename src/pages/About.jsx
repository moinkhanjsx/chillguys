import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Cool Air Repairs</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Trusted AC repair and maintenance services for homes and businesses across India.
        </p>
      </div>
      
      {/* Our Story */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Cool Air Repairs was founded in 2015 with a simple mission: to provide reliable, affordable air conditioning 
          services with exceptional customer care. What started as a small family business has grown into one of the most 
          trusted AC service providers in the region.
        </p>
        <p className="text-gray-600 mb-4">
          Our team of certified technicians brings decades of combined experience to every job, ensuring that your 
          cooling systems are in the best hands possible.
        </p>
      </div>
      
      {/* Our Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="text-blue-500 text-4xl mb-4">💎</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
          <p className="text-gray-600">We never compromise on quality. From the parts we use to the service we provide, excellence is our standard.</p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="text-blue-500 text-4xl mb-4">⏱️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliability</h3>
          <p className="text-gray-600">We show up when we say we will and complete the job within the promised timeframe.</p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="text-blue-500 text-4xl mb-4">💯</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
          <p className="text-gray-600">Transparent pricing, honest recommendations, and no unnecessary upselling.</p>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Expert Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">Amit Patel</h3>
            <p className="text-blue-500 mb-2">Founder & Lead Technician</p>
            <p className="text-gray-600">15+ years of experience in HVAC systems.</p>
          </div>
          
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">Priya Singh</h3>
            <p className="text-blue-500 mb-2">Service Manager</p>
            <p className="text-gray-600">Ensures smooth operations and customer satisfaction.</p>
          </div>
          
          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">Rajesh Kumar</h3>
            <p className="text-blue-500 mb-2">Senior Technician</p>
            <p className="text-gray-600">Specialized in modern AC system diagnostics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
