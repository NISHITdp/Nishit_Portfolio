import React from "react";
import './works.css';
import WorkEx1 from '../../assets/WE1.png';
import WorkEx2 from '../../assets/WE2.png';
import WorkEx3 from '../../assets/WE3.png';
import WorkEx4 from '../../assets/WE4.png';

const Works = () => {
    return(
        <section id="works">
            <h2 className="worksTitle">My Experience</h2>
            <span className="workDesc">yfgfavhbskjgfndh tfuayegsrhjdtn udafygshjdg udvAHBFSGKJNFD YDUVAFDBIHSJGND UYQFBIWGJRNETH VDHAFBJSNGKFDGM DVFHAEBGJNKS</span>
            <div className="worksImgs">
                <img src={WorkEx1} alt="WorkEx1" className="worksImg" />
                <img src={WorkEx2} alt="WorkEx2" className="worksImg" />
                <img src={WorkEx3} alt="WorkEx3" className="worksImg" />
                <img src={WorkEx4} alt="WorkEx4" className="worksImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    )
}

export default Works