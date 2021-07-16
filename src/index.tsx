import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { CodeProvider } from "./context/code";
import { PaneOpenProvider } from "./context/paneOpen";
import { DisplayVerticalProvider } from "./context/displayVertical";

ReactDOM.render(
  <DisplayVerticalProvider>
    <PaneOpenProvider>
      <CodeProvider>
        <App />
      </CodeProvider>
    </PaneOpenProvider>
  </DisplayVerticalProvider>,
  document.getElementById("root")
);
