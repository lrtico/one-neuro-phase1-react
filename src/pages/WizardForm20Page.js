import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import FormCardStacked from "../components/Card/FormCard/FormCardStacked";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm20Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex" onClick={() => handleDisable(20)}>
        <SectionTitle titleBold="Medical" titleRegular="history" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
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
              card1Name: "mhMeaselsMonths",
              card1Placeholder: "Months",
              card2Name: "mhMeaselsYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Rheumatic fever?",
              tabOrder: "2",
              card1Name: "mhRheumaticFeverMonths",
              card1Placeholder: "Months",
              card2Name: "mhRheumaticFeverYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "German measels?",
              tabOrder: "3",
              card1Name: "mhGermanMeaselsMonths",
              card1Placeholder: "Months",
              card2Name: "mhGermanMeaselsYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Diptheria?",
              tabOrder: "4",
              card1Name: "mhDiptheriaMonths",
              card1Placeholder: "Months",
              card2Name: "mhDiptheriaYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Mumps?",
              tabOrder: "5",
              card1Name: "mhMumpsMonths",
              card1Placeholder: "Months",
              card2Name: "mhMumpsYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Understand first words?",
              tabOrder: "6",
              card1Name: "mhUnderstandWordsMonths",
              card1Placeholder: "Months",
              card2Name: "mhUnderstandWordsYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Meningitis?",
              tabOrder: "7",
              card1Name: "mdhMeningitisMonths",
              card1Placeholder: "Months",
              card2Name: "mdhMeningitisYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Chicken pox?",
              tabOrder: "8",
              card1Name: "mhChickenPoxMonths",
              card1Placeholder: "Months",
              card2Name: "mhChickenPoxYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Encephalitis?",
              tabOrder: "9",
              card1Name: "mhEncephalitisMonths",
              card1Placeholder: "Months",
              card2Name: "mhEncephalitisYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Tuberculosis?",
              tabOrder: "10",
              card1Name: "mhTuberculosisMonths",
              card1Placeholder: "Months",
              card2Name: "mhTuberculosisYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Anemia?",
              tabOrder: "11",
              card1Name: "mhAnemiaMonths",
              card1Placeholder: "Months",
              card2Name: "mhAnemiaYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Whooping cough?",
              tabOrder: "12",
              card1Name: "mhWhoopingCoughMonths",
              card1Placeholder: "Months",
              card2Name: "mhWhoopingCoughYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Fever above 104 &deg;?",
              tabOrder: "13",
              card1Name: "mhFever104Months",
              card1Placeholder: "Months",
              card2Name: "mhFever104Year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Scarlet fever?",
              tabOrder: "14",
              card1Name: "mhScarletFeverMonths",
              card1Placeholder: "Months",
              card2Name: "mhScarletFeverYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Broken bones?",
              tabOrder: "15",
              card1Name: "mhBrokenBonesMonths",
              card1Placeholder: "Months",
              card2Name: "mhBrokenBonesYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Concussion?",
              tabOrder: "16",
              card1Name: "mhConcussionMonths",
              card1Placeholder: "Months",
              card2Name: "mhConcussionYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Coma or loss of consiousness?",
              tabOrder: "17",
              card1Name: "mhComaLossConsciousnessMonths",
              card1Placeholder: "Months",
              card2Name: "mhComaLossConsciousnessYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            }
          ]}
          label="At what"
          labelBold="age (i.e., 3 months 1 year)"
          labelLast="did this child have any the following illnesses"
          classes="question"
          disabled={disabled}
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
