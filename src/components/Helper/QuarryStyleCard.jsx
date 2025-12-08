import React, { useState } from 'react';

const QuarryStyleCard = ({ product1, product2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex bg-white shadow-lg h-96 overflow-hidden">
      {/* Left Content */}
      <div className="w-1/3 p-8 flex flex-col justify-center bg-gray-50">
        <h2 className="text-3xl font-light text-gray-800 mb-6 leading-tight">
          {isHovered ? product2.name : product1.name}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-8 font-light">
          {isHovered ? product2.description : product1.description}
        </p>
        <div className="space-y-2">
          <p className="text-gray-800 font-medium text-sm tracking-wide">{isHovered ? product2.origin : product1.origin}</p>
          <p className="text-gray-800 font-medium text-sm tracking-wide">{isHovered ? product2.type : product1.type}</p>
          <p className="text-gray-800 font-medium text-sm tracking-wide">{isHovered ? product2.category : product1.category}</p>
        </div>
      </div>

      {/* Right Images */}
      <div className="w-2/3 flex transition-all duration-500">
        {/* Main Image */}
        <div className={`relative overflow-hidden transition-all duration-500 ${
          isHovered ? 'w-1/5' : 'w-4/5'
        }`}>
          <img
            src={product1.mainImage}
            alt={product1.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Secondary Image */}
        <div 
          className={`relative overflow-hidden cursor-pointer transition-all duration-500 ${
            isHovered ? 'w-4/5' : 'w-1/5'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={product2.mainImage}
            alt={product2.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default QuarryStyleCard;