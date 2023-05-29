import React from "react";
import "./About.css";
import image from "../../assets/image.png";
import { FaAward } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={image} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 Years Working</small>
            </article>
            <article className="about__card">
              <GrProjects className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            Hey, I'm interested in the Web Development because Web development is a
            fast-paced, challenging career centered on creative problem-solving
            and continuous innovation, Please check my Experience and the Project, I have made.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
