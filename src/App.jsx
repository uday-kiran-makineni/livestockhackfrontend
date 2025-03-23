import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Features from './Components/Features';
import DairyFarmers from './Components/Dairyfarmers';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="dairyfarmers" element={<DairyFarmers/>} />
      </Routes>
    </Router>
  );
};

export default App;
