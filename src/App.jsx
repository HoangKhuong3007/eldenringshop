import React from "react";
// import styles
import "D:/ReactProject/isp392/src/styles/components/public/homepage/homepage.css";
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
