import React from "react";
import { FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import FormCardMultiInput from "../components/Card/FormCard/FormCardMultiInput";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm34Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Medical" titleRegular="care" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>

      <label>
        Has this child ever had a<strong> neurological exam</strong>?
      </label>
      <FieldArray
        name="nuerological-group"
        component={FormCardMultiInput}
        fieldInputs={[
          {
            inputName: "mc-nuerological-name",
            inputType: "text",
            inputClasses: "cardTextInput toCapitalize",
            inputLabel: "Name",
            inputPlaceholder: "Name",
            normalizeCapitalizeWords: true
          },
          {
            inputName: "mc-nuerological-address",
            inputType: "text",
            inputClasses: "cardTextInput toCapitalize",
            inputLabel: "Address",
            inputPlaceholder: "Address",
            normalizeCapitalizeWords: true
          },
          {
            inputName: "mc-nuerological-date",
            inputType: "date",
            inputClasses: "cardTextInput",
            inputLabel: "Date",
            inputPlaceholder: "Date"
          },
          {
            inputName: "mc-nuerological-reason",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Reason",
            inputPlaceholder: "Reason"
          }
        ]}
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
})(WizardForm34Page);
