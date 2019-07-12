import React from "react";
import { FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import FormCardMultiInput from "../components/Card/FormCard/FormCardMultiInput";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm35Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Medical" titleRegular="care" />
        <div onClick={() => handleDisable(35)}>
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
      </div>

      <label className={disabled ? "content--disabled" : null}>
        Has this child ever had a<strong> Psychiatric evaluation</strong>?
      </label>
      <FieldArray
        name="psychology-group"
        component={FormCardMultiInput}
        disabled={disabled}
        fieldInputs={[
          {
            inputName: "mcPsychologyExamName",
            inputType: "text",
            inputClasses: "cardTextInput toCapitalize",
            inputLabel: "Name",
            inputPlaceholder: "Name",
            normalizeCapitalizeWords: true
          },
          {
            inputName: "mcPsychologyExamCity",
            inputType: "text",
            inputClasses: "cardTextInput toCapitalize",
            inputLabel: "City",
            inputPlaceholder: "City",
            normalizeCapitalizeWords: true
          },
          {
            inputName: "mcPsychologyExamDate",
            inputType: "date",
            inputClasses: "cardTextInput",
            inputLabel: "Date",
            inputPlaceholder: "Date"
          },
          {
            inputName: "mcPsychologyExamReason",
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
})(WizardForm35Page);
