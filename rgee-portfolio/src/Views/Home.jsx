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
import resume from "../Assets/Ronald_Garcia_Web_Dev_Resume_ant.pdf";

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
            My career goals focus on continuous growth, sharing knowledge, and
            making a positive impact. As a former seafarer, I learned
            adaptability and discipline, which have been instrumental in my
            transition to tech. I aim to become a knowledgeable and successful
            developer, where I can lead projects and mentor others. Sharing my
            expertise with aspiring developers is important to me, as it
            benefits both them and my own growth. I have grit and a thirst for
            continuous learning. Ultimately, I want to use technology to create
            solutions that improve people's lives. By leveraging my skills and
            experience, I aspire to contribute to projects that have a
            meaningful and positive societal impact.
          </p>
          <p className={styles.aboutme}>
            When I'm not immersed in coding, you'll often find me on the
            basketball court or delving into the world of online games, striking
            a balance between the physical and digital realms.
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
