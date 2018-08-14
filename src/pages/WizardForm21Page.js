import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import Button from "../components/Button";
import FormCardStacked from "../components/Card/FormCard/FormCardStacked";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm21Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex">
        <SectionSubHeader subHeader="Respitory" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="md-respitory-group"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "md-colds",
              cardLabel: "Frequent colds?",
              cardPlaceholder: "How often?",
              tabOrder: "1"
            },
            {
              cardName: "md-chronic-cough",
              cardLabel: "Chronic cough?",
              cardPlaceholder: "How often?",
              tabOrder: "2"
            },
            {
              cardName: "md-asthma",
              cardLabel: "Asthma?",
              cardPlaceholder: "How often?",
              tabOrder: "3"
            },
            {
              cardName: "md-hay-fever",
              cardLabel: "Hay fever?",
              cardPlaceholder: "How often?",
              tabOrder: "4"
            },
            {
              cardName: "md-sinus-condition",
              cardLabel: "Sinus condition?",
              cardPlaceholder: "How often?",
              tabOrder: "5"
            }
          ]}
          label="Please indicate if this child"
          labelBold="currently"
          labelLast="has any of the following problems. If yes, how often"
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
})(WizardForm21Page);
