import React from "react";
import "./ParallaxBg.scss";

// config
const scrollZoomTrigger = 50; // in px

class ParallaxBg extends React.Component {
  state = {
    isZoomed: false
  };

  handleScroll = e => {
    const { scrollTop } = e.target;
    this.setState({ isZoomed: scrollTop > scrollZoomTrigger });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  render() {
    const getClasses = () => {
      return `background ${this.state.isZoomed ? "zoomed" : ""}`;
    };
    return (
      <div className={getClasses()}>
        <img src="/static/bg.png" />
      </div>
    );
  }
}

export default ParallaxBg;
