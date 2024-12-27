import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CaseSelection from "./components/CaseSelection";
import SizeSelection from "./components/SizeSelection";
import BandSelection from "./components/BandSelection";
import CollectionSwitch from "./components/CollectionSwitch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CaseSelection />} />
        <Route path="/size-selection" element={<SizeSelection />} />
        <Route path="/band-selection" element={<BandSelection />} />
        <Route path="/collection-switch" element={<CollectionSwitch />} />
      </Routes>
    </Router>
  );
};

export default App;