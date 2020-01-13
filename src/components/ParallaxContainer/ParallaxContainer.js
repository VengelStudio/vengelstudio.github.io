import React from "react";
import "./ParallaxContainer.scss";

class ParallaxContainer extends React.Component {
  containerRef = new React.createRef();
  state = { bgHeight: "0px" };

  componentDidMount() {
    this.updateSize();

    const observer = new ResizeObserver(() => {
      this.updateSize();
    });
    observer.observe(this.containerRef.current);
  }

  updateSize(event) {
    if (this.containerRef) {
      this.setState({
        bgHeight: `${this.containerRef.current.scrollHeight}px`
      });
    }
  }

  render() {
    return (
      <div ref={this.containerRef} className="parallax-container">
        <div className="parallax-layer --background">
          <img
            style={{ height: this.state.bgHeight }}
            src="/static/bg.jpg"
            alt="background"
          />
        </div>
        <div className="parallax-layer --foreground">{this.props.children}</div>
      </div>
    );
  }
}

export default ParallaxContainer;
