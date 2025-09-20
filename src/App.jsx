// App.js (Main Component)
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer"
import ContactUs from "./components/Contact/ContactUs";
import About from "./components/About/Aboutpage";
import ServicesShowcase from "./components/Services/ServicesPage";
import ProjectsGallery from "./components/Gallery/GalleryPage";
import TechnologyShowcase from "./components/StateOfArt/StateOfArtPage";
import NotFoundPage from "./components/Errors/NotFoundPage";
import ScrollToTop from "./components/Helper/NavigateScrolletop";

function App() {
  const [activeCategory, setActiveCategory] = useState("furniture");



  return (
    <Router>

      <div className="App bg-red-300">
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesShowcase />} />
          <Route path="/gallery" element={<ProjectsGallery />} />
          <Route path="/state-of-the-art" element={<TechnologyShowcase />} />



          {/* Catch-All 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
