import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import DescriptionCheckboxCard from "../components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm19Page = props => {
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
            cardNameCheckbox: "mdh-motor-skills-first-four",
            cardNameDescription: "mdh-motor-skills-first-four-description",
            cardLabel: "Motor skills",
            liClasses: "question__choice--full-width",
            tabOrder: "1"
          },
          {
            cardKey: "B",
            cardNameCheckbox: "mdh-temper-tantrum",
            cardNameDescription: "mdh-temper-tantrum-description",
            cardLabel: "Temper trantrums",
            liClasses: "question__choice--full-width",
            tabOrder: "2"
          },
          {
            cardKey: "C",
            cardNameCheckbox: "mdh-no-thrive-first-four",
            cardNameDescription: "mdh-no-thrive-first-four-description",
            cardLabel: "Failure to thrive",
            liClasses: "question__choice--full-width",
            tabOrder: "3"
          },
          {
            cardKey: "D",
            cardNameCheckbox: "mdh-separation-anxiety",
            cardNameDescription: "mdh-separation-anxiety-description",
            cardLabel: "Separating from parents",
            liClasses: "question__choice--full-width",
            tabOrder: "4"
          },
          {
            cardKey: "E",
            cardNameCheckbox: "mdh-excessive-crying",
            cardNameDescription: "mdh-excessive-crying-description",
            cardLabel: "Excessive crying",
            liClasses: "question__choice--full-width",
            tabOrder: "5"
          }
        ]}
        label="During this child's"
        labelBold="first four years,"
        labelLast="were there any special problems noted in the following areas"
        name="mdh-development-first-four-group"
        classes="question question--thumbless"
      />
      <div className="flex">
        <Field
          name="mdh-change-writing-hand-group"
          component={RadioCard}
          cardInfo={[
            {
              cardName: "mdh-change-writing-hand",
              cardKey: "A",
              cardLabel: "Yes",
              tabOrder: "6"
            },
            {
              cardName: "mdh-change-writing-hand",
              cardKey: "B",
              cardLabel: "No",
              tabOrder: "7"
            }
          ]}
          label="Has this child ever been forced to"
          labelBold="change writing hand"
          classes="question question--thumbless"
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
})(WizardForm19Page);
