import React from "react";
import "./Navbar.scss";
import { getClassNameWithSize } from "./Utilities.js";
import VSLogo from "../../assets/images/vengel-logo.svg";
import Text from "../Shared/Text/Text";
import HamburgerMenuIcon from "../../assets/icons/hamburger.svg";

import { navbarScrollTrigger } from "../layoutConfig";

class Navbar extends React.Component {
  state = {
    isDownsize: false,
    isMenuToggled: false
  };

  handleScroll = e => {
    const { scrollTop } = e.srcElement.scrollingElement;
    this.setState({ isDownsize: scrollTop > navbarScrollTrigger });
  };

  handleMenuToggle = e => {
    e.preventDefault();
    this.setState({ isMenuToggled: !this.state.isMenuToggled });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  render() {
    return (
      <div className={getClassNameWithSize("navbar", this.state.isDownsize)}>
        <div className="nav-content-wrapper">
          <img
            src={VSLogo}
            className={getClassNameWithSize("logo", this.state.isDownsize)}
            alt="logo"
          ></img>
          <div
            className={
              getClassNameWithSize(
                `navigation-buttons shadow-${this.props.shadow}`,
                this.state.isDownsize
              ) + (this.state.isMenuToggled ? " toggled" : "")
            }
          >
            <button>
              <Text size={2} weight={300}>
                About
              </Text>
            </button>
            <button>
              <Text size={2} weight={300}>
                Projects
              </Text>
            </button>
            <button>
              <Text size={2} weight={300}>
                Contact
              </Text>
            </button>
          </div>
          <button className="menu-toggle-btn" onClick={this.handleMenuToggle}>
            <img src={HamburgerMenuIcon} />
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
