import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
           <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              
              <p>
              I'm a pre-final-year NITH student seeking a B.Tech in computer science. My main area of interest is frontend development, where I concentrate on designing user interfaces that are simple to use and compelling. I'm passionate about creating web applications that are both visually appealing and responsive, and I have practical experience with HTML, CSS, JavaScript, and React.js.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};