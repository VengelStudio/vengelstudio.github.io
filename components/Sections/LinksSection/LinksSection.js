import React from "react";
import "./LinksSection.scss";
import Header from "../../Shared/Header/Header";
import Link from "../../Shared/Link/Link";

const LinksSection = () => {
  return (
    <section className="links">
      <Header size={4} shadow={true}>
        Useful links
      </Header>
      <div className="link-wrapper">
        <Link src="#">Example link #1</Link>
        <Link src="#">Example link #2</Link>
        <Link src="#">Example link #3</Link>
        <Link src="#">Example link #4</Link>
      </div>
    </section>
  );
};

export default LinksSection;
