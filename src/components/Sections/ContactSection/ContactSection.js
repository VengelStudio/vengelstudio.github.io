import React from "react";
import "./ContactSection.scss";
import Header from "../../Shared/Header/Header";

const ContactSection = () => {
  return (
    <section className="contact">
      <Header size={2} shadow={true}>
        About us
      </Header>
      <div className="wrapper us">
        <div className="person">
          <a href="https://github.com/Dezann">
            {/* <img src={github}></img> */}
            <p>Bartosz Kępka</p>
          </a>
        </div>
        <div className="person">
          <a href="https://github.com/Kartm">
            {/* <img src={github}></img> */}
            <p>Łukasz Blachnicki</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
