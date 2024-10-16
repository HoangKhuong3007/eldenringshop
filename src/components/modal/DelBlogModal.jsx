import React from "react";
import { useDispatch } from "react-redux";
// import styles
import "../../styles/components/modal/modal.css";
// import slices
import { toggleDelBlogModal } from "../../redux/slices/modal/modal";
export const DelBlogModal = () => {
  // dispatch
  const dispatch = useDispatch();
  // handle func
  const handleToggleDelBlogModal = () => {
    dispatch(toggleDelBlogModal());
  };
  return (
    <div className="del-blog-modal-container">
      <div className="del-blog-modal">
        <i className="bx bxs-error"></i>
        <strong>Delete Blog</strong>
        <p>You're going to delete the "Blog ID" blog. Are you sure?</p>
        <div className="button">
          <button onClick={handleToggleDelBlogModal}>No, Keep it.</button>
          <button>Yes, Delete!</button>
        </div>
      </div>
    </div>
  );
};
