import React from "react";
import { useDispatch } from "react-redux";
// import styles
import "../../styles/components/modal/modal.css";
// import slices
import { toggleAddAccountModal } from "../../redux/slices/modal/modal";
export const AddAccountModal = () => {
  // dispatch
  const dispatch = useDispatch();
  //   handle func
  const handleToggleAddAccountModal = () => {
    dispatch(toggleAddAccountModal());
  };
  return (
    <div className="add-account-modal-container">
      <div className="add-account-modal">
        <div className="header">
          <div>
            <i className="bx bxs-user-circle"></i>
            <p>Add Account (for Manager)</p>
          </div>
          <i className="bx bx-x" onClick={handleToggleAddAccountModal}></i>
        </div>
        <form
          action=""
          autoComplete="new-password"
          className="add-account-form"
        >
          <div className="input-item">
            <label htmlFor="">Full name*</label>
            <input type="text" placeholder="Enter full name..." />
            <small>Enter fullname of user</small>
          </div>
          <div className="input-item">
            <label htmlFor="">Email*</label>
            <input type="text" placeholder="Enter email..." />
            <small>Email should be: example@gmail.com</small>
          </div>
          <div className="input-item">
            <label htmlFor="">Password*</label>
            <input type="text" placeholder="Enter password..." />
            <small>Password must at least 8 characters</small>
          </div>
        </form>
        <div className="submit">
          <button onClick={handleToggleAddAccountModal}>Return</button>
          <button>Confirm create account</button>
        </div>
      </div>
    </div>
  );
};
