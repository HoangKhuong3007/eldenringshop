import React from "react";
// import styles
import "./styles/public/homepage/homepage.css";
// import components
import { Navbar } from "./components/navbar/Navbar";
export const App = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="header">
        <strong>Hello World</strong>
      </div>
    </div>
  );
};
