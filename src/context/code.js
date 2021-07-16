import React, { useState, createContext, useEffect } from "react";

const defaultValues = {
  html: `<h1>WELCOME</h1>`,
  css: `h1{ text-decoration: underline; }`,
  js: `document.querySelector("h1").style.color="red"`,
};

export const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  const [code, setCode] = useState(defaultValues);
  const [current, setCurrent] = useState("html");

  const [source, setSource] = useState("");

  useEffect(() => {
    setSource(`
      <html>
        <style>${code.css}</style>
        <body>${code.html}</body>
        <script>${code.js}</script>
      </html>
      `);
  }, [code]);

  const value = { code, setCode, current, setCurrent, source, setSource };

  return <CodeContext.Provider value={value}>{children}</CodeContext.Provider>;
};
