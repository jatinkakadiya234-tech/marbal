// App.js (Main Component)
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {



  return (
    <Router>

      <div className="App ">
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
          <Route path="/help" element={<HelpandAddvaice />} />



          {/* Catch-All 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
