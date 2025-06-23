import React from "react";
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";
import SFImage from "../assets/salesforce_dev.png";   // ← add any relevant photo / illustration here
import "./ExperiencePage.css";

const SalesforceDeveloper = () => {
  return (
    <>
      <Navbar />

      <div className="experienceSplitPage">
        {/* ---------- LEFT COLUMN ---------- */}
        <div className="experienceLeft">
          <h1>Assistant Manager / Salesforce Software Developer – L&T Financial Services</h1>

          <p className="experienceIntro">
            Over two years I owned multiple Salesforce flows, dashboards, and integrations for
            10,000 + customers—moving from troubleshooting legacy automations to building
            data-driven customer journeys and RESTful APIs.
          </p>

          <ul className="experienceList">
            <li>
              <strong>Technical issue resolution (first 3 months):</strong> debugged and refactored
              broken Flows/Process Builder automations, eliminating recurring errors and
              restoring <em>~99 % uptime</em>.
            </li>

            <li>
              Built & launched <strong>customer journeys</strong> (CIBIL updates, payment-status,
              delinquency reminders) using Salesforce Marketing Cloud and Automation Studio;
              journeys reached 100 k + contacts with <em>25 % higher engagement</em>.
            </li>

            <li>
              Extracted crucial records via <strong>SOQL / Salesforce Inspector</strong>, wrote
              optimized SQL in Snowflake to join marketing, loan and servicing tables, and fed
              cleaned data to Power BI dashboards for leadership.
            </li>

            <li>
              Developed <strong>RESTful APIs</strong> (Apex + OAuth) so risk, collections and
              payments teams could pull live status data—reducing manual requests by <em>25 %</em>.
            </li>

            <li>
              Automated scheduled Salesforce Reports &amp; email triggers, saving analysts
              4 hrs/day; added guardrails for edge cases to cut false alerts.
            </li>

            <li>
              Acted as <strong>JIRA owner</strong> for CRM fixes: triaged tickets, wrote Business
              Requirement Documents, and coordinated release deployments across QA → UAT → Prod.
            </li>

            <li>
              Partnered with cross-functional stakeholders (product, legal, analytics) to capture
              requirements, design scalable flows, and document impact in Confluence.
            </li>
          </ul>

          <p className="experienceReflection">
            <em>
              This role sharpened my backend Apex coding, API design, and SQL analytics skills
              while deepening my product-thinking and stakeholder-management abilities. Building
              customer journeys from scratch—and owning post-deployment support—taught me to
              balance technical rigor with real-world business outcomes.
            </em>
          </p>

          <a href="/" className="backBtn" style={{ marginTop: "1rem" }}>
            ← Back to Home
          </a>
        </div>

        {/* ---------- RIGHT COLUMN ---------- */}
        <div className="experienceRight">
          <img
            src={SFImage}
            alt="Salesforce Developer dashboard & API architecture"
            className="experienceImageRight"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SalesforceDeveloper;
