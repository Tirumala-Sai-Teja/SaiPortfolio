import React from "react";
import "./projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Btech from "../../assets/btech.svg";
import Inter from "../../assets/inter.svg";
import Icdic from "../../assets/project1.png";
const Projects = () => {
  return (
    <section id="projects">
      <div className="container project-container">
        <h1>Projects</h1>
        <br />
        <Carousel className="project">
          <div className="project-slide">
            <div className="project-text">
              <h3 className="title"> ICDIC 2021</h3>
              <h5>
                {" "}
                I have used HTML, CSS, JavaScript and Bootstrap for additional
                look and feel
              </h5>
              {/* <Link to="https://www.icdic.info/" target="_blank"></Link> */}
              <a href="https://www.icdic.info/" target="_blank">
                see project
              </a>
            </div>
            <div className="project-img">
              <img className="image" src={Icdic} alt="" />
            </div>
          </div>
          <div className="project-slide">
            <div className="project-text">
              <h3 className="title"> ICDIC 2021</h3>
              <h5>
                {" "}
                I have used HTML, CSS, JavaScript and Bootstrap for additional
                look and feel
              </h5>
              {/* <Link to="https://www.icdic.info/" target="_blank"></Link> */}
              <a href="https://www.icdic.info/" target="_blank">
                see project
              </a>
            </div>
            <div className="project-img">
              <img className="image" src={Icdic} alt="" />
            </div>
          </div>
          <div className="project-slide">
            <div className="project-text">
              <h3 className="title"> ICDIC 2021</h3>
              <h5>
                {" "}
                I have used HTML, CSS, JavaScript and Bootstrap for additional
                look and feel
              </h5>
              {/* <Link to="https://www.icdic.info/" target="_blank"></Link> */}
              <a href="https://www.icdic.info/" target="_blank">
                see project
              </a>
            </div>
            <div className="project-img">
              <img className="image" src={Icdic} alt="" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default Projects;
