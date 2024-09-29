import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/footer/footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2>Contact Us</h2>
        <p>Have questions? Feel free to reach out to us!</p>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EldenRing. All rights reserved.</p>
      </div>
    </footer>
  );
};
