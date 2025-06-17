import React from "react";
import './intro.css'
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
// import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Nishit Mistry</span><br/>R&D Data Science Intern @Shewin-Williams | MSIM Graduate @ UIUC | <br/> Ex Salesforce Developer @LTFS</span>
                <p className="introPara">I’m skilled in building scalable data systems that blend analytics, engineering, and automation. <br/> My work spans NLP techniques for text analysis, dashboard creation with Power BI and Tableau,<br/> and end-to-end data pipelines using SQL, Airflow, and cloud platforms. <br/>I enjoy solving real-world problems through structured data modeling, machine learning,<br/> and backend integrations, and I bring experience across both technical research and <br/>business-facing analytics.</p>
                {/* <Link><button className="btn"><img src={btnImg} alt="" className="btnImg"/>Hire Me</button></Link> */}
                <a href="https://drive.google.com/file/d/1xj-nltY28xIqDHVrP-YhCQpFugKq8anl/view?usp=drive_link" target="blank" rel="noreferrer">
                    <button className="btn"><img src={btnImg} alt="" className="btnImg"/>Download Resume</button>
                </a>
                <img src={bg} alt="Profile" className="bg" />
            </div>
        </section>
    )
}

export default Intro