import React from "react";
import "../../app.css";
import "./buttonToggleStyles.css";

function handleActive(event) {
  console.log("Make button go active now!");
  const button = event.currentTarget,
    buttonSpan = button.children[1],
    buttonTextValue = buttonSpan.textContent,
    parent = button.parentNode.parentNode,
    shield = parent.querySelector(".question__choice--radio-shield"),
    inputs = parent.querySelectorAll("input, label");

  console.log("Make span go now!", buttonTextValue);
  console.log("inputs: ", inputs);

  //Toggle the class to make the button look different
  button.classList.toggle("toggleVis--active");

  //Change the text
  if (
    buttonTextValue === "primary caregiver" ||
    buttonTextValue === "copy forward"
  ) {
    return false;
  } else if (buttonTextValue === "disabled" || buttonTextValue === "disable") {
    buttonSpan.textContent = "enable";
    //toggle class "content--disabled" to
    //all inputs in the section
    //all labels in the section
    inputs.forEach(function(input) {
      input.classList.add("content--disabled");
      input.value = "";
      input.readOnly = true;
    });
    shield.classList.add("content--disabled");
  } else {
    buttonSpan.textContent = "disable";
    inputs.forEach(function(input) {
      input.classList.remove("content--disabled");
      input.readOnly = false;
    });
    shield.classList.remove("content--disabled");
  }
}

const ButtonToggle = props => {
  const { buttonToggleLabel } = props;
  return (
    <div className="toggleVis" onClick={handleActive}>
      <div className="btn__hover" />
      <span>{buttonToggleLabel}</span>
    </div>
  );
};

export default ButtonToggle;
