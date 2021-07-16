import React from "react";
import Editor from "../components/Editor";
import NavBar from "../components/NavBar";
import Output from "../components/Output";
import SidePane from "../components/SidePane";

export default function Edit() {
  return (
    <div>
      <NavBar />
      <section className="edit">
        <SidePane />
        <div className="workspace">
          <Editor />
          <Output />
        </div>
      </section>
    </div>
  );
}
