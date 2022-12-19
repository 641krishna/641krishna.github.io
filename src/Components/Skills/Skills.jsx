import React from "react";
import Styles from "./Skills.module.css";

//icons import

import html from "../../Resources/Icons/html.svg";
import css from "../../Resources/Icons/css.svg";
import javascript from "../../Resources/Icons/javascript.svg";
import react from "../../Resources/Icons/react.svg";
import material from "../../Resources/Icons/material.svg";
import redux from "../../Resources/Icons/redux.svg";
import node from "../../Resources/Icons/node.svg";
import express from "../../Resources/Icons/express.svg";
import mongodb from "../../Resources/Icons/mongodb.svg";
import redis from "../../Resources/Icons/redis.svg";
import git from "../../Resources/Icons/git.svg";
import heroku from "../../Resources/Icons/heroku.svg";
// import mysql from "../../Resources/Icons/mysql.svg";

const frontEndIcons = [
  { icon: html, caption: "HTML" },
  { icon: css, caption: "CSS" },
  { icon: javascript, caption: "JavaScript" },
  { icon: react, caption: "React" },
  { icon: material, caption: "MaterialUI" },
  { icon: redux, caption: "Redux" },
  { icon: node, caption: "Node" },
  { icon: express, caption: "Express" },
  { icon: mongodb, caption: "MongoDB" },
  // { icon: mysql, caption: "MySQL" },
  // { icon: redis, caption: "Redis" },
  // { icon: git, caption: "Git" },
  { icon: heroku, caption: "Heroku" },
];

function Skills() {
  return (
    <div className={`${Styles.Skills} `}>
      <div className={`${Styles.ChildSkills} `}>
        <div>
          <h1 className="heading">Skills & Interest</h1>
        </div>
        <div className={Styles.Skills__icon__container}>
          {frontEndIcons?.map((item) => (
            <div className={Styles.Skill__icon} key={item.caption}>
              <div className={Styles.Img_div}>
                <img src={item.icon} alt={item.caption} />
              </div>

              <figcaption>{item.caption}</figcaption>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
