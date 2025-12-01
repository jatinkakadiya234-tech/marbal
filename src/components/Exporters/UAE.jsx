import React from 'react';
import { FaHome, FaBuilding, FaWarehouse, FaShippingFast } from 'react-icons/fa';

const UAE = () => {
  const projectTypes = [
    {
      icon: <FaHome className="text-2xl sm:text-3xl text-[#0E5543]" />,
      title: "Residential Solutions",
      description: "Transforming your residence into an elegant sanctuary constructed with durable marbles is not difficult. With us, you can always design yourself a home which is not an ordinary setup, but an opulence of luxury."
    },
    {
      icon: <FaBuilding className="text-2xl sm:text-3xl text-[#0E5543]" />,
      title: "Commercial Solutions",
      description: "For commercial construction solutions in the UAE, Indian Marbles set global standards in luxury and long-lasting durability. Whether you need a corporate space or a formal and retail outlet, our marbles enhance the ambience by understanding the requirements."
    },
    {
      icon: <FaWarehouse className="text-2xl sm:text-3xl text-[#0E5543]" />,
      title: "Indoor & Outdoor Solutions",
      description: "For modern solutions, we have both indoor and outdoor marble categories to create timeless spaces in the UAE. As the best marble supplier in UAE, we assure you of stunning marble patterns to transform your ordinary backdrops."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0E5543] to-[#1a7a5e] py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto  mt-10">

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F2E1C5] mb-6">
            Marble Export to UAE <br/> Rishabh Green Marbles
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#F2E1C5]/90 mb-8 max-w-4xl mx-auto">
            India's leading unit of marble export to UAE with trusted sources and logistics
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-[#F2E1C5]">
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm">Trusted Sources</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm">Quality Proven</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm">Expert Logistics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0E5543] mb-6">
                An Introduction to India's Leading Unit of Marble Export to UAE
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Rishabh Green Marbles is India's leading unit of marble export to UAE with trusted sources and logistics. With years of expertise in the export hub, we manufacture and deliver durable and quality-proven marbles overseas.
                </p>
                <p>
                  Moreover, for clients' convenience, we carefully design our logistics by carefully selecting project deliverables.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="UAE Marble Export"
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
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0E5543] mb-6">
              Why Choose Indian Marbles for the UAE Projects?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                Indian Marbles have been ruling natural stone production processes for years due to their fineness, affordability and durability. Specifically, for the UAE projects, products with unmatched quality and variety are preferred to match the modern lifestyle of people.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Hence, choose Rishabh Green Marbles as the best marble exporter in India to achieve high ROI on premium-quality solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Types Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0E5543] mb-6">
              Marble Application by Project Types in the UAE
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="mb-4 flex justify-center">
                  {project.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 italic text-sm sm:text-base">
              From our manufacturing unit to your doorstep, we export marble solutions through extremely responsible logistics to the UAE.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Collection Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0E5543] mb-6">
              Our Additional Collection of Natural Stones to Export in the UAE
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0E5543] mb-4">
                Durable Granite for Long-lasting Strength
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                When you demand uncompromising marble solutions in the UAE, we also pledge to deliver the needed. Hence, Rishabh Green Marbles is also the best granite exporter in India, delivering durable & strong natural stones.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Furthermore, we take pride in delivering the best to the UAE market in terms of logistics to empower success. Our vision is to exceed client expectations through practical natural stone solutions.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0E5543] mb-4">
                Polished Indian Sandstone for Ultimate Resilience
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Indian Sandstones are among the most polished and resilient natural stones due to their inherent properties. Rishabh Green Marbles is also the best sandstone exporter in India, offering a unique product catalog.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We cautiously manufacture Indian Sandstones without compromising their natural texture, to add a layer of uniqueness. The ideal applications could be interiors & exteriors with rustic-themed settings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Export Process Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0E5543] mb-6">
              The Streamlined Process of Indian Marble Export to UAE
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base">
              Operating as the best marble exporter in India, requires us to consult about material selection. This process is followed by expert quarry selection and quality inspection to professionally pack and load the details. Then we focus on shipping and custom paperwork for smooth clearance at the UAE ports.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Material Selection</h3>
              <p className="text-gray-600 text-sm">Expert consultation for material selection</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Quality Inspection</h3>
              <p className="text-gray-600 text-sm">Expert quarry selection and quality inspection</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Professional Packing</h3>
              <p className="text-gray-600 text-sm">Professional packing and loading</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Shipping & Customs</h3>
              <p className="text-gray-600 text-sm">Shipping and custom paperwork for UAE ports</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-[#0E5543] to-[#1a7a5e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F2E1C5] mb-6">
            Looking for Exclusive Marble Solutions for all your UAE Projects?
          </h2>
          <p className="text-[#F2E1C5]/90 mb-8 text-lg">
            If you are looking for exclusive marble solutions for the UAE projects, requesting a quote is just a click away. With us, you will get expert consultations in a professional transparent environment for fast responses.
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
            Connect with us and discover why we are the best marble exporter in India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UAE;