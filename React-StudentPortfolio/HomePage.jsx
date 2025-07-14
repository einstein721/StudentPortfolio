// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />

      <section id="home" className="home">
        <div className="home-content">
          <h1>Hi, I'm <span>Bukayo Saka</span></h1>
          <p>A Computer Science Student at Strathmore University</p>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
        <div className="home-img">
          <img src="https://via.placeholder.com/300" alt="Profile" />
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am a dedicated and curious student passionate about technology and innovation. I enjoy learning new
          programming languages, building web applications, and collaborating on tech projects. I'm currently pursuing a
          degree in Computer Science at Strathmore University.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-box">
          <div className="project">
            <h3>Library Management System</h3>
            <p>A desktop application built with Java and MySQL for managing library resources efficiently.</p>
          </div>
          <div className="project">
            <h3>Student Portfolio Website</h3>
            <p>A responsive portfolio website showcasing academic work and skills using HTML, CSS, and JavaScript.</p>
          </div>
          <div className="project">
            <h3>Dairy Farm System</h3>
            <p>An application built with Java and MySQL that enables farmers to monitor their cows.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
