

const redux = require('redux');
const createStore = redux.createStore;


const initialState={
    value:0,
    nama:'',
    age:10
}

// REDUCER
const rootReducer = (state=initialState, action) =>{
    console.log(action);
    switch (action.type) {
        case 'ADD_AGE':        // cara pertama
            return{
                ...state,
                age:state.age+2
            }
        case 'CHANGE_VALUE':   //cara kedua
                return{
                    ...state,
                    value:state.value + action.newValue
                }
        case 'CHANGE_NAMA':
                return{
                    ...state,  // agar di panggila lagi state yg sudah ada,agar tidak hilang value sebelumnya
                    nama:action.gantiNama
                }   
        default:
          return state;
      }
        return state
}

// STORE
const store=createStore(rootReducer)
console.log(store.getState());


// SUBCRIPTION  => ketika ada perubahan pada store
store.subscribe(()=>{
    console.log('Terjadi perubahan', store.getState())
})

//dispacth action
store.dispatch({type:'ADD_AGE'})  // cara pertama
store.dispatch({type:'CHANGE_VALUE',newValue:5})   //cara kedua
store.dispatch({type:'CHANGE_NAMA',gantiNama:'Rafles Nainggolan'})
console.log(store.getState());




