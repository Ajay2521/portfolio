import React, { useEffect } from "react";
import "./scrolltotop.css";
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollToTop");
      if (window.scrollY >= 500) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  return (
    <a href="#" className="scrollToTop">
      <HiOutlineArrowSmUp className="scroll__icon" />
    </a>
  );
};

export default ScrollToTop;
