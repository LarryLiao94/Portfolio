import React, { useState, useRef, createRef, useContext } from "react";
import aboutMeImage from "../../assets/about-me.png";
import projects from "../../assets/projects.png";
import calculator from "../../assets/calculator.png";
import Icon from "../Icons.js/Icons";
import TaskBar from "../taskbar";
import XPWindow from "../Windows-Modals/modal";
import GlobalContext from "../../GlobalContext";

import "./desktop.css";

export default function Desktop() {
  const { pages, setPages, selected, setSelected } = useContext(GlobalContext);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showCalculatorModal, setShowCalculatorModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
      <TaskBar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showAboutModal && (
        <XPWindow title="About Me" handleClose={handleAboutCloseClick}>
          Hello I am Larry
        </XPWindow>
      )}
      {showProjectsModal && (
        <XPWindow title="Projects" handleClose={handleProjectsCloseClick}>
          {/* Your Projects content goes here */}
        </XPWindow>
      )}
      {showCalculatorModal && (
        <XPWindow title="Calculator" handleClose={handleCalculatorCloseClick}>
          {/* Your Calculator content goes here */}
        </XPWindow>
      )}
    </div>
  );
}
