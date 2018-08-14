import React from "react";
import { Field } from "redux-form";
import "./formCard.css";
import "../../../app.css";
import MaterialIcon from "react-google-material-icons";
// import Button from "../Button";
// import AddCard from "../AddCard";

function handleTick(event) {
  const tar = event.currentTarget;
  const addDeleteEl = tar.children[1];
  tar.parentNode.classList.toggle("question__checkbox--selected");
  addDeleteEl.classList.toggle("question__key-text--visible");
}

const FormCardTextDate = ({ recordsReviewed, input, fields }) => (
  <div className="question">
    <ul className="question__cards flex--wrap">
      <div className="question__choice--radio-shield" />
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
      {/* <AddCard onClick={() => fields.push({})} /> */}
      {/* <Button buttonLabel="Add" onClick={() => fields.push({})} /> */}
      {fields.map((recordsReviewed, index) => (
        <li
          key={index}
          className="question__card question__form-card flex--col flex--center-vertical flex--space-between"
        >
          <div className="question__tick-wrap">
            <MaterialIcon icon="check" />
          </div>
          <Field
            name={`${recordsReviewed}.title`}
            type="text"
            component="input"
            label="Title"
            className="cardTextInput"
            placeholder="Type a title"
          />
          <Field
            name={`${recordsReviewed}.date`}
            type="date"
            component="input"
            label="Date"
            className="cardTextInput"
          />
          <div
            className="question__key-label flex flex--center-vertical"
            onClick={handleTick}
          >
            <div className="question__key">
              <span>{index + 1}</span>
            </div>
            <div className="question__key-text">
              <span>Add</span>
              <span>Delete</span>
            </div>
          </div>
          <div className="question__bg" />
        </li>
      ))}
    </ul>
  </div>
);

export default FormCardTextDate;
