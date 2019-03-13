import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import FormCardStacked from "../components/Card/FormCard/FormCardStacked";
import SectionSubHeader from "../components/SectionSubHeader";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm16Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Medical &amp; development"
        titleRegular="history"
      />
      <div className="flex" onClick={() => handleDisable(16)}>
        <SectionSubHeader subHeader="Early years" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <div className="flex">
        <Field
          name="mdh-development"
          component={FormCardStacked}
          cardInfo={[
            {
              cardFloat: true,
              cardLabel: "Turn over?",
              tabOrder: "1",
              card1Name: "mdh-turn-over-months",
              card1Placeholder: "Months",
              card2Name: "mdh-turn-over-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Walk down stairs?",
              tabOrder: "2",
              card1Name: "mdh-walk-down-stairs-months",
              card1Placeholder: "Months",
              card2Name: "mdh-walk-down-stairs-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Sit alone?",
              tabOrder: "3",
              card1Name: "mdh-sit-alone-months",
              card1Placeholder: "Months",
              card2Name: "mdh-sit-alone-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Show interest in or attraction to sound?",
              tabOrder: "4",
              card1Name: "mdh-attracted-sound-months",
              card1Placeholder: "Months",
              card2Name: "mdh-attracted-sound-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Crawl?",
              tabOrder: "5",
              card1Name: "mdh-crawl-months",
              card1Placeholder: "Months",
              card2Name: "mdh-crawl-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Understand first words?",
              tabOrder: "6",
              card1Name: "mdh-understand-words-months",
              card1Placeholder: "Months",
              card2Name: "mdh-understand-words-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Stand alone?",
              tabOrder: "7",
              card1Name: "mdh-stand-alone-months",
              card1Placeholder: "Months",
              card2Name: "mdh-stand-alone-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Speak first words?",
              tabOrder: "8",
              card1Name: "mdh-speak-first-words-months",
              card1Placeholder: "Months",
              card2Name: "mdh-speak-first-words-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Walk alone?",
              tabOrder: "9",
              card1Name: "mdh-walk-alone-months",
              card1Placeholder: "Months",
              card2Name: "mdh-walk-alone-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Speak in sentences?",
              tabOrder: "10",
              card1Name: "mdh-speak-sentences-months",
              card1Placeholder: "Months",
              card2Name: "mdh-speak-sentences-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Walk up stairs?",
              tabOrder: "11",
              card1Name: "mdh-walk-up-stairs-months",
              card1Placeholder: "Months",
              card2Name: "mdh-walk-up-stairs-year",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            }
          ]}
          label="At what"
          labelBold="age (i.e., 3 months 1 year)"
          labelLast="did this child do the following"
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
})(WizardForm16Page);
