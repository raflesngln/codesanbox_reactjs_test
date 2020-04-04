import React from "react";

class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputan: { nama: "", alamat: "" }
    };
  }
  componentDidMount() {
    const listdata = this.props.datalist;
    this.setState({
      list: listdata
    });
  }
  getAll = evt => {
    const listdata = this.props.datalist;
    this.setState({
      list: listdata
    });
  };
  getDetail = evt => {
    const details = this.props.datalist.filter(val => {
      return val.id === evt;
    });
    this.setState({
      list: details
    });
    alert(JSON.stringify(details));
  };
  setinputan = ev => {
    let { name, value } = ev.target;
    this.setState({
      inputan: {
        ...this.state.inputan,
        [name]: value
      }
    });
    console.log(ev.target.value);
  };
  simpanData = ev => {
    ev.preventDefault();
    const ambilstate = this.state.inputan;
    console.log("SImpan inputan data : " + JSON.stringify(ambilstate));
  };

  coba = ev => {
    console.log(ev.target.name);
    console.log(ev.target.dataset.list);
    console.log(this.props);
  };
  senParentData = () => {
    this.props.sendToParent("ini dikirim dari child ke parents");
  };
  render() {
    return (
      <div>
        <button onClick={this.getAll}>GetAll</button>
        <div>
          {this.state.list.map((val, idx) => {
            return (
              <div key={val.id}>
                <li onClick={() => this.getDetail(val.id)} key={idx}>{`${
                  val.id
                } - ${val.nama}-${val.phone}`}</li>
              </div>
            );
          })}
        </div>
        <form onSubmit={this.simpanData}>
          <input
            type="tex"
            name="nama"
            placeholder="nama"
            onChange={this.setinputan}
          />
          <input
            type="tex"
            name="alamat"
            placeholder="alamat"
            onChange={this.setinputan}
          />
          <button type="submit">Simpan</button>
        </form>

        <p>{this.state.inputan.nama}</p>
        <p>{this.state.inputan.alamat}</p>

        <button
          id="test"
          data-list="My List"
          name="rafles nainggolan"
          onClick={this.coba}
        >
          test
        </button>
        <button onClick={this.senParentData}>Send data toparent</button>
      </div>
    );
  }
}

export default ListUsers;
