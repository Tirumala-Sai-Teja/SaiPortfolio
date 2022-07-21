import React from "react";
import "./skills.css";
import { BsPatchCheckFill, BsCircleFill, BsCircle } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container skills-container">
        <h1>Skills</h1>
        <br />
        <div className="leftside">
          <div className="left">
            <div className="inner-left">
              <ul>
                <li>
                  <span>
                    <BsPatchCheckFill />
                  </span>
                  Python
                  <span className="rating">
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircle />
                  </span>
                </li>
                <li>
                  <span>
                    <BsPatchCheckFill />
                  </span>
                  C++
                  <span className="rating">
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircle />
                    <BsCircle />
                  </span>
                </li>
                <li>
                  <span>
                    <BsPatchCheckFill />
                  </span>
                  Java
                  <span className="rating">
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircle />
                  </span>
                </li>
                <li>
                  {" "}
                  <span>
                    <BsPatchCheckFill />
                  </span>{" "}
                  Java Script
                  <span className="rating">
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircle />
                    <BsCircle />
                  </span>
                </li>
                <li>
                  {" "}
                  <span>
                    <BsPatchCheckFill />
                  </span>
                  SQL
                  <span className="rating">
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircleFill />
                    <BsCircle />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="inner-right">
            <ul>
              <li>
                <span className="rating">
                  <BsCircle />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                </span>
                HTML
                <span className="right-gap">
                  <BsPatchCheckFill />
                </span>
              </li>
              <li>
                <span className="rating">
                  <BsCircle />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                </span>
                CSS
                <span className="right-gap">
                  <BsPatchCheckFill />
                </span>
              </li>
              <li>
                <span className="rating">
                  <BsCircle />
                  <BsCircle />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                </span>
                React JS
                <span className="right-gap">
                  <BsPatchCheckFill />
                </span>
              </li>
              <li>
                <span className="rating">
                  <BsCircle />
                  <BsCircle />
                  <BsCircle />
                  <BsCircleFill />
                  <BsCircleFill />
                </span>
                React Native
                <span className="right-gap">
                  <BsPatchCheckFill />
                </span>
              </li>
              <li>
                <span className="rating">
                  <BsCircle />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                </span>
                Data Structures
                <span className="right-gap">
                  <BsPatchCheckFill />
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="right">
          <div className="inner-right">
            <ul>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div className="rating">
                  <BsCircle />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                </div>
                <div>
                  HTML
                  <span className="right-gap">
                    <BsPatchCheckFill />
                  </span>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div className="rating">
                  <BsCircle />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                </div>
                <div>
                  css
                  <span className="right-gap">
                    <BsPatchCheckFill />
                  </span>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div className="rating">
                  <BsCircle />
                  <BsCircle />
                  <BsCircleFill />
                  <BsCircleFill />
                  <BsCircleFill />
                </div>
                <div>
                  React Js
                  <span className="right-gap">
                    <BsPatchCheckFill />
                  </span>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div className="rating">
                  <BsCircle />
                  <BsCircle />
                  <BsCircle />
                  <BsCircleFill />
                  <BsCircleFill />
                </div>
                <div>
                  React Native
                  <span className="right-gap">
                    <BsPatchCheckFill />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Skills;
