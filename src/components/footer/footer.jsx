import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Sai Teja
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#interests">Interests</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* <div className="footer_socials">
        <a href="https:facebook.com">
          <FaFacebookF />
        </a>
        <a href="https:instagram.com">
          <FiInstagram />
        </a>
        <a href="https:twitter.com">
          <IoLogoTwitter />
        </a>
      </div> */}
      <div className="footer_copyright">
        <small>&copy; Sai Teja, All rights are reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
