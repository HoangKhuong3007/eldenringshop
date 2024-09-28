import React from "react";
import "../../styles/public/blog/blog.css"
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
export const Blog = () => {
    return (
      <div className="blog-container">
        <Navbar />
        <h2>Ben</h2>
        <Footer />
      </div>
    );
  };