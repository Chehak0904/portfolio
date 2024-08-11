import React from "react";

import styles from "./Herp.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Chehak Makkar</h1>
        <p className={styles.description}>
          I'm a frontend developer with experience in creatind dynamic and responsive user interfaces. I'm skilled in technologies such as HTML,CSS,Javascript and React.js.
        </p>
        <a href="mailto:chehakmakkar@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};