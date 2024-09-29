import React from "react";
import "../../styles/public/aboutus/aboutus.css"
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <Navbar />
      <h2 className="aboutus-heading">About Us</h2>
      <div className="aboutus-content">
        <p>
          Welcome to Eldenring, your destination for modern men's fashion. We
          specialize in crafting stylish, high-quality apparel and accessories
          designed to elevate your look—whether you're dressing for work, play,
          or special occasions.
        </p>
        <p>
          At Eldenring, we believe that fashion is a reflection of who you are.
          Our curated collections range from sharp tailored suits to casual
          essentials, combining timeless designs with contemporary flair. Each
          piece is made with attention to detail and quality craftsmanship,
          ensuring you feel confident and comfortable.
        </p>
        <p>Join the Eldenring community and redefine your style with us.</p>
      </div>
      <Footer />
    </div>
  );
};


