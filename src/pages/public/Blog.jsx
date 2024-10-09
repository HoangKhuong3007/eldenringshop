import React from "react";
import "../../styles/public/blog/blog.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Blog = () => {
  return (
    <div className="blog-container">
      <Navbar />
      <h2>Ben</h2>
      <ToastContainer />
      <Footer />
    </div>
  );
};
