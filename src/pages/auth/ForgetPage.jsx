import React from "react";
import { Link } from "react-router-dom";
// import styles
import "../../styles/auth/forget/forget.css";
// import assets
import image from "../../assets/forget.jpg";
import logo from "../../assets/Elden-Ring-Logo.png";
export const ForgetPage = () => {
  return (
    <div className="forget-container">
      <div className="banner">
        <img src={image} alt="" />
      </div>
      <div className="forget">
        <div className="header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <strong>Forget your password?</strong>
        </div>
        <form action="" className="forget-form">
          <div className="input-item">
            <label htmlFor="">Email*</label>
            <input type="text" placeholder="Enter email to recover..." />
          </div>
          <button>Verify email</button>
        </form>
        <div className="signin">
          <p>Just remember password?</p>
          <Link to="/login">Return to login</Link>
        </div>
      </div>
    </div>
  );
};
