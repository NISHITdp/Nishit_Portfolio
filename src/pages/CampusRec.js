import React from "react";
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";
import CampusRecImage from "../assets/campusrec.jpg";   // ← make sure this file exists
import "./ExperiencePage.css";

const CampusRec = () => {
  return (
    <>
      <Navbar />

      {/* ---------- MAIN TWO-COLUMN LAYOUT ---------- */}
      <div className="experienceSplitPage">
        {/* LEFT COLUMN – text */}
        <div className="experienceLeft">
          <h1>Campus Recreation – Facility Assistant</h1>

          <p className="experienceIntro">
            As a Facility Assistant at UIUC&rsquo;s Campus Recreation I ensured
            smooth, safe day-to-day operations across both ARC and CRCE.
          </p>

          <ul className="experienceList">
            <li>
              Delivered front-line customer service to 100 + patrons per shift, resolving
              questions, equipment issues, and policy disputes with empathy and speed.
            </li>
            <li>
              Operated turnstile ID-check system, verifying member credentials and
              troubleshooting access problems to maintain security and traffic flow.
            </li>
            <li>
              Monitored activity, safety, and equipment condition across both ARC and
              CRCE, proactively addressing hazards and coordinating with maintenance.
            </li>
            <li>
              Communicated real-time facility updates via radio, collaborating with senior
              staff during peak hours and special events.
            </li>
            <li>
              Interviewed for the senior <strong>Customer Service Assistant (CSA)</strong>
              role after consistently positive performance evaluations and peer feedback.
            </li>
            <li>
              Logged incidents and daily usage metrics in Fusion software, providing
              actionable insights to supervisors for staffing and equipment planning.
            </li>
          </ul>

          <p className="experienceReflection">
            <em>
              This position honed my communication, conflict-resolution, and
              situational-awareness skills. Balancing security checks with a welcoming
              patron experience—and rotating between two high-traffic facilities—made me
              more adaptable, detail-oriented, and confident leading operations in dynamic
              environments.
            </em>
          </p>

          <a href="/" className="backBtn">
            ← Back to Home
          </a>
        </div>

        {/* RIGHT COLUMN – image */}
        <div className="experienceRight">
          <img
            src={CampusRecImage}
            alt="Campus Recreation facility"
            className="experienceImageRight"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CampusRec;
