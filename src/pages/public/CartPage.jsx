import React from "react";
import { Link } from "react-router-dom";
// import styles
import "../../styles/public/cart/cart.css";
// import components
import { Navbar } from "../../components/navbar/Navbar";
import { AdvanceNavbar } from "../../components/navbar/AdvanceNavbar";
import { Footer } from "../../components/footer/Footer";
// import assets
import product from "../../assets/carousel.jpg";
export const CartPage = () => {
  return (
    <div className="cart-container">
      <Navbar />
      <AdvanceNavbar />
      <div className="cart">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={product} alt="" />
                <div>
                  <p>Category</p>
                  <strong>Product name</strong>
                  <span>Size S</span>
                </div>
              </td>
              <td>$40.00</td>
              <td>
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </td>
              <td>$40.00</td>
            </tr>
            <tr>
              <td>
                <img src={product} alt="" />
                <div>
                  <p>Category</p>
                  <strong>Product name</strong>
                  <span>Size S</span>
                </div>
              </td>
              <td>$40.00</td>
              <td>
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </td>
              <td>$40.00</td>
            </tr>
          </tbody>
        </table>
        <div className="checkout">
          <div className="header">
            <strong>Cart Summary</strong>
          </div>
          <div className="main">
            <div className="item">
              <p>Total items</p>
              <strong>2 items</strong>
            </div>
            <div className="item">
              <p>Cart Subtotal</p>
              <strong>$40.00</strong>
            </div>
            <div className="item">
              <p>Shipping</p>
              <strong>Free</strong>
            </div>
            <div className="total">
              <strong>Cart Total</strong>
              <strong>$40.00</strong>
            </div>
          </div>
          <Link to="/checkout">Go to checkout</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
