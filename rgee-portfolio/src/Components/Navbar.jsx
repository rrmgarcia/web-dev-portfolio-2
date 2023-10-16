import React, { useState } from "react";

//css
import styles from "../Styles/Navbar.module.css";

//Assets
import darklogo from "../Assets/logo-dark.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(e);
    if (isButtonClicked === true) {
      setMenuOpen(true);
      setIsButtonClicked(false);
    } else {
      setMenuOpen(false);
      setIsButtonClicked(true);
    }
  };

  return (
    <header>
      <a href="/#">
        <img id={styles.logo} src={darklogo} placeholder="rgee-logo" />
      </a>
      <nav>
        <div className={styles.menu} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? styles.open : ""}>
          <li>
            <a href="/#about" className={styles.navcontent}>About</a>
          </li>
          <li>
            <a href="/#skills" className={styles.navcontent}>Skills</a>
          </li>
          <li>
            <a href="../Projects" className={styles.navcontent}>Projects</a>
          </li>
          <li>
            <a href="../Contact" className={styles.navcontent}>
              // Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
