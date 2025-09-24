import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaStar,
  FaShieldAlt,
  FaHeadset,
  FaLightbulb,
  FaTools,
  FaHandHoldingHeart,
  FaGem
} from 'react-icons/fa';

export default function Help() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Our marble experts will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const faqItems = [
    {
      question: "How often should I seal my marble surfaces?",
      answer: "We recommend sealing marble every 6-12 months. High-traffic areas may require more frequent sealing (every 3-6 months) to maintain protection against stains and etching."
    },
    {
      question: "Can I use natural cleaners like vinegar on marble?",
      answer: "Absolutely not! Vinegar and other acidic substances will etch marble surfaces. Always use pH-neutral cleaners specifically designed for natural stone maintenance."
    },
    {
      question: "What's the best way to remove stubborn stains?",
      answer: "For organic stains, use a poultice with baking soda. For oil-based stains, our professional poultice treatments work best. Contact us for stubborn stain removal guidance."
    },
    {
      question: "Is marble suitable for kitchen countertops?",
      answer: "Yes, with proper care! Marble adds luxury to kitchens but requires immediate spill cleanup and regular sealing. We recommend using cutting boards and trivets for protection."
    },
    {
      question: "How do I maintain marble's natural shine?",
      answer: "Use diamond polishing pads for honed finishes or professional polishing compounds for glossy surfaces. Avoid abrasive cleaners that can dull the natural shine."
    }
  ];

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Call Our Experts",
      detail: "+1 (555) 123-4567",
      subtitle: "Mon-Sun: 6:00 AM - 9:00 PM",
      color: "from-[#0E5543] to-[#1A7A62]"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Support",
      detail: "+1 (555) 123-4568",
      subtitle: "24/7 Quick Responses",
      color: "from-[#1A7A62] to-[#2D8C6E]"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      detail: "care@premiummarble.com",
      subtitle: "Response within 4 hours",
      color: "from-[#2D8C6E] to-[#3DA07A]"
    },
    {
      icon: FaHeadset,
      title: "Live Chat",
      detail: "Start Chat Now",
      subtitle: "Instant expert assistance",
      color: "from-[#0E5543] to-[#2D8C6E]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2E1C5] via-[#F8EBD3] to-[#F2E1C5] py-12 px-4 relative overflow-hidden">
      {/* Marble Texture Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200h100v100H0z%22%20fill%3D%22none%22/%3E%3Cpath%20d%3D%22M20%2020l60%2060M80%2020L20%2080M40%2040l20%2020M60%2060l20-20%22%20stroke%3D%22%230E5543%22%20stroke-width%3D%222%22/%3E%3C/svg%3E')]"></div>
      </div>

      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 max-w-4xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full mb-6 shadow-2xl relative"
        >
          <div className="absolute inset-4 bg-gradient-to-br from-[#F2E1C5] to-[#D4AF37] rounded-full opacity-20"></div>
          <FaGem className="text-4xl text-[#F2E1C5] drop-shadow-lg" />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Cormorant_Garamond'] bg-gradient-to-r from-[#0E5543] via-[#1A7A62] to-[#0E5543] bg-clip-text text-transparent leading-tight">
          Marble Care Excellence
        </h1>

        <div className="relative inline-block">
          <p className="text-xl md:text-2xl text-[#0E5543]/90 max-w-3xl mx-auto leading-relaxed font-['Source_Serif_Pro'] italic font-light mb-4">
            Your premium marble deserves expert care. Our specialists are here to ensure your surfaces
            maintain their timeless beauty for generations to come.
          </p>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full"></div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#0E5543]/10 hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F2E1C5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <method.icon className="text-2xl text-[#F2E1C5]" />
              </div>
              <h3 className="font-semibold text-[#0E5543] mb-2 text-lg font-['Cormorant_Garamond'] relative z-10">{method.title}</h3>
              <p className="text-[#1A7A62] font-bold text-xl mb-1 font-['Source_Serif_Pro'] relative z-10">{method.detail}</p>
              <p className="text-[#0E5543]/70 text-sm font-['Inter'] relative z-10">{method.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-[#0E5543]/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0E5543] via-[#1A7A62] to-[#0E5543]"></div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-gradient-to-b from-[#0E5543] to-[#1A7A62] rounded-full"></div>
              <h2 className="text-3xl font-bold font-['Cormorant_Garamond'] text-[#0E5543]">
                Personal Consultation
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0E5543] mb-3 uppercase tracking-wide font-['Inter']">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-[#0E5543]/20 rounded-xl focus:outline-none focus:border-[#0E5543] focus:ring-2 focus:ring-[#0E5543]/20 transition-all duration-300 text-[#0E5543] placeholder-[#0E5543]/50 font-['Source_Serif_Pro']"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0E5543] mb-3 uppercase tracking-wide font-['Inter']">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-[#0E5543]/20 rounded-xl focus:outline-none focus:border-[#0E5543] focus:ring-2 focus:ring-[#0E5543]/20 transition-all duration-300 text-[#0E5543] placeholder-[#0E5543]/50 font-['Source_Serif_Pro']"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0E5543] mb-3 uppercase tracking-wide font-['Inter']">
                  Service Needed *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 border border-[#0E5543]/20 rounded-xl focus:outline-none focus:border-[#0E5543] focus:ring-2 focus:ring-[#0E5543]/20 transition-all duration-300 text-[#0E5543] font-['Source_Serif_Pro']"
                >
                  <option value="">Select service type</option>
                  <option value="consultation">Premium Consultation</option>
                  <option value="cleaning">Professional Cleaning</option>
                  <option value="sealing">Sealing Service</option>
                  <option value="polishing">Polishing & Restoration</option>
                  <option value="stain-removal">Stain Removal</option>
                  <option value="emergency">Emergency Repair</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0E5543] mb-3 uppercase tracking-wide font-['Inter']">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 border border-[#0E5543]/20 rounded-xl focus:outline-none focus:border-[#0E5543] focus:ring-2 focus:ring-[#0E5543]/20 transition-all duration-300 text-[#0E5543] placeholder-[#0E5543]/50 resize-none font-['Source_Serif_Pro']"
                  placeholder="Describe your marble surfaces, issues, and desired outcomes..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg relative overflow-hidden group font-['Cormorant_Garamond'] text-xl"
              >
                <span className="relative z-10">Request Expert Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A7A62] to-[#2D8C6E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F2E1C5] to-[#D4AF37] opacity-60"></div>
              </motion.button>
            </form>
          </motion.div>

          {/* Enhanced FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            {/* Premium Guarantee Card */}
            <div className="bg-gradient-to-br from-[#0E5543] to-[#1A7A62] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <FaShieldAlt className="text-6xl" />
              </div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <FaShieldAlt className="text-3xl text-[#F2E1C5]" />
                <h3 className="text-2xl font-bold font-['Cormorant_Garamond']">Premium Care Guarantee</h3>
              </div>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-center gap-3 font-['Source_Serif_Pro']">
                  <FaStar className="text-[#F2E1C5] flex-shrink-0" />
                  <span>24/7 Expert Support Team</span>
                </li>
                <li className="flex items-center gap-3 font-['Source_Serif_Pro']">
                  <FaStar className="text-[#F2E1C5] flex-shrink-0" />
                  <span>Lifetime Maintenance Guidance</span>
                </li>
                <li className="flex items-center gap-3 font-['Source_Serif_Pro']">
                  <FaStar className="text-[#F2E1C5] flex-shrink-0" />
                  <span>Emergency Response Within 2 Hours</span>
                </li>
                <li className="flex items-center gap-3 font-['Source_Serif_Pro']">
                  <FaStar className="text-[#F2E1C5] flex-shrink-0" />
                  <span>Personalized Care Plans</span>
                </li>
              </ul>
            </div>

            {/* Interactive FAQ */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-[#0E5543]/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0E5543] to-[#1A7A62]"></div>
              <h3 className="text-2xl font-bold font-['Cormorant_Garamond'] text-[#0E5543] mb-6">
                Expert Insights
              </h3>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border border-[#0E5543]/10 rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm"
                  >
                    <button
                      onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                      className="w-full px-4 py-4 text-left flex items-center justify-between bg-white/50 hover:bg-[#F2E1C5]/20 transition-colors duration-300 font-['Source_Serif_Pro']"
                    >
                      <span className="font-semibold text-[#1c9a7a] pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">↓</span>
                        </div>
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {activeFAQ === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4"
                        >
                          <p className="text-[#0E5543]/80 leading-relaxed font-['Source_Serif_Pro']">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          className="mt-16 bg-gradient-to-br from-[#0A3D2F] via-[#0E5543] to-[#1A7A62] rounded-3xl p-10 text-center shadow-2xl border-2 border-[#F2E1C5]/30 relative overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200h100v100H0z%22%20fill%3D%22none%22/%3E%3Cpath%20d%3D%22M20%2020l60%2060M80%2020L20%2080M40%2040l20%2020M60%2060l20-20%22%20stroke%3D%22%23F2E1C5%22%20stroke-width%3D%222%22/%3E%3C/svg%3E')]"></div>
          </div>

          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F2E1C5] via-[#D4AF37] to-[#F2E1C5]"></div>

          {/* Floating Elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#F2E1C5]/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#F8EDDC]/10 rounded-full blur-xl"></div>

          <div className="relative z-10">
            {/* Emergency Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F2E1C5] to-[#F8EDDC] text-[#0E5543] px-8 py-3 rounded-full mb-8 font-['Inter'] font-bold text-sm uppercase tracking-widest shadow-lg border-2 border-[#F2E1C5]"
            >
              <FaTools className="text-lg" />
              <span>24/7 EMERGENCY RESPONSE</span>
            </motion.div>

            {/* Main Heading */}
            <h3 className="text-5xl font-bold text-[#F2E1C5] mb-4 font-['Cormorant_Garamond'] leading-tight">
              Marble Emergency Hotline
            </h3>

            {/* Description */}
            <p className="text-xl text-[#F2E1C5]/90 mb-8 font-['Source_Serif_Pro'] max-w-2xl mx-auto leading-relaxed">
              Immediate professional assistance for critical marble emergencies including spills, cracks, and urgent restoration needs
            </p>

            {/* Phone Number - Main Focus */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-6xl font-bold text-[#F2E1C5] font-['Cormorant_Garamond'] tracking-tight mb-4 bg-[#0A3D2F]/50 px-8 py-4 rounded-2xl border border-[#F2E1C5]/20 inline-block"
            >
              1-800-MARBLE-911
            </motion.div>

            {/* Guarantee Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#F2E1C5]/80 font-['Inter'] text-sm mt-6">
              <div className="flex items-center gap-2 bg-[#0A3D2F]/40 px-4 py-2 rounded-full">
                <FaClock className="text-[#F2E1C5]" />
                <span>60-Minute Response Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0A3D2F]/40 px-4 py-2 rounded-full">
                <FaShieldAlt className="text-[#F2E1C5]" />
                <span>Certified Marble Experts</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0A3D2F]/40 px-4 py-2 rounded-full">
                <FaStar className="text-[#F2E1C5]" />
                <span>Premium Emergency Service</span>
              </div>
            </div>

            {/* Urgency Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="mt-6 bg-[#0A3D2F]/60 border border-[#F2E1C5]/20 rounded-xl p-4 inline-block"
            >
              <p className="text-[#F2E1C5]/80 font-['Source_Serif_Pro'] italic text-sm">
                "Don't wait - immediate action prevents permanent damage to your marble surfaces"
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Add font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Source+Serif+Pro:wght@300;400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}