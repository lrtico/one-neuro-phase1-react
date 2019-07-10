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
          name="mdhDevelopment"
          component={FormCardStacked}
          cardInfo={[
            {
              cardFloat: true,
              cardLabel: "Turn over?",
              tabOrder: "1",
              card1Name: "mdhTurnOverMonths",
              card1Placeholder: "Months",
              card2Name: "mdhTurnOverYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Walk down stairs?",
              tabOrder: "2",
              card1Name: "mdhWalkDownStairsMonths",
              card1Placeholder: "Months",
              card2Name: "mdhWalkDownStairsYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Sit alone?",
              tabOrder: "3",
              card1Name: "mdhSitAloneMonths",
              card1Placeholder: "Months",
              card2Name: "mdhSitAloneYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Show interest in or attraction to sound?",
              tabOrder: "4",
              card1Name: "mdhAttractedSoundMonths",
              card1Placeholder: "Months",
              card2Name: "mdhAttractedSoundYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Crawl?",
              tabOrder: "5",
              card1Name: "mdhCrawlMonths",
              card1Placeholder: "Months",
              card2Name: "mdhCrawlYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Understand first words?",
              tabOrder: "6",
              card1Name: "mdhUnderstandWordsMonths",
              card1Placeholder: "Months",
              card2Name: "mdhUnderstandWordsYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Stand alone?",
              tabOrder: "7",
              card1Name: "mdhStandAloneMonths",
              card1Placeholder: "Months",
              card2Name: "mdhStandAloneYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Speak first words?",
              tabOrder: "8",
              card1Name: "mdhSpeakFirstWordsMonths",
              card1Placeholder: "Months",
              card2Name: "mdhSpeakFirstWordsYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Walk alone?",
              tabOrder: "9",
              card1Name: "mdhWalkAloneMonths",
              card1Placeholder: "Months",
              card2Name: "mdhWalkAloneYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Speak in sentences?",
              tabOrder: "10",
              card1Name: "mdhSpeakSentencesMonths",
              card1Placeholder: "Months",
              card2Name: "mdhSpeakSentencesYear",
              card2Placeholder: "Years",
              normalizeOnlyNums: true
            },
            {
              cardFloat: true,
              cardLabel: "Walk up stairs?",
              tabOrder: "11",
              card1Name: "mdhWalkUpStairsMonths",
              card1Placeholder: "Months",
              card2Name: "mdhWalkUpStairsYear",
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
