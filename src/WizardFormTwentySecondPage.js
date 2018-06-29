import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import SectionSubHeader from "./components/SectionSubHeader";
import Button from "./components/Button";
import FormCardStacked from "./components/Card/FormCard/FormCardStacked";
import ButtonToggle from "./components/ButtonToggle";

const WizardFormTwentySecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex">
        <SectionSubHeader subHeader="Cardiovascular" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="md-cardiovascular-group"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "md-physical-exertion",
              cardLabel:
                "Shortness of breath or dizziness with physical exertion?",
              cardPlaceholder: "How often?",
              tabOrder: "1"
            },
            {
              cardName: "md-activity-limits",
              cardLabel: "Activity limitation due to heart condition?",
              cardPlaceholder: "How often?",
              tabOrder: "2"
            },
            {
              cardName: "md-heart-murmur",
              cardLabel: "Heart murmur?",
              cardPlaceholder: "How often?",
              tabOrder: "3"
            }
          ]}
          label="Does this child"
          labelBold="currently"
          labelLast="have any of the following problems"
          classes="question"
        />
      </div>

      <Button onClick={handleSubmit} buttonLabel="OK" />

      <button type="button" className="previous" onClick={previousPage}>
        Previous
      </button>
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormTwentySecondPage);
