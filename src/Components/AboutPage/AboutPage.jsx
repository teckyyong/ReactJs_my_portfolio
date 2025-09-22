import React from 'react';
import './AboutPage.css'; 
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/about_profile.svg'
import resume_pfp from '../../assets/Resume_pfp.jpeg';  

const AboutPage = () => {
  return (
    // <div id='about' className='about'>
    <div className="about">
          <div className="about-title">
            <h1>About me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
          </div>
          <div className="about-sections">
            <div className="about-left">
                <img src={resume_pfp} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a beginner in Computer science degree currently pursuing a specialised career in Data sciencec</p>
                    <p>My passion started when i was in college, and now im still chasing my passion in University </p>
                    <p>One of my hobby is playing badminton, i have been playing badminton for 15 years now since 7 years old</p>
                    <p>i like researching about computer systems in my free time as i was exposed to robotics/computer class in primary school</p>
                </div>
                {/* <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
                    <div className="about-skill"><p>React Js </p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width: "50%"}} /></div>
                </div> */}
            </div>
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p> years of experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>7+</h1>
                <p> projects completed</p>
            </div>
            <hr />
            {/* <div className="about-achievement">
                <h1>15+</h1>
                <p> happy clients</p>
            </div> */}
          </div>
        </div>
  );
};

export default AboutPage;
