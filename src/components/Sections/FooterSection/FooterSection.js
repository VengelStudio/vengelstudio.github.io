import React from "react";
import "./FooterSection.scss";
import Footer from "../../Footer/Footer";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer">
      <Footer text={`©${currentYear} Vengel Studio`} />
    </section>
  );
};

export default FooterSection;
