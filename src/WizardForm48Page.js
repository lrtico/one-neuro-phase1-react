import React from "react";
import "./app.css";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";

const WizardForm48Page = props => {
  const { handleSubmit } = props;

  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Diagnostic" titleRegular="considerations" />
        <div className="toggleVis">
          <div className="btn__hover" />
          <span>disable</span>
        </div>
      </div>
      <div className="grid__half">
        <label>DSM-5 diagnosis (ICD-10)</label>
        <Field name="diagnostic-considerations" component="textarea" />
      </div>
      <div className="grid__half">
        <label>Educational classification</label>
        <Field name="educational-classification" component="textarea" />
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
})(WizardForm48Page);
