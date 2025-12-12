import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LuxuryCarousel = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (items.length > 0) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [items.length]);

  if (!items || items.length === 0) {
    return <div>No items available</div>;
  }

  return (
    <div className="w-full h-100 bg-gray-100 flex">
      {/* Left Content Section */}
      <div className="w-1/2 flex flex-col justify-center px-16 py-12">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {items[currentIndex].name || items[currentIndex].title}
          </h1>
          
          <p className="text-xl text-gray-700 italic mb-8 font-light">
            Premium Quality Stone
          </p>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="text-base">
              {items[currentIndex].description || `Beautiful ${items[currentIndex].name} with exceptional quality and natural patterns.`}
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center mt-12 space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          {/* <div className="flex space-x-2 ml-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gray-800 w-8' : 'bg-gray-400'
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2 relative overflow-hidden cursor-pointer" onClick={() => navigate(`/product/${items[currentIndex].id}`)}>
        <div className="absolute inset-0">
          <img
            src={items[currentIndex].image}
            alt={items[currentIndex].name || items[currentIndex].title}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryCarousel;