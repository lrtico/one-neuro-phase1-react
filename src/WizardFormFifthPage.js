import React from "react";
import { FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import FormCardTextDate from "./components/Card/FormCard/FormCardTextDate";

const WizardFormFifthPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Records" titleRegular="reviewed" />
        <div className="toggleVis">
          <div className="btn__hover" />
          <span>disable</span>
        </div>
      </div>
      <FieldArray name="records-reviewed" component={FormCardTextDate} />

      <Button onClick={handleSubmit} buttonLabel="OK" />

      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFifthPage);
