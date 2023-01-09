import React, { useState, useEffect } from "react";
import "./topnavbar.css";

const TopNavbar = ({ inView }) => {
  const [isactiveNav, setActiveNav] = useState("#");

  useEffect(() => {
    setActiveNav(inView);
  }, [inView]);

  const [showNav, setShowNav] = useState(() => null);

  useEffect(() => {
    let lastScrollPosition = 0;
    setShowNav(true);
    document.addEventListener(
      "scroll",
      function (e) {
        if (window.scrollY > lastScrollPosition) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        lastScrollPosition = window.scrollY;
      },
      {
        passive: true,
      }
    );
  }, []);

  return (
    <nav
      style={{
        opacity: showNav ? 1 : 0,
        top: showNav ? 0 : "-100px",
      }}
      className="TopNavBar "
    >

      <ul className="TopNavBar-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>

        <div className="menu">
          <li>
            <a
              href={"/#"}
              onClick={() => setActiveNav("#")}
              className={isactiveNav === "#" ? "active" : ""}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href={"#about"}
              onClick={() => setActiveNav("#about")}
              className={isactiveNav === "#about" ? "active" : ""}
            >
              About
            </a>
          </li>

          <li>
            <a
              href={"#education"}
              onClick={() => setActiveNav("#education")}
              className={isactiveNav === "#education" ? "active" : ""}
            >
              Education
            </a>
          </li>

          <li>
            <a
              href={"#skills"}
              onClick={() => setActiveNav("#skills")}
              className={isactiveNav === "#skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href={"#projects"}
              onClick={() => setActiveNav("#projects")}
              className={isactiveNav === "#projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href={"#blogs"}
              onClick={() => setActiveNav("#blogs")}
              className={isactiveNav === "#blogs" ? "active" : ""}
            >
              Blogs
            </a>
          </li>

          <li>
            <a
              href={"#stats"}
              onClick={() => setActiveNav("#stats")}
              className={isactiveNav === "#stats" ? "active" : ""}
            >
              Statistics
            </a>
          </li>


          <li>
            <a
              href={"#contact"}
              onClick={() => setActiveNav("#contact")}
              className={isactiveNav === "#contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1W8rL1DGyAZzqh3TgnFc2yKUB6WubDZ6g/view?usp=sharing"
              style={{color:"#F88119"}}
            >
             Resume
            </a>
          </li>

        </div>
      </ul>
    </nav>
  );
};

export default TopNavbar;