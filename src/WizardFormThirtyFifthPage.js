import React from "react";
import { FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import FormCardMultiInput from "./components/Card/FormCard/FormCardMultiInput";

const WizardFormThirtyFifthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Medical" titleRegular="care" />
        <div className="toggleVis">
          <div className="btn__hover" />
          <span>disable</span>
        </div>
      </div>

      <label>
        Has this child ever had a
        <strong> psychology or physciatric exam</strong>?
      </label>
      <FieldArray
        name="counseling-group"
        component={FormCardMultiInput}
        fieldInputs={[
          {
            inputName: "mc-psychology-exam-name",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Name",
            inputPlaceholder: "Name"
          },
          {
            inputName: "mc-psychology-exam-city",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "City",
            inputPlaceholder: "City"
          },
          {
            inputName: "mc-psychology-exam-date",
            inputType: "date",
            inputClasses: "cardTextInput",
            inputLabel: "Date",
            inputPlaceholder: "Date"
          },
          {
            inputName: "mc-psychology-exam-reason",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Reason",
            inputPlaceholder: "Reason"
          }
        ]}
      />

      <Button onClick={handleSubmit} buttonLabel="OK" />

      <button type="button" className="previous" onClick={previousPage}>
        Previous
      </button>
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirtyFifthPage);
