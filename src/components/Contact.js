import React, { useState } from "react";
import "../styles/Contact.css";
import "boxicons/css/boxicons.min.css";

const Contact = () => {
 
  return (
    <section id="contact" className="contact">
      <h2 className="heading">Get In <span>Touch</span></h2>
      <p className="contact-message">
      I'm actively seeking new opportunities and always open to connecting! Feel free to reach out—whether you have a question or just want to say hello, I'll do my best to respond promptly.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><i className="bx bxs-envelope"></i> Email: riya.kumari.4rmk@gmail.com</p>
          <p><i className="bx bxs-phone"></i> Phone: +91 79799 59844</p>
          <div className="social-icons">
            <a href="mailto:riya.kumari.4rmk@gmail.com" target="_blank"  className="gmail">
              <i className="bx bxl-gmail"></i>
            </a>
            <a href="https://www.linkedin.com/in/riya-kumari-190692218/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/RiyaKumari22" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
