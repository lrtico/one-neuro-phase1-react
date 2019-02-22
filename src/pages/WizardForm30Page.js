import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import DescriptionCheckboxCard from "../components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
import TextQuestion from "../components/TextQuestion";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm30Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex">
        <SectionSubHeader subHeader="Hearing" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: "A",
            cardNameCheckbox: "mdh-hearing-ear-infection",
            cardNameDescription: "mdh-hearing-ear-infection-description",
            cardLabel: "Ear infections",
            liClasses: "question__choice--full-width desc-checkbox",
            tabOrder: "1"
          },
          {
            cardKey: "B",
            cardNameCheckbox: "mdh-hearing-problems",
            cardNameDescription: "mdh-hearing-problems-description",
            cardLabel: "Hearing problems",
            liClasses: "question__choice--full-width desc-checkbox",
            tabOrder: "2"
          },
          {
            cardKey: "C",
            cardNameCheckbox: "mdh-hearing-tubes",
            cardNameDescription: "mdh-hearing-tubes-description",
            cardLabel: "Ear tubes",
            liClasses: "question__choice--full-width desc-checkbox",
            tabOrder: "3"
          }
        ]}
        label="Does this child"
        labelBold="currently"
        labelLast="have any of the following"
        name="mdh-hearing-group"
        classes="question question--thumbless"
      />
      <Field
        alt="Calendar"
        src="img/icons-calendar-large.svg"
        component={TextQuestion}
        label="Date of most"
        labelBold="recent"
        labelLast="hearing exam"
        name="mdh-hearing-exam-date"
        tabOrder="4"
        type="date"
        classes="question grid__half"
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
