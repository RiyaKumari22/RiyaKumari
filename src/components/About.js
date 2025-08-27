import React from "react";
import "../styles/About.css"; 
// import blackImage from "../assets/black.jpg"; 

const About = () => {
  return (
    
    <section id="about">
      <h2>
        About <span>Me</span>
      </h2>
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-img">
          <img src="../assets/abut.jpg" alt="Profile" />
          <span className="circle-spin"></span>
        </div>

        {/* Right Side - Description */}
        <div className="about-text">
          <p>
          As an ambitious final-year Computer Science student, I am passionate about full-stack development and have honed my skills in building dynamic, user-friendly web applications. Proficient in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, I thrive on creating seamless digital experiences that meet both user and business needs. My hands-on projects have strengthened my problem-solving abilities and reinforced my commitment to delivering high-quality solutions.

          </p>
          <p>

With a deep interest in data structures and algorithms, I constantly seek to enhance my coding and analytical skills, staying adaptable in a rapidly evolving tech landscape. I am a proactive learner, dedicated to tackling new challenges and mastering the latest technologies. With a strong foundation in both technical and problem-solving aspects, I am excited to contribute my innovative mindset and expertise to a forward-thinking team or project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
