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
    <div className="bg-[#0d0d0d] text-gray-200 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/contactus.jpg"
            alt="Luxury Background"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center max-w-3xl px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#d4af37] mb-6 tracking-wide">
            Let’s Connect
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light">
            We’re here to help you. Get in touch and experience premium
            customer service.
          </p>
        </motion.div>
      </section>

      {/* Info + Form Section */}
      <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#d4af37] mb-8">
            Contact Information
          </h2>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <div className="bg-[#d4af37]/20 p-4 rounded-full">
                <FaPhoneAlt className="w-6 h-6 text-[#d4af37]" />
              </div>
              <span className="text-lg">+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-[#d4af37]/20 p-4 rounded-full">
                <FaEnvelope className="w-6 h-6 text-[#d4af37]" />
              </div>
              <span className="text-lg">support@ceramicluxury.com</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-[#d4af37]/20 p-4 rounded-full">
                <FaMapMarkerAlt className="w-6 h-6 text-[#d4af37]" />
              </div>
              <span className="text-lg">
                21, Premium Avenue, Mumbai, India
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-[#d4af37]/20 p-4 rounded-full">
                <FaClock className="w-6 h-6 text-[#d4af37]" />
              </div>
              <span className="text-lg">Mon – Sat: 9:00 AM – 7:00 PM</span>
            </li>
          </ul>

          {/* Socials */}
          <div className="mt-10">
            <h3 className="text-xl font-serif text-[#d4af37] mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              {[FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20"
                >
                  <Icon className="w-6 h-6 text-[#d4af37]" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-black/40 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-[#d4af37]/30"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-serif text-[#d4af37] mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 mt-2 rounded-lg bg-black/60 border border-[#d4af37]/30 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-gray-200"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 mt-2 rounded-lg bg-black/60 border border-[#d4af37]/30 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-gray-200"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 mt-2 rounded-lg bg-black/60 border border-[#d4af37]/30 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-gray-200"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#b8860b] to-[#d4af37] text-black font-semibold shadow-lg hover:shadow-[#d4af37]/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] overflow-hidden">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.036154387616!2d72.83044417506567!3d19.099676982107667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f6d8e4b7e1%3A0xf36a6f3f3a2c4cf2!2sMumbai%20City%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695825569850!5m2!1sen!2sin"
          className="w-full h-full border-0 grayscale contrast-125"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center border-t border-[#d4af37]/30">
        <p className="text-gray-400 text-sm">
          © 2025 CeramicLuxury. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactUs;
