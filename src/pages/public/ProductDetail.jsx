import React from "react";
// import styles
import "../../styles/public/productdetail/productdetail.css";
// import components
import { Navbar } from "../../components/navbar/Navbar";
import { AdvanceNavbar } from "../../components/navbar/AdvanceNavbar";
import { Footer } from "../../components/footer/Footer";
// import assets
import product from "../../assets/carousel.jpg";
export const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <Navbar />
      <AdvanceNavbar />
      <div className="product-detail">
        <div className="product-image">
          <img src={product} alt="" />
        </div>
        <div className="product-main-info">
          <span>Ring Category</span>
          <strong>Fushi V2 EldenRing Silver</strong>
          <p>$40.00</p>
          <div className="size">
            <label className="label" htmlFor="">
              Size
            </label>
            <div className="size-list">
              <div className="size-item">
                <input type="radio" id="sizeS" name="size" value="S" />
                <label htmlFor="sizeS">Size S</label>
              </div>
              <div className="size-item">
                <input type="radio" id="sizeM" name="size" value="M" />
                <label htmlFor="sizeM">Size M</label>
              </div>
              <div className="size-item">
                <input type="radio" id="sizeL" name="size" value="L" />
                <label htmlFor="sizeL">Size L</label>
              </div>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi
            molestiae voluptatum! Ut ab temporibus itaque inventore asperiores
            incidunt ducimus sunt voluptas dolore, nulla placeat voluptates?
            Officiis in ut minus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet sequi molestiae voluptatum! Ut ab temporibus
            itaque inventore asperiores incidunt ducimus sunt voluptas dolore,
            nulla placeat voluptates? Officiis in ut minus?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Amet sequi molestiae voluptatum!
            Ut ab temporibus itaque inventore asperiores incidunt ducimus sunt
            voluptas dolore, nulla placeat voluptates? Officiis in ut
            minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            sequi molestiae voluptatum! Ut ab temporibus itaque inventore
            asperiores incidunt ducimus sunt voluptas dolore, nulla placeat
            voluptates? Officiis in ut minus?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
