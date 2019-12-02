import React, { useRef } from "react";

const ScrollNotifier = props => {
  const refContainer = useRef(null);
  console.log(refContainer);
  return (
    <div className="scroll-notifier" ref={refContainer}>
      {props.children}
    </div>
  );
};

export default ScrollNotifier;
