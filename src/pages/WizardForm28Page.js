import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import SectionSubHeader from "../components/SectionSubHeader";
import DescriptionCheckboxCard from "../components/Card/DescriptionCheckboxCard/DescriptionCheckboxCard";
import Button from "../components/Button";
import ButtonDisable from "../components/ButtonToggle/ButtonDisable";

const WizardForm28Page = props => {
  const { handleSubmit, handleDisable, disabled } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <SectionTitle titleBold="Medical" titleRegular="development" />
      <div className="flex" onClick={() => handleDisable(28)}>
        <SectionSubHeader subHeader="Allergies" />
        <ButtonDisable buttonToggleLabel="disable" disabled={disabled} />
      </div>
      <Field
        component={DescriptionCheckboxCard}
        checkboxInfo={[
          {
            cardKey: "A",
            cardNameCheckbox: "mdhAllergiesMedicine",
            cardNameDescription: "mdhAllergiesMedicineDescription",
            cardLabel: "Allergies to medicine",
            liClasses: "question__choice--full-width desc-checkbox",
            tabOrder: "1"
          },
          {
            cardKey: "B",
            cardNameCheckbox: "mdhAllergiesFood",
            cardNameDescription: "mdhAllergiesFoodDescription",
            cardLabel: "Allergies to food",
            liClasses: "question__choice--full-width desc-checkbox",
            tabOrder: "2"
          },
          {
            cardKey: "C",
            cardNameCheckbox: "mdhAllergiesOther",
            cardNameDescription: "mdh-allergies-other-description",
            cardLabel: "Other allergies",
            liClasses: "question__choice--full-width desc-checkbox",
            tabOrder: "3"
          }
        ]}
        label="Does this child"
        labelBold="currently"
        labelLast="have any of the following"
        name="mdh-allergies-group"
        classes="question question--thumbless"
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
})(WizardForm28Page);
