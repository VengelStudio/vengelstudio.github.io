import React from "react";
import "./ContactForm.scss";
import Text from "../Shared/Text/Text";
import Header from "../Shared/Header/Header";
import Icon from "../Shared/Icon/Icon";
import Link from "../Shared/Link/Link";

const ContactForm = props => {
  return (
    <div className="container contact">
      <Text size={3} weight="bold">
        Got any questions?
      </Text>
      <Text size={5}>Contact us now and get a reply within 24 hours!</Text>
      <Link src="mailto:vengelstudio@gmail.com">Email Us</Link>
    </div>
  );
};

export default ContactForm;
