import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import DescriptionCheckboxCard from "../components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm28Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex">
        <SectionSubHeader subHeader="Allergies" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: "A",
            cardNameCheckbox: "mdh-allergies-medicine",
            cardNameDescription: "mdh-allergies-medicine-description",
            cardLabel: "Allergies to medicine",
            liClasses: "question__choice--full-width",
            tabOrder: "1"
          },
          {
            cardKey: "B",
            cardNameCheckbox: "mdh-allergies-food",
            cardNameDescription: "mdh-allergies-food-description",
            cardLabel: "Allergies to food",
            liClasses: "question__choice--full-width",
            tabOrder: "2"
          },
          {
            cardKey: "C",
            cardNameCheckbox: "mdh-allergies-other",
            cardNameDescription: "mdh-allergies-other-description",
            cardLabel: "Other allergies",
            liClasses: "question__choice--full-width",
            tabOrder: "3"
          }
        ]}
        label="Does this child"
        labelBold="currently"
        labelLast="have any of the following"
        name="mdh-allergies-group"
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
})(WizardForm28Page);
