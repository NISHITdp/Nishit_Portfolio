import React from "react";
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";
import IkenberryImage from "../assets/ikenberry.png";   // ⬅️ save one of the carousel shots as this file
import "./ExperiencePage.css";

const Dining = () => {
  return (
    <>
      <Navbar />

      <div className="experienceSplitPage">
        {/* ---------- LEFT ---------- */}
        <div className="experienceLeft">
          <h1>Ikenberry Dining – Food Service & Student Coordinator</h1>

          <p className="experienceIntro">
            I began as a front-line food-service worker ensuring on-time meal
            delivery and quickly advanced to Student Coordinator, supervising
            peers and maintaining the hall’s guest experience.
          </p>

          <ul className="experienceList">
            <li>
              Served breakfast, lunch, and dinner to 1,000 + students per shift,
              keeping lines moving and portions consistent.
            </li>
            <li>
              Addressed dietary questions, special-request plates, and
              last-minute replenishment to minimize wait times.
            </li>
            <li>
              Promoted to <strong>Student Coordinator</strong>; scheduled and
              guided 15 student workers, delegated station duties, and balanced
              closing cash/meal-card reports.
            </li>
            <li>
              Investigated and resolved customer complaints—including food
              temperature, allergen concerns, and seating issues—while logging
              feedback for management.
            </li>
            <li>
              Ensured strict hygiene and safety: monitored temps, rotated stock,
              and led nightly deep-clean of serving equipment and prep areas.
            </li>
          </ul>

          <p className="experienceReflection">
            <em>
              Managing a high-volume dining hall sharpened my leadership,
              multitasking, and conflict-resolution skills. Coordinating
              staffing and responding to guest concerns under tight meal
              windows taught me poise, accountability, and a customer-centric
              mindset that translates directly to team-oriented professional
              environments.
            </em>
          </p>

          <a href="/" className="backBtn">← Back to Home</a>
        </div>

        {/* ---------- RIGHT ---------- */}
        <div className="experienceRight">
          <img
            src={IkenberryImage}
            alt="Ikenberry Dining Center"
            className="experienceImageRight"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dining;
