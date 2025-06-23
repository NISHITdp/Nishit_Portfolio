import React, {useRef} from "react";
import './contact.css';
import LinkedIn from '../../assets/linkedin-icon.png';
import GitHub from '../../assets/github-icon.png';
import Instagram from '../../assets/instagram-icon.png';
import emailjs from '@emailjs/browser';
import { FaGraduationCap, FaBrain } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {publicKey: 'YOUR_PUBLIC_KEY',})
        .then(() => {
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    };
    return(
        <section id="contactPage">
            <div id="projects">
                <h2 className="contactPageTitle">My <span style={{ color: "#CBA135" }}>Projects</span></h2>
                <p className="projectDesc">A collection of academic and self-initiated projects reflecting my technical expertise in data engineering, data science, and analysis.</p>
                <div className="projectCards">
                    <div className="projectCard">
                        <FaGraduationCap size={40} color="#CBA135" />
                        <h3 className="projectCardTitle">Coursework Projects</h3>
                        <p className="projectCardDesc">Built as part of MSIM curriculum using real-world datasets to explore predictive modeling, NLP, dashboards, and data engineering concepts.</p>
                        <button className="projectBtn" onClick={() => window.location.href='/course-projects'}>See Projects</button>
                    </div>
                    <div className="projectCard">
                        <FaBrain size={40} color="#CBA135" />
                        <h3 className="projectCardTitle">Upskilling Projects</h3>
                        <p className="projectCardDesc">Self-driven projects focused on mastering tools like scikit-learn, NLP, SQL, and visualization through hands-on experimentation and Kaggle-style tasks.</p>
                        <button className="projectBtn">See Projects</button>
                    </div>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please feel free to drop me an email with any potential opportunities!</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea name="message" rows="5" placeholder="Your Message" className="msg"></textarea>
                    <button className="submitBtn" type="submit" value="Send">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/nishit-mistry-b801041a1/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://github.com/NISHITdp" target="_blank" rel="noopener noreferrer">
                            <img src={GitHub} alt="GitHub" className="link" />
                        </a>
                        <a href="https://www.instagram.com/nishit.mistry7/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;