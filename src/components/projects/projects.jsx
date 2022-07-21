import React from "react";
import "./projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Btech from "../../assets/btech.svg";
import Inter from "../../assets/inter.svg";
import Icdic from "../../assets/project1.png";
import TicTacToe from "../../assets/tictactoe.png";
import RockPaper from "../../assets/rockpaper.png";
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
              <br />
              <h5>
                I have used HTML, CSS, JavaScript and Bootstrap for additional
                look and feel.
                <br />
                It is a static website for the International Conference on
                emerging technologies.
                <br />
                {/* <Link to="https://www.icdic.info/" target="_blank"></Link> */}
                <a href="https://www.icdic.info/" target="_blank">
                  View Project
                </a>
              </h5>
            </div>
            <div className="project-img">
              <img className="image" src={Icdic} alt="" />
            </div>
          </div>
          <div className="project-slide">
            <div className="project-text">
              <h3 className="title"> Tic-Tac-Toe</h3>
              <br />
              <h5>
                {" "}
                I have used HTML and CSS to develop the UI for Tic-Tac-Toe game
                and JavaScript to develop the MiniMax Algorithm for the
                functionality.
                <br />
                {/* <Link to="https://www.icdic.info/" target="_blank"></Link> */}
                <a
                  href="https://tirumala-sai-teja.github.io/Tic-Tac-Toe/"
                  target="_blank"
                >
                  View Project
                </a>
              </h5>
            </div>
            <div className="project-img">
              <img className="image" src={TicTacToe} alt="" />
            </div>
          </div>
          <div className="project-slide">
            <div className="project-text">
              <h3 className="title"> Rock-Paper-Scissors</h3>
              <br />
              <h5>
                {" "}
                I have used Python to develop Rock Paper Scissors(RPS) game,
                which is an interaction with the computer.
                <br />
                Libraries used - OpenCV, MediaPipe, PyGame
                <br />
                {/* <Link to="https://www.icdic.info/" target="_blank"></Link> */}
                <a
                  href="https://github.com/Tirumala-Sai-Teja/Rock-Paper-Scissors/tree/master"
                  target="_blank"
                >
                  View Project
                </a>
              </h5>
            </div>
            <div className="project-img">
              <img className="image" src={RockPaper} alt="" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default Projects;
