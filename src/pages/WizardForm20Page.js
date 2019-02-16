import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import FormCardStacked from "../components/Card/FormCard/FormCardStacked";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm20Page = props => {
  const { handleSubmit } = props;
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
              cardFloat: true,
              cardLabel: "Measels?",
              tabOrder: "1",
              card1Name: "mh-measels-months",
              card1Placeholder: "Months",
              card2Name: "mh-measels-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Rheumatic fever?",
              tabOrder: "2",
              card1Name: "mh-rheumatic-fever-months",
              card1Placeholder: "Months",
              card2Name: "mh-rheumatic-fever-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "German measels?",
              tabOrder: "3",
              card1Name: "mh-german-measels-months",
              card1Placeholder: "Months",
              card2Name: "mh-german-measels-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Diptheria?",
              tabOrder: "4",
              card1Name: "mh-diptheria-months",
              card1Placeholder: "Months",
              card2Name: "mh-diptheria-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Mumps?",
              tabOrder: "5",
              card1Name: "mh-mumps-months",
              card1Placeholder: "Months",
              card2Name: "mh-mumps-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Understand first words?",
              tabOrder: "6",
              card1Name: "mh-understand-words-months",
              card1Placeholder: "Months",
              card2Name: "mh-understand-words-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Meningitis?",
              tabOrder: "7",
              card1Name: "mdh-meningitis-months",
              card1Placeholder: "Months",
              card2Name: "mdh-meningitis-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Chicken pox?",
              tabOrder: "8",
              card1Name: "mh-chicken-pox-months",
              card1Placeholder: "Months",
              card2Name: "mh-chicken-pox-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Encephalitis?",
              tabOrder: "9",
              card1Name: "mh-encephalitis-months",
              card1Placeholder: "Months",
              card2Name: "mh-encephalitis-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Tuberculosis?",
              tabOrder: "10",
              card1Name: "mh-tuberculosis-months",
              card1Placeholder: "Months",
              card2Name: "mh-tuberculosis-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Anemia?",
              tabOrder: "11",
              card1Name: "mh-anemia-months",
              card1Placeholder: "Months",
              card2Name: "mh-anemia-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Whooping cough?",
              tabOrder: "12",
              card1Name: "mh-whooping-cough-months",
              card1Placeholder: "Months",
              card2Name: "mh-whooping-cough-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Fever above 104 &deg;?",
              tabOrder: "13",
              card1Name: "mh-fever-104-months",
              card1Placeholder: "Months",
              card2Name: "mh-fever-104-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Scarlet fever?",
              tabOrder: "14",
              card1Name: "mh-scarlet-fever-months",
              card1Placeholder: "Months",
              card2Name: "mh-scarlet-fever-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Broken bones?",
              tabOrder: "15",
              card1Name: "mh-broken-bones-months",
              card1Placeholder: "Months",
              card2Name: "mh-broken-bones-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Concussion?",
              tabOrder: "16",
              card1Name: "mh-concussion-months",
              card1Placeholder: "Months",
              card2Name: "mh-concussion-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Coma or loss of consiousness?",
              tabOrder: "17",
              card1Name: "mh-coma-loss-consciousness-months",
              card1Placeholder: "Months",
              card2Name: "mh-coma-loss-consciousness-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            }
          ]}
          label="At what"
          labelBold="age (i.e., 3 months 1 year)"
          labelLast="did this child have any the following illnesses"
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
})(WizardForm20Page);
