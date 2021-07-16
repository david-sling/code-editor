import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edit/:id" component={Edit} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
