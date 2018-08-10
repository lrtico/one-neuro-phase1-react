import React from "react";
import "./app.css";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import ButtonToggle from "./components/ButtonToggle";

const WizardForm49Page = props => {
  const { handleSubmit } = props;

  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Recommendations" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="grid__two-thirds">
        <label>Recommendations go here</label>
        <Field name="recommendations" component="textarea" />
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
})(WizardForm49Page);
