import React from "react";
import "./ProgressBarStyles.css";
import MaterialIcon from "react-google-material-icons";

export default props => {
  return (
    <div className="progress">
      <div>
        <span>FINISH</span>
      </div>

      <div className="progress__bar__tick" />
      <div className="progress__bar">
        <div
          className="progress__bar__status"
          style={{ bottom: props.currentProgress * 2 + "%" }}
        >
          <span className="progress__bar__percent">
            {props.currentProgress} of 50
          </span>
          <div className="progress__button">
            <img src="img/icons-heart-love-solid.svg" alt="heart" />
          </div>
        </div>
      </div>
      <div className="progress__bar__tick" />
      {props.currentProgress <= 1 ? null : (
        <div className="progress__previous" onClick={props.goBack}>
          <MaterialIcon icon="arrow_back" />
          <div>
            <span>BACK</span>
          </div>
        </div>
      )}
    </div>
  );
};
