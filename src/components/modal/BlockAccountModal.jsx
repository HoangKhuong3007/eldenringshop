import React from "react";
// import styles
import "../../styles/components/modal/modal.css";
import { useDispatch } from "react-redux";
import { toggleBlockAccountModal } from "../../redux/slices/modal/modal";
export const BlockAccountModal = () => {
  // dispatch
  const dispatch = useDispatch();
  //   handle func
  const handleToggleBlockAccountModal = () => {
    dispatch(toggleBlockAccountModal());
  };
  return (
    <div className="block-account-modal-container">
      <div className="block-account-modal">
        <i className="bx bxs-error"></i>
        <strong>Block Account</strong>
        <p>You're going to block user "user fullname". Are you sure?</p>
        <div className="button">
          <button onClick={handleToggleBlockAccountModal}>
            No, Don't block.
          </button>
          <button>Yes, Block!</button>
        </div>
      </div>
    </div>
  );
};
