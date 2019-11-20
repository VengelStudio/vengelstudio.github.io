import React from "react";
import "./Navbar.scss";
import { getClassNameWithSize } from "./Utilities.js";
import VSLogo from "../../assets/images/vengel-logo.svg";
import Text from "../Shared/Text/Text";

const scrollZoomTrigger = 300;

class Navbar extends React.Component {
  state = {
    isDownsize: false
  };

  handleScroll = e => {
    const { scrollTop } = e.srcElement.scrollingElement;
    this.setState({ isDownsize: scrollTop > scrollZoomTrigger });
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
          ></img>
          <div
            className={getClassNameWithSize(
              `navigation-buttons shadow-${this.props.shadow}`,
              this.state.isDownsize
            )}
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
        </div>
      </div>
    );
  }
}

export default Navbar;
