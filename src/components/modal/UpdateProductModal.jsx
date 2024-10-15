import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FileResizer from "react-image-file-resizer";
// import styles
import "../../styles/components/modal/modal.css";
// import slices
import { toggleUpdateProductModal } from "../../redux/slices/modal/modal";
export const UpdateProductModal = () => {
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
  const removeChooseImage = () => {
    setPreviewImage(null);
  };
  const handleToggleUpdateProductModal = () => {
    dispatch(toggleUpdateProductModal());
  };
  return (
    <div className="update-product-modal-container">
      <div className="update-product-modal">
        <div className="header">
          <div>
            <i className="bx bxs-shopping-bag-alt"></i>
            <p>Update Product</p>
          </div>
          <i className="bx bx-x" onClick={handleToggleUpdateProductModal}></i>
        </div>
        <form action="" className="update-product-form">
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
                    <p>Click to choose image for product</p>
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
            <label htmlFor="">Product name*</label>
            <input type="text" placeholder="Enter product name..." />
            <small>Product name must at least 10 characters and clear</small>
          </div>
          <div className="input-item">
            <label htmlFor="">Price*</label>
            <input type="text" placeholder="Enter price..." />
            <small>Price must be number</small>
          </div>
          <div className="input-item">
            <label htmlFor="">Number in stock*</label>
            <input type="text" placeholder="Enter stock number..." />
            <small>Stock must be number</small>
          </div>
          <div className="select-item">
            <label htmlFor="category">Categories*</label>
            <div>
              <select name="category" id="category">
                <option value="">Select category</option>
                <option value="">Hat</option>
                <option value="">Bag</option>
                <option value="">Ring</option>
                <option value="">Necklet</option>
              </select>
              <i className="bx bx-chevron-down"></i>
            </div>
            <small>Select category for product</small>
          </div>
        </form>
        <div className="submit">
          <button onClick={handleToggleUpdateProductModal}>Return</button>
          <button>Confirm update product</button>
        </div>
      </div>
    </div>
  );
};
