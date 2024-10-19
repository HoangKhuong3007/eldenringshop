import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import styles
import "./styles/public/homepage/homepage.css";
// import components
import { Navbar } from "./components/navbar/Navbar";
import { AdvanceNavbar } from "./components/navbar/AdvanceNavbar";
import { Footer } from "./components/footer/Footer";
import "react-toastify/dist/ReactToastify.css";
// import assets
import banner from "./assets/homepage-banner.jpg";
import product from "./assets/carousel.jpg";
import about from "./assets/about.jpg";
import newsletter from "./assets/newsletter.jpg";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpg";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1536 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1536, min: 1024 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  smallMobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const App = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <AdvanceNavbar />
      <div className="homepage">
        <div className="homepage-banner">
          <img src={banner} alt="" />
          {/* <LazyLoadImage src={banner} alt="" effect="blur" /> */}
          <div>
            <strong>
              Every man deserves accessories that mirror his ambition and style
            </strong>
            <Link to="/shop">Visit Shop</Link>
          </div>
        </div>
        <div className="discover">
          <div className="header">
            <p>Discover the</p>
            <strong>Refined Minimalism</strong>
          </div>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            arrows={false}
            autoPlay={false}
            keyBoardControl={true}
            containerClass="carousel-container"
            itemClass="carousel-item"
          >
            <Link to="/shop" className="carousel-item">
              <p>$40.00</p>
              <img src={product} alt="" />
              <strong>EldenRing Product</strong>
            </Link>
            <Link to="/shop" className="carousel-item">
              <p>$40.00</p>
              <img src={product} alt="" />
              <strong>EldenRing Product</strong>
            </Link>
            <Link to="/shop" className="carousel-item">
              <p>$40.00</p>
              <img src={product} alt="" />
              <strong>EldenRing Product</strong>
            </Link>
            <Link to="/shop" className="carousel-item">
              <p>$40.00</p>
              <img src={product} alt="" />
              <strong>EldenRing Product</strong>
            </Link>
            <Link to="/shop" className="carousel-item">
              <p>$40.00</p>
              <img src={product} alt="" />
              <strong>EldenRing Product</strong>
            </Link>
            <Link to="/shop" className="carousel-item">
              <p>$40.00</p>
              <img src={product} alt="" />
              <strong>EldenRing Product</strong>
            </Link>
            <Link to="/shop" className="carousel-item">
              <p>$40.00</p>
              <img src={product} alt="" />
              <strong>EldenRing Product</strong>
            </Link>
            <Link to="/shop" className="carousel-item">
              <p>$40.00</p>
              <img src={product} alt="" />
              <strong>EldenRing Product</strong>
            </Link>
          </Carousel>
        </div>
        <div className="about">
          <img src={about} alt="" />
          <div>
            <strong>
              Crafted with attention to detail, each piece tells a story of
              elegance and confidence.
            </strong>
            <Link to="/about">About Us</Link>
          </div>
        </div>
        <div className="category">
          <div className="category-list">
            <img src={product} alt="" />
            <Link to="/shop/category/1">
              <strong>Hats</strong>
              <div>
                <p>View all hats</p>
                <i class="bx bx-right-top-arrow-circle"></i>
              </div>
            </Link>
            <img src={product} alt="" />
            <img src={product} alt="" />
          </div>
          <div className="category-list">
            <Link to="/shop/category/1">
              <strong>Bags</strong>
              <div>
                <p>View all bags</p>
                <i class="bx bx-right-top-arrow-circle"></i>
              </div>
            </Link>
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
          </div>
          <div className="category-list">
            <img src={product} alt="" />
            <img src={product} alt="" />
            <Link to="/shop/category/1">
              <strong>Rings</strong>
              <div>
                <p>View all rings</p>
                <i class="bx bx-right-top-arrow-circle"></i>
              </div>
            </Link>
            <img src={product} alt="" />
          </div>
          <div className="category-list">
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <Link to="/shop/category/1">
              <strong>Necklets</strong>
              <div>
                <p>View all necklets</p>
                <i class="bx bx-right-top-arrow-circle"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className="newsletter">
          <img src={newsletter} alt="" />
          <div className="header">
            <strong>
              Sign up for our newsletter and receive 10% off your first order
            </strong>
            <div>
              <input type="text" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="explore">
            <strong>Be Part of the Movement</strong>
            <p>
              Stay ahead of the trends with access to limited collections,
              exclusive deals, and insider news. Our community is your gateway
              to looking sharp, always.
            </p>
            <Link to="/blogs">Explore our community</Link>
          </div>
          <div className="images">
            <div>
              <img src={blog1} alt="" />
              <img src={blog2} alt="" />
              <img src={blog3} alt="" />
            </div>
            <img className="big-img" src={blog4} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
