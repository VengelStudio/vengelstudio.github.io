import React from "react";
import "./Navbar.scss";
import { getClassNameWithSize } from "./Utilities.js";
import VSLogo from "../../assets/images/vengel-logo.svg";

const scrollZoomTrigger = 500;

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
            <button>About</button>
            <button>Projects</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
