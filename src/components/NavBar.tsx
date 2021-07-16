import {
  HorizontalSplit,
  Menu,
  Share,
  VerticalSplit,
} from "@material-ui/icons";
import React from "react";

export default function NavBar() {
  return (
    <header className="NavBar">
      <div className="left">
        <Menu />
      </div>
      <div className="middle">
        <h1>CODE EDITOR</h1>
      </div>
      <div className="right">
        <Share />
        <VerticalSplit />
        <HorizontalSplit />
      </div>
    </header>
  );
}
