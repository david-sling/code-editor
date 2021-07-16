import React, { useState, useContext } from "react";
import CodeEditor from "@monaco-editor/react";
import { CodeContext } from "../context/code";
import files from "../config/files";
import Icon from "@iconify/react";
import { useEffect } from "react";

export default function Editor() {
  const { code, setCode, current } = useContext(CodeContext);
  const i: any = files.find((f) => f.extension == current)?.icon;
  console.log(current);
  const [language, setLanguage] = useState(
    current == "js" ? "javascript" : current
  );

  useEffect(() => {
    console.log({ code: code[current], current });
    setLanguage(current == "js" ? "javascript" : current);
  }, [current]);

  useEffect(() => {
    console.log({ language });
  }, [language]);

  return (
    <div className="Editor">
      <div className="head">
        <Icon icon={i} />
        <p>index.{current}</p>
      </div>
      <CodeEditor
        height="100vh"
        theme="vs-dark"
        // defaultLanguage={defaultLanguage}
        language={language}
        onChange={(v) =>
          setCode((p: { html: string; js: string; css: string }) => ({
            ...p,
            [current]: v,
          }))
        }
        value={code[current]}
      />
    </div>
  );
}
