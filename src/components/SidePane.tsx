import React from "react";
import files from "../config/files";
import { Icon, InlineIcon } from "@iconify/react";

export default function SidePane() {
  return (
    <div className="SidePane">
      {/* <h4>FILES</h4> */}
      <div className="files">
        {files.map((file) => (
          <File {...file} />
        ))}
      </div>
    </div>
  );
}

interface FileProps {
  name: string;
  extension: string;
  icon: any;
}

const File = ({ name, extension, icon: i }: FileProps) => {
  return (
    <div className="File">
      <Icon icon={i} style={{ fontSize: 24 }} />
      <p>
        {name}.{extension}
      </p>
    </div>
  );
};
