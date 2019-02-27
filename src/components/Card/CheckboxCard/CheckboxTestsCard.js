import React from "react";
import { Field } from "redux-form";
import "./checkboxCardStyles.css";
import "../../../app.css";
import "../../Card/cardStyles.css";

const CheckboxCard = ({
  label,
  labelBold,
  labelLast,
  tabOrder,
  checkboxInfo,
  classes,
  thumbnail,
  thumbnailAlt,
  ...props,
  meta: { touched, error }
}) => {
  console.log("CheckboxTestsCard props, ", checkboxInfo);
  const { handleTestFilter } = props;
  return (
    <div className={classes}>
      {checkboxInfo.map((card, index) => (
        <div key={index}>
          <h4
            className="question__col-header"
            hidden={card.columnHeader == null ? true : false}
            key={card.columnHeader}
          >
            {card.columnHeader}
          </h4>
          <label hidden={label == null ? true : false}>
          {label} <strong>{labelBold}</strong> {labelLast}
          </label>
          <div className="question__input">
            <div className="question__multiple-choice">
              Select all that apply please
            </div>
            {/* Checkboxes */}
            <ul className="question__choices question__checkboxCard flex--wrap">
              <div className="question__choice--radio-shield" />
                {card.checkboxLabels.map((test, index) => (
                  <li
                  key={index}
                  className={
                    card.liClasses == null
                      ? "question__choice"
                      : `${card.liClasses} question__choice`
                  }
                  tabIndex={index}
                  //onClick={handleTick}
                >
                  <Field
                    name={test.Abbreviation.replace(/ /g, "-")}
                    type="checkbox"
                    component="input"
                    onClick={() => handleTestFilter(test.Abbreviation)}
                  />
                  <span className="question__tick--bg" />
                  <span className="question__tick" />
                  {thumbnail === undefined ? null : (
                    <div className="question__image-wrap">
                      <img src={thumbnail} alt={thumbnailAlt} />
                    </div>
                  )}
                  <div className="question__text-wrap flex flex--center-vertical">
                    <div className="question__label">
                      <div className="question__letter">
                        <span>{test.DomainId}</span>
                      </div>
                    </div>
                    <div className="question__text-label">{test.Abbreviation}</div>
                  </div>
                  <div className="question__bg" />
                </li>
                ))}
              {touched && error && <span>{error}</span>}
            </ul>
          </div>
        </div>
        ))
      }
    </div>
  );
};

export default CheckboxCard;
