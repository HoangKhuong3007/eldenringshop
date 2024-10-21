import React from "react";
// import styles
import "../../styles/public/checkout/checkout.css";
// import components
import { Navbar } from "../../components/navbar/Navbar";
import { AdvanceNavbar } from "../../components/navbar/AdvanceNavbar";
import { Footer } from "../../components/footer/Footer";
// import assets
import product from "../../assets/carousel.jpg";
export const CheckoutPage = () => {
  return (
    <div className="checkout-container">
      <Navbar />
      <AdvanceNavbar />
      <div className="checkout">
        <form action="" autoComplete="off" className="info-form">
          <div className="header">
            <strong>Delivery Infomation</strong>
          </div>
          <div className="input-item">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Lon Khuong" />
          </div>
          <div className="input-item">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="hoangkhuong2k4@gmail.com" />
          </div>
          <div className="input-item">
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Vinhomes Grand Park" />
          </div>
          <div className="input-item">
            <label htmlFor="">Phone</label>
            <input type="text" placeholder="0123456789" />
          </div>
        </form>
        <div className="summary">
          <div className="header">
            <strong>Order Summary</strong>
          </div>
          <div className="cart-list">
            <div className="cart-item">
              <div className="main">
                <img src={product} alt="" />
                <div>
                  <strong>Product name</strong>
                  <p>Size S</p>
                  <span>$40.00</span>
                </div>
              </div>
              <p className="quantity">4 items</p>
            </div>
            <div className="cart-item">
              <div className="main">
                <img src={product} alt="" />
                <div>
                  <strong>Product name</strong>
                  <p>Size S</p>
                  <span>$40.00</span>
                </div>
              </div>
              <p className="quantity">4 items</p>
            </div>
            <div className="cart-item">
              <div className="main">
                <img src={product} alt="" />
                <div>
                  <strong>Product name</strong>
                  <p>Size S</p>
                  <span>$40.00</span>
                </div>
              </div>
              <p className="quantity">4 items</p>
            </div>
          </div>
          <div className="total">
            <div className="subtotal">
              <div className="item">
                <p>Subtotal</p>
                <strong>$40.00</strong>
              </div>
              <div className="item">
                <p>Shipping</p>
                <strong>Free</strong>
              </div>
            </div>
            <div className="confirm">
              <div>
                <strong>Total</strong>
                <strong>$40.00</strong>
              </div>
              <button>Confirm Pay $40.00</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
