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
            <h2>Full Stack Developer</h2>
          </div>
          <p>
           An ambitious final-year Computer Science student with a passion for software development. Skilled in web technologies, I specialize in building dynamic, user-friendly websites. Additionally, I have strong expertise in Data Structures and Algorithms, Python, and AI technologies, which enhances my problem-solving abilities and drives innovation. Through hands-on projects, I have sharpened my skills to deliver high-quality, efficient solutions.
          </p>
          <div className="btn-box">
          <a href="/assets/RiyaCV.pdf" className="btn" download>Download Resume</a>

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
