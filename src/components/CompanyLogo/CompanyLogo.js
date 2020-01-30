import React from "react";
import "./CompanyLogo.scss";
import Logo from "../../assets/images/vengel-logo.svg";

const CompanyLogo = props => {
  return <img className="company-logo" src={Logo} />;
};

export default CompanyLogo;
