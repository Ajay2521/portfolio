import React from "react";
import { GrInstagram, GrGithub, GrLinkedin } from "react-icons/gr";

const Social = () => {
  return (
    <div className="home__social">
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
  );
};

export default Social;
