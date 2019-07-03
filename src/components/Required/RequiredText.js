import React from "react";

const RequiredText = props => (
  <div
    className={
      props.visibility
        ? `${props.customRequiredTextClass} question__required-text--visible`
        : props.customRequiredTextClass
    }
    style={props.left && { left: props.left }}
  >
    <span>{props.requiredText}</span>
  </div>
);

export default RequiredText;
