import React from "react";
import Styles from "./Navigation.module.css";

function Navigation({ Link, router }) {
  return (
    <div>
      <div className={Styles.Navigation}>
        <div className={Styles.Navigation__items}>
          {router.map((item, i) => (
            <div key={i}>
              <Link activeClass="activeTab" spy={true} smooth={true} to={item.to}>
                {item.to}
              </Link>
            </div>
          ))}
          <div className={Styles.Navigation__resume}>
            <a
              href="https://drive.google.com/file/d/1W8rL1DGyAZzqh3TgnFc2yKUB6WubDZ6g/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;


