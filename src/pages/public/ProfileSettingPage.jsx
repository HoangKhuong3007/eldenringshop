import React from "react";
// import styles
import "../../styles/public/profile/profile.css";
// import components
import { SettingNav } from "../../components/navbar/SettingNav";
export const ProfileSettingPage = () => {
  return (
    <div className="profile-setting-container">
      <SettingNav />
      <div className="profile-setting"></div>
    </div>
  );
};
