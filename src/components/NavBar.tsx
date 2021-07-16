import { HorizontalSplit, Menu, VerticalSplit } from "@material-ui/icons";
import React, { useContext } from "react";
import { CodeContext } from "../context/code";
import { DisplayVerticalContext } from "../context/displayVertical";
import { PaneOpenContext } from "../context/paneOpen";

export default function NavBar() {
  const { panelOpen, togglePaneOpen } = useContext(PaneOpenContext);
  const { displayVertical, toggleDisplayVertical } = useContext(
    DisplayVerticalContext
  );
  const { id, projects, setProjects } = useContext(CodeContext);
  return (
    <header className="NavBar">
      <div className="left">
        <Menu
          onClick={() => {
            if (displayVertical && !panelOpen) toggleDisplayVertical();
            togglePaneOpen();
          }}
        />
      </div>
      <div className="middle">
        <input
          onChange={({ target: { value } }) =>
            setProjects((prev: any) => ({ ...prev, [id]: value }))
          }
          value={projects[id]}
        />
      </div>
      <div className="right">
        {!displayVertical ? (
          <VerticalSplit onClick={toggleDisplayVertical} />
        ) : (
          <HorizontalSplit onClick={toggleDisplayVertical} />
        )}
      </div>
    </header>
  );
}
