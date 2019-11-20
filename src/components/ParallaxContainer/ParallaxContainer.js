import React from "react";
import "./ParallaxContainer.scss";

// config
const scrollZoomTrigger = 50; // in px

class ParallaxContainer extends React.Component {
  state = {
    isZoomed: false
  };

  handleScroll = e => {
    const { scrollTop } = e.srcElement.scrollingElement;
    this.setState({ isZoomed: scrollTop > scrollZoomTrigger });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  render() {
    const getBgClass = () => {
      let initialClass = "background ";
      initialClass += this.state.isZoomed ? "zoomed" : "";
      return initialClass;
    };

    return (
      <div className="parallax-container">
        <div className={getBgClass()}>
          <img src="/static/bg.png" alt="background" />
        </div>
        <div className="foreground">{this.props.children}</div>
      </div>
    );
  }
}

export default ParallaxContainer;
