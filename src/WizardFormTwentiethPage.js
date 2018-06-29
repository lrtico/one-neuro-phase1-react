import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import FormCardStacked from "./components/Card/FormCard/FormCardStacked";
import ButtonToggle from "./components/ButtonToggle";

const WizardFormTwentiethPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Medical" titleRegular="history" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="mh-illnesses-group"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "mh-measels",
              cardLabel: "Measels?",
              cardPlaceholder: "Years/months",
              tabOrder: "1"
            },
            {
              cardName: "mh-rheumatic-fever",
              cardLabel: "Rheumatic fever?",
              cardPlaceholder: "Years/months",
              tabOrder: "2"
            },
            {
              cardName: "mh-german-measels",
              cardLabel: "German measels?",
              cardPlaceholder: "Years/months",
              tabOrder: "3"
            },
            {
              cardName: "mh-diptheria",
              cardLabel: "Diptheria?",
              cardPlaceholder: "Years/months",
              tabOrder: "4"
            },
            {
              cardName: "mh-mumps",
              cardLabel: "Mumps?",
              cardPlaceholder: "Years/months",
              tabOrder: "5"
            },
            {
              cardName: "mh-understand-words",
              cardLabel: "Understand first words?",
              cardPlaceholder: "Years/months",
              tabOrder: "6"
            },
            {
              cardName: "mdh-meningitis",
              cardLabel: "Meningitis?",
              cardPlaceholder: "Years/months",
              tabOrder: "7"
            },
            {
              cardName: "mh-chicken-pox",
              cardLabel: "Chicken pox?",
              cardPlaceholder: "Years/months",
              tabOrder: "8"
            },
            {
              cardName: "mh-encephalitis",
              cardLabel: "Encephalitis?",
              cardPlaceholder: "Years/months",
              tabOrder: "9"
            },
            {
              cardName: "mh-tuberculosis",
              cardLabel: "Tuberculosis?",
              cardPlaceholder: "Years/months",
              tabOrder: "10"
            },
            {
              cardName: "mh-anemia",
              cardLabel: "Anemia?",
              cardPlaceholder: "Years/months",
              tabOrder: "11"
            },
            {
              cardName: "mh-whooping-cough",
              cardLabel: "Whooping cough?",
              cardPlaceholder: "Years/months",
              tabOrder: "12"
            },
            {
              cardName: "mh-fever-104",
              cardLabel: "Fever above 104 &deg;?",
              cardPlaceholder: "Years/months",
              tabOrder: "13"
            },
            {
              cardName: "mh-scarlet-fever",
              cardLabel: "Scarlet fever?",
              cardPlaceholder: "Years/months",
              tabOrder: "14"
            },
            {
              cardName: "mh-broken-bones",
              cardLabel: "Broken bones?",
              cardPlaceholder: "Years/months",
              tabOrder: "15"
            },
            {
              cardName: "mh-concussion",
              cardLabel: "Concussion?",
              cardPlaceholder: "Years/months",
              tabOrder: "16"
            },
            {
              cardName: "mh-coma-loss-consciousness",
              cardLabel: "Coma or loss of consiousness?",
              cardPlaceholder: "Years/months",
              tabOrder: "17"
            }
          ]}
          label="Please check the illnesses this child has had"
          labelBold="and indicate the months/years of age"
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
})(WizardFormTwentiethPage);
