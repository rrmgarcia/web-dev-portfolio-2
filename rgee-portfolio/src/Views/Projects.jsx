import React from "react";
import coding from "../Assets/coding.png";
import gg from "../Assets/gg-js.png";
import branded from "../Assets/branded.png";
import pokedex from "../Assets/pokedex.png";
import task24 from "../Assets/task24.png";
import styles from "../Styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projectscontainer}>
      <div className={styles.projectsintro}>
        <div className={styles.typewriter}>
          <h1>
            My Recent <span>Projects</span>
          </h1>
          <p>
            &lt;p&gt; From beginner to developer! Explore my projects and see
            the exciting steps of my creative path. &lt;/p&gt;
          </p>
        </div>
        <img src={coding} />
      </div>
      <hr />
      <div className={styles.actualprojects}>
        <div
          className={styles.projectfoo}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div>
            <h1 className={styles.projecttitle}>Galaxy Guardians</h1>
            <p className={styles.projectdescription}>
              A rip-off of space invaders. Made using HTML canvas, CSS, and
              Javascript. This is my first Javascript project made.
            </p>
          </div>
          <a href="https://galaxyguardians.netlify.app/" target="_blank">
            <img className={styles.projectimgfoo} src={gg} />
          </a>
        </div>
        <hr />
        <div
          className={styles.projectbar}
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div>
            <h1 className={styles.projecttitle}>Branded</h1>
            <p className={styles.projectdescription}>
              A group project made by a team of 4. A "linktree"-like app wherein
              users can create, customize, and generate their own websites. Made
              using MERN stack.
            </p>
          </div>
          <a href="https://brandedapp.vercel.app/" target="_blank">
            <img className={styles.projectimgbar} src={branded} />
          </a>
        </div>
        <hr />
        <div
          className={styles.projectfoo}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div>
            <h1 className={styles.projecttitle}>Task24</h1>
            <p className={styles.projectdescription}>
              A simple todo app made using MERN stack. This is my first
              full-stack project.
            </p>
          </div>
          <a href="https://task24todoappbyrg.netlify.app/" target="_blank">
            <img src={task24} className={styles.projectimgfoo} />
          </a>
        </div>
        <hr />
        <div
          className={styles.projectbar}
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div>
            <h1 className={styles.projecttitle}>Simple Pokédex</h1>
            <p className={styles.projectdescription}>
              A simple Pokedex made using React.
            </p>
          </div>
          <a href="https://simplepokedexbyrg.netlify.app/" target="_blank">
            <img src={pokedex} className={styles.projectimgbar} />
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Projects;
