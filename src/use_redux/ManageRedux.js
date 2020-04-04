import React, { Component } from 'react';
import {connect} from 'react-redux'

import { gantiNama, tambahUmur,kurangiUmur } from '../redux/actions/Actions';

class ManageRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama:this.props.nama,
      age:0
    };
  }

  handleChange=(ev)=>{
    this.setState({nama:this.refs.nama.value})
  }
  render() {
    console.log(this.props);
    // console.log(this.state);
    const { nama,age } = this.state;
    const { gantiNameDisplay, tambahinUmur,kuranginUmur } = this.props;

    return (
      <div className="container">
        <p> ManageRedux </p>
        {/* <button onClick={this.props.increaseAge}>Tambah Umur</button>
        <button onClick={this.props.decreaseAge}>Kurangi Umur</button>
        <button onClick={this.props.gantiNama}>Ganti Nama</button> */}
        <input name="nama" value={this.state.nama} ref="nama" onChange={this.handleChange}/>
        <button onClick={()=>{gantiNameDisplay({ names:nama})}}>Ganti Nama</button>
        <button onClick={()=>{tambahinUmur({ jumlah:1})}}>Tambahin umur</button>
        <button onClick={()=>{kuranginUmur({ jumlah:1})}}>Kurangi umur</button>
        <h1>Age redux : {this.props.age}</h1>
        <h3>Name redux : {this.props.nama}</h3>
      </div>
    );
  }
}

const mapStateToProps= (state)=>{
  return{
    age:state.age,
    nama:state.nama
  }
}
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     increaseAge:()=>dispatch({type:'INCREASE_AGE'}),
//     decreaseAge:()=>dispatch({type:'DECREASE_AGE'}),
//     gantiNama:()=>dispatch({type:'CHANGE_NAMA',gantiNama:'Rafles Nainggolan'})
//   }
// }

// Membuat fungsional yang membutuhkan fungsi dispatch
const mapDispatchToProps = dispatch => ({
  gantiNameDisplay: data => {
    dispatch(gantiNama(data));
  },
  tambahinUmur: data => {
    dispatch(tambahUmur(data));
  },
  kuranginUmur: data => {
    dispatch(kurangiUmur(data));
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageRedux)