import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Spreadpropsandproptypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: "props and state"
    };
  }

  render() {
    return (
      <div>
        <p>
          ini props spread :
          <b>
            {this.props.country} {this.props.city} {this.props.welcome}
          </b>
        </p>
      </div>
    );
  }
}

Spreadpropsandproptypes.propTypes = {
  country: PropTypes.string,
  city: PropTypes.string,
  welcome: PropTypes.string
};
Spreadpropsandproptypes.defaultProps = { welcome: "welcome Friends" };
