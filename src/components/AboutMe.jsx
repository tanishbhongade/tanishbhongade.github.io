import Navbar from "./Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

import styles from "./AboutMe.module.css";

const educationData = [
  {
    date: "2023 - Present",
    title: "BTech. in Information Technology",
    institution: "Walchand College of Engineering, Sangli",
  },
  {
    date: "2021 - 2023",
    title: "HSC",
    institution: "Taywade Junior College, Koradi, Nagpur",
  },
  {
    date: "2011 - 2021",
    title: "SSC",
    institution: "Great Britain High School, Shantinagar, Nagpur",
  },
];

function AboutMe() {
  return (
    <div>
      <Navbar />
      <div>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontFamily: "Domine",
            color: "white",
          }}
        >
          My Educational Timeline
        </h2>
        <VerticalTimeline>
          {educationData.map((edu, i) => (
            <VerticalTimelineElement
              key={i}
              date={edu.date}
              dateClassName={styles.timelinedate}
              iconStyle={{ background: "#007bff", color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">{edu.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {edu.institution}
              </h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default AboutMe;
