
import React, { useState } from 'react';

export default function ClientTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      company: "Stockholding",
      testimonial: "This is to certify that Akshay Software Technologies Limited has been providing IT and software services to Stock Holding Corporations through its personnel deployed to SHCIL.",
      rating: 5
    },
    {
      company: "HDFC Bank", 
      testimonial: "Akshay Software Technologies Private Ltd. has been our preferred IT manpower vendor since year 2010.",
      rating: 5
    },
    {
      company: "Stock Holding Corporation",
      testimonial: "This is to certify that Akshay Software technologies Limited has been providing IT and software services to Stock Holding Corporations through its personnel deployed to SHCIL.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-red-600 rounded-full mb-6">
              <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium text-sm">CLIENTS TESTIMONIAL</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              What our clients say about us
            </h2>

            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Testimonials */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-500 ${
                    index === currentSlide 
                      ? 'scale-105 bg-white/20 border-2 border-white/30' 
                      : 'hover:bg-white/15'
                  }`}
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-bold mb-2">{testimonial.company}</h4>
                    <div className="flex space-x-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed text-sm">
                    {testimonial.testimonial}
                  </p>
                </div>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
