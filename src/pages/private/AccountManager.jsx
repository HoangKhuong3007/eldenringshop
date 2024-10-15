import React from "react";
import { useSelector } from "react-redux";
// import styles
import "../../styles/private/account/account.css";
// import components
import { Dashnav } from "../../components/navbar/Dashnav";
import { AccountList } from "../../components/private/account/AccountList";
import { AddAccountModal } from "../../components/modal/AddAccountModal";
import { BlockAccountModal } from "../../components/modal/BlockAccountModal";
export const AccountManager = () => {
  // selector
  const isToggleAddAccountModal = useSelector(
    (state) => state.modal.addAccountModal.isToggleModal
  );
  const isToggleBlockAccountModal = useSelector(
    (state) => state.modal.blockAccountModal.isToggleModal
  );
  return (
    <div className="account-manager-container">
      {isToggleAddAccountModal && <AddAccountModal />}
      {isToggleBlockAccountModal && <BlockAccountModal />}
      <Dashnav />
      <div className="account-manager">
        <div className="header">
          <p>Account Manager</p>
          <div className="my-info">
            <i className="bx bx-user-circle"></i>
            <div>
              <strong>Hi, Tang Hoang Khuong</strong>
              <p>hoangkhuong2k4@gmail.com</p>
            </div>
          </div>
        </div>
        <AccountList />
      </div>
    </div>
  );
};
