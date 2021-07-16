import { DeleteForever } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

export default function Home() {
  const [projects, setProjects] = useLocalStorage("projects", {});
  return (
    <div className="Home">
      <div className="circle c1"></div>
      <div className="circle c2"></div>
      <div className="circle c3"></div>
      <div className="top">
        <h1>CODE EDITOR</h1>
        <Link to={`/code-editor/edit/${uuid()}`}>
          <button>CREATE NEW</button>
        </Link>
      </div>
      <div className="bottom">
        {!!Object.keys(projects).filter((key) => projects[key]).length && (
          <>
            <h2>LOCAL PROJECTS</h2>
            <div className="projects">
              {Object.keys(projects)
                .filter((key) => projects[key])
                .map((id) => (
                  <Project
                    setProjects={setProjects}
                    key={id}
                    id={id}
                    title={projects[id]}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

interface ProjectProps {
  id: string;
  title: string;
  setProjects: any;
}

const Project = ({ id, title, setProjects }: ProjectProps) => {
  const [, setCode] = useLocalStorage("code-" + id);
  return (
    <div className="Project">
      <DeleteForever
        onClick={() => {
          setProjects((prev: any) => ({ ...prev, [id]: undefined }));
          setCode(undefined);
        }}
        className="delete"
      />
      <Link to={`/code-editor/edit/${id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};
