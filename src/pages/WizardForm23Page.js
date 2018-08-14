import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import Button from "../components/Button";
import FormCardStacked from "../components/Card/FormCard/FormCardStacked";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm23Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex">
        <SectionSubHeader subHeader="Gastrointestinal" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="md-gastrointestinal-group"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "md-vomiting",
              cardLabel: "Excessive vomitting?",
              cardPlaceholder: "How often?",
              tabOrder: "1"
            },
            {
              cardName: "md-diarrhea",
              cardLabel: "Frequent diarrhea?",
              cardPlaceholder: "How often?",
              tabOrder: "2"
            },
            {
              cardName: "md-constipation",
              cardLabel: "Constipation?",
              cardPlaceholder: "How often?",
              tabOrder: "3"
            },
            {
              cardName: "md-stomach-pain",
              cardLabel: "Stomach pain?",
              cardPlaceholder: "How often?",
              tabOrder: "4"
            }
          ]}
          label="Does this child"
          labelBold="currently"
          labelLast="have any of the following problems"
          classes="question"
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
})(WizardForm23Page);
