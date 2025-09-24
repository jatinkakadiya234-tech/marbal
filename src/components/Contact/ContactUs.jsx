// components/ContactUs.js
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#0d0d0d] text-[#F2E1C5] min-h-screen overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Enhanced Background with Improved Color Harmony */}
        <div className="absolute inset-0">
          {/* Primary Color Background with Better Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E5543] via-[#0d0d0d] to-[#0d0d0d]"></div>

          {/* Animated Texture Overlay */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(14,85,67,0.1)_50%,transparent_75%)] bg-[length:250px_250px] animate-pulse-slow"></div>
          </div>

          {/* Accent Elements with Better Color Balance */}
          <div className="absolute top-1/4 -left-10 w-32 h-32 bg-[#0E5543]/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-[#0E5543]/15 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#F2E1C5]/10 rounded-full blur-lg"></div>

          {/* Subtle Pattern with Improved Contrast */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#0E5543/5,transparent_50%)]"></div>
        </div>

        <div className="absolute inset-0">
          <img
            src="/contactus.jpg"
            alt="Luxury Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E5543]/30 via-[#0E5543]/50 to-[#0d0d0d]"></div>
        </div>
        
        {/* Enhanced Content */}
        <motion.div
          className="relative z-10 text-center max-w-4xl px-4 sm:px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Decorative Elements */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#F2E1C5] to-transparent mr-4"></div>
            <div className="w-2 h-2 bg-[#F2E1C5] rounded-full"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#F2E1C5] to-transparent ml-4"></div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-light text-[#F2E1C5] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}      
            transition={{ duration: 1, delay: 0.3 }}
          >
            Let's{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Connect</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#0E5543]/40 -rotate-1 z-0"></span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[#F2E1C5]/90 font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We're here to help you. Get in touch and experience premium customer service.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                backgroundColor: "#1a7a62",
                boxShadow: "0 10px 25px rgba(14, 85, 67, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#0E5543] text-[#F2E1C5] rounded-lg border border-[#0E5543]/50 transition-all duration-300 font-medium"
            >
              Start Conversation
            </motion.button>
          </motion.div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12"
          >
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#0E5543] to-[#F2E1C5] mx-auto"></div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 opacity-10">
          <div className="w-8 h-8 border-2 border-[#F2E1C5] rounded-full animate-bounce"></div>
        </div>
        <div className="absolute top-10 right-10 opacity-10">
          <div className="w-6 h-6 border border-[#F2E1C5] rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Premium Contact Section with #F2E1C5 Background */}
      <section className="relative py-20 px-4 sm:px-6 max-w-full mx-auto w-full bg-[#F2E1C5]">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-20 w-80 h-80 bg-[#0E5543]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-[#0E5543]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Enhanced Contact Information - Adjusted for light background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-light mb-4 text-[#0d0d0d]">
                Let's Start a <span className="text-[#0E5543]">Conversation</span>
              </h2>
              <p className="text-[#0d0d0d]/80 text-lg leading-relaxed">
                We're here to provide you with exceptional service and bring your
                vision to life with our premium ceramic solutions.
              </p>
            </div>

            {/* Enhanced Contact Items - Adjusted for light background */}
            <div className="space-y-6">
              {[
                {
                  icon: FaPhoneAlt,
                  title: "Phone",
                  content: "+91 98765 43210",
                  delay: 0.1
                },
                {
                  icon: FaEnvelope,
                  title: "Email",
                  content: "support@ceramicluxury.com",
                  delay: 0.2
                },
                {
                  icon: FaMapMarkerAlt,
                  title: "Address",
                  content: "21, Premium Avenue, Mumbai, India",
                  delay: 0.3
                },
                {
                  icon: FaClock,
                  title: "Business Hours",
                  content: "Mon – Sat: 9:00 AM – 7:00 PM",
                  delay: 0.4
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay, duration: 0.6 }}
                  className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-[#0E5543]/10 transition-all duration-300 border border-transparent hover:border-[#0E5543]/20 bg-white/80 backdrop-blur-sm"
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0E5543] to-[#1a7a62] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <item.icon className="w-5 h-5 text-[#F2E1C5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#0E5543] font-medium text-lg">{item.title}</h3>
                    <p className="text-[#0d0d0d]/80">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Social Links - Adjusted for light background */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-6"
            >
              <h3 className="text-xl font-light mb-4 text-[#0d0d0d]">Follow Our Journey</h3>
              <div className="flex space-x-3">
                {[FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-br from-[#0E5543] to-[#1a7a62] rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 group shadow-md"
                  >
                    <Icon className="w-5 h-5 text-[#F2E1C5] group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Premium Contact Form with #F2E1C5 Background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0E5543]/10 to-[#F2E1C5]/20 rounded-3xl m-w-screen"></div>
            <div className="relative bg-[#F2E1C5] backdrop-blur-xl rounded-3xl border border-[#0E5543]/30 p-8 sm:p-10 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-light mb-2 text-[#0d0d0d]">Send Us a Message</h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#0E5543] to-[#1a7a62]"></div>
              </div>

              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-[#0d0d0d]/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 border border-[#0E5543]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E5543]/50 focus:border-transparent text-[#0d0d0d] placeholder-[#0d0d0d]/50 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-[#0d0d0d]/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/80 border border-[#0E5543]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E5543]/50 focus:border-transparent text-[#0d0d0d] placeholder-[#0d0d0d]/50 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-[#0d0d0d]/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-white/80 border border-[#0E5543]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E5543]/50 focus:border-transparent text-[#0d0d0d] placeholder-[#0d0d0d]/50 resize-none transition-all duration-300 backdrop-blur-sm"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    background: "linear-gradient(to right, #1a7a62, #0E5543)",
                    boxShadow: "0 10px 25px rgba(14, 85, 67, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-[#0E5543] to-[#1a7a62] text-[#F2E1C5] font-medium rounded-xl shadow-lg transition-all duration-300 group flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-[#0E5543]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light mb-4 text-[#F2E1C5]">
              Visit Our <span className="text-[#F2E1C5]">Showroom</span>
            </h2>
            <p className="text-[#F2E1C5]/70 text-lg max-w-2xl mx-auto">
              Experience our premium ceramic collections in person at our luxurious showroom
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#0E5543]/30">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0E5543]/20 to-[#F2E1C5]/10 z-10"></div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.036154387616!2d72.83044417506567!3d19.099676982107667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f6d8e4b7e1%3A0xf36a6f3f3a2c4cf2!2sMumbai%20City%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695825569850!5m2!1sen!2sin"
              className="w-full h-[400px] md:h-[500px] border-0 grayscale contrast-125"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-6 left-6 z-20 bg-[#0d0d0d]/90 backdrop-blur-sm p-4 rounded-xl border border-[#0E5543]/30 max-w-xs">
              <h3 className="text-[#F2E1C5] font-medium mb-1">Ceramic Luxury Showroom</h3>
              <p className="text-[#F2E1C5]/70 text-sm">21, Premium Avenue, Mumbai, India</p>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default ContactUs;