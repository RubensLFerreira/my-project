import { FaFreeCodeCamp } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <ul className={styles.social_list}>
        <li><FaFreeCodeCamp /></li>
        <li><FaRedditAlien /></li>
        <li><FaCode /></li>
      </ul>
    </footer>
  );
}

export default Footer;
