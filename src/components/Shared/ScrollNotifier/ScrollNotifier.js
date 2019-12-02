import React from "react";

const withScrollNotifier = WrappedComponent => {
  return class withScrollNotifier extends React.Component {
    constructor(props) {
      super(props);
      this.ref = React.createRef();
    }
    render() {
      return <WrappedComponent {...this.props} ref={this.ref} />;
    }
  };
};

export default withScrollNotifier;
