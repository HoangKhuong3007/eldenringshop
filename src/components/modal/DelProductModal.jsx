import React from "react";
import { useDispatch } from "react-redux";
// import styles
import "../../styles/components/modal/modal.css";
// import slices
import { toggleDelProductModal } from "../../redux/slices/modal/modal";
export const DelProductModal = () => {
  // dispatch
  const dispatch = useDispatch();
  // handle func
  const handleToggleDelProductModal = () => {
    dispatch(toggleDelProductModal());
  };
  return (
    <div className="del-product-modal-container">
      <div className="del-product-modal">
        <i className="bx bxs-error"></i>
        <strong>Delete Product</strong>
        <p>You're going to delete the "Product name" product. Are you sure?</p>
        <div className="button">
          <button onClick={handleToggleDelProductModal}>No, Keep it.</button>
          <button>Yes, Delete!</button>
        </div>
      </div>
    </div>
  );
};
