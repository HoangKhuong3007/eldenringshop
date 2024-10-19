import React from "react";
import { Link } from "react-router-dom";
// import styles
import "../../../styles/components/public/shop/shop.css";
// import assets
import product from "../../../assets/category2.jpg";
export const ShopList = () => {
  return (
    <div className="shop-list-container">
      <div className="utils">
        <div className="search">
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="main">
        <div className="item">
          <img src={product} alt="" />
          <strong>Product Name</strong>
          <strong>$100.00</strong>
          <Link>Choose Size</Link>
        </div>
        <div className="item">
          <img src={product} alt="" />
          <strong>Product Name</strong>
          <strong>$100.00</strong>
          <Link>Choose Size</Link>
        </div>
        <div className="item">
          <img src={product} alt="" />
          <strong>Product Name</strong>
          <strong>$100.00</strong>
          <Link>Choose Size</Link>
        </div>
        <div className="item">
          <img src={product} alt="" />
          <strong>Product Name</strong>
          <strong>$100.00</strong>
          <Link>Choose Size</Link>
        </div>
      </div>
    </div>
  );
};
