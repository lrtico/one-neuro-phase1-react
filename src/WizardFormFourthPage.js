import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import TextQuestion from "./components/TextQuestion";
import Button from "./components/Button";

const WizardFormFourthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Reasons" titleRegular="for referral" />
      <Field
        component={TextQuestion}
        name="reason-referral-1"
        tabOrder="1"
        type="input"
        classes="question"
        materialIcon="arrow_right"
      />
      <Field
        component={TextQuestion}
        name="reason-referral-2"
        tabOrder="2"
        type="input"
        classes="question"
        materialIcon="arrow_right"
      />
      <Field
        component={TextQuestion}
        name="reason-referral-3"
        tabOrder="3"
        type="input"
        classes="question"
        materialIcon="arrow_right"
      />

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
})(WizardFormFourthPage);
