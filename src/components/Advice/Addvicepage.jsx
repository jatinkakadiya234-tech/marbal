import React from 'react';
import { motion } from 'framer-motion';
import HeaderContent from '../Helper/HeaderContent';
import { FaShieldAlt } from 'react-icons/fa';

export default function AdvicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A3D2F] via-[#0E5543] to-[#126A52] font-['Inter']">
      {/* Custom Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <main className="relative max-w-7xl mx-auto px-4 pb-20 pt-32">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F2E1C5]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F2E1C5]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Premium Hero Section */}
      <section className="relative mb-20">
  <div className="relative rounded-2xl overflow-hidden bg-[#F2E1C5] border border-[#0E5543]/20">
    
    <div className="grid md:grid-cols-2 min-h-[500px]">
      {/* Image Side */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury marble interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0E5543]/10"></div>
      </div>

      {/* Content Side */}
      <div className="flex items-center p-8 md:p-12">
        <div>
          <span className="text-[#0E5543]/70 text-sm font-['Inter'] uppercase tracking-widest mb-4 block">
            Expert Marble Care
          </span>
          
          <h1 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] font-bold text-[#0E5543] mb-4 leading-tight">
            Preserve Your Marble's Natural Beauty
          </h1>
          
          <p className="text-[#0E5543]/80 font-['Source_Serif_Pro'] leading-relaxed mb-6">
            Professional care solutions to maintain your marble's elegance for generations to come.
          </p>

          <button className="px-6 py-2.5 bg-[#0E5543] text-[#F2E1C5] rounded-full font-['Inter'] font-medium text-sm hover:bg-[#1A7A62] transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Premium Features Grid */}
        <section className="relative mb-28 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E5543]/10 via-[#0A3D2F]/5 to-[#126A52]/10 rounded-3xl"></div>
          <div className="relative bg-gradient-to-br from-[#F2E1C5] via-[#F8EDDC] to-[#FAF3E5] backdrop-blur-lg rounded-3xl p-12 border border-[#0E5543]/20 shadow-2xl">
            <div className="text-center mb-16">
              <span className="text-[#0E5543]/80 text-sm font-light tracking-widest mb-2 block">OUR EXPERTISE</span>
              <h2 className="text-4xl font-playfair font-bold text-[#0A3D2F] mb-4">Premium Care Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0E5543] via-[#0E5543]/70 to-[#0E5543] mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "✨",
                  title: "Daily Maintenance",
                  desc: "Gentle cleaning routines that protect your marble's natural luster without compromising its integrity.",
                  bg: "from-[#0E5543] to-[#0A3D2F]",
                  border: "border-[#0E5543]/30",
                  cardBg: "from-[#F8EDDC] to-[#FAF3E5]",
                  iconBg: "from-[#0E5543] to-[#0A3D2F]",
                  iconText: "text-[#F2E1C5]"
                },
                {
                  icon: "🛡️",
                  title: "Advanced Protection",
                  desc: "Professional sealing techniques that create an invisible barrier against stains and etching.",
                  bg: "from-[#126A52] to-[#0E5543]",
                  border: "border-[#0E5543]/40",
                  cardBg: "from-[#F2E1C5] to-[#F8EDDC]",
                  iconBg: "from-[#F2E1C5] to-[#FAF3E5]",
                  iconText: "text-[#0E5543]"
                },
                {
                  icon: "💎",
                  title: "Expert Restoration",
                  desc: "Specialized treatments to restore your marble's original brilliance and smooth finish.",
                  bg: "from-[#0A3D2F] to-[#126A52]",
                  border: "border-[#0E5543]/25",
                  cardBg: "from-[#FAF3E5] to-[#F8EDDC]",
                  iconBg: "from-[#0E5543] to-[#126A52]",
                  iconText: "text-[#F2E1C5]"
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  {/* Hover background glow */}
                  <div className={`absolute inset-0 ${feature.bg} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  {/* Main card with skin shade background */}
                  <div className={`relative bg-gradient-to-br ${feature.cardBg} backdrop-blur-lg rounded-2xl p-8 border ${feature.border} hover:border-[#0E5543]/60 hover:shadow-xl transition-all duration-500 hover:translate-y-2 group-hover:scale-105`}>

                    {/* Animated top accent bar */}
                    <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#0E5543] to-[#126A52] group-hover:w-full transition-all duration-500 ease-out"></div>

                    {/* Icon container */}
                    <div className="absolute -top-6 left-8">
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border-2 border-white/30`}>
                        <span className={feature.iconText}>{feature.icon}</span>
                      </div>
                    </div>

                    {/* Content with green text */}
                    <h3 className="text-2xl font-playfair font-semibold text-[#0A3D2F] mb-4 pt-6 group-hover:text-[#126A52] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-[#0E5543]/90 leading-relaxed font-light group-hover:text-[#0E5543] transition-colors duration-300">
                      {feature.desc}
                    </p>

                    {/* Hover decorative elements */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                    </div>

                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                      <div className="w-2 h-2 bg-[#0E5543] rounded-full"></div>
                    </div>

                    {/* Subtle pattern overlay on hover */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%230E5543%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%220.5%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Floating action button on hover */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-400 delay-200">
                    <button className="px-5 py-2 bg-[#0E5543] text-[#F2E1C5] rounded-full text-sm font-semibold shadow-lg hover:bg-[#0A3D2F] hover:scale-105 transition-all duration-300 border border-[#0E5543]/30">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Section decorative elements */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-[#0E5543]/10 rounded-full blur-sm"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-[#0A3D2F]/10 rounded-full blur-sm"></div>
            <div className="absolute top-12 left-12 w-8 h-8 bg-[#126A52]/10 rounded-full blur-sm"></div>
          </div>
        </section>

        {/* Premium Care Guide */}
        <section className="relative mb-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D2F]/30 via-[#0E5543]/20 to-[#1A7A5E]/30 rounded-3xl"></div>
          <div className="relative bg-gradient-to-br from-[#0A3D2F]/25 via-[#0E5543]/20 to-[#126A52]/25 backdrop-blur-lg rounded-3xl p-12 border border-[#F2E1C5]/25">
            <div className="text-center mb-16">
              <span className="text-[#F2E1C5]/80 text-sm font-light tracking-widest mb-2 block">EXPERT GUIDANCE</span>
              <h2 className="text-5xl font-playfair font-bold text-[#F2E1C5] mb-4">Premium Care Protocol</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F2E1C5] via-[#F2E1C5]/50 to-[#F2E1C5] mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Do's */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0E5543]/20 to-[#1A7A5E]/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-[#0E5543]/30 to-[#0A3D2F]/25 backdrop-blur-lg rounded-2xl p-8 border border-[#0E5543]/40 hover:border-[#0E5543]/60 transition-all duration-500">
                  <h3 className="text-2xl font-playfair font-semibold text-[#F2E1C5] mb-6 flex items-center">
                    <span className="w-10 h-10 bg-[#0E5543] rounded-full flex items-center justify-center mr-4 text-[#F2E1C5] border border-[#F2E1C5]/30">
                      ✓
                    </span>
                    Essential Practices
                  </h3>

                  <div className="space-y-4">
                    {[
                      "Use pH-neutral cleaners specifically formulated for natural stone",
                      "Blot spills immediately with soft, absorbent cloths",
                      "Implement regular professional sealing schedules",
                      "Use protective pads under decorative items",
                      "Maintain consistent humidity levels"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                        <div className="w-2 h-2 bg-[#F2E1C5] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-[#F2E1C5]/80 group-hover/item:text-[#F2E1C5] transition-colors text-lg font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Don'ts */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D2F]/25 to-[#0E5543]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-[#0A3D2F]/30 to-[#0E5543]/25 backdrop-blur-lg rounded-2xl p-8 border border-[#F2E1C5]/30 hover:border-[#F2E1C5]/50 transition-all duration-500">
                  <h3 className="text-2xl font-playfair font-semibold text-[#F2E1C5] mb-6 flex items-center">
                    <span className="w-10 h-10 bg-[#0A3D2F] rounded-full flex items-center justify-center mr-4 text-[#F2E1C5] border border-[#F2E1C5]/30">
                      ✗
                    </span>
                    Critical Avoidances
                  </h3>

                  <div className="space-y-4">
                    {[
                      "Avoid acidic substances like vinegar or citrus cleaners",
                      "Never use abrasive pads or harsh chemicals",
                      "Don't place hot items directly on surfaces",
                      "Avoid dragging heavy objects across marble",
                      "Never use wax-based or oil-based polishes"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                        <div className="w-2 h-2 bg-[#F2E1C5] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-[#F2E1C5]/80 group-hover/item:text-[#F2E1C5] transition-colors text-lg font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="relative mb-20">
          <div className="relative bg-gradient-to-br from-[#F2E1C5] via-[#F8EDDC] to-[#F2E1C5] rounded-3xl p-12 border-2 border-[#0E5543]/10 shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0E5543] via-[#1A7A62] to-[#0E5543]"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0E5543]/5 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#1A7A62]/5 rounded-full"></div>

            <div className="text-center mb-16 relative z-10">
              <span className="text-[#0E5543]/70 text-sm font-light tracking-widest mb-2 block font-['Inter'] uppercase">
                MAINTENANCE SCHEDULE
              </span>
              <h2 className="text-5xl font-['Cormorant_Garamond'] font-bold text-[#0E5543] mb-4 leading-tight">
                Premium Care Timeline
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0E5543] via-[#1A7A62] to-[#0E5543] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  period: "Daily",
                  tasks: ["Soft dusting", "Spill management", "Quick inspection"],
                  icon: "🔄",
                  frequency: "Every day"
                },
                {
                  period: "Weekly",
                  tasks: ["Deep cleaning", "Protective wipe", "Edge care"],
                  icon: "✨",
                  frequency: "Once a week"
                },
                {
                  period: "Monthly",
                  tasks: ["Sealant check", "Minor repairs", "Polish refresh"],
                  icon: "🛡️",
                  frequency: "Monthly basis"
                },
                {
                  period: "Annually",
                  tasks: ["Professional sealing", "Full inspection", "Deep restoration"],
                  icon: "⭐",
                  frequency: "Yearly service"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#0E5543]/10 hover:border-[#0E5543]/30 transition-all duration-300 hover:shadow-xl h-full">
                    {/* Header with Icon */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0E5543] to-[#1A7A62] rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-md">
                        <span className="text-[#F2E1C5]">{item.icon}</span>
                      </div>
                      <h3 className="font-['Cormorant_Garamond'] font-semibold text-[#0E5543] text-2xl mb-1">
                        {item.period}
                      </h3>
                      <p className="text-[#0E5543]/60 font-['Inter'] text-xs uppercase tracking-wide">
                        {item.frequency}
                      </p>
                    </div>

                    {/* Tasks List */}
                    <ul className="space-y-3">
                      {item.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[#0E5543]/80 font-['Source_Serif_Pro'] text-sm leading-relaxed">
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium Footer */}
            <div className="text-center mt-12 relative z-10">
              <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#0E5543]/20">
                <span className="text-[#0E5543] font-['Source_Serif_Pro']  text-md">
                  "Consistent care ensures eternal marble beauty"
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* Professional Services */}
        <section className="relative rounded-3xl overflow-hidden mb-10 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D2F]/40 via-[#0E5543]/30 to-[#1A7A5E]/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#F2E1C5/10,transparent_50%)]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-16">
            <div>
              <span className="text-[#F2E1C5]/80 text-sm font-light tracking-widest">ELITE SERVICES</span>
              <h2 className="text-5xl font-playfair font-bold text-[#F2E1C5] my-6 leading-tight">
                Professional Marble<br />Care Solutions
              </h2>
              <p className="text-[#F2E1C5]/80 text-xl leading-relaxed mb-8 font-light">
                Our certified specialists provide comprehensive marble care solutions tailored to preserve your investment's value and beauty for generations to come.
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-[#F2E1C5] to-[#F8EDDC] text-[#0A3D2F] rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg border border-[#F2E1C5]/40">
                Schedule Consultation
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "🔧", title: "Restoration", desc: "Deep cleaning and polishing", bg: "from-[#0E5543]/30 to-[#0A3D2F]/25" },
                { icon: "🛡️", title: "Sealing", desc: "Advanced protection coating", bg: "from-[#0A3D2F]/25 to-[#0E5543]/30" },
                { icon: "💎", title: "Polishing", desc: "Luster enhancement", bg: "from-[#F2E1C5]/15 to-[#0E5543]/20" },
                { icon: "⚡", title: "Emergency", desc: "24/7 damage control", bg: "from-[#0E5543]/25 to-[#1A7A5E]/30" }
              ].map((service, index) => (
                <div key={index} className={`group/service bg-gradient-to-br ${service.bg} rounded-2xl p-6 border border-[#F2E1C5]/20 hover:border-[#F2E1C5]/40 transition-all duration-500 hover:translate-y-2`}>
                  <div className="text-4xl mb-4 transform group-hover/service:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h4 className="font-playfair font-semibold text-[#F2E1C5] mb-2 text-lg">{service.title}</h4>
                  <p className="text-[#F2E1C5]/70 text-sm font-light">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        <section className="text-center py-16 px-4">
          <div className="bg-gradient-to-br from-[#F2E1C5] via-[#F8EDDC] to-[#F2E1C5] rounded-3xl p-12 border-2 border-[#0E5543]/10 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0E5543] via-[#1A7A62] to-[#0E5543]"></div>

            {/* Main Heading - Cormorant Garamond (Elegant Serif) */}
            <h2 className="text-5xl font-['Cormorant_Garamond'] font-bold text-[#0E5543] mb-6 relative z-10">
              Ready to Preserve Your Investment?
            </h2>

            {/* Subtitle - Source Serif Pro (Readable Serif) */}
            <p className="text-[#0E5543]/80 text-xl mb-10 max-w-2xl mx-auto font-light font-['Source_Serif_Pro'] leading-relaxed relative z-10">
              Join thousands of satisfied clients who trust our expertise to maintain their marble's timeless beauty for generations to come.
            </p>

            {/* Buttons - Cormorant Garamond (Consistent with Heading) */}
            <div className="flex gap-6 justify-center flex-wrap relative z-10">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] text-[#F2E1C5] rounded-full font-semibold hover:shadow-2xl transition-all duration-300 border-2 border-[#0E5543] font-['Cormorant_Garamond'] text-lg shadow-lg"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-[#0E5543]/30 text-[#23b28e] rounded-full font-semibold hover:bg-[#0E5543]/5 hover:border-[#0E5543] transition-all duration-300 font-['Cormorant_Garamond'] text-lg"
              >
                Learn More
              </motion.button>
            </div>

            {/* Trust Badge - Cormorant Garamond Italic (Elegant & Trustworthy) */}
            <div className="mt-8 flex items-center justify-center gap-3 text-[#0E5543]/80 relative z-10">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#0E5543]/20 shadow-lg">
                <FaShieldAlt className="text-[#0E5543]/90 text-lg" />
                <span className="font-['Source_Serif_Pro'] font-semibold  text-[#0E5543] tracking-wide text-sm">
                  Trusted by 5,000+ Marble Owners Worldwide
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}