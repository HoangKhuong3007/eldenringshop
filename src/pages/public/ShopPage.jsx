import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
// import styles
import "../../styles/public/shop/shop.css";
// import components
import { Navbar } from "../../components/navbar/Navbar";
import { AdvanceNavbar } from "../../components/navbar/AdvanceNavbar";
import { Footer } from "../../components/footer/Footer";
import { ShopList } from "../../components/public/shop/ShopList";
// import assets
import shop1 from "../../assets/shop1.jpg";
import shop2 from "../../assets/shop2.jpg";
import shop3 from "../../assets/shop3.jpg";
import cate1 from "../../assets/category1.jpg";
import cate2 from "../../assets/category2.jpg";
import cate3 from "../../assets/category3.jpg";
import cate4 from "../../assets/category4.jpg";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1536 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1536, min: 1024 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  smallMobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const ShopPage = () => {
  return (
    <div className="shop-container">
      <Navbar />
      <AdvanceNavbar />
      <div className="shop">
        <Carousel
          responsive={responsive}
          showDots={false}
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={7000}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          <div className="carousel-item">
            <div>
              <strong>
                Designed for the modern man who values quality, each piece adds
                a subtle touch of sophistication to any outfit.
              </strong>
            </div>
            <img src={shop1} alt="" />
          </div>
          <div className="carousel-item">
            <div>
              <strong>
                Discover our collection of men's accessories, designed to
                complement your individuality and add that extra edge to your
                wardrobe.
              </strong>
            </div>
            <img src={shop2} alt="" />
          </div>
          <div className="carousel-item">
            <div>
              <strong>
                Whether you’re closing deals or unwinding on the weekend, our
                collection is designed to keep you looking sharp and confident.
              </strong>
            </div>
            <img src={shop3} alt="" />
          </div>
        </Carousel>
        <div className="category">
          <Link to="/shop/category/1">
            <img src={cate1} alt="" />
            <div>
              <strong>Watches</strong>
            </div>
          </Link>
          <Link to="/shop/category/2">
            <img src={cate2} alt="" />
            <div>
              <strong>Rings</strong>
            </div>
          </Link>
          <Link to="/shop/category/3">
            <img src={cate3} alt="" />
            <div>
              <strong>Bags</strong>
            </div>
          </Link>
          <Link to="/shop/category/4">
            <img src={cate4} alt="" />
            <div>
              <strong>Necklace</strong>
            </div>
          </Link>
        </div>
        <ShopList />
      </div>
      <Footer />
    </div>
  );
};
