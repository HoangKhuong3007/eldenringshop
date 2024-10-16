import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import styles
import "../../../styles/components/private/blog/blog.css";
// import assets
import image from "../../../assets/blog.jpg";
// import slices
import {
  toggleAddBlogModal,
  toggleAnimateBlogModalOn,
  togglePreviewBlogModalOn,
} from "../../../redux/slices/modal/modal";
export const BlogList = () => {
  // dispatch
  const dispatch = useDispatch();
  // handle func
  //   handle func
  const handleToggleAddBlogModal = () => {
    dispatch(toggleAddBlogModal());
  };
  const handleTogglePreviewBlogModalOn = () => {
    dispatch(togglePreviewBlogModalOn());
    setTimeout(() => {
      dispatch(toggleAnimateBlogModalOn());
    }, 1);
  };
  return (
    <div className="blog-list-container">
      <div className="utils">
        <div className="section-1">
          <div className="utils-header">
            <strong>Blog list</strong>
            <p>total 100 blogs</p>
          </div>
          <div className="buttons">
            <div className="add-btn" onClick={handleToggleAddBlogModal}>
              <i className="bx bx-plus"></i>
              <p>Add Blog</p>
            </div>
          </div>
        </div>
        <div className="section-2">
          {/* <div className="categories">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/product"
            >
              View all
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/product/category/necklet"
            >
              Necklet
            </NavLink>
          </div> */}
          <div className="filter">
            <div className="search">
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </div>
      <div className="blog-list">
        <div className="blog-item" onClick={handleTogglePreviewBlogModalOn}>
          <img src={image} alt="" />
          <div>
            <strong>The Sympathy of Ring</strong>
            <p>Posted at 20/10/2024</p>
            <small>By Admin 01</small>
          </div>
        </div>
      </div>
    </div>
  );
};
