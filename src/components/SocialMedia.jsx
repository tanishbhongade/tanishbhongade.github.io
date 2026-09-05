import styles from "./SocialMedia.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className={styles.socialIcons}>
      <a
        href="https://github.com/tanishbhongade"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/tanishbhongade"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default SocialMedia;
