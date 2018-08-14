import React from "react";
import { reduxForm } from "redux-form";
import validate from "../validate";
import "../app.css";
import Button from "../components/Button";

const WizardForm01Page = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <section className="col grid__half">
        <p>
          Welcome back! I’m here to assist you in creating another amazing
          report to help someone in need.
        </p>
        <Button onClick={handleSubmit} buttonLabel="OK" />
      </section>
    </form>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm01Page);
