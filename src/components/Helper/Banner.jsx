import React, { useState } from 'react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#0E5543] to-[#8DB596] text-white py-3 px-4 relative">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base font-medium">
          ✨ Premium Marble & Granite Collection - 25+ Years of Excellence | 
          <span className="font-semibold ml-1">Free Consultation Available!</span>
        </p>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 text-lg"
      >
        ×
      </button>
    </div>
  );
};

export default Banner;