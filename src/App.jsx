// App.js (Main Component)
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CategorySelector from "./components/CategorySelector";
import Products from "./components/Products";
import Footer from "./components/Footer";
import FeaturedCollections from "./components/OurCraft";
import ContactUs from "./components/ContactUs"; // import contact page

function App() {
  const [activeCategory, setActiveCategory] = useState("furniture");

  return (
    <Router>
      <div className="App bg-red-300">
        <Navbar />

        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <CategorySelector
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
                <Products category={activeCategory} />
                <FeaturedCollections />
                <Footer />
              </>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <>
                <ContactUs />
                <Footer /> 
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
