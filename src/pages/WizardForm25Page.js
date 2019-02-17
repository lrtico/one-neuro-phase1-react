import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import Button from "../components/Button";
import FormCardStacked from "../components/Card/FormCard/FormCardStacked";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm25Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex">
        <SectionSubHeader subHeader="Musculoskeletal" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="md-musculoskeletal-group"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "md-muscle-pain",
              cardLabel: "Muscle pain?",
              cardPlaceholder: "When/where?",
              tabOrder: "1",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-clumsy-walk",
              cardLabel: "Clumsy walk?",
              cardPlaceholder: "How often?",
              tabOrder: "2",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-poor-posture",
              cardLabel: "Poor posture?",
              cardPlaceholder: "How often?",
              tabOrder: "3",
              normalizeCapitalizeWords: true
            },
            {
              cardName: "md-other-muscle-problems",
              cardLabel: "Other muscle problems?",
              cardPlaceholder: "How often?",
              tabOrder: "4",
              normalizeCapitalizeWords: true
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
})(WizardForm25Page);
