import { DeleteForever } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

export default function Home() {
  const [projects, setProjects] = useLocalStorage("projects", {});
  const keys = Object.keys(projects).filter((key) => projects[key]);
  return (
    <div className="Home">
      <div className="circle c1"></div>
      <div className="circle c2"></div>
      <div className="circle c3"></div>
      <div className="top">
        <h1>CODE EDITOR</h1>
        <Link to={`/edit/${uuid()}`}>
          <button>CREATE NEW</button>
        </Link>
      </div>
      <div className="bottom">
        <h2>
          {keys.length || "NO "} LOCAL PROJECT{keys.length != 1 ? "S" : ""}
        </h2>
        {!!keys.length && (
          <>
            <div className="projects">
              {keys.map((id) => (
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
  const [, , removeCode] = useLocalStorage("code-" + id);
  return (
    <div className="Project">
      <DeleteForever
        onClick={() => {
          setProjects((prev: any) => ({ ...prev, [id]: undefined }));
          removeCode();
        }}
        className="delete"
      />
      <Link to={`/edit/${id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};
