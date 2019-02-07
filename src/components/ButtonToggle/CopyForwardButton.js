import React from "react";
import "../../app.css";
import "./buttonToggleStyles.css";

const CopyForwardButton = props => {
  const { buttonToggleLabel } = props;

  return (
    <div className="toggleVis">
      <div className="btn__hover" />
      <span>{buttonToggleLabel}</span>
    </div>
  );
};

export default CopyForwardButton;
