import React, { Component } from "react";

class Props1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: "Belajar Propsss",
      hobby: ["satu", "dua"],
      users_list: [],
      jumlah: 0
    };
  }
  getStateParents = () => {
    const hobby = this.props.data_object.hobby;
    const userlist = this.props.data_object.userslist;

    this.setState({ hobby: hobby });
    this.setState({ users_list: userlist });
    console.log(JSON.stringify(userlist));
  };
  adData = () => {
    // var user = this.state.users_list;
    // const new_data = [{ id: 5, nama: "awingbawe", phone: "066666" }];
    // this.setState({ users_list: user.concat(new_data) });
    const new_data = { id: 5, nama: "awingbawe", phone: "066666" };
    this.setState(prevState => ({
      users_list: [...prevState.users_list, new_data]
    }));

    // this.setState({ jumlah: this.state.jumlah + 1 });
    // this.setState({ count: this.state.jumlah + 1 });
    // this.setState({ jumlah: this.state.jumlah + 1 });
    this.setState(prevstate => ({ jumlah: prevstate.jumlah + 1 }));
    this.setState(prevstate => ({ jumlah: prevstate.jumlah + 1 }));
    this.setState(prevstate => ({ jumlah: prevstate.jumlah + 1 }));
    console.log(this.state.jumlah);
  };

  hapus = ev => {
    const user = this.state.users_list;
    var new_user = user.filter(val => val.id !== ev);
    this.setState({ users_list: new_user });

    const result = user.filter(vale => vale.id !== ev).map(res => res);
    console.log(result);
  };
  render() {
    const { getStateParents, hapus, adData } = this;
    const { hobby, users_list } = this.state;
    return (
      <div>
        <h5>Hello : {this.props.title}</h5>
        <p>
          <button onClick={this.props.talk}>props fungsi</button>
        </p>
        <p>
          <button onClick={getStateParents}>State from parents</button>
          <button onClick={adData}>Add Data</button>
        </p>
        <div>
          <div>
            <h3>array hobbyss</h3>
            {hobby.map(val1 => {
              return <p>{val1}</p>;
            })}
          </div>
          <div>
            <h3>array users</h3>
            {users_list.map((val2, idx) => {
              return (
                <div>
                  <p key={val2.id}>
                    {`${idx} ${val2.nama}`}{" "}
                    <button
                      onClick={() => {
                        hapus(val2.id);
                      }}
                    >
                      X
                    </button>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Props1;
