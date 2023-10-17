import React from "react";
import coding from "../Assets/coding.png";
import gg from "../Assets/gg-js.png";
import branded from "../Assets/branded.png";
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
          data-aos-anchor-placement="top-center"
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
          data-aos-anchor-placement="center-center"
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
          data-aos-anchor-placement="bottom-center"
        >
          <div>
            <h1 className={styles.projecttitle}>Task24</h1>
            <p className={styles.projectdescription}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              corrupti assumenda ex voluptatem harum illum.
            </p>
          </div>
          <a>
            <img className={styles.projectimgfoo} />
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
              consectetur!
            </p>
          </div>
          <a>
            <img className={styles.projectimgbar} />
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Projects;
