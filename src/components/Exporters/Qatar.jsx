import React from 'react';
import { FaTrophy, FaLandmark, FaIndustry, FaShippingFast } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Qatar = () => {
  const navigate = useNavigate();
  const projectTypes = [
    {
      icon: <FaTrophy className="text-2xl sm:text-3xl text-[#0E5543]" />,
      title: "Sports Infrastructure Projects",
      description: "Qatar is a global hub for hosting International Sports Events and has created a need for top-class infrastructure. From sport stadiums to training spaces, the projects require extreme quality-proven marbles for exceptional performances. For timely and reliable marble export to Qatar, Rishabh Green Marbles offer withstanding and polished marbles."
    },
    {
      icon: <FaLandmark className="text-2xl sm:text-3xl text-[#0E5543]" />,
      title: "Traditional Renovations",
      description: "Sports infrastructure projects of this extent require resistant-proof Indian Marbles for years of use. This is due to Qatar's commitment to preserve its rich architectural heritage while maintaining cultural landmarks. For this, the versatility of Indian Marbles will complement the historical elements needed."
    },
    {
      icon: <FaIndustry className="text-2xl sm:text-3xl text-[#0E5543]" />,
      title: "Energy Sector Transformations",
      description: "Qatar's energy sector demands extensive technological sophistication to lead the administration. Therefore, Rishabh Green Marbles offer durable and high-quality marbles to suit professional aesthetics. We can be your best marble supplier in Qatar, assisting the energy sector to build symbolic infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0E5543] to-[#1a7a5e] py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto mt-10">
         
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F2E1C5] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            Marble Export to Qatar <br/> Rishabh Green Marbles
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#F2E1C5]/90 mb-8 max-w-4xl mx-auto" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            India's leading unit of marble export to Qatar with trusted solutions for luxurious infrastructural development
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-[#F2E1C5]">
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Rich Heritage</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Luxury Infrastructure</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Global Standards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0E5543] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                An Introduction to India's Leading Unit of Marble Export to Qatar
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Qatar is always known for its rich heritage and luxurious infrastructural development, where natural stones are required. Hence, Rishabh Green Marbles offer trusted marble solutions as the best marble exporter in India overseas, especially in Qatar.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Qatar Marble Export"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Why Choosing the Right Marble Exporter is Necessary in Qatar?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Choosing the right marble exporter is necessary in Qatar due to its high global standards. Therefore, Rishabh Green Marbles match these global standards by providing quality-proven and authentic marble solutions.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                In such global phases, we meet reliable timelines for critical exports, necessary for the Qatari market.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Types Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Marble Application by Project Types in Qatar
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="mb-4 flex justify-center">
                  {project.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Collection Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Our Additional Collection of Natural Stones to Export in Qatar
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0E5543] mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Premium Granite – For Qatar's Modern Infrastructure
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                As Qatar progresses towards its cutting-edge infrastructure, the demand for modern building materials exceed. Hence, Rishabh Green Marbles also operate as the best granite exporter in India for delivering the strength needed.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                We Support Qatar's infrastructural investments and strive to serve the nation's landmark projects' worth through our premium granites.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0E5543] mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Natural Indian Sandstone – For Qatar's Refined Luxury
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                For constructing Qatar's Refined Luxury, discerning development is required for delivering organic richness. Furthermore, Rishabh Green Marbles acts as the best sandstone exporter in India, for such luxurious designs.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Our sandstones resonate with Qatar's architectural lineage and can redefine the significant dimension of luxury.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Export Process Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              The Streamlined Process of Indian Marble Export to Qatar
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 text-base sm:text-lg" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              At Rishabh Green Marbles, we understand that Indian marble export to Qatar need to be straightforward and transparent. Hence, there are several streamlined steps scheduled to balance quality with the budget.
            </p>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              We follow steps like material consultation and transparent documentation for quality assurance and production. Furthermore, for appropriate delivery, we coordinate with contractors and installation teams overseas for long-term durability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">Material Consultation</h3>
              <p className="text-gray-600 text-sm sm:text-base">Expert consultation for material selection</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">Documentation</h3>
              <p className="text-gray-600 text-sm sm:text-base">Transparent documentation process</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">Quality Assurance</h3>
              <p className="text-gray-600 text-sm sm:text-base">Quality assurance and production</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">Delivery Coordination</h3>
              <p className="text-gray-600 text-sm sm:text-base">Coordination with contractors and installation teams</p>
            </div>
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

export default Qatar;