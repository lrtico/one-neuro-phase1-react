import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBarStyles.css';
import MaterialIcon from 'react-google-material-icons';

const ProgressBar = (props) => {
  const { currentProgress, goBack } = props;
  return (
    <div className="progress">
      <div>
        <span>FINISH</span>
      </div>

      <div className="progress__bar__tick" />
      <div className="progress__bar">
        <div
          className="progress__bar__status"
          style={{ bottom: `${currentProgress * 2}%` }}
        >
          <span className="progress__bar__percent">
            {currentProgress} of 50
          </span>
          <div className="progress__button">
            <img src="img/icons-heart-love-solid.svg" alt="heart" />
          </div>
        </div>
      </div>
      <div className="progress__bar__tick" />
      {currentProgress <= 1 ? null : (
        <div className="progress__previous" onClick={goBack}>
          <MaterialIcon icon="arrow_back" />
          <div>
            <span>BACK</span>
          </div>
        </div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  currentProgress: PropTypes.number,
  goBack: PropTypes.func,
};

export default ProgressBar;
