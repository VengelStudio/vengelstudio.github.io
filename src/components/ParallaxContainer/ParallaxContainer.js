import React from "react";
import "./ParallaxContainer.scss";
import { TweenMax, Power4, Linear } from "gsap";
import { parallaxContainerScrollTrigger } from "../layoutConfig";

class ParallaxContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  imgRef = React.createRef();

  handleScroll = e => {
    const { scrollTop } = e.srcElement.scrollingElement;
    const isZoomed = scrollTop > parallaxContainerScrollTrigger;

    if (isZoomed) {
      TweenMax.to(this.imgRef, 1, {
        opacity: 0,
        ease: Power4.easeInOut
      });
      // TweenMax.to(this.imgRef, 1, {
      //   scale: 1.1,
      //   ease: Linear.ease
      // });
    } else {
      TweenMax.to(this.imgRef, 1, {
        opacity: 1,
        ease: Power4.easeInOut
      });
      // TweenMax.to(this.imgRef, 1, {
      //   scale: 1,
      //   ease: Linear.ease
      // });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  render() {
    return (
      <div className="parallax-container">
        <div className="background">
          <img
            ref={el => (this.imgRef = el)}
            src="/static/bg.png"
            alt="background"
          />
        </div>
        <div className="foreground">{this.props.children}</div>
      </div>
    );
  }
}

export default ParallaxContainer;
