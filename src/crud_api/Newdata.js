import React, { Component } from "react";

export default class Newdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: "CRUD API"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.children}</h3>
      </div>
    );
  }
}
