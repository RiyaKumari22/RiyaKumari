import React from 'react';
import '../styles/TechnicalSkills.css';

const TechnicalSkills = () => {
  const skills = [
    { category: "Languages", skills: "JavaScript, Python, C, Java, SQL" },
    { category: "Web Technologies", skills: "HTML, CSS, SASS, React.js, Node.js, Express.js" },
    { category: "Databases", skills: "MongoDB, Oracle, SQL Server" },
    { category: "Cloud Platforms", skills: "Microsoft Azure" },
    { category: "Tools", skills: "Git, VS Code, Postman, Excel, PowerPoint,Canva, Google Analytics" },
    { category: "Learning Management Systems (LMS)", skills: "Moodle" },
  ];

  return (
    <section className="technical-skills">
      <h2>Technical <span>Skills</span></h2>
      <div className="skills-container">
        {skills.map((item, index) => (
          <div className="skill-card" key={index}>
            <h3>{item.category}</h3>
            <p>{item.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
