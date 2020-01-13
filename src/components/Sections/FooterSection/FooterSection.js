import React from "react";
import "./FooterSection.scss";
import Footer from "../../Footer/Footer";
import github from "../../../assets/icons/github.svg";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer">
      <Footer>
        <div className="year">{`©${currentYear} Vengel Studio`}</div>
        <div className="contact">
          <div className="person">
            <a href="https://github.com/Dezann">
              <img src={github}></img>
              <p>Bartosz Kępka</p>
            </a>
          </div>
          <div className="person">
            <a href="https://github.com/Kartm">
              <img src={github}></img>
              <p>Łukasz Blachnicki</p>
            </a>
          </div>
        </div>
      </Footer>
    </section>
  );
};

export default FooterSection;
