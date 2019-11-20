import React from "react";
import "./Person.scss";
import Text from "../Text/Text";
import VSheader from "../VSheader/VSheader";

class Person extends React.Component {
  render() {
    return (
      <div className="person">
        <div className="person-info">
          <VSheader size={3}>
            {this.props.name}
            <br />
            {this.props.surname}
          </VSheader>
          <br></br>
          <Text size={3}>{this.props.description}</Text>
          <div className="icons">icons go here</div>
        </div>
        <div className="person-img">
          <img src={this.props.imgUrl}></img>
        </div>
      </div>
    );
  }
}

export default Person;
