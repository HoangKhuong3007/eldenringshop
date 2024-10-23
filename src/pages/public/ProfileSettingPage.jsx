import React from "react";
// import styles
import "../../styles/public/profile/profile.css";
// import components
import { SettingNav } from "../../components/navbar/SettingNav";
import { BounceLoader } from "react-spinners";
export const ProfileSettingPage = () => {
  return (
    <div className="profile-setting-container">
      <SettingNav />
      <div className="profile-setting">
        <div className="header">
          <strong>Personal Infomation</strong>
          <div className="loading">
            <BounceLoader color="#23B870" size={25} />
            <p>Saving changes</p>
          </div>
          {/* <div className="saved">
            <i className="bx bx-check"></i>
            <p>Lastest updated</p>
          </div> */}
        </div>
        <form action="" className="info-form">
          <div className="input-item">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="hoangkhuong2k4@gmail.com" />
            <small>You cannot change email address</small>
          </div>
          <div className="input-item">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Lon Khuong" />
            <small>You can change your name</small>
          </div>
          <div className="input-item">
            <label htmlFor="">Phone</label>
            <input type="text" placeholder="0123456789" />
            <small>You can change phone number</small>
          </div>
          <div className="input-item">
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Lon Khuong" />
            <small>You can change your address(for shipping)</small>
          </div>
          <button>Change Infomation</button>
        </form>
      </div>
    </div>
  );
};
