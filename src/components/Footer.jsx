// components/Footer.js
import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiHeart, FiSend, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-400/5 blur-xl"></div>
      <div className="absolute -bottom-20 -left-10 w-40 h-40 rounded-full bg-amber-600/5 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:pr-6">
            <div className="flex items-center mb-6">
              <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 shadow-lg shadow-amber-500/30"></div>
              <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Artisan Craft</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating beautiful spaces with our handcrafted ceramics, furniture, and kitchen designs since 1995. Each piece tells a story of craftsmanship and passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 bg-gray-800 hover:bg-amber-500 rounded-lg text-gray-300 hover:text-gray-900 transition-all duration-300 group">
                <FiFacebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 hover:bg-amber-500 rounded-lg text-gray-300 hover:text-gray-900 transition-all duration-300 group">
                <FiTwitter size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 hover:bg-amber-500 rounded-lg text-gray-300 hover:text-gray-900 transition-all duration-300 group">
                <FiInstagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-amber-500">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Gallery', 'Blog'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-amber-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500/0 rounded-full mr-3 group-hover:bg-amber-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-amber-500">Our Products</h3>
            <ul className="space-y-3">
              {['Ceramics', 'Furniture', 'Kitchenware', 'Custom Orders', 'New Arrivals'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-amber-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500/0 rounded-full mr-3 group-hover:bg-amber-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-amber-500">Stay Updated</h3>
            
            {/* Newsletter Subscription */}
            <div className="mb-8">
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all duration-300"
                />
                <button className="px-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-medium rounded-r-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 flex items-center">
                  <FiSend size={16} />
                </button>
              </div>
            </div>
            
            {/* Contact Info */}
            <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-amber-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 bg-gray-800 rounded-lg mr-3 mt-0.5">
                  <FiMapPin className="text-amber-500" size={16} />
                </div>
                <span className="text-gray-400">123 Design Street, Creative City, 10001</span>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-gray-800 rounded-lg mr-3 mt-0.5">
                  <FiPhone className="text-amber-500" size={16} />
                </div>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-gray-800 rounded-lg mr-3 mt-0.5">
                  <FiMail className="text-amber-500" size={16} />
                </div>
                <span className="text-gray-400">info@artisancraft.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm flex items-center">
            © {new Date().getFullYear()} Artisan Craft. Crafted with <FiHeart className="text-amber-500 mx-1" /> in New York.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors duration-300 text-sm">Shipping Info</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-gradient-to-br from-amber-500 to-amber-600 text-gray-900 rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 z-40 group"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;