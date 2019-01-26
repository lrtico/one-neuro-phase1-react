import React from "react";
import "../../app.css";
import "./buttonStyles.css";
import MaterialIcon from "react-google-material-icons";

const Button = props => {
  const { buttonLabel, cssClasses } = props;
  return (
    <div className="btn-wrap flex--center-vertical">
      <div className={cssClasses === undefined ? "btn" : `btn ${cssClasses}`}>
        <div className="btn__hover" />
        <button className="btn__text flex--space-between">
          <span>{buttonLabel}</span>
          <MaterialIcon icon="check" />
        </button>
      </div>
      {/* <span>Press enter</span> */}
    </div>
  );
};

export default Button;
