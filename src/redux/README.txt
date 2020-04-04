reducers/todos.js
export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
#reducers/counter.js
export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
#reducers/index.js
import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'
export default combineReducers({
  todos,
  counter
})
#App.js
import { createStore } from 'redux'
import reducer from './reducers/index'
const store = createStore(reducer)
console.log(store.getState())
// {
//   counter: 0,
//   todos: []
// }
store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})
console.log(store.getState())
// {
//   counter: 0,
//   todos: [ 'Use Redux' ]
// }