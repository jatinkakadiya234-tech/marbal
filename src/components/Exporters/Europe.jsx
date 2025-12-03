import React from 'react';
import { FaGem, FaCogs, FaShippingFast, FaCertificate, FaLeaf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Europe = () => {
  const navigate = useNavigate();
  const whyChooseReasons = [
    {
      icon: <FaGem className="text-xl sm:text-2xl text-[#0E5543]" />,
      title: "Premium Selection",
      description: "Classic Indian Green and White Marble or premium Rainforest and Fantasy Brown - we have something for every design plan."
    },
    {
      icon: <FaCogs className="text-xl sm:text-2xl text-[#0E5543]" />,
      title: "Custom Sizing & Finishing",
      description: "We provide slabs, tiles, and cut-to-size marble per your job specification with various finishes."
    },
    {
      icon: <FaLeaf className="text-xl sm:text-2xl text-[#0E5543]" />,
      title: "Sustainable Practices",
      description: "Our quarrying and processing practices are environmentally safe and responsible to protect the planet."
    },
    {
      icon: <FaShippingFast className="text-xl sm:text-2xl text-[#0E5543]" />,
      title: "Reliable Logistics",
      description: "Years of export experience ensure on-time delivery with full shipping documentation."
    },
    {
      icon: <FaCertificate className="text-xl sm:text-2xl text-[#0E5543]" />,
      title: "World-Class Quality",
      description: "World-class marble at great prices from the most reputable source in India."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0E5543] to-[#1a7a5e] py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto mt-10">
        
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#F2E1C5] mb-6"
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            Marble Export in Europe <br/> Crafting Luxury Beyond Borders
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#F2E1C5]/90 mb-8 max-w-4xl mx-auto"
             style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            Leading the way for marble export to Europe with the finest presentation of Indian natural stones, showcasing elegance and durability
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-[#F2E1C5]">
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-2 sm:px-4 py-1 sm:py-2 rounded-full">
              <span className="font-semibold text-xs" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Luxury Spaces</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-2 sm:px-4 py-1 sm:py-2 rounded-full">
              <span className="font-semibold text-xs" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Heritage Quality</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-2 sm:px-4 py-1 sm:py-2 rounded-full">
              <span className="font-semibold text-xs" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>EU Standards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0E5543] mb-6"
                  style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Premier Marble Supplier for Europe
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-xs sm:text-sm">
                <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Europe has always been prestigious in natural stone, from ancient buildings in Rome to luxury housing in Paris and London. As the appetite for high-end quality marble continues, Rishabh Green Marbles is leading the way for marble export to Europe.
                </p>
                <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Our mission is simple: to bring India's exquisitely produced marbles to the luxury spaces of Europe. As a marble supplier in Europe, we have years of experience providing materials to the best architects, designers, and builders in the region.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Europe Marble Export"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quality & Heritage Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0E5543] mb-6"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Quality & Heritage Combined
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6 text-xs sm:text-sm"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                At Rishabh Green Marbles, quality and heritage come together. We source our marble from India's finest quarries and process each slab with precision and skill, creating a product with exceptional texture, stability, and finish.
              </p>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Whether you are designing a luxury villa, commercial monument, or a historic restoration, our marbles will work perfectly with Europe's different styles of architecture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Export Process Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0E5543] mb-6"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Marble Export to Europe from India: A Quality Background
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 text-xs sm:text-sm"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Marble export to Europe from India has high quality and logistics preparation requirements. We have specialized in developing an export system which guarantees our marbles are delivered with security and precision to every destination in Europe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-[#0E5543] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-sm sm:text-base font-bold"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                1
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-center text-xs sm:text-sm"
                  style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Selection & Processing</h3>
              <p className="text-gray-600 text-xs leading-relaxed"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Each block analyzed for color, grain, and structural capacity. Modern Italian machinery for cutting with international standards.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-[#0E5543] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-sm sm:text-base font-bold"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                2
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-center text-xs sm:text-sm"
                  style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Quality Inspection</h3>
              <p className="text-gray-600 text-xs leading-relaxed"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Multiple rounds of inspection against European quality expectations. Every dimension and surface inspected by experts.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-[#0E5543] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-sm sm:text-base font-bold"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                3
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-center text-xs sm:text-sm"
                  style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Packaging & Shipping</h3>
              <p className="text-gray-600 text-xs leading-relaxed"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Marbles crated with protective padding in solid wooden crates. Direct door or port shipping available.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-[#0E5543] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-sm sm:text-base font-bold"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                4
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-center text-xs sm:text-sm"
                  style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Customs & Compliance</h3>
              <p className="text-gray-600 text-xs leading-relaxed"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Following EU import standards and environmental regulations. Complete documentation handled in advance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0E5543] mb-6"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Why Choose Rishabh Green Marbles for Export in Europe?
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-xs sm:text-sm"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              With respect to architectural appearance in Europe, perfection is the expectation, and we deliver and exceed that expectation. Here are reasons our brand is the preference of the best builders and designers in Europe:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 text-center"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
       <div className="py-16 px-4 bg-gradient-to-r from-[#0E5543] to-[#1a7a5e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F2E1C5] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            Reach Out to Us for The Best Marbles Exporter to Saudi Arabia
          </h2>
          <p className="text-[#F2E1C5]/90 mb-8 text-lg" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            Are you looking for the best Indian exporter of marble in Saudi Arabia? Work with Rishabh Green Marbles, where you will experience artistry, precision and trust in global emergence. We can customize our export solutions on traditional and exotic Stone and Marble to suit all of your needs, whether you are an architect, builder, or distributor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-[#F2E1C5] text-[#0E5543] px-8 py-3 rounded-lg font-semibold hover:bg-[#F2E1C5]/90 hover:scale-105 transition-all duration-300" 
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}
              onClick={() => navigate('/request-quote')}
            >
              Get Your Quote Today
            </button>
            <button 
              className="border-2 border-[#F2E1C5] text-[#0E5543] px-8 py-3 rounded-lg font-semibold hover:bg-[#F2E1C5] hover:text-[#0E5543] hover:scale-105 transition-all duration-300" 
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}
              onClick={() => navigate('/contact')}
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Europe;