import React from "react";
import { NavLink } from "react-router-dom";
// import styles
import "../../../styles/components/private/account/account.css";
// import assets
import image from "../../../assets/ring.jpg";
import { useDispatch } from "react-redux";
import {
  toggleAddAccountModal,
  toggleBlockAccountModal,
} from "../../../redux/slices/modal/modal";
export const AccountList = () => {
  // dispatch
  const dispatch = useDispatch();
  //   handle func
  const handleToggleAddAccountModal = () => {
    dispatch(toggleAddAccountModal());
  };
  const handleToggleBlockAccountModal = () => {
    dispatch(toggleBlockAccountModal());
  };
  return (
    <div className="account-list-container">
      <div className="utils">
        <div className="section-1">
          <div className="utils-header">
            <strong>Account list</strong>
            <p>total 100 users</p>
          </div>
          <div className="buttons">
            <div className="add-btn" onClick={handleToggleAddAccountModal}>
              <i className="bx bx-plus"></i>
              <p>Add account</p>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="categories">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/account"
            >
              View all
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/account/role/manager"
            >
              Managers
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/account/role/customer"
            >
              Customers
            </NavLink>
          </div>
          <div className="filter">
            <div className="search">
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </div>
      <table className="account-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Infomation</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <i className="bx bx-user"></i>
              <div>
                <strong>Lon Khuong Elden Ring</strong>
                <p>hoangkhuong2k4@gmail.com</p>
              </div>
            </td>
            <td>0369608638</td>
            <td>FPT UNIVERSITY</td>
            <td className="active-account">
              <i class="bx bxs-circle"></i>
              <p>Active</p>
            </td>
            <td>
              <i
                className="bx bx-block"
                onClick={handleToggleBlockAccountModal}
              ></i>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <i className="bx bx-user"></i>
              <div>
                <strong>Lon Khuong Elden Ring</strong>
                <p>hoangkhuong2k4@gmail.com</p>
              </div>
            </td>
            <td>0369608638</td>
            <td>FPT UNIVERSITY</td>
            <td className="inactive-account">
              <i class="bx bxs-circle"></i>
              <p>Blocked</p>
            </td>
            <td>
              <i
                className="bx bx-block"
                onClick={handleToggleBlockAccountModal}
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
