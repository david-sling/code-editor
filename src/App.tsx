import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import { v4 as uuid } from "uuid";

const { PUBLIC_URL } = process.env;
console.log({ PUBLIC_URL });

export default function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/edit/:id" component={Edit} />
        <Route path="/new">
          <Redirect to={`/edit/${uuid()}`} />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
