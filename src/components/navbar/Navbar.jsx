import React from "react";
import { Link } from "react-router-dom";
// Import styles
import "../../styles/components/navbar/navbar.css";
// Import logo
import EldenRingLogo from "../../assets/Elden-Ring-Logo.png";
import { Loginsignup } from "../loginsignup/Loginsignup";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">
          <img
            src={EldenRingLogo}
            alt="Elden Ring Logo"
            className="logo-image"
          />
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="/shop" className="navbar-item">
          Shop
        </Link>
        <Link to="/aboutus" className="navbar-item">
          About Us
        </Link>
        <Link to="/blog" className="navbar-item">
          Blog
        </Link>
      </div>
      <div className="navbar-auth">
        <Loginsignup />
      </div>
    </nav>
  );
};
