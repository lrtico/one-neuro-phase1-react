import React from "react";
import "./app.css";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import TextQuestion from "./components/TextQuestion";
import FormCardBrotherSister from "./components/Card/FormCard/FormCardBrotherSister";
import ButtonToggle from "./components/ButtonToggle";

const WizardForm11Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Brothers &amp; Sisters" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <FieldArray name="brothers-sisters" component={FormCardBrotherSister} />

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

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm11Page);
