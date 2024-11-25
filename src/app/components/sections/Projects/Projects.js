import React from "react";
import styles from "./project-component--style.css";
import Card from "./cards/Card";

const Projects = () => {
  return (
    <section id="projects" className="container-fluid py-6">
      <div className="project_wrapper">
        <h2 className="project__title">Projects & Collaborations</h2>
      </div>
      <div className="project__cards">
        <div className="project__cards--wrapper project_slider">
          <Card
            img_src="#"
            img_alt="Project 1"
            title="Project 1"
            desc="Loren Ipsum"
          />
          <Card
            img_src="#"
            img_alt="Project 2"
            title="Project 2"
            desc="Loren Ipsum"
          />
          <Card
            img_src="#"
            img_alt="Project 3"
            title="Project 3"
            desc="Loren Ipsum"
          />
          <Card
            img_src="#"
            img_alt="Project 4"
            title="Project 4"
            desc="Loren Ipsum"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
