import React from "react";
import AppHeader from "./component/AppHeader";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';



function App() {
  return (
    <div>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <div>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
