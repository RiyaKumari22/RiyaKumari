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
         <p > Riya Kumari is a Web Developer and Project Assistant – Online Management at FSR Global, where she manages websites, supports SEO and Google Analytics, and maintains digital learning platform such as Moodle and Canvas. She specializes in front-end design, troubleshooting technical issues, and ensuring smooth digital program delivery.
<br></br>
<br></br>
With a strong foundation in Computer Science Engineering, Riya’s technical expertise spans HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, and WordPress. She also works with cloud platforms like Microsoft Azure and Oracle, and is skilled in Git, Postman, and digital platform optimization.

Passionate about creating responsive, user-friendly digital experiences, Riya combines creativity and technical precision to deliver impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
