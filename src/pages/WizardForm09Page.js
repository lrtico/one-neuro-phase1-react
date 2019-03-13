import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import TextQuestion from "../components/TextQuestion";
import Button from "../components/Button";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm09Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex" onClick={() => handleDisable(9)}>
        <SectionTitle titleBold="Childcare" titleRegular="info" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
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
        disabled={disabled}
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
        disabled={disabled}
      />
      <Field
        component={TextQuestion}
        name="cc-different-people"
        tabOrder="3"
        type="input"
        classes="question"
        label="Who are the"
        labelBold="different individuals"
        labelLast="that care for this child"
        disabled={disabled}
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
})(WizardForm09Page);
