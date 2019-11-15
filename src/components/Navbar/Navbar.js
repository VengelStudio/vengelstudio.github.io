import React from "react";
import "./Navbar.scss";
import VSLogo from "../../assets/images/vengel-logo.svg";

export const Navbar = props => {
  return (
    <div className="navbar">
      <div className="nav-content-wrapper">
        <img src={VSLogo}></img>
        <div className={`navigation-buttons shadow-${props.shadow}`}>
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
