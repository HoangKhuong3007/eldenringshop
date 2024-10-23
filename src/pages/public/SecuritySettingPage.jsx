import React from "react";
// import styles
import "../../styles/public/security/security.css";
// import components
import { SettingNav } from "../../components/navbar/SettingNav";
import { BounceLoader } from "react-spinners";
export const SecuritySettingPage = () => {
  return (
    <div className="security-setting-container">
      <SettingNav />
      <div className="security-setting">
        <div className="header">
          <strong>Security Setting</strong>
          <div className="loading">
            <BounceLoader color="#23B870" size={25} />
            <p>Saving changes</p>
          </div>
          {/* <div className="saved">
            <i className="bx bx-check"></i>
            <p>Lastest updated</p>
          </div> */}
        </div>
        <form action="" className="security-form">
          <div className="input-item">
            <label htmlFor="">Current password</label>
            <input type="text" placeholder="*********" />
            <small>
              You have to enter the current password before change password
            </small>
          </div>
          <div className="input-item">
            <label htmlFor="">New password</label>
            <input type="password" placeholder="Enter new password" />
            <small>Enter new password to change password</small>
          </div>
          <div className="input-item">
            <label htmlFor="">Confirm new password</label>
            <input type="password" placeholder="Confirm password again" />
            <small>Confirm new password again to complete changes</small>
          </div>
          <button>Change password</button>
        </form>
      </div>
    </div>
  );
};
