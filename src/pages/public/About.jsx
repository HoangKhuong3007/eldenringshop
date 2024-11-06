import React from "react";

import "../../styles/public/about/about.css";

import { Navbar } from "../../components/navbar/Navbar";
import { AdvanceNavbar } from "../../components/navbar/AdvanceNavbar";
import { Footer } from "../../components/footer/Footer";

export const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <AdvanceNavbar />
      <div className="about">
        <div className="we-are-title">
          <h1>WE ARE ELDEN RING</h1>
          <div className="img_header"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
