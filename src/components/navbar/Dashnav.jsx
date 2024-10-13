import React from "react";
import { NavLink } from "react-router-dom";
// import styles
import "../../styles/components/navbar/navbar.css";
export const Dashnav = () => {
  return (
    <div className="dashnav-container">
      <div className="dashnav">
        <div className="header">
          <strong>EldenRing Accessories</strong>
        </div>
        <div className="item">
          <strong>Manager</strong>
          <NavLink
            to="/dashboard/overview"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-home-alt-2"></i>
            <p>Overview</p>
          </NavLink>
          <NavLink
            to="/dashboard/account"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-user"></i>
            <p>Accounts</p>
          </NavLink>
          <NavLink
            to="/dashboard/product"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-package"></i>
            <p>Products</p>
          </NavLink>
          <NavLink
            to="/dashboard/blogs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-file-blank"></i>
            <p>Blogs</p>
          </NavLink>
        </div>
        <div className="item">
          <strong>Customers</strong>
          <NavLink
            to="/dashboard/order"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-receipt"></i>
            <p>Orders</p>
          </NavLink>
        </div>
        <div className="item">
          <strong>Reports</strong>
          <NavLink
            to="/dashboard/revenue"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-line-chart"></i>
            <p>Revenue summary</p>
          </NavLink>
        </div>
        <div className="item">
          <strong>Utilities</strong>
          <NavLink
            to="/setting"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-cog"></i>
            <p>Setting</p>
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="bx bx-log-out-circle"></i>
            <p>Return homepage</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
