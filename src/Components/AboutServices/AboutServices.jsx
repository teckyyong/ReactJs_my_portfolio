// import React from 'react';
// import './AboutServices.css';
// import theme_pattern from '../../assets/theme_pattern.svg';

// const AboutServices = () => {
//     const workingExperiences = [
//         {
//             role: "Promoter",
//             company: "forgotten",
//             details: "Distributing and introducing the companies healthy drinks to customers."
//         },
//         {
//             role: "Coaching",
//             company: "Duo Sparks Badminton Academy",
//             details: "To be a flexible coach and role model to all the students ranging from 5-20 years old"
//         },
//         {
//             role: "trading",
//             company: "self-employed",
//             details: "crypto trading"
//         }
//     ];

//     return (
//         <div className="services">
//             <div className="services-title">
//                 <h1>My Skills</h1>
//             </div>
//             <div className="about-skills">
//                 <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
//                 <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
//                 <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
//                 <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
//             </div>
//             <div className="experiences">
//                 <div className="experiences-title">
//                     <h1>Working Experiences</h1>
//                 </div>
//                 <div className="experience-timeline">
//                     {workingExperiences.map((experience, index) => (
//                         <div className="timeline-item" key={index}>
//                             <div className="timeline-dot"></div>
//                             <div className="timeline-content">
//                                 <h3>{experience.role}</h3>
//                                 <p className="experience-company">{experience.company}</p>
//                                 <p className="experience-details">{experience.details}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutServices;


import React from 'react';
import './AboutServices.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const AboutServices = () => {
  const workingExperiences = [
    {
      role: "KyoChon — Waiter / Cashier / Kitchen Staff",
      company: "KyoChon",
      year: "Apr 2022 – Nov 2022",
      details:
        "Adapted quickly to multiple roles in a fast-paced environment; strengthened customer service, task prioritisation, teamwork, and resilience."
    },
    {
      role: "Badminton Coach",
      company: "ACE / Duo Sparks (community coaching)",
      year: "Dec 2022 – Present",
      details:
        "Coached children and adults; developed communication, lesson planning, feedback delivery, patience, leadership, and adaptability."
    },
    {
      role: "Electrolux Sales Promoter",
      company: "Harvey Norman",
      year: "Nov 2024",
      details:
        "Promoted and demonstrated home appliances; built persuasion, customer-needs analysis, and product presentation skills; met sales targets."
    },
    {
      role: "Badminton Tournament Co-organizer",
      company: "ACE Badminton Academy & partners",
      year: "2024 – Present",
      details:
        "Co-organized tournaments, managing sponsorships, logistics, marketing, and on-site operations to ensure smooth execution and positive stakeholder engagement."
    },
    {
      role: "Teaching Assistant — Calculus & Advanced Functions",
      company: "Sunway College",
      year: "",
      details:
        "Supported peers with challenging concepts; honed tutoring, mentoring, step-by-step explanation, and problem-solving skills."
    }
  ];

  return (
    <div className="services">
      <div className="services-title">
        <h1>My Skills</h1>
      </div>

      <div className="about-skills">
        <div className="about-skill">
          <p>HTML &amp; CSS</p>
          <hr style={{ width: "50%" }} />
        </div>
        <div className="about-skill">
          <p>React JS</p>
          <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>JavaScript</p>
          <hr style={{ width: "60%" }} />
        </div>
        {/* Replaced Next JS with Python & Java */}
        <div className="about-skill">
          <p>Python</p>
          <hr style={{ width: "80%" }} />
        </div>
        <div className="about-skill">
          <p>Java</p>
          <hr style={{ width: "90%" }} />
        </div>
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
                {experience.company && (
                  <p className="experience-company">{experience.company}</p>
                )}
                {experience.year && (
                  <p className="experience-year">{experience.year}</p>
                )}
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
