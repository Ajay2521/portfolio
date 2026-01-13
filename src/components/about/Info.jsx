import React from "react";
import "./about.css";
import { FaLaptopCode } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { BiSupport } from "react-icons/bi";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <FaLaptopCode className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">4+ Years</span>
      </div>

      <div className="about__box">
        <GoTasklist className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">46+ Projects</span>
      </div>

      <div className="about__box">
        <BiSupport className="about__icon" />
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
