import React from "react";
import "./Footer.scss";
import Text from "../Shared/Text/Text";
import github from "../../assets/icons/github.svg";

const Footer = props => {
  return <div className="footer">{props.children}</div>;
};

export default Footer;
