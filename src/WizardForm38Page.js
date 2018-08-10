import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import TextQuestion from "./components/TextQuestion";
import ButtonToggle from "./components/ButtonToggle";

const WizardForm38Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Recreation &amp; Interests" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <Field
        alt="Basketball hoop"
        component={TextQuestion}
        label="What"
        labelBold="sport"
        labelLast="activities does this child enjoy"
        name="ri-activites-sports"
        src="img/icons-basketball-hoop.svg"
        tabOrder="1"
        type="input"
        classes="question"
      />
      <Field
        alt="Lego"
        component={TextQuestion}
        label="What"
        labelBold="hobbies"
        labelLast="does this child enjoy"
        name="ri-activites-hobbies"
        src="img/icons-lego-brick.svg"
        tabOrder="2"
        type="input"
        classes="question"
      />
      <Field
        alt="Question mark"
        component={TextQuestion}
        label="What"
        labelBold="other"
        labelLast="activities does this child enjoy"
        name="ri-activites-other"
        src="img/icons-question-mark-plain.svg"
        tabOrder="3"
        type="input"
        classes="question"
      />

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm38Page);
