import React from "react";
import MenImg from "../../assets/Fashion-Accessories-Web-1.jpg";
import "../../styles/public/aboutus/aboutus.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <Navbar />
      <div className="aboutus-content">
        <h2>About Us - EldenRing</h2>
        <div className="aboutus-img">
          <img src={MenImg} alt="" />
        </div>
        <div className="aboutus-text">
          <p>
            Welcome to Eldenring, your go-to for modern men's fashion, where we
            offer stylish, high-quality apparel and accessories for any
            occasion. We believe fashion reflects your identity, showcasing a
            range from tailored suits to casual essentials, all crafted with
            meticulous attention to detail, ensuring confidence and comfort.
            Join the Eldenring community and redefine your style with us.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
