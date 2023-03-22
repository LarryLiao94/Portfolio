import React, { useState, useRef, createRef, useContext } from "react";
import Time from "../clock/clock";
import windowsIcon from "../../assets/windowsIcon.png";
import "../../xp-theme.css";

  function TaskBar({ showMenu, setShowMenu }) {
    return (
      <div className="xp-taskbar">
        <div className="xp-start-button">
          <div className="startbtn" onClick={() => setShowMenu(!showMenu)}>
            <img className="startbtnicon" src={windowsIcon} alt="start button" />
            Start
          </div>
        </div>
        <div className="timeContainer">
        <Time />
      </div>
      </div>
    );
  }
  
  export default TaskBar;