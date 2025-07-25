// import React from 'react'
// import './AboutWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import mywork_data from '../../assets/mywork_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

// const AboutWork = () => {
//     return (
//         // <div id='work' className='mywork'>
//         <div className="mywork">
//           <div className="mywork-title">
//             <h1>Education History</h1>
//             <img src={theme_pattern} alt="" />
//             </div>
//                 <div className="mywork-container">
//             {mywork_data.map((work,index)=>{
//                 return <img  key={index} src={work.w_img} alt="" />
//             })}
//           </div>
//           <div className="mywork-showmore">
//             <p>Show More</p>
//             <img src={arrow_icon} alt="" />
//           </div>
//         </div>
//     )
// }

// export default AboutWork




// import React from 'react';
// import './AboutWork.css';
// import theme_pattern from '../../assets/theme_pattern.svg';

// // Import logos
// import catholic from '../../assets/catholic.jpeg';
// import sunway_college from '../../assets/sunway_college.jpg';
// import university from '../../assets/university.jpg';

// const AboutWork = () => {
//     const educationHistory = [
//         {
//             number: "1",
//             year: "2023 - Present",
//             title: "University",
//             logo: university,
//             achievements: [
//                 "Member of school badminton club",
//                 "President of Computer Science club",
//                 "Organized annual sports month"
//             ]
//         },
//         {
//             number: "2",
//             year: "2022 - 2023",
//             title: "College",
//             logo: sunway_college,
//             achievements: [
//                 "Completed Canadian International Matriculation programme",
//                 "Average grade of 80%"
//             ]
//         },
//         {
//             number: "3",
//             year: "2017 - 2022",
//             title: "High School",
//             logo: catholic,
//             achievements: [
//                 "Member of badminton club",
//                 "Volunteer for school marathon"
//             ]
//         }
//     ];

//     return (
//         <div className="mywork">
//             <div className="mywork-title">
//                 <h1>Education History</h1>
//                 <img src={theme_pattern} alt="" />
//             </div>
//             <div className="mywork-container">
//                 {educationHistory.map((item, index) => (
//                     <div key={index} className="education-column">
//                         <img src={item.logo} alt={`${item.title} Logo`} className="school-logo" />
//                         <h2>{item.number}. {item.title}</h2>
//                         <h3>{item.year}</h3>
//                         <ul>
//                             {item.achievements.map((achievement, i) => (
//                                 <li key={i}>{achievement}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AboutWork;






// import React from 'react';
// import './AboutWork.css';
// import theme_pattern from '../../assets/theme_pattern.svg';

// // Import logos
// import catholic from '../../assets/catholic.jpeg';
// import sunway_college from '../../assets/sunway_college.jpg';
// import university from '../../assets/university.jpg';

// const AboutWork = () => {
//     const educationHistory = [
//         {
//             number: "1",
//             year: "2023 - Present",
//             title: "University",
//             logo: university,
//             achievements: [
//                 "Member of school badminton club",
//                 "President of Computer Science club",
//                 "Organized annual sports month"
//             ]
//         },
//         {
//             number: "2",
//             year: "2022 - 2023",
//             title: "College",
//             logo: sunway_college,
//             achievements: [
//                 "Completed Canadian International Matriculation programme",
//                 "Average grade of 80%"
//             ]
//         },
//         {
//             number: "3",
//             year: "2017 - 2022",
//             title: "High School",
//             logo: catholic,
//             achievements: [
//                 "Member of badminton club",
//                 "Volunteer for school marathon"
//             ]
//         }
//     ];

//     return (
//         <div className="mywork">
//             <div className="mywork-title">
//                 <h1>Education History</h1>
//                 {/* <img src={theme_pattern} alt="" /> */}
//             </div>
//             <div className="mywork-container">
//                 {educationHistory.map((item, index) => (
//                     <React.Fragment key={index}>
//                         <div className="education-column">
//                             <img src={item.logo} alt={`${item.title} Logo`} className="school-logo" />
//                             <h2>{item.number}. {item.title}</h2>
//                             <h3>{item.year}</h3>
//                             <ul>
//                                 {item.achievements.map((achievement, i) => (
//                                     <li key={i}>{achievement}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                         {index < educationHistory.length - 1 && (
//                             <div className="arrow">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="40"
//                                     height="40"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="feather feather-arrow-down"
//                                 >
//                                     <line x1="12" y1="5" x2="12" y2="19"></line>
//                                     <polyline points="19 12 12 19 5 12"></polyline>
//                                 </svg>
//                             </div>
//                         )}
//                     </React.Fragment>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AboutWork;








import React from 'react';
import './AboutWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';

// Import logos
import catholic from '../../assets/catholic.jpeg';
import sunway_college from '../../assets/sunway_college.jpg';
import university from '../../assets/university.jpg';

const AboutWork = () => {
    const educationHistory = [
        {
            number: "1",
            year: "2023 - Present",
            title: "University",
            logo: university,
            achievements: [
                "Member of school badminton club",
                "President of Computer Science club",
                "Organized annual sports month"
            ]
        },
        {
            number: "2",
            year: "2022 - 2023",
            title: "College",
            logo: sunway_college,
            achievements: [
                "Completed Canadian International Matriculation programme",
                "Average grade of 80%"
            ]
        },
        {
            number: "3",
            year: "2017 - 2022",
            title: "High School",
            logo: catholic,
            achievements: [
                "Member of badminton club",
                "Volunteer for school marathon"
            ]
        }
    ];

    return (
        <div className="mywork">
            <div className="mywork-title">
                <h1>Education History</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            <div className="mywork-container">
                {educationHistory.map((item, index) => (
                    <div key={index} className="education-wrapper"> {/* Wrapper div */}
                        <div className="education-column">
                            <img src={item.logo} alt={`${item.title} Logo`} className="school-logo" />
                            <h2>{item.number}. {item.title}</h2>
                            <h3>{item.year}</h3>
                            <ul>
                                {item.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                        {index < educationHistory.length - 1 && (
                            <div className="arrow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-arrow-down"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <polyline points="19 12 12 19 5 12"></polyline>
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutWork;


