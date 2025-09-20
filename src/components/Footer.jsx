// components/Footer.js
import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, 
         FiHeart, FiSend, FiArrowUp, FiClock, FiAward } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E5543] text-[#F2E1C5] relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F2E1C5] to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-48 h-48 rounded-full bg-[#F2E1C5]/5 blur-lg"></div>
      <div className="absolute bottom-20 right-1/3 w-56 h-56 rounded-full bg-[#1A6B56]/30 blur-xl"></div>
      
      {/* Marble texture pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRjJFMUM1IiBzdHJva2Utd2lkdGg9IjEiIGQ9Ik0wIDBhNjAgNjAgMCAxIDAgNjAgNjBhNjAgNjAgMCAxIDAgLTYwIC02MHoiLz48L3N2Zz4=')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium badge section */}
        <div className="flex flex-wrap justify-center gap-6 py-8 border-b border-[#F2E1C5]/20">
          {['Premium Quality', '25+ Years Experience', 'Worldwide Shipping'].map((item, index) => (
            <div key={index} className="flex items-center text-sm bg-[#0E5543] border border-[#F2E1C5]/20 rounded-full px-4 py-2">
              <FiAward className="text-[#F2E1C5] mr-2" size={14} />
              <span className="text-[#F2E1C5]">{item}</span>
            </div>
          ))}
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-[#F2E1C5] rounded-full mr-3 shadow-lg shadow-[#F2E1C5]/30"></div>
              <h3 className="text-2xl font-serif font-bold text-[#F2E1C5]">Rishab Green Marbles</h3>
            </div>
            <p className="text-[#F2E1C5]/80 mb-6 leading-relaxed max-w-md">
              Providing premium quality natural marbles and stones since 1995. Our products transform spaces with elegance and timeless beauty that lasts generations.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-3 mb-8">
              {[
                { icon: <FiFacebook size={18} />, color: 'hover:bg-[#F2E1C5] hover:text-[#0E5543]' },
                { icon: <FiTwitter size={18} />, color: 'hover:bg-[#F2E1C5] hover:text-[#0E5543]' },
                { icon: <FiInstagram size={18} />, color: 'hover:bg-[#F2E1C5] hover:text-[#0E5543]' }
              ].map((item, index) => (
                <a key={index} href="#" className={`p-3 bg-[#0E5543] border border-[#F2E1C5]/20 rounded-lg text-[#F2E1C5] transition-all duration-300 group ${item.color}`}>
                  {item.icon}
                </a>
              ))}
            </div>
            
            {/* Certificate badge */}
            <div className="inline-flex items-center bg-[#1A6B56] border border-[#F2E1C5]/30 rounded-lg px-4 py-3">
              <FiAward className="text-[#F2E1C5] mr-2" size={16} />
              <span className="text-sm text-[#F2E1C5]">Certified Premium Quality</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#F2E1C5]">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Products', 'Gallery', 'Projects'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-[#F2E1C5]/80 hover:text-[#F2E1C5] transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#F2E1C5]/0 rounded-full mr-3 group-hover:bg-[#F2E1C5] transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#F2E1C5]">Products</h3>
            <ul className="space-y-4">
              {['Green Marble', 'White Marble', 'Granite', 'Sandstone', 'Custom Designs'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-[#F2E1C5]/80 hover:text-[#F2E1C5] transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#F2E1C5]/0 rounded-full mr-3 group-hover:bg-[#F2E1C5] transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#F2E1C5]">Contact Us</h3>
            
            <div className="bg-[#1A6B56]/30 border border-[#F2E1C5]/10 rounded-xl p-6 mb-8">
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="p-2 bg-[#0E5543] border border-[#F2E1C5]/20 rounded-lg mr-4 flex-shrink-0">
                    <FiMapPin className="text-[#F2E1C5]" size={16} />
                  </div>
                  <span className="text-[#F2E1C5]/80">123 Marble Street, Stone City, 10001</span>
                </li>
                <li className="flex items-start">
                  <div className="p-2 bg-[#0E5543] border border-[#F2E1C5]/20 rounded-lg mr-4 flex-shrink-0">
                    <FiPhone className="text-[#F2E1C5]" size={16} />
                  </div>
                  <span className="text-[#F2E1C5]/80">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <div className="p-2 bg-[#0E5543] border border-[#F2E1C5]/20 rounded-lg mr-4 flex-shrink-0">
                    <FiMail className="text-[#F2E1C5]" size={16} />
                  </div>
                  <span className="text-[#F2E1C5]/80">info@rishabgreenmarbles.com</span>
                </li>
                <li className="flex items-start">
                  <div className="p-2 bg-[#0E5543] border border-[#F2E1C5]/20 rounded-lg mr-4 flex-shrink-0">
                    <FiClock className="text-[#F2E1C5]" size={16} />
                  </div>
                  <span className="text-[#F2E1C5]/80">Mon-Sat: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
            
            {/* Newsletter Subscription */}
            <div>
              <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#F2E1C5]">Newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 bg-[#0E5543] border border-[#F2E1C5]/30 rounded-l-lg text-sm text-[#F2E1C5] focus:outline-none focus:ring-2 focus:ring-[#F2E1C5]/30 focus:border-[#F2E1C5]/50 transition-all duration-300 placeholder-[#F2E1C5]/50"
                />
                <button className="px-4 bg-[#F2E1C5] text-[#0E5543] font-medium rounded-r-lg hover:opacity-90 transition-all duration-300 flex items-center">
                  <FiSend size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-[#F2E1C5]/20 pt-8 pb-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#F2E1C5]/60 text-sm flex items-center">
            © {new Date().getFullYear()} Rishab Green Marbles. Crafted with <FiHeart className="text-[#F2E1C5] mx-1" /> in India.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#F2E1C5]/60 hover:text-[#F2E1C5] transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-[#F2E1C5]/60 hover:text-[#F2E1C5] transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-[#F2E1C5]/60 hover:text-[#F2E1C5] transition-colors duration-300 text-sm">Shipping Info</a>
          </div>
        </div>
      </div>
      
      {/* Premium scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-[#F2E1C5] text-[#0E5543] rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#F2E1C5]/30 transition-all duration-300 z-40 group border border-[#F2E1C5]/30"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;