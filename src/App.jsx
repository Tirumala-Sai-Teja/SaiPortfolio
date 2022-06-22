import React from "react";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Interests from "./components/intersts/intersts";
import Projects from "./components/projects/projects";
import Navbar from "./components/navbar/navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Interests />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
