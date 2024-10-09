import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../../styles/components/loginsignup/loginsignup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export const Loginsignup = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");

      toast.success("Logged out successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        Navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Logout failed:", error.message);
      toast.error("Logout failed! Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="loginsignup-container">
      {token ? (
        <>
          <Link to="#" onClick={handleLogout} className="loginsignup-link">
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
