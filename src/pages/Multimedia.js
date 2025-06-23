import React from "react";
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";
import MultimediaImage from "../assets/multimedia.png";  // 📌 Replace with your actual image
import "./ExperiencePage.css";

const Multimedia = () => {
  return (
    <>
      <Navbar />

      <div className="experienceSplitPage">
        {/* ---------- LEFT COLUMN ---------- */}
        <div className="experienceLeft">
          <h1>Illini Union Multimedia – Student Technician</h1>

          <p className="experienceIntro">
            At Illini Union Multimedia, I supported the execution of events and conferences by providing timely technical setup and responsive client support across campus.
          </p>

          <ul className="experienceList">
            <li>
              Executed full event setup and teardown, including AV equipment, microphones, projectors, and lighting systems across indoor and outdoor venues.
            </li>
            <li>
              Provided direct on-site technical assistance during events—addressing issues like audio feedback, connectivity problems, and display calibration.
            </li>
            <li>
              Coordinated with clients to fulfill last-minute change requests and custom setups, often under time constraints.
            </li>
            <li>
              Managed bookings and logistics for recurring university events, helping streamline prep time for returning clients.
            </li>
            <li>
              Delivered professional, friendly customer service to faculty, staff, student groups, and external organizations hosting events.
            </li>
          </ul>

          <p className="experienceReflection">
            <em>
              This role enhanced my client-facing communication, crisis-handling, and technical problem-solving abilities. Whether juggling multiple AV issues mid-event or adapting to client requests in real-time, I developed flexibility, calmness under pressure, and a deeper understanding of teamwork in dynamic environments.
            </em>
          </p>

          <a href="/" className="backBtn">← Back to Home</a>
        </div>

        {/* ---------- RIGHT COLUMN ---------- */}
        <div className="experienceRight">
          <img
            src={MultimediaImage}
            alt="Illini Union Multimedia Technician"
            className="experienceImageRight"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Multimedia;
