import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import sandstone images
import beigeSandstone from "../../assets/Sandstone/Beige Sandstone.jpg";
import chocolateSandstone from "../../assets/Sandstone/Chocolate Sandstone.jpg";
import greySandstone from "../../assets/Sandstone/Grey Sandstone.jpg";
import gwaliorWhiteMint from "../../assets/Sandstone/Gwalior White Mint Sandstone _ White - Sandstone Slabs.jpeg";
import jaisalmerYellow from "../../assets/Sandstone/jaisalmer yellow sandstone.jpg";
import jodhpurPink from "../../assets/Sandstone/JODHPUR PINK Snadstone.jpg";
import kotaBlue from "../../assets/Sandstone/kota blue.jpg";
import merryGoldSandstone from "../../assets/Sandstone/merry-gold-500x500.webp";
import rainbowSandstone from "../../assets/Sandstone/Rainbow Sandstone.jpeg";
import redSandstone from "../../assets/Sandstone/Red Sandstone.jpg";
import teakwoodSandstone from "../../assets/Sandstone/Teakwood-Sandstone.jpg";

const sandstoneProducts = [
  { id: 53, name: "Beige Sandstone", image: beigeSandstone },
  { id: 54, name: "Chocolate Sandstone", image: chocolateSandstone },
  { id: 55, name: "Grey Sandstone", image: greySandstone },
  { id: 56, name: "Gwalior White Mint", image: gwaliorWhiteMint },
  { id: 57, name: "Jaisalmer Yellow", image: jaisalmerYellow },
  { id: 58, name: "Jodhpur Pink", image: jodhpurPink },
  { id: 59, name: "Kota Blue", image: kotaBlue },
  { id: 60, name: "Merry Gold Sandstone", image: merryGoldSandstone },
  { id: 61, name: "Rainbow Sandstone", image: rainbowSandstone },
  { id: 62, name: "Red Sandstone", image: redSandstone },
  { id: 63, name: "Teakwood Sandstone", image: teakwoodSandstone },
];

