import React from "react";
// import styles
import "../../styles/public/shop/shop.css";
// import components
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Shop = () => {
  return (
    <div className="shop-container">
      <Navbar />
      <h2>shop</h2>
      <ToastContainer />
      <Footer />
    </div>
  );
};
