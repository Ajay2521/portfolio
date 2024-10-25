import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { LuCalendarCheck2 } from "react-icons/lu";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button  qualification__active  button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <MdOutlineWorkHistory className="qualification__icon" />
            Experience
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button  qualification__active  button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <HiOutlineAcademicCap className="qualification__icon" />
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content  qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  Funding Societies | Modalku
                </span>
                <div className="qualification__calendar">
                  <LuCalendarCheck2 className="qualification__calendar-icon" />
                  2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Software Engineer Intern
                </h3>
                <span className="qualification__subtitle">
                  Funding Societies | Modalku
                </span>
                <div className="qualification__calendar">
                  <LuCalendarCheck2 className="qualification__calendar-icon" />
                  Jan 2022 - Jul 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Summer Intern</h3>
                <span className="qualification__subtitle">Zoho Corp</span>
                <div className="qualification__calendar">
                  <LuCalendarCheck2 className="qualification__calendar-icon" />
                  May 2021 - Jun 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content  qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor Of Information Technology
                </h3>
                <span className="qualification__subtitle">
                  Coimbatore Institute of Technology
                </span>
                <div className="qualification__calendar">
                  <LuCalendarCheck2 className="qualification__calendar-icon" />
                  2018 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Higher Secondary Education
                </h3>
                <span className="qualification__subtitle">
                  St. Joseph's Matriculation Higher Secondary School
                </span>
                <div className="qualification__calendar">
                  <LuCalendarCheck2 className="qualification__calendar-icon" />
                  2017 - 2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
