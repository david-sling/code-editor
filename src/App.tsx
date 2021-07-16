import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import { v4 as uuid } from "uuid";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edit/:id" component={Edit} />
        <Route path="/">
          <Redirect to={`/edit/${uuid()}`} />
        </Route>
      </Switch>
    </Router>
  );
}
