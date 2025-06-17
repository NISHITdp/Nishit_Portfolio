import React, {useState} from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">HOME</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">ABOUT</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">EXPERIENCE</Link>
                <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">PROJECTS</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="desktopMenuImg"  className="desktopMenuImg"/> Contact Me
            </button>

            <img src={menu} alt="menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>HOME</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>ABOUT</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>EXPERIENCE</Link>
                <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>PROJECTS</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>CONTACT</Link>
            </div>
        </nav>
    )
}

export default Navbar