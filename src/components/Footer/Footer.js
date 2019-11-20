import React from "react";
import "./Footer.scss";
import Text from "../Shared/Text/Text";

const Footer = props => {
  return (
    <div className="footer">
      <Text size={6}>{props.text}</Text>
    </div>
  );
};

export default Footer;
