import React, { useState } from 'react';

const QuarryFlautCard = ({ mainProduct, secondaryProduct }) => {
  const [activeProduct, setActiveProduct] = useState('main');

  return (
    <div className="flex flex-col md:flex-row bg-white h-auto md:h-96 mb-4 md:mb-8">
      {/* Left Content Panel */}
      <div className="w-full md:w-1/3 p-4 sm:p-6 md:p-12 flex flex-col justify-center bg-gray-50">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-light text-gray-900 mb-4 md:mb-8 leading-tight">
          {activeProduct === 'main' ? mainProduct.name : secondaryProduct.name}
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 md:mb-12 font-light italic">
          {activeProduct === 'main' ? mainProduct.description : secondaryProduct.description}
        </p>
        <div className="space-y-2 md:space-y-3">
          <p className="text-gray-900 font-semibold text-xs sm:text-sm tracking-widest">
            {activeProduct === 'main' ? mainProduct.origin : secondaryProduct.origin}
          </p>
          <p className="text-gray-900 font-semibold text-xs sm:text-sm tracking-widest">
            {activeProduct === 'main' ? mainProduct.type : secondaryProduct.type}
          </p>
          <p className="text-gray-900 font-semibold text-xs sm:text-sm tracking-widest">
            {activeProduct === 'main' ? mainProduct.category : secondaryProduct.category}
          </p>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="w-full md:w-2/3 flex relative h-64 md:h-auto">
        {/* Main Image */}
        <div 
          className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
            activeProduct === 'main' ? 'w-full' : 'w-1/4'
          }`}
          onMouseEnter={() => setActiveProduct('main')}
          onClick={() => setActiveProduct('main')}
        >
          <img
            src={mainProduct.image}
            alt={mainProduct.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Secondary Image */}
        <div 
          className={`relative overflow-hidden transition-all duration-700 ease-in-out cursor-pointer ${
            activeProduct === 'secondary' ? 'w-full' : 'w-1/4'
          }`}
          onMouseEnter={() => setActiveProduct('secondary')}
          onClick={() => setActiveProduct('secondary')}
        >
          <img
            src={secondaryProduct.image}
            alt={secondaryProduct.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default QuarryFlautCard;