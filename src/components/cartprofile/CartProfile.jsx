import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "../../styles/components/cartprofile/cartprofile.css";

export const CartProfile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const username = localStorage.getItem("username");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".cartprofile-icon")) {
      setShowMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="cartprofile-container">
      <div className="cartprofile-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <div className="cartprofile-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faUser} />
        <span className="tooltip">{username}</span>
        {showMenu && (
          <div className="profile-menu">
            <ul>
              <li>Profile</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
