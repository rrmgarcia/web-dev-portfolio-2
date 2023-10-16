import gitlab from "../Assets/gitlab.png";
import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png";
import styles from "../Styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
        <div className={styles.creditscontainer}>
          <p>Credits:</p>
          <p>
            Icons from: <span>https://icon-icons.com</span>
          </p>
        </div>
        <div className={styles.creditscontainer}>
          <p>Ronald Raven Garcia</p>
          <p>© 2023</p>
        </div>
        <div className={styles.socialmediaicons}>
          <a
            href="https://www.linkedin.com/in/ronald-raven-garcia-b8477716a/"
            target="_blank"
          >
            <img src={linkedin} />
          </a>
          <a href="https://github.com/rrmgarcia" target="_blank">
            <img src={github} />
          </a>
          <a href="https://gitlab.com/rrmgarcia" target="_blank">
            <img src={gitlab} />
          </a>
        </div>
    </div>
  );
};

export default Footer;
