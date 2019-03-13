import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../../validate";
import "./descriptionCheckboxCardStyles.css";
import "../../../app.css";
import "../../Card/cardStyles.css";
import MaterialIcon from "react-google-material-icons";

// function handleTick(event) {
//   const tar = event.currentTarget.parentNode;
//   tar.classList.toggle("question__checkbox--selected");
//   console.log("hanleTick fired, ", event);
// }

const handleTextboxTick = (event, name, props) => {
  const tar = event.currentTarget;
  tar.parentNode.parentNode.classList.add("question__checkbox--selected");
  //console.log("handleTextboxTick's input value = ", tar.value);
  props.change(name, true);
};

const handleTextBoxClear = event => {
  const tar = event.currentTarget;
  const val = tar.value;
  //console.log("onBlur fired", tar, val);
  if (val === "") {
    tar.parentNode.parentNode.classList.remove("question__checkbox--selected");
  }
};

const DescriptionCheckboxCard = ({
  label,
  labelBold,
  labelLast,
  checkboxInfo,
  classes,
  liClasses,
  cardName,
  disabled,
  cardNameDescription,
  ...props
}) => {
  console.log("DescriptionCheckboxCard props = ", props);
  return (
    <div className={disabled ? `${classes} content--disabled` : classes}>
      <label>
        {label} <strong>{labelBold}</strong> {labelLast}?
      </label>
      <div className="question__input">
        <div className="question__multiple-choice">
          Select all that apply please
        </div>
        {/* Checkboxes */}
        <ul className="question__choices question__checkboxCard flex--wrap">
          <div
            className={
              disabled
                ? "question__choice--radio-shield content--disabled"
                : "question__choice--radio-shield"
            }
          />
          {checkboxInfo.map(card => (
            <li
              key={card.cardNameCheckbox}
              className={
                card.liClasses == null
                  ? "question__choice"
                  : `${card.liClasses} question__choice`
              }
              //tabIndex={card.tabOrder}
              // onClick={handleTick}
            >
              <div className="desc-checkbox__checkbox question__text-wrap flex flex--center-vertical">
                <div className="question__label">
                  <div className="question__letter">
                    <span>{card.cardKey}</span>
                  </div>
                </div>
                <div className="question__text-label">{card.cardLabel}</div>
                <Field
                  name={card.cardNameCheckbox}
                  type="checkbox"
                  component="input"
                  className="desc-checkbox__checkbox__input"
                />
                <span className="question__tick--bg" />
                <span className="question__tick" />
                <div className="question__bg desc-checkbox__bg" />
              </div>

              {card.thumbnail === undefined ? null : (
                <div className="question__image-wrap">
                  <img src={card.thumbnail} alt={card.thumbnailAlt} />
                </div>
              )}
              <div className="desc-checkbox__desc question__text-wrap flex flex--center-vertical">
                <div className="question__text-label">Description:</div>
                <Field
                  name={card.cardNameDescription}
                  component="input"
                  type="text"
                  className="desc-checkbox__desc__input"
                  onKeyUp={event =>
                    handleTextboxTick(event, card.cardNameCheckbox, props)
                  }
                  onBlur={event => handleTextBoxClear(event)}
                />
                <div className="question__tick-wrap">
                  <MaterialIcon icon="check" />
                </div>
                <div className="question__bg" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(DescriptionCheckboxCard);
//export default DescriptionCheckboxCard;
