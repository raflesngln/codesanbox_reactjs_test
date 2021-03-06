import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
// persisten redux
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'

import "./styles.css";
// import IndexProps from "./props_dan_state/index_props";
// import ListDetails from "./props_dan_state/list_n_detail";
// import IndexApi from "./crud_api/index";
// import Myrefs from "./use_ref/Myrefs";
// import ManageRedux from './use_redux/ManageRedux'
import Home from './component/home/index'
import About from './component/about/index'


import Reducers from './redux/reducer/index'
// const storeRedux = createStore(Reducers);

//redux persisten
const persistConfig = {
  key: 'root',
  storage: storage,
  // whitelist: ['loginReducer'] // which reducer want to store
}
const MyReducer = persistReducer(persistConfig, Reducers);
const middleware = applyMiddleware(thunk);

const storeRedux = createStore(MyReducer, middleware);
const persistor = persistStore(storeRedux);
export { persistor, storeRedux };


class Index extends React.Component {
  render() {
    return (
      <Provider store={storeRedux}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      </Provider>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
             
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index/>, rootElement);
