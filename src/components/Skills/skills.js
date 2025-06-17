import React from "react";
import './skills.css';
// import DataScienceLogo from '../../assets/DataScienceLogo.png';
// import DataEngineerLogo from '../../assets/DataEngineerLogo.png';
// import DataAnalystLogo from '../../assets/DataAnalystLogo.png';

import { FaBrain, FaDatabase, FaChartBar } from "react-icons/fa";


const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do / What I'm <span style={{ color: "#CBA135" }}>Skilled</span> At </span>
            <span className="skillDesc">I combine technical depth with strong business acumen across Data Science, Data Engineering, and Data Analytics. I’m skilled in building scalable data pipelines, developing machine learning models, and delivering actionable insights through dashboards and visualizations. With strengths in cross-functional collaboration, clear communication, and problem-solving, I translate complex data into strategic value for both technical and non-technical stakeholders.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <FaBrain className="skillBarImg" />
                    {/* <img src={DataScienceLogo} alt="DataScienceLogo" className="skillBarImg" /> */}
                    <div className="skillBarText">
                        <h2>Data Science</h2>
                        <p>Proficient in Python and R for building predictive models, performing EDA, and statistical analysis.
                            Experienced in NLP techniques for text classification and sentiment analysis.
                            Skilled in using Jupyter Notebook and visualization libraries like matplotlib and seaborn.
                            Comfortable with tools like Power BI and Tableau for data storytelling.
                        </p>
                        <p><strong>Tools:</strong> Python, R, Gensim, spaCy, TextBlob, NLTK, scikit-learn, pandas, NumPy, Jupyter, matplotlib, seaborn, Power BI, Tableau</p>
                        <p><strong>Techniques:</strong> Regression, Clustering, Classification, Sentiment Analysis, Text Analytics</p>
                    </div>
                </div>
                <div className="skillBar">
                    <FaDatabase className="skillBarImg" />
                    {/* <img src={DataEngineerLogo} alt="DataEngineerLogo" className="skillBarImg" /> */}
                    <div className="skillBarText">
                        <h2>Data Engineering</h2>
                        <p>Skilled in building robust data pipelines, integrating APIs, and automating workflows across distributed systems. 
                            Experienced in using Airflow for task orchestration, writing scalable SQL queries, and managing data in relational and NoSQL databases. 
                            Strong focus on backend automation and cross-system data flow.
                        </p>
                        <p><strong>Tools:</strong> Python, SQL, PostgreSQL, MySQL, MongoDB, Snowflake, Apache Airflow, REST APIs, Git, Docker</p>
                        <p><strong>Techniques:</strong> ETL Pipelines, API Integration, Workflow Automation, Data Modeling, Data Quality Checks, Cloud Sync</p>
                    </div>
                </div>
                <div className="skillBar">
                    <FaChartBar className="skillBarImg" />
                    {/* <img src={DataAnalystLogo} alt="DataAnalystLogo" className="skillBarImg" /> */}
                    <div className="skillBarText">
                        <h2>Data Analyst</h2>
                        <p>Specialized in generating business insights through data visualization, dashboard reporting, and SQL-driven analytics. 
                            Experienced in collaborating with stakeholders to define KPIs and automate reports using Power BI and Tableau. 
                            Adept at storytelling with data to support strategic decisions.
                        </p>
                        <p><strong>Tools:</strong> SQL, Python (pandas, matplotlib), Power BI, Tableau, Excel, Snowflake, Salesforce, Google Sheets</p>
                        <p><strong>Techniques:</strong> Dashboarding, KPI Analysis, Data Wrangling, Report Automation, A/B Testing, EDA, Trend Analysis</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills