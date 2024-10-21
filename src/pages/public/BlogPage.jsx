import React from "react";
import { Link } from "react-router-dom";
// import styles
import "../../styles/public/blog/blog.css";
// import components
import { Navbar } from "../../components/navbar/Navbar";
import { AdvanceNavbar } from "../../components/navbar/AdvanceNavbar";
import { Footer } from "../../components/footer/Footer";
// import assets
import image from "../../assets/category2.jpg";
export const BlogPage = () => {
  return (
    <div className="blog-container">
      <Navbar />
      <AdvanceNavbar />
      <div className="blogs">
        <div className="header">
          <p>The Blog</p>
          <strong>Writing from EldenRing</strong>
          <span>The lastest news, styles and trends</span>
        </div>
        <div className="header-blog">
          <img src={image} alt="" />
          <div className="detail">
            <span>The newest</span>
            <strong>How to choose best module for Javascript sites</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam
              eveniet nobis eius dignissimos impedit assumenda fugit reiciendis
              eos tempore laborum, aliquam labore. Cupiditate consequuntur
              nesciunt molestiae est aliquid rem.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est ullam eveniet nobis eius
              dignissimos impedit assumenda fugit reiciendis eos tempore
              laborum, aliquam labore. Cupiditate consequuntur nesciunt
              molestiae est aliquid rem.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est ullam eveniet nobis eius dignissimos impedit
              assumenda fugit reiciendis eos tempore laborum, aliquam labore.
              Cupiditate consequuntur nesciunt molestiae est aliquid rem.Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Est ullam
              eveniet nobis eius dignissimos impedit assumenda fugit reiciendis
              eos tempore laborum, aliquam labore. Cupiditate consequuntur
              nesciunt molestiae est aliquid rem.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est ullam eveniet nobis eius
              dignissimos impedit assumenda fugit reiciendis eos tempore
              laborum, aliquam labore. Cupiditate consequuntur nesciunt
              molestiae est aliquid rem.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est ullam eveniet nobis eius dignissimos impedit
              assumenda fugit reiciendis eos tempore laborum, aliquam labore.
              Cupiditate consequuntur nesciunt molestiae est aliquid rem.
            </p>
            <div className="info">
              <i className="bx bx-user-circle"></i>
              <div>
                <strong>by Admin</strong>
                <p>Posted at 20/10/2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="blog-item">
            <img src={image} alt="" />
            <strong>How to choose best module for Javascript sites</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam
              eveniet nobis eius dignissimos impedit assumenda fugit reiciendis
              eos tempore laborum, aliquam labore. Cupiditate consequuntur
              nesciunt molestiae est aliquid rem.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est ullam eveniet nobis eius
              dignissimos impedit assumenda fugit reiciendis eos tempore
              laborum, aliquam labore. Cupiditate consequuntur nesciunt
              molestiae est aliquid rem.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est ullam eveniet nobis eius dignissimos impedit
              assumenda fugit reiciendis eos tempore laborum, aliquam labore.
              Cupiditate consequuntur nesciunt molestiae est aliquid rem.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="info">
              <i className="bx bx-user-circle"></i>
              <div>
                <strong>by Admin</strong>
                <p>Posted at 20/10/2024</p>
              </div>
            </div>
          </div>
          <div className="blog-item">
            <img src={image} alt="" />
            <strong>How to choose best module for Javascript sites</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam
              eveniet nobis eius dignissimos impedit assumenda fugit reiciendis
              eos tempore laborum, aliquam labore. Cupiditate consequuntur
              nesciunt molestiae est aliquid rem.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est ullam eveniet nobis eius
              dignissimos impedit assumenda fugit reiciendis eos tempore
              laborum, aliquam labore. Cupiditate consequuntur nesciunt
              molestiae est aliquid rem.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est ullam eveniet nobis eius dignissimos impedit
              assumenda fugit reiciendis eos tempore laborum, aliquam labore.
              Cupiditate consequuntur nesciunt molestiae est aliquid rem.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="info">
              <i className="bx bx-user-circle"></i>
              <div>
                <strong>by Admin</strong>
                <p>Posted at 20/10/2024</p>
              </div>
            </div>
          </div>
          <div className="blog-item">
            <img src={image} alt="" />
            <strong>How to choose best module for Javascript sites</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam
              eveniet nobis eius dignissimos impedit assumenda fugit reiciendis
              eos tempore laborum, aliquam labore. Cupiditate consequuntur
              nesciunt molestiae est aliquid rem.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est ullam eveniet nobis eius
              dignissimos impedit assumenda fugit reiciendis eos tempore
              laborum, aliquam labore. Cupiditate consequuntur nesciunt
              molestiae est aliquid rem.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est ullam eveniet nobis eius dignissimos impedit
              assumenda fugit reiciendis eos tempore laborum, aliquam labore.
              Cupiditate consequuntur nesciunt molestiae est aliquid rem.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="info">
              <i className="bx bx-user-circle"></i>
              <div>
                <strong>by Admin</strong>
                <p>Posted at 20/10/2024</p>
              </div>
            </div>
          </div>
          <div className="blog-item">
            <img src={image} alt="" />
            <strong>How to choose best module for Javascript sites</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam
            </p>
            <div className="info">
              <i className="bx bx-user-circle"></i>
              <div>
                <strong>by Admin</strong>
                <p>Posted at 20/10/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
