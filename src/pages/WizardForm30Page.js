import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import DescriptionCheckboxCard from "../components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
import TextQuestion from "../components/TextQuestion";
import Button from "../components/Button";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm30Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex" onClick={() => handleDisable(30)}>
        <SectionSubHeader subHeader="Hearing" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: "A",
            cardNameCheckbox: "mdhHearingEarInfection",
            cardNameDescription: "mdhHearingEarInfectionDescription",
            cardLabel: "Ear infections",
            liClasses: "question__choice--full-width desc-checkbox",
            tabOrder: "1"
          },
          {
            cardKey: "B",
            cardNameCheckbox: "mdhHearingProblems",
            cardNameDescription: "mdhHearingProblemsDescription",
            cardLabel: "Hearing problems",
            liClasses: "question__choice--full-width desc-checkbox",
            tabOrder: "2"
          },
          {
            cardKey: "C",
            cardNameCheckbox: "mdhHearingTubes",
            cardNameDescription: "mdhHearingTubesDescription",
            cardLabel: "Ear tubes",
            liClasses: "question__choice--full-width desc-checkbox",
            tabOrder: "3"
          }
        ]}
        label="Does this child"
        labelBold="currently"
        labelLast="have any of the following"
        name="mdhHearingGroup"
        classes="question question--thumbless"
        disabled={disabled}
      />
      <Field
        alt="Calendar"
        src="img/icons-calendar-large.svg"
        component={TextQuestion}
        label="Date of most"
        labelBold="recent"
        labelLast="hearing exam"
        name="mdhHearingExamDate"
        tabOrder="4"
        type="date"
        classes="question grid__half"
        disabled={disabled}
      />

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm30Page);
