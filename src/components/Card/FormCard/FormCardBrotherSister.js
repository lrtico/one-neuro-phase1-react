import React from "react";
import { Field } from "redux-form";
import "./formCard.css";
import "../../../app.css";
import MaterialIcon from "react-google-material-icons";

function handleTick(event) {
  const tar = event.currentTarget;
  tar.parentNode.classList.toggle("question__checkbox--selected");
}

const FormCardBrotherSister = ({ fields }) => (
  <div className="question">
    <ul className="question__cards flex--wrap">
      <li className="question__card question__cards__button flex--center-vertical question__form-card">
        <button
          type="button"
          onClick={() => fields.push({})}
          className="flex--col-vertical-center flex--wrap"
        >
          <MaterialIcon icon="add_box" size={36} />
          <span>New Record</span>
        </button>
        <div className="question__bg" />
      </li>
      {fields.map((card, index) => (
        <li
          key={index}
          className="question__card question__form-card flex--col flex--center-vertical flex--space-between"
        >
          <div className="question__tick-wrap">
            <MaterialIcon icon="check" />
          </div>
          <Field
            name={`${card}.age`}
            type="text"
            component="input"
            className="cardTextInput"
            placeholder="Age"
          />
          <div className="question-card__radio">
            <Field
              name={`${card}.gender`}
              type="radio"
              component="input"
              value="Girl"
              className="radio-visible"
              id={`bs-choice${index + 1}`}
            />
            <label htmlFor={`bs-choice${index + 1}`}>Girl</label>
          </div>
          <div className="question-card__radio">
            <Field
              name={`${card}.gender`}
              type="radio"
              component="input"
              value="Boy"
              className="radio-visible"
              id={`bs-choice${index + 2}`}
            />
            <label htmlFor={`bs-choice${index + 2}`}>Boy</label>
          </div>
          <div className="question-card__radio">
            <Field
              name={`${card}.relationship`}
              type="radio"
              component="input"
              value="Sister"
              className="radio-visible"
              id={`bs-choice${index + 3}`}
            />
            <label htmlFor={`bs-choice${index + 3}`}>Sister</label>
          </div>
          <div className="question-card__radio">
            <Field
              name={`${card}.relationship`}
              type="radio"
              component="input"
              value="Brother"
              className="radio-visible"
              id={`bs-choice${index + 4}`}
            />
            <label htmlFor={`bs-choice${index + 4}`}>Brother</label>
          </div>
          <div className="question-card__radio">
            <Field
              name={`${card}.home`}
              type="radio"
              component="input"
              value="Yes"
              className="radio-visible"
              id={`bs-choice${index + 5}`}
            />
            <label htmlFor={`bs-choice${index + 5}`}>Lives at home</label>
          </div>
          <div className="question-card__radio">
            <Field
              name={`${card}.home`}
              type="radio"
              component="input"
              value="No"
              className="radio-visible"
              id={`bs-choice${index + 6}`}
            />
            <label htmlFor={`bs-choice${index + 6}`}>Not at home</label>
          </div>
          <div
            className="question__key-label flex flex--center-vertical"
            onClick={handleTick}
          >
            <div className="question__key">
              <span>1</span>
            </div>
            <div className="question__key-text">Add</div>
          </div>
          <div className="question__bg" />
        </li>
      ))}
    </ul>
  </div>
);

export default FormCardBrotherSister;
