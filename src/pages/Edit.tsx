import React, { useEffect } from "react";
import { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import NavBar from "../components/NavBar";
import Output from "../components/Output";
import SidePane from "../components/SidePane";
import { DisplayVerticalContext } from "../context/displayVertical";
import { v4 as uuid } from "uuid";
import { CodeContext, CodeProvider } from "../context/code";

export default function Edit() {
  return (
    <CodeProvider>
      <EditPage />
    </CodeProvider>
  );
}

const EditPage = () => {
  const { displayVertical } = useContext(DisplayVerticalContext);
  const { setId, id } = useContext(CodeContext);

  return (
    <CodeProvider>
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
    </CodeProvider>
  );
};
