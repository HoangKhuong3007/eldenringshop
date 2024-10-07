import React from "react";
// import styles
import "./styles/public/homepage/homepage.css";
// import components
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
export const App = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="header">

      </div>
      <Footer />
    </div>
  );
};
