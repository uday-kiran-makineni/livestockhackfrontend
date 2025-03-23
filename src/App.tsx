import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Features from "./Components/Features";
import About from "./Components/About";
import Contact from "./Components/Contact";
import DairyFarmers from "./Components/Dairyfarmers"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dairyfarmers" element={<DairyFarmers/>} />
      </Routes>
    </Router>
  );
};

export default App;
