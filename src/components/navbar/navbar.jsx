import React from "react";
import "./navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SiCodeproject } from "react-icons/si";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isOpen, setIsOpen] = useState("");

  function handleToggle() {
    document.getElementById("arrow").classList.toggle("rotate");
    document.getElementById("navbar").classList.toggle("away");

    // if (open) {
    //   document.getElementById("navbar").style.height = 0;
    //   const els = Array.from(document.getElementById("navbar").children);

    //   els.forEach((el) => (el.style.display = "none"));
    //   setOpen(false);
    // }
    // if (!open) {
    //   // document.getElementById("arrow").classList.toggle("rotate");
    //   document.getElementById("navbar").style.height = "max-content";
    //   const els = Array.from(document.getElementById("navbar").children);

    //   els.forEach((el) => (el.style.display = "flex"));
    //   setOpen(true);
    // }
  }

  return (
    <>
      <span
        className="toggle_container"
        style={{ cursor: "pointer" }}
        onClick={handleToggle}
        id="arrow"
      >
        <MdOutlineKeyboardArrowDown fontSize={"2rem"} />
      </span>
      <nav className={isOpen} id="navbar">
        <div
          onClick={() =>
            isOpen === "open" ? setIsOpen("") : setIsOpen("open")
          }
          className={isOpen === "open" ? "menuToggle open" : "menuToggle"}
        ></div>
        <div></div>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <span className="icon">
            <AiOutlineHome />
          </span>
          <span className="text">Home</span>
        </a>

        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <span className="icon">
            <AiOutlineUser />
          </span>
          <span className="text">About</span>
        </a>
        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <span className="icon">
            <BiBook />
          </span>
          <span className="text">Skills</span>
        </a>
        <a
          href="#interests"
          onClick={() => setActiveNav("#interests")}
          className={activeNav === "#interests" ? "active" : ""}
        >
          <span className="icon">
            <RiServiceLine />
          </span>
          <span className="text">Interests</span>
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <span className="icon">
            <SiCodeproject />
          </span>
          <span className="text">Projects</span>
        </a>

        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <span className="icon">
            <BiMessageSquareDetail />
          </span>
          <span className="text">Contact</span>
        </a>
      </nav>
    </>
  );
};
export default Navbar;
{
  /* <ul>
  <li class="list active" style="--clr:#f44336;">
    <a href="#">
      <span class="icon">
        <ion-icon name="home-outline"></ion-icon>
      </span>
      <span class="text">Home</span>
    </a>
  </li>
  <li class="list" style="--clr:#ffa117;">
    <a href="#">
      <span class="icon">
        <ion-icon name="person-outline"></ion-icon>
      </span>
      <span class="text">About</span>
    </a>
  </li>
  <li class="list" style="--clr:#0fc70f;">
    <a href="#">
      <span class="icon">
        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
      </span>
      <span class="text">Message</span>
    </a>
  </li>
  <li class="list" style="--clr:#2196f3;">
    <a href="#">
      <span class="icon">
        <ion-icon name="camera-outline"></ion-icon>
      </span>
      <span class="text">photos</span>
    </a>
  </li>
  <li class="list" style="--clr:#b145e9;">
    <a href="#">
      <span class="icon">
        <ion-icon name="settings-outline"></ion-icon>
      </span>
      <span class="text">Settings</span>
    </a>
  </li>
</ul>; */
}
