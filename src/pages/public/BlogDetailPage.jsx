import React from "react";
import { Link } from "react-router-dom";
// import styles
import "../../styles/public/blogdetail/blogdetail.css";
// import components
import { Navbar } from "../../components/navbar/Navbar";
import { AdvanceNavbar } from "../../components/navbar/AdvanceNavbar";
import { Footer } from "../../components/footer/Footer";
// import assets
import image from "../../assets/blogbanner.jpg";
export const BlogDetailPage = () => {
  return (
    <div className="blog-detail-container">
      <Navbar />
      <AdvanceNavbar />
      <div className="blog-detail">
        <div className="header">
          <span>By Admin</span>
          <strong>How To Choose Best Module For Javascript Sites</strong>
          <p>January 26, 2024</p>
        </div>
        <img src={image} alt="" />
        <div className="main">
          <div className="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              maxime vitae eveniet animi ut. Recusandae blanditiis aut rerum
              neque iusto, praesentium aperiam, repellendus eos ea optio alias
              dolorum provident ad?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ipsa maxime vitae eveniet animi ut. Recusandae
              blanditiis aut rerum neque iusto, praesentium aperiam, repellendus
              eos ea optio alias dolorum provident ad?Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsa maxime vitae eveniet animi
              ut. Recusandae blanditiis aut rerum neque iusto, praesentium
              aperiam, repellendus eos ea optio alias dolorum provident ad?Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Ipsa maxime
              vitae eveniet animi ut. Recusandae blanditiis aut rerum neque
              iusto, praesentium aperiam, repellendus eos ea optio alias dolorum
              provident ad?Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ipsa maxime vitae eveniet animi ut. Recusandae blanditiis
              aut rerum neque iusto, praesentium aperiam, repellendus eos ea
              optio alias dolorum provident ad?Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ipsa maxime vitae eveniet animi ut.
              Recusandae blanditiis aut rerum neque iusto, praesentium aperiam,
              repellendus eos ea optio alias dolorum provident ad?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Ipsa maxime vitae
              eveniet animi ut. Recusandae blanditiis aut rerum neque iusto,
              praesentium aperiam, repellendus eos ea optio alias dolorum
              provident ad?
            </p>
          </div>
          <div className="utils">
            <div className="list">
              <strong>Recent posts</strong>
              <Link>
                How To Choose Best Module For Javascript Site. React or Angular?
              </Link>
              <Link>How To Choose Best Module For Javascript Sites</Link>
              <Link>How To Choose Best Module For Javascript Sites</Link>
              <Link>How To Choose Best Module For Javascript Sites</Link>
            </div>
            <div className="list">
              <strong>Share this article</strong>
              <div>
                <i className="bx bxl-instagram-alt"></i>
                <p>Instagram</p>
              </div>
              <div>
                <i className="bx bxl-facebook-circle"></i>
                <p>Facebook</p>
              </div>
              <div>
                <i className="bx bx-link-alt"></i>
                <p>Copy URL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
