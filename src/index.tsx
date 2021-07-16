import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { PaneOpenProvider } from "./context/paneOpen";
import { DisplayVerticalProvider } from "./context/displayVertical";

ReactDOM.render(
  <DisplayVerticalProvider>
    <PaneOpenProvider>
      <App />
    </PaneOpenProvider>
  </DisplayVerticalProvider>,
  document.getElementById("root")
);
