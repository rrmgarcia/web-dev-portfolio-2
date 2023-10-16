import React from "react";

//Assets
import avatar from "../Assets/pixil-me.png";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import react from "../Assets/react.png";
import js from "../Assets/js.png";
import node from "../Assets/node.png";
import ex from "../Assets/ex.png";
import mongo from "../Assets/mongo.png";
import download from "../Assets/download.png";
import resume from "../Assets/resume-rg.pdf";

//Styles
import styles from "../Styles/Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  return (
    <div className={styles.body}>
      <div className={styles.home}>
        <div className={styles.intro}>
          <h3 id={styles.introheading}>Hello, my name is</h3>
          <h1 className={styles.personalName}>Ronald</h1>
          <h1 className={styles.personalName} id={styles.raven}>
            Raven
          </h1>
          <h1 className={styles.personalName}>Garcia</h1>
          <h2 id={styles.subtitle}>
            Full Stack Web Developer from <span>Quezon City</span>{" "}
          </h2>
        </div>
        <img src={avatar} />
      </div>
      <div
        className={styles.about}
        id="about"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <h1 className={styles.heading}>About</h1>
        </div>
        <div>
          <p className={styles.aboutme}>
            My name is RR Garcia, a full stack developer on an exciting journey
            into the world of web development. Freshly graduated from a rigorous
            coding bootcamp, I'm eager to apply my skills and embark on a
            fulfilling career in the tech industry.
          </p>
          <p className={styles.aboutme}>
            Prior to diving into the world of coding, I navigated the seas as a
            seafarer, with a degree in marine transportation. This unique
            background has shaped my perspective, instilling discipline and
            adaptability into my professional approach.
          </p>
          <p className={styles.aboutme}>
            A passionate life-long learner, I thrive on staying at the forefront
            of technology trends. The dynamic nature of the tech world fuels my
            curiosity and drives me to continuously enhance my skills.
          </p>
          <p className={styles.aboutme}>
            Family holds a special place in my heart, and I'm a proud father of
            two, with another bundle of joy on the way. My commitment to family
            values is not just a part of my personal life but also influences my
            work ethic and professional decisions.
          </p>
          <p className={styles.aboutme}>
            When not crafting code, you'll likely find me on the basketball
            court, indulging in my love for the game. I also enjoy immersing
            myself in the virtual realm through online games, finding a perfect
            balance between the physical and digital dimensions.
          </p>
        </div>
      </div>
      <div
        className={styles.cv}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1>Explore my career story!</h1>
        <h1>
          Download my <span>CV</span> now.
        </h1>
        <a href={resume} download={resume}>
          <button>
            <img src={download} />
          </button>
        </a>
      </div>
      <h1
        className={styles.heading}
        data-aos="fade-zoom-in"
        data-aos-duration="2000"
        data-aos-anchor-placement="bottom-center"
      >
        Skills
      </h1>
      <div className={styles.skills} id="skills">
        <div
          className={styles.skillscontainer}
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="2000"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div>
            <h2>Front-end Development</h2>
          </div>
          <div className={styles.skill}>
            <img src={html} className={styles.skillsimg} />
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <img src={css} className={styles.skillsimg} />
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <img src={js} className={styles.skillsimg} />
            <p>Javascript</p>
          </div>
          <div className={styles.skill}>
            <img src={react} className={styles.skillsimg} />
            <p>Reactjs</p>
          </div>
        </div>
        <div
          className={styles.skillscontainer}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div>
            <h2>Back-end Development</h2>
          </div>
          <div className={styles.skill}>
            <img src={node} className={styles.skillsimg} />
            <p>Nodejs</p>
          </div>
          <div className={styles.skill}>
            <img src={ex} className={styles.skillsimg} />
            <p>Expressjs</p>
          </div>
        </div>
        <div
          className={styles.skillscontainer}
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="2000"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div>
            <h2>Database</h2>
          </div>
          <div className={styles.skill}>
            <img src={mongo} className={styles.skillsimg} />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
