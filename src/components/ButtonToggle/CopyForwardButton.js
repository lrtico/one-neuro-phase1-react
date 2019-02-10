import React from "react";
import "../../app.css";
import "./buttonToggleStyles.css";

function handleActive(event) {
  const button = event.currentTarget;

  //Toggle the class to make the button look different
  button.classList.toggle("toggleVis--active");
}

const CopyForwardButton = props => {
  const { buttonToggleLabel } = props;

  return (
    <div className="toggleVis" onClick={handleActive}>
      <div className="btn__hover" />
      <span>{buttonToggleLabel}</span>
    </div>
  );
};

export default CopyForwardButton;
