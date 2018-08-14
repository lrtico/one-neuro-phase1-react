import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";
import Textarea from "../components/Textarea/Textarea";

const WizardForm46Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Other important" titleRegular="information" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="grid__half">
        <Field
          name="other-information"
          label="Is there anything else we should know that doesn't appear on this or other forms, but that is or might be important"
          component={Textarea}
          type="text"
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
})(WizardForm46Page);
