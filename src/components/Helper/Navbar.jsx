// components/Navbar.js
import React, { useState, useEffect } from "react";
import { FiMenu, FiSearch, FiX, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png"; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Stones", path: "/OurStones" },
    { name: "Services", path: "/services" },
    { name: "Art", path: "/state-of-the-art" },
    { name: "Gallery", path: "/gallery" },
    { name: "Help & Advice", path: "/help" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0E5543] backdrop-blur-md shadow-xl py-1"
          : "bg-gradient-to-b from-gray-900 to-gray-850 py-2 border-b border-gray-700/30"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="RGM"
                className="h-38 w-38 object-contain"
              />
            </Link>
          </div>



          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-all duration-300 group ${activeItem === item.name.toLowerCase()
                    ? "text-white"
                    : "text-white hover:text-amber-300"
                  }`}
                onClick={() => handleItemClick(item.name.toLowerCase())}
              >
                <span className="relative font-medium text-white after:absolute after:w-0 after:h-px after:bg-amber-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                  {item.name}
                </span>
              </Link>
            ))}

            {/* Search + Cart */}
            <div className="flex items-center ml-4 pl-4 border-l border-gray-700 space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all duration-300 w-32 lg:w-40"
                />
                <FiSearch
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>


            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center space-x-4">

            <button
              style={{ backgroundColor: "transparent" }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 border bg-transparent border-[#F2E1C5] text-[#F2E1C5] rounded-lg focus:outline-none transition-all duration-300 hover:bg-[#F2E1C5] hover:text-[#0E5543]"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-72 sm:w-80 bg-gray-900/95 z-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-800">
          <span className="text-[#F2E1C5] font-semibold tracking-wide">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-[#F2E1C5] hover:bg-gray-800/60 transition"
          >
            <FiX size={20} />
          </button>
        </div>
        <div className="px-2 pt-2 pb-6 space-y-2 sm:px-4 overflow-y-auto h-[calc(100%-4rem)]">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-3 rounded-xl transition-all duration-300 flex items-center group ${activeItem === item.name.toLowerCase()
                  ? "bg-[#F2E1C5]/10 text-[#F2E1C5]"
                  : "text-[#F2E1C5] hover:bg-[#F2E1C5]/50 hover:text-[#F2E1C5]"
                }`}
              onClick={() => handleItemClick(item.name.toLowerCase())}
            >
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}

          {/* Mobile Search + Cart */}
          {/* <div className="pt-3 mt-3 border-t border-gray-800">
            <div className="px-4 py-3">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F2E1C5]" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all duration-300 w-full"
                />
              </div>
            </div>

            <Link
              to="/cart"
              className="block px-4 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-amber-300 rounded-xl transition-all duration-300 flex items-center group"
            >
              <div className="p-1.5 rounded-lg mr-3 bg-gray-800 group-hover:bg-gray-700/50 transition-all duration-300">
                <FiShoppingCart className="text-lg" />
              </div>
              <span className="font-medium">Cart</span>
              <span className="ml-auto bg-amber-500 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
