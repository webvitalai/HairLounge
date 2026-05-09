import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <div style={{ padding: "160px 20px", textAlign: "center" }}>
              <h1>404</h1>
              <p>Page not found</p>
              <a href="/">Go Back Home</a>
            </div>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;