export default function Sandstone() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = Math.ceil(sandstoneProducts.length / 4);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0E5543]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A7A62]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Premium Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Natural <span className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] bg-clip-text text-transparent">Sandstone</span> Collection
          </h1>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-32"></div>
            <div className="w-3 h-3 bg-[#0E5543] rounded-full mx-4"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-32"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover our authentic sandstone collection, perfect for creating timeless architectural beauty with natural elegance.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden relative mb-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {sandstoneProducts.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-2">
                  <div 
                    className="group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0E5543] shadow-lg">
                          Premium
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 text-center group-hover:text-[#0E5543] transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="mt-3 flex justify-center">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <button
            className="absolute left-2 top-[120px] -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#0E5543] p-3 rounded-full shadow-xl hover:bg-white hover:text-[#1A7A62] transition-all duration-300"
            onClick={prevSlide}
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            className="absolute right-2 top-[120px] -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#0E5543] p-3 rounded-full shadow-xl hover:bg-white hover:text-[#1A7A62] transition-all duration-300"
            onClick={nextSlide}
          >
            <FiChevronRight size={18} />
          </button>

          {/* Mobile Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {sandstoneProducts.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide 
                    ? "bg-gradient-to-r from-[#0E5543] to-[#1A7A62] shadow-lg" 
                    : "bg-gray-300"
                }`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>

        {/* Desktop Carousel - 4 products per row */}
        <div className="hidden sm:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {Array.from({ length: maxSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-4 gap-6">
                  {sandstoneProducts
                    .slice(slideIndex * 4, slideIndex * 4 + 4)
                    .map((product) => (
                      <div 
                        key={product.id} 
                        className="group bg-white  shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 border border-gray-100"
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-4 right-4">
                            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0E5543] shadow-lg">
                              Premium
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="bg-white/90 backdrop-blur-sm text-[#0E5543] px-4 py-2 rounded-full text-sm font-semibold hover:bg-white transition-colors">
                              View Details
                            </button>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 text-center group-hover:text-[#0E5543] transition-colors duration-300">
                            {product.name}
                          </h3>
                          <div className="mt-3 flex justify-center">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Controls */}
          <button
            className="absolute left-4 top-[120px] -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#0E5543] p-4 rounded-full shadow-2xl hover:bg-white hover:text-[#1A7A62] transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-[120px] -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#0E5543] p-4 rounded-full shadow-2xl hover:bg-white hover:text-[#1A7A62] transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={nextSlide}
            disabled={currentSlide === maxSlides - 1}
          >
            <FiChevronRight size={24} />
          </button>

          {/* Desktop Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: maxSlides }, (_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  idx === currentSlide 
                    ? "bg-gradient-to-r from-[#0E5543] to-[#1A7A62] shadow-lg" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>
        
        {/* About Sandstone Content */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] bg-clip-text text-transparent">Sandstone Exporter</span> in India | Rishabh Green Marbles
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-24"></div>
              <div className="w-2 h-2 bg-[#0E5543] rounded-full mx-3"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-24"></div>
            </div>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              Rishabh Green Marbles is a premier sandstone exporter in India, offering high-quality Indian sandstones with reliable shipping networks. We take pride in exporting premium-quality productions of Rajasthan, a trusted manufacturing unit of Indian sandstones.
            </p>
          </div>

          {/* Premier Worldwide Exporter */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Premier Worldwide Exporter of <span className="text-[#0E5543]">Indian Sandstone</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rishabh Green Marbles has successfully established itself as the premier exporter of Indian Sandstone globally. We serve clients across the globe with unwavering commitment and durability.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The major reason behind global expansion is our state-of-the-art export techniques necessary for maintaining a diverse clientele. With top-class shipping networks, we export sandstone in bulk quantities through customized procurement facilities.
                </p>
              </div>
              <div className="bg-[#0E5543]/5 rounded-xl p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Customer-Centric Approach</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Since we are the best sandstone exporter in India for over years now, our shipping strategy is customer-centric. We understand what is best for you and deliver it accordingly.
                </p>
              </div>
            </div>
          </div>

          {/* Sandstone Varieties & Collection */}
          <div className="bg-gradient-to-br from-[#0E5543]/5 to-[#1A7A62]/5 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Sandstone <span className="text-[#0E5543]">Varieties & Collection</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our collection of Indian Sandstone consists of a variety of bold characters like Mint, Teak Wood, and Rainbow etc. These are the finest collection at Rishabh Green Marbles with different colors and textures for every design.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you seek our collection in different sizes or for different surfaces, we deal in comprehensive varieties. Moreover, we also have premium options available in different colors such as grey, red, beige, and chocolate.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Global Success</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  While our major focus is on Indian Sandstone, we also offer bestselling varieties to ensure global success.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                    <span className="text-gray-600 text-sm">Mint Sandstone</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                    <span className="text-gray-600 text-sm">Teak Wood Sandstone</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                    <span className="text-gray-600 text-sm">Rainbow Sandstone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Rishabh Green Marble's Collection */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Choose <span className="text-[#0E5543]">Rishabh Green Marble's</span> Collection?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">UAE</span>
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">Global Trust</h4>
                <p className="text-gray-600 text-sm">
                  Trusted in UAE, Qatar, Saudi Arabia alongside Europe through advanced export facilities.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xs">Direct</span>
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">Direct Relationships</h4>
                <p className="text-gray-600 text-sm">
                  We maintain direct relationships with people for transparency and effective communication.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xs">Multi</span>
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">Complete Solutions</h4>
                <p className="text-gray-600 text-sm">
                  Best marble and granite exporter in India, offering complete expert solutions.
                </p>
              </div>
            </div>
          </div>

          {/* How Sandstones Transform Spaces */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#1A7A62]/5 to-[#0E5543]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Know how our <span className="text-[#0E5543]">Sandstones Transform</span> every Space
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  In today's time, our sandstones can transform ordinary spaces into remarkable environments through versatile applications. Our exports not only occupy space but redefine visuals through sophisticated sandstone varieties.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  From intimate to commercial settings, our marbles, granite and sandstones, etc. maintain strength and durability. As the best sandstone exporter in India, we transform spaces like, floors, walls, kitchen settings, etc.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Specialized <span className="text-[#0E5543]">Transformation Services</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm">
                    Specialize in transforming every little detail through export services
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm">
                    Customized sandstone solutions for curating existing environments
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm">
                    Elevate spaces with modern details and sophisticated varieties
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Contact us today for Quality <span className="text-yellow-300">Indian Sandstones</span>
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
              Ready to source premium and high-quality Indian Sandstones for transforming your space through modern details? Associating with Rishabh Green Marbles can help you gain customized solutions for smart spaces.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold mb-2">Bulk Quantities Available</h4>
                <p className="text-sm opacity-90">Contact us for quality Indian Sandstones in bulk quantities as we are just a message away.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold mb-2">Global Shipping Solutions</h4>
                <p className="text-sm opacity-90">Best marble exporter company in India, offering global and personalized shipping solutions.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Create Timeless Architecture</h2>
            <p className="text-lg mb-6 opacity-90">Get expert guidance on sandstone selection for your architectural projects</p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-[#0E5543] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Get Architecture Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
