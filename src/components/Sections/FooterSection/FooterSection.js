import React from "react";
import "./FooterSection.scss";
import Footer from "../../Footer/Footer";
import Text from "../../Shared/Text/Text";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer">
      <Footer>
        <Text size={6}>
          <div className="year">{`©${currentYear} Vengel Studio`}</div>
        </Text>
      </Footer>
    </section>
  );
};

export default FooterSection;
