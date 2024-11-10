import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contac from "./Componants/Contac.jsx";
import Navba from "./Componants/Navba.jsx";
import Hero from "./Componants/Hero.jsx";
import Footer from "./Componants/Footer.jsx";
import Services from "./Componants/Services.jsx";
import About from "./Componants/About.jsx";
import Video from "./Componants/Video.jsx";
import Tu from "./Tu.jsx";

const MainContent = () => (
  <>
    <Hero />
    <Services />
    <Contac />
    <About />
    <Video />
  </>
);

const App = () => {
  return (
    <Router>
      <Navba />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/Tu" element={<Tu />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;