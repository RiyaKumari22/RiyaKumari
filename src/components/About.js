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
        <p>Personal Statement  
Software Developer turning ideas into scalable digital solutions.  
Builds and ships production applications end-to-end using React.js,  
TypeScript, Node.js, and the MERN stack, owning 4+ organizational 
web properties from concept to deployment. Also administers  
Learning Management Systems and manages end-to-end technical  
delivery for 200+ users globally, coordinating closely with internal  
teams and international partners. </p>
        </div>
      </div>
    </section>
  );
};

export default About;
