import React from "react";
import AppHeader from "./component/AppHeader";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wedding from "./pages/Wedding";
import Engagement from "./pages/Engagement";
import Prewedding from "./pages/Pre-wedding";
import Potraits from "./pages/Potraits";
import './App.css';
// import Rough from "./pages/rough";

function App() {
  return (
    <div>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/MajesticStudioWebsite" exact element={<Home />} />
          <Route path="/MajesticStudioWebsite/gallery/wedding" exact element={<Wedding />} />
          <Route path="/MajesticStudioWebsite/gallery/engagement" exact element={<Engagement />} />
          <Route path="/MajesticStudioWebsite/gallery/pre-wedding" exact element={<Prewedding/>} />
          <Route path="/MajesticStudioWebsite/gallery/potraits" exact element={<Potraits />} />
          <Route path="/MajesticStudioWebsite/about" exact element={<About />} />
          <Route path="/MajesticStudioWebsite/contact" exact element={<Contact />} />
        </Routes>
        <div>
        <Footer />
        </div>
      
      </Router>
    </div>
  );
}

export default App;
