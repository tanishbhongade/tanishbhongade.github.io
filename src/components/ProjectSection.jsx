import styles from "./ProjectSection.module.css";
import ProjectTile from "./ProjectTile";

const projects = [
  {
    name: "Distributed CTF Management System",
    link: "https://github.com/tanishbhongade/ctf-mgmt-system",
    shortDescription: "A distributed CTF management system written in MERN",
    image: "/images/ctf-image.jpg"
  },
  {
    name: "Smart Crowd Monitoring and Choke Point Prevention System with Real-Time Density Visualization",
    link: "https://medium.com/@upanishadkachroo/smart-crowd-monitoring-and-choke-point-prevention-system-with-real-time-density-visualization-47a4e837e8b4",
    shortDescription: "A crowd monitoring system to assist authorities",
    image: "/images/crowd-image.jpg"
  },
];

function ProjectSection() {
  return (
    <div>
      {projects.map((project, i) => (
        <div key={i} className={styles.box}>
          <ProjectTile project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectSection;
