import React from "react";
import { Link } from "react-router-dom";
// import styles
import "../../styles/auth/login/login.css";
// import assets
import image from "../../assets/login.jpg";
import logo from "../../assets/Elden-Ring-Logo.png";
export const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="banner">
        <img src={image} alt="" />
      </div>
      <div className="login">
        <div className="header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <strong>Welcome to EldenRing</strong>
        </div>
        <form action="" className="login-form">
          <div className="input-item">
            <label htmlFor="">Email*</label>
            <input type="text" placeholder="Enter email..." />
          </div>
          <div className="input-item">
            <label htmlFor="">Password*</label>
            <input type="password" placeholder="Enter password..." />
          </div>
          <Link to="/forget">Forget password?</Link>
          <button>Sign in</button>
        </form>
        <div className="or">
          <p>or</p>
        </div>
        <div className="oauth">
          <i className="bx bxl-google"></i>
          <p>Sign in by Google</p>
        </div>
        <div className="signup">
          <p>Don't have an account?</p>
          <Link to="/signup">Create new account</Link>
        </div>
      </div>
    </div>
  );
};
