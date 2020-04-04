import React, { Component } from "react";
import ListUsers from "./list_users";

class ListDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tampil: "list",
      userslist: [
        { id: 1, nama: "rafles", phone: "08979" },
        { id: 2, nama: "budi", phone: "021212" },
        { id: 3, nama: "mawar", phone: "087677653" }
      ]
    };
  }
  componentDidMount = () => {
    this.setState({ tampil: "list" });
  };
  getFromChild = val => {
    console.log(val);
    alert("DARI CHILD :" + val);
  };
  render() {
    // const { getStateParents, hapus, adData } = this;
    // const { hobby, users_list } = this.state;
    return (
      <div className="container">
        <h1>This List Users</h1>
        {this.state.tampil === "list" ? (
          <ListUsers
            key="1"
            datalist={this.state.userslist}
            judul="List datas"
            sendToParent={this.getFromChild}
          />
        ) : (
          "details"
        )}
      </div>
    );
  }
}

export default ListDetails;
