import React from "react";
import "./about.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Btech from "../../assets/btech.svg";
import Inter from "../../assets/inter.svg";
import Tenth from "../../assets/tenth.svg";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <div className="container about_container">
        <h5>Get To Know</h5>
        <h1>About Me</h1>
        <br />
        <div className="field">
          <div className="heading">
            <p className="details">DOB</p>
          </div>
          <div className="gap"></div>
          <div className="details">
            <p>28-07-2001</p>
          </div>
        </div>
        <div className="field">
          <div className="heading">
            <p className="details">Full Name</p>
          </div>
          <div className="gap"></div>
          <div className="details">
            <p>Kapu Tirumala Sai Teja</p>
          </div>
        </div>
        <Carousel className="main-slide">
          <div>
            <h3 className="course-name"> Bachelor of Technology (2018-2022)</h3>
            <div className="background">
              <img className="course" src={Btech} alt="" />
            </div>
          </div>
          <div>
            <h3 className="course-name"> Intermediate (2016-2018)</h3>
            <div className="background">
              <img className="course" src={Inter} alt="" />
            </div>
          </div>
          <div>
            <h3 className="course-name"> Tenth Standard (2015-2016)</h3>
            <div className="background">
              <img className="course" src={Tenth} alt="" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default About;
