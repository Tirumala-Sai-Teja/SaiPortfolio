import React from "react";
import "./home.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
// import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <br />
        <h5>WHO AM I </h5>
        <h1>Sai Teja</h1>
        <div className="text_container">
          <p className="para">
            If you are looking for a software developer then you are landed at
            the right place. I am working as a Program Associate in Wells Fargo
            Bangalore. I completed my Computer Science and Engineering at sree
            vidyanikethan Engineering College,Tirupati. I am very much
            interested in front-end technologies like HTML, CSS, Java Script,
            React Js etc. Also I have done some certifications on SQL and python
            from hackerrank. I generally participate in coding events often. I
            also have the relevant knowledge on the Data Structures and
            Algorithms.
            <CTA />
          </p>

          {/* <HeaderSocials /> */}

          {/* <a href="#contact" className="scroll_down">
          Scroll Down
        </a> */}
          <div className="me">
            <img id="idme" src={ME} alt="me" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
