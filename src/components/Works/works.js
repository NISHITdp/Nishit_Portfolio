import React from "react";
import './works.css';
import WorkEx1 from '../../assets/WE1.png';
import WorkEx4 from '../../assets/WE4.png';
import WorkEx5 from '../../assets/WE5.png';
import WorkEx6 from '../../assets/WE6.png';
import WorkEx7 from '../../assets/WE7.png';
import WorkEx8 from '../../assets/WE8.png';
import BIG from '../../assets/BIG.jpeg';
import ischool from '../../assets/ischool.jpeg';
import gies from '../../assets/gies.png';

const Works = () => {
    return(
        <section id="works">
            <h2 className="worksTitle">My <span style={{ color: "#CBA135" }}>Experience</span></h2>
            <span className="workDesc">My experiences have been the cornerstone of my personal and professional growth — shaping the individual I am today. From learning soft skills and resilience through part-time campus jobs to gaining technical and corporate expertise through internships, research roles and full time corporate jobs, each opportunity has contributed meaningfully to my development.</span>
            <h3 className="worksSubheading">Professional Experience — Full Time • Internships • Campus</h3>
            <div className="worksCards">
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={WorkEx1} alt="Sherwin Williams" />
                    </div>
                    <span className="workTitle">R&D Data Science Intern / Co-op  <br /> <span style={{ fontSize: "1rem" }}>May 2025 - Present</span> </span>
                    <button className="workBtn" onClick={() => window.location.href = '/experience/sherwin-williams'}>See More</button>
                </div>
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={BIG} alt="BIG Consulting" />
                    </div>
                    <span className="workTitle">Project Manager at BIG<br /> <span style={{ fontSize: "1rem" }}>August 2025 - Present</span> </span>
                    <button className="workBtn">See More</button>
                </div>
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={gies} alt="UIUC RA III" />
                    </div>
                    <span className="workTitle">Graduate Research Assistant III <br /> <span style={{ fontSize: "1rem" }}>Sept 2025 - Present</span> </span>
                    <button className="workBtn">See More</button>
                </div>
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={gies} alt="UIUC RA II" />
                    </div>
                    <span className="workTitle">Graduate Research Assistant II <br /> <span style={{ fontSize: "1rem" }}>Sept 2025 - Present</span> </span>
                    <button className="workBtn">See More</button>
                </div>
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={ischool} alt="UIUC GRA" />
                    </div>
                    <span className="workTitle">Guided Research Assistant - IS 579 <br /> <span style={{ fontSize: "1rem" }}>Aug 2025 - Present</span> </span>
                    <button className="workBtn">See More</button>
                </div>
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={ischool} alt="UIUC TA" />
                    </div>
                    <span className="workTitle">Graduate Teaching Assistant <br /> <span style={{ fontSize: "1rem" }}>Jan 2025 - May 2025</span></span>
                    <button className="workBtn" onClick={() => window.location.href = '/experience/teachingassistant'}>See More</button>
                </div>
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={ischool} alt="UIUC RA I" />
                    </div>
                    <span className="workTitle">Graduate Research Assistant I<br /> <span style={{ fontSize: "1rem" }}>Jan 2025 - May 2025</span> </span>
                    <button className="workBtn" onClick={() => window.location.href = '/experience/researchassistant'}>See More</button>
                </div>
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={WorkEx4} alt="L&T" />
                    </div>
                    <span className="workTitle">Assistant Manager / Salesforce Developer<br /> <span style={{ fontSize: "1rem" }}>July 2022 - June 2024</span></span>
                    <button className="workBtn" onClick={() => window.location.href = '/experience/salesforcedeveloper'}>See More</button>
                </div>
            </div>

            <h3 className="worksSubheading">Part-Time Roles</h3>
            <div className="worksCards">
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={WorkEx5} alt="Campus Recreation" />
                    </div>
                    <span className="workTitle">Member Services, Facility Assistant<br /> <span style={{ fontSize: "1rem" }}>Dec 2024 - Present</span></span>
                    <button className="workBtn" onClick={() => window.location.href = '/experience/campusrec'}>See More</button>
                </div>
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={WorkEx6} alt="Rec Room" />
                    </div>
                    <span className="workTitle">Illini Union Rec Room Student Employee<br /> <span style={{ fontSize: "1rem" }}>Dec 2024 - Feb 2025</span></span>
                    <button className="workBtn" onClick={() => window.location.href = '/experience/recroom'}>See More</button>
                </div>
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={WorkEx7} alt="Multimedia" />
                    </div>
                    <span className="workTitle">Multimedia, Student Technician<br /> <span style={{ fontSize: "1rem" }}>Oct 2024 - Present</span></span>
                    <button className="workBtn" onClick={() => window.location.href = '/experience/multimedia'}>See More</button>
                </div>
                <div className="workCard">
                    <div className="workCardImgWrapper">
                        <img src={WorkEx8} alt="Dining" />
                    </div>
                    <span className="workTitle">UIUC Housing & Dining, Student Employee/Co-ordinator<br /> <span style={{ fontSize: "1rem" }}>Sept 2024 - Present</span></span>
                    <button className="workBtn" onClick={() => window.location.href = '/experience/dining'}>See More</button>
                </div>
            </div>
            {/* <button className="workBtn">See More</button> */}
        </section>
    )
}

export default Works