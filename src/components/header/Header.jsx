import React, { useState } from "react";
import "./header.css";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBadgeCheck,
  HiOutlineClipboardList,
  HiOutlinePhotograph,
  HiOutlineMail,
  HiX,
} from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  // Toggle Menu
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Aj
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <HiOutlineHome className="nav__icon" />
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <HiOutlineUser className="nav__icon" />
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <HiOutlineBadgeCheck className="nav__icon" />
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <HiOutlineClipboardList className="nav__icon" />
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <HiOutlinePhotograph className="nav__icon" />
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <HiOutlineMail className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <CgMenuGridO />
        </div>
      </nav>
    </header>
  );
};

export default Header;
