import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { allProducts } from '../../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = allProducts.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <button 
            onClick={() => navigate('/ourstones')}
            className="text-[#0E5543] hover:underline"
          >
            Back to Our Stones
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center mt-5 text-[#0E5543] hover:text-[#1A7A62] mb-8 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8">
              <div className="aspect-square overflow-hidden rounded-xl bg-white shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#0E5543] shadow-lg">
                  Premium Quality
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0E5543]/10 to-[#1A7A62]/10 text-[#0E5543] text-sm font-semibold rounded-full mb-4 border border-[#0E5543]/20">
                  <span className="w-2 h-2 bg-[#0E5543] rounded-full mr-2"></span>
                  {product.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-1 h-6 bg-[#0E5543] rounded-full mr-3"></span>
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#0E5543] rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Premium Quality</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#0E5543] rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Durable & Long-lasting</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#0E5543] rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Interior & Exterior Use</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#0E5543] rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Multiple Finishes</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-gradient-to-r from-[#0E5543] to-[#1A7A62] text-white px-8 py-4 rounded-xl hover:from-[#1A7A62] hover:to-[#0E5543] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Custom Quote
                </button>
                <button
                  onClick={() => navigate('/OurStones')}
                  className="w-full border-2 border-[#0E5543] text-[#0E5543] px-8 py-4 rounded-xl hover:bg-[#0E5543] hover:text-white transition-all duration-300 font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1"
                >
                  Explore More Stones
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-gradient-to-r from-[#0E5543]/5 to-[#1A7A62]/5 rounded-xl border border-[#0E5543]/10">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold text-[#0E5543]">Need help choosing?</span> Our experts are ready to assist you with personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}