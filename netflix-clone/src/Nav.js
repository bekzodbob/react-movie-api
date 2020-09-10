import React from "react";
import "./Nav.css";

function Nav() {

  return (
    <div>
      <div className="nav">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />

        <img
          className="nav_avatar"
          src="https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-edit-profile-icon-png-image_779419.jpg"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
