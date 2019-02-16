import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import DescriptionCheckboxCard from "../components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm18Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle
        titleBold="Medical &amp; development"
        titleRegular="history"
      />
      <div className="flex">
        <SectionSubHeader subHeader="Development" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: "A",
            cardNameCheckbox: "mdh-walking-difficulty",
            cardNameDescription: "mdh-walking-difficulty-description",
            cardLabel: "Walking difficulty",
            liClasses: "question__choice--full-width",
            tabOrder: "1"
          },
          {
            cardKey: "B",
            cardNameCheckbox: "mdh-unclear-speech",
            cardNameDescription: "mdh-unclear-speech-description",
            cardLabel: "Unclear speech",
            liClasses: "question__choice--full-width",
            tabOrder: "2"
          },
          {
            cardKey: "C",
            cardNameCheckbox: "mdh-feeding-problem",
            cardNameDescription: "mdh-feeding-problem-description",
            cardLabel: "Feeding problem",
            liClasses: "question__choice--full-width",
            tabOrder: "3"
          },
          {
            cardKey: "D",
            cardNameCheckbox: "mdh-underweight-problem",
            cardNameDescription: "mdh-underweight-problem-description",
            cardLabel: "Underweight problem",
            liClasses: "question__choice--full-width",
            tabOrder: "4"
          },
          {
            cardKey: "E",
            cardNameCheckbox: "mdh-overweight-problem",
            cardNameDescription: "mdh-overweight-problem-description",
            cardLabel: "Overweight problem",
            liClasses: "question__choice--full-width",
            tabOrder: "5"
          },
          {
            cardKey: "F",
            cardNameCheckbox: "mdh-colic",
            cardNameDescription: "mdh-colic-description",
            cardLabel: "Colic",
            liClasses: "question__choice--full-width",
            tabOrder: "6"
          },
          {
            cardKey: "G",
            cardNameCheckbox: "mdh-sleep-problem",
            cardNameDescription: "mdh-sleep-problem-description",
            cardLabel: "Sleep problem",
            liClasses: "question__choice--full-width",
            tabOrder: "7"
          },
          {
            cardKey: "H",
            cardNameCheckbox: "mdh-eating-problem",
            cardNameDescription: "mdh-eating-problem-description",
            cardLabel: "Eating problem",
            liClasses: "question__choice--full-width",
            tabOrder: "8"
          },
          {
            cardKey: "I",
            cardNameCheckbox: "mdh-learning-ride-bike",
            cardNameDescription: "mdh-learning-ride-bike-description",
            cardLabel: "Difficulty learning to ride a bike",
            liClasses: "question__choice--full-width",
            tabOrder: "9"
          },
          {
            cardKey: "J",
            cardNameCheckbox: "mdh-learning-skip",
            cardNameDescription: "mdh-learning-skip-description",
            cardLabel: "Difficulty learning how to skip",
            liClasses: "question__choice--full-width",
            tabOrder: "10"
          },
          {
            cardKey: "K",
            cardNameCheckbox: "mdh-learning-throw-catch",
            cardNameDescription: "mdh-learning-throw-catch-description",
            cardLabel: "Difficulty learning to throw or catch",
            liClasses: "question__choice--full-width",
            tabOrder: "11"
          }
        ]}
        label="Has this child"
        labelBold="experienced"
        labelLast="any of the following"
        name="mdh-development-issues-group"
        classes="question question--thumbless"
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
})(WizardForm18Page);
