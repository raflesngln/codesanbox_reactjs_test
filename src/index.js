import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";
import IndexProps from "./props_dan_state/index_props";
import ListDetails from "./props_dan_state/list_n_detail";
import IndexApi from "./crud_api/index";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">IndexProps</Link>
              </li>
              <li>
                <Link to="/ListDetails">ListDetails</Link>
              </li>
              <li>
                <Link to="/IndexApi">CRUD API</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/ListDetails">
              <ListDetails />
            </Route>
            <Route path="/IndexApi">
              <IndexApi />
            </Route>
            <Route path="/">
              <IndexProps />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
