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
            cardName: "mdh-walking-difficulty",
            cardLabel: "Walking difficulty",
            liClasses: "question__choice--full-width",
            tabOrder: "1"
          },
          {
            cardKey: "B",
            cardName: "mdh-unclear-speech",
            cardLabel: "Unclear speech",
            liClasses: "question__choice--full-width",
            tabOrder: "2"
          },
          {
            cardKey: "C",
            cardName: "mdh-feeding-problem",
            cardLabel: "Feeding problem",
            liClasses: "question__choice--full-width",
            tabOrder: "3"
          },
          {
            cardKey: "D",
            cardName: "mdh-underweight-problem",
            cardLabel: "Underweight problem",
            liClasses: "question__choice--full-width",
            tabOrder: "4"
          },
          {
            cardKey: "E",
            cardName: "mdh-overweight-problem",
            cardLabel: "Overweight problem",
            liClasses: "question__choice--full-width",
            tabOrder: "5"
          },
          {
            cardKey: "F",
            cardName: "mdh-colic",
            cardLabel: "Colic",
            liClasses: "question__choice--full-width",
            tabOrder: "6"
          },
          {
            cardKey: "G",
            cardName: "mdh-sleep-problem",
            cardLabel: "Sleep problem",
            liClasses: "question__choice--full-width",
            tabOrder: "7"
          },
          {
            cardKey: "H",
            cardName: "mdh-eating-problem",
            cardLabel: "Eating problem",
            liClasses: "question__choice--full-width",
            tabOrder: "8"
          },
          {
            cardKey: "I",
            cardName: "mdh-learing-ride-bike",
            cardLabel: "Difficulty learning to ride a bike",
            liClasses: "question__choice--full-width",
            tabOrder: "9"
          },
          {
            cardKey: "J",
            cardName: "mdh-learning-skip",
            cardLabel: "Difficulty learning how to skip",
            liClasses: "question__choice--full-width",
            tabOrder: "10"
          },
          {
            cardKey: "K",
            cardName: "mdh-learning-throw-catch",
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
