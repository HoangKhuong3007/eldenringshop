import React from "react";
// import styles
import "./styles/public/homepage/homepage.css";
// import components
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const App = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="header">
        <h1>header</h1>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};
