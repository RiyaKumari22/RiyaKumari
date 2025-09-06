import React from 'react';
import Header from './Header';
import '../styles/Home.css'; // Ensure you have a CSS file for styling
import About from './About';
import TechnicalSkills from './TechnicalSkills';
import Project from './Project';
import WorkExperience from './WorkExperience';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Header />
      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, I am <span className="highlight">Riya Kumari</span></h1>
          <div className="text-animate">
            <h2> Software Engineer</h2>
          </div>
          <p>
          Motivated and detail-oriented tech professional with hands-on experience in web development, digital project support, and online platform management. At FSR Global, I contribute to managing and enhancing the organization’s digital presence, working on website development, content updates, analytics, and learning platforms.


          </p>
          <div className="btn-box">
          <a href="/assets/RiyaResume .pdf" className="btn" download>Download Resume</a>

            <a href="#contact" className="btn">Let's Connect</a>
          </div>
        </div>

    
      </section>
      <About/>
      <TechnicalSkills/>
      <WorkExperience/>
      <Project/>
      <Contact />
    </div>
  );
};

export default Home;
