import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Knowledge from "./pages/Knowledge";
import Methodology from "./pages/Methodology";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-midnight pt-24">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
