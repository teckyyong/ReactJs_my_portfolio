import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About= () => {
    return(
        <div id='about' className='about'>
          <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
          </div>
          <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a beginner in Computer science degree currently pursuing a specialised career in Data sciencecdddddddddddcdc</p>
                    <p>My passion started when i was in college, and now im still chasing my passion in University cddddddddddddddddddddddd</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
                    <div className="about-skill"><p>React Js </p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width: "50%"}} /></div>
                </div>
            </div>
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p> years of experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>90+</h1>
                <p> projects completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p> happy clients</p>
            </div>
          </div>
        </div>
    )
}
export default About