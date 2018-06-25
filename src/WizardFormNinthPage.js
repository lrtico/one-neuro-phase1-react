import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import TextQuestion from "./components/TextQuestion";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";

const WizardFormNinthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Childcare" titleRegular="info" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <Field
        component={TextQuestion}
        name="cc-caregiver-gone"
        tabOrder="1"
        type="input"
        classes="question"
        label="Who"
        labelBold="takes care"
        labelLast="of this child if the caregivers are gone"
      />
      <Field
        component={TextQuestion}
        name="cc-hours-per-day"
        tabOrder="2"
        type="input"
        classes="question"
        label="How"
        labelBold="many hours per day"
        labelLast="is this child in a childcare setting"
      />
      <Field
        component={TextQuestion}
        name="cc-different-people"
        tabOrder="3"
        type="input"
        classes="question"
        label="How"
        labelBold="many different people"
        labelLast="care for this child (please explain)"
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
})(WizardFormNinthPage);
