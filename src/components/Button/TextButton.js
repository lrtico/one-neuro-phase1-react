import React from "react";
import "../../app.css";
import "./buttonStyles.css";

const TextButton = props => {
  const { textButtonLabel } = props;
  return (
    <div className="btn-wrap flex--center-vertical" onClick={props.onClick}>
      <div className="btn">
        <div className="btn__hover" />
        <div className="btn__text flex--space-between">
          <span>{textButtonLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default TextButton;
