import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "DupDetect",
    description: "Developed a document comparator website enabling fast and accurate similarity detection. Built with Python and Flask, and a user-friendly interface for seamless file uploads and real-time analysis.",
    image: "/assets/DupDetect.png",
    link: "https://github.com/RiyaKumari22/DupDetect"
  },
  {
    title: "FoodZone",
    description: "Developed a dynamic restaurant website using the MERN stack with JWT authentication for secure user login and order management. Designed an intuitive UI for seamless browsing and optimized backend performance for efficient data handling.",
    image: "/assets/Foodzone.png",
    link: "https://github.com/RiyaKumari22/FoodZone"
  },
  {
    title: "YatraTales",
    description: "Built a comprehensive tour and travel website using the MERN stack, integrating a weather forecasting system for real-time updates. Demonstrated expertise in API integration and designed a user-friendly interface with React.js. Optimized backend performance with Node.js and Express.js, ensuring efficient data management and scalable storage with MongoDB.",
    image: "/assets/yatratales.png"
  },
  {
    title: "NewsFeed",
    description: "Developed a responsive news website using React, integrating the News API for real-time updates. Focused on front-end development to deliver an engaging user experience with efficient state management and optimized performance across devices.",
    image: "/assets/newsfeed.png",
    link: "https://github.com/RiyaKumari22/NewsFeed"
  },
  {
    title: "SIS",
    description: "Built a robust website for SIS Group Enterprises using Express.js, optimizing backend efficiency and data management. Focused on scalable server-side development with secure API endpoints, enhancing performance and reliability for smooth business operations.",
    image: "/assets/SIS.png",
    link: "https://github.com/RiyaKumari22/SIS-Project"
  },
  {
    title: "MovieApp",
    description: "Designed and developed a dynamic movie website using React.js, seamlessly integrating the IMDB API to provide real-time movie details Optimized the user interface for an engaging browsing experience, ensuring smooth navigation and responsive design. Implemented efficient state management for seamless data fetching and rendering, enhancing overall performance and usability.",
    image: "/assets/MovieApp.png",
    link: "https://movie-app-zeta-pied.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="heading">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="project-card">
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
