import React from 'react';
import './AboutServices.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const AboutServices = () => {
    const workingExperiences = [
        {
            role: "Promoter",
            company: "forgotten",
            details: "Distributing and introducing the companies healthy drinks to customers."
        },
        {
            role: "Coaching",
            company: "Duo Sparks Badminton Academy",
            details: "To be a flexible coach and role model to all the students ranging from 5-20 years old"
        },
        {
            role: "trading",
            company: "self-employed",
            details: "crypto trading"
        }
    ];

    return (
        <div className="services">
            <div className="services-title">
                <h1>My Skills</h1>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
            </div>
            <div className="experiences">
                <div className="experiences-title">
                    <h1>Working Experiences</h1>
                </div>
                <div className="experience-timeline">
                    {workingExperiences.map((experience, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{experience.role}</h3>
                                <p className="experience-company">{experience.company}</p>
                                <p className="experience-details">{experience.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutServices;
