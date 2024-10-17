import React from "react";
import { Link } from "react-router-dom";
// import assets
import image from "../../assets/signup.jpg";
import logo from "../../assets/Elden-Ring-Logo.png";
// import styles
import "../../styles/auth/signup/signup.css";
export const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup">
        <div className="header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <strong>Welcome to EldenRing</strong>
        </div>
        <form action="" className="signup-form">
          <div className="input-item">
            <label htmlFor="">Your name*</label>
            <input type="text" placeholder="Enter your fullname..." />
          </div>
          <div className="input-item">
            <label htmlFor="">Email*</label>
            <input type="text" placeholder="Enter email..." />
          </div>
          <div className="input-item">
            <label htmlFor="">Password*</label>
            <input type="password" placeholder="Enter password..." />
          </div>
          <div className="input-item">
            <label htmlFor="">Confirm password*</label>
            <input type="password" placeholder="Enter password again..." />
          </div>
          <button>Create new account</button>
        </form>
        <div className="or">
          <p>or</p>
        </div>
        <div className="oauth">
          <i className="bx bxl-google"></i>
          <p>Sign up by Google</p>
        </div>
        <div className="signin">
          <p>Already have account?</p>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
      <div className="banner">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
