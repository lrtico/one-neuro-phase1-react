import React from 'react';
import PropTypes from 'prop-types';

const RequiredText = (props) => {
  const { visibility, customRequiredTextClass, left, requiredText } = props;
  return (
    <div
      className={
        visibility
          ? `${customRequiredTextClass} question__required-text--visible`
          : customRequiredTextClass
      }
      style={left && { left }}
    >
      <span>{requiredText}</span>
    </div>
  );
};

RequiredText.propTypes = {
  visibility: PropTypes.bool,
  customRequiredTextClass: PropTypes.string,
  left: PropTypes.number,
  requiredText: PropTypes.string,
};

export default RequiredText;
