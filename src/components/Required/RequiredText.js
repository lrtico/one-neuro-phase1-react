import React from "react";

const RequiredText = props => (
  <div
    className="question__required-text"
    style={props.left && { left: props.left }}
  >
    <span>{props.requiredText}</span>
  </div>
);

export default RequiredText;
