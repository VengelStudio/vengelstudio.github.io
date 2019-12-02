import React from "react";
import "./ContactSection.scss";
import Header from "../../Shared/Header/Header";
import Person from "../../Person/Person";
import Github from "../../../assets/icons/github.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Email from "../../../assets/icons/gmail.svg";
// import ScrollNotifier from "../../Shared/ScrollNotifier/ScrollNotifier";

const withScrollNotifier = WrappedComponent => {
  class withScrollNotifier extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return withScrollNotifier;
};

const linksWithIcons = {
  Bartosz: [
    { goToUrl: "#", iconUrl: Github },
    { goToUrl: "#", iconUrl: Linkedin },
    { goToUrl: "#", iconUrl: Email }
  ],
  Lukasz: [
    { goToUrl: "#", iconUrl: Github },
    { goToUrl: "#", iconUrl: Linkedin },
    { goToUrl: "#", iconUrl: Email }
  ]
};

const originalBartosz = (
  <Person
    name={"Bartosz"}
    surname={"Kępka"}
    description={"Automation and robotics student in Warsaw."}
    imgUrl={
      "https://scontent.fwaw7-1.fna.fbcdn.net/v/t1.0-9/s960x960/46456320_1110754145765807_1941359461566251008_o.jpg?_nc_cat=102&_nc_oc=AQmWbCutLsT0gdUCB1mu_J36l7d31vtlO0zQTrOjcfedBnLX5pMCimPJdpOUjFXSqaU&_nc_ht=scontent.fwaw7-1.fna&oh=ba3e34d1e6460c0a492c24e3497c07ed&oe=5E8AA790"
    }
    iconsWithLinks={linksWithIcons.Bartosz}
  />
);

const Bartosz = withScrollNotifier(originalBartosz);

class ContactSection extends React.Component {
  state = { elScrolledIntoView: null };

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll, true);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = e => {
  //   console.log(window.scrollY);
  // };

  render() {
    return (
      <section className="contact">
        <Header size={2} shadow={true}>
          About us
        </Header>
        {Bartosz}

        <Person
          name={"Łukasz"}
          surname={"Blachnicki"}
          description={"Applied computer science student in Wroclaw."}
          imgUrl={
            "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          }
          iconsWithLinks={linksWithIcons.Lukasz}
        />
      </section>
    );
  }
}

export default ContactSection;
