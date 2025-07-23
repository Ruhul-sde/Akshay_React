import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      label: 'Home',
      href: '#',
      hasDropdown: false
    },
    {
      label: 'SAP',
      href: '#',
      hasDropdown: true,
      dropdown: [
        'SAP Business One Solution',
        'SAP Business One Implementation Partner',
        'SAP Business One Support',
        'SAP B1 Add Ons',
        'SAP S/4HANA',
        'Grow with SAP',
        'Rise with SAP',
        'E-Invoicing',
        'SAP Case Studies'
      ]
    },
    {
      label: 'Staffing',
      href: '#',
      hasDropdown: true,
      dropdown: [
        'IT Staffing',
        'Payroll Management'
      ]
    },
    {
      label: 'Cloud',
      href: '#',
      hasDropdown: true,
      dropdown: [
        'Cloud Hosting'
      ]
    },
    {
      label: 'Artificial Intelligence',
      href: '#',
      hasDropdown: true,
      dropdown: [
        'Akshay Intelligence',
        'AI – Digital Marketing',
        'AI Inside Sales'
      ]
    },
    {
      label: 'ERP',
      href: '#',
      hasDropdown: true,
      dropdown: [
        'Crest ERP',
        'Case Studies'
      ]
    },
    { 
      label: 'Blog',
      href: '#blog',
      hasDropdown: false
    },
    { 
      label: 'About Us',
      href: '#about',
      hasDropdown: false
    },
    { 
      label: 'Contact Us',
      href: '#contact',
      hasDropdown: false
    }
  ];

  const handleMouseEnter = (index) => {
    clearTimeout(hoverTimeout);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Slight delay to allow cursor to move to dropdown
    setHoverTimeout(timeout);
  };

  const keepDropdownOpen = () => {
    clearTimeout(hoverTimeout);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-8xl mx-auto px-5">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-3 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">AKSHAY</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className={`relative px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    item.hasDropdown 
                      ? 'text-gray-800 hover:text-red-600' 
                      : 'text-gray-800 hover:text-red-600'
                  }`}
                >
                  <span className="relative inline-block">
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform origin-left transition-all duration-300 scale-x-0 ${
                      activeDropdown === index ? 'scale-x-100' : 'group-hover:scale-x-100'
                    }`}></span>
                  </span>
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === index && (
                  <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 overflow-hidden"
                    onMouseEnter={keepDropdownOpen}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <a
                        key={dropdownIndex}
                        href="#"
                        className="block px-6 py-3 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-200 relative overflow-hidden"
                      >
                        <span className="relative z-10">{dropdownItem}</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block ml-6">
            <a
              href="#contact"
              className="relative bg-gradient-to-br from-red-600 to-red-500 text-white px-6 py-3 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 shadow-md hover:shadow-red-200 hover:from-red-700 hover:to-red-600 group"
            >
              <span className="relative z-10">Get Free Quote</span>
              <span className="absolute inset-0 bg-gradient-to-br from-red-700 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-700 hover:text-red-600 focus:outline-none transition-all duration-300 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-3 pb-6 space-y-1 bg-white shadow-xl rounded-xl mt-2 border border-gray-100">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <a
                    href={item.href}
                    className="block px-4 py-4 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === index ? null : index) : setIsMobileMenuOpen(false)}
                  >
                    <div className="flex justify-between items-center">
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <svg 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </a>
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="ml-4 space-y-1 mb-2">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="block w-full text-center bg-gradient-to-br from-red-600 to-red-500 text-white px-4 py-4 rounded-lg text-base font-medium hover:shadow-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}