import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import styles
import "../../styles/components/modal/modal.css";
// import slices
import {
  togglePreviewBlogModalOff,
  toggleAnimateBlogModalOff,
} from "../../redux/slices/modal/modal";
// import assets
import image from "../../assets/blogbanner.jpg";
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
        <div className="preview">
          <div className="blog-header">
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
                blanditiis aut rerum neque iusto, praesentium aperiam,
                repellendus eos ea optio alias dolorum provident ad?Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Ipsa maxime vitae
                eveniet animi ut. Recusandae blanditiis aut rerum neque iusto,
                praesentium aperiam, repellendus eos ea optio alias dolorum
                provident ad?Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Ipsa maxime vitae eveniet animi ut. Recusandae blanditiis
                aut rerum neque iusto, praesentium aperiam, repellendus eos ea
                optio alias dolorum provident ad?Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ipsa maxime vitae eveniet animi
                ut. Recusandae blanditiis aut rerum neque iusto, praesentium
                aperiam, repellendus eos ea optio alias dolorum provident
                ad?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ipsa maxime vitae eveniet animi ut. Recusandae blanditiis aut
                rerum neque iusto, praesentium aperiam, repellendus eos ea optio
                alias dolorum provident ad?Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ipsa maxime vitae eveniet animi
                ut. Recusandae blanditiis aut rerum neque iusto, praesentium
                aperiam, repellendus eos ea optio alias dolorum provident ad?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
