import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import styles
import "../../styles/components/modal/modal.css";
// import slices
import {
  togglePreviewBlogModalOff,
  toggleAnimateBlogModalOff,
} from "../../redux/slices/modal/modal";
export const PreviewBlog = () => {
  // selector
  const isTogglePreviewBlogModal = useSelector(
    (state) => state.modal.previewBlogModal.isToggleModal
  );
  const isToggleAnimateBlogModal = useSelector(
    (state) => state.modal.animateBlogModal.isToggleModal
  );
  // dispatch
  const dispatch = useDispatch();
  //   handle func
  const handleTogglePreviewBlogModalOff = () => {
    dispatch(toggleAnimateBlogModalOff());
    setTimeout(() => {
      dispatch(togglePreviewBlogModalOff());
    }, 800);
  };
  return (
    <div
      className={
        isTogglePreviewBlogModal
          ? `preview-blog-container`
          : `preview-blog-close`
      }
    >
      <div
        className={
          isToggleAnimateBlogModal
            ? `preview-blog-modal open`
            : `preview-blog-modal close`
        }
      >
        <div className="header">
          <strong>Blog Preview</strong>
          <i className="bx bx-x" onClick={handleTogglePreviewBlogModalOff}></i>
        </div>
        <div className="preview"></div>
      </div>
    </div>
  );
};
