import React from 'react';
import { FaPhone } from 'react-icons/fa';

function SinglePage() {
  return (
    <div className="single-page-content bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 relative" id="home">
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg viewBox="0 0 1440 320" className="w-full h-32 md:h-48" preserveAspectRatio="none">
            <path fill="#e0f2fe" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,122.7C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-10 mb-12 shadow-xl border border-blue-200">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 tracking-tight drop-shadow-lg">FrostFlow Air Solutions</h1>
              <p className="text-lg text-blue-700 mb-8 font-medium">Keep your home comfortable all year round with our expert AC repair and maintenance services.</p>
              <a href="tel:+917620373841">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-200 flex items-center gap-2 mx-auto active:scale-95">
                  <FaPhone className="inline-block animate-pulse" /> Call Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="w-full overflow-hidden -mb-1">
        <svg viewBox="0 0 1440 80" className="w-full h-10 md:h-16" preserveAspectRatio="none">
          <path fill="#f1f5f9" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path>
        </svg>
      </div>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 text-center tracking-tight">Our Services</h2>
          <p className="text-blue-700 max-w-2xl mx-auto text-center mb-12 text-lg font-medium">
            Comprehensive air conditioning solutions for residential and commercial properties.
          </p>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16" id="services">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 group">
              <div className="text-blue-500 text-5xl mb-4 group-hover:scale-110 transition-transform">🧊</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">AC Repair</h3>
              <p className="text-blue-700 mb-4">Expert diagnosis and repair of all air conditioning issues, from simple fixes to complex system failures.</p>
              <ul className="text-gray-600 space-y-2 mb-4 list-disc list-inside">
                <li>Complete system diagnostics</li>
                <li>Compressor repairs and replacement</li>
                <li>Refrigerant leak detection and repair</li>
                <li>Electrical component troubleshooting</li>
                <li>Thermostat repairs and upgrades</li>
              </ul>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 group">
              <div className="text-blue-500 text-5xl mb-4 group-hover:scale-110 transition-transform">🌀</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">AC Maintenance</h3>
              <p className="text-blue-700 mb-4">Regular maintenance to keep your system running efficiently and extend its lifespan.</p>
              <ul className="text-gray-600 space-y-2 mb-4 list-disc list-inside">
                <li>Cleaning of filters, coils, and fins</li>
                <li>Checking refrigerant levels</li>
                <li>Inspecting electrical connections</li>
                <li>Lubricating moving parts</li>
                <li>Performance evaluation</li>
              </ul>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 group">
              <div className="text-blue-500 text-5xl mb-4 group-hover:scale-110 transition-transform">📦</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">New AC Installation</h3>
              <p className="text-blue-700 mb-4">Professional installation of new air conditioning systems tailored to your space.</p>
              <ul className="text-gray-600 space-y-2 mb-4 list-disc list-inside">
                <li>Expert consultation and system sizing</li>
                <li>Quality installation by certified technicians</li>
                <li>Setup and configuration</li>
                <li>Post-installation inspection</li>
                <li>Warranty registration assistance</li>
              </ul>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 group">
              <div className="text-blue-500 text-5xl mb-4 group-hover:scale-110 transition-transform">🔄</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">AC Replacement</h3>
              <p className="text-blue-700 mb-4">Upgrade your old system to a more efficient, modern air conditioner.</p>
              <ul className="text-gray-600 space-y-2 mb-4 list-disc list-inside">
                <li>System evaluation and recommendations</li>
                <li>Removal and disposal of old unit</li>
                <li>Installation of new system</li>
                <li>Energy efficiency optimization</li>
                <li>Complete testing and demonstration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 text-center tracking-tight">FrostFlow Air Solutions</h2>
          <p className="text-blue-700 max-w-2xl mx-auto text-center mb-12 text-lg font-medium">
            Trusted AC repair and maintenance services for homes and businesses across India.
          </p>
          {/* Our Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center group hover:shadow-2xl transition-shadow">
              <div className="text-blue-500 text-5xl mb-4 group-hover:scale-110 transition-transform">💎</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Quality</h3>
              <p className="text-blue-700">We never compromise on quality. From the parts we use to the service we provide, excellence is our standard.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center group hover:shadow-2xl transition-shadow">
              <div className="text-blue-500 text-5xl mb-4 group-hover:scale-110 transition-transform">⏱️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Reliability</h3>
              <p className="text-blue-700">We show up when we say we will and complete the job within the promised timeframe.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center group hover:shadow-2xl transition-shadow">
              <div className="text-blue-500 text-5xl mb-4 group-hover:scale-110 transition-transform">💯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Integrity</h3>
              <p className="text-blue-700">Transparent pricing, honest recommendations, and no unnecessary upselling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 tracking-tight">Ready to schedule a service?</h2>
            <p className="text-blue-700 mb-6 text-lg font-medium">Our expert technicians are just a call away.</p>
            <a href="tel:+917620373841">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full shadow-xl transition-all duration-200 flex items-center gap-2 mx-auto active:scale-95">
                <FaPhone className="inline-block animate-pulse" /> Call Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 text-center tracking-tight">Contact Us</h2>
          <p className="text-blue-700 max-w-2xl mx-auto text-center mb-12 text-lg font-medium">
            Reach out to our team for AC installation, repairs, or maintenance services.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-blue-100 max-w-lg w-full">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaPhone className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">Call or WhatsApp</h3>
                    <p className="text-sm text-blue-700 mb-2">Contact us anytime via call or WhatsApp!</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <a href="tel:+917620373841" className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium transition-colors">
                        <FaPhone className="mr-1 text-base" /> Call: +91 7620373841
                      </a>
                      <a href="https://wa.me/917620373841" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors" target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SinglePage;
