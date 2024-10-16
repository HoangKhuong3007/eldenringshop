import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import styles
import "../../../styles/components/private/product/product.css";
// import asset
import image from "../../../assets/ring.jpg";
// import slices
import {
  toggleAddProductModal,
  toggleDelProductModal,
  toggleUpdateProductModal,
} from "../../../redux/slices/modal/modal";
export const ProductList = () => {
  // dispatch
  const dispatch = useDispatch();
  //   handle func
  const handleToggleAddProductModal = () => {
    dispatch(toggleAddProductModal());
  };
  const handleToggleUpdateProductModal = () => {
    dispatch(toggleUpdateProductModal());
  };
  const handleToggleDelProductModal = () => {
    dispatch(toggleDelProductModal());
  };
  return (
    <div className="product-list-container">
      <div className="utils">
        <div className="section-1">
          <div className="utils-header">
            <strong>Inventory list</strong>
            <p>total 100 items</p>
          </div>
          <div className="buttons">
            <div className="add-btn">
              <i className="bx bx-plus"></i>
              <p onClick={handleToggleAddProductModal}>Add products</p>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="categories">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/product"
            >
              View all
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/product/category/necklet"
            >
              Necklet
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/product/category/bag"
            >
              Bag
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/product/category/ring"
            >
              Ring
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/product/category/hat"
            >
              Hat
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
      <table className="product-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Product</th>
            <th>Price</th>
            <th>In Stock</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={image} alt="" />
              <div>
                <strong>Lon Khuong Elden Ring</strong>
                <p>Ring</p>
              </div>
            </td>
            <td>$20.00</td>
            <td>40</td>
            <td className="active-product">
              <i className="bx bxs-circle"></i>
              <p>Active</p>
            </td>
            <td>
              <i
                className="bx bx-edit-alt"
                onClick={handleToggleUpdateProductModal}
              ></i>
              <i
                className="bx bx-trash-alt"
                onClick={handleToggleDelProductModal}
              ></i>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img src={image} alt="" />
              <div>
                <strong>Lon Khuong Elden Ring</strong>
                <p>Ring</p>
              </div>
            </td>
            <td>$20.00</td>
            <td>0</td>
            <td className="inactive-product">
              <i className="bx bxs-circle"></i>
              <p>Out of stock</p>
            </td>
            <td>
              <i
                className="bx bx-edit-alt"
                onClick={handleToggleUpdateProductModal}
              ></i>
              <i
                className="bx bx-trash-alt"
                onClick={handleToggleDelProductModal}
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
