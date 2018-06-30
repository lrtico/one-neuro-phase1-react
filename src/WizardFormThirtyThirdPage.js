import React from "react";
import { FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import FormCardMultiInput from "./components/Card/FormCard/FormCardMultiInput";

const WizardFormThirtyThirdPage = props => {
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
        Has this child ever had
        <strong> pshycology counseling or therapy</strong>?
      </label>
      <FieldArray
        name="counseling-group"
        component={FormCardMultiInput}
        inputs={[
          {
            inputName: "mc-counseling-name",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Name",
            inputPlaceholder: "Name"
          },
          {
            inputName: "mc-counseling-address",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Address",
            inputPlaceholder: "Address"
          },
          {
            inputName: "mc-counseling-phone",
            inputType: "tel",
            inputClasses: "cardTextInput",
            inputLabel: "Phone",
            inputPlaceholder: "Phone"
          },
          {
            inputName: "mc-counseling-reason",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Reason",
            inputPlaceholder: "Reason"
          },
          {
            inputName: "mc-counseling-date",
            inputType: "date",
            inputClasses: "cardTextInput",
            inputLabel: "Date",
            inputPlaceholder: "Date"
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
})(WizardFormThirtyThirdPage);
