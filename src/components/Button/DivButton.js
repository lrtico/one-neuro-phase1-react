import React from "react";
import "../../app.css";
import "./buttonStyles.css";
import MaterialIcon from "react-google-material-icons";

const DivButton = props => {
  const { divButtonLabel, show } = props;
  return (
    <div className="btn-wrap flex--center-vertical" onClick={show}>
      <div className="btn">
        <div className="btn__hover" />
        <div className="btn__text flex--space-between">
          <span>{divButtonLabel}</span>
          <MaterialIcon icon="check" />
        </div>
      </div>
      <span>Press enter</span>
    </div>
  );
};

export default DivButton;
