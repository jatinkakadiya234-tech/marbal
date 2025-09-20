import React, { useState } from 'react';
import { ChevronRight, Hammer, Layers, Zap, Shield, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const MarbleQuarryHome = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2E1C5]">
      {/* Header */}
    

      {/* Hero Section */}
   

      {/* Cutting Process Section */}
      <section className="py-16 lg:py-24 ">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block border border-[#0E5543] text-[#0E5543] px-4 py-2 rounded-full text-sm font-medium">
              Our Expertise
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0E5543]">Precision Cutting Processes</h2>
            <p className="text-xl text-[#0E5543]/80 max-w-2xl mx-auto">
              State-of-the-art technology meets traditional craftsmanship in our comprehensive marble processing
              operations.
            </p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    {
      title: "Block Extraction",
      description:
        "Precise extraction of marble blocks using diamond wire cutting technology for minimal waste and maximum quality.",
      image: "https://thumbs.dreamstime.com/b/elegant-gold-black-marble-texture-featuring-intricate-wavy-patterns-design-showcases-luxurious-sophisticated-369858857.jpg", // replace with your actual image path
    },
    {
      title: "Diamond Cutting",
      description:
        "Advanced diamond blade cutting systems ensure smooth, precise cuts with exceptional surface finish.",
      image: "https://thumbs.dreamstime.com/b/elegant-gold-black-marble-texture-featuring-intricate-wavy-patterns-design-showcases-luxurious-sophisticated-369858857.jpg",
    },
    {
      title: "Quality Control",
      description:
        "Rigorous quality inspection at every stage ensures only the finest marble reaches our customers.",
      image: "https://thumbs.dreamstime.com/b/elegant-gold-black-marble-texture-featuring-intricate-wavy-patterns-design-showcases-luxurious-sophisticated-369858857.jpg",
    },
    {
      title: "Custom Shaping",
      description:
        "Specialized shaping and finishing processes to meet exact specifications for any project requirement.",
      image: "https://thumbs.dreamstime.com/b/elegant-gold-black-marble-texture-featuring-intricate-wavy-patterns-design-showcases-luxurious-sophisticated-369858857.jpg",
    },
  ].map((process, index) => (
    <div
      key={index}
      className="bg-white rounded-xl border border-[#0E5543]/20 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="p-6 space-y-4">
        <div className="aspect-[4/3] rounded-lg overflow-hidden  flex items-center justify-center">
          <img
            src={process?.image|| "https://thumbs.dreamstime.com/b/elegant-gold-black-marble-texture-featuring-intricate-wavy-patterns-design-showcases-luxurious-sophisticated-369858857.jpg"}
            alt={process.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-lg text-[#0E5543]">{process.title}</h3>
          <p className="text-[#0E5543]/80 text-sm leading-relaxed">
            {process.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-[#0E5543] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Tons Processed" },
              { number: "500+", label: "Projects Completed" },
              { number: "25+", label: "Years Experience" },
              { number: "99%", label: "Quality Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-[#F2E1C5]">{stat.number}</div>
                <div className="font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 lg:py-24 bg-[#F2E1C5]">
        <div className="container mx-auto px-4">
          <div className="bg-[#0E5543] rounded-2xl p-8 lg:p-16 text-center text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold">Ready to Start Your Marble Project?</h2>
              <p className="text-xl opacity-90">
                Contact our expert team to discuss your marble cutting and processing needs. We deliver excellence in
                every stone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#F2E1C5] text-[#0E5543] hover:bg-[#e6d2b3] px-6 py-3 rounded-lg font-medium transition-colors">
                  Get Quote
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
                  Learn More About Our Processes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

     
 
    </div>
  );
};

export default MarbleQuarryHome;