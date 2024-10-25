import React from "react";
import "./portfolio.css";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItem = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img src={item.img} alt={item.title} className="project__img" />
      <h3 className="project__title">{item.title}</h3>
      <a href={item.link} className="project__button">
        GitHub <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
    </div>
  );
};

export default ProjectItem;
