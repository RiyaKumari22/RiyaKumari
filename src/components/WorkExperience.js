import React from 'react';
import '../styles/WorkExperience.css';

const experiences = [
  {
    role: "Project Assistant- Online Management",
    company: "FSR Global",
    duration: "May 2025 - Present",
    description: [
      "Manage FSR Global’s website (WordPress) and ETA LMS (Moodle), including SEO optimization Google Analytics and technical issue resolution.",
     , "Support front-end design for multiple websites and assist with bug fixing and digital platform maintenance."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Webnet Technologies",
    duration: "June 2024 - July,2024",
    description: [
      "Developed and optimized full-stack web applications using React.js, Node.js, and MongoDB.",
      "Implemented dynamic features enhancing UI/UX, improving website performance by 30%.",
      "Collaborated with cross-functional teams to design scalable solutions and ensure smooth deployments.",
      "Integrated third-party APIs and improved backend efficiency, reducing response time by 40%."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Taquino India Private Ltd.",
    duration: "Jun 2023 - Aug 2023",
    description: [
      "Designed and implemented a Tutor registration section for Coaching Detail using React.js.",
      "Developed a scalable website for SIS Group Enterprises, optimizing data handling with Express.js.",
      "Created 10+ REST APIs, enhancing backend performance and reducing response time by 40%.",
      "Built an admin panel for data management, improving workflow efficiency and system control."
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="work-experience">
      <h2 className="heading">Work <span>Experience</span></h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="experience-content">
              <h3>{experience.role}</h3>
              <h4>{experience.company} | {experience.duration}</h4>
              <ul>
                {experience.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
