// App.js (Main Component)
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Navbar from "./components/Helper/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Helper/Footer"
import ContactUs from "./components/Contact/ContactUs";
import About from "./components/About/Aboutpage";
import ServicesShowcase from "./components/Services/ServicesPage";
import ProjectsGallery from "./components/Gallery/GalleryPage";
import TechnologyShowcase from "./components/StateOfArt/StateOfArtPage";
import NotFoundPage from "./components/Errors/NotFoundPage";
import ScrollToTop from "./components/Helper/NavigateScrolletop";
import OurStones from "./components/OurStones/OurStones";
import HelpandAddvaice from "./components/Advice/HelpandAddvaice";
import BlogsPage from "./components/Blogs/BlogsPage";
import WhatsAppFloat from "./components/Helper/WhatsAppFloat";

function App() {



  return (
    <HelmetProvider>
      <Router>
        <div className=" ">
          <ScrollToTop />
          <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesShowcase />} />
          <Route path="/gallery" element={<ProjectsGallery />} />
          <Route path="/state-of-the-art" element={<TechnologyShowcase />} />
          <Route path="/OurStones" element={<OurStones />} />
          {/* <Route path="/help" element={<HelpandAddvaice />} /> */}
          <Route path="/blogs" element={<BlogsPage />} />



          {/* Catch-All 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
