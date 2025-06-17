import React, {useRef} from "react";
import './contact.css';
import LinkedIn from '../../assets/linkedin-icon.png';
import GitHub from '../../assets/github-icon.png';
import Instagram from '../../assets/instagram-icon.png';
import emailjs from '@emailjs/browser';

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
                <h1 className="contactPageTitle">My Projects</h1>
                <p className="projectDesc">esafdsgfdhgn dwafesgrdhgnfdsafdsgfdhgn fagsfhdgndsafdgsfh fdgsfhdgnfagdsfhd</p>
                <div className="projectImgs">
                    <img src="" alt="" className="projectImg" />
                    <img src="" alt="" className="projectImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">uvafdbsgjfnd iyafbdgsfnjd gifudsgfd</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea name="message" rows="5" placeholder="Your Message" className="msg"></textarea>
                    <button className="submitBtn" type="submit" value="Send">Submit</button>
                    <div className="links">
                        <img src={LinkedIn} alt="linkdein" className="link" />
                        <img src={GitHub} alt="" className="link" />
                        <img src={Instagram} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;