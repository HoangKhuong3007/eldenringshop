import React from "react";
import { Link } from "react-router-dom";
// import styles
import "../../styles/components/navbar/navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <h2>RiseUp</h2>
      </div>
      <div className="navbar-link">
        <Link to="/shop">Shop</Link>
        <Link>Review</Link>
        <Link>About Us</Link>
        <Link>Blog</Link>
      </div>
      <div className="navbar-auth">
        <a href="">Login</a>
        <a href="">Signup</a>
      </div>
    </div>
  );
};
