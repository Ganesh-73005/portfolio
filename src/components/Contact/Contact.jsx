import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import e from "../../../assets/contact/emailIcon.png"
import l from "../../../assets/contact/linkedinIcon.png"
import g from "../../../assets/contact/githubIcon.png"


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={e} alt="Email icon" />
          <a href="ganeshsriramulu2@gmail.com">ganeshsriramulu2@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={l}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ganesh-sriramulu-60ba63339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/ganesh-sriramulu-60ba63339</a>
        </li>
        <li className={styles.link}>
          <img src={g} alt="Github icon" />
          <a href="https://www.github.com/Ganesh-73005">github.com/Ganesh-73005</a>
        </li>
      </ul>
    </footer>
  );
};
