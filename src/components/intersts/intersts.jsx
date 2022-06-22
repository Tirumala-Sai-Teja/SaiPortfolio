import React from "react";
import "./interests.css";
import Img1 from "../../assets/painting.jpg";
import Img2 from "../../assets/gaming.png";
import Img3 from "../../assets/coding.png";
import { GiAbstract061 } from "react-icons/gi";
import { BsCircleFill, BsCircle } from "react-icons/bs";

const Interests = () => {
  return (
    <section id="interests">
      <div className="container interest-container">
        <h1>Interests</h1>
        <br />
        <div className="sub-container">
          <div className="interest">
            <img src={Img1} alt="" />
            <div className="content">
              <p>
                {" "}
                <span>
                  <GiAbstract061 />{" "}
                </span>
                Paintings
              </p>
              <a href="" className="links">
                {" "}
                see some
              </a>
            </div>
            <div className="content">
              <p>
                {" "}
                <span>
                  <GiAbstract061 />{" "}
                </span>
                Pencil Sketches
              </p>
              <a href="" className="links">
                {" "}
                see some
              </a>
            </div>
            <div className="content">
              <p>
                {" "}
                <span>
                  <GiAbstract061 />{" "}
                </span>
                Digital Arts
              </p>
              <a href="" className="links">
                {" "}
                see some
              </a>
            </div>
          </div>
          <div className="interest">
            <img src={Img2} alt="" />
            <div className="content">
              <p>
                {" "}
                <span>
                  <GiAbstract061 />{" "}
                </span>
                Build Box
              </p>
              <p className="subtext">Designing 2D games</p>
            </div>
            <div className="content">
              <p>
                {" "}
                <span>
                  <GiAbstract061 />{" "}
                </span>
                Unity
              </p>
              <p className="subtext">2D and 3D simple games</p>
            </div>
            <div className="content">
              <p>
                {" "}
                <span>
                  <GiAbstract061 />{" "}
                </span>
                Blender
              </p>
              <p className="subtext">Creating 3D objects</p>
            </div>
          </div>
          <div className="interest">
            <img src={Img3} alt="" />
            <div className="content">
              <p>
                {" "}
                <span>
                  <GiAbstract061 />{" "}
                </span>
                Participating in coding events
              </p>
              <p className="subtext">
                {" "}
                <span className="icons">
                  <BsCircleFill />
                </span>{" "}
                Geeks for Geeks
              </p>
              <p className="subtext">
                {" "}
                <span className="icons">
                  <BsCircleFill />
                </span>{" "}
                Dare 2 Compete
              </p>
              <p className="subtext">
                {" "}
                <span className="icons">
                  <BsCircleFill />
                </span>{" "}
                Hackerrank
              </p>
              <p className="subtext">
                {" "}
                <span className="icons">
                  <BsCircleFill />
                </span>{" "}
                Hackerearth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Interests;
