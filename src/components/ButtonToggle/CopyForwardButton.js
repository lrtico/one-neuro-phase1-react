import React from 'react';
import PropTypes from 'prop-types';
import '../../app.css';
import './buttonToggleStyles.css';

function handleActive(event) {
  const button = event.currentTarget;

  // Toggle the class to make the button look different
  button.classList.toggle('toggleVis--active');
}

export const PillButton = props => {
  const { buttonToggleLabel } = props;

  return (
    <div className="toggleVis" onClick={handleActive}>
      <div className="btn__hover" />
      <span>{buttonToggleLabel}</span>
    </div>
  );
};

const CopyForwardButton = props => {
  const { buttonToggleLabel } = props;

  return (
    <div className="toggleVis" onClick={handleActive}>
      <div className="btn__hover" />
      <span>{buttonToggleLabel}</span>
    </div>
  );
};

PillButton.propTypes = {
  buttonToggleLabel: PropTypes.string,
};

CopyForwardButton.propTypes = {
  buttonToggleLabel: PropTypes.string,
};

export default CopyForwardButton;
