import React from "react";
import { useContext } from "react";
import { CodeContext } from "../context/code";

export default function Output() {
  const { source } = useContext(CodeContext);
  return (
    <div className="Output">
      <iframe srcDoc={source} />
    </div>
  );
}
