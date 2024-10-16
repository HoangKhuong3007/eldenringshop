import React, { useState } from "react";
import FileResizer from "react-image-file-resizer";
import { useDispatch } from "react-redux";
// import styles
import "../../styles/components/modal/modal.css";
// import slices
import { toggleAddBlogModal } from "../../redux/slices/modal/modal";
export const AddBlogModal = () => {
  // dispatch
  const dispatch = useDispatch();
  // state
  const [previewImage, setPreviewImage] = useState(null);
  // file
  const resizeFile = (file) => {
    FileResizer.imageFileResizer(
      file,
      300,
      300,
      "PNG",
      300,
      0,
      (uri) => {
        setPreviewImage(uri);
      },
      "base64",
      250,
      250
    );
  };
  //   handle func
  const handleToggleAddBlogModal = () => {
    dispatch(toggleAddBlogModal());
  };
  const removeChooseImage = () => {
    setPreviewImage(null);
  };
  return (
    <div className="add-blog-modal-container">
      <div className="add-blog-modal">
        <div className="header">
          <div>
            <i className="bx bx-book-content"></i>
            <p>Add Blog</p>
          </div>
          <i className="bx bx-x" onClick={handleToggleAddBlogModal}></i>
        </div>
        <form action="" autoComplete="new-password" className="add-blog-form">
          <div className="input-image">
            <div>
              {previewImage ? (
                <>
                  <label htmlFor="image">
                    <img src={previewImage} alt="" />
                  </label>
                </>
              ) : (
                <>
                  <label htmlFor="image">
                    <i className="bx bx-image-add"></i>
                    <p>Click to choose image for blog header</p>
                  </label>
                </>
              )}
              <input
                type="file"
                name=""
                id="image"
                onChange={(e) => resizeFile(e.target.files[0])}
              />
            </div>
            <small onClick={removeChooseImage}>Clear the image</small>
          </div>
          <div className="input-item">
            <label htmlFor="">Blog title*</label>
            <input type="text" placeholder="Enter title..." />
            <small>Blog title must at least 10 characters</small>
          </div>
          <div className="input-content">
            <label htmlFor="">Content*</label>
            <textarea name="" id="" placeholder="Enter content..."></textarea>
            <small>Max content is 255 characters</small>
          </div>
        </form>
        <div className="submit">
          <button onClick={handleToggleAddBlogModal}>Return</button>
          <button>Confirm create blog</button>
        </div>
      </div>
    </div>
  );
};
