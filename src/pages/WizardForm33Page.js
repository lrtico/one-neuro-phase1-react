import React from "react";
import { FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";
import FormCardMultiInput from "../components/Card/FormCard/FormCardMultiInput";

const WizardForm33Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Medical" titleRegular="care" />
        <div onClick={() => handleDisable(33)}>
          <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
        </div>
      </div>

      <label className={disabled ? "content--disabled" : null}>
        Has this child ever had
        <strong> psychology counseling or therapy</strong>?
      </label>
      <FieldArray
        name="counseling-group"
        component={FormCardMultiInput}
        disabled={disabled}
        fieldInputs={[
          {
            inputName: "mc-counseling-name",
            inputType: "text",
            inputClasses: "cardTextInput",
            inputLabel: "Name",
            inputPlaceholder: "*Name",
            normalizeCapitalizeWords: true
          },
          {
            inputName: "mc-counseling-address",
            inputType: "text",
            inputClasses: "cardTextInput toCapitalize",
            inputLabel: "Address",
            inputPlaceholder: "Address",
            normalizeCapitalizeWords: true
          },
          {
            inputName: "mc-counseling-phone",
            inputType: "tel",
            inputClasses: "cardTextInput",
            inputLabel: "Phone",
            inputPlaceholder: "Phone",
            normalizePhone: true
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
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm33Page);
