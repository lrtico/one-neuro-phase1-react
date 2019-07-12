import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import DescriptionCheckboxCard from "../components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
import TextQuestion from "../components/TextQuestion";
import Button from "../components/Button";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm31Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex" onClick={() => handleDisable(31)}>
        <SectionSubHeader subHeader="Vision" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: "A",
            cardNameCheckbox: "mdhVisionProblems",
            cardNameDescription: "mdhVisionProblemsDescription",
            cardLabel: "Vision problems",
            liClasses: "question__choice--full-width desc-checkbox",
            tabOrder: "1"
          },
          {
            cardKey: "B",
            cardNameCheckbox: "mdhGlasses",
            cardNameDescription: "mdhGlassesDescription",
            cardLabel: "Wears glasses or contacts",
            liClasses: "question__choice--full-width desc-checkbox",
            tabOrder: "2"
          }
        ]}
        label="Does this child"
        labelBold="currently"
        labelLast="have any of the following"
        name="mdhVisionGroup"
        classes="question question--thumbless"
        disabled={disabled}
      />
      <Field
        alt="Calendar"
        src="img/icons-calendar-large.svg"
        component={TextQuestion}
        label="Date of most"
        labelBold="recent"
        labelLast="vision exam"
        name="mdhVisionExamDate"
        tabOrder="3"
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
})(WizardForm31Page);
