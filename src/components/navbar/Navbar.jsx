import React from "react";
import { Link } from "react-router-dom";
// Import styles
import "../../styles/components/navbar/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">
          <h2>EldenRing</h2>
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="/home" className="navbar-item">Home</Link>
        <Link to="/shop" className="navbar-item">Shop</Link>
        <Link to="/aboutus" className="navbar-item">About Us</Link>
        <Link to="/blog" className="navbar-item">Blog</Link>
      </div>
      <div className="navbar-auth">
        <Link to="/login" className="navbar-item">Login</Link>
        <Link to="/signup" className="navbar-item">Sign Up</Link>
      </div>
    </nav>
  );
};
