import React from "react";
// import styles
import "../../styles/public/aboutus/aboutus.css";
// import images
import aboutusbackground from "../../assets/login-signupbackground.jpg";
// import components
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <Navbar />
      <div className="aboutus-content"></div>
      <Footer />
    </div>
  );
};
