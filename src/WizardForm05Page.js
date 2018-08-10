import React from "react";
import { FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import FormCardTextDate from "./components/Card/FormCard/FormCardTextDate";
import ButtonToggle from "./components/ButtonToggle";

const WizardForm05Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Records" titleRegular="reviewed" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <FieldArray name="records-reviewed" component={FormCardTextDate} />
      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm05Page);
