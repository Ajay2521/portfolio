import React, { useState, useEffect } from "react";
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
  // Change Background Header
  useEffect(() => {
    const handleHeaderBG = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("active-header");
      } else {
        header.classList.remove("active-header");
      }
    };

    window.addEventListener("active", handleHeaderBG);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("active", handleHeaderBG);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  // Toggle Menu
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Aj
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineHome className="nav__icon" />
                Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineUser className="nav__icon" />
                About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineBadgeCheck className="nav__icon" />
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineClipboardList className="nav__icon" />
                Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlinePhotograph className="nav__icon" />
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
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
