import React from "react";
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";
import TAImage from "../assets/ta_is477.png";
import "./ExperiencePage.css";

const TeachingAssistant = () => {
  return (
    <>
      <Navbar />

      <div className="experienceSplitPage">
        {/* ---------- LEFT COLUMN ---------- */}
        <div className="experienceLeft">
          <h1>Teaching Assistant – IS 477: Data Management, Curation &amp; Reproducibility</h1>

          <p className="experienceIntro">
            Under Professor Bertram Ludäscher, I supported over 60 students in building technical and reproducible workflows in Python, SQL, OpenRefine, and Snakemake.
          </p>

          <ul className="experienceList">
            <li>Graded assignments, exams, and final projects using detailed rubrics and constructive feedback.</li>
            <li>Held TA office hours weekly to assist students with lab tasks and debug reproducibility issues.</li>
            <li>Led a full lab session on Zenodo and GitHub metadata standards using Snakemake workflows.</li>
            <li>Supported students during lab implementations and clarified reproducibility challenges.</li>
            <li>Guided teams on their final research/data projects, ensuring sound documentation and FAIR principles.</li>
          </ul>

          <p className="experienceReflection">
            <em>
              This role significantly deepened my technical foundation in research data practices while giving me my first structured teaching experience. It honed my clarity in explanation, empathy in mentoring, and confidence in leading technical walkthroughs.
            </em>
          </p>

          <a
            href="https://mediaspace.illinois.edu/media/t/1_3li1orvg"
            target="_blank"
            rel="noopener noreferrer"
            className="backBtn"
            style={{ marginTop: "1.5rem" }}
          >
            ▶ Watch Lab Session Recording
          </a>

          <a href="/" className="backBtn" style={{ marginTop: "1rem" }}>
            ← Back to Home
          </a>
        </div>

        {/* ---------- RIGHT COLUMN ---------- */}
        <div className="experienceRight">
          <img
            src={TAImage}
            alt="TA Lab Session GitHub Snakemake"
            className="experienceImageRight"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TeachingAssistant;
