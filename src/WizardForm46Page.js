import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";

const WizardForm46Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Other important" titleRegular="information" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="grid__half">
        <label>
          Is there anything else we should know that doesn’t appear on this or
          other forms, but that is or might be important?
        </label>
        <Field name="other-information" component="textarea" />
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
})(WizardForm46Page);
