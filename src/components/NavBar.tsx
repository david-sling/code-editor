import { HorizontalSplit, Menu, Save, VerticalSplit } from "@material-ui/icons";
import React, { useContext } from "react";
import { DisplayVerticalContext } from "../context/displayVertical";
import { PaneOpenContext } from "../context/paneOpen";

export default function NavBar() {
  const { togglePaneOpen } = useContext(PaneOpenContext);
  const { displayVertical, toggleDisplayVertical } = useContext(
    DisplayVerticalContext
  );
  return (
    <header className="NavBar">
      <div className="left">
        <Menu onClick={togglePaneOpen} />
      </div>
      <div className="middle">
        <h1>CODE EDITOR</h1>
      </div>
      <div className="right">
        <Save />
        {!displayVertical ? (
          <VerticalSplit onClick={toggleDisplayVertical} />
        ) : (
          <HorizontalSplit onClick={toggleDisplayVertical} />
        )}
      </div>
    </header>
  );
}
