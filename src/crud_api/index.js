import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Listdata from "./Listdata";
import Newdata from "./Newdata";

class IndexApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: "CRUD API"
    };
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/Listdata">List data</Link>
                </li>
                <li>
                  <Link to="/Newdata">Add Data</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/Listdata">
                <Listdata />
              </Route>
              <Route path="/Newdata">
                <Newdata title="Add New Data Form">
                  <div>
                    <h5>LOREM IPSUM (This is html from parents to children)</h5>
                    <p>content inside children</p>
                    <AnotherComponent />
                  </div>
                </Newdata>
              </Route>
              <Route path="/">
                <Listdata />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
const AnotherComponent = () => {
  return <p>This Is Another Component inside children</p>;
};
export default IndexApi;
