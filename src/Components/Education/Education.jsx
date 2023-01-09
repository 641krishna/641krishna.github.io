import React from "react";
import Card from "./EduCard";
import Styles from "./Education.module.css";


const projectObj = [
  {

    title: "FULL-STACK WEB DEVELOPMENT",
    time: "April 2022 | Present",
    description:
      "MASAI SCHOOL BENGALURU, KA. ",

  },
  {
    title: "BACHELOR OF ENGINEERING",
    time: "JUNE 2020 ",
    description:
      "KLE MSSCET, BELAGAVI, KA. ",
  },
  {
    title: "PUC(SCIENCE)",
    time: "APRIL 2016",
    description:
      "ALVAS P U COLLEGE, MANGALURU, KA. ",
  },
];

function Education() {
  return (

    <section id="education">



      <div className={`${Styles.Education} section`}>
        <div>
          <h1 className="heading">Education</h1>
        </div>
        <div className={Styles.Education__showcase}>
          {projectObj.map((proj) => (
            <a href={proj.github} target="_blank">
              <Card key={proj.title} {...proj} time={proj.time} />
            </a>
          ))}
        </div>
      </div>

    </section>

  );
}

export default Education;
