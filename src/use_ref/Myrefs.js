import React, { Component } from "react";

export default class Myrefs extends Component {
  constructor(props) {
    super(props);
    this.phone = React.createRef();
    this.state = {
      judul: "CRUD API",
      value: "",
      errors: []
    };
  }
  saveForm = ev => {
    ev.preventDefault();
    // this.handleValidation(this.refs.phone.value, this.refs.nama.address);

    console.log(this.refs.nama.value);
    console.log(this.refs.alamat.placeholder);
    this.refs.nama.focus();
    this.refs.nama.value = "";
    this.refs.alamat.value = "";
    // or
    this.setState({ value: this.phone.current.value });
  };

  handleValidation = (phone, address) => {
    const errors = [];
    if (phone.length === 10) {
      errors.push("Phone should be at least 10 characters long");
    }
    if (address.length < 0) {
      errors.push("address cannot empty");
    }
    if (this.state.errors.length > 0) {
      this.setState({ errors: errors });
      return;
    }
    return errors;
  };

  // for another validation submit error
  handleinputan = e => {
    this.setState(
      {
        password: e.target.value,
        hasEnoughChars: e.target.value.length >= 8,
        hasUpperAndLowercaseChars:
          /[a-z]/.test(e.target.value) && /[A-Z]/.test(e.target.value),
        hasSpecialChars: /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(
          e.target.value
        )
      },
      () => {
        if (
          this.state.hasEnoughChars &&
          this.state.hasUpperAndLowercaseChars &&
          this.state.hasSpecialChars
        ) {
          this.setState({ isPasswordValid: true });
        } else {
          this.setState({ isPasswordValid: false });
        }
      }
    );
  };
  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <h3>Value: {this.state.value}</h3>
        <form method="post" onSubmit={this.saveForm}>
          <input name="nama" ref="nama" placeholder="input nama" />
          <input
            name="alamat"
            className={`text-input ${this.props.className}`}
            ref="alamat"
            placeholder="input alamat"
          />
          <input name="phone" ref={this.phone} placeholder="phone" />
          <input name="address" ref={this.address} placeholder="address" />
          <button className="btn" type="submit">
            Save Form
          </button>
        </form>

        {this.state.errors.map(val => {
          return <li key={val}>{val}</li>;
        })}
      </div>
    );
  }
}
