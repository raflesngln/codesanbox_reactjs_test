import React, { Component } from "react";

class Userdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: "Array Users",
      value: true
    };
  }
  deletedata = id => {
    this.props.hapusdata(id);
  };

  componentWillUnmount = () => {
    console.log("componentWillUnmount Userdetailss");
  };
  shouldComponentUpdate = (nextProps, nextState) => {
    return true;
    // return this.state.value !== nextState.value;
  };

  componentDidUpdate = () => {
    console.log("componentDidUpdate Userdetailss");
  };
  componentDidMount = () => {
    console.log("componentDidMount Userdetailsss");
  };
  gantijudul = () => {
    this.setState({ judul: "judul diganti" });
  };
  render() {
    const listdata = this.props.listdata;
    return (
      <div>
        <h3>{this.state.judul}</h3>
        {listdata.map((val, idx) => {
          return (
            <div key={val.id}>
              <p>
                {`ID : ${val.id} - ${val.nama} - ${val.phone}`}
                <button
                  onClick={() => {
                    this.deletedata(val.id);
                  }}
                >
                  X
                </button>
              </p>
            </div>
          );
        })}

        <button onClick={this.gantijudul}>ganti judul</button>
      </div>
    );
  }
}
export default Userdetails;
