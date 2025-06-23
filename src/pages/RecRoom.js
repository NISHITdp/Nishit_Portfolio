// src/pages/RecRoom.js
import React from "react";
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";
import RecRoomImage from "../assets/recroom.jpg";    // ⬅️ place a suitable photo here
import "./ExperiencePage.css";

const RecRoom = () => {
  return (
    <>
      <Navbar />

      {/* -------- MAIN TWO-COLUMN LAYOUT -------- */}
      <div className="experienceSplitPage">
        {/* LEFT  :  content */}
        <div className="experienceLeft">
          <h1>Illini Union Rec Room – Student Employee</h1>

          <p className="experienceIntro">
            As a student employee at the Illini Union Rec Room, I balanced
            cashier duties, technical maintenance, and guest relations to keep
            the bowling and gaming facility running smoothly.
          </p>

          <ul className="experienceList">
            <li>
              Processed lane rentals, equipment fees, and snack purchases;
              reconciled the cash drawer and POS reports at close of shift.
            </li>
            <li>
              Scheduled and managed lane reservations for parties, leagues, and
              walk-ins, keeping wait times and turnover efficient.
            </li>
            <li>
              Troubleshot and repaired minor lane malfunctions, ball returns,
              and scoring kiosks—reducing downtime during peak hours.
            </li>
            <li>
              Responded to customer questions, concerns, and special requests
              with patience and a service-first attitude.
            </li>
            <li>
              Performed nightly closing: verified cash, powered down arcade
              machines, sanitized equipment, and secured the facility.
            </li>
          </ul>

          <p className="experienceReflection">
            <em>
              This role sharpened my cash-handling accuracy, technical
              troubleshooting, and multitasking abilities. Constant interaction
              with diverse patrons strengthened my communication and
              conflict-resolution skills, while coordinating bookings and
              repairs taught me to prioritize tasks under pressure.
            </em>
          </p>

          <a href="/" className="backBtn">← Back to Home</a>
        </div>

        {/* RIGHT : image */}
        <div className="experienceRight">
          <img
            src={RecRoomImage}
            alt="Illini Union Rec Room"
            className="experienceImageRight"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RecRoom;
