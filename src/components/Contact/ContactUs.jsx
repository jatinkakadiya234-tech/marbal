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
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#0d0d0d] text-[#F2E1C5] font-sans min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/contactus.jpg"
            alt="Luxury Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E5543]/80 via-[#0E5543]/50 to-[#0d0d0d]"></div>
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center max-w-3xl px-4 sm:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-[#F2E1C5] mb-4 sm:mb-6 tracking-wide">
            Let's Connect
          </h1>
          <p className="text-[#F2E1C5] text-base sm:text-lg md:text-xl font-light leading-relaxed">
            We're here to help you. Get in touch and experience premium
            customer service.
          </p>
        </motion.div>
      </section>

        {/* Info + Form Section */}
        <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Information */}
          <div className="px-2 md:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0E5543] mb-6 sm:mb-8">
              Contact Information
            </h2>
            <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <div className="bg-[#0E5543]/20 p-3 sm:p-4 rounded-full">
                <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E5543]" />
              </div>
              <span className="text-base sm:text-lg">+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-[#0E5543]/20 p-3 sm:p-4 rounded-full">
                <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E5543]" />
              </div>
              <span className="text-base sm:text-lg">
                support@ceramicluxury.com
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-[#0E5543]/20 p-3 sm:p-4 rounded-full">
                <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E5543]" />
              </div>
              <span className="text-base sm:text-lg">
                21, Premium Avenue, Mumbai, India
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-[#0E5543]/20 p-3 sm:p-4 rounded-full">
                <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E5543]" />
              </div>
              <span className="text-base sm:text-lg">
                Mon – Sat: 9:00 AM – 7:00 PM
              </span>
            </li>
          </ul>

          {/* Socials */}
          <div className="mt-8 sm:mt-10">
            <h3 className="text-lg sm:text-xl font-serif text-[#0E5543] mb-3 sm:mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4 sm:space-x-6">
              {[FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="p-2 sm:p-3 rounded-full bg-[#0E5543]/10 hover:bg-[#0E5543]/20"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E5543]" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-[#0E5543]/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 sm:p-8 border border-[#0E5543]/30 mx-2 md:mx-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0E5543] mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-5 sm:space-y-6">
            <div>
              <label className="block text-sm text-[#F2E1C5]/80">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 mt-2 rounded-lg bg-[#0E5543]/10 border border-[#0E5543]/30 focus:outline-none focus:ring-2 focus:ring-[#0E5543] text-[#F2E1C5] text-sm sm:text-base"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm text-[#F2E1C5]/80">Email</label>
              <input
                type="email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 mt-2 rounded-lg bg-[#0E5543]/10 border border-[#0E5543]/30 focus:outline-none focus:ring-2 focus:ring-[#0E5543] text-[#F2E1C5] text-sm sm:text-base"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm text-[#F2E1C5]/80">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 mt-2 rounded-lg bg-[#0E5543]/10 border border-[#0E5543]/30 focus:outline-none focus:ring-2 focus:ring-[#0E5543] text-[#F2E1C5] text-sm sm:text-base"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-[#0E5543] to-[#1a7a62] text-[#F2E1C5] font-semibold shadow-lg hover:shadow-[#0E5543]/50 transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
        <div className="w-full h-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.036154387616!2d72.83044417506567!3d19.099676982107667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f6d8e4b7e1%3A0xf36a6f3f3a2c4cf2!2sMumbai%20City%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695825569850!5m2!1sen!2sin"
            className="w-full h-full border-0 grayscale contrast-125"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="absolute inset-0 bg-[#0E5543]/40"></div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;