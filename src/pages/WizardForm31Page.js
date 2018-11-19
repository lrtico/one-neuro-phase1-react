import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import DescriptionCheckboxCard from "../components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
import TextQuestion from "../components/TextQuestion";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm31Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex">
        <SectionSubHeader subHeader="Vision" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: "A",
            cardNameCheckbox: "mdh-vision-problems",
            cardNameDescription: "mdh-vision-problems-description",
            cardLabel: "Vision problems",
            liClasses: "question__choice--full-width",
            tabOrder: "1"
          },
          {
            cardKey: "B",
            cardNameCheckbox: "mdh-glasses",
            cardNameDescription: "mdh-glasses-description",
            cardLabel: "Wears glasses or contacts",
            liClasses: "question__choice--full-width",
            tabOrder: "2"
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
        labelLast="vision exam"
        name="mdh-vision-exam-date"
        tabOrder="3"
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
})(WizardForm31Page);
