// App.js (Main Component)
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer"
function App() {
  const [activeCategory, setActiveCategory] = useState("furniture");

  return (
    <Router>
      <div className="App bg-red-300">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
