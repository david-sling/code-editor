import React from "react";
import { useContext } from "react";
import Editor from "../components/Editor";
import NavBar from "../components/NavBar";
import Output from "../components/Output";
import SidePane from "../components/SidePane";
import { DisplayVerticalContext } from "../context/displayVertical";

export default function Edit() {
  const { displayVertical } = useContext(DisplayVerticalContext);
  return (
    <div>
      <NavBar />
      <section className="edit">
        <SidePane />
        <div
          className={
            "workspace " + (displayVertical ? "vertical" : "horizontal")
          }
        >
          <Editor />
          <Output />
        </div>
      </section>
    </div>
  );
}
