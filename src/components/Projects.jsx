import Navbar from "./Navbar";
import ProjectSection from "./ProjectSection";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

function Projects() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Navbar />
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw"
          }}
        >
          <RingLoader color="#fff" size={100} />
        </div>
      ) : (
        <div>
          <ProjectSection />
        </div>
      )}
    </div>
  );
}

export default Projects;
