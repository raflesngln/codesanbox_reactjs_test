import React, { Component } from "react";
import axios from "axios";

export default class Listdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: "CRUD API",
      persons: []
    };
  }

  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
      // console.log(res.data);
    });
  };
  addNewdata = () => {
    const baru = {
      id: 12,
      name: "rafles",
      username: "raflesia",
      email: "rafles@gmail.tv",
      street: "jakarta",
      suite: "taman palem",
      city: "DKI"
    };
    this.setState(prevState => ({
      persons: [...prevState.persons, baru]
    }));
  };
  detailsData = ({ id, nama }) => {
    var person = this.state.persons;
    var newdata = person.filter(val => val.id === id);
    this.setState({ persons: newdata });
    console.log(newdata);
  };
  deleteData = ({ id, nama }) => {
    var person = this.state.persons;
    var newdata = person.filter(val => val.id !== id);
    this.setState({ persons: newdata });
    console.log(newdata);
  };

  render() {
    return (
      <div>
        <button onClick={this.addNewdata}>insert</button>
        {this.state.persons.map(val => {
          return (
            <li key={val.id} id={val.id}>
              {`ID: ${val.id} ${val.name}- (${val.email})`}
              <button
                onClick={() => this.detailsData({ id: val.id, nama: val.name })}
              >
                Detail
              </button>
              <button
                onClick={() => this.deleteData({ id: val.id, nama: val.name })}
              >
                X
              </button>
            </li>
          );
        })}
      </div>
    );
  }
}
