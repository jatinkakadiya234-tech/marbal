import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiZoomIn, FiShare2, FiHeart, FiDownload } from 'react-icons/fi';

// Import sample images (you can replace with actual product images)
import agariaWhite from '../../assets/marbles/Agaria-White-Marble[1].jpg';
import aravaliGreen from '../../assets/marbles/Aravali-Green[1].jpg';
import bidasarBrown from '../../assets/marbles/bidasar brown marble.jpg';
import cloudGrey from '../../assets/marbles/Cloud-Grey-Marble[1].jpg';
import fantasyBrown from '../../assets/marbles/fantasy brown marble.jpg';
import iconicBlack from '../../assets/marbles/Iconic-black-marble-1200x1200-1[1].jpg';
import mysticGreen from '../../assets/marbles/Mystic-Green-Marble[1].jpg';
import pinkMarble from '../../assets/marbles/pink-marble[1].jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // All products data
  const allProducts = [
    { id: 1, name: "Agaria White", image: agariaWhite, category: "Premium White Marble" },
    { id: 2, name: "Aravali Green", image: aravaliGreen, category: "Premium Green Marble" },
    { id: 3, name: "Bidasar Brown", image: bidasarBrown, category: "Premium Brown Marble" },
    { id: 4, name: "Cloud Grey", image: cloudGrey, category: "Premium Grey Marble" },
    { id: 5, name: "Mystic Green", image: mysticGreen, category: "Premium Green Marble" },
    { id: 6, name: "Pink Marble", image: pinkMarble, category: "Premium Pink Marble" }
  ];

  // Get current product and related products
  const currentProduct = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];
  const relatedProducts = allProducts.filter(p => p.id !== parseInt(id)).slice(0, 3);

  // Reset states when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setActiveTab('overview');
    setIsZoomed(false);
  }, [id]);

  // Sample product data (replace with actual data fetching)
  const getProductDescription = (name) => {
    const descriptions = {
      "Agaria White": "Agaria White Marble is a premium natural stone known for its pristine white background with subtle grey veining. This elegant marble adds sophistication to any space with its timeless beauty and durability.",
      "Aravali Green": "Aravali Green Marble features rich forest green tones with distinctive veining patterns. This luxurious stone brings natural elegance and a calming presence to any interior space.",
      "Bidasar Brown": "Bidasar Brown Marble showcases warm brown hues with intricate natural patterns. Perfect for creating cozy yet sophisticated environments with its earthy appeal.",
      "Cloud Grey": "Cloud Grey Marble displays subtle grey tones with cloud-like veining patterns. This versatile stone offers modern elegance suitable for contemporary design schemes.",
      "Mystic Green": "Mystic Green Marble presents deep emerald tones with mystical veining. This striking stone creates dramatic focal points while maintaining natural beauty.",
      "Pink Marble": "Pink Marble features delicate rose hues with gentle veining patterns. This unique stone adds warmth and feminine elegance to luxury interiors."
    };
    return descriptions[name] || "Premium natural stone with exceptional beauty and durability.";
  };

  const getProductSpecs = (name) => {
    const baseSpecs = {
      "Stone Type": "Natural Marble",
      "Origin": "Rajasthan, India",
      "Finish": "Polished, Honed, Brushed",
      "Thickness": "15mm, 18mm, 20mm, 30mm",
      "Size": "Custom sizes available",
      "Density": "2.7 g/cm³",
      "Water Absorption": "< 0.5%",
      "Compressive Strength": "120 MPa",
      "Flexural Strength": "15 MPa"
    };
    
    const colorMap = {
      "Agaria White": "White with Grey Veining",
      "Aravali Green": "Forest Green with Natural Patterns",
      "Bidasar Brown": "Rich Brown with Earth Tones",
      "Cloud Grey": "Subtle Grey with Cloud Patterns",
      "Mystic Green": "Deep Emerald with Mystical Veining",
      "Pink Marble": "Delicate Rose with Gentle Patterns"
    };
    
    return {
      ...baseSpecs,
      "Color": colorMap[name] || "Premium Quality"
    };
  };

  const product = {
    id: currentProduct.id,
    name: currentProduct.name,
    category: currentProduct.category,
    description: getProductDescription(currentProduct.name),
    images: [
      currentProduct.image, 
      cloudGrey, 
      fantasyBrown, 
      iconicBlack, 
      mysticGreen, 
      pinkMarble
    ],
    specifications: {
      "Stone Type": "Natural Marble",
      "Color": "Premium Quality",
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
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-[#0E5543]">Home</button>
            <span>/</span>
            <button onClick={() => navigate('/marble')} className="hover:text-[#0E5543]">Marble</button>
            <span>/</span>
            <span className="text-[#0E5543] font-medium">{product.name}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Image Navigation */}
            
              
              {/* Zoom Button */}
              <button
                onClick={() => setIsZoomed(true)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <FiZoomIn size={20} />
              </button>
            </div>

            {/* Thumbnail Images */}
         
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <p className="text-[#0E5543] font-medium mb-2">{product.category}</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Action Buttons */}
            

            {/* Quick Specs */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Stone Type</p>
                  <p className="font-medium">{product.specifications["Stone Type"]}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Origin</p>
                  <p className="font-medium">{product.specifications["Origin"]}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Color</p>
                  <p className="font-medium">{product.specifications["Color"]}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Finish</p>
                  <p className="font-medium">{product.specifications["Finish"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-16">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {['overview', 'specifications', 'applications', 'features'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors ${
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
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Product Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description} This premium marble is quarried from the finest deposits in Rajasthan, India, 
                  ensuring consistent quality and exceptional beauty. The stone's natural characteristics make it an 
                  ideal choice for both residential and commercial applications.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                        <span className="text-gray-600">Premium natural stone from India</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                        <span className="text-gray-600">Excellent durability and longevity</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                        <span className="text-gray-600">Suitable for various applications</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Care Instructions</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                        <span className="text-gray-600">Seal regularly for protection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                        <span className="text-gray-600">Clean with pH-neutral cleaners</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                        <span className="text-gray-600">Avoid acidic substances</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-900">{key}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Applications</h3>
                <p className="text-gray-600">This versatile marble is perfect for various interior and exterior applications:</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.applications.map((application, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <span className="text-gray-700 font-medium">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            How <span className="text-[#0E5543]">Marble Looks</span> in Real Life
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            See how our premium marble appears in actual installations and real-world applications
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Marble Kitchen Countertop" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Kitchen Countertops</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Marble Bathroom" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Bathroom Vanities</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Marble Flooring" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Luxury Flooring</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Marble Wall Cladding" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Wall Cladding</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Marble Fireplace" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Fireplace Surrounds</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Marble Staircase" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Elegant Staircases</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-[#0E5543]/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Natural Beauty & Characteristics</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                  <span>Unique veining patterns in every slab</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                  <span>Natural color variations and depth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                  <span>Polished surface with mirror-like finish</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => {
                  navigate(`/product/${relatedProduct.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{relatedProduct.name}</h3>
                  <p className="text-gray-500 text-sm">{relatedProduct.category}</p>
                  <button className="text-[#0E5543] text-sm font-medium mt-2 hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How Marble Looks in Real Life */}
      

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in This Product?</h2>
          <p className="text-lg mb-6 opacity-90">Get a custom quote or request samples for your project</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#0E5543] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Request Quote
            </button>
            <button className="border border-white text-[#0E5543] px-8 py-3 rounded-full font-semibold  hover:text-[#0E5543] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;