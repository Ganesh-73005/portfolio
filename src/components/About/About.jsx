import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import aboutImage from "../../../assets/about/hero4.png"
import cursor from "../../../assets/about/cursorIcon.png"
import server from "../../../assets/about/serverIcon.png"
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={server} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <li>
                <p>College of Engineering Guindy, Anna University
                BTech - Information Technology </p>
              </li>
            </div>
          </li>
          <li className={styles.aboutItem}>
  <img src={cursor} alt="UI icon" />
  <div className={styles.aboutItemText}>
    <h3>Resume</h3>
    <a
      href="https://drive.google.com/file/d/1Q4E9oxqKom0YybXm0VPkSWMLwjGe_LEq/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#007BFF",
        textDecoration: "none",
        fontWeight: "bold",
        display: "inline-block",
        marginTop: "8px",
        transition: "color 0.3s ease-in-out",
      }}
      onMouseOver={(e) => {
        e.target.style.color = "#0056b3";
      }}
      onMouseOut={(e) => {
        e.target.style.color = "#007BFF";
      }}
    >
      Download
    </a>
  </div>
</li>

        </ul>
      </div>
    </section>
   
  );
};
