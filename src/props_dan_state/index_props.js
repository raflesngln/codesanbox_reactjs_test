import React, { Component } from "react";
import Props1 from "../props_dan_state/prop1";

class IndexProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biodata: {
        nama: "Rafles Nainggolan",
        alamat: "Jakarta",
        phone: "08123882348",
        hobby: ["coding", "baca", "tenis", "travel"],
        userslist: [
          { id: 1, nama: "rafles", phone: "08979" },
          { id: 2, nama: "budi", phone: "021212" },
          { id: 3, nama: "mawar", phone: "087677653" }
        ]
      }
    };
  }

  getProps() {
    alert("Ini Props dikirim dari parents");
  }
  render() {
    const { getProps } = this;
    const { biodata, userslist } = this.state;
    return (
      <div className="container">
        <li>
          <Props1
            title="Ini props 1"
            talk={getProps}
            data_object={biodata}
            user_list={userslist}
          />
        </li>
      </div>
    );
  }
}

export default IndexProps;
