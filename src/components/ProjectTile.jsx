import { useState, useEffect } from "react";
import styles from "./ProjectTile.module.css";

function ProjectTile({ project }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={styles.tile}
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className={styles.overlay}>
        <h2 className={styles.title}>{project.name}</h2>

        {!isMobile && project.shortDescription && (
          <p className={styles.description}>{project.shortDescription}</p>
        )}

        <a href={project.link} className={styles.button}>
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectTile;
