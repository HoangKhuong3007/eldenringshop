import React from "react";
import { NavLink } from "react-router-dom";
// import styles
import "../../styles/components/navbar/navbar.css";
export const SettingNav = () => {
  return (
    <div className="setting-nav-container">
      <div className="setting-nav">
        <h2>My Setting</h2>
        <div className="list">
          <NavLink
            to="/setting/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-user"></i>
            <p>Personal Info</p>
          </NavLink>
          <NavLink
            to="/setting/security"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-check-shield"></i>
            <p>Password & Security</p>
          </NavLink>
          <NavLink
            to="/setting/my-order"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-shopping-bag"></i>
            <p>My Orders</p>
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-log-out-circle"></i>
            <p>Logout</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
