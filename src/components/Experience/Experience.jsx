import React from "react"
import styles from "./Experience.module.css"

import pythonIcon from "../../../assets/skills/python.png"
import reactIcon from "../../../assets/skills/react.png"
import flaskIcon from "../../../assets/skills/f1.png"
import postgresqlIcon from "../../../assets/skills/postgresql.png"
import mysqlIcon from "../../../assets/skills/mysql1.png"
import htmlIcon from "../../../assets/skills/html.png"
import cssIcon from "../../../assets/skills/css.png"

import thozanLogo from "../../../assets/history/thozan.jpeg"
import yrcLogo from "../../../assets/history/YRC.png"

const skillsData = [
  { title: "Python", imageSrc: pythonIcon },
  { title: "React", imageSrc: reactIcon },
  { title: "Flask", imageSrc: flaskIcon },
  { title: "PostgreSQL", imageSrc: postgresqlIcon },
  { title: "MySQL", imageSrc: mysqlIcon },
  { title: "HTML", imageSrc: htmlIcon },
  { title: "CSS", imageSrc: cssIcon },
]

const historyData = [
  {
    role: "Project Lead - Make Change App",
    organisation: "Thozan Organization",
    startDate: "SEP 2024",
    endDate: "Present",
    experiences: [
      "Developed database for NGOs to track homeless individuals",
      "Designed app for public submission of homeless location data",
    ],
    imageSrc: thozanLogo,
  },
  {
    role: "Head of Design",
    organisation: "Youth Red Cross, Anna University",
    startDate: "Nov 2022",
    endDate: "Present",
    experiences: ["Designed posters, logos, and certificates", "Orchestrated 2+ camps and 10+ awareness programs"],
    imageSrc: yrcLogo,
  },
]

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skillsData.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc || "/placeholder.svg"} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>
        <ul className={styles.history}>
          {historyData.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img src={historyItem.imageSrc || "/placeholder.svg"} alt={`${historyItem.organisation} Logo`} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>
                    })}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

