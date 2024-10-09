import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "../../styles/components/cartprofile/cartprofile.css";

export const CartProfile = () => {
  const userName = localStorage.getItem("username");

  return (
    <div className="cartprofile-container">
      <div className="cartprofile-icon">
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <div className="cartprofile-icon">
        <FontAwesomeIcon icon={faUser} />
        <span className="tooltip">{userName}</span>
      </div>
    </div>
  );
};
