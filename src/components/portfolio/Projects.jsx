import React, { useState, useEffect } from "react";
import "./portfolio.css";
import { projectData, categoryData } from "./Data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectData);
    } else {
      const filteredProjects = projectData.filter((project) => {
        return project.category.toLowerCase() === item.name.toLowerCase();
      });
      setProjects(filteredProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="project__filters">
        {categoryData.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                active === index ? "active-project" : ""
              } project__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="project__container container grid">
        {projects.map((item) => {
          return <ProjectItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
