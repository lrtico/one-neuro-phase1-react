import React, { Component } from "react";
import "../../app.css";
import "./buttonToggleStyles.css";

class ButtonToggle extends Component {
  handleActive = (event, disabled) => {
    // console.log("Make button go active now!");
    const button = event.currentTarget,
      buttonSpan = button.children[1],
      buttonTextValue = buttonSpan.textContent,
      parent = button.parentNode.parentNode,
      shields = parent.querySelectorAll(".question__choice--radio-shield"),
      inputs = parent.querySelectorAll("input, label, textarea");

    // console.log("Make span go now!", buttonTextValue);
    // console.log("inputs: ", inputs);
    console.log("Disabled val = ", disabled);

    //Toggle the class to make the button look different **Handled in PageList's state now
    //button.classList.toggle("toggleVis--active");

    //Change the text
    if (
      buttonTextValue === "primary caregiver" ||
      buttonTextValue === "copy forward" ||
      buttonTextValue === "add"
    ) {
      return false;
    } else if (
      buttonTextValue === "disabled" ||
      buttonTextValue === "disable"
    ) {
      //buttonSpan.textContent = "enable";
      //toggle class "content--disabled" to
      //all inputs in the section
      //all labels in the section
      inputs.forEach(function(input) {
        input.classList.add("content--disabled");
        input.value = "";
        input.readOnly = true;
      });
      shields.forEach(function(shield) {
        shield.classList.add("content--disabled");
      });
    } else {
      buttonSpan.textContent = "disable";
      inputs.forEach(function(input) {
        input.classList.remove("content--disabled");
        input.readOnly = false;
      });
      shields.forEach(function(shield) {
        shield.classList.remove("content--disabled");
      });
    }
  };

  render() {
    const { buttonToggleLabel, disabled } = this.props;
    const { handleActive } = this;
    return (
      <div
        className={disabled ? "toggleVis toggleVis--active" : "toggleVis"}
        onClick={event => handleActive(event, disabled)}
      >
        <div className="btn__hover" />
        <span>{disabled ? "enable" : buttonToggleLabel}</span>
      </div>
    );
  }
}

export default ButtonToggle;
