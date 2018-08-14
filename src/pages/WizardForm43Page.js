import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";
import Textarea from "../components/Textarea/Textarea";

const WizardForm43Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Religious &amp; racial ethnic"
        titleRegular="identification"
      />
      <div className="flex">
        <SectionSubHeader subHeader="How important are spiritual concerns in your life" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="grid__half">
        <Field
          name="rda-spiritual-importance"
          label="Label test"
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
})(WizardForm43Page);
