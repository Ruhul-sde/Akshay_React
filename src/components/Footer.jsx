
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 overflow-hidden">
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Floating Orbs */}
        <div 
          className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-red-500/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate3d(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.2}px, 0) rotateX(${mousePosition.y * 0.1}deg)`
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-teal-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate3d(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.3}px, 0) rotateY(${mousePosition.x * 0.1}deg)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-500/15 to-orange-600/15 rounded-full filter blur-2xl animate-bounce"
          style={{
            transform: `translate3d(${mousePosition.x * 0.1}px, ${mousePosition.y * -0.1}px, 0)`,
            animationDelay: '1s'
          }}
        />

        {/* Geometric Grid Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent transform -rotate-12"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse">requirement</span> in mind?
            </h2>
            
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Send us an e-mail
          </h3>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
            Akshay Software Technologies Private Limited drives digital transformation 
            with expertise in SAP Business One, digital marketing, AI-driven sales, and IT 
            staffing. We empower businesses with technology and strategic insights for growth.
          </p>

          {/* Enhanced CTA Button */}
          <a
            href="mailto:info@akshay.com"
            className="group relative inline-flex items-center bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get Started Today
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
          </a>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Staffing Section */}
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">Staffing</h4>
            </div>
            <ul className="space-y-4">
              {['IT Staffing', 'Payroll Outsourcing'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="group/link flex items-center text-gray-300 hover:text-red-400 transition-all duration-300 text-sm">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover/link:scale-150 transition-transform duration-300"></span>
                    {item}
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SAP Section */}
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">SAP</h4>
            </div>
            <ul className="space-y-4">
              {[
                'SAP Business One Solution',
                'SAP Business One Implementation',
                'SAP Business One Support',
                'SAP S4/HANA',
                'Grow with SAP',
                'Rise with SAP',
                'E-Invoicing',
                'SAP B1 Add Ons',
                'Case Studies'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="group/link flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/link:scale-150 transition-transform duration-300"></span>
                    {item}
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Services Section */}
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            {/* Cloud Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">Cloud</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="group/link flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 group-hover/link:scale-150 transition-transform duration-300"></span>
                    Cloud Hosting
                  </a>
                </li>
              </ul>
            </div>

            {/* AI Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">AI</h4>
              </div>
              <ul className="space-y-3">
                {['Akshay Intelligence', 'AI - Digital Marketing', 'AI - Inside Sales'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="group/link flex items-center text-gray-300 hover:text-green-400 transition-all duration-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 group-hover/link:scale-150 transition-transform duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ERP Section */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">ERP</h4>
              </div>
              <ul className="space-y-3">
                {['Crest ERP', 'Case Studies'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="group/link flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 group-hover/link:scale-150 transition-transform duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced Contact Section */}
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">Contact Us</h4>
            </div>
            
            <div className="space-y-6">
              {/* Email Card */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group/card">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h5 className="font-bold text-blue-400 text-sm">SEND US MAIL</h5>
                </div>
                <a href="mailto:info@akshay.com" className="text-white hover:text-blue-300 transition-colors duration-300 text-sm font-medium group-hover/card:translate-x-1 transform transition-transform duration-300 inline-block">
                  info@akshay.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group/card">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h5 className="font-bold text-purple-400 text-sm">PHONE</h5>
                </div>
                <a href="tel:+919226126060" className="text-white hover:text-purple-300 transition-colors duration-300 text-sm font-medium group-hover/card:translate-x-1 transform transition-transform duration-300 inline-block">
                  +91-22-6712 6060
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h5 className="font-bold text-gray-300 text-sm mb-4">FOLLOW US</h5>
                <div className="flex space-x-4">
                  {[
                    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z', color: 'blue' },
                    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', color: 'sky' },
                    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', color: 'blue' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-10 h-10 bg-gradient-to-br from-${social.color}-500 to-${social.color}-600 rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-${social.color}-500/25`}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700/50 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 rounded-xl">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white tracking-tight">AKSHAY</span>
                  <p className="text-gray-400 text-sm">Software Technologies Pvt. Ltd.</p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm mb-2">
                © 2024 Akshay Software Technologies. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
