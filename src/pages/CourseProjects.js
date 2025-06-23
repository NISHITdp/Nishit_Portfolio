import React from 'react';
import Navbar from '../components/NavBar/navbar';
import './CourseProjects.css';
import { FaLeaf, FaGraduationCap, FaTools } from "react-icons/fa";

const CourseProjects = () => {
  return (
    <>
      <Navbar />
      <div className="courseProjectsContainer">
        <h1 className="courseProjectsTitle"><FaLeaf style={{ color: "#CBA135", marginRight: "10px" }} />Spring 2025 Semester</h1>

        <div className="courseProject">
          <h2 className="projectCourseName"><FaGraduationCap style={{ color: "#CBA135", marginRight: "8px" }} />IS 534: Information Consulting</h2>
          <h3 className="projectTitle">Project Title: AI-Driven E-Waste Management Strategy for Johnson & Johnson (J&J)</h3>

          <p className="projectOverview">
            As the <strong>Project Manager</strong>, I led a semester-long consulting initiative for Johnson & Johnson’s MedTech division, where our objective was to design a scalable and impactful AI-powered solution for e-waste management of digital health and medical devices. The project was structured to mimic a real-world consulting engagement — from scoping and stakeholder alignment to research, strategic design, and presentation delivery.
          </p>

          <p className="projectOverview">
            Our client challenge was rooted in inefficient, largely manual recycling and refurbishment processes for devices such as surgical tools, diagnostics, and wearables. To address this, we performed in-depth <strong>technical feasibility analysis</strong>, <strong>industry benchmarking</strong>, and <strong>sustainability mapping</strong> to craft an innovation roadmap aligned with J&J’s Health for Humanity 2025 ESG goals.
          </p>

          <ul className="projectHighlights">
            <li><strong>Problem Framing & Scoping:</strong> Collaborated with stakeholders to define core problem areas using an issue tree framework—highlighting inefficiencies such as poor sorting accuracy, low recovery rates, and lack of AI integration.</li>
            <li><strong>AI Solution Identification & Analysis:</strong></li>
            <ul>
              <li><strong>Computer Vision-Based Sorting:</strong> Proposed ML-driven optical systems to boost sorting accuracy from ~65% to 90–95%.</li>
              <li><strong>Predictive Maintenance Models:</strong> Designed models using real-time sensor data to reduce unplanned downtime by 40–60%.</li>
              <li><strong>Robotic Smart Disassembly Systems:</strong> Recommended robotic automation for safe dismantling and recovery of components like lithium batteries and sensors.</li>
            </ul>
            <li><strong>Competitor & Market Benchmarking:</strong> Assessed strategies from Medtronic, Philips, and Apple to shape differentiated and innovative recommendations tailored to J&J.</li>
            <li><strong>Roadmap & Business Case Development:</strong> Created a phased 12-month roadmap with cost-benefit analysis and ESG/regulatory justification for investments.</li>
            <li><strong>Final Deliverables:</strong> Delivered a polished stakeholder presentation, project scope document, stakeholder map, and competitor decks.</li>
          </ul>

          <p className="skillsUsed">
            <strong><FaTools style={{ color: "#CBA135", marginRight: "8px" }} />Skills & Tools Used</strong><br/>
            ✔️ Project Management & Team Leadership<br/>
            ✔️ AI Research & Technical Feasibility Mapping<br/>
            ✔️ Sustainability Strategy (ESG Compliance)<br/>
            ✔️ Industry & Competitive Benchmarking<br/>
            ✔️ Client Communication & Stakeholder Management<br/>
            ✔️ Presentation Design & Business Storytelling<br/>
            ✔️ <strong>Tools:</strong> Microsoft PowerPoint, Miro, Google Slides, Research Databases
          </p>

          <a
            href="https://github.com/NISHITdp/IC534-EWaste-AI-JnJ"
            target="_blank"
            rel="noopener noreferrer"
            className="viewMaterialsBtn"
          >
            See Project Materials
          </a>
        </div>

        {/* IS 517 */}
        <div className="courseProject">
          <h2 className="projectCourseName"><FaGraduationCap style={{ color: "#CBA135", marginRight: "8px" }} />IS 517: Methods of Data Science</h2>
          <h3 className="projectTitle">Project Title: Predicting Cab Ride Prices Using Machine Learning</h3>

          <p className="projectOverview">
            In this semester-long project, we engineered a full <strong>ML workflow</strong> to predict taxi fares using a <strong>synthetic dataset</strong> modeled on real-world ride-hailing conditions. Our goal was to develop a pricing prediction system that could simulate how Uber/Lyft determine fares—while enhancing transparency and planning for both users and platforms.
          </p>

          <p className="projectOverview">
            We generated a dataset of 10,000 rides using Python, incorporating <strong>time of day, weather, traffic, surge pricing, and cab type</strong>. Our pricing logic embedded real-world assumptions like base fares, distance cost, and surge multipliers. We then built a complete ML pipeline with advanced regressors such as <strong>XGBoost and Random Forest</strong>, achieving over <strong>99% R²</strong> on test data.
          </p>

          <ul className="projectHighlights">
            <li><strong>Realistic Data Simulation:</strong> Created ride records with variability in surge, traffic, and cab type.</li>
            <li><strong>Advanced Pricing Logic:</strong> Combined base fare, distance, weather, and traffic penalty with surge multipliers.</li>
            <li><strong>EDA:</strong> Found strong correlation between Distance (r = 0.70), Surge Multiplier (r = 0.60), and Fare.</li>
            <li><strong>Modeling:</strong> Compared Linear Regression, Random Forest, and XGBoost; final model RMSE = 2.78, R² = 0.991.</li>
            <li><strong>Error Analysis & Scope:</strong> Evaluated errors, identified limitations, proposed future improvements like time-series support.</li>
          </ul>

          <p className="skillsUsed">
            <strong><FaTools style={{ color: "#CBA135", marginRight: "8px" }} />Skills & Tools Used</strong><br />
            ✔️ Data Generation using Python<br />
            ✔️ Feature Engineering & Preprocessing<br />
            ✔️ Regression Modeling with scikit-learn & XGBoost<br />
            ✔️ Data Visualization (matplotlib, seaborn)<br />
            ✔️ Model Evaluation & Optimization<br />
            ✔️ <strong>Tools:</strong> Jupyter Notebook, pandas, NumPy, scikit-learn, xgboost
          </p>

          <a
            href="https://github.com/NISHITdp/IS517-CabFarePrediction"
            target="_blank"
            rel="noopener noreferrer"
            className="viewMaterialsBtn"
          >
            See Project Materials
          </a>
        </div>

        {/* IS 455 */}
        <div className="courseProject">
          <h2 className="projectCourseName"><FaGraduationCap style={{ color: "#CBA135", marginRight: "8px" }} />IS 455: Database Design and Prototyping</h2>
          <h3 className="projectTitle">Project Title: ARTiFy — A Digital Art Marketplace Database Design</h3>

          <p className="projectOverview">
            In this course project, we designed a robust relational database for <strong>ARTiFy</strong>, a digital art platform connecting artists and buyers. The database supported functionality for artwork listings, purchases, reviews, NFT tracking, and artist-customer engagement. The implementation emphasized <strong>normalization, schema design, SQL querying, and data population</strong>.
          </p>

          <p className="projectOverview">
            We finalized the system with a full ER model, relational schema, and data workflows including JSON files for NoSQL flexibility. We scripted schema generation, test data insertion, and executed analytical queries to simulate real-world admin and customer use cases.
          </p>

          <ul className="projectHighlights">
            <li><strong>Conceptual & Logical Design:</strong> ERD modeling with entities for Artists, Customers, Artworks, and Purchases. Included inheritance for NFT vs Physical artworks.</li>
            <li><strong>Schema & SQL Implementation:</strong> Defined normalized tables using primary/foreign keys, built with MySQL scripts.</li>
            <li><strong>SQL Scripts:</strong> Separated scripts for schema (`Generation.sql`), data (`Populate.sql`), and queries (`Queries.sql`).</li>
            <li><strong>JSON Dataset Creation:</strong> Compiled `.json` files for Artists, Artworks, and Customers supporting future NoSQL integrations.</li>
            <li><strong>Use-Case Coverage:</strong> Simulated admin operations like tracking purchases, top artists, and updating listings.</li>
          </ul>

          <p className="skillsUsed">
            <strong><FaTools style={{ color: "#CBA135", marginRight: "8px" }} />Skills & Tools Used</strong><br />
            ✔️ Database Normalization (1NF–3NF)<br />
            ✔️ ER Diagram & Relationship Modeling<br />
            ✔️ Relational Schema Design & SQL (DDL/DML)<br />
            ✔️ Data Population via SQL and JSON<br />
            ✔️ Complex SQL Queries for Business Insights<br />
            ✔️ <strong>Tools:</strong> MySQL, ERDPlus, VS Code, Notepad++, GitHub
          </p>

          <a
            href="https://github.com/NISHITdp/IS455-ARTiFy-Database"
            target="_blank"
            rel="noopener noreferrer"
            className="viewMaterialsBtn"
          >
            See Project Materials
          </a>
        </div>

        <h1 className="courseProjectsTitle">🍁 Fall 2024 Semester</h1>

        {/* IS 525 */}
        <div className="courseProject">
          <h2 className="projectCourseName"><FaGraduationCap style={{ color: "#CBA135", marginRight: "8px" }} />IS 525: Data Warehousing and Business Intelligence</h2>
          <h3 className="projectTitle">Project Title: TransactIQ — Credit Card Customer Segmentation & Revenue Insights</h3>

          <p className="projectOverview">
            In this end-to-end BI project, we developed <strong>TransactIQ</strong>, a credit card analytics platform to assist executives in monitoring customer trends, spend behavior, and revenue contributions across 14,000+ users. We designed a centralized star schema data warehouse and implemented a dashboard in Power BI.
          </p>

          <p className="projectOverview">
            Data pipelines were created using <strong>SQL transformations</strong> and integrated into a <strong>multi-table model</strong> with fact and dimension tables. Our report enabled executives to answer key questions like which customers were most valuable, segmented usage by age and gender, and factors influencing profitability.
          </p>

          <ul className="projectHighlights">
            <li><strong>Data Modeling:</strong> Designed fact and dimension tables to create a fully connected star schema covering transactions, customers, demographics, and card details.</li>
            <li><strong>Data Transformation:</strong> Used SQL joins, filters, and aggregations to generate clean datasets from raw CSVs.</li>
            <li><strong>Power BI Dashboarding:</strong> Built executive-level visuals—heatmaps, KPIs, donut charts, slicers—to filter and drill down across customer segments.</li>
            <li><strong>Insights:</strong> Identified top contributors to revenue, inactive users, and behavior-based clusters (e.g., frequent travelers, luxury spenders).</li>
            <li><strong>Presentation:</strong> Delivered report walkthrough and insights video with stakeholder-ready dashboard views.</li>
          </ul>

          <p className="skillsUsed">
            <strong><FaTools style={{ color: "#CBA135", marginRight: "8px" }} />Skills & Tools Used</strong><br />
            ✔️ Dimensional Data Modeling (Star Schema)<br />
            ✔️ SQL Joins, Filtering, Aggregation<br />
            ✔️ Dashboard Design & UX in Power BI<br />
            ✔️ Executive Storytelling via Metrics<br />
            ✔️ <strong>Tools:</strong> Power BI, PostgreSQL, Excel, CSV, DAX, GitHub
          </p>

          <a
            href="https://github.com/NISHITdp/IS525-TransactIQ"
            target="_blank"
            rel="noopener noreferrer"
            className="viewMaterialsBtn"
          >
            See Project Materials
          </a>
        </div>


        {/* IS 507 */}
        <div className="courseProject">
          <h2 className="projectCourseName"><FaGraduationCap style={{ color: "#CBA135", marginRight: "8px" }} />IS 507: Data, Statistical Models and Information</h2>
          <h3 className="projectTitle">Project Title: Youth Access to E-Cigarettes — Legislation & Trends Analysis</h3>

          <p className="projectOverview">
            Our team conducted a policy-focused data science project aimed at analyzing and forecasting trends in youth e-cigarette legislation across U.S. states. Using <strong>panel data from the CDC’s STATE System (1995–2024)</strong>, we studied how legislation stringency evolved and which regions were likely to face enforcement challenges or low compliance.
          </p>

          <p className="projectOverview">
            The project addressed two key research questions: (1) How does e-cigarette policy stringency change over time across different states? and (2) Which areas are at higher risk of policy violation or low enforcement compliance? We applied <strong>panel regression models, ARIMA forecasting, and classification algorithms</strong> like logistic regression and random forest to derive actionable public health insights.
          </p>

          <ul className="projectHighlights">
            <li><strong>Data Engineering:</strong> Cleaned and structured multi-decade CDC dataset; mapped variables like ProvisionValue, Enacted_Date, and GeoLocation.</li>
            <li><strong>Policy Stringency Modeling:</strong> Created a custom stringency score using weighted attributes of legal provisions; applied Generalized Least Squares (GLS) for panel data and ARIMA for time-series trend prediction.</li>
            <li><strong>Compliance Risk Prediction:</strong> Built classifiers to estimate the probability of low compliance or high violation using demographic and legislative features.</li>
            <li><strong>Modeling Justification:</strong> Chose GLS for fixed effects handling, ARIMA for forecasting, and Random Forest for capturing nonlinear patterns in risk modeling.</li>
            <li><strong>Presentation & Communication:</strong> Compiled insights into an actionable proposal for public health policymakers, highlighting high-risk areas and future legislation trends.</li>
          </ul>

          <p className="skillsUsed">
            <strong><FaTools style={{ color: "#CBA135", marginRight: "8px" }} />Skills & Tools Used</strong><br />
            ✔️ Panel Data Regression (GLS)<br />
            ✔️ Time Series Forecasting (ARIMA)<br />
            ✔️ Classification Modeling (Logistic Regression, Random Forest)<br />
            ✔️ Feature Engineering & Scoring Models<br />
            ✔️ <strong>Tools:</strong> Python, pandas, statsmodels, scikit-learn, matplotlib
          </p>

          <a
            href="https://github.com/NISHITdp/IS507-EcigarettePolicyTrends"
            target="_blank"
            rel="noopener noreferrer"
            className="viewMaterialsBtn"
          >
            See Project Materials
          </a>
        </div>


        {/* IS 504 */}
        <div className="courseProject">
          <h2 className="projectCourseName">
            <FaGraduationCap style={{ color: "#CBA135", marginRight: "8px" }} />
            IS 504: Sociotechnical Information Systems
          </h2>
          <h3 className="projectTitle">
            Project Title: Sociotechnical Challenges in Digital Banking Interfaces
          </h3>

          <p className="projectOverview">
            This research-oriented project focused on examining <strong>sociotechnical barriers</strong> that affect user experience and inclusivity in modern digital banking platforms. Our team explored the interplay between <strong>technological infrastructure, human behavior, and institutional design</strong> through the lens of online and mobile banking interfaces offered by major U.S. banks.
          </p>

          <p className="projectOverview">
            The study analyzed issues such as <strong>accessibility barriers, algorithmic bias, poor UI/UX decisions, and lack of trust</strong> in digital channels. We interviewed users, reviewed compliance with accessibility standards (e.g., WCAG), and assessed interface designs based on established human-computer interaction (HCI) principles.
          </p>

          <ul className="projectHighlights">
            <li><strong>Multi-Platform Analysis:</strong> Evaluated mobile and desktop platforms of Chase, Bank of America, and Wells Fargo on criteria like accessibility, usability, and transparency.</li>
            <li><strong>User-Centered Research:</strong> Conducted interviews and secondary research to surface user struggles with navigation, personalization, and information overload.</li>
            <li><strong>Sociotechnical Framing:</strong> Mapped interface breakdowns to sociotechnical categories such as infrastructure (e.g., network issues), social rules (e.g., KYC protocols), and policy (e.g., data privacy laws).</li>
            <li><strong>Design Recommendations:</strong> Proposed concrete solutions including better alert systems, multilingual support, transparent data use disclosures, and inclusive UI adjustments for elderly users.</li>
            <li><strong>Final Paper:</strong> Delivered a comprehensive analysis that tied academic theory to real-world system design with policy and HCI implications.</li>
          </ul>

          <p className="skillsUsed">
            <strong><FaTools style={{ color: "#CBA135", marginRight: "8px" }} />Skills & Tools Used</strong><br />
            ✔️ Sociotechnical Systems Analysis<br />
            ✔️ Accessibility & Inclusive Design Principles<br />
            ✔️ User Interviews & Qualitative Research<br />
            ✔️ HCI Evaluation Frameworks<br />
            ✔️ Policy & Ethics in System Design<br />
            ✔️ <strong>Tools:</strong> Microsoft Word, Google Docs, NVivo (for thematic coding), PDF markup tools
          </p>

          <a
            href="https://github.com/NISHITdp/IS504-Banking-UX-Sociotechnical"
            target="_blank"
            rel="noopener noreferrer"
            className="viewMaterialsBtn"
          >
            See Project Materials
          </a>
        </div>


      </div>
    </>
  );
};

export default CourseProjects;
