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
        <Route path="/code-editor/edit/:id" component={Edit} />
        <Route path="/code-editor/new">
          <Redirect to={`/code-editor/edit/${uuid()}`} />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
