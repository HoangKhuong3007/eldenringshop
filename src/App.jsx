import React from "react";
// import styles
import "./styles/public/homepage/homepage.css";
// import components
import { Navbar } from "./components/navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
export const App = () => {
  return (
    <div className="homepage-container">
      <Navbar />
    </div>
  );
};
