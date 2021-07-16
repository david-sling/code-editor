import React, { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const defaultValues = {
  html: `<h1>WELCOME</h1>`,
  css: `h1:hover { text-decoration: underline; }`,
  js: `document.querySelector("h1").style.color="red"`,
};

export const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  const { id: ID = "" } = useParams();
  const [id, setId] = useState(ID);
  const [projects, setProjects] = useLocalStorage("projects", {});
  const [code, setCode, removeCode] = useLocalStorage(
    "code-" + id,
    defaultValues
  );
  const [current, setCurrent] = useState("html");

  const [source, setSource] = useState("");

  useEffect(() => {
    setProjects((prev) => ({ ...prev, [id]: prev[id] || "Untitled" }));
  }, [id]);

  useEffect(() => {
    setSource(`
      <html>
        <style>${code.css}</style>
        <body>${code.html}</body>
        <script>${code.js}</script>
      </html>
      `);
  }, [code]);

  const value = {
    code,
    setCode,
    removeCode,
    current,
    setCurrent,
    source,
    setSource,
    id,
    setId,
    projects,
    setProjects,
  };

  return <CodeContext.Provider value={value}>{children}</CodeContext.Provider>;
};
