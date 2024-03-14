import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Afterhome from "../components/Afterhome";

const Homepage = () => {
  return (
    <div style={{ width: "1440px", margin: "auto" }}>
      <Navbar />
      <Home />
      <Afterhome />
      <Footer />
    </div>
  );
};

export default Homepage;
