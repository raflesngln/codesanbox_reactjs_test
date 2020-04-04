// import { ADD_BOOKMARK, DELETE_BOOKMARK } from "../actions/types";
import { combineReducers } from "redux";

const initialState={
  value:0,
  nama:'Raf',
  age:17
}

// REDUCER
const rootReducer = (state= initialState, action) =>{
  // console.log(action); 
  switch (action.type) {
      case 'INCREASE_AGE':
          console.log('INI AKSI TAMBAH UMUR ' +JSON.stringify(action))
          return{
              ...state,
              age:state.age + action.jumlah
          }
          case 'DECREASE_AGE':
          return{
              ...state,
              age:state.age - action.jumlah
          }
      case 'CHANGE_NAMA':
        console.log('INI AKSI ' +JSON.stringify(action))
              return{
                  ...state,
                  nama:action.nama
              }
      default:
        return state
    }
      return state
}

function ManageCart(state = [], action) {
  switch (action.type) {
    case "ADD_CONTACT":
      // Menambahkan kontak baru kedalam daftar
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          phone: action.phone
        },
      ];
    case "REMOVE_CONTACT":
      // Menghapus kontak dari daftar
      return state.filter(contact => contact.id !== action.id);
    default:
      return state;
  }
}
function ManageUserdata(state = [], action) {
  switch (action.type) {
    case "CHECK_LOGIN":
      // cek login
      return [
        {
          statusLogin:'true',
          username: action.username,
          password: action.password
        },
      ];
    default:
      return state;
  }
}

const Reducers = combineReducers({
  rootReducer,
  ManageCart,
  ManageUserdata
});


export default Reducers;
// export default rootReducer;


