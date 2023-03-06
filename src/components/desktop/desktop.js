import React, { useState, useRef, createRef, useContext } from "react";
import aboutMeImage from "../../assets/about-me.png";
import projects from "../../assets/projects.png";
import calculator from "../../assets/calculator.png";
import Icon from "../Icons.js/Icons";

import "./desktop.css";

export default function Desktop() {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showCalculatorModal, setShowCalculatorModal] = useState(false);

  const handleAboutClick = () => {
    setShowAboutModal(true);
  };

  const handleAboutCloseClick = () => {
    setShowAboutModal(false);
  };

  const handleProjectsClick = () => {
    setShowProjectsModal(true);
  };

  const handleProjectsCloseClick = () => {
    setShowProjectsModal(false);
  };

  const handleCalculatorClick = () => {
    setShowCalculatorModal(true);
  };

  const handleCalculatorCloseClick = () => {
    setShowCalculatorModal(false);
  };

  return (
    <div className="homescreen">
      <div class="desktop">
        <Icon
          handleAboutClick={(e) => handleAboutClick(e, "About Me")}
          name="About Me"
          alt="about"
          imgSrc={aboutMeImage}
        />
        <Icon
          handleProjectsClick={(e) => handleProjectsClick(e, "Projects")}
          name="Projects"
          alt="projects"
          imgSrc={projects}
        />
        <Icon
          handleCalculatorClick={(e) => handleCalculatorClick(e, "Calculator")}
          name="Calculator"
          alt="calculator"
          imgSrc={calculator}
        />
      </div>
    </div>
  );
}
