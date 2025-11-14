import React from 'react';
import { FaTrophy, FaLandmark, FaIndustry, FaShippingFast } from 'react-icons/fa';

const Qatar = () => {
  const projectTypes = [
    {
      icon: <FaTrophy className="text-3xl text-[#0E5543]" />,
      title: "Sports Infrastructure Projects",
      description: "Qatar is a global hub for hosting International Sports Events and has created a need for top-class infrastructure. From sport stadiums to training spaces, the projects require extreme quality-proven marbles for exceptional performances. For timely and reliable marble export to Qatar, Rishabh Green Marbles offer withstanding and polished marbles."
    },
    {
      icon: <FaLandmark className="text-3xl text-[#0E5543]" />,
      title: "Traditional Renovations",
      description: "Sports infrastructure projects of this extent require resistant-proof Indian Marbles for years of use. This is due to Qatar's commitment to preserve its rich architectural heritage while maintaining cultural landmarks. For this, the versatility of Indian Marbles will complement the historical elements needed."
    },
    {
      icon: <FaIndustry className="text-3xl text-[#0E5543]" />,
      title: "Energy Sector Transformations",
      description: "Qatar's energy sector demands extensive technological sophistication to lead the administration. Therefore, Rishabh Green Marbles offer durable and high-quality marbles to suit professional aesthetics. We can be your best marble supplier in Qatar, assisting the energy sector to build symbolic infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0E5543] to-[#1a7a5e] py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto mt-10">
         
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2E1C5] mb-6">
            Marble Export to Qatar | Rishabh Green Marbles
          </h1>
          <p className="text-lg sm:text-xl text-[#F2E1C5]/90 mb-8 max-w-4xl mx-auto">
            India's leading unit of marble export to Qatar with trusted solutions for luxurious infrastructural development
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[#F2E1C5]">
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-6 py-3 rounded-full">
              <span className="font-semibold">Rich Heritage</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-6 py-3 rounded-full">
              <span className="font-semibold">Luxury Infrastructure</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-6 py-3 rounded-full">
              <span className="font-semibold">Global Standards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E5543] mb-6">
                An Introduction to India's Leading Unit of Marble Export to Qatar
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E5543] mb-6">
              Why Choosing the Right Marble Exporter is Necessary in Qatar?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6">
                Choosing the right marble exporter is necessary in Qatar due to its high global standards. Therefore, Rishabh Green Marbles match these global standards by providing quality-proven and authentic marble solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E5543] mb-6">
              Marble Application by Project Types in Qatar
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="mb-4 flex justify-center">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E5543] mb-6">
              Our Additional Collection of Natural Stones to Export in Qatar
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0E5543] mb-4">
                Premium Granite – For Qatar's Modern Infrastructure
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As Qatar progresses towards its cutting-edge infrastructure, the demand for modern building materials exceed. Hence, Rishabh Green Marbles also operate as the best granite exporter in India for delivering the strength needed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We Support Qatar's infrastructural investments and strive to serve the nation's landmark projects' worth through our premium granites.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0E5543] mb-4">
                Natural Indian Sandstone – For Qatar's Refined Luxury
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For constructing Qatar's Refined Luxury, discerning development is required for delivering organic richness. Furthermore, Rishabh Green Marbles acts as the best sandstone exporter in India, for such luxurious designs.
              </p>
              <p className="text-gray-700 leading-relaxed">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E5543] mb-6">
              The Streamlined Process of Indian Marble Export to Qatar
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              At Rishabh Green Marbles, we understand that Indian marble export to Qatar need to be straightforward and transparent. Hence, there are several streamlined steps scheduled to balance quality with the budget.
            </p>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We follow steps like material consultation and transparent documentation for quality assurance and production. Furthermore, for appropriate delivery, we coordinate with contractors and installation teams overseas for long-term durability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Material Consultation</h3>
              <p className="text-gray-600 text-sm">Expert consultation for material selection</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Transparent documentation process</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">Quality assurance and production</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Delivery Coordination</h3>
              <p className="text-gray-600 text-sm">Coordination with contractors and installation teams</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-[#0E5543] to-[#1a7a5e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F2E1C5] mb-6">
            Looking for Exclusive Marble Solutions for all your Qatar Projects?
          </h2>
          <p className="text-[#F2E1C5]/90 mb-6 text-lg">
            Qatar's extensive infrastructural development indeed requires exclusive marble solutions. So, why delay the process when you can seek premium Indian Marbles, granite, and sandstones from a single outlet?
          </p>
          <p className="text-[#F2E1C5]/90 mb-8 text-lg">
            We, Rishabh Green Marbles, serve our international clients with appropriate procurement specifications with immediate effect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F2E1C5] text-[#0E5543] px-8 py-3 rounded-lg font-semibold hover:bg-[#F2E1C5]/90 transition-colors">
              Request Your Quote Now
            </button>
            <button className="border-2 border-[#F2E1C5] text-[#F2E1C5] px-8 py-3 rounded-lg font-semibold hover:bg-[#F2E1C5] hover:text-[#0E5543] transition-colors">
              Connect With Us
            </button>
          </div>
          <p className="text-[#F2E1C5]/80 mt-6 text-sm">
            Request your quote to discover why we claim to be the best marble exporter in India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qatar;