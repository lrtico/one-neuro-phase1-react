import React from "react";
import { Field } from "redux-form";
import "./checkboxCardStyles.css";
import "../../../app.css";
import "../../Card/cardStyles.css";

const CheckboxEducationalCodeCard = ({
  label,
  labelBold,
  labelLast,
  checkboxInfo,
  classes,
  meta: { touched, error }
}) => {
  console.log("CheckboxEducationalCodeCard props, ", checkboxInfo);
  return (
    <div className={classes}>
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
              key={card.cardKey}
              className={
                card.liClasses == null
                  ? "question__choice"
                  : `${card.liClasses} question__choice`
              }
              tabIndex={card.tabIndex}
            >
              <Field name={card.cardName} type="checkbox" component="input" />
              <span className="question__tick--bg" />
              <span className="question__tick" />
              <div className="question__text-wrap flex flex--center-vertical">
                <div className="question__label">
                  <div className="question__letter">
                    <span>{card.cardKey}</span>
                  </div>
                </div>
                <div className="question__text-label">{card.cardLabel}</div>
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

export default CheckboxEducationalCodeCard;
