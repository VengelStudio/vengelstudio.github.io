import React from "react";
import "./ParallaxContainer.scss";

class ParallaxContainer extends React.Component {
  render() {
    return (
      <div className="parallax-container">
        <div className="background">
          <img src="/static/bg.jpg" alt="background" />
        </div>
        <div className="foreground">{this.props.children}</div>
      </div>
    );
  }
}

export default ParallaxContainer;
