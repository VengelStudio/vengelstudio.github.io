import React from "react";
import "./ContactSection.scss";
import Header from "../../Shared/Header/Header";
import Text from "../../Shared/Text/Text";
import github from "../../../assets/icons/github.svg";
import gmail from "../../../assets/icons/gmail.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import ContactForm from "../../ContactForm/ContactForm";

const ContactSection = () => {
  return (
    <section className="contact">
      <Header size={2} shadow={true}>
        About us
      </Header>
      <div className="wrapper us">
        <div className="person">
          <Text size={1} weight={600}>
            Bartosz Kępka
          </Text>
          <div className="icons">
            <a href="https://github.com/Kartm">
              <img src={github}></img>
            </a>
            <a href="https://github.com/Kartm">
              <img src={linkedin}></img>
            </a>
            <a href="https://github.com/Kartm">
              <img src={gmail}></img>
            </a>
          </div>
        </div>
        <div className="person">
          <Text size={1} weight={600}>
            Łukasz Blachnicki
          </Text>
          <div className="icons">
            <a href="https://github.com/Kartm">
              <img src={github}></img>
            </a>
            <a href="https://github.com/Kartm">
              <img src={linkedin}></img>
            </a>
            <a href="https://github.com/Kartm">
              <img src={gmail}></img>
            </a>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
