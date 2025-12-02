import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiZoomIn, FiShare2, FiHeart } from 'react-icons/fi';

const categoryData = {
  'surata-green': {
    name: "Surata Green",
    image: "https://www.aclassmarble.co.in/images/media_images/240826063842_blog_image.jpg",
    description: "Choose the shade of distinction, crafted for those who value rarity.",
    category: "Premium Marble",
    specifications: {
      "Stone Type": "Natural Marble",
      "Color": "Green with Natural Veining",
      "Origin": "Rajasthan, India",
      "Finish": "Polished, Honed, Brushed",
      "Thickness": "15mm, 18mm, 20mm, 30mm",
      "Size": "Custom sizes available",
      "Density": "2.7 g/cm³",
      "Water Absorption": "< 0.5%",
      "Compressive Strength": "120 MPa",
      "Flexural Strength": "15 MPa"
    },
    applications: [
      "Kitchen Countertops",
      "Bathroom Vanities", 
      "Flooring",
      "Wall Cladding",
      "Fireplace Surrounds",
      "Staircases",
      "Decorative Elements"
    ],
    features: [
      "Premium Quality Natural Stone",
      "Excellent Durability",
      "Heat Resistant",
      "Stain Resistant with Proper Sealing",
      "Easy to Maintain",
      "Timeless Elegance",
      "Suitable for Interior & Exterior Use"
    ]
  },
  'forestgreen': {
    name: "ForestGreen",
    image: "https://www.aclassmarble.co.in/images/media_images/240730075202_blog_image.jpg",
    description: "Enrich your interiors with the timeless charm of nature's finest creation.",
    category: "Premium Marble",
    specifications: {
      "Stone Type": "Natural Marble",
      "Color": "Forest Green with Natural Patterns",
      "Origin": "Rajasthan, India",
      "Finish": "Polished, Honed, Brushed",
      "Thickness": "15mm, 18mm, 20mm, 30mm",
      "Size": "Custom sizes available",
      "Density": "2.7 g/cm³",
      "Water Absorption": "< 0.5%",
      "Compressive Strength": "120 MPa",
      "Flexural Strength": "15 MPa"
    },
    applications: [
      "Kitchen Countertops",
      "Bathroom Vanities", 
      "Flooring",
      "Wall Cladding",
      "Fireplace Surrounds",
      "Staircases",
      "Decorative Elements"
    ],
    features: [
      "Premium Quality Natural Stone",
      "Excellent Durability",
      "Heat Resistant",
      "Stain Resistant with Proper Sealing",
      "Easy to Maintain",
      "Timeless Elegance",
      "Suitable for Interior & Exterior Use"
    ]
  },
  'spider-green': {
    name: "Spider Green",
    image: "https://lifencolors.in/cdn/shop/products/81d868_98eaac6a5ff84298b9e0728109e46c67_mv2_4af1098c-41e8-4961-9e60-a2e76d62a28a.jpg?v=1753695316",
    description: "Let the calm of green breathe life into every corner of your space.",
    category: "Premium Marble",
    specifications: {
      "Stone Type": "Natural Marble",
      "Color": "Spider Green with Unique Patterns",
      "Origin": "Rajasthan, India",
      "Finish": "Polished, Honed, Brushed",
      "Thickness": "15mm, 18mm, 20mm, 30mm",
      "Size": "Custom sizes available",
      "Density": "2.7 g/cm³",
      "Water Absorption": "< 0.5%",
      "Compressive Strength": "120 MPa",
      "Flexural Strength": "15 MPa"
    },
    applications: [
      "Kitchen Countertops",
      "Bathroom Vanities", 
      "Flooring",
      "Wall Cladding",
      "Fireplace Surrounds",
      "Staircases",
      "Decorative Elements"
    ],
    features: [
      "Premium Quality Natural Stone",
      "Excellent Durability",
      "Heat Resistant",
      "Stain Resistant with Proper Sealing",
      "Easy to Maintain",
      "Timeless Elegance",
      "Suitable for Interior & Exterior Use"
    ]
  },
  'r-green': {
    name: "R Green",
    image: "https://www.ilpiccolodesign.it/wp-content/uploads/2022/08/kitchen-island-black-marble.jpg",
    description: "Choose the shade of distinction, crafted for those who value rare.",
    category: "Premium Marble",
    specifications: {
      "Stone Type": "Natural Marble",
      "Color": "R Green with Distinctive Patterns",
      "Origin": "Rajasthan, India",
      "Finish": "Polished, Honed, Brushed",
      "Thickness": "15mm, 18mm, 20mm, 30mm",
      "Size": "Custom sizes available",
      "Density": "2.7 g/cm³",
      "Water Absorption": "< 0.5%",
      "Compressive Strength": "120 MPa",
      "Flexural Strength": "15 MPa"
    },
    applications: [
      "Kitchen Countertops",
      "Bathroom Vanities", 
      "Flooring",
      "Wall Cladding",
      "Fireplace Surrounds",
      "Staircases",
      "Decorative Elements"
    ],
    features: [
      "Premium Quality Natural Stone",
      "Excellent Durability",
      "Heat Resistant",
      "Stain Resistant with Proper Sealing",
      "Easy to Maintain",
      "Timeless Elegance",
      "Suitable for Interior & Exterior Use"
    ]
  }
};

const CategoryProductDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isZoomed, setIsZoomed] = useState(false);

  const product = categoryData[name];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-[#0E5543] text-white px-6 py-3 rounded-lg hover:bg-[#0E5543]/90"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-gray-600 hover:text-[#0E5543] mb-6 transition-colors"
        >
          <FiArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-8 lg:mb-16">
          
          {/* Image Section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              
              {/* Zoom Button */}
              <button
                onClick={() => setIsZoomed(true)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <FiZoomIn size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <p className="text-[#0E5543] font-medium mb-1 sm:mb-2 text-sm sm:text-base">{product.category}</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{product.name}</h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{product.description}</p>
            </div>

          

            {/* Quick Specs */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Quick Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Stone Type</p>
                  <p className="font-medium text-sm sm:text-base">{product.specifications["Stone Type"]}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Origin</p>
                  <p className="font-medium text-sm sm:text-base">{product.specifications["Origin"]}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Color</p>
                  <p className="font-medium text-sm sm:text-base">{product.specifications["Color"]}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Finish</p>
                  <p className="font-medium text-sm sm:text-base">{product.specifications["Finish"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg mb-8 sm:mb-16">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-2 sm:space-x-8 px-3 sm:px-8 overflow-x-auto">
              {['overview', 'specifications', 'applications', 'features'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 sm:py-4 px-2 sm:px-2 border-b-2 font-medium text-xs sm:text-sm capitalize transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-[#0E5543] text-[#0E5543]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Product Overview</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {product.description} This premium marble is quarried from the finest deposits in Rajasthan, India, 
                  ensuring consistent quality and exceptional beauty. The stone's natural characteristics make it an 
                  ideal choice for both residential and commercial applications.
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-900 text-sm sm:text-base">{key}</span>
                      <span className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-0">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Applications</h3>
                <p className="text-gray-600 text-sm sm:text-base">This versatile marble is perfect for various interior and exterior applications:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {product.applications.map((application, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Interested in This Product?</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">Get a custom quote or request samples for your project</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button 
              onClick={() => navigate('/request-quote')}
              className="bg-white text-[#0E5543] px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Quote
            </button>
            <button className="border border-white text-[#0E5543] px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0E5543] transition-colors"
            onClick={()=>navigate("/contact")}>
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain w-full"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProductDetail;