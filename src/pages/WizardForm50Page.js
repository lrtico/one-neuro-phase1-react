import React from "react";
import { reduxForm } from "redux-form";
import validate from "../validate";
import Button from "../components/Button";
import Appendix from "../components/Test/Appendix";

const WizardForm50Page = props => {
  const { handleSubmit } = props;
  //console.log("Wizard50 props, ", props);
  return (
    <form className="col" onSubmit={handleSubmit}>
      <Appendix />
      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm50Page);
