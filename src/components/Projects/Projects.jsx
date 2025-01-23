import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

import warehousePredictor from "../../../assets/projects/warehouse-predictor.png.png";
import livestockDisease from "../../../assets/projects/livestock.png";
import makeChange from "../../../assets/projects/makechange.png";
import fitSync from "../../../assets/projects/fit.jpg"
import saveHer from "../../../assets/projects/saveher.png"
const projectsData = [
  {
    title: "Spot Perfect - Warehouse Location Predictor",
    imageSrc: warehousePredictor,
    description: "Location prediction system for warehousing in tier 2 and tier 3 cities in India",
    skills: ["Python", "Web Scraping", "G-Map API", "Data Analysis"],
    demo: "https://spotperfect.streamlit.app/",
    source: "https://github.com/ganesh-73005/blank-app/blob/main/streamlit_app.py"
  },
  {
    title: "Livestock Disease Prediction System",
    imageSrc: livestockDisease,
    description: "Computer vision project for livestock disease prediction using 5000+ images",
    skills: ["Computer Vision", "YOLO", "Image Augmentation"],
    demo: "https://github.com/DIST-AnnaUniversity/summer-intern-project-2024-heal-herd/blob/main/Demo%20Video/21.10.2024_22.19.42_REC.mp4",
    source: "https://github.com/DIST-AnnaUniversity/summer-intern-project-2024-heal-herd"
  },
  {
    title: "Fit-Sync - Comprehensive Fitness Tracking Application",
    imageSrc: fitSync,
    description:
      "Developed FitSync, an innovative fitness application designed to revolutionize personal health management. Features include secure authentication, BMI calculator, workout tracking, water intake monitoring, and social features for sharing fitness achievements.",
    skills: ["React Native", "MongoDB", "Firebase Authentication", "Java/Spark", "RESTful API"],
    demo: null,
    source: "https://github.com/Ganesh-73005/FitSync",
  },
  {
    title: "SaveHer - Women's Safety Route Predictor",
    imageSrc: saveHer,
    description:
      "Developed a safe route predictor for women's travel safety. Collected and analyzed TASMAC data across Tamil Nadu, implemented K-means Clustering and GMM for risk prediction, and integrated false SOS alert detection using temporal data.",
    skills: ["Machine Learning", "Python", "React", "Flask", "Node.js", "Figma"],
    demo: "https://github.com/Ganesh-73005/Team_MakeChange_womensafetysos/blob/main/README.md#httpsdrivegooglecomfiled11ticynkwkvhu1ccr1d0ybzntvjomxptwviewuspdrive_link",
    source: "https://github.com/Ganesh-73005/Team_MakeChange_womensafetysos",
  },
  {
    title: "Make Change - Homeless Support App",
    imageSrc: makeChange,
    description: "App to help track and support homeless individuals",
    skills: ["Database Design", "Mobile App Development"],
    demo: null,
    source: null
  }
];

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projectsData.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
