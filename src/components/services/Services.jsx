import React, { useState } from "react";
import "./services.css";
import {
  HiOutlineArrowSmRight,
  HiOutlineCheckCircle,
  HiX,
} from "react-icons/hi";
import { BsFileEarmarkCodeFill, BsDatabaseFillGear } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <BsFileEarmarkCodeFill className="services__icon" />
            <h3 className="services__title">
              Back-End & API <br /> Development
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <HiOutlineArrowSmRight className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">Developer</h3>
              <p className="services__modal-description">
                Over 2 years of experience in Back-End API design providing
                quality work.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Build Scalable APIs in Go, Python, Node.js
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Microservices for efficient system scalability
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Robust API documentation and testing
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Prioritize readability and maintainability
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Optimize API performance and reliability
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <MdOutlineDesignServices className="services__icon" />
            <h3 className="services__title">
              System & Serverless <br /> Design Architecture
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <HiOutlineArrowSmRight className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">Design Architect</h3>
              <p className="services__modal-description">
                Over 2 years of experience in designing software system.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Automating workflows to reducing manual efforts by 75%-85%
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Design robust, scalable systems to handle heavy loads
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Utilize serverless models for cost reduction
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Refactor codebase for easier tracing and debugging
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Implement automated monitoring and alerts
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <BsDatabaseFillGear className="services__icon" />
            <h3 className="services__title">
              Database & Performance <br /> Management
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <HiOutlineArrowSmRight className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">DataBase Management</h3>
              <p className="services__modal-description">
                Over 2 years of experience in database management and ensuring
                quality outcomes.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Proficient in Postgres, MySQL, and MongoDB
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Consistently optimize database transactions
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Ensure data integrity and reliability
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Implement efficient indexing strategies
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Conduct performance tuning and monitoring
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
