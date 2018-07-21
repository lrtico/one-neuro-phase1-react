import React from "react";
import "../../app.css";
import "./buttonToggleStyles.css";

function handleActive(event) {
  console.log("Make button go active now!");
  event.currentTarget.classList.toggle("toggleVis--active");
}

const ButtonToggle = props => {
  const { buttonToggleLabel } = props;
  return (
    <div className="toggleVis" onClick={handleActive}>
      <div className="btn__hover" />
      <span>{buttonToggleLabel}</span>
    </div>
  );
};

export default ButtonToggle;
