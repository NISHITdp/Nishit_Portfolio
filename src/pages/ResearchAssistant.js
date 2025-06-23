import React from 'react';
import './ExperiencePage.css';
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";
import graImage from '../assets/gra_soap_pipeline.png'; // Replace with the final image you select

const GraduateResearchAssistant = () => {
  return (
    <>
    <Navbar />
    <div className="experienceSplitPage">
      <div className="experienceLeft">
        <h1>Graduate Research Assistant — UIUC</h1>
        <p className="experienceIntro">
          At the University of Illinois Urbana-Champaign, I contributed as a Research Assistant on the SOAP.AI project under Professor Yun Huang.
        </p>
        <ul className="experienceList">
          <li>Refactored backend code and resolved over 5 critical integration issues to enable seamless AI-based behavior tracking.</li>
          <li>Optimized the performance of existing multimodal pipelines, boosting efficiency in behavioral analysis and video processing by 21%.</li>
          <li>Researched multiple LLM models and recommended the most suitable one for AI-assisted documentation tasks.</li>
          <li>Improved backend stability and addressed bottlenecks that enhanced overall application responsiveness.</li>
          <li>Collaborated weekly with the team via Slack and Zoom to set sprint goals and review progress.</li>
        </ul>
        <p className="experienceReflection">
          This experience not only deepened my technical expertise in backend debugging and model benchmarking but also enhanced my collaboration and research skills in an academic AI-focused environment.
        </p>
        {/* <a href="https://mediaspace.illinois.edu/media/t/1_3li1orvg" className="backBtn" target="_blank" rel="noopener noreferrer">View Demo on Illinois MediaSpace</a> */}
        {/* <br /> */}
        <a href="/" className="backBtn" style={{ marginTop: "1rem" }}>
            ← Back to Home
        </a>
      </div>
      <div className="experienceRight">
        <img src={graImage} alt="SOAP AI Pipeline" className="experienceImageRight" />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default GraduateResearchAssistant;
