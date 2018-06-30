import React from "react";
import { Field } from "redux-form";
import "./formCard.css";
import "../../../app.css";
import MaterialIcon from "react-google-material-icons";

function handleTick(event) {
  const tar = event.currentTarget;
  tar.parentNode.classList.toggle("question__checkbox--selected");
}

const FormCardMultiInput = ({ fields }) => (
  <div className="question">
    <ul className="question__cards flex--wrap">
      <li className="question__card question__cards__button flex--center-vertical question__form-card">
        <button
          type="button"
          onClick={() => fields.push({})}
          className="flex--col-vertical-center flex--wrap"
        >
          <MaterialIcon icon="add_box" size={36} />
          <span>Add Record</span>
        </button>
        <div className="question__bg" />
      </li>
      {fields.map((multiInput, inputs, index) => (
        <li
          key={index}
          className="question__card question__form-card flex--col flex--center-vertical flex--space-between"
        >
          <div className="question__tick-wrap">
            <MaterialIcon icon="check" />
          </div>
          {inputs.map(input => (
            <Field
              name={`${multiInput}.${input.inputName}`}
              type={input.type}
              component="input"
              label={input.inputLabel}
              className={input.inputClasses}
              placeholder={input.inputPlaceholder}
            />
          ))}
          {/* <Field
            name={`${multiInput}.reason`}
            type="text"
            component="input"
            label="Reason"
            className="cardTextInput"
            placeholder="Reason"
          /> */}
          <div
            className="question__key-label flex flex--center-vertical"
            onClick={handleTick}
          >
            <div className="question__key">
              <span>{index + 1}</span>
            </div>
            <div className="question__key-text">Add</div>
          </div>
          <div className="question__bg" />
        </li>
      ))}
    </ul>
  </div>
);

export default FormCardMultiInput;
