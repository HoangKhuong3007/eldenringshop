import React from "react";
import { useLocation } from "react-router-dom";
// import styles
import "../../styles/public/productdetail/productdetail.css";
// import components
import { Navbar } from "../../components/navbar/Navbar";
import { AdvanceNavbar } from "../../components/navbar/AdvanceNavbar";
import { Footer } from "../../components/footer/Footer";
// import assets
import product from "../../assets/carousel.jpg";
export const ProductDetail = () => {
  const location = useLocation();
  const { productInfo } = location.state;
  // handle func
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  return (
    <div className="product-detail-container">
      <Navbar />
      <AdvanceNavbar />
      <div className="product-detail">
        <div className="product-image">
          <img src={productInfo.image} alt="" />
        </div>
        <div className="product-main-info">
          <span>{productInfo.cateName} Category</span>
          <strong>{productInfo.name}</strong>
          <p>{formatPrice(productInfo.price)}</p>
          <div className="size">
            <label className="label" htmlFor="">
              Size
            </label>
            <div className="size-list">
              {productInfo.productVariants.map((variant) => (
                <div className="size-item" key={variant.sizeName}>
                  <input
                    type="radio"
                    id={`size${variant.sizeName}`}
                    name="size"
                    value={variant.sizeName}
                    disabled={variant.quantity === 0}
                  />
                  <label
                    className={variant.quantity === 0 && "out-of-stock"}
                    htmlFor={`size${variant.sizeName}`}
                  >
                    Size {variant.sizeName}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="buttons">
            <button>Add To Cart</button>
            <button>Buy Now</button>
          </div>
          <div className="note">
            <p>
              If the product you are interested in appears out of stock on the
              website. Please INBOX directly to EldenRing for the fastest
              support. Thank you very much!
            </p>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="header">
          <strong>Product Description</strong>
        </div>
        <div className="main">
          <p>{productInfo.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
