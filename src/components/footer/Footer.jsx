import React from "react";
import "./footer.css";
import { GrInstagram, GrGithub, GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ajay</h1>
        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/ajay-2521/"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin />
          </a>
          <a
            href="https://github.com/Ajay2521"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrGithub />
          </a>
          <a
            href="https://www.instagram.com/maayakavi/profilecard/"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram />
          </a>
        </div>
        <span className="footer__copy">&#169; All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
