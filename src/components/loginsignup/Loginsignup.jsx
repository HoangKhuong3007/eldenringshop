import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/loginsignup/loginsignup.css";
export const Loginsignup = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="loginsignup-container">
      {token ? (
        <>
          <Link to="/logout" className="loginsignup-link">
            Logout
          </Link>
        </>
      ) : (
        <>
          {" "}
          <Link to="/login" className="loginsignup-link">
            Login
          </Link>
          <Link to="/signup" className="loginsignup-link">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};
