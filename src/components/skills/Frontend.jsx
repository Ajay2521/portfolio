import React from "react";
import { LuBadgeCheck } from "react-icons/lu";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-End Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
