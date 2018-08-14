import React from "react";
import { Field } from "redux-form";
import "./checkboxCardStyles.css";
import "../../../app.css";
import "../../Card/cardStyles.css";
import { randomId } from "../../../utils/Helpers";
import MaterialIcon from "react-google-material-icons";

function handleTick(event) {
  const tar = event.currentTarget;
  tar.classList.toggle("question__checkbox--selected");
}

// function handleCheckbox(event) {
//   const tar = event.currentTarget;
//   tar.parentNode.parentNode.firstChild.setAttribute("checked", "checked");
//   tar.parentNode.parentNode.firstChild.value = true;
// }

const CheckboxCard = ({
  label,
  labelBold,
  labelLast,
  tabOrder,
  checkboxInfo,
  classes,
  thumbnail,
  thumbnailAlt,
  columnHeader,
  meta: { touched, error }
}) => {
  return (
    <div className={classes}>
      <h4
        className="question__col-header"
        hidden={columnHeader == null ? true : false}
      >
        {columnHeader}
      </h4>
      <label hidden={label == null ? true : false}>
        {label} <strong>{labelBold}</strong> {labelLast}?
      </label>
      <div className="question__input">
        <div className="question__multiple-choice">
          Select all that apply please
        </div>
        {/* Checkboxes */}
        <ul className="question__choices question__checkboxCard flex--wrap">
          <div className="question__choice--radio-shield" />
          {checkboxInfo.map(card => (
            <li
              key={randomId()}
              className={
                card.liClasses == null
                  ? "question__choice"
                  : `${card.liClasses} question__choice`
              }
              tabIndex={tabOrder}
              onClick={handleTick}
            >
              <Field name={card.cardName} type="checkbox" component="input" />
              <div className="question__tick-wrap">
                <MaterialIcon icon="check" />
              </div>
              {thumbnail === undefined ? null : (
                <div className="question__image-wrap">
                  <img src={thumbnail} alt={thumbnailAlt} />
                </div>
              )}
              <div className="question__text-wrap flex flex--center-vertical">
                <div className="question__label">
                  <div className="question__letter">
                    <span>{card.cardKey}</span>
                  </div>
                </div>
                <div className="question__text-label">{card.cardLabel}</div>
                {/* <Field
                  name="test"
                  component="input"
                  type="text"
                  onClick={handleCheckbox}
                /> */}
              </div>
              <div className="question__bg" />
            </li>
          ))}
          {touched && error && <span>{error}</span>}
        </ul>
      </div>
    </div>
  );
};

export default CheckboxCard;
