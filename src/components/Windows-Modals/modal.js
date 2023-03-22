import React from "react";
import "./modal.css";

const XPWindow = ({ title, handleClose, children }) => {
  return (
    <div className="xp-window">
      <div className="xp-window-header">
        <span>{title}</span>
        <button onClick={handleClose}>×</button>
      </div>
      <div className="xp-window-content">{children}</div>
    </div>
  );
};

export default XPWindow;