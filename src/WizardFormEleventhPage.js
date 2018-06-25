import React from "react";
import "./app.css";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import TextQuestion from "./components/TextQuestion";
import MaterialIcon from "react-google-material-icons";

function handleTick(event) {
  const tar = event.currentTarget;
  tar.parentNode.classList.toggle("question__checkbox--selected");
}

const renderBrothersSisters = ({ fields }) => (
  <div>
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
                id={`bs-choice${+1}`}
              />
              <label htmlFor={`bs-choice${+1}`}>Girl</label>
            </div>
            <div className="question-card__radio">
              <Field
                name={`${card}.gender`}
                type="radio"
                component="input"
                value="Boy"
                className="radio-visible"
                id={`bs-choice${+2}`}
              />
              <label htmlFor={`bs-choice${+2}`}>Boy</label>
            </div>
            <div className="question-card__radio">
              <Field
                name={`${card}.relationship`}
                type="radio"
                component="input"
                value="Sister"
                className="radio-visible"
                id={`bs-choice${+3}`}
              />
              <label htmlFor={`bs-choice${+3}`}>Sister</label>
            </div>
            <div className="question-card__radio">
              <Field
                name={`${card}.relationship`}
                type="radio"
                component="input"
                value="Brother"
                className="radio-visible"
                id={`bs-choice${+4}`}
              />
              <label htmlFor={`bs-choice${+4}`}>Brother</label>
            </div>
            <div className="question-card__radio">
              <Field
                name={`${card}.home`}
                type="radio"
                component="input"
                value="Yes"
                className="radio-visible"
                id={`bs-choice${+5}`}
              />
              <label htmlFor={`bs-choice${+5}`}>Lives at home</label>
            </div>
            <div className="question-card__radio">
              <Field
                name={`${card}.home`}
                type="radio"
                component="input"
                value="No"
                className="radio-visible"
                id={`bs-choice${+6}`}
              />
              <label htmlFor={`bs-choice${+6}`}>Not at home</label>
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
    <div className="question">
      <Field
        component={TextQuestion}
        label="How does this child"
        labelBold="get along"
        labelLast="with their brother(s) and sister(s)"
        name="bs-get-along"
        tabOrder="8"
        type="input"
        classes="question"
      />
    </div>
  </div>
);

const WizardFormEleventhPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Brothers &amp; Sisters" />
        <div className="toggleVis">
          <div className="btn__hover" />
          <span>disable</span>
        </div>
      </div>
      <FieldArray name="brothers-sisters" component={renderBrothersSisters} />

      <Button onClick={handleSubmit} buttonLabel="OK" />

      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormEleventhPage);
