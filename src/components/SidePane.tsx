import React from "react";
import files from "../config/files";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { CodeContext } from "../context/code";
import { PaneOpenContext } from "../context/paneOpen";

export default function SidePane() {
  const { current, setCurrent } = useContext(CodeContext);
  const { panelOpen } = useContext(PaneOpenContext);
  return (
    <div className={"SidePane " + (panelOpen ? "open" : "closed")}>
      {/* <h4>FILES</h4> */}
      <div className="files">
        {files.map((file) => (
          <File
            {...file}
            onClick={() => setCurrent(file.extension)}
            highlighted={current == file.extension}
          />
        ))}
      </div>
    </div>
  );
}

interface FileProps {
  name: string;
  extension: string;
  icon: any;
  onClick?: () => any;
  highlighted: boolean;
}

const File = ({
  name,
  extension,
  icon: i,
  onClick,
  highlighted,
}: FileProps) => {
  return (
    <div className={"File " + (highlighted ? "active" : "")} onClick={onClick}>
      <Icon icon={i} style={{ fontSize: 24 }} />
      <p>
        {name}.{extension}
      </p>
    </div>
  );
};
