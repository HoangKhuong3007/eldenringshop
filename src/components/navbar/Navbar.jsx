import React from "react";
import { NavLink, Link } from "react-router-dom";
// Import styles
import "../../styles/components/navbar/navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="main">
          <i className="bx bx-menu"></i>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
            Shop
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
            Blog
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
            About Us
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </div>
        <Link to="/" className="logo">
          Elden Ring
        </Link>
        <div className="auth">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};
