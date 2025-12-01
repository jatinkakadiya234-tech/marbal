import React from 'react';
import { FaGem, FaCogs, FaShieldAlt, FaShippingFast, FaLeaf, FaAward } from 'react-icons/fa';

const SaudiArabia = () => {
  const marbleVarieties = [
    {
      name: "Green Marble (Rishabh Green Signature)",
      description: "Finely finished green marble, suited for contemporary design and architecture. Recognizable by its deep green color and attractive veining."
    },
    {
      name: "White Marble",
      description: "Includes Makrana and Morwad white marble. The perfect marble for luxury interiors, temples and high-end residential projects."
    },
    {
      name: "Rainforest Marble",
      description: "Rich and unique patterns like tree roots, and earthy textures. Always the best choice for accent walls or statement pieces."
    },
    {
      name: "Black Marble",
      description: "A sophisticated, powerful, and timeless option. An ideal option for modern architectural projects."
    },
    {
      name: "Beige and Brown Marble",
      description: "Looking for warmer tones for a natural environment. Ideal for Saudi villas or design hotels."
    },
    {
      name: "Sandstones and Granites",
      description: "Used for outdoor paving, facades and in the commercial environment, a balance of design and performance capability."
    }
  ];

  const whyChooseReasons = [
    {
      icon: <FaAward className="text-2xl sm:text-3xl text-[#0E5543]" />,
      title: "Years of Experience",
      description: "We are a top name in the natural stone business, both in India and globally."
    },
    {
      icon: <FaShieldAlt className="text-2xl sm:text-3xl text-[#0E5543]" />,
      title: "Rigorous Quality Control",
      description: "We perform due diligence on each slab before it is shipped."
    },
    {
      icon: <FaCogs className="text-2xl sm:text-3xl text-[#0E5543]" />,
      title: "Modern Processing Facility",
      description: "We use the latest machinery for cutting, polishing, and finishing."
    },
    {
      icon: <FaShippingFast className="text-2xl sm:text-3xl text-[#0E5543]" />,
      title: "International Logistics",
      description: "We manage International freight forwarding and exports for timely shipping."
    },
    {
      icon: <FaLeaf className="text-2xl sm:text-3xl text-[#0E5543]" />,
      title: "Responsible Sourcing",
      description: "Our quarries comply with ethical quarrying standards and sustain the environment."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0E5543] to-[#1a7a5e] py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto mt-10">
        
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F2E1C5] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            Marble Exporters in Saudi Arabia
          </p>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F2E1C5]/90 mb-8 max-w-4xl mx-auto" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            Delivering Timeless Indian Marble Excellence to Saudi Arabia
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-[#F2E1C5]">
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Luxury & Strength</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Decades of Excellence</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Riyadh • Jeddah • Dammam</span>
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
                Trusted Marble Exporters to Saudi Arabia
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Rishabh Green Marbles is one of the most trusted marble exporters to Saudi Arabia when it comes to designing spaces that exude luxury, strength and beauty. Our heritage has been developed over decades of precision, excellence and an understanding of natural stone.
                </p>
                <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  From Rajasthan's palaces to Riyadh's architectural masterpieces, our marbles offer beauty and quality that lasts in perpetuity. Whether it is large infrastructure, hotel interiors, or custom homes, Rishabh Green will make certain every block, slab and tile shows our dedication to excellence.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Saudi Arabia Marble Export"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Craftsmanship Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0E5543] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Bringing the Craftsmanship of India to the Vision of Saudi Arabia
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                India has always been famed for its beautiful natural stones, especially marble that has its origin as an expression of the earth's artistry in its purest form. At Rishabh Green, we are proud to be part of this global exchange in which we export from India quality marble to Saudi Arabia like no other.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Our process combines traditional stone craftsmanship and modern processing technologies, which allow each block or slab of the marble to meet international standards for strength, finish, and aesthetic appeal.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                We export into megacities such as Riyadh, Jeddah, Dammam, Al Khobar, and Mecca with marble commonly used in luxury villas, hotels, mosques, and in commercial use. Our marbles are beautiful and made durable for the climate of Saudi Arabia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Export Process Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0E5543] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              How We Proceed: Successful Exports to Saudi Arabia
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl text-gray-600 mb-8" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              A Journey from Quarry to Quality
            </h3>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 text-sm sm:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Marble exportation from India to Saudi Arabia is not a mere process of trade. It is an experience, which we at Rishabh Green Marbles take pride in. The foundation of our success in the Saudi market has been our transparency, professionalism, and expedience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-[#0E5543] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                1
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-center text-sm sm:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Choosing & Customization</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                We assist clients in choosing appropriate marble from shade, patterns, finish to slab sizes for design intent and architectural style.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-[#0E5543] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                2
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-center text-sm sm:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Precise Processing</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Advanced technology in our Udaipur factory producing precise cut, mirror-like polish, uniform texture and color.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-[#0E5543] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                3
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-center text-sm sm:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Quality Assurance</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Stringent tests of each slab checking strength, polish, thickness, and color shade to meet international standards.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-[#0E5543] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                4
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-center text-sm sm:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Safe Packing & Shipping</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                State-of-the-art wooden crates, moisture-proof wrapping for safe shipping and transit to Saudi Arabia.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-[#0E5543] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                5
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-center text-sm sm:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Prompt Delivery & Support</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>ily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Timely delivery record and customer service support making us reliable marble exporters to Saudi Arabia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Natural Stones Collection */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E5543] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Natural Stones Exported to Saudi Arabia
            </h2>
            <h3 className="text-lg sm:text-xl text-gray-600 mb-8" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              A Collection of Luxury and Legacy
            </h3>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Our portfolio includes several variants of Indian natural stones — each one intended to enhance the aesthetic and structural value of your project. Below, you can find some of the most popular varieties we supply to Saudi Arabia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marbleVarieties.map((variety, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-[#0E5543] mb-3" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  {variety.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  {variety.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 italic max-w-4xl mx-auto" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              All stone quarried, processed and delivered to perfection including India's tradition, craftsmanship and with the ability to withstand Saudi environment expertly.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E5543] mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Why Rishabh Green Marbles for Saudi Arabia?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="mb-4 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              By selecting Rishabh Green, you are choosing a trusted name of excellence, innovation, and dependability, and each project is a symbol of excellence.
            </p>
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
            <button className="bg-[#F2E1C5] text-[#0E5543] px-8 py-3 rounded-lg font-semibold hover:bg-[#F2E1C5]/90 transition-colors" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Get Your Quote Today
            </button>
            <button className="border-2 border-[#F2E1C5] text-[#F2E1C5] px-8 py-3 rounded-lg font-semibold hover:bg-[#F2E1C5] hover:text-[#0E5543] transition-colors" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaudiArabia;