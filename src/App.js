import { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Joke } from "./Pages/Joke";
import Home from "./Pages/Home";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/joke/:catId">
            <Joke />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